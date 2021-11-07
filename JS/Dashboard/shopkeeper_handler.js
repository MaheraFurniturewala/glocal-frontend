let logout = document.getElementById("logout-btn");
logout.addEventListener('click',()=>{
    localStorage.removeItem('glocal-shop-auth-token');
    localStorage.removeItem('shop_details');
});