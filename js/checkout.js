
$(document).ready(function () {

    var myArray = JSON.parse(sessionStorage.getItem('myArray'));
    console.log("myArray",myArray)
    
    summary();

    function summary(){
        var totalPrice = 0;
        for(let i = 0; i < myArray.length; i++){
            let prodDiv = document.createElement('div');
            prodDiv.className = "single-products d-flex justify-content-between align-items-center"
            let plantName = document.createElement('p');
            plantName.innerText = myArray[i].plantName;
            let plantPrice = document.createElement('h5');
            plantPrice.innerText = myArray[i].plantPrice;
            let br = document.createElement('br');
            plantPrice.append(br)
            prodDiv.append(plantName);
            prodDiv.append(plantPrice);
            $('#summary').append(prodDiv);
            var purchasePrice = myArray[i].plantPrice;
            purchasePrice = purchasePrice.slice(1, 4);
            purchasePrice = parseInt(purchasePrice);
            totalPrice += purchasePrice;
        }
        console.log(totalPrice);
        $('#subtotal').text('\u20B9'+totalPrice+'.00');
        let shippingCharges = 10;
        $('#shipping').text('\u20B9'+shippingCharges+'.00');
        let totalCharges = totalPrice + shippingCharges
        $('#total').text('\u20B9'+totalCharges+'.00')

        $('#placeOrder').click(function(){
            placeOrder(totalCharges);
        })
    }

    function placeOrder(totalCharges){

        var dataTosend = {
         fname : $('#first_name').val(),
         lname : $('#last_name').val(),
         emailId : $('#email_address').val(),
         phone : $('#phone_number').val(),
         address : $('#address').val(),
         city : $('#city').val(),
         state : $('#state').val(),
         zip : $('#postcode').val(),
         notes : $('#order_notes').val(),
         plantInfo : myArray,
         totalAmt : totalCharges,
        }

        console.log(dataTosend);
    }

});