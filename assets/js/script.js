let openCartBtn = document.getElementById('cart-btn');
let cartContainer = document.getElementById('cart-container');
let container = document.getElementById('container');

openCartBtn.addEventListener('click', function() {
    cartContainer.classList.add('open')
    container.classList.add('brightness')
})

let closeCartBtn = document.getElementById('close-cart-btn');

closeCartBtn.addEventListener('click', function() {
    cartContainer.classList.remove('open')
    container.classList.remove('brightness')
})

let productsContainer = document.querySelector('.products-container');
let mainCartContainer = document.getElementById('main-cart-container');
let footerCartContainer = document.getElementById('footer-cart-container');
let emptyMessage = document.getElementById('empty-message');
let subtotalValue = document.getElementById('subtotal-value');
let shippingValue = document.getElementById('shipping-value');
let totalValue = document.getElementById('total-value');
let numberCart = document.getElementById('number-cart');

productsContainer.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('addtocart-btn')) {
        e.target.parentElement.value++
        if(e.target.parentElement.value < 2) {
            openCartBtn.value++
            numberCart.innerHTML = '(' + openCartBtn.value + ')'
            cartContainer.classList.add('open')
            footerCartContainer.classList.add('show')
            container.classList.add('brightness')
            emptyMessage.classList.add('hide')

            let productInTheCart = document.createElement('div')
            productInTheCart.classList.add('product-inthecart')
            mainCartContainer.appendChild(productInTheCart)

            let imgProductContainerInTheCart = document.createElement('div')
            imgProductContainerInTheCart.classList.add('img-product-container-inthecart')
            productInTheCart.appendChild(imgProductContainerInTheCart)

            let imgProductInTheCart = document.createElement('img')
            imgProductInTheCart.classList.add('img-product-inthecart')
            imgProductInTheCart.src = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('div div img').src
            imgProductContainerInTheCart.appendChild(imgProductInTheCart)

            let nameContainerProductInTheCart = document.createElement('div')
            nameContainerProductInTheCart.classList.add('name-container-product-inthecart')
            productInTheCart.appendChild(nameContainerProductInTheCart)

            let nameProductInTheCart = document.createElement('p')
            nameProductInTheCart.classList.add('name-product-inthecart')
            nameProductInTheCart.innerHTML = e.target.parentElement.parentElement.parentElement.querySelector('div div p.name-product').innerHTML
            nameContainerProductInTheCart.appendChild(nameProductInTheCart)

            let codeProductInTheCart = document.createElement('p')
            codeProductInTheCart.classList.add('code-product-inthecart')
            codeProductInTheCart.innerHTML = 'Code:' + ' ' + Math.floor(Math.random() * 100000)
            nameContainerProductInTheCart.appendChild(codeProductInTheCart)

            let amountContainerProductInTheCart = document.createElement('div')
            amountContainerProductInTheCart.classList.add('amount-container-product-inthecart')
            productInTheCart.appendChild(amountContainerProductInTheCart)

            let lessButtonInTheCart = document.createElement('button')
            lessButtonInTheCart.classList.add('less-amount-inthecart')
            lessButtonInTheCart.innerHTML = '-'
            amountContainerProductInTheCart.appendChild(lessButtonInTheCart)

            let amountValueInTheCart = document.createElement('p')
            amountValueInTheCart.classList.add('amount-value-inthecart')
            amountValueInTheCart.innerHTML = '1'
            amountContainerProductInTheCart.appendChild(amountValueInTheCart)

            let moreButtonInTheCart = document.createElement('button')
            moreButtonInTheCart.classList.add('more-amount-inthecart')
            moreButtonInTheCart.innerHTML = '+'
            amountContainerProductInTheCart.appendChild(moreButtonInTheCart)

            lessButtonInTheCart.addEventListener('click', function() {
                amountValueInTheCart.innerHTML--
                subtotalValue.innerHTML = parseInt(subtotalValue.innerHTML) - parseInt(priceProductInTheCart.innerHTML.substring(1))
                totalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(shippingValue.innerHTML)
                if(amountValueInTheCart.innerHTML <= 0) {
                    mainCartContainer.removeChild(productInTheCart)
                    openCartBtn.value--
                    e.target.parentElement.value = '0'
                    numberCart.innerHTML = '(' + openCartBtn.value + ')'
                } if(openCartBtn.value <= 0) {
                    emptyMessage.classList.remove('hide')
                    footerCartContainer.classList.remove('show')
                    cartContainer.classList.remove('open')
                    container.classList.remove('brightness')
                    numberCart.innerHTML = ''
                }
            })

            moreButtonInTheCart.addEventListener('click', function() {
                amountValueInTheCart.innerHTML++
                subtotalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(priceProductInTheCart.innerHTML.substring(1))
                totalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(shippingValue.innerHTML)
            })

            let priceContainerProductInTheCart = document.createElement('div')
            priceContainerProductInTheCart.classList.add('price-container-product-inthecart')
            productInTheCart.appendChild(priceContainerProductInTheCart)

            let priceProductInTheCart = document.createElement('p')
            priceProductInTheCart.classList.add('price-product-inthecart')
            priceProductInTheCart.innerHTML = e.target.parentElement.parentElement.parentElement.querySelector('div div p.price-product').innerHTML
            priceContainerProductInTheCart.appendChild(priceProductInTheCart)

            let removeContainerProductInTheCart = document.createElement('div')
            removeContainerProductInTheCart.classList.add('remove-container-product-inthecart')
            productInTheCart.appendChild(removeContainerProductInTheCart)

            let removeButtonProductInTheCart = document.createElement('button')
            removeButtonProductInTheCart.classList.add('remove-product-inthecart-btn')
            removeButtonProductInTheCart.innerHTML = '<img class="remove-icon" src="assets/image/delete.png" alt="delete">'
            removeContainerProductInTheCart.appendChild(removeButtonProductInTheCart)

            removeButtonProductInTheCart.addEventListener('click', function() {
                mainCartContainer.removeChild(productInTheCart)
                openCartBtn.value--
                numberCart.innerHTML = '(' + openCartBtn.value + ')'
                subtotalValue.innerHTML = parseInt(subtotalValue.innerHTML) - parseInt(amountValueInTheCart.innerHTML) * parseInt(priceProductInTheCart.innerHTML.substring(1))
                totalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(shippingValue.innerHTML)
                e.target.parentElement.value = '0'
                if(openCartBtn.value <= 0) {
                    emptyMessage.classList.remove('hide')
                    footerCartContainer.classList.remove('show')
                    cartContainer.classList.remove('open')
                    container.classList.remove('brightness')
                    numberCart.innerHTML = ''
                }
            })

            subtotalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(priceProductInTheCart.innerHTML.substring(1))
            totalValue.innerHTML = parseInt(subtotalValue.innerHTML) + parseInt(shippingValue.innerHTML)

        } if(e.target.parentElement.value >= 2) {
            alert('This item is already in the shopping cart.')
        }
    }
})

let selectCategory = document.getElementById('category');
let products = document.querySelectorAll('div.product');
let applewatchs = document.querySelectorAll('div.applewatch');
let airpods = document.querySelectorAll('div.airpods');

selectCategory.addEventListener('change', function() {
    if(selectCategory.value === 'all') {
        products.forEach(divAll => {
            divAll.classList.remove('hide')
        })
    } if(selectCategory.value === 'applewatch') {
        airpods.forEach(divAirpods => {
            divAirpods.classList.add('hide')
        })
        applewatchs.forEach(divApplewatchs => {
            divApplewatchs.classList.remove('hide')
        })
    } if(selectCategory.value === 'airpods') {
        applewatchs.forEach(divApplewatchs => {
            divApplewatchs.classList.add('hide')
        })
        airpods.forEach(divAirpods => {
            divAirpods.classList.remove('hide')
        })
    }
})
     
