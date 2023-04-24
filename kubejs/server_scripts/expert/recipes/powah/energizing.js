ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: '4x powah:steel_energized',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:gems/moonstone'],
            energy: '100000',
            id: `powah:energizing/energized_steel`
        },
        {
            output: '4x powah:crystal_niotic',
            inputs: [
                '#forge:essences/water',
                'blue_skies:soul_fragment',
                '#forge:gems/aquite',
                'blue_skies:soul_fragment',
                '#forge:essences/water'
            ],
            energy: '100000',
            id: `powah:energizing/niotic_crystal`
        },
        {
            output: '4x powah:crystal_spirited',
            inputs: [
                '#forge:essences/earth',
                'kubejs:sylvanite',
                '#forge:gems/diopside',
                'kubejs:sylvanite',
                '#forge:essences/earth'
            ],
            energy: '1600000',
            id: `powah:energizing/spirited_crystal`
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
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:essences/earth',
                '#forge:essences/air'
            ],
            energy: '200000',
            id: `${id_prefix}infused_diamond`
        },
        {
            output: 'powah:binding_card',
            inputs: ['powah:blank_card', '#forge:gems/carminite'],
            energy: '12000000',
            id: `${id_prefix}binding_card`
        },
        {
            output: 'mekanism:upgrade_anchor',
            inputs: ['powah:blank_card', '#forge:essences/abjuration', '#forge:gems/diopside'],
            energy: '100000',
            id: `${id_prefix}upgrade_anchor`
        },
        {
            output: '4x kubejs:dim_arcanite_crystal',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:gems/carminite',
                '#forge:gems/carminite',
                '#forge:gems/carminite'
            ],
            energy: '50000',
            id: `${id_prefix}dim_arcanite_crystal`
        }
    ];

    let range_addons = [
        { range: 0, color: 'black' },
        { range: 1, color: 'blue' },
        { range: 2, color: 'light_gray' },
        { range: 3, color: 'gray' },
        { range: 4, color: 'red' },
        { range: 5, color: 'orange' },
        { range: 6, color: 'white' },
        { range: 7, color: 'yellow' },
        { range: 8, color: 'brown' },
        { range: 9, color: 'cyan' },
        { range: 10, color: 'purple' },
        { range: 11, color: 'green' }
    ];

    range_addons.forEach((range_addon) => {
        recipes.push({
            output: Item.of(
                `industrialforegoing:range_addon${range_addon.range}`,
                `{TitaniumAugment:{Range:${range_addon.range}.0f}}`
            ),
            inputs: ['mininggadgets:upgrade_empty', `quark:${range_addon.color}_rune`],
            energy: '6000',
            id: `${id_prefix}range_addon${range_addon.range}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
