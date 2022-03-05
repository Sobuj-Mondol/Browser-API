const displayLocalCart = () => {
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}
//
const addItem = () => {
    const nameFild = document.getElementById('product-name');
    const name = nameFild.value;
    nameFild.value = '';
    if(!name){
        return;
    }
    //call display in the ui
    displayProduct(name);
    //call add to local storage
    addProductToCart(name); 
}
//
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
//
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
//
const addProductToCart = name => {
    const cart = getCart();
    if(cart [name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
//
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalCart();