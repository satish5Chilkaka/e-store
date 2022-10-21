
export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    recipeId: string;

    constructor(name: string, description: string, imagePath: string, recipeId: string) {
        this.name = name
        this.description = description
        this.imagePath = imagePath
        this.recipeId = recipeId
    }

}