import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  public recetaSeleccionada = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [

    new Recipe('test',
    'una prueba',
    'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d',
    [
      new Ingredient('carne', 1),
      new Ingredient('prueba', 20),
    ]),

    new Recipe('otra',
    'otra prueba',
    'https://c.pxhere.com/images/85/3d/5a8e2e8aa5b6305a1f8ef7c7e685-1589197.jpg!d',
    [
      new Ingredient('leche', 1),
      new Ingredient('dulce', 20),
    ])

  ];

  getRecipes() {
    return this.recipes.slice();
  }

  /*
  agregarShopList(ingredientes: Ingredient[]) {
    this.slService.agregarIngredientes(ingredientes);
  }

  */
}
