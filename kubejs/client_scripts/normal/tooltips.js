ItemEvents.tooltip((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        // {
        //     items: ['kubejs:altered_recipe_indicator'],
        //     text: [Text.of('Recipe altered for Enigmatica 9: Expert. Refer to JEI.').gold()]
        // }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.normal.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
