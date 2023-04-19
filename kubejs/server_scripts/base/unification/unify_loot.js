// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Replace ingots / nuggets / Storage Blocks / Gems in loot chests!
    event
        .addLootTypeModifier(LootType.CHEST)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:ingots/')) {
                    let tagSubString = tagString.substring(13);
                    if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`)) {
                        return Item.of(`emendatusenigmatica:raw_${tagSubString}`, ItemStack.getCount());
                    } else if (Item.exists(`emendatusenigmatica:${tagSubString}_ingot`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_ingot`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Ingots, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        })
        // Nuggets
        .modifyLoot(Ingredient.of('#forge:nuggets'), (ItemStack) => {
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:nuggets/')) {
                    let tagSubString = tagString.substring(14);
                    if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`)) {
                        return Item.of(`emendatusenigmatica:raw_${tagSubString}`);
                    } else if (Item.exists(`emendatusenigmatica:${tagSubString}_nugget`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_nugget`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Nuggets, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        })
        // Storage Blocks
        .modifyLoot(Ingredient.of('#forge:storage_blocks'), (ItemStack) => {
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:storage_blocks/')) {
                    let tagSubString = tagString.substring(21);
                    if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`)) {
                        return Item.of(
                            `emendatusenigmatica:raw_${tagSubString}`,
                            ItemStack.getCount() * (Math.floor(Math.random() * 3) + 3)
                        );
                    } else if (Item.exists(`emendatusenigmatica:${tagSubString}_block`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_block`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Storage Blocks, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        })
        //Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (ItemStack) => {
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:gems/')) {
                    let tagSubString = tagString.substring(11);
                    if (Item.exists(`emendatusenigmatica:${tagSubString}_gem`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_gem`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Gems, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        });

    // Replace Ingots drops from mobs!
    event
        .addLootTypeModifier(LootType.ENTITY)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:ingots/')) {
                    let tagSubString = tagString.substring(13);
                    if (Item.exists(`emendatusenigmatica:${tagSubString}_ingot`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_ingot`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Ingots, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        });

    // Replace all block drops of Raw Ores etc for EE ones!
    event
        .addLootTypeModifier(LootType.BLOCK)
        // Ingots
        .modifyLoot(Ingredient.of('#forge:ingots'), (ItemStack) => {
            if (ItemStack.getId().startsWith('emendatusenigmatica')) {
                return ItemStack;
            }
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:ingots/')) {
                    let tagSubString = tagString.substring(13);
                    if (Item.exists(`emendatusenigmatica:${tagSubString}_ingot`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_ingot`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Ingots, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        })
        //Gems
        .modifyLoot(Ingredient.of('#forge:gems'), (ItemStack) => {
            if (ItemStack.getId().startsWith('emendatusenigmatica')) {
                return ItemStack;
            }
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:gems/')) {
                    let tagSubString = tagString.substring(11);
                    if (Item.exists(`emendatusenigmatica:${tagSubString}_gem`)) {
                        return Item.of(`emendatusenigmatica:${tagSubString}_gem`, ItemStack.getCount());
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Gems, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        })
        // Raw Ores
        .modifyLoot(Ingredient.of('#forge:raw_materials'), (ItemStack) => {
            if (ItemStack.getId().startsWith('emendatusenigmatica')) {
                return ItemStack;
            }
            let iterator = ItemStack.getTags().iterator();
            while (iterator.hasNext()) {
                let tagString = iterator.next().location().toString();
                if (tagString.startsWith('forge:raw_materials/')) {
                    let tagSubString = tagString.substring(20);
                    if (Item.exists(`emendatusenigmatica:raw_${tagSubString}`)) {
                        return Item.of(`emendatusenigmatica:raw_${tagSubString}`, ItemStack.getCount());
                    } else if (ItemStack.getId().startsWith('blue_skies')) {
                        if (Item.exists(`emendatusenigmatica:${tagSubString}_gem`)) {
                            return Item.of(`emendatusenigmatica:${tagSubString}_gem`);
                        }
                    } else {
                        return ItemStack;
                    }
                }
            }
            console.error(
                'LootJS Unification Loot Modifier triggered for Raw Materials, but none of the required tags were found in the item: ' +
                    ItemStack.getId()
            );
            return ItemStack;
        });
});
