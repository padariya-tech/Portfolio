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

app.use(express.static(path.join(__dirname, './frontend/dist')));
//routes 
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/dist/index.html'))
})

//port

const PORT = process.env.PORT || 5000

//listen
app.listen(PORT, () => console.log(`server running on port ${PORT}`))