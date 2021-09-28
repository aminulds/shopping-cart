
////Functions
// ChangeQty Function
function changeQty(productQty, productPrice, isAdd){
    const qty = document.getElementById(productQty);
    const itemQty = parseInt(qty.value);

    const phonePrice = document.getElementById(productPrice);
    const priceAmount = parseFloat(phonePrice.innerText);

    if (isAdd == true){
        phonePrice.innerText = (priceAmount / itemQty)  * (itemQty + 1);
        const newQty = itemQty + 1;
        qty.value = newQty;
    }
    if (isAdd == false && itemQty > 1){
        phonePrice.innerText = (priceAmount / itemQty)  * (itemQty - 1);
        const newQty = itemQty - 1;
        qty.value = newQty;
    }   
}

// Phone Update Function
function changePhoneQty(btnID, isAdd){
    document.getElementById(btnID).addEventListener('click', function(){
        changeQty('phoneQty', 'phonePrice', isAdd);

        subTotal();
    });
}

// increase phone item
changePhoneQty('increasePhone', true);
// decrease phone items
changePhoneQty('decreasePhone', false);

// Case Update Function
function changeCasingQty(btnID, isAdd){
    document.getElementById(btnID).addEventListener('click', function(){
        changeQty('casingQty', 'casingPrice', isAdd);

        subTotal();
    });
}

// Increase Case
changeCasingQty('increaseCasing', true);
// Decrease Case
changeCasingQty('decreaseCasing', false);

// Product Subtotal
function subTotal(){
    const phonePrice = document.getElementById('phonePrice');
    const phoneAmount = parseFloat(phonePrice.innerText);

    const casingPrice = document.getElementById('casingPrice');
    const casingAmount = parseFloat(casingPrice.innerText);
    const totalPrice = phoneAmount + casingAmount;
    document.getElementById('subTotal').innerText = totalPrice;
    return totalPrice;

}

