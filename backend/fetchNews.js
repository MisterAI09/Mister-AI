import fetch from "node-fetch";
import fs from "fs";

const RSS_URL = "https://techcrunch.com/feed/";
const API = `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`;

const res = await fetch(API);
const data = await res.json();

fs.writeFileSync("data/news.json", JSON.stringify(data.items, null, 2));
