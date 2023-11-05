const BROWNIES = [
    {
        id:1,
        name:'Oreo Brownie',
        price:15,
        image:'image/c1.jpg',
        desc:'Brownies filled with Chocolate and Oreo crumbs and Choco Chips',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>
        <i class="bx bxs-star "></i>`,
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:2,
        name:'Caramel Brownie',
        price:10,
        desc:'Brownies filled with Caramel and Nuts',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>
        <i class="bx bxs-star "></i>`,
        image:'image/c2.jpg',
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:3,
        name:'Hersheys Brownie',
        price:20,
        image:'image/c3.jpg',
        desc:'Brownies made with Chocolate and Hersheys',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>`,
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:4,
        name:'Kinder Bueno Brownie',
        price:25,
        desc:'Brownies filled with Hazelnut Cream and Kinder Bueno',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>`,
        image:'image/c4.jpg',
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
]
const COOKIES= [
    {
        id:11,
        name:'Choco Chip Cookie',
        price:5,
        image:'image/c5.jpg',
        desc:'Freshly baked cookies with choco chips',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>
        <i class="bx bxs-star "></i>`,
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:12,
        name:'Almond Cookies',
        price:5,
        desc:'Freshly baked cookies with almonds and fudge',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>
        <i class="bx bxs-star "></i>`,
        image:'image/c6.jpg',
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:13,
        name:'Chocolate Cookies',
        price:15,
        image:'image/c7.jpg',
        desc:'Regular Chocolate Cookies filled with Chocolate',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star "></i>`,
        qty:1,
        stock:'Add Cart',
        status:'enab',
    },
    {
        id:14,
        name:'Dark Choco Cookies',
        price:15,
        desc:'Brownies made with Dark chocolate',
        star:`<i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>
        <i class="bx bxs-star checked"></i>`,
        image:'image/c8.jpg',
        qty:1,
        stock:'Stock-Out',
        status:'disabled',
    },
]
const classesToAdd =['col-md-3','py-3','py-md-0']
const openBtn=document.getElementById('open_cart_btn')
const cart=document.getElementById('cart')
const closeBtn=document.getElementById('close_btn')
const backdrop=document.querySelector('.backdrop')
const itemsBr=document.getElementById('Br')
const itemsCo=document.getElementById('Co')
const cartItems=document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const subTotalPrice = document.getElementById('subtotal_price')
const checkoutItems=document.querySelector('.item')
console.log(itemsCo)

/*const openWishbtn=document.getElementById('open_wish')
const closeWishBtn=document.getElementById('close_wish')*/


let cart_data=[]
openBtn.addEventListener('click',openCart)
closeBtn.addEventListener('click',closeCart)
window.addEventListener('scroll',closeCart)
backdrop.addEventListener('click',closeCart)
/*openWishbtn.addEventListener('click',openWish)
closeWishBtn.addEventListener('click',closeWish)*/


renderBrownies()
renderCookies()
renderCartItems()

function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'
    
    setTimeout(() => {
        backdrop.classList.add('show')
    },0)
}
/*function openWish() {
    wish.classList.add('open')
    backdrop.style.display = 'block'
    
    setTimeout(() => {
        backdrop.classList.add('show')
    },0)
}
function closeWish() {
    wish.classList.remove('open')
    backdrop.classList.remove('show')
    
    setTimeout(() => {
        backdrop.style.display = 'none'
    },500)
}*/
function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')
    
    setTimeout(() => {
        backdrop.style.display = 'none'
    },500)
}

