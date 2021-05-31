const express = require('express');
app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('homePage.ejs');
})

app.get('/AboutMe', (req, res) => {
    res.render("AboutMe.ejs");
})
app.get('/ProjectsPage', (req, res) => {
    res.render('ProjectsPage.ejs');
})
app.get('/ContactPage', (req, res) => {
    res.render('ContactPage.ejs');
})
app.get('/ServicePage', (req, res) => {
    res.render('ServicesPage.ejs');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("listening Port", PORT);
})