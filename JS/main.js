
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
