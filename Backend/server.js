const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, resp)=>{
    resp.send("server running fine!")
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}...`)
})



