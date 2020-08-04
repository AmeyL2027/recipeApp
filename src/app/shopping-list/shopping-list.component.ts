import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // <!-- Unselected for the service usage -->
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 4),
  //   new Ingredient('Mangoes', 10)
  // ];
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   // Unselected for the service usage
  //   // this.ingredients.push(ingredient);
  // }
}
