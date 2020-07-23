const router = require("express").Router()
const Property = require("./../models/Property")
const Blog = require("./../models/Blog")

router.get("/",(req,res)=>{
    res.render("index")
})

router.get("/about",(req,res)=>{
    res.render("about")
    
})

router.get("/listings", async (req,res)=>{
    try{
        const properties = await Property.find()
        // res.status(200).send(properties)
        res.render("listings", {properties})
    }catch(e){
        res.status(500).redirect("/")
    }
})

router.get("/blog", async (req,res)=>{
    try{
        const blogs = await Blog.find()
        // res.status(200).send(properties)
        res.render("blog", {blogs})
    }catch(e){
        res.status(500).redirect("/")
    }
})

router.get("/contact",(req,res)=>{
    res.render("contact")
})




module.exports = router