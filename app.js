const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());

app.get("/api/search", async (req, res) => {
  const apiKey =
    "EMHAJZ4QHPOU53C9SDTGEVBNUEGMX5CSI2O1TW9N7YAE20DOMCOOC3MW8U7EH9US7BYJSTXE9GXO8H3N";
  const search = req.query.search;
  console.log(search);
  try {
    const response = await axios.get(
      "https://app.scrapingbee.com/api/v1/store/google",
      {
        params: {
          api_key: apiKey,
          search: search
        },
      }
    );
    

    if (response.data.organic_results) {
        const data = response.data.organic_results
        .filter((ele,index)=> index<= 4)
        .map(result => { return {
          url:result.url,
          descripton: result.description
        }});
        res.status(201).send(data)
    }
  } catch (error) {
    console.log(error);
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}.`);
});
