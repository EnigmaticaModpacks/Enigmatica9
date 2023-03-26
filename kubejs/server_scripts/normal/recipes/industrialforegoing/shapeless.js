ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/industrialforegoing/shapeless/';

    const recipes = [
        {
            output: 'thermal:rubber',
            inputs: [
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber',
                'industrialforegoing:tinydryrubber'
            ],
            id: `industrialforegoing:dryrubber`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
