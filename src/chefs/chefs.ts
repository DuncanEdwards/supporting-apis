import { Express } from "express";
import sortby from "lodash.sortby";
import { ChefResult, chefs, jobTitles } from "./chefData";

export const addChefsEndpoints = (app: Express) => {
  app.get("/chefs/available", async (_, res) => {
    res.send(sortby(chefs, ["name"]));
  });

  app.get("/chefs/job-titles", async (_, res) => {
    res.send(jobTitles);
  });

  app.post("/chefs/promote", async (req, res) => {
    const chefIds = req.body as number[];

    const chefResults: ChefResult[] = chefs
      .filter((chef) => chefIds.includes(chef.id))
      .map(({ id, name, jobTitle }) => ({
        id,
        name,
        jobTitle,
        isSuccess: getSuccess(),
      }));

    res.send(chefResults);
  });
};

const getSuccess = () => {
  const SUCCESS_RATIO = 0.75;
  return Math.random() < SUCCESS_RATIO;
};
