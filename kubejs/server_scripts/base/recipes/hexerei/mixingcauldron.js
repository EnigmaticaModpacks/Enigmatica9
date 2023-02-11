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
        },
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores'
            ],
            output: 'minecraft:slime_block',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 50,
            heatRequirement: 'heated',
            id: `${id_prefix}slime_from_spore`
        },
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores'
            ],
            output: 'thermal:gunpowder_block',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 50,
            heatRequirement: 'heated',
            id: `${id_prefix}gunpowder_from_spore`
        },
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores'
            ],
            output: 'minecraft:glowstone',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 50,
            heatRequirement: 'heated',
            id: `${id_prefix}glowstone_from_spore`
        },
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores'
            ],
            output: 'minecraft:redstone_block',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 50,
            heatRequirement: 'heated',
            id: `${id_prefix}redstone_from_spore`
        },
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                '#forge:dusts/sulfur',
                '#forge:dusts/niter',
                '#forge:dusts/niter',
                '#forge:dusts/niter',
                '#forge:gems/charcoal',
                '#forge:dusts/niter',
                '#forge:dusts/niter',
                '#forge:dusts/niter'
            ],
            output: 'thermal:gunpowder_block',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 50,
            heatRequirement: 'heated',
            id: `${id_prefix}gunpowder`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
