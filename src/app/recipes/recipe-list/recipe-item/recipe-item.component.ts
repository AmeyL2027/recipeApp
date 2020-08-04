import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() index: number;
  @Input() recipe: Recipe;
  

  // @Output() selectedRecipe = new EventEmitter<void>()
  //---Commented for routing---
  // constructor(private recipeService: RecipeService) { }
  //-----
  ngOnInit(): void {
  }

  // onClickedDetail(){
  //   // this.selectedRecipe.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
