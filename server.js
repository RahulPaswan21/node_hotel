var express =require('express')
const app = express();

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',function (req, res){
    res.send("hello welccome to my hotel what can i do for you");
})


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000,()=>{
    console.log('listenig on port 3000');
})