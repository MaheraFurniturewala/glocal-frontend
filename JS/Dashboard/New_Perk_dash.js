let shop_details = JSON.parse(localStorage.getItem('shop_details'));

let Name = document.getElementById("Name");
Name.innerText = shop_details.name;

let form = document.getElementById("addPerk");
form.innerHTML += `<input type="hidden" name="shop" value="${shop_details._id}">`


{
    let AddPerk = function () {
        let addPerkForm = $("#addPerk");
        data = addPerkForm.serialize();
        console.log(data);
  
      addPerkForm.submit(function (e) {
        e.preventDefault(addPerkForm.serialize());
  
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/perks/",
          data: addPerkForm.serialize(),
          success: function (data) {
              console.log(data.data);
          },
          error: function (error) {
              return;
          },
        });
      });
    };
    AddPerk();
}
