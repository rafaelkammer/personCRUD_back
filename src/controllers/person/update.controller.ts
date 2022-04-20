import { Request, Response } from "express";
import { PersonRepository } from "../../repositories";

const updatePersonController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      cpf,
      nickname,
      gender,
      phone,
      address,
      comments,
      profile_picture,
    } = req.body;
    const data = {
      name,
      cpf,
      nickname,
      gender,
      phone,
      address,
      comments,
      profile_picture,
    };

    await new PersonRepository().updatePerson(id, data);

    return res.status(200).json({
      message: `Person updated`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default updatePersonController;
