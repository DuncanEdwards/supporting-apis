import express from "express";
import "dotenv/config";

import cors from "cors";
import bodyParser from "body-parser";
import { addEmployeesEndpoint } from "./employees/employees";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

addEmployeesEndpoint(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
