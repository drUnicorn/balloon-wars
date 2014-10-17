window.browser = null;


window.addEventListener('load',function(){
    
    //Check if browser supports WebGL
    if( !Vadstena.checkSupport() ){
        alert("This app needs WebGL, download a better browser.");
        return;
    }
    
    
    //Init Vadstena
    browser = new Vadstena.Browser(
        
        //Canvas element's id
        'map',
        
        //Config files
        './source/mapConfig.json',
        './source/browserConfig.json',
        
        //Event listeners
        onBrowserInitialized,
        onBrowserUpdate
        
    );
    
    
    
    
    //Called after Vadstena's init
    function onBrowserInitialized(success_, message_){
        
        browser.setCamera(60,5000);
        browser.setPosition(458133, 5548731, 261);
        browser.setOrientation(-241, -37, 0);
        
    };
    
    
    
    //Called every frame
    function onBrowserUpdate(){
        
        //empty for now
        
    };
    
    
    
});

