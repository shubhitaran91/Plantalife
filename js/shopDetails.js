$(document).ready(function () {

    var url = document.location.href;
    var params = url.split('?')[1].split('&');
    // var uri_dec = decodeURIComponent(params);
    // console.log(JSON.stringify(uri_dec));
    var data = {}, tmp;
    var l = params.length;
    for (var i = 0; i < l; i++) {
        tmp = params[i].split('=');
        tmp[1] = tmp[1].replace("%20", " ")
        data[tmp[0]] = tmp[1];
   }
    console.log(data);

    var myPlant = JSON.parse(sessionStorage.getItem('myPlant'));
    if(myPlant == null){
        myPlant = [];
       }
       $("#item-count").text(myPlant.length);

    

  $('#loading').show();
  $('#loading').css({ 'position': 'fixed' })
  getData();

  function getData() {
    $.ajax({
      url: "http://ec2-13-233-24-192.ap-south-1.compute.amazonaws.com:5000/shopDetails",
      type: "POST",
      datatype: "json",
      data: data,
      success: function (data) {
        data = data.message;
        console.log("plant data", data);
        if(data == 'No Data Found'){
           alert(data);
        }else{
            $('#plantName').text(data.plant_name);
            $('#plantPrice').text("\u20B9"+" "+data.plant_price);
            $('#prod-img').attr("href",`data:image/*;base64,${data.plant_photo}`);
            $('#img').attr("src",`data:image/*;base64,${data.plant_photo}`);
            $('#type').text(data.plant_type);
            $('#moreDesc').text(data.plant_desc);
        }
                // localStorage.plantData = JSON.stringify(data.message);
        
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
      },
       error: function (e) {
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        console.log("ERROR : ", e);
      }
    });
  }

    // var plantData = JSON.parse(localStorage.getItem('plantData'));
    // console.log(plantData);
    // relatedProducts(plantData);

    function relatedProducts(plantData){
        for(let i = 0; i < 4; i++){
            var responseiveDiv = document.createElement("DIV");
            responseiveDiv.className = "col-12 col-sm-6 col-lg-3";
            var flipCard = document.createElement("DIV");
            flipCard.className = "flip-card";
            responseiveDiv.append(flipCard);
            var flipInner = document.createElement("DIV");
            flipInner.className = "flip-card-inner";
            flipCard.append(flipInner);
            var flipFront = document.createElement("DIV");
            flipFront.className = "flip-card-front";
            flipInner.append(flipFront);
            var plantImg = document.createElement("IMG");
            plantImg.style = "width:300px;height:300px;height: 200px; width: 200px; background-color: #555; border-radius: 50%;";
            plantImg.src = "img/bg-img/redrose.jpeg";
            flipFront.append(plantImg);
            var flipBack = document.createElement("DIV");
            flipBack.className = "flip-card-back";
            flipInner.append(flipBack);
            var plantName = document.createElement("h6");
            plantName.style = "margin-top: 18%;";
            plantName.innerText = "Red Rose";
            flipBack.append(plantName);
            var plantPrice = document.createElement("p");
            plantPrice.style = "color: white";
            flipBack.append(plantPrice);

            $('#relatedProd').append(responseiveDiv);
        }
    }


    $("#addToCart").click(function(event) {
        // itemCount = itemCount + 1;
        // $('#item-count').text(itemCount);
        // let plantData = JSON.parse(sessionStorage.getItem('myPlant'));
        
        let plantName = $('#plantName').text();
        let plantPrice = $('#plantPrice').text();

        let jsonObj = {
            plantName,
            plantPrice
          };

          myPlant.push(jsonObj);
          $("#item-count").text(myPlant.length);
         sessionStorage.setItem("myPlant", JSON.stringify(myPlant));
    })


})