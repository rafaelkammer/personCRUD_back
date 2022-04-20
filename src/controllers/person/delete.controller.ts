import { Request, Response } from "express";
import { PersonRepository } from "../../repositories";

const deletePersonController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await new PersonRepository().deletePerson(id);

    return res.status(200).json({
      message: `Person deleted`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default deletePersonController;
