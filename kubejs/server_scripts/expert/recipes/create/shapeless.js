ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/shapeless/';

    const recipes = [
        {
            output: 'create:sequenced_gearshift',
            inputs: ['create:brass_casing', 'create:cogwheel', 'immersiveengineering:component_electronic'],
            id: `create:crafting/kinetics/sequenced_gearshift`
        },
        {
            output: '4x create:adjustable_chain_gearshift',
            inputs: [
                'create:encased_chain_drive',
                'create:encased_chain_drive',
                'create:encased_chain_drive',
                'create:encased_chain_drive',
                'immersiveengineering:component_electronic'
            ],
            id: `create:crafting/kinetics/adjustable_chain_gearshift`
        },
        {
            output: 'create:placard',
            inputs: ['minecraft:item_frame', '#forge:plates/gold'],
            id: `create:crafting/kinetics/placard`
        },
        {
            output: 'create:rose_quartz_lamp',
            inputs: ['create:polished_rose_quartz', '#forge:dusts/glowstone', '#forge:wires/lead'],
            id: `create:crafting/kinetics/rose_quartz_lamp`
        },
        {
            output: '9x ars_nouveau:greater_experience_gem',
            inputs: ['create:experience_block'],
            id: `create:crafting/materials/experience_nugget_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
