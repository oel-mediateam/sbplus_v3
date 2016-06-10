/***************************************
    Get Menu Module
****************************************/

var sbplusMenu = ( function() {
    
    var context;
    var manifest;
    var settingLoaded = '';
    
    function get( _manifest, _context ) {
        
        manifest = _manifest;
        context = _context;
        _render();
        
    }
    
    function _render() {
        
        _bindMenuEvents();
        
    }
    
    function _bindMenuEvents() {
 
        $( '.menuBtn' ).on( 'click', function() {
        
            $( this ).attr( 'aria-expanded', 'true' );
            $( '#menu_panel' ).removeClass( 'hide' ).attr( 'aria-expanded', 'true' );
            
            return false;
        
        } );
        
        
        $( '.backBtn' ).on( 'click', function() {
        
            _renderMenuItemDetails();
            
            return false;
        
        } );
        
        $( '.closeBtn' ).on( 'click', function() {
        
            $( '.menuBtn' ).attr( 'aria-expanded', 'false' );
            $( '#menu_panel' ).addClass( 'hide' ).attr( 'aria-expanded', 'false' );
            
            _renderMenuItemDetails();
            return false;
        
        } );
        
        $( '#showProfile' ).on( 'click', _onMenuItemClick );
        $( '#showGeneralInfo' ).on( 'click', _onMenuItemClick );
        $( '#showHelp' ).on( 'click', _onMenuItemClick );
        $( '#showSettings' ).on( 'click', _onMenuItemClick );
     
    }
    
    function _onMenuItemClick () {
    
        var title, content = ''; 
        var selector = '#' + this.id;
        var self = this;
        
        switch ( selector ) {
        
            case '#showProfile':
                
                title = 'Author Profile';
                content = context.authorBio;
                
            break;
            
            case '#showGeneralInfo':
                
                title = 'General Information';
                content = context.generalInfo;
                
            break;
            
            case '#showHelp':
                
                title = 'Help';
                content = manifest.sbplus_help_information;
                
            break;
            
            case '#showSettings':
                
                title = 'Settings';
                
                if ( settingLoaded.length === 0 ) {
                    
                    $.get( manifest.sbplus_root_directory + 'scripts/templates/settings.tpl', function( data ) {
                    
                        settingLoaded = data;
                        _renderMenuItemDetails( self, title, data );
                        _syncSettings();
                        
                    } );
                    
                } else {
                    
                    content = settingLoaded;
                    _syncSettings();
                    
                }
                
            break;
            
            default:
            
                title = '';
                content ='';
                
            break;
            
        }
        
        if ( title !== '' && content !== '' ) {
            
            _renderMenuItemDetails( self, title, content );
            
        }
        
        return false;
        
    }
    
    function _renderMenuItemDetails( el, title, content ) {
        
        if ( typeof el === 'undefined' ) {
            
            $( '.menu_item a' ).attr( 'aria-expanded', 'false' );
        
            $( '.menu_item_details' ).attr( 'aria-expanded', 'false' ).animate( { right: '-100%' }, 250, function() {
                
                $( this ).addClass( 'hide' );
            
            } );
            
            _unbindSaveBtn();
            
            return;
            
        }
        
        $( el ).attr( 'aria-expanded', 'true' );
        
        $( '.menu_item_details' ).attr( 'aria-expanded', 'true' );
        $( '.menu_item_details .navbar .title' ).html( title );
        $( '.menu_item_details .menu_item_content' ).html( content );
        $( '.menu_item_details' ).removeClass( 'hide' ).animate( { right: '0px' }, 250 );
        
        if ( $(el)[0].id === 'showSettings' ) {
            _bindSaveBtn();
        }
        
    }
    
    function _syncSettings() {
        
        // autoplay
        var autoplayVal = $.fn.getCookie('sbplus-vjs-autoplay');
        
        if ( autoplayVal === '1') {
            $( '#autoplay' ).prop( 'checked', true );
        } else {
            $( '#autoplay' ).prop( 'checked', false );
        }
        
        // volume
        var volumeVal = $.fn.getCookie('sbplus-vjs-volume');
        
        $( '#volume' ).prop( 'value', volumeVal );
        
        // playrate
        var rateVal = $.fn.getCookie('sbplus-vjs-playbackrate');
        $( '#playback' ).val( rateVal );
        
        // subtitle
        var subtitleVal = $.fn.getCookie('sbplus-vjs-enabledSubtitles');
        
        if ( subtitleVal === '1') {
            $( '#subtitle' ).prop( 'checked', true );
        } else {
            $( '#subtitle' ).prop( 'checked', false );
        }
        
    }
    
    function _bindSaveBtn() {
        
        $( '#saveSettingBtn' ).on('click', function(e) {
            
            var self = $( this );
            var volError = false;
            
            self.prop( 'disabled', true ).html( 'Saving...' );
            
            // autoplay
            if ( $( '#autoplay' ).is( ':checked' ) ) {
                $.fn.setCookie('sbplus-vjs-autoplay', 1);
            } else {
                $.fn.setCookie('sbplus-vjs-autoplay', 0);
            }
            
            // volumne
            var vol = $( '#volume' ).val();
            
            if ( vol < 0 || vol > 1 || vol === '' ) {
                volError = true;
                vol = 0.8;
            } else {
                $.fn.setCookie('sbplus-vjs-volume', vol );
            }
            
            // playrate
            $.fn.setCookie('sbplus-vjs-playbackrate', $( '#playback option:selected' ).val() );
            
            //subtitle
            if ( $( '#subtitle' ).is( ':checked' ) ) {
                $.fn.setCookie('sbplus-vjs-enabledSubtitles', 1);
            } else {
                $.fn.setCookie('sbplus-vjs-enabledSubtitles', 0);
            }
            
            if ( volError ) {
                
                $( '#volume' ).parent().parent().addClass( 'invalid' );
                $( '#volume' ).parent().after( '<p class="emsg">Must be between 0 to 1.</p>' );
                
            } else {
                
                $( '#volume' ).parent().parent().removeClass( 'invalid' );
                $( '.emsg' ).remove();
                
            }
            
            setTimeout(function() {
                
                _syncSettings();
                self.html( 'Settings Saved!' );
                
                setTimeout(function() {
                
                    self.prop( 'disabled', false ).html( 'Save' );
                    
                }, 2000);
                
            }, 1000);
            
            e.preventDefault();
            return false;
            
        } );
        
    }
    
    function _unbindSaveBtn() {
        
        $( '#saveSettingBtn' ).unbind();
        
    }
    
    return {
        
        get: get
        
    };
    
} )();