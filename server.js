const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
//dotenv config
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
// static files

app.use(express.static(path.join(__dirname, './frontend/dist')));
//routes 
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './frontend/dist/index.html'))
})

//port

const PORT = 8000 || 5000

//listen
app.listen(PORT, () => console.log(`server running on port ${PORT}`))