const axios = require("axios").default;

// Fetch a random quote from the ZenQuotes API and display it in a Discord message channel
async function getQuote() {
  return await axios
    .get("https://zenquotes.io/api/random")
    .then(function (response) {
      // handle success
      const data = response.data[0];
      return data.q + " - " + data.a;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return "Unhandled error: " + error.message;
    });
}

module.exports = {
  getQuote,
};
