ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/hexerei/mixingcauldron/';

    const recipes = [
        {
            liquid: { fluid: 'minecraft:lava' },
            inputs: [
                '#forge:gems/amethyst',
                'minecraft:netherite_ingot',
                'minecraft:netherite_scrap',
                'minecraft:netherite_scrap',
                'minecraft:netherite_ingot',
                'minecraft:netherite_scrap',
                'minecraft:netherite_scrap',
                'minecraft:netherite_ingot'
            ],
            output: 'hexerei:broom_netherite_tip',
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: 'hexerei:broom_netherite_tip_from_mixing_cauldron'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
