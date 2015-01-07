var gaPlugin;
        
function initialize() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-57802234-1", 10);
}

function nativePluginResultHandler (result) {
    alert('nativePluginResultHandler - '+result);
    console.log('nativePluginResultHandler: '+result);
}

function nativePluginErrorHandler (error) {
    alert('nativePluginErrorHandler - '+error);
    console.log('nativePluginErrorHandler: '+error);
}

function backTracker() {
  if(localStorage.trackpermission==="trackon" && typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "Back", 1);
  }    
}

function homeTracker() {
  if(localStorage.trackpermission==="trackon" && typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html");
  }    
}

function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}