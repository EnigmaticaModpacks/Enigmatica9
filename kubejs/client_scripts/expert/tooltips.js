ItemEvents.tooltip((event) => {
    if (global.isExpertMode == false) {
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
        {
            items: ['pneumaticcraft:air_compressor', 'occultism:dimensional_mineshaft'],
            text: [Text.of('Consumes Aura while in operation.').red()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.expert.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
