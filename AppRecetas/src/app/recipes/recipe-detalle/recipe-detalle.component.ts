import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detalle',
  templateUrl: './recipe-detalle.component.html',
  styleUrls: ['./recipe-detalle.component.css']
})
export class RecipeDetalleComponent implements OnInit {

  @Input() receta: Recipe;

  constructor(private slService: ShoppingListService) { }
  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  enviarShopList(receta: Recipe) {
    receta.ingredientes.forEach(element => {
      this.slService.addIngrediente(element);
    });
    // tambien se puede llamar al RecipeService
    // this.recipeService.agregarShopList(this.receta.ingredientes);
  }
}
