window.onload = function() { 

$('#loading').hide();

setTimeout(function() {  
    // XHR to request a JS and a CSS  
    // var xhr = new XMLHttpRequest();  
    // xhr.open('GET', 'http://domain.tld/preload.js');  
    // xhr.send('');  
    // xhr = new XMLHttpRequest();  
    // xhr.open('GET', 'http://domain.tld/preload.css');  
    // xhr.send('');  
    // preload image  
    new Image().src = "../../img/home/active1_bg.jpg";  
    new Image().src = "../../img/home/active2_bg.jpg";  
    new Image().src = "../../img/home/active3_bg.jpg";  
    new Image().src = "../../img/home/active4_bg.jpg";  
    new Image().src = "../../img/home/active5_bg.jpg";  
    new Image().src = "../../img/home/active6_bg.jpg";  
    new Image().src = "../../img/home/active7_bg.jpg";  
    new Image().src = "../../img/home/active8_bg.jpg";  
    new Image().src = "../../img/home/active9_bg.jpg";  
}, 1000);  
};