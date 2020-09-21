import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Best Chopped Salad', 
            'Why is this salad the best? This chopped salad will amaze everyone around the table! We served this salad at a dinner party and, "Wow! What’s in this salad?" was murmured around the table. That’s when you know a salad recipe is a keeper!', 
            'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-007-735x919.jpg',
            [
                new Ingredient('Lettuce', 1),
                new Ingredient('Cherry Tomatoes', 6),
                new Ingredient('Cucumber', 1)
            ]),
        new Recipe(
            'Homemade Sloppy Joes', 
            'Homemade sloppy joes are incredibly easy to make, and come together in one skillet in about 20 minutes or so.  Browned beef is mixed with onion and green pepper and simmered in a sweetened tomato/ketchup sauce.  The secret is in finding the right seasoning for the sauce!', 
            'https://www.thechunkychef.com/wp-content/uploads/2018/10/The-Best-Homemade-Sloppy-Joes-pin.jpg',
            [
                new Ingredient('Ground Beef', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Green Pepper', 1),
                new Ingredient('Can of Tomato Sauce', 1)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice();
    }
}