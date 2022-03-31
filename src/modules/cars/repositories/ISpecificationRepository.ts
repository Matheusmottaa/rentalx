import { Specification } from "../infra/typeorm/entities/specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepostiroy {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationRepostiroy, ICreateSpecificationDTO };
