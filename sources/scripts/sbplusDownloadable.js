/***************************************
    Get Downloadable Item(s) Module
****************************************/

var sbplusDownloadable = ( function() {
    
    var videoPath, audioPath, transcriptPath, supplementPath, accent;
    var downloads = {};
    
    function getItems( _accent ) {
        
        accent = _accent;
        
        var fileName = $.fn.getRootDirectory();
        
        $.get( fileName + '.mp4', function() {
                
            videoPath = this.url;
            downloads.video = videoPath;
            
        } ).always( function() {
            
            $.get( fileName + '.mp3', function() {
            
                audioPath = this.url;
                downloads.audio = audioPath;
                
            } ).always( function() {
                
                $.get( fileName + '.pdf', function() {
            
                    transcriptPath = this.url;
                    downloads.pdf = transcriptPath;
                    
                } ).always( function() {
                    
                    $.get( fileName + '.zip', function() {
            
                        supplementPath = this.url;
                        downloads.zip = supplementPath;
                        
                    } ).always( function() {
                        
                        _render();
                        
                    } );
                    
                } );
                
            } );
            
        } );
        
    }
    
    function getEl( type, path ) {
        
        return '<div class="dl_item"><a class="' + type + '" href="' + path + '" role="button" tabindex="1" aria-label="Download ' + type + ' file" download><span class="icon-download"></span> ' + type.capitalize() + '</a></div>';
        
    }
    
    function getDownloads() {
        return downloads;
    }
    
    function _render() {
        
        var downloadables = '';
        
        if ( typeof videoPath !== 'undefined' ) {
            
            downloadables += getEl( 'video', videoPath );
            
        }
        
        if ( typeof audioPath !== 'undefined' ) {
            
            downloadables += getEl( 'audio', audioPath );
            
        }
        
        if ( typeof transcriptPath !== 'undefined' ) {
            
            downloadables += getEl( 'transcript', transcriptPath );
            
        }
        
        if ( typeof supplementPath !== 'undefined' ) {
            
            downloadables += getEl( 'supplement', supplementPath );
            
        }
        
        if ( supplementPath === undefined && transcriptPath === undefined && audioPath === undefined && videoPath === undefined ) {
            $( '.download_files' ).html('No downloadable file available.');
            setTimeout(function() {
                
                var parent = $( '.download_files' ).parent();
                var target = $( '.download_files' );
                
                parent.animate({'height': (parent.outerHeight() - target.outerHeight(true)) }, 500, 'linear');
                target.fadeOut();
                
            }, 3000);
        } else {
            $( '.download_files' ).hide().html( downloadables ).fadeIn( 500 );
            $( '.dl_item' ).css('background-color', $.fn.colorLum( accent, 0.4 ));
            
            $( '.dl_item' ).on( 'mouseover', function() {
            
                $( this ).css( "background-color", $.fn.colorLum( accent, 0.5 ) );
                
            } ).on( 'mouseout', function() {
                
                $( this ).css( "background-color", $.fn.colorLum( accent, 0.4 ) );
                
            } );
            
        }
        
    }
    
    return {
        
        get: getItems,
        getDownloads: getDownloads
        
    };
    
} )();