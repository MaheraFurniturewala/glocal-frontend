//sign up
{
    let Register = function () {
      let customerSignUpForm = $("#customerSignup");
  
      customerSignUpForm.submit(function (e) {
        e.preventDefault(customerSignUpForm.serialize());
  
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/users",
          data: customerSignUpForm.serialize(),
          success: function (data) {
            console.log(data)
          },
          error: function (error) {
            console.log(error.responseText);
          },
        });
      });
    };
    Register();
}

//sign in
{
    let Login = function () {
      let customerSignInForm = $("#customerSignin");
  
      customerSignInForm.submit(function (e) {
        e.preventDefault(customerSignInForm.serialize());
  
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/auth",
          data: customerSignInForm.serialize(),
          success: function (data) {
            console.log(data.data);
            localStorage.setItem("glocal-customer-auth-token", JSON.stringify(data.data));
            setTimeout(() => {
              localStorage.removeItem("glocal-customer-auth-token");
            }, 1800000);
            window.location.replace("../../Dashboard/Customer_dash.html");
          },
          error: function (error) {
            window.location.replace("../../Login/Customer_Signup.html");
          },
        });
      });
    };
    Login();
}
