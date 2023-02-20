BASE_URL = "https://melon-potent-period.glitch.me/";

// Fetching URL ---------------------------------------------------
fetch(BASE_URL + "skills")
  .then((res) => {
    if (res.ok) {
      console.log("GET request succesful");
    } else {
      console.log("GET request unsuccesful");
    }
    return res;
  })
  .then((res) => res.json())
  .then((result) => {
    handleData(result);
  })
  .catch((err) => console.log(err));

function handleData(data) {
  // Loop result ---------------------------------------------------
  data.forEach((element) => {
    console.log(element);
    console.log(element.id);

    const tableEl = document.querySelector("tbody");
    const tableRow = document.createElement("tr");
    const tableHeader = document.createElement("th");
    const tableData = document.createElement("td");
    tableHeader.textContent = element.id;
    tableData.textContent = element.skill;
    const remBtnContainer = document.createElement("td");
    const remBtn = document.createElement("button");
    remBtn.className = "btn btn-primary";
    remBtn.textContent = "delete";
    //---------------------------------------------------------------

    // delete elements function -------------------------------------
    async function elemDelFunc() {
      await fetch(BASE_URL + "skill/" + element.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          alert("Successfully deleted the item!"), response.json();
        })
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
    remBtn.addEventListener("click", elemDelFunc);
    //----------------------------------------------------------------

    // append elements to table --------------------------------------
    tableEl.append(tableRow);
    tableRow.append(tableHeader, tableData, remBtnContainer);
    remBtnContainer.append(remBtn);
  });
}

// Click button <Add a skill> -----------------------------------------
document.getElementById("add_skill").addEventListener("click", () => {
  window.location.href = "add.html";
});
