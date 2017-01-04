var Page = function ( obj ) {
    
    this.title = obj.title;
    this.type = obj.type;
    this.src = obj.src;
    this.transition = obj.transition;
    this.notes = obj.notes;
    this.widget = obj.widget;
    this.widgetSegments = {};
    this.imgType = obj.imageFormat;

    this.isKaltura = false;
    this.isAudio = false;
    this.mediaPlayer = null;
    this.isVideo = null;
    this.isPlaying = false;
    this.transcript = null;
    this.transcriptLoaded = false;
    this.transcriptInterval = null;
    this.hasImage = false;
    
    this.root = SBPLUS.manifest.sbplus_root_directory;
    this.kaltura = {
        loaded: SBPLUS.kalturaLoaded,
        id: SBPLUS.manifest.sbplus_kaltura.id,
        flavors: {
            low: SBPLUS.manifest.sbplus_kaltura.low,
            normal: SBPLUS.manifest.sbplus_kaltura.normal,
            high: SBPLUS.manifest.sbplus_kaltura.high
        }
    };
    
    this.mediaContent = SBPLUS.layout.mediaContent;
    this.mediaError = SBPLUS.layout.mediaError;
    
    if ( $( '#ap' ).length ) {
        videojs( 'ap' ).dispose();
    }
    
};

Page.prototype.getPageMedia = function() {
    
    var self = this;
    
    $( this.mediaError ).empty();
    
    SBPLUS.externalContentLoaded = false;
    
    switch ( self.type ) {
        
        case 'kaltura':
            
            if ( self.kaltura.loaded === false ) {
                
                $.getScript( self.root + '/scripts/libs/kaltura/mwembedloader.js', function() {
                    
                    $.getScript( self.root +  '/scripts/libs/kaltura/kwidgetgetsources.js', function() {
                        
                        SBPLUS.kalturaLoaded = true;
                        self.loadKalturaVideoData();
                        
                    } );
                    
                } );
                
            } else {
                
                self.loadKalturaVideoData();
                
            }
            
        break;
        
        case 'image-audio':
            
            self.isAudio = true;
            var caption = '';
            
            $.get( 'assets/pages/' + self.src + '.' + self.imgType, function() {
                self.hasImage = true;
            } ).fail( function() {
                self.showPageError( 'NO_IMG' );
            } ).always( function() {
                
                $.get( 'assets/audio/' + self.src + '.vtt', function( data ) {
                    caption = '<track kind="subtitles" label="English" srclang="en" src="' + this.url + '" />';
                    self.transcript = SBPLUS.stripScript( data );
                } ).fail( function() { 
                    caption = '';
                } ).always( function() {
                    
                    var html = '<video id="ap" class="video-js vjs-default-skin" webkit-playsinline>' + caption + '</video>';
                    
                    $( self.mediaContent ).html( html ).promise().done( function() {
                
                        self.renderVideoJS();
                        self.setWidgets();
                
                    } );
                
                } );
                
            } );
            
        break;
        
        default:
            self.setWidgets();
        break;
        
    }
    
};

