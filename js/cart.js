
$(document).ready(function () {
  
  var myArray = JSON.parse(sessionStorage.getItem('myArray'));
  console.log("myArray",myArray)
  
  summary();

  function summary(){
      var totalPrice = 0;
      var row = "";
      for(let i = 0; i < myArray.length; i++){
       
        row += "<tr>\
        <td class='cart_product_img'><a href=''><img src='img/bg-img/Whitelily.jpeg' alt='Product'></a>" + myArray[i].plantName + "</td>"
         +  "<td class='qty'><div class='quantity'><span class='qty-minus'\
          onclick='var effect = document.getElementById('qty'); \
          var qty = effect.value; if( !isNaN( qty ) &amp; &amp; qty &gt; 1 )\
           effect.value--;return false;'><i class='fa fa-minus' aria-hidden='true'></i></span>\
           <input type='number' class='qty-text' id='qty' step='1' min='1' max='99' name='quantity' value='1'> \
           <span class='qty-plus' onclick='var effect = document.getElementById('qty');\
            var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;'>\
            <i class='fa fa-plus' aria-hidden='true'></i></span> </div></td>"+ "<td class='price'><span>" + myArray[i].plantPrice + "</td>"+
            "<td class='action'><a href='#'><i class='icon_close'></i></a></td></tr>";
         
        var purchasePrice = myArray[i].plantPrice;
          purchasePrice = purchasePrice.slice(1, 4);
          purchasePrice = parseInt(purchasePrice);
          totalPrice += purchasePrice;
      }
      $("#tbDetails").append(row);
      console.log(totalPrice);
      $('#subtotal').text('\u20B9'+totalPrice+'.00');
      let shippingCharges = 10;
      $('#shipping').text('\u20B9'+shippingCharges+'.00');
      let totalCharges = totalPrice + shippingCharges
      $('#total_price').text('\u20B9'+totalCharges+'.00')

      $('#placeOrder').click(function(){
          placeOrder(totalCharges);
      })
  }

  

});