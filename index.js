const app = require('express')()
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { connection } = require('./config/db')
require('dotenv/config')
const PORT = process.env.PORT
//Routes
const userRoutes = require('./routes/userRoutes')


connection.connect((error) => {
    if (!error) {
        console.log('Connection Established Successfully');

        app.use(cors())
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/user', userRoutes)


        const options = {
            definition: {
                openapi: "3.0.0",
                info: {
                    title: "Yoga proyect",
                    version: "1.0.0",
                    description: "A simple Rest API with mysql",
                },
                servers: [
                    {
                        url: "http://localhost:8080",
                    },
                ],
            },
            apis: ["./routes/*.js"],
        };

        const specs = swaggerJsDoc(options);
        app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

        app.listen(PORT, () => {
            console.log(`conected to http://localhost:${PORT}`)
        })

    } else {
        console.log('Connection Failed!' + JSON.stringify(error, undefined, 2));
        connection.destroy()
    }
})


