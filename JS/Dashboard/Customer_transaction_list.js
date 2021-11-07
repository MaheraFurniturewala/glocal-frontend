let customer_details = JSON.parse(localStorage.getItem('customer_details'));
let customer_id = customer_details._id;
let List = document.getElementById('payment_list');


$.ajax({
    type: "get",
    url: "http://localhost:3000/api/transaction/",
    success: function (data) {
      let all_trans = data.data;
      user_pending = all_trans.filter((trans) => {
          return trans.user == customer_id ;
        });
        console.log(user_pending)
  
      user_pending.forEach((trans,index)=>{
        trans_item = document.createElement('li');
        trans_item.innerHTML = `
        
        <li class="list-items">
        <div>
          <p>Shop:${trans.shopName} &nbsp&nbsp&nbsp; Amount: ${trans.amount}</p>
        </div>
        <form action="Customer_transaction_dash.html" method="POST">
        <div class="cta-btns">
        <input type="hidden" value="${trans._id}" id="trans_id">
          <button type="submit">Make Payments</button>
          </div>
        </form>
      </li>
        `
        List.appendChild(trans_item);
      })
      
    },
    error: function (error) {
      console.log(error);
    },
  });