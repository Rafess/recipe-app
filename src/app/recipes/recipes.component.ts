import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
// same thing to @ContentChild() They will be static: true if you need to access inside the ngOnInit
// if you dont access the element in ngOnInit, it doesnt need static added to it.