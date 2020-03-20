import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recetaSeleccionada = new EventEmitter<void>();
  @Input() receta: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  onSelected() {
    this.recipeService.recetaSeleccionada.emit(this.receta);
  }

  ngOnInit() {
  }

}
