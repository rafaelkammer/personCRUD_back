import { getRepository, Repository } from "typeorm";
import { Person } from "../../entities/Person";

interface PersonRepo {
  save: (person: Person) => Promise<Person>;
  findById: (id: string) => Promise<Person>;
  getAll: () => Promise<Person[]>;
  updatePerson: (id: string, data: any) => Promise<Person>;
  deletePerson: (id: string) => Promise<any>;
}

class PersonRepository implements PersonRepo {
  private ormRepo: Repository<Person>;

  constructor() {
    this.ormRepo = getRepository(Person);
  }

  save = async (person: Person) => await this.ormRepo.save(person);

  findById = async (id: string) => {
    return await this.ormRepo.findOne({ where: { id } });
  };

  getAll = async () => await this.ormRepo.find();

  updatePerson = async (id: string, data: any) => {
    return this.ormRepo.save({ ...data, id });
  };

  deletePerson = async (id: string) => {
    return this.ormRepo.delete(id);
  };
}

export default PersonRepository;
