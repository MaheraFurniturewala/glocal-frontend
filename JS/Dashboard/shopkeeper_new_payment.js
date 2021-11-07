let shop_details = JSON.parse(localStorage.getItem('shop_details'));
let shop_id = shop_details._id;
let Name = document.getElementById("Name");
Name.innerText = shop_details.name;


{
    let InitializePayments = function () {
      let InitializePaymentForm = $("#InitializePayment");
  
      InitializePaymentForm.submit(function (e) {
        e.preventDefault(InitializePaymentForm.serialize());
  
        $.ajax({
          type: "post",
          url: `http://localhost:3000/api/transaction/${shop_id}`,
          data: InitializePaymentForm.serialize(),
          success: function (data) {
            console.log(data.data);
          },
          error: function (error) {
            console.log(error);
          },
        });
      });
    };
    InitializePayments();
}
