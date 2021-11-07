customer_details = JSON.parse(localStorage.getItem('customer_details'));
console.log(customer_details)
Name = document.getElementById('Name');
Name.innerText = customer_details.name;
