import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(1338, () => {
    console.log(`Listening on port 1338`);

    routes(app);
})