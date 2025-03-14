var https = require("https");
var fs = require("fs");

async function downloadImageHttps(url) {
  const file = fs.createWriteStream("file.jpg");
  const request = https.get(
    url,
    async function (response) {
      await response.pipe(file);

      // after download completed close filestream
      file.on("finish", () => {
        file.close();
        console.log("Download Completed");
      });
    }
  );

  return request;
}

downloadImageHttps("");

module.exports = {
  downloadImageHttps,
};
