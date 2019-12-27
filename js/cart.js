
$(document).ready(function () {
  
  var myArray = JSON.parse(sessionStorage.getItem('myPlant'));
  // var plantData = JSON.parse(localStorage.getItem('plantData'));
  
  summary();

  function summary(){
      var totalPrice = 0;
      var row = "";
      for(let i = 0; i < myArray.length; i++){

        row += `<tr>
        <td>${myArray[i].plantName}</td>
        <td class='price'>${myArray[i].plantPrice}</td>
        <td class='action'><a><i class='icon_close'></i></a></td>
        </tr>`;
         
        var purchasePrice = myArray[i].plantPrice;
          purchasePrice = purchasePrice.substring(1);
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

  $(".icon_close").on("click", function(event){
     let rowIndex = event.currentTarget.parentNode.parentNode.parentNode.rowIndex;
     myArray.splice(rowIndex-1,1);
     console.log(myArray);
     sessionStorage.setItem("myPlant", JSON.stringify(myArray));
     location.reload();
    // $(this).closest("tr").remove();
    // parentNode.rowIndex
});

// $('#tbDetails').find('tr').click( function(){
//   console.log('You clicked row '+ ($(this).index()+1) );
//   })

});