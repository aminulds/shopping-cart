
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

        let subTotalPrice = subTotal();
        productTotal(subTotalPrice);

        
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

        let subTotalPrice = subTotal();
        productTotal(subTotalPrice);
    });
}

// Increase Case
changeCasingQty('increaseCasing', true);
// Decrease Case
changeCasingQty('decreaseCasing', false);

// Product Subtotal Function
function subTotal(){
    const phonePrice = document.getElementById('phonePrice');
    const phoneAmount = parseFloat(phonePrice.innerText);

    const casingPrice = document.getElementById('casingPrice');
    const casingAmount = parseFloat(casingPrice.innerText);
    const totalPrice = phoneAmount + casingAmount;
    document.getElementById('subTotal').innerText = totalPrice;
    return totalPrice;
}

// Product Total Function
function productTotal(subTotal){

    document.getElementById('tax').innerText = subTotal * 0.15;
    document.getElementById('total').innerText = subTotal + (subTotal * 0.15);
}

// Load product Total
let subTotalPrice = subTotal();
productTotal(subTotalPrice);


// Price Remove
function priceRemove(product){
    const phonePrice = parseFloat(document.getElementById(product + 'Price').innerText) ;
    const subTotalAmount = subTotal(); // Subtotal function call
    document.getElementById('subTotal').innerText = subTotalAmount - phonePrice;
    productTotal(subTotalAmount - phonePrice); // Total function call  
}

// Product Remove
function productRemove(product){
    document.getElementById(product + 'Remove').addEventListener('click', function(e){
        if (product == 'phone'){
            priceRemove(product);
        }
        if(product == 'casing'){
            priceRemove(product);
        }

        let target = e.target;
        target.parentNode.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode.parentNode);   
    })
}

productRemove('phone');
productRemove('casing');


