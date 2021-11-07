let shop_details = JSON.parse(localStorage.getItem('shop_details'));
let shop_id = shop_details._id;
list_body = document.getElementById('history');
//fetch all the perks
$.ajax({
  type: "get",
  url: "http://localhost:3000/api/transaction/",
  success: function (data) {
    let all_trans = data.data;
    
    shop_tran = all_trans.filter((trans) => {
      return trans.shop == shop_id;
    });

    shop_tran.forEach((trans,index)=>{
      trans_row = document.createElement('li');
      trans_row.innerHTML = `
      Transaction - ${index+1} :&nbsp&nbsp; Amount: Rs.${trans.amount} &nbsp&nbsp; User: ${trans.userName}`
    
      list_body.appendChild(trans_row);
    })
    
  },
  error: function (error) {
    console.log(error);
  },
});