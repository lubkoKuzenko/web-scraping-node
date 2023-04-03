// index.js

const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const client = require("./db.postgress");

async function performScraping() {
  // downloading the target web page
  // by performing an HTTP GET request in Axios
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://brightdata.com/",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  // parsing the HTML source of the target web page with Cheerio
  const $ = cheerio.load(axiosResponse.data);

  // initializing the data structures
  // that will contain the scraped data
  const industries = [];
  const marketLeaderReasons = [];
  const customerExperienceReasons = [];

  // scraping the "Learn how web data is used in your market" section
  $(".elementor-element-7a85e3a8")
    .find(".elementor-element")
    .each((index, element) => {
      // extracting the data of interest
      const pageUrl = $(element).attr("href");
      const image = $(element)
        .find(".elementor-image-box-img img")
        .attr("data-lazy-src");
      const name = $(element)
        .find(".elementor-image-box-content .elementor-image-box-title")
        .text();

      // filtering out not interesting data
      if (name && pageUrl) {
        // converting the data extracted into a more
        // readable object
        const industry = {
          url: pageUrl,
          image: image,
          name: name,
        };

        // adding the object containing the scraped data
        // to the industries array
        industries.push(industry);
      }
    });

  // scraping the "What makes Bright Data
  // the undisputed industry leader" section
  $(".elementor-element-ef3e47e")
    .find(".elementor-widget")
    .each((index, element) => {
      // extracting the data of interest
      const image = $(element)
        .find(".elementor-image-box-img img")
        .attr("data-lazy-src");
      const title = $(element).find(".elementor-image-box-title").text();
      const description = $(element)
        .find(".elementor-image-box-description")
        .text();

      // converting the data extracted into a more
      // readable object
      const marketLeaderReason = {
        title: title,
        image: image,
        description: description,
      };

      // adding the object containing the scraped data
      // to the marketLeaderReasons array
      marketLeaderReasons.push(marketLeaderReason);
    });

  // scraping the "The best customer experience in the industry" section
  $(".elementor-element-288b23cd .elementor-text-editor")
    .find("li")
    .each((index, element) => {
      // extracting the data of interest
      const title = $(element).find("strong").text();
      // since the title is part of the text, you have
      // to remove it to get only the description
      const description = $(element).text().replace(title, "").trim();

      // converting the data extracted into a more
      // readable object
      const customerExperienceReason = {
        title: title,
        description: description,
      };

      // adding the object containing the scraped data
      // to the customerExperienceReasons array
      customerExperienceReasons.push(customerExperienceReason);
    });

  // trasforming the scraped data into a general object
  const scrapedData = {
    industries: industries,
    marketLeader: marketLeaderReasons,
    customerExperience: customerExperienceReasons,
  };

  // converting the scraped data object to JSON
  const scrapedDataJSON = JSON.stringify(scrapedData);

  fs.writeFileSync("file.json", scrapedDataJSON);

  // storing scrapedDataJSON in a database via an API call...
}

async function performScrapingkraina_kazok() {
  // downloading the target web page
  // by performing an HTTP GET request in Axios
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://www.kraina-kazok.com.ua/catalog/avtotreki-garazhi/",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  // parsing the HTML source of the target web page with Cheerio
  const $ = cheerio.load(axiosResponse.data);

  // initializing the data structures
  // that will contain the scraped data
  const products = [];

  // scraping the "Learn how web data is used in your market" section
  $(".products-page")
    .find(".product-item")
    .each((index, element) => {
      // extracting the data of interest
      const product_name = $(element).find(".uk-card-title a").text();
      const product_price = $(element).find(".prices .medium-price").text();
      // filtering out not interesting data
      if (product_name && product_price) {
        // converting the data extracted into a more
        // readable object
        const product = {
          product_name,
          product_price,
        };

        // adding the object containing the scraped data
        // to the product array
        products.push(product);
      }
    });

  // trasforming the scraped data into a general object
  const scrapedData = {
    products,
  };

  // converting the scraped data object to JSON
  const scrapedDataJSON = JSON.stringify(scrapedData);

  fs.writeFileSync("avtotreki-garazhi.json", scrapedDataJSON);

  client.connect();

  let insertQuery =
    "INSERT INTO products (product_name, product_price) values ";
  scrapedData.products.forEach((p, i) => {
    insertQuery += `('${p.product_name}', '${parseFloat(p.product_price)}')`;

    if (i === scrapedData.products.length - 1) {
      insertQuery += ";";
    } else {
      insertQuery += ",";
    }
  });

  client.query(insertQuery, () => client.end());
}

performScrapingkraina_kazok();