Page.prototype.loadKalturaVideoData = function () {
    
    var self = this;
    self.isVideo = {
        
        flavors: {},
        status: {
            entry: 0,
            low: 0,
            normal: 0,
            high: 0
        },
        captionUrl: '',
        duration: ''
        
    };
    
    kWidget.getSources( {

        'partnerId': self.kaltura.id,
        'entryId': self.src,
        'callback': function( data ) {
            
            var captionId = data.captionId;
            var captionTrack = '';
            var html = '';
            
            self.isVideo.status.entry = data.status;
            self.isVideo.duration = data.duration;
            
            for( var i in data.sources ) {

                var source = data.sources[i];

                if ( source.flavorParamsId === self.kaltura.flavors.low ) {
                    
                    self.isVideo.flavors.low = source.src;
                    self.isVideo.status.low = source.status;

                }

                if ( source.flavorParamsId === self.kaltura.flavors.normal ) {

                    self.isVideo.flavors.normal = source.src;
                    self.isVideo.status.normal = source.status;

                }

                if ( source.flavorParamsId === self.kaltura.flavors.high ) {

                    self.isVideo.flavors.high = source.src;
                    self.isVideo.status.high = source.status;

                }

            }
            
            // entry video
            if ( self.isVideo.status.entry >= 1 && self.isVideo.status.entry <= 2 ) {
                
                // flavor videos
                if ( self.isVideo.status.low === 2 && self.isVideo.status.normal === 2 
                && self.isVideo.status.high === 2 ) {
                
                    if ( captionId !== null ) {
                    
                        self.isVideo.captionUrl = 'https://www.kaltura.com/api_v3/?service=caption_captionasset&action=servewebvtt&captionAssetId=' + captionId + '&segmentDuration=' + self.isVideo.duration + '&segmentIndex=1';
                        
                    }
                    
                    // inject HTML5 Video Tag
                    if ( self.isVideo.captionUrl.length > 0 ) {
                        captionTrack = '<track kind="subtitles" label="English" srclang="en" src="' + self.isVideo.captionUrl + '">';
                    }
                    
                    html = '<video id="ap" class="video-js vjs-default-skin" crossorigin="anonymous" width="100%" height="100%" webkit-playsinline>'+captionTrack+'</video>';
                
                    $( self.mediaContent ).html( html ).promise().done( function() {
                        
                        // call video js
                        self.isKaltura = true;
                        self.renderVideoJS();
                        
                    } );
                    
                    
                } else {
                    self.showPageError( 'KAL_NOT_READY' );
                }
                    
            } else {
                self.showPageError( 'KAL_ENTRY_NOT_READY' );
            }
            
            self.setWidgets();
            
        }

    } );
    
};

Page.prototype.renderVideoJS = function() {
    
    var self = this;
    var options = {
        
        techOrder: ["html5"],
        controls: true,
        autoplay: true,
        preload: "auto",
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
            fullscreenToggle: false
        },
        plugins: {
            replayButton: {}
        }

    };
    
    if ( self.isKaltura ) {
        options.plugins = Object.assign( options.plugins, { videoJsResolutionSwitcher: { 'default': 720 } } );
    }
    
    self.mediaPlayer = videojs( 'ap', options, function() {
        
        var player = this;
        
        if ( self.isKaltura ) {
            
            player.updateSrc( [
			
    			{ src: self.isVideo.flavors.low, type: "video/mp4", label: "low", res: 360 },
    			{ src: self.isVideo.flavors.normal, type: "video/mp4", label: "normal", res: 720 },
    			{ src: self.isVideo.flavors.high, type: "video/mp4", label: "high", res: 1080 }
    			
    		] );
            
        }
        
        if ( self.isAudio ) {
            
            if ( self.hasImage ) {
                player.poster( 'assets/pages/' + self.src + '.' + self.imgType );
            }
            
            player.src( { type: 'audio/mp3', src: 'assets/audio/' + self.src + '.mp3' } );
            
        }
        
        player.on(['waiting', 'pause'], function() {
          self.isPlaying = false;
        });
        
        player.on('playing', function() {
          self.isPlaying = true;
        });
            
    } );

}

Page.prototype.setWidgets = function() {
    
    var self = this;
    SBPLUS.clearWidgetSegment();
    
    if ( this.type != 'quiz' ) {
        
        var segmentCount = 0;
        
        if ( !SBPLUS.isEmpty( this.notes ) ) {
            
            SBPLUS.addSegment( 'Notes' );
            segmentCount++;
            
        }
        
        if ( !SBPLUS.isEmpty( self.transcript )
        || !SBPLUS.isEmpty( self.isVideo.captionUrl ) ) {
            
            SBPLUS.addSegment( 'Live Transcript' );
            segmentCount++;
            
        }
        
        if ( this.widget.length ) {
            
            var segments = $( $( this.widget ).find( 'segment' ) );
            
            segments.each( function() {
                
                var name = $( this ).attr( 'name' );
                var content = SBPLUS.stripScript( $( this ).text() );
                var key = 'sbplus_' + SBPLUS.sanitize( name );
                
                self.widgetSegments[key] = content;
                
                SBPLUS.addSegment( name );
                
                segmentCount++;
                
            } );
            
        }
        
        if ( segmentCount >= 2 ) {
            SBPLUS.showWidgetSegment();
        } else {
            SBPLUS.hideWidgetSegment();
        }
        
        SBPLUS.selectFirstSegment();
        
    }
    
}

