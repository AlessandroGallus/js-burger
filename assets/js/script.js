
//references
 var priceEl = document.getElementById('price');
 var button = document.getElementById('button');
 var nameUser = document.getElementById('name');
 var ingrediets = document.getElementsByClassName("ingredient-checkbox");
 var coupon = document.getElementById('coupon');
 
 //fine references

 // settings

 var prezzo_deafult = 50;
 var coupons = ["sconto-Alessandro", "sconto-bool"];
 var discount = 0.3;
 writePrice(prezzo_deafult, priceEl);
 
 //fine settings
 //events
 button.addEventListener('click', function(){
 

   var nomeInserito = nameUser.value.trim();
 
   if(nomeInserito.length == 0){
     alert("Inserisci il nome del burger");
   }else{

 

     var priceIngredient = 0;

     for(var i = 0; i < ingrediets.length; i++){
       var ingredient = ingrediets[i];
       

       if(ingredient.checked == true){
         priceIngredient += parseInt(ingredient.value);
       }
 
     }
 
     var totalPrice = prezzo_deafult + priceIngredient;
     
     if(coupons.includes(coupon.value) == true){
       totalPrice -= totalPrice * discount;
     }
     

     writePrice(totalPrice, priceEl);
 
   }
 
 });
 
 
 
 //fine events
 //functione

 
 function writePrice(value, target){
   target.innerHTML = value.toFixed(2);
 }
 //fine funzione