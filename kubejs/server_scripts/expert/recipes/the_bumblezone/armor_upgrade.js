ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/the_bumblezone/armor_upgrade/';

    const recipes = [];

    const chestplates = [
        'bumble_bee_chestplate_trans_1',
        'bumble_bee_chestplate_trans_2',
        'bumble_bee_chestplate_1',
        'bumble_bee_chestplate_2'
    ];

    chestplates.forEach((chestplate) => {
        recipes.push({
            output: Item.of(
                `the_bumblezone:${chestplate}`,
                `{display:{Lore:['{"text":"Upgrade: Allows extended flight!","color":"gold"}']}}`
            ),
            pattern: ['AAA', 'APA', 'AAA'],
            key: {
                A: '#forge:ingots/sky',
                P: `the_bumblezone:${chestplate}`
            },
            id: `${id_prefix}${chestplate}_upgrade`
        });
    });

    recipes.forEach((recipe) => {
        event
            .shaped(recipe.output, recipe.pattern, recipe.key)
            .modifyResult((inventory, itemstack) => {
                let item = inventory.find(Item.of(recipe.key.P));
                let nbt = {};
                if (item.nbt) {
                    nbt = item.nbt;
                }
                nbt.forcedMaxFlyingTickTime = 72000;
                nbt.requiredWearablesCountForForcedFlyingTime = 4;
                nbt.display = { Lore: ['{"text":"Exceptionally lightweight","color":"gold"}'] };
                return itemstack.withNBT(nbt);
            })
            .id(recipe.id);
    });
});
