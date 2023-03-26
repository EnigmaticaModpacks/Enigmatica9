ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/revolver_assembly/';
    const recipes = [
        {
            result: { item: 'immersiveengineering:revolver' },
            pattern: [' hg', ' dc', 'b  '],
            key: {
                b: { item: 'immersiveengineering:gunpart_barrel' },
                c: { tag: 'forge:gears/compressed_iron' },
                d: { item: 'immersiveengineering:gunpart_drum' },
                g: { item: 'immersiveengineering:wooden_grip' },
                h: { item: 'immersiveengineering:gunpart_hammer' }
            },
            copy_nbt: [1, 4, 6],
            id: 'immersiveengineering:crafting/revolver'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:revolver_assembly';
        event.custom(recipe).id(recipe.id);
    });
});
