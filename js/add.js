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
