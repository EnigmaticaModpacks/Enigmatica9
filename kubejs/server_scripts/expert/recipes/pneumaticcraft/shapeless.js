ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/shapeless/';

    const recipes = [
        {
            output: 'pneumaticcraft:unassembled_netherite_drill_bit',
            inputs: ['pneumaticcraft:drill_bit_diamond', '#forge:ingots/depths'],
            id: `pneumaticcraft:unassembled_netherite_drill_bit`
        },
        {
            output: 'pneumaticcraft:transfer_gadget',
            inputs: ['minecraft:hopper', '#forge:essences/manipulation'],
            id: `pneumaticcraft:transfer_gadget`
        },
        {
            output: 'pneumaticcraft:omnidirectional_hopper',
            inputs: ['minecraft:hopper', 'thermal:redstone_servo'],
            id: `pneumaticcraft:omnidirectional_hopper`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
