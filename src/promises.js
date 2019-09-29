/*var myp1 = Promise.resolve('foo');

myp1.then(

  (re)=>console.log(re)
);*/

/*
var myp2 = new Promise((res,rej)=>{

                setTimeout(()=>{res(10),1000});
            }

        );

myp2.then(
  (res)=>console.log(res)
);
*/
function getData(method,url){

  var myp3 = new Promise(function(res,reject){
  var xhr =new XmlHttpRequest();
       xhr.open(method,url);
       xhr.onload=function(){
         if(this.status>=200 && this.status<=300){
           res(xhr.respose);
         }else{
           reject(
             {
               status:this.status,
               message:this.statusText
             }
           );
         }
       }
  });



}
getData();
