var cartNum1 = localStorage.getItem('cartList6')
cartNum2=JSON.parse(cartNum1)||[]
$('.cart-num').html(cartNum2.length)