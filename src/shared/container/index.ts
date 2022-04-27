import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/categoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/specificationsRepository";
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepostiroy } from "@modules/cars/repositories/ISpecificationRepository";
import { RentalsRepository } from "@modules/rentals/infra/repositories/RentalsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { container } from "tsyringe";
import "@shared/container/providers";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepostiroy>(
  "SpecificationsRepository",
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImageRepository>(
  "CarsImagesRepository",
  CarsImagesRepository,
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository,
);
