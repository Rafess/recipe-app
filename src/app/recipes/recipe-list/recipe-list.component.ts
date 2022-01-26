import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A test", "The test has no description", "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png"),
    new Recipe("Another test", "The test has the same description", "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png")
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
