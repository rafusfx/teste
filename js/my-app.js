// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
   // dynamicNavbar: false;
});

        // onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess(position) {
    
    window.localStorage.setItem("lat", position.coords.latitude);
    window.localStorage.setItem("long", position.coords.longitude);
    
}

// onError Callback receives a PositionError object
//
function onError(error) {
    myApp.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000,enableHighAccuracy: true  });

function distance(lat1, lon1, lat2, lon2) {

    var radlat1 = Math.PI * lat1/180

    var radlat2 = Math.PI * lat2/180

    var radlon1 = Math.PI * lon1/180

    var radlon2 = Math.PI * lon2/180

    var theta = lon1-lon2

    var radtheta = Math.PI * theta/180

    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    dist = Math.acos(dist)

    dist = dist * 180/Math.PI

    dist = dist * 60 * 1.1515

    dist = dist * 1.609344 

    return dist

}

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('services', function (page) {
    // run createContentPage func after link was clicked
     
       var box = $$("#box");
       var menubtn = $$(".menu-btn");  
      
       var iconsq = $$(".icon-sq");
       var iconsq2 = $$(".icon-sq2");
       var btnsq = $$(".btn-sq"); 
      
        
       var deviceW = window.innerWidth;   
       var deviceH = window.innerHeight;
       
   
    
       var safeWidth =Math.ceil( deviceW) ;    
       var safeHeight =Math.ceil( deviceH - 4) ;
        
   
       var btnp2W = Math.ceil(safeWidth /1.618);
       var btnp1W = Math.ceil(safeWidth - btnp2W);
     
      
      
       iconsq.css("width", btnp1W  + "px");
     
    
    
    
       iconsq.css("height",Math.ceil( safeHeight/6 )+ "px");
       iconsq2.css("height",Math.ceil( safeHeight/6 )+ "px");
       btnsq.css("width", btnp2W + "px");
        
       box.css("width",safeWidth);
       box.css("height",safeHeight);
       menubtn.css("height", Math.ceil(safeHeight/6));
      
       menubtn.css("line-height", Math.ceil(safeHeight/6) + "px"); 
    
     
    
   
       
});




myApp.onPageInit('contatos', function (page) {
   
    var mylat; //get my latitude
    var mylon; // get my longitute
    $$.getJSON ("/getContacts.php?n=all", function (json) {
       
    myApp.virtualList(contactList,{
   
   items:[json],
       
       template:'<div class="userBox">'+
                    '<div class="avatarBox">'+
                        '<img src="{{img}}" />'+
                        '<div class="userName">{{name}}</div>'+
                    '</div>'+
                    '<div class="userDetails">'+
                        '<div class="userAge">{{age}}</div>'+
                        '<div class="userStatus">{{status}}</div>'+
                        '<div class="userDistance">' +' distance(mylat,mylon,{{lat}},{{long}});' + '</div>'+
                    '</div>'+
                    '<div class="func">'+
                        '<div class="userOptions">'+
                            '<a href="#" ontouchstart="like("{{id}}")"><i class="iconLike" ></i></a>'+
                            '<a href="#" ontouchstart="startChat("{{id}}")"><i class="iconChat" ></i></a>'+
                            '<a href="#" ontouchstart="getGeo("{{id}}")"><i class="iconGeo" ></i></a>'+
                            '<a href="#" ontouchstart="goProfile("{{id}}")"><i class="iconEye" ></i></a>'+
                        '</div>'+
                    '</div>'+
                '</div>'
    
   });
             
       });       
             
        
});

myApp.onPageInit('conversas', function (page) {
new Firebase('https://radiant-inferno-7309.firebaseio.com/web/data');


});