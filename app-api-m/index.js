const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.json({ message: "Ahoy!" })
})
app.get("/data", (req, res) => {
    //SHOW
    res.json({ message: "get DATA" })
})
app.get("/profile", (req, res) => {
    //SHOW
    res.json({ name:"thongchai sriboonruang",nickname :"M" })
})

app.post("/data", (req, res) => {
    //CREATE
    res.json({ message: "create DATA" })
})
app.put("/data", (req, res) => {
    //UPDATE
    res.json({ message: "update DATA" })
})
app.delete("/data", (req, res) => {
    //DELETE
    res.json({ message: "dalete DATA" })
})

app.listen(9000, () => {
    console.log("Application is running on port 9000")
})
