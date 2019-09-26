(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart')
    })
})();

(function(){
    const cartBtn =indoor();
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){   
            // console.log(event.target)
            if(event.target.parentElement.classList.contains("addCard")){
                console.log(event.target.parentElement.previousElementSibling.src)
                let fullPath=event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img')+3;
                let partPath=fullPath.slice(pos);
                console.log(partPath)
                const item={};
                item.img=`img-cart${partPath}`;
                let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name=name;
                let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice=price.slice(1).trim();
                item.price=finalPrice;
                console.log(finalPrice);
                const cartItem =document.createElement('div');
                cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');

                cartItem.innerHTML=`
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>&#8377;</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fa fa-trash"></i>
            </a>
          </div>`

          const cart=document.getElementById('cart');
          const total =document.querySelector('.cart-total-container');
          cart.insertBefore(cartItem,total);
          alert('item added to the cart');
          showTotals()
             }
       })
    })

    function showTotals(){
        const total=[];
        const items=document.querySelectorAll('.cart-item-price');

        items.forEach(function(item){
            total.push(parseFloat(item.textContent))
        })

        const totalMoney=total.reduce(function(total,item){
            total+=item;
return total;
        },0);
        const finalMoney = totalMoney.toFixed(2);
        document.getElementById('cart-total').textContent=finalMoney
        document.querySelector('.item-total').textContent=finalMoney
        document.getElementById('item-count').textContent=total.length
    }
})();


// (function(){
//   const apiResult = [{
//     title: "Cactus",
//     value: "200",
//     ing: "img/bg-img/18.jpg"
//   }, {
//     title: "Cactus",
//     value: "200",
//     ing: "img/bg-img/18.jpg"
//   }, {
//     title: "Cactus",
//     value: "200",
//     ing: "img/bg-img/18.jpg"
//   }];
  
  
//   const container = document.getElementById('wow');
  
//   apiResult.forEach((result, idx) => {
//     // Create card element
//     const card = document.createElement('section');
//    card.classList.add('col-10','col-sm-6', 'col-lg-4', 'mx-auto', 'my-3','store-item')
  
//     // Construct card content
//     const content = `
//     <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item">
//        <div class ="card">
//     <div class="img-container">
//      <img src=${result.ing} class="card-img-top store-img" alt="">
//     <span class="store-item-icon">
//          <i class="fa fa-shopping-cart"></i>
//     </span>
//     </div>
//     <div class="card-body">
//     <div class="card-text d-flex justify-content-between text-capitalize">
// <h5 id="store-item-name">${result.title}</h5>
// <h5 class="store-item-value">&#8377;<strong id="store-item-price" class="font-weight-bold">${result.value}</strong></h5>
                          
// </div>
// </div>
// </div>
// </div>
//     `;
  
//     // Append newyly created card element to the container
//     container.innerHTML += content;
//   })
// })();
function indoor(){
$(document).ready(function(){
   
    var div = $('#addCard');
    var data = apiDemo();
    for(var i=0; i < data.length; i++) {
      var div = document.createElement("DIV");
      div.className = "col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item"
      var cardDiv = document.createElement("DIV");
      cardDiv.className = "card";
      div.append(cardDiv);
      var imgContainer = document.createElement("DIV");
      imgContainer.className = "img-container";
      cardDiv.append(imgContainer);
      var cardBody = document.createElement("DIV");
      cardBody.className = "card-body";
      cardDiv.append(cardBody);
      var cardText = document.createElement("DIV");
      cardText.className = "card-text d-flex justify-content-between text-capitalize"
      cardBody.append(cardText);
      var plantImg = document.createElement("IMG");
      plantImg.className = "card-img-top store-img"
      plantImg.src = "img/bg-img/18.jpg"
      imgContainer.append(plantImg);
      var span = document.createElement("span");
      span.className = "store-item-icon"
      imgContainer.append(span);
      var italic = document.createElement("i");
      italic.className = "fa fa-shopping-cart"
      span.append(italic);
      var plantName = document.createElement("h5");
      plantName.innerText = "cactus";
      cardText.append(plantName);
      var addButton = document.createElement("BUTTON");
      addButton.className = "btn btn-default btn-sm"
      addButton.innerText = "Add to cart";
      addButton.addEventListener("click", addToCart);
      cardText.append(addButton);
      var sign = document.createElement("h5");
      sign.className = "store-item-value"
      sign.innerText = "\u20B9";
      var price = document.createElement("strong");
      price.className = "font-weight-bold"
      price.innerText = "5";
      sign.append(price);
      cardText.append(sign);

      $('#addCard').append(div);
    }

    function addToCart(){
      var item_count = $("#item-count").text();
      item_count = parseInt(item_count);
      $("#item-count").text(item_count+1);
      console.log(item_count);
    }
    
    
function apiDemo(){
    const apiResult = [{
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    }, {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    }, {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },  {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },  {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },  {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },
    {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },
    {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },
    {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },
    {
      title: "Cactus",
      value: "200",
      img: "img/bg-img/18.jpg"
    },
  ];
  return apiResult;
}

});

}