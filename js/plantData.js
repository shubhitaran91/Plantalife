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
  getData();
  
  $('#loading').show();
  $('#loading').css({ 'position': 'fixed' })

  // if(localStorage.getItem("plantData") == undefined || localStorage.getItem("plantData") == null){
  //   $('#loading').show();
  //   $('#loading').css({'position': 'fixed'})

  // }else{
  //   let plantData = JSON.parse(localStorage.getItem("plantData"));
  //   console.log(plantData);
  //   $('#loading').hide();
  //   $('#loading').css({'position': ''})
  //   createImages(plantData);
  //  }

  var myPlant = JSON.parse(sessionStorage.getItem('myPlant'));
  if (myPlant == null) {
     myPlant = [];
  }
  $("#item-count").text(myPlant.length);


  function getData() {
    $.ajax({
      url: "https://plantalife-backend.herokuapp.com/getPlantData",
      type: "POST",
      datatype: "json",
      data: data,
      success: function (data) {
        data = data.message;
        console.log("plant data", data);
        if(data == 'No Data Found'){
          // alert(data);
          Notiflix.Report.Info( 'Data Not Found', 'Please Try Again', 'OK' ); 
        }else{
          createImages(data);
        }        
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
      },
       error: function (e) {
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        console.log("ERROR : ", e);
        Notiflix.Report.Warning( 'Network Issue', 'Please Check Your Connection', 'OK' ); 
      }
    });
  }

  // var purchaseItem = [];
  function addToCart(event) {
    let plantName = event.currentTarget.offsetParent.lastChild.firstChild.firstChild.innerText;
    let plantPrice = event.currentTarget.offsetParent.lastChild.firstChild.lastChild.innerText;
    let jsonObj = {
      plantName,
      plantPrice
    };
    console.log(plantName, plantPrice);
    // var item_count = $("#item-count").text();
    // item_count = parseInt(item_count);
    // item_count = item_count + 1;

    // console.log(item_count);
    myPlant.push(jsonObj);
    $("#item-count").text(myPlant.length);
    //console.log(purchaseItem);
    sessionStorage.setItem("myPlant", JSON.stringify(myPlant));
    // sessionStorage.setItem("itemCount", item_count);
  }

  function createImages(data) {
    // var path = window.location.pathname;
    // var page = path.split("/").pop();
    // console.log(data.length)
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      // let type = data[i].plant_type;
      // type = type.toLowerCase();
      // type = type.charAt(0);
        var div = document.createElement("DIV");
        div.className = "col-12 col-md-4 col-xs-6 col-sm-6 col-lg-4 my-3 store-item";
        var cardDiv = document.createElement("DIV");
        cardDiv.className = "card card-image";
        div.append(cardDiv);
        var imgContainer = document.createElement("DIV");
        imgContainer.className = "img-container";
        cardDiv.append(imgContainer);
        var cardBody = document.createElement("DIV");
        cardBody.className = "card-body";
        cardDiv.append(cardBody);
        var cardText = document.createElement("DIV");
        cardText.className ="card-text d-flex justify-content-between text-capitalize";
        cardBody.append(cardText);
        var plantImg = document.createElement("IMG");
        plantImg.className = "card-img-top store-img";
        plantImg.src = `data:image/*;base64,${data[i].plant_photo}`;
        // plantImg.src = `https://plantalife-backend.herokuapp.com/${data.message[i].plant_photo}`
        plantImg.addEventListener("click", clickonImg);
        plantImg.myParam = data[i];
        imgContainer.append(plantImg);
        var span = document.createElement("span");
        span.className = "store-item-icon";
        imgContainer.append(span);
        var italic = document.createElement("i");
        italic.className = "fa fa-shopping-cart";
        // italic.addEventListener("click", addToCart);
        span.append(italic);
        var plantName = document.createElement("h5");
        plantName.innerText = `${data[i].plant_name}`;

        cardText.append(plantName);
        var addButton = document.createElement("BUTTON");
        addButton.className = "btn btn-primary btn-sm";
        addButton.innerText = "Add to Cart";
        addButton.addEventListener("click", addToCart);
        cardBody.append(addButton);
        var sign = document.createElement("h5");
        sign.className = "store-item-value";
        sign.innerText = "\u20B9";
        var price = document.createElement("strong");
        price.className = "font-weight-bold";
        price.innerText = `${data[i].plant_price}`;
        sign.append(price);
        cardText.append(sign);

        $("#addCard").append(div);
    }
  }

  function clickonImg(event) {
    let plantName = event.path[2].children[1].children[0].children[0].innerText;
    plantName = plantName.toLowerCase().trim();
    var plantData = event.currentTarget.myParam;
    // plantData = JSON.stringify(plantData);
    // console.log(plantData);
    
    window.location.href = "./shop-details.html?plant_no="+plantData.plant_no;

  }


  //  nextPage()
});




