// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // How to use unifyLoot()
    // tag              -> String - Tag to search for (accepts both tags with and without #)
    // suffix           -> String - suffix for the EE variant of the item
    // prefix           -> String - prefix for the EE variant of the item (for example, when you want to unify crushed ores (...:crushed_iron_ore))
    // itemStack        -> itemStack - Original itemStack that was meant to be dropped
    // replaceWithRaw   -> Boolean - Should it replace the drop with Raw ore, or return unified version of the item?
    // count            -> integer - if replaceWithRaw is True, then specifies the amount of raw ore given for each item.
    function unifyLoot(tag, suffix, itemStack, prefix, replaceWithRaw, count) {
        prefix = !prefix ? '' : prefix + '_';
        replaceWithRaw = !replaceWithRaw ? false : true;
        count = !count ? itemStack.getCount() : count;
        // If itemstack already is from EE and replaceWithRaw is false, just return it.
        if (itemStack.getId().startsWith('emendatusenigmatica:') && !replaceWithRaw) {
            return itemStack;
        }
        tag = (tag.startsWith('#') ? tag.substring(1) : tag) + '/';
        let iterator = itemStack.getTags().iterator();
        while (iterator.hasNext()) {
            let tagString = iterator.next().location().toString();
            if (tagString.startsWith(tag)) {
                let tagSubString = tagString.substring(tag.lastIndexOf('/') + 1);
                if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`) && replaceWithRaw) {
                    return Item.of(`emendatusenigmatica:raw_${tagSubString}`, count);
                }
                if (Item.exists(`emendatusenigmatica:${tagSubString}_${suffix}`)) {
                    return Item.of(`emendatusenigmatica:${prefix}${tagSubString}_${suffix}`, itemStack.getCount());
                }
                return itemStack;
            }
        }
        console.error(
            `LootJS Unification Loot Modifier triggered for ${suffix}s, but none of the required tags (${tag}) were found in the item: ` +
                itemStack.getId()
        );
        return itemStack;
    }

    // Replace loot in chests!
    event
        .addLootTypeModifier(LootType.CHEST)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (itemStack) =>
            unifyLoot('forge:ingots', 'ingot', itemStack, null, true)
        )
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (itemStack) =>
            unifyLoot('forge:nuggets', 'nugget', itemStack, null, true, 1)
        )
        // Storage Blocks
        .modifyLoot(Ingredient.of('#forge:storage_blocks'), (itemStack) =>
            unifyLoot(
                'forge:storage_blocks',
                'block',
                itemStack,
                null,
                true,
                itemStack.getCount() * (Math.floor(Math.random() * 3) + 3)
            )
        )
        // Raw Ores
        .modifyLoot(Ingredient.of('#forge:raw_materials'), (itemStack) =>
            unifyLoot('forge:raw_materials', 'gem', itemStack, null, true)
        )
        // Crushed Ores
        .modifyLoot(Ingredient.of('#create:crushed_ores'), (itemStack) =>
            unifyLoot('create:crushed_ores', 'ore', itemStack, null, true)
        )
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (itemStack) => unifyLoot('forge:gems', 'gem', itemStack))
        // Dusts
        .modifyLoot(Ingredient.of('#forge:dusts'), (itemStack) => unifyLoot('forge:dusts', 'dust', itemStack));

    // Replace drops from mobs!
    event
        .addLootTypeModifier(LootType.ENTITY)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (itemStack) => unifyLoot('forge:ingots', 'ingot', itemStack))
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (itemStack) => unifyLoot('forge:nuggets', 'nugget', itemStack))
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (itemStack) => unifyLoot('forge:gems', 'gem', itemStack));

    // Replace all block drops of Raw Ores etc for EE ones!
    event
        .addLootTypeModifier(LootType.BLOCK)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (itemStack) => unifyLoot('forge:ingots', 'ingot', itemStack))
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (itemStack) => unifyLoot('forge:nuggets', 'nugget', itemStack))
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (itemStack) => unifyLoot('forge:gems', 'gem', itemStack))
        // Raw Ores
        // Raw Ores being replaced by themselves is intended! It is because raw ores for gems are disabled, so if something wants to drop / generate a raw ore that is disabled (Blue Skies), it will return a gem instead!
        .modifyLoot(Ingredient.of('#forge:raw_materials'), (itemStack) =>
            unifyLoot('forge:raw_materials', 'gem', itemStack, null, true)
        )
        // Dusts
        .modifyLoot(Ingredient.of('#forge:dusts'), (itemStack) => unifyLoot('forge:dusts', 'dust', itemStack));
});
