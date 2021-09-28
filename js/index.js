
//// Update Product Quantity

// Add Quantity btn handler function
function addQty(addBtnID, qtyID){
    const item = document.getElementById(addBtnID);
    item.addEventListener('click', function(){
        const itemQty = parseInt(document.getElementById(qtyID).value);
        document.getElementById(qtyID).value = itemQty + 1;
    });
}

// Remove Quantity btn handler function
function removeQty(removeBtnID, qtyID){
    const item = document.getElementById(removeBtnID);
    item.addEventListener('click', function(){
        let itemQty = parseInt(document.getElementById(qtyID).value);
        itemQty = itemQty - 1;
        let presentQty = itemQty < 1 ? 1: itemQty;
        document.getElementById(qtyID).value = presentQty;
    });
}

// Update product function
function updateProduct(addBtnID, removeBtnID, qtyID){
    addQty(addBtnID, qtyID);
    removeQty(removeBtnID, qtyID);
}

// Phone quantity Update
updateProduct('addPhone', 'removePhone', 'phoneQty');

// Casing quantity Update
updateProduct('addCasing', 'removeCasing', 'casingQty');