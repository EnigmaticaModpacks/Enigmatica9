ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/shapeless/';

    const recipes = [
        // {
        //     output: 'thermal:rubber',
        //     inputs: [
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber',
        //         'industrialforegoing:tinydryrubber'
        //     ],
        //     id: `industrialforegoing:dryrubber`
        // }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
