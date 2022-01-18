import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../model/category';
import { CategoriesRepository } from '../repositories/categoriesRepository';
const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists)
    return response.status(400).json({ error: 'Category Already Exists' });
  categoriesRepository.create({ name, description });
  return response.status(201).json();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes }; 