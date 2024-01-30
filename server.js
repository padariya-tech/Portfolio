const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//dotenv config
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
// static files


//routes 
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));



//port

const PORT = process.env.PORT || 5000

//listen
app.listen(PORT, () => console.log(`server running on port ${PORT}`))