const express = require('express')
const app = express()

const path = require('path')
const url = require('url')

//middleware - static files like css, js, img etc...
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res)=>{

  //read file
  const pathName = url.parse(req.url, true).pathname
  let filePath = path.join(__dirname, 'views', pathName)

  if(pathName === '/')
    filePath = path.join(__dirname, 'views', 'index.html')

  res.sendFile(filePath)
  
})
app.listen(9000, ()=>{
  console.log("Server is running @ http://localhost:9000")
})