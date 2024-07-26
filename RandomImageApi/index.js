const e = require("express");
const express = require("express");

const app = express();

app.use(express.json());

async function fetchImage() {
  let res = await fetch(
    "https://random.imagecdn.app/500/150"
  );

  return res.url;
}

app.get("/RandomImage", async (req, res) => {
  let data = await fetchImage();
  console.log(data);
  res.status(200).json({
    success: true,
    message: "Random image API",
    imageUrl: data,
  });
});

app.listen(8000, () => {
  console.log("server is running on 8000");
});
