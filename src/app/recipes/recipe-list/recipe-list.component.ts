import { Component } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'shop-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test 1", "Test description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aukbAs01Ium9M82SkFcUJGDErmEgdwAn0QprMn_wWQ&s"),
    new Recipe("Test 1", "Test description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aukbAs01Ium9M82SkFcUJGDErmEgdwAn0QprMn_wWQ&s"),
    new Recipe("Test 1", "Test description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aukbAs01Ium9M82SkFcUJGDErmEgdwAn0QprMn_wWQ&s"),
  ];
}
