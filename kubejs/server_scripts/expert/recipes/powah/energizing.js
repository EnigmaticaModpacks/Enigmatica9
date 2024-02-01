ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: '3x emendatusenigmatica:brass_ingot',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:essences/earth'],
            energy: '50000',
            id: `${id_prefix}brass_ingot`
        },
        {
            output: '2x powah:crystal_niotic',
            inputs: ['#forge:dusts/subzero', 'quark:cyan_rune', '#forge:dusts/subzero'],
            energy: '250000',
            id: `${id_prefix}crystal_niotic`
        },
        {
            output: '2x powah:crystal_spirited',
            inputs: ['#forge:dusts/sylvanite', 'quark:lime_rune', '#forge:dusts/sylvanite'],
            energy: '1000000',
            id: `${id_prefix}crystal_spirited`
        },
        {
            output: '4x powah:crystal_nitro',
            inputs: ['#forge:pellets/polonium', 'quark:red_rune', '#forge:pellets/polonium'],
            energy: '4000000',
            id: `${id_prefix}crystal_nitro`
        },
        {
            output: '4x spirit:soul_steel_ingot',
            inputs: [
                '#forge:dusts/iesnium',
                '#forge:dusts/iesnium',
                '#forge:dusts/osmium',
                '#forge:dusts/nickel',
                '#forge:dusts/diamond',
                'spirit:soul_powder'
            ],
            energy: '100000',
            id: `${id_prefix}soul_steel_ingot`
        },
        {
            output: '2x rftoolsbase:infused_diamond',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:essences/earth',
                '#forge:essences/air'
            ],
            energy: '100000',
            id: `${id_prefix}infused_diamond`
        },
        {
            output: 'powah:binding_card',
            inputs: ['powah:blank_card', '#forge:gems/carminite'],
            energy: '16000000',
            id: `${id_prefix}binding_card`
        },
        {
            output: '4x rftoolsbase:infused_enderpearl',
            inputs: [
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}'
                ).weakNBT(),
                '#forge:ingots/energized_steel',
                '#forge:storage_blocks/dimensional',
                '#forge:storage_blocks/dimensional',
                '#forge:storage_blocks/dimensional',
                '#forge:storage_blocks/dimensional'
            ],
            energy: '4000000',
            id: `${id_prefix}infused_enderpearl`
        },
        {
            output: Item.of('the_bumblezone:honey_compass', {
                CustomDescription: 'tooltip.the_bumblezone.honey_compass_ancient_city.description',
                CustomName: 'tooltip.the_bumblezone.honey_compass_ancient_city',
                Locked: 1,
                TargetStructureTag: 'minecraft:ancient_city'
            }),
            inputs: ['the_bumblezone:honey_compass', 'minecraft:reinforced_deepslate'],
            energy: '1000000',
            id: `${id_prefix}honey_compass_ancient_city`
        },
        {
            output: 'powah:charged_snowball',
            inputs: ['minecraft:snowball'],
            energy: '5000',
            id: `powah:energizing/charged_snowball`
        },
        {
            output: 'powah:dry_ice',
            inputs: ['minecraft:blue_ice'],
            energy: '5000',
            id: `powah:energizing/dry_ice`
        },
        {
            output: '1x ae2:charged_certus_quartz_crystal',
            inputs: ['ae2:certus_quartz_crystal'],
            energy: '500',
            id: `powah:energizing/compat/certus_quartz_to_charged_certus_quartz`
        },
        {
            output: '4x ae2:charged_certus_quartz_crystal',
            inputs: ['ae2:quartz_block'],
            energy: '1500',
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            output: '12x kubejs:kaolin_clay',
            inputs: ['minecraft:clay', 'minecraft:clay', 'minecraft:clay'],
            energy: '200',
            id: `${id_prefix}kaolin_clay`
        },
        {
            output: 'naturesaura:infused_stone',
            inputs: ['minecraft:calcite'],
            energy: '4000',
            id: `${id_prefix}infused_stone`
        },
        {
            output: 'emendatusenigmatica:source_gem',
            inputs: ['#forge:gems/amethyst'],
            energy: '500',
            id: `${id_prefix}source_gem`
        },
        {
            output: 'emendatusenigmatica:source_block',
            inputs: ['#forge:storage_blocks/amethyst'],
            energy: '15000',
            id: `${id_prefix}source_block`
        },
        {
            output: 'emendatusenigmatica:infused_iron_block',
            inputs: ['#forge:storage_blocks/ironwood'],
            energy: '4000000',
            id: `${id_prefix}infused_iron_block`
        },
        {
            output: 'emendatusenigmatica:infused_iron_ingot',
            inputs: ['#forge:ingots/ironwood'],
            energy: '50000',
            id: `${id_prefix}infused_iron_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
