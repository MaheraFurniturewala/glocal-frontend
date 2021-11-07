

    // $.ajax({
    //     type: "get",
    //     async: "false",
    //     url: "http://localhost:3000/api/users/",
    //     success: function (data) {
    //       let all_users = data.data;
    //        user = all_users.filter((user) => {
    //        return user.phoneNum == inputVal;
    //       });
    //       return user;
    //     },
    //     error: function (error) {
    //       console.log(error);
    //     },

    // });
    // return user[0];

    
// const getUser = async function (){
//     try{
//         let inputVal = document.getElementById("userNumber").value;
//         const res = await fetch("http://localhost:3000/api/users/",{
//             method: "GET",
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             let all_users = data.data;
//              user = all_users.filter((u) => {
//              return u.phoneNum == inputVal;
//             });
//             return user;
//           }
//         )
//         console.log(res[0]);
//         return res[0];
//     }catch(err){
//         console.log(err)
//         throw err;
//     }
// }



    

    // let InitializePayment = async function () {
    //     let InitializePaymentForm = $("#InitializePayment");
        
    //     InitializePaymentForm.submit(async function (e) {
    //         e.preventDefault();
    //         let id = await getUser()._id
    //         $.ajax({
    //       type: "post",
    //       url: `http://localhost:3000/api/transaction/${id}`,
    //       data: InitializePaymentForm.serialize(),
    //       success: function (data) {
    //           console.log(data.data);
    //       },
    //       error: function (error) {
    //           console.log(error)
    //           return;
    //       },
    //     });
    //   });
    // };

    // {
    //     let InitializePayment = async function () {
    //       let paymentForm = $("#InitializePayment");
      
    //       paymentForm.submit(async function (e) {
    //         e.preventDefault(paymentForm.serialize());
    //         let id = await getUser()._id
    //         console.log(id);
      
    //         $.ajax({
    //           type: "post",
    //           url: `http://localhost:3000/api/transaction/${id}`,
    //           data: paymentForm.serialize(),
    //           success: function (data) {
    //             console.log(data.data);
    //           },
    //           error: function (error) {
               
    //           },
    //         });
    //       });
    //     };
    //     InitializePayment();
    // }