import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'shop-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomato", 2),
  ];
}
