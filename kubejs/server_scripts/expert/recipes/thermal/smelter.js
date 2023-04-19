ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/thermal/smelter/';

    const recipes = [
        {
            inputs: ['#forge:dusts/quartz', 'minecraft:obsidian', '#forge:glass/colorless'],
            outputs: ['2x thermal:obsidian_glass'],
            energy: 4800,
            id: `${id_prefix}obsidian_glass`
        },
        {
            inputs: ['#forge:dusts/lumium', '2x thermal:obsidian_glass'],
            outputs: ['2x thermal:lumium_glass'],
            energy: 4800,
            id: `${id_prefix}lumium_glass`
        },
        {
            inputs: ['#forge:dusts/signalum', '2x thermal:obsidian_glass'],
            outputs: ['2x thermal:signalum_glass'],
            energy: 4800,
            id: `${id_prefix}signalum_glass`
        },
        {
            inputs: ['#forge:dusts/enderium', '2x thermal:obsidian_glass'],
            outputs: ['2x thermal:enderium_glass'],
            energy: 4800,
            id: `${id_prefix}enderium_glass`
        },
        {
            inputs: ['3x #forge:dusts/copper', '#forge:dusts/tin', '#forge:dusts/redstone'],
            outputs: [Item.of('emendatusenigmatica:bronze_ingot', 4), 'thermal:rich_slag'],
            energy: 2400,
            id: `${id_prefix}bronze_ingot`
        },
        {
            inputs: ['2x #forge:dusts/silver', '2x #forge:dusts/gold', '#forge:dusts/redstone'],
            outputs: [Item.of('emendatusenigmatica:electrum_ingot', 4), 'thermal:rich_slag'],
            energy: 2400,
            id: `${id_prefix}electrum_ingot`
        },
        {
            inputs: ['2x #forge:dusts/iron', '#forge:dusts/nickel', '2x #forge:dusts/redstone'],
            outputs: [Item.of('emendatusenigmatica:invar_ingot', 3), '2x thermal:rich_slag'],
            energy: 2400,
            id: `${id_prefix}invar_ingot`
        },
        {
            inputs: ['2x #forge:dusts/nickel', '2x #forge:dusts/copper', '#forge:dusts/redstone'],
            outputs: [Item.of('emendatusenigmatica:constantan_ingot', 4), 'thermal:rich_slag'],
            energy: 2400,
            id: `${id_prefix}constantan_ingot`
        },
        {
            inputs: ['modularrouters:augment_core', '2x #forge:essences/water', '#forge:gems/source'],
            outputs: ['thermal:machine_efficiency_augment'],
            energy: 10000,
            id: `${id_prefix}machine_efficiency_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '2x #forge:essences/fire', '#forge:gems/source'],
            outputs: ['thermal:machine_speed_augment'],
            energy: 10000,
            id: `${id_prefix}machine_speed_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '2x #forge:essences/air', 'powah:capacitor_basic_large'],
            outputs: ['thermal:rf_coil_augment'],
            energy: 10000,
            id: `${id_prefix}rf_coil_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '2x #forge:essences/fire', 'powah:capacitor_basic_large'],
            outputs: ['thermal:rf_coil_xfer_augment'],
            energy: 10000,
            id: `${id_prefix}rf_coil_xfer_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '2x #forge:essences/water', 'powah:capacitor_basic_large'],
            outputs: ['thermal:rf_coil_storage_augment'],
            energy: 10000,
            id: `${id_prefix}rf_coil_storage_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'thermal:fluid_cell_frame'],
            outputs: ['thermal:fluid_tank_augment'],
            energy: 10000,
            id: `${id_prefix}fluid_tank_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '4x #forge:fabrics/infused'],
            outputs: ['thermal:machine_output_augment'],
            energy: 10000,
            id: `${id_prefix}machine_output_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '#forge:gems/infused_diamond'],
            outputs: ['thermal:machine_catalyst_augment'],
            energy: 10000,
            id: `${id_prefix}machine_catalyst_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '4x #forge:gems/quartz'],
            outputs: ['thermal:area_radius_augment'],
            energy: 10000,
            id: `${id_prefix}area_radius_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'pneumaticcraft:logistics_core'],
            outputs: ['thermal:machine_cycle_augment'],
            energy: 10000,
            id: `${id_prefix}machine_cycle_augment`
        },
        {
            inputs: ['modularrouters:augment_core', '#forge:storage_blocks/knightmetal'],
            outputs: ['thermal:machine_null_augment'],
            energy: 10000,
            id: `${id_prefix}machine_null_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'ars_nouveau:potion_flask_amplify'],
            outputs: ['thermal:potion_amplifier_augment'],
            energy: 10000,
            id: `${id_prefix}potion_amplifier_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'ars_nouveau:potion_flask_extend_time'],
            outputs: ['thermal:potion_duration_augment'],
            energy: 10000,
            id: `${id_prefix}potion_duration_augment`
        },
        {
            inputs: [
                'modularrouters:augment_core',
                'immersiveengineering:component_electronic',
                'immersiveengineering:coil_mv'
            ],
            outputs: ['thermal:dynamo_throttle_augment'],
            energy: 10000,
            id: `${id_prefix}dynamo_throttle_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'thermal:energy_cell_frame', '4x quark:rainbow_rune'],
            outputs: ['thermal:dynamo_output_augment'],
            energy: 10000,
            id: `${id_prefix}dynamo_output_augment`
        },
        {
            inputs: ['modularrouters:augment_core', 'minecraft:lodestone', '4x #forge:gems/source'],
            outputs: ['thermal:dynamo_fuel_augment'],
            energy: 10000,
            id: `${id_prefix}dynamo_fuel_augment`
        },
        {
            inputs: ['minecraft:netherite_scrap', '4x #forge:ingots/iesnium'],
            outputs: ['4x minecraft:netherite_ingot'],
            energy: 20000,
            id: `${id_prefix}netherite_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
