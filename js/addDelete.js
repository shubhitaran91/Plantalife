

function Add() {
  
    var txtType = document.getElementById("type").value;
console.log("type",txtType)
    var txtName = document.getElementById("name").value;
    console.log("name",txtName)
    var txtPrice = document.getElementById("price").value;
    var txtStatus = document.getElementById("status").value;
    var txtImg = document.getElementById("img").value;
    console.log("img",txtImg)
  
    $.ajax({
        type: "POST",
        cache: false,       
        url: '',
        data: {
            type:txtType,
            name:txtName,
            price:txtPrice,
            status:txtStatus,
            img:txtImg
        },
        success: function(data) {
            alert('data has been stored to database');
        }
    });
  
}


