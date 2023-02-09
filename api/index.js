// Import dependencies
const express = require('express')
const cheerio = require('cheerio');
// Create app instance
const app = express()
const axios  = require('axios')  
// Define JSON as return type
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const slug = req.query.slug;
  console.log('req.query', req.query)

  const { data } = await axios.get(
    `https://i-column.microcms.io/api/v1/post/${slug}`,
    {
      headers: { 'X-API-KEY': 'b5ed7888-2fb9-4bae-b660-ff9cfe324de4' }
    }
  )
  
  const $ = cheerio.load(data.body);
 
  let h2Elements = [];
  $("h2").each((index, ele) => {
    console.log("ele", $(ele).text());
    h2Elements.push($(ele).text());
  });
  console.log("h2Elements", h2Elements);
  res.json({ message: 'hello world', h2Elements})
})

module.exports = {
  path: '/api',
  handler: app,
}