import express from "express";
import "dotenv/config";

import cors from "cors";
import bodyParser from "body-parser";
import { addEmployeesEndpoint } from "./employees/employees";
import { addAnimalsEndpoint } from "./farm-challenge/farmChallenge";
import { sleep } from "./sleep";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(async (_, __, next) => {
  await sleep(+(process.env.API_SLEEP_IN_MS ?? 0));
  next();
});

addEmployeesEndpoint(app);
addAnimalsEndpoint(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
