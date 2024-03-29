//sign up
{
    let Register = function () {
      let shopKeeperSignUpForm = $("#shopkeeperSignup");
  
      shopKeeperSignUpForm.submit(function (e) {
        e.preventDefault(shopKeeperSignUpForm.serialize());
  
        $.ajax({
          type: "post",
          url: "https://glocal-shop.herokuapp.com/api/shops",
          data: shopKeeperSignUpForm.serialize(),
          success: function (data) {
            console.log(data);
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
      let shopKeeperSignInForm = $("#shopkeeperSignin");
  
      shopKeeperSignInForm.submit(function (e) {
        e.preventDefault(shopKeeperSignInForm.serialize());
  
        $.ajax({
          type: "post",
          url: "https://glocal-shop.herokuapp.com/api/auth",
          data: shopKeeperSignInForm.serialize(),
          success: function (data) {
            console.log(data.data);
            localStorage.setItem("glocal-shop-auth-token", JSON.stringify(data.data));
            setTimeout(() => {
              localStorage.removeItem("glocal-shop-auth-token");
            }, 1800000);

            window.location.replace("../../Dashboard/Shopkeeper_dash.html");
          },
          error: function (error) {
            window.location.replace("../../Login/Shopkeeper_Signup.html");
          },
        });
      });
    };
    Login();
}
