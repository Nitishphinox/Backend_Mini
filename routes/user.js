const express = require('express');

const router = express.Router();

let pizzas = [
    {
       pizza_id:"1",
       pizza_name:"farmhouse",
       pizza_category:"Veg",
       pizza_size:"Medium",
       pizza_price:1200
    },
    {
        pizza_id:"2",
        pizza_name:"Hawaiian",
        pizza_category:"Veg",
        pizza_size:"Medium",
        pizza_price:1500
    },
    {
        pizza_id:"3",
        pizza_name:"Pesto Chicken",
        pizza_category:"Non-Veg",
        pizza_size:"Small",
        pizza_price:2500
    },
    {
        pizza_id:"4",
        pizza_name:"Chicken Parmesan",
        pizza_category:"Non-Veg",
        pizza_size:"Small",
        pizza_price:3000
    },
    {
        pizza_id:"5",
        pizza_name:"Spicy Italian",
        pizza_category:"Veg",
        pizza_size:"Large",
        pizza_price:3500
    }
]


// CRUD -- CREATE , READ , UPDATE , DELETE




// GET Request : Retrive all pizzas


router.get("/", (req,res)=>{
    res.send(pizzas);
})
// GET REQUEST : Retrieve a Single pizza using pizza _id

router.get("/:pizza_id" , (req,res)=>{
    const pizza_id = req.params.pizza_id;
    filtered_pizzas = pizzas.filter(pizza => pizza.pizza_id == pizza_id);
    res.send(filtered_pizzas);
})

// DELETE REQUEST : Delete using pizza_id

router.delete("/:pizza_id" , (req,res)=>{
    const pizza_id = req.params.pizza_id;
    pizzas = pizzas.filter(x => x.pizza_id != pizza_id);
    res.send(`Pizza with the id ${pizza_id} deleted`);
})


// PUT  REQUEST : Update pizza using id

router.put("/:pizza_id",(req,res)=>{
    const pizza_id=req.params.pizza_id;
    let filtered_pizzas=pizzas.filter((x=>x.pizza_id==pizza_id));
    if(filtered_pizzas.length>0){
        let filtered_pizza=filtered_pizzas[0];
        let pizza_name=req.query.pizza_name;
        let pizza_category=req.query.pizza_category;
        let pizza_size=req.query.pizza_size;
        let pizza_price=req.query.pizza_price;
        if(pizza_name){
            filtered_pizza.pizza_name=pizza_name;
        }

        if(pizza_category){
            filtered_pizza.pizza_category=pizza_category;
        } 
        if(pizza_size){
            filtered_pizza.pizza_size=pizza_size;
        }
        if(pizza_price){
            filtered_pizza.pizza_price=pizza_price;
        }


        pizzas=pizzas.filter(x=>x.pizza_id!=pizza_id);
        pizzas.push(filtered_pizza)
        res.send(`pizza with the id ${pizza_id} updated`);
     } else{
            res.send("Unable to find the pizza");
    
    }
})
// POST REQUEST : CREATE  A NEW PIZZA

router.post("/" , (req,res)=>{
    pizzas.push({
        "pizza_id":req.query.pizza_id,

        "pizza_name": req.query.pizza_name,
        "pizza_category":req.query.pizza_category,

        "pizza_size":req.query.pizza_size,
        "pizza_price":req.query.pizza_price
    });
    res.send("The pizza has been added...");
})




module.exports = router;