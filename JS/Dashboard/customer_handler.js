customer_details = JSON.parse(localStorage.getItem('customer_details'));
console.log(customer_details)
Name = document.getElementById('Name');
Name.innerText = customer_details.name;


let logout = document.getElementById("logout-btn");
logout.addEventListener('click',()=>{
    localStorage.removeItem('glocal-customer-auth-token');
    localStorage.removeItem('customer_details');
});