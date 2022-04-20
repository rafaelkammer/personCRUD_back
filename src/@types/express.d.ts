import { Person } from "../entities/Person";

declare global {
  namespace Express {
    interface Request {
      validated: Person;
    }
  }
}
