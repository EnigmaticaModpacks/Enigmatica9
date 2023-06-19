JEIEvents.information((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const descriptions = [
        {
            items: ['naturesaura:projectile_generator'],
            text: [`Valid Projectiles:`, ``, `● Ender Pearls`, `● Bottles o' Enchanting`]
        },
        {
            items: ['ars_nouveau:novice_spell_book'],
            text: [
                `Obtained as a drop from the Lich in Twilight Forest. Come prepared, as they won't give it up without a fight.`
            ]
        },
        {
            items: ['byg:subzero_crystal_shard'],
            text: [
                `Obtained as a drop from the Snow Queen in Twilight Forest. Come prepared, as they won't give it up without a fight.`
            ]
        },
        {
            items: ['kubejs:dream_stone'],
            text: [
                `A powerful artifact that plainly doesn't belong where it was found. Find its rightful owner and return it.`
            ]
        },
        {
            items: [/the_bumblezone:.*_bee_(helmet|chestplate|leggings|boots)/],
            text: [`Grants Elytra flight when wearing a full set.`]
        },
        {
            items: [/twilightforest:steeleaf_(helmet|chestplate|leggings|boots)/],
            text: [`Grants Luck when wearing a full set.`]
        },
        {
            items: [/naturesaura:depth_(helmet|chest|pants|shoes)/],
            text: [`Grants Shielding when wearing a full set.`]
        },
        {
            items: [/naturesaura:sky_(helmet|chest|pants|shoes)/],
            text: [`Grants Elytra flight when wearing a full set.`]
        },
        {
            items: [/naturesaura:infused_iron_(helmet|chest|pants|shoes)/],
            text: [`Grants Recovery when wearing a full set.`]
        },
        {
            items: [/thermal:beekeeper_(helmet|chestplate|leggings|boots)/],
            text: [`Grants extra protection from bees when wearing a full set.`]
        },
        {
            items: [/pneumaticcraft:pneumatic_(helmet|chestplate|leggings|boots)/],
            text: [`Grants Mana Regeneration when wearing a full set.`]
        },
        {
            items: [/mekanism:mekasuit_(helmet|bodyarmor|pants|boots)/],
            text: [
                `A powerful suit of armor that creates an anti-magic field around the wearer.`,
                ` `,
                ` Users will find it very difficult to cast spells but, while properly maintained, the armor will negate all incoming damage, magic or otherwise.`
            ]
        },
        {
            items: [/ars_elemental:aqua_/, /ars_elemental:earth_/, /ars_elemental:air_/, /ars_elemental:fire_/],
            text: [`Grants Spell Damage when wearing a full set.`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.expert.items.disabled.forEach((item) => {
        if (item !== air) {
            // console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
