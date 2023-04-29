// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Functions
    // tag -> Tag to search for
    // suffix -> suffix for the EE variant of the item
    // prefix -> Prefix for the item, used if you want to unify an item with different name, like crushed ores
    // ItemStack -> Original ItemStack
    // replaceWithRaw -> Should it replace with Raw ore, or return unified version of the item?
    // count -> if replaceWithRaw => True, then specifies the amount of raw ore given for each item.
    function unifyLoot(tag, suffix, ItemStack, prefix, replaceWithRaw, count) {
        prefix = (typeof prefix == undefined || prefix == null)? "": prefix + "_";
        replaceWithRaw = (typeof replaceWithRaw == undefined || replaceWithRaw == null)? false: true;
        count = (typeof count == undefined || count == null)? ItemStack.getCount(): count;
        // If itemstack already is from EE and replaceWithRaw is false, just return it.
        if (ItemStack.getId().startsWith('emendatusenigmatica:') && !replaceWithRaw) {return ItemStack;}
        tag = (tag.startsWith("#")? tag.substring(1): tag) + "/"
        let iterator = ItemStack.getTags().iterator();
        while (iterator.hasNext()) {
            let tagString = iterator.next().location().toString();
            if (tagString.startsWith(tag)) {
                let tagSubString = tagString.substring(tag.lastIndexOf("/")+1);
                if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`) && replaceWithRaw) {
                    return Item.of(`emendatusenigmatica:raw_${tagSubString}`, count);
                } else if (Item.exists(`emendatusenigmatica:${tagSubString}_${suffix}`)) {
                    return Item.of(`emendatusenigmatica:${prefix}${tagSubString}_${suffix}`, ItemStack.getCount());
                } else {
                    return ItemStack;
                }
            }
        }
        console.error(
            `LootJS Unification Loot Modifier triggered for ${suffix}s, but none of the required tags (${tag}) were found in the item: ` +
                ItemStack.getId()
        );
        return ItemStack;
    }

    // Replace loot in chests!
    event
        .addLootTypeModifier(LootType.CHEST)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {return unifyLoot("forge:ingots", "ingot", ItemStack, null, true)})
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (ItemStack) => {return unifyLoot("forge:nuggets", "nugget", ItemStack, null, true, 1)})
        // Storage Blocks
        .modifyLoot(Ingredient.of('#forge:storage_blocks'), (ItemStack) => {return unifyLoot("forge:storage_blocks", "block", ItemStack, null, true, ItemStack.getCount() * (Math.floor(Math.random() * 3) + 3))})
        // Raw Ores
        .modifyLoot(Ingredient.of('#forge:raw_materials'), (ItemStack) => {return unifyLoot("forge:raw_materials", "gem", ItemStack, null, true)})
        // Crushed Ores
        .modifyLoot(Ingredient.of('#create:crushed_ores'), (ItemStack) => {return unifyLoot("create:crushed_ores", "ore", ItemStack, "crushed")})
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (ItemStack) => {return unifyLoot("forge:gems", "gem", ItemStack)}) 
        // Dusts
        .modifyLoot(Ingredient.of('#forge:dusts'), (ItemStack) => {return unifyLoot("forge:dusts", "dust", ItemStack)}) 

    // Replace drops from mobs!
    event
        .addLootTypeModifier(LootType.ENTITY)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {return unifyLoot("forge:ingots", "ingot", ItemStack)})
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (ItemStack) => {return unifyLoot("forge:nuggets", "nugget", ItemStack)})
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (ItemStack) => {return unifyLoot("forge:gems", "gem", ItemStack)})

    // Replace all block drops of Raw Ores etc for EE ones!
    event
        .addLootTypeModifier(LootType.BLOCK)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {return unifyLoot("forge:ingots", "ingot", ItemStack)})
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (ItemStack) => {return unifyLoot("forge:nuggets", "nugget", ItemStack)})
        // Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (ItemStack) => {return unifyLoot("forge:gems", "gem", ItemStack)})
        // Raw Ores
        // Raw Ores being replaced by themselves is intended! It is because raw ores from gems are disabled, and if something wants to drop / generate a raw ore that is disabled (Blue Skies), it will get a gem instead!
        .modifyLoot(Ingredient.of('#forge:raw_materials'), (ItemStack) => {return unifyLoot("forge:raw_materials", "gem", ItemStack, null, true)})
        // Dusts
        .modifyLoot(Ingredient.of('#forge:dusts'), (ItemStack) => {return unifyLoot("forge:dusts", "dust", ItemStack)})
});
