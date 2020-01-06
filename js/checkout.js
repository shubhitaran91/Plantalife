
$(document).ready(function () {

    $('#loading').hide();
    $('#loading').css({ 'position': '' });

    var myArray = JSON.parse(sessionStorage.getItem('myPlant'));
    console.log("myArray", myArray)

    summary();

    function summary() {
        var totalPrice = 0;
        for (let i = 0; i < myArray.length; i++) {
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
            purchasePrice = purchasePrice.substring(1);
            purchasePrice = parseInt(purchasePrice);
            totalPrice += purchasePrice;
        }
        console.log(totalPrice);
        $('#subtotal').text('\u20B9' + totalPrice + '.00');
        let shippingCharges = 10;
        $('#shipping').text('\u20B9' + shippingCharges + '.00');
        let totalCharges = totalPrice + shippingCharges
        $('#total').text('\u20B9' + totalCharges + '.00')


        $('#placeOrder').click(function () {
            $('#loading').show();
            $('#loading').css({ 'position': 'fixed' })

            var dataTosend = {
                fname: $('#fname').val(),
                lname: $('#lname').val(),
                email: $('#email').val(),
                mobile: $('#mobile').val(),
                address: $('#address').val(),
                city: $('#city').val(),
                state: $('#state').val(),
                zip: $('#zip').val(),
                notes: $('#notes').val(),
                products: myArray,
                subtotal: totalPrice,
                shipping: shippingCharges,
                totalAmt: totalCharges,
            }

            console.log(dataTosend);

            $.ajax({
                url: "http://ec2-13-233-24-192.ap-south-1.compute.amazonaws.com:5000/checkout",
                type: "POST",
                datatype: "json",
                data: dataTosend,
                success: function (response) {
                    response = response.message;
                    if(response == "error"){
                        Notiflix.Report.Failure( 'Order Fail', 'Please Try Again', 'OK' );
                    }else{
                        Notiflix.Report.Success( 'Order Successfull', 'Thanks Shopping with us.  Will notify you as your Order will process', 'Click OK To Continue Shopping' );
                    }
                    $('#loading').hide();
                    $('#loading').css({ 'position': '' });
                },
                error: function (e) {
                    $('#loading').hide();
                    $('#loading').css({ 'position': '' });
                    console.log("ERROR : ", e);
                    Notiflix.Report.Warning( 'Network Issue', 'Try Again Later', 'OK' ); 
                }
            });
        })

    }
});