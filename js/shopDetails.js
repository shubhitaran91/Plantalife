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

    var plantData = JSON.parse( sessionStorage.plantData );
    console.log(plantData);

    for(let i = 0; i < plantData.length; i++){
        if(plantData[i].plant_no == data.plant_id){
            console.log(plantData[i]);
            $('#plantName').text(plantData[i].plant_name);
            $('#plantPrice').text("\u20B9"+" "+plantData[i].plant_price);
            // $('#moreDesc').text('xyz');
            relatedProducts(plantData);
        }
    }

    function relatedProducts(PlantData){
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

})