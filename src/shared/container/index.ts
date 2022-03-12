import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/categoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/specificationsRepository";
import { ISpecificationRepostiroy } from "../../modules/cars/repositories/ISpecificationRepository";

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
