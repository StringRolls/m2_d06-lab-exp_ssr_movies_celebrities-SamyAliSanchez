const router = require("express").Router();
const Movies = require("../models/Movies.model");
const Celebrity = require("../models/Celebrity.model");
router.route("/movies/create")

.get((req, res)=>{
    Celebrity.find()
    .then((celebrities)=>{
        res.render("movies/new-movie",{celebrities})})
    
})
.post((req, res)=>{
    const {title, genre, plot, cast} = req.body
    Movies.create(req.body)
    .then(()=>res.redirect("/movies"))
    .catch(()=>res.render("movies/new-movie", 
                          {error: "Something went wrong"}))
})

router.post("/movies/:id/delete", (req, res)=>{
    const { id } = req.params
    Movies.findByIdAndDelete(id)
    .then(()=>res.redirect("/movies"))
    .catch(err=>console.log(err))
})



module.exports = router;