Page.prototype.getWidgetContent = function( id ) {
    
    var self = this;
    
    switch( id ) {
        
        case 'sbplus_notes':
            
            displayWidgetContent( this.notes );
            
        break;
        
        case 'sbplus_livetranscript':
        
            if ( self.isAudio ) {
                
                displayWidgetContent( parseTranscript( self.transcript ) );
                self.startLiveTranscript();
                    
            } else {
                
                if ( self.transcriptLoaded === false ) {
                    
                    $.get( self.isVideo.captionUrl, function( d ) {
                    
                        self.transcriptLoaded = true;
                        self.transcript = SBPLUS.stripScript( d );
                        
                        self.transcript = parseTranscript( SBPLUS.stripScript( d ) );
                        
                        displayWidgetContent( self.transcript );
                        self.startLiveTranscript();
                        
                    } );
                    
                } else {
                     
                     displayWidgetContent( self.transcript );
                     self.startLiveTranscript();
                    
                }
             
            }
              
        break;
        
        default:
            
            displayWidgetContent( self.widgetSegments[id] );
            
        break;
        
    }
    
}

Page.prototype.startLiveTranscript = function() {
    
    var self = this;
    
    var ltArray = $( '.lt-wrapper .lt-line' );
    
    self.transcriptInterval = setInterval( function() {
            
        if ( self.isPlaying ) {
            
            ltArray.removeClass( 'current' );
            
            // TO DO: Refine loop to binary search
            ltArray.each( function() {
                
                if ( self.mediaPlayer.currentTime() >= $( this ).data('start') 
                && self.mediaPlayer.currentTime() <= $( this ).data('end') ) {
                    $( this ).addClass( 'current' );
                    return;
                }      
                
            } );
            
        } else {
            ltArray.removeClass( 'current' );
            window.clearInterval( this );
        }
        
    }, 500 );
    
}

Page.prototype.showPageError = function( type ) {
    
    var self = this;
    
    var msg = '';
    
    switch ( type ) {
                
        case 'NO_IMG':
        
            msg = '<p>The image for this Storybook Page could not be loaded. Please try refreshing your browser. Contact support if you continue to have issues.</p>';

        break;
        
        case 'KAL_NOT_READY':
            msg = '<p>The video for this Storybook Page is still processing and could not be loaded at the moment. Please try again later. Contact support if you continue to have issues.</p><p><strong>Expected video source</strong>: Kaltura video ID  ' + self.src + '<br><strong>Status</strong>:<br>';
            
            msg += 'Low &mdash; ' + getKalturaStatus( self.isVideo.status.low ) + '<br>';
            msg += 'Normal &mdash; ' + getKalturaStatus( self.isVideo.status.normal ) + '<br>';
            msg += 'High &mdash; ' + getKalturaStatus( self.isVideo.status.high ) + '</p>';
            
        break;
        
        case 'KAL_ENTRY_NOT_READY':
            msg = '<p>The video for this Storybook Page is still processing and could not be loaded at the moment. Please try again later. Contact support if you continue to have issues.</p><p><strong>Expected video source</strong>: Kaltura video ID ' + self.src + '<br><strong>Status</strong>: ';
            
            msg += getEntryKalturaStatus( self.isVideo.status.entry ) + '</p>';
            
        break;
        
    }
    
    $( self.mediaError ).html( msg );
    
}

