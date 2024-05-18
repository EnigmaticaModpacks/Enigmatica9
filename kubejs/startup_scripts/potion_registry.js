// priority: 100
const $PotionBuilder = Java.loadClass('dev.latvian.mods.kubejs.misc.PotionBuilder');

StartupEvents.registry('potion', (event) => {
    const recipes = [
        {
            potion: 'ars_nouveau:flight',
            types: [
                { name: 'base', duration: 180, amplifier: 0 },
                { name: 'long', duration: 480, amplifier: 0 }
            ]
        },
        {
            potion: 'cofh_core:true_invisibility',
            types: [
                { name: 'base', duration: 180, amplifier: 0 },
                { name: 'long', duration: 480, amplifier: 0 }
            ]
        },
        {
            potion: 'minecraft:strength',
            types: [{ name: 'greater', duration: 90, amplifier: 3 }]
        },
        {
            potion: 'minecraft:jump_boost',
            types: [{ name: 'greater', duration: 90, amplifier: 3 }]
        },
        {
            potion: 'minecraft:speed',
            types: [{ name: 'greater', duration: 90, amplifier: 3 }]
        },
        {
            potion: 'minecraft:instant_damage',
            types: [{ name: 'greater', duration: 0, amplifier: 3 }]
        },
        {
            potion: 'minecraft:regeneration',
            types: [{ name: 'greater', duration: 22, amplifier: 3 }]
        },
        {
            potion: 'minecraft:haste',
            types: [{ name: 'greater', duration: 90, amplifier: 3 }]
        },
        {
            potion: 'apotheosis:knowledge',
            types: [{ name: 'greater', duration: 60, amplifier: 3 }]
        },
        {
            potion: 'ars_nouveau:mana_regen',
            types: [{ name: 'greater', duration: 180, amplifier: 3 }]
        },
        {
            potion: 'ars_nouveau:spell_damage',
            types: [{ name: 'greater', duration: 180, amplifier: 3 }]
        },
        {
            potion: 'ars_nouveau:shielding',
            types: [{ name: 'greater', duration: 180, amplifier: 3 }]
        },
        {
            potion: 'ars_nouveau:recovery',
            types: [{ name: 'greater', duration: 180, amplifier: 3 }]
        },
        {
            potion: 'cofh_core:sundered',
            types: [
                { name: 'base', duration: 180, amplifier: 0 },
                { name: 'long', duration: 480, amplifier: 0 },
                { name: 'strong', duration: 90, amplifier: 1 },
                { name: 'greater', duration: 90, amplifier: 3 }
            ]
        },
        {
            potion: 'occultism:double_jump',
            types: [
                { name: 'base', duration: 180, amplifier: 0 },
                { name: 'long', duration: 480, amplifier: 0 },
                { name: 'strong', duration: 90, amplifier: 1 },
                { name: 'greater', duration: 90, amplifier: 3 }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.types.forEach((type) => {
            let potion_id =
                type.name == 'base' ? recipe.potion.split(':')[1] : `${type.name}_${recipe.potion.split(':')[1]}`;

            event.createCustom(potion_id, () => {
                return new $PotionBuilder(potion_id)
                    .effect(recipe.potion, type.duration * 20, type.amplifier)
                    .createObject();
            });
        });
    });
});
