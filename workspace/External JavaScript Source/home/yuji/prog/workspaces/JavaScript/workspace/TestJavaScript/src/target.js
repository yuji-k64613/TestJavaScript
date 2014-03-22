function syncFunc(){
     return "hello, world!";
 }
   
 function asyncFunc(callback){
     setTimeout(function(){
         callback("world!");
     }, 500);
 }
