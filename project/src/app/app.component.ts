import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, RecipesComponent, ShoppingListComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ ShoppingListService ]
})
export class AppComponent {
  title = 'project';
  loadedFeature: string = 'recipe';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
