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
   console.log(result)
  })
  .catch((err) => console.log(err));
