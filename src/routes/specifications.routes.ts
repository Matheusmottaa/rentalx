import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/createSpecificationService";

const specificationRoutes = Router();

const specifcationRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specifcationRepository,
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationRoutes };
