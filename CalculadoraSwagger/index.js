//Imports (npm i -s swagger-jsdoc express  swagger-ui-express nodemon)
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const RoutesCalculadora = require("./routes/calculadora")

const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CalculadoraSwagger",
            version: "1.0.0",
            description: "Calculadora com Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());

app.use("/calculadora", RoutesCalculadora);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));