function getKalturaStatus( code ) {
    var msg = '';
    switch( code ) {
        case -1:
        msg = 'ERROR';
        break;
        case 0:
        msg = 'QUEUED (queued for conversion)';
        break;
        case 1:
        msg = 'CONVERTING';
        break;
        case 2:
        msg = 'READY';
        break;
        case 3:
        msg = 'DELETED';
        break;
        case 4:
        msg = 'NOT APPLICABLE';
        break;
        default:
        msg = 'UNKNOWN ERROR (check main entry)';
        break;
        
    }
    return msg;
}

function getEntryKalturaStatus( code ) {
    var msg = '';
    switch( code ) {
        case -2:
        msg = 'ERROR IMPORTING';
        break;
        case -1:
        msg = 'ERROR CONVERTING';
        break;
        case 0:
        msg = 'IMPORTING';
        break;
        case 1:
        msg = 'PRECONVERT';
        break;
        case 2:
        msg = 'READY';
        break;
        case 3:
        msg = 'DELETED';
        break;
        case 4:
        msg = 'PENDING MODERATION';
        break;
        case 5:
        msg = 'MODERATE';
        break;
        case 6:
        msg = 'BLOCKED';
        break;
        default:
        msg = 'UNKNOWN ERROR (check entry ID)';
        break;
        
    }
    return msg;
}

function displayWidgetContent( str ) {
    
    $( SBPLUS.widget.content ).html( str )
        .addClass( 'fadeIn' ).one( 'webkitAnimationEnd mozAnimationEnd animationend', 
        function() {
            $( this ).removeClass( 'fadeIn' ).off();
        }
     );
    
}

function parseTranscript( str ) {
    
    var result = '<div class="lt-wrapper">';
    var tAry = str.replace(/\n/g, '<br>').split('<br>');
    
    tAry = cleanArray( tAry );

    if ( tAry[0].match(/\d{2}:\d{2}:\d{2}.\d{3}/g) 
    && tAry[1].match(/\d{2}:\d{2}:\d{2}.\d{3}/g) ) {
        tAry[0] = '';
        tAry = removeEmptyElements( tAry );
    }
    
    for (var i = 1; i < tAry.length; i += 2 ) {
        var cueParts = tAry[i-1].split( ' ' );
        result += '<span class="lt-line" data-start="' + toSeconds(cueParts[0]) + '" data-end="' + toSeconds(cueParts[2]) + '">' + tAry[i] + '</span> ';
        
    }
    
    result += '</div>';
    
    return result;
    
} 

function cleanArray( array ) {
    
    array = removeEmptyElements( array );
    array = array.splice( array.findIndex( firstCue ) );
    
    for ( var j = 0; j < array.length; j++ ) {
        
        if ( array[j].match(/\d{2}:\d{2}:\d{2}.\d{3}/g) ) {
            
            var innerSplit = array[j].split( ' ' );
            
            if ( innerSplit.length > 3 ) {
                array[j] = innerSplit.splice( 0, 3 ).join(' ');
            } else {
                continue;
            }
            
        } else {
            
            if ( array[j+1] !== undefined ) {
                
                if ( !array[j+1].match(/\d{2}:\d{2}:\d{2}.\d{3}/g) ) {
                    array[j] = array[j] + ' ' + array[j+1];
                    array[j+1] = '';
                }
                
            }
            
        }
        
    }
    
    return removeEmptyElements( array );
    
}

function firstCue( cue ) {
    return cue.match(/(00:00:00.000)/);
}

function removeEmptyElements( array ) {
    
    for ( var i = 0; i < array.length; i++ ) {
        if ( array[i] === '' ) {
            array.splice( i, 1 );
        }
    }
    
    return array;
    
}

function toSeconds( str, hour ) {
    
    var arr = str.split( ':' );
    
    if ( !hour ) {
        return Number( arr[0] * 60 ) * 60 + Number( arr[1] * 60 ) + Number( arr[2] );
    } else {
        return Number( arr[1] * 60 ) + Number( arr[2] ); 
    }
    
}