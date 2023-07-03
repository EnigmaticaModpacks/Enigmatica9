ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/press/';

    const recipes = [
        {
            result: [{ item: 'powah:lens_of_ender' }],
            ingredients: [{ item: 'powah:photoelectric_pane' }, { item: 'powah:ender_core' }],
            energy: 50000,
            id: `${id_prefix}lens_of_ender`
        },
        {
            result: [{ item: 'powah:player_aerial_pearl' }],
            ingredients: [{ item: 'powah:aerial_pearl' }, { item: 'powah:ender_core' }],
            energy: 100000,
            id: `${id_prefix}player_aerial_pearl`
        },
        {
            result: [{ item: 'powah:binding_card_dim' }],
            ingredients: [{ item: 'powah:binding_card' }, { item: 'powah:ender_core' }],
            energy: 150000,
            id: `${id_prefix}binding_card_dim`
        },
        {
            result: [{ item: 'ae2:printed_calculation_processor' }],
            ingredients: [{ item: 'ae2:certus_quartz_crystal' }, { item: 'ae2:calculation_processor_press' }],
            energy: 12000,
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            result: [{ item: 'ae2:printed_engineering_processor' }],
            ingredients: [{ tag: 'forge:gems/diamond' }, { item: 'ae2:engineering_processor_press' }],
            energy: 12000,
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            result: [{ item: 'ae2:printed_logic_processor' }],
            ingredients: [{ tag: 'forge:ingots/gold' }, { item: 'ae2:logic_processor_press' }],
            energy: 12000,
            id: `${id_prefix}printed_logic_processor`
        },
        {
            result: [{ item: 'ae2:printed_silicon' }],
            ingredients: [{ tag: 'forge:silicon' }, { item: 'ae2:silicon_press' }],
            energy: 4000,
            id: `${id_prefix}printed_silicon`
        },
        {
            result: [{ item: 'ae2:calculation_processor_press' }],
            ingredients: [{ tag: 'forge:storage_blocks/iron' }, { item: 'ae2:calculation_processor_press' }],
            energy: 12000,
            id: `${id_prefix}calculation_processor_press`
        },
        {
            result: [{ item: 'ae2:engineering_processor_press' }],
            ingredients: [{ tag: 'forge:storage_blocks/iron' }, { item: 'ae2:engineering_processor_press' }],
            energy: 12000,
            id: `${id_prefix}engineering_processor_press`
        },
        {
            result: [{ item: 'ae2:logic_processor_press' }],
            ingredients: [{ tag: 'forge:storage_blocks/iron' }, { item: 'ae2:logic_processor_press' }],
            energy: 12000,
            id: `${id_prefix}logic_processor_press`
        },
        {
            result: [{ item: 'ae2:silicon_press' }],
            ingredients: [{ tag: 'forge:storage_blocks/iron' }, { item: 'ae2:silicon_press' }],
            energy: 4000,
            id: `${id_prefix}silicon_press`
        },
        {
            result: [{ item: `pneumaticcraft:compressed_iron_gear` }],
            ingredients: [
                { tag: `forge:ingots/compressed_iron`, count: 4 },
                { item: 'immersiveengineering:mold_gear' }
            ],
            energy: 2400,
            id: `${id_prefix}compressed_iron_gear`
        }
    ];

    Object.keys(gem_properties).forEach((gem) => {
        if (gem_properties[gem].gear) {
            recipes.push({
                result: [{ item: `emendatusenigmatica:${gem}_gear`, count: 1 }],
                ingredients: [{ tag: `forge:gems/${gem}`, count: 4 }, { item: 'immersiveengineering:mold_gear' }],
                energy: 2400,
                id: `${id_prefix}${gem}_gear`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        event.custom(recipe).id(recipe.id);
    });
});
