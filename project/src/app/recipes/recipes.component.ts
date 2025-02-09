import { Component } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  imports: [ RecipeDetailComponent, RecipeListComponent, CommonModule ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [ RecipeService ]
})

export class RecipesComponent {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
