let customer_details = JSON.parse(localStorage.getItem('customer_details'));
let customer_id = customer_details._id;
let List = document.getElementById('payment_list');
let paymentForm = document.getElementById('paymentDetails');

const make_payment = function (shop_id) {
  console.log(shop_id)
//   $.ajax({
//     type: "get",
//     url: "https://glocal-shop.herokuapp.com/api/perks",
//     success: function (data) {
//       let all_perks = data.data;

//       shop_perks = all_perks.filter((perk) => {
//         return perk.shop == shop_id;
//       });

//       shop_perks.forEach((perk, index) => {
//         perk = document.createElement('div');
//         perk.innerHTML = `
//         <div class="form-check">
//   <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
//   <label class="form-check-label" for="flexCheckDisabled">
//     ${perkName}
//   </label>
// </div>`

//         paymentForm.appendChild(perk_row);
//       })
//       perk_detail_function();

//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });

}

$.ajax({
  type: "get",
  url: "https://glocal-shop.herokuapp.com/api/transaction/",
  success: function (data) {
    let all_trans = data.data;
    user_pending = all_trans.filter((trans) => {
      return trans.user == customer_id;
    });
    console.log(user_pending)

    user_pending.forEach((trans, index) => {
      trans_item = document.createElement('li');
      trans_item.innerHTML = `
        <li class="list-items">
        <div>
          <p>Shop:${trans.shopName} &nbsp&nbsp&nbsp; Amount: ${trans.amount}</p>
        <button id="make_payment" onclick="make_payment('' + ${trans.shop})" >Make Payment</button>

      </li>
        `
      List.appendChild(trans_item);
    })

  },

  error: function (error) {
    console.log(error);
  },
});

  // $.ajax({
  //   type: "get",
  //   url: "https://glocal-shop.herokuapp.com/api/perks",
  //   success: function (data) {
  //     let all_perks = data.data;

  //     shop_perks = all_perks.filter((perk) => {
  //       return perk.shop == shop_id;
  //     });

  //     shop_perks.forEach((perk,index)=>{
  //       perk_row = document.createElement('tr');
  //       perk_row.innerHTML = `
  //       <td>${perk.perkName}</td>
  //       <td>n1</td>
  //       <td>n1/t*100</td>
  //       <td>
  //         <button id="perk-${index+1}-detail-btn" class="cta-btns perk-detail-btn">
  //           Details
  //         </button>
  //       </td>`

  //       table_body.appendChild(perk_row);
  //     })
  //     perk_detail_function();

  //   },
  //   error: function (error) {
  //     console.log(error);
  //   },
  // });
