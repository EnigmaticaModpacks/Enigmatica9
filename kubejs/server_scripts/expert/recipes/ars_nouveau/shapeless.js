ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shapeless/';

    const recipes = [
        {
            output: 'ars_nouveau:warp_scroll',
            inputs: [
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                'ars_nouveau:blank_parchment',
                '#forge:gems/source',
                '#forge:gems/source',
                '#forge:gems/source',
                '#forge:gems/source'
            ],
            id: 'ars_nouveau:warp_scroll'
        },
        {
            output: 'ars_nouveau:ritual_harvest',
            inputs: ['ars_nouveau:green_archwood_log', '#forge:essences/earth', 'naturesaura:infused_iron_hoe'],
            id: 'ars_nouveau:ritual_harvest'
        },
        {
            output: 'ars_nouveau:ritual_animal_summon',
            inputs: ['ars_nouveau:purple_archwood_log', 'naturesaura:birth_spirit', 'minecraft:golden_apple'],
            id: 'ars_nouveau:ritual_animal_summon'
        },
        {
            output: 'ars_nouveau:ritual_sanctuary',
            inputs: ['ars_nouveau:blue_archwood_log', '#forge:essences/water', 'hexerei:dried_sage_bundle'],
            id: 'ars_nouveau:ritual_sanctuary'
        },
        {
            output: 'ars_nouveau:ritual_moonfall',
            inputs: ['ars_nouveau:blue_archwood_log', 'twilightforest:moon_dial'],
            id: 'ars_nouveau:ritual_moonfall'
        },
        {
            output: 'ars_nouveau:ritual_sunrise',
            inputs: ['ars_nouveau:red_archwood_log', 'minecraft:clock'],
            id: 'ars_nouveau:ritual_sunrise'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
