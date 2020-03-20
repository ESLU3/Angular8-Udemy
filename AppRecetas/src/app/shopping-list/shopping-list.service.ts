import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanges = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('manzanas', 5),
    new Ingredient('tomate', 6)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngrediente(ingrediente: Ingredient) {
    this.ingredients.push(ingrediente);
    this.ingredientChanges.emit(this.ingredients.slice());
  }

  /*
    agregarIngredientes(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients); ... es un operador para separar el array en objetos
    }
  */
}
