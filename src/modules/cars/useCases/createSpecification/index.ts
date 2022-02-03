import { SpecificationsRepository } from "../../repositories/implementations/specificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecification = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecification,
);

export { createSpecificationController };
