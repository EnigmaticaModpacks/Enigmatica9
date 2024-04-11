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
            types: [{ name: 'greater', duration: 180, amplifier: 3 }]
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
