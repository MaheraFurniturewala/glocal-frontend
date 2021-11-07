let shop_details = JSON.parse(localStorage.getItem('shop_details'));
let shop_id = shop_details._id;
table_body = document.getElementById('perk-body');
//fetch all the perks
$.ajax({
  type: "get",
  url: "http://localhost:3000/api/perks",
  success: function (data) {
    let all_perks = data.data;
    
    shop_perks = all_perks.filter((perk) => {
      return perk.shop == shop_id;
    });

    shop_perks.forEach((perk,index)=>{
      perk_row = document.createElement('tr');
      perk_row.innerHTML = `
      <td>${perk.perkName}</td>
      <td>n1</td>
      <td>n1/t*100</td>
      <td>
        <button id="perk-${index+1}-detail-btn" class="cta-btns perk-detail-btn">
          Details
        </button>
      </td>`
    
      table_body.appendChild(perk_row);
    })
    perk_detail_function();
    
  },
  error: function (error) {
    console.log(error);
  },
});





const perk_detail_function = () => {

  const mainContent = document.querySelector("#main-content");

const perkDetails = document.querySelector("#perk-details");

const perkDetailBtns = document.querySelectorAll(".perk-detail-btn");

  perkDetailBtns.forEach((perkDetailBtn) => {
    perkDetailBtn.addEventListener("click", (event) => {
      switch (event.target.id) {
        case "perk-1-detail-btn":
          break;
        case "perk-2-detail-btn":
          break;
        case "perk-3-detail-btn":
          break;
      }
      perkDetails.style.display = "grid";
    });
  });
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["n: perk payments", "t: total payments"],
      color: "white",
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19],
          backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      color: ["white"],
      plugins: {
        legend: {
          labels: {
            font: {
              size: 30,
              family: "Josefin Slab",
            },
          },
        },
      },
    },
  });
}


perk_detail_function();