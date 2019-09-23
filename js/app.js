(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart')
    })
})();

(function(){
    const cartBtn =document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){   
            // console.log(event.target)
            if(event.target.parentElement.classList.contains("store-item-icon")){
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


(function(){
  const apiResult = [{
    title: "Purple Lavender",
    value: "200",
    ing: "img/bg-img/purplelavender.jpeg"
  }, {
    title: "Red Dracaena",
    value: "200",
    ing: "img/bg-img/reddracaena.jpeg"
  }, {
    title: "Red Rose",
    value: "200",
    ing: "img/bg-img/redrose.jpeg"
  }];
  
  
  const container = document.getElementById('wow');
  
  apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('section');
   card.classList.add('col-10','col-sm-6', 'col-lg-4', 'mx-auto', 'my-3','store-item')
  
    // Construct card content
    const content = `
    <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item">
       <div class ="card">
    <div class="img-container">
     <img src=${result.ing} class="card-img-top store-img" alt="">
    <span class="store-item-icon">
         <i class="fa fa-shopping-cart"></i>
    </span>
    </div>
    <div class="card-body">
    <div class="card-text d-flex justify-content-between text-capitalize">
<h5 id="store-item-name">${result.title}</h5>
<h5 class="store-item-value">&#8377;<strong id="store-item-price" class="font-weight-bold">${result.value}</strong></h5>
                          
</div>
</div>
</div>
</div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  })
})();