function addBrownie(idx,itemID){
    const foundedItem = cart_data.find((item) => item.id.toString() === itemID.toString())
    
    if (foundedItem)
    {
        increaseQty(itemID)
    }
    else{
    cart_data.push(BROWNIES[idx])
    }
    updateCart()
    openCart()
}
function addCookie(idx,itemID){
    const foundedItem = cart_data.find((item) => item.id.toString() === itemID.toString())
    
    if (foundedItem)
    {
        increaseQty(itemID)
    }
    else{
        cart_data.push(COOKIES[idx])
    }
    updateCart()
    openCart()
}
function removeCartItems(itemID){
 cart_data=cart_data.filter((item) =>item.id != itemID)
updateCart()
}
/*function wishCart(idx,itemID){
    confirm("Added to wishlist")
}*/
function renderBrownies(){
    BROWNIES.forEach((item,idx) => {
        console.log(idx)
        const itemBr = document.createElement('div')
        itemBr.classList.add('col-md-3','py-3','py-md-0')
        itemBr.innerHTML =
        `<div class="card">   
        <div class="overlay">
        <button type="button" class="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"></i></button>
        <button type="button" class="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"></i></button>
        <button type="button" class="sec btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"></i></button>
        </div>
        <img src="${item.image}" alt="">
        <div class="card-body">
        <h3>${item.name}</h3>
        <div class="star">
        ${item.star}
        </div>
        <p>${item.desc}</p>
        <h6>AED ${item.price}<span><button class="enab" type="button">${item.stock}</button></span></h6>
        </div>
        </div>`
        itemsBr.appendChild(itemBr)
        const enabButton = itemBr.querySelector('.enab');
        const cartButton = itemBr.querySelector('.sec');
       /* const wishButton = itemBr.querySelector('.wish');*/

        // Add click event listener to the enab button
        enabButton.addEventListener('click', () => {
            addBrownie(idx,item.id);
        });
        cartButton.addEventListener('click', () => {
            addBrownie(idx,item.id);
        });
       /* wishButton.addEventListener('click', () => {
            wishCart(idx,item.id);
        });*/
    })
}
function renderCookies(){
    COOKIES.forEach((item,idx) => {
        const itemCo = document.createElement('div')
        itemCo.classList.add('col-md-3','py-3','py-md-0')
        itemCo.innerHTML =
                  `<div class="card">   
                  <div class="overlay">
                     <button type="button" class="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"></i></button>
                     <button type="button" class="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"></i></button>
                     <button type="button" class="sec btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"></i></button>
                   </div>
                   <img src="${item.image}" alt="">
                   <div class="card-body">
                     <h3>${item.name}</h3>
                     <div class="star">
                      ${item.star}
                     </div>
                     <p>${item.desc}</p>
                     <h6>AED ${item.price}<span><button class="${item.status}" type="button">${item.stock}</button></span></h6>
                    </div>
                    </div>`
        itemsCo.appendChild(itemCo)
        const enabButton = itemCo.querySelector('.enab');
        const cartButton = itemCo.querySelector('.sec');

        // Add click event listener to the enab button
        enabButton.addEventListener('click', () => {
            addCookie(idx,item.id);
        });
        cartButton.addEventListener('click', () => {
            addCookie(idx,item.id);
        });
            
    })
    }


function renderCartItems(){
    cartItems.innerHTML= ''
    cart_data.forEach((item) => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML=
        `<div class="remove_item" onclick="removeCartItems(${item.id})">
                <span>&times;</span>
            </div><div class="item_img">
                    <img src="${item.image}" alt=""></img>
                    </div><div class="item_details">
                    <p>${item.name}:</p>
                    <strong>AED ${item.price}</strong>
                    <div class="qty">
                        <span onclick="decreaseQty(${item.id})">-</span>
                        <strong>${item.qty}</strong>
                        <span onclick="increaseQty(${item.id})">+</span>
                    </div>
                </div>`
    cartItems.appendChild(cartItem)
                    
    })
}

function increaseQty(itemID){
    cart_data=cart_data.map((item) => item.id.toString() === itemID.toString() 
    ? {...item, qty: item.qty +1} : item)
    updateCart()
}
function decreaseQty(itemID){
    cart_data=cart_data.map((item) => item.id.toString() === itemID.toString() 
    ? {...item, qty: item.qty > 1 ? item.qty - 1 : item.qty}:item)
    updateCart()
}
function calcItemsNum() {
    let itemsCount=0
    cart_data.forEach((item) => (itemsCount += item.qty))
    itemsNum.innerText = itemsCount
    
}
function calcSubTotalPrice() {
    let subtotal=0
    cart_data.forEach((item) => (subtotal += item.price * item.qty))
    subTotalPrice.innerText = subtotal
}
function clearCart(itemID){
    cart_data=[]
    let itemsCount=0,subtotal=0
    itemsNum.innerText=itemsCount
    subTotalPrice.innerText = subtotal
    updateCart()
}
function updateCart() {
    renderCartItems()
    calcItemsNum()
    calcSubTotalPrice()
}
console.log(subTotalPrice)
if(subTotalPrice>0) document.querySelector('.checkout-btn').disabled=false
else document.querySelector('.checkout-btn').disabled=true

/*checkout*/
function renderCheckoutItems(){
    cart_data.forEach((item) => {
        const checkItem = document.createElement('div')
        checkItem.classList.add('item')
        checkItem.innerHTML=
        `<img src="${item.image}">
        <div class="info">
            <div class="name">${item.name}</div>
            <div class="price">$${item.price}/1 product</div>
        </div>
        <div class="quantity">${item.quantity}</div>
        <div class="returnPrice">$${item.price * item.quantity}</div>`
    checkoutItems.appendChild(checkItem)
                    
    })
}
/*checkout*/