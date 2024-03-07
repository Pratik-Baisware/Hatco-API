const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/Lockers");

app.get("/", (req,res) => {
    res.send("Hi, I'm Live");
});

// middleware or to set router
app.use("/api", products_routes);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Hello TEPL!! You're successfully conncected to HATCO's Cloud`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();