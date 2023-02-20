BASE_URL = "https://melon-potent-period.glitch.me/";

// Fetching URL ------------------------------------------------------
async function sendData() {

  // Grab input skill ------------------------------------------------
  const skillInput = document.getElementById("skill").value;
  const dataToSend = {
    skill: skillInput,
  };
  console.log(dataToSend); // {skill: '[from input]'}

  await fetch(BASE_URL + "skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
    cache: "default",
  })
}

// Click button <Add skill> ------------------------------------------
document.getElementById("add_skill").addEventListener("click", (e) => {
  e.preventDefault();

  sendData();
  alert("Successfully added skill!");
  window.location.href = "./index.html";
});

// Click button <View skills> ------------------------------------------
document.getElementById("view_skills").addEventListener("click", () => {
  window.location.href = "./index.html";
});
