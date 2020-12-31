import Express from "express";
import products from "./Products.js";
import Products from "./Products.js";

// Create an Express application
const app = Express();
const port = 3000;
// use regards POST
app.use(Express.json());
app.use(Express.urlencoded({ extended: true}));

// Middleware
function mid(req, res, next){
    // console.log(req.body);
    console.log(req.query)
    console.log(req.params);
    next();
}



// HTTP verb requests: GET, PUT, POST, DELETE
// create a fully functional REST server
// app.get('/', (req, res) =>{
//     // res.send('Hello World');
//     res.json(Products);
// });

// Access one by one product's value
app.get('/products/:id', mid, (req, res) =>{
    res.json(Products.find((product) => {
        return +req.params.id === product.id
    }));
    // res.send(req.params.id);
    // res.json(Products);
});

// // display json from POST request
// app.post('/add', (req, res) =>{
//     res.send(req.body);
// })

// displays status and log id on console
app.post('/add', (req, res) =>{
    console.log(req.body.id);
    res.sendStatus(200);
})

app.listen(port, () => console.log(`listening on port: ${port}`));
