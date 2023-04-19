ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/metallurgic_infusing/';

    const recipes = [
        // {
        //     input: { tag: 'forge:stones/andesite', amount: 2)}
        //     chemicalInput: { amount: 20, tag: "emendatusenigmatica:zinc"},
        //     output: Item.of('emendatusenigmatica:andesite_ingot'),
        //     id: `${id_prefix}andesite_alloy`
        // },
        // {
        //     input: { tag: 'forge:dusts/iron', amount: 2)},
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:nickel"},
        //     output: Item.of('emendatusenigmatica:invar_dust', 2),
        //     id: `${id_prefix}invar_alloy`
        // },
        {
            input: { tag: 'forge:dusts/copper' },
            chemicalInput: { amount: 10, tag: 'mekanism:gold' },
            output: Item.of('emendatusenigmatica:rose_gold_dust'),
            id: `${id_prefix}rose_gold_alloy`
        } //,
        // {
        //     input: { tag: 'forge:dusts/copper' },
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:zinc"},
        //     output: Item.of('emendatusenigmatica:brass_dust'),
        //     id: `${id_prefix}brass_alloy`
        // },
        // {
        //     input: { tag: 'forge:dusts/copper' },
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:nickel"},
        //     output: Item.of('emendatusenigmatica:constantan_dust'),
        //     id: `${id_prefix}constantan_alloy`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        recipe.itemInput = { ingredient: recipe.input };
        recipe.output = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
