const express = require("express")
const app = express()
const port = 3000

const routes = require("./routers/posts")


app.use("/posts", routes)

app.use(express.static("public"))

app.listen(port, () =>{
    console.log("Server is listening");
})

