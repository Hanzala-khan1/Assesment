const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const connect = require("./connection/connection.js");
const bodyParser = require('body-parser');


///////////////////////////////
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(cors());

//////////////////////////////////////////
// routes 
app.use("/v/worksheet", require("./routes/worksheet.js"));


/////////////////////////////////////////////////////////////////////////////
// serve file
const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "frontend", "dist")));

app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "Frontend", "dist", "index.html"))
);

///////////////////////////////////////////////////////
// error handiling middleware 
app.use((error, req, res, next) => {
    const message = error.message || "invalid error";
    const status = error.status || 500;
    console.log({ "status": status })
    return res.status(status).json({
        success: false,
        message: message,
        status: status,
        error: error.stack,
    });
});

////////////////////////////////////////////////////
// connection 
const PORT = process.env.PORT || 8000;
const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
);
connect();