 // marwan bashar
// add section
// استجلاب البيانات من المدخل
let name =document.getElementById("itemInput");
// المصفوفة 
var productsList ;

//  نتأكد ا ذا اللوكال استوريج لو فارغة نكون مصفوفة جديدة
if(  localStorage.getItem("ourProductsStorage") == null  )
{
    
    productsList = [];
}
// لو مش فارغة نستجلب قيمتها ونعرضها في دالة الدس بلاي
else
{
    productsList =JSON.parse(localStorage.getItem("ourProductsStorage")) 

    displayProducts()
}

// دالة اضافة القيم الي المصفوفة
function addProduct()
{
 
    var sname ={
        ss : name.value
    } ;

// كود  اضافة داخل المصفوفة
    productsList.push(sname)        
// تخزين البيانات في الذاكرة المحلية
    localStorage.setItem("ourProductsStorage" , JSON.stringify(productsList)   )
// كود عرض البيانات
    displayProducts()
  
}

//عرض البيانات
function displayProducts()
{

    
    var hasalah = ``;

    
    for(var i=0 ; i< productsList.length ; i++)
    {
       hasalah += `
       
       <li class="form-control"> ${productsList[i].ss} <button onclick="deleteProduct(${i})" class="btn btn-danger delete" >X</button></li>
            
          `
    }

    document.getElementById("itemsUl").innerHTML = hasalah  ;


    clearInputs();

}

// كود تفريغ البيانات بعد التعبئة
function clearInputs()
{
    itemInput.value="";


}
// كود حذف 
function deleteProduct(  index  )
{
    productsList.splice( index , 1 );

    localStorage.setItem("ourProductsStorage" ,JSON.stringify(productsList)) 
    displayProducts() 
}
 /************************************ Khaled Js****************************************/ 

 
$("#colores").mouseenter( function(){  $("#colores").html("<div class=''> <h1 class=''>Mne Mne Mne</h1> </div> <audio id='sound' src='jessey_drake_vox_12month_baby_SMOOCH_long_cute_laugh_giggle_HEX_JD.mp3' loop controls autoplay preload='auto' class='d-none' > </audio>")

})




$("#colores").mousemove( function(){ 
var R = Math.random();
console.log(R*100);

var G = Math.random();
console.log(G*100);


var B = Math.random();
console.log(B*100);



$("#colores div").css("color" , "white")
$("#colores").css("background-color" , `rgb( ${(R*100)} , ${(G*100)} , ${B*100})`) 
})




$("#colores").mouseleave( function() {

$("#colores").html("<div class=''> <h1 class=''>Mne Mne Mne</h1> </div>")
$("#colores div").css("color" , "black")
$("#colores").css("background-color" , `rgb( ${255} , ${255} , ${255})`)
})
/********************************* Marwa js **********************************/

////////////////////counter////////////////////////////
let countDownDate = new Date("mar 1,2022 00:01:00").getTime();


let x = setInterval(()=>{

  let nowDate = new Date().getTime();
  let d = countDownDate - nowDate;

   // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minuts = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds = Math.floor((d%(1000*60))/1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minuts").innerHTML = minuts;
  document.getElementById("seconds").innerHTML = seconds;

  if(d <= 0){
    clearInterval(x);
    //document.getElementsByClassName("timeDate").innerHTML = "EXPIRED";
  }
},1000);

/********************************* ezo js **********************************/
$('.R').hover(function(){

    $('#rgbSection').css('backgroundColor', '#FF0000');
  });

  $('.G').hover(function(){

    $('#rgbSection').css('backgroundColor', '#00FF00');
  });

  $('.B').hover(function(){

    $('#rgbSection').css('backgroundColor', '#0000FF');
  
  });
  
  
  
  $('.R,.G,.B').mouseleave(function(){
  
    $('#rgbSection').css('backgroundColor', '#FFFFFF');
  
  });

  
/*********************************Nancy js**********************************/
var username=document.getElementById("name")
var email=document.getElementById("Email")
var phone=document.getElementById("Phone")
var namealert=document.getElementById("namealert")
var emailalert=document.getElementById("emailalert")
var phonealert=document.getElementById("phonealert")
var valueoftextarea=document.getElementById("exampleFormControlTextarea1").value
var lengthoftextarea= valueoftextarea.length
var listitem=document.getElementById("hide")
var head=document.getElementById("head2")
var contentText="";
var text
function validateUserName()
{
   var valueofname = /^[a-zA-Z]{2,10}/;    
   if(valueofname.test(username.value)==true)
    {
        namealert.style.display="none"
    }else
    {
      namealert.style.display="block"

    }
}
function validateEmail()
{
   var valueofemail = /^[a-zA-Z]{2,10}/;    
   if(valueofemail.test(email.value)==true)
    {
        emailalert.style.display="none"
    }else
    {
      emailalert.style.display="block"

    }
}
function validatePhone()
{
   var valueofphone = /^[a-zA-Z]{2,10}/;    
   if(valueofphone.test(phone.value)==true)
    {
        phonealert.style.display="none"
    }else
    {
      phonealert.style.display="block"

    }
}
$('textarea').keypress(function(){
    if(lengthoftextarea<30)
    {
        $(".counter").text(30-(lengthoftextarea +=1) + "letter remailing")
    }else
    {
        this.value = this.value.substring(0, max);
    }
    });
    
    function hoverRGB (value) {
        document.getElementById("colorRGB").style.backgroundColor = value;
     }
