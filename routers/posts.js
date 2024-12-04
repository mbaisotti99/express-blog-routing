const array = require("../array")
const express = require("express")

const router = express.Router()

module.exports = router

router.get("/:id", (req, resp) =>{
    let idPost = parseInt(req.params.id)
    let postSee = array.find((curPost) => (curPost.id === idPost))
    
    resp.json(postSee);
    // resp.json(`Stai visualizzando il post ${idPost}`)
})

router.get("/", (req, resp) =>{
    // resp.send("La lista delle pizze è la seguente")
    resp.json(array)
})

router.delete("/:id", (req, resp) =>{
    let id = req.params.id
    resp.json(`Post ${id} cancellato`);
})


router.delete("/:id", (req, resp) =>{   
    let id = req.params.id
    resp.send(`Post ${id} cancellato`);
})

router.post("", (req, resp) =>{
    resp.send("Aggiunto nuovo post")
})

