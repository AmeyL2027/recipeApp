import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Spaghetti",
      "This is a sample test recipe",
      "https://www.seriouseats.com/2020/03/20200224-carretteira-pasta-vicky-wasik-21.jpg",
      [  new Ingredient("Meat", 1), 
         new Ingredient("sause", 1)]
    ),
    new Recipe(
      "Burger",
      "This is a sample Burger recipe",
      "https://www.nicepng.com/png/full/310-3108043_cheese-steak-burger-jr-philly-cheese-steak-burger.png",
      [  new Ingredient("Buns", 2), 
         new Ingredient("sause", 1)]
    ),
  ];

  constructor(private slService: ShoppingListService){

  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
