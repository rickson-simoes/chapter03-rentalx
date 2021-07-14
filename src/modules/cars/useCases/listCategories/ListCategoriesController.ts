import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategories = await this.listCategoriesUseCase.execute();

    return response.status(200).json(listCategories);
  }
}

export { ListCategoriesController };
