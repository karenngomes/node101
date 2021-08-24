import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();

app.use(cors()); // allows any domain access this API
// in prod:
// app.use(cors({
//     origin: ['example-domain.com', 'another-domain-if-you-need-it.com']
// }))

app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
