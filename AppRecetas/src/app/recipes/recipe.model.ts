import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredientes: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredientes: Ingredient[]) {
    this.description = desc;
    this.name = name;
    this.imagePath = imagePath;
    this.ingredientes = ingredientes;
  }

}
