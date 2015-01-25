var browser = null;

window.addEventListener('load',function(){
    
    if( !Vadstena.checkSupport() ){
      throw new Error("No support here for Vadstena");
    }
    
    
    browser = new Vadstena.Browser(
        
        'map', //canvas id
        
        //config
        './source/mapConfig.json',
        './source/browserConfig.json',
        
        init, update //event listeners
        
    );
    
    
    function init(){ browser.setCamera(60,5000); };
    function update(){};
    
});

