// Get Dom Element
var checkboxes = document.querySelectorAll('.checkCss');
var increaseButtons = document.querySelectorAll('.addCss');
var decreaseButtons = document.querySelectorAll('.reduceCss');
var priceTotal = document.getElementById('priceTotal');
var countTotal = document.getElementById('countTotal');

// Initiate total Price and amount
var totalPrice = 0;
var totalCount = 0;

checkboxes.forEach(function (checkbox, index) {
    checkbox.addEventListener('change', function () {
        updateTotal();
    });
});

increaseButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        updateQuantity(index, 1);
    });
});

decreaseButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        updateQuantity(index, -1);
    });
});

// update the total price and amount
function updateTotal() {
    totalPrice = 0;
    totalCount = 0;

    // iterate the item and add unit price to the total amount
    checkboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            var priceElement = document.getElementsByClassName('price')[index];
            var countElement = document.getElementsByClassName('inputCountCss')[index];
            var price = parseFloat(priceElement.textContent.replace(/[^\d.-]/g, ''));
            var count = parseInt(countElement.value);

            totalPrice += price * count;
            totalCount += count;
        }
    });

    priceTotal.textContent = totalPrice.toFixed(2);
    countTotal.textContent = totalCount;
}




function updateQuantity(index, change) {
    var countElement = document.getElementsByClassName('inputCountCss')[index];
    var count = parseInt(countElement.value);
    count += change;
    if (count < 1) {
        count = 1;
    }

    countElement.value = count;

    updateTotal();
}



updateTotal();
