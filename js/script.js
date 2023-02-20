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

    // append elements to table ---------------------------------------
    tableEl.append(tableRow);
    tableRow.append(tableHeader, tableData, remBtnContainer);
    remBtnContainer.append(remBtn);
  });
}
