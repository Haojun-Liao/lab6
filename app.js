var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
const Routes = require("./routes/routes.js")
app.use(express.static(path.join(__dirname, './views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes);

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get("/", (req, res) => {
    res.render('login', {layout:'login-layout'});
})

app.listen(process.env.PORT || 3000);
