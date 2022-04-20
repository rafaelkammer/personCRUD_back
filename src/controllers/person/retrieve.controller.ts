import { Request, Response } from "express";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories";

const retrievePersonController = async (req: Request, res: Response) => {
  const persons = await new PersonRepository().getAll();

  return res.status(201).json(persons);
};

export default retrievePersonController;
