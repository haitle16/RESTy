'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

//set up ejs as our template engine
app.set('view engine', 'ejs');

// Set the public folder up for /...
app.use(express.static('./public'));

app.get('/', homePage);
app.get('/products', productsPage);
//
// //Helper Function
function homePage(req,res){
    res.render('site', {page:'./pages/categories',title: 'OurSite: Home'});
}
// can use map reduce filter to manipulate the arrays
function productsPage (req,res) {
    superagent.get(`${API}/products`)
        .then( data =>{
            console.log(data.body);
            res.render('site', {products: data.body, page:'./pages/products',title: 'OurSite: Products'});

        })
        .catch (error => console.error(error));
}



app.listen(PORT, ()=> console.log(`Server up on ${PORT}`));