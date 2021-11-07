// let user;
// const getUserID = () => {
//     let inputVal = document.getElementById("userNumber").value;
//     $.ajax({
//         type: "get",
//         async: "false",
//         url: "http://localhost:3000/api/users/",
//         success: function (data) {
//           let all_users = data.data;
//            user = all_users.filter((user) => {
//            return user.phoneNum == inputVal;
//           });
//         },
//         error: function (error) {
//           console.log(error);
//         },
//     });
//     }
    

// {
//     let InitializePayment = function () {
//         let InitializePaymentForm = $("#InitializePayment");
        
//         InitializePaymentForm.submit(function (e) {
//             let inputVal = document.getElementById("userID").value;
//             e.preventDefault(InitializePaymentForm);
//             console.log(inputVal);
//             $.ajax({
//           type: "post",
//           url: `http://localhost:3000/api/transaction/${inputVal}`,
//           data: InitializePaymentForm.serialize(),
//           success: function (data) {
//               console.log(data.data);
//           },
//           error: function (error) {
//               console.log(error)
//               return;
//           },
//         });
//       });
//     };
//     InitializePayment();
// }