import { ISpecificationRepostiroy } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepostiroy) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification Already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };