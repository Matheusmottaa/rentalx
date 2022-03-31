import { Specification } from "@modules/cars/infra/typeorm/entities/specification";

import {
  ICreateSpecificationDTO,
  ISpecificationRepostiroy,
} from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepostiroy {
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, {
      description,
      name,
    });
    this.specifications.push(specification);
    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(specifcation => specifcation.name === name);
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter(specification =>
      ids.includes(specification.id),
    );
    return allSpecifications;
  }
}

export { SpecificationRepositoryInMemory };
