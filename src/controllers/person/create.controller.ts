import { Request, Response } from "express";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories";

const createPersonController = async (req: Request, res: Response) => {
  try {
    const person = await new PersonRepository().save(req.validated as Person);
    return res.status(201).json(person);
  } catch (error: any) {
    return res.status(400).json(error.detail);
  }
};

export default createPersonController;
