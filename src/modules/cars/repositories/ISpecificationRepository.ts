interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepostiroy {
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationRepostiroy, ICreateSpecificationDTO };
