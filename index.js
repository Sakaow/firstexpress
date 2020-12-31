import Express from "express";

// Create an Express application
const app = Express();
const port = 3000;

// HTTP verb requests: GET, PUT, POST, DELETE
// create a fully functional REST server
app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(port, () => console.log(`listening on port: ${port}`));
