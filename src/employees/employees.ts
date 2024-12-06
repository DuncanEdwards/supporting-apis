import { Express } from "express";
import employees from "./employees-data.json";

export const addEmployeesEndpoint = (app: Express) => {
  app.get("/employees-api/employees", async (req, res) => {
    const EMPLOYEES_RETURN_COUNT = 10;
    await sleep(20);
    const search = req.query.search as string | undefined;

    const employeesWithId = employees.map((employee, index) => ({
      id: index + 1,
      ...employee,
    }));

    const finalEmployees = search
      ? employeesWithId
          .filter(
            (e) =>
              e.firstName.toLowerCase().includes(search.toLowerCase()) ||
              e.surName.toLowerCase().includes(search.toLowerCase()) ||
              e.address.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, EMPLOYEES_RETURN_COUNT)
      : employeesWithId.slice(0, EMPLOYEES_RETURN_COUNT);

    res.send(finalEmployees);
  });
};

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
