var btnT = document.querySelectorAll('.fa-trash')
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('total-price');

    items.forEach(item => {
        const quantityInput = item.querySelector('input');
        const priceElement = item.querySelector('.price');
        const totalElement = item.querySelector('.total');
        const plusButton = item.querySelector('.plus');
        const minusButton = item.querySelector('.minus');

        function updateTotal() {
            const price = parseInt(priceElement.textContent);
            const quantity = parseInt(quantityInput.value);
            const total = price * quantity;
            totalElement.textContent = total + 'DT';
            updateTotalPrice();
        }

        function updateTotalPrice() {
            let total = 0;
            items.forEach(item => {
                const totalElement = item.querySelector('.total');
                total += parseInt(totalElement.textContent);
            });
            totalPriceElement.textContent = total + 'DT';
        }

        plusButton.addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
        });

        minusButton.addEventListener('click', function() {
            let newValue = parseInt(quantityInput.value) - 1;
            if (newValue >= 0) {
                quantityInput.value = newValue;
                updateTotal();
            }
        });

        quantityInput.addEventListener('input', updateTotal);
    });
});
var btnT = document.querySelectorAll('.fa-trash')

for(let i = 0;i<btnT.length;i++) {
    btnT[i].addEventListener('click', function(){
        btnT[i].parentElement.remove()
        SommeTotal()
    })
}

var btnH = document.querySelectorAll('.fa-heart')

for(let i = 0;i<btnH.length;i++) {
    btnH[i].addEventListener('click',function(){
        if (btnH[i].style.color == 'red'){
            btnH[i].style.color = 'black'
        }else {
            btnH[i].style.color = 'red'
        }
    })}