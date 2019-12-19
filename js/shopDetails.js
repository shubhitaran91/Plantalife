$(document).ready(function () {

    var url = document.location.href;
    var params = url.split('?')[1].split('&');
    var data = {}, tmp;
    var l = params.length;
    for (var i = 0; i < l; i++) {
        tmp = params[i].split('=');
        tmp[1] = tmp[1].replace("%20", " ")
        data[tmp[0]] = tmp[1];
   }
    console.log(data);
    var itemCount = JSON.parse(sessionStorage.getItem('itemCount'));
    if(itemCount == null){
        itemCount = 0; 
    }
    $('#item-count').text(itemCount);
    var plantData = JSON.parse(localStorage.getItem('plantData'));
    console.log(plantData);
    relatedProducts(plantData);
    for(let i = 0; i < plantData.length; i++){
        if(plantData[i].plant_no == data.plant_id){
            console.log(plantData[i]);
            $('#plantName').text(plantData[i].plant_name);
            $('#plantPrice').text("\u20B9"+" "+plantData[i].plant_price);
            $('#prod-img').attr("href",`data:image/*;base64,${plantData[i].plant_photo}`);
            $('#img').attr("src",`data:image/*;base64,${plantData[i].plant_photo}`);
            $('#type').text(plantData[i].plant_type);
            // $('#moreDesc').text('xyz');
            
        }
    }

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

    var addToCart = []
    $("#addToCart").click(function(event) {
        let itemCount = JSON.parse(sessionStorage.getItem('itemCount'));
        let plantData = JSON.parse(sessionStorage.getItem('myPlant'));
        let plantName = $('#plantName').text();
        let plantPrice = $('#plantPrice').text();
        let jsonObj = {
            plantName,
            plantPrice
          };
          addToCart.push(jsonObj);
        
        // if((itemCount && plantData) == null || (itemCount && plantData) == undefined){

        // }
        // itemCount = itemCount.parseInt(itemCount);
        // itemCount = itemCount + 1;
        // $('#item-count').text(itemCount);
        
        
    })


})