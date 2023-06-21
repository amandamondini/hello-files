const express = require("express")
const app = express()

const PORT = 4000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
app.get("/aboutme", (req, res) => {
    res.sendFile(`${__dirname}/about-me.html`)
})
app.get("/pricing", (req, res) => {
    res.sendFile(`${__dirname}/pricing.html`)
})


app.listen(PORT, ()=>{
    console.log(`[server] listening on ${PORT}`)
})