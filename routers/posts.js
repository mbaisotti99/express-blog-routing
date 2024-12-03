const array = require("../array")
const express = require("express")

const router = express.Router()

module.exports = router

router.get("/posts", (req, resp) =>{
    // resp.send("La lista delle pizze è la seguente")
    resp.json(array)
})

router.delete("/posts/:id", (req, resp) =>{
    let id = req.params.id
    resp.json(`Post ${id} cancellato`);
})

router.get("/posts/:id", (req, resp) =>{
    let idPost = req.params.id
    let postSee = array.forEach((curPost) =>{
        if (curPost.id === idPost){
            return curPost
        } 
    })
    resp.json(postSee);
})

router.delete("/posts/:id", (req, resp) =>{
    let id = req.params.id
    resp.send(`Post ${id} cancellato`);
})

router.post("/posts", (req, resp) =>{
    resp.send("Aggiunto nuovo post")
})