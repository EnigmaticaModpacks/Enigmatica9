// priority: 100
const $PotionBuilder = Java.loadClass('dev.latvian.mods.kubejs.misc.PotionBuilder');

StartupEvents.registry('potion', (event) => {
    const recipes = [
        {
            potion: 'ars_nouveau:flight',
            duration: 180,
            amplifier: 0,
            id: 'flight'
        },
        {
            potion: 'ars_nouveau:flight',
            duration: 480,
            amplifier: 0,
            id: 'long_flight'
        },
        {
            potion: 'cofh_core:true_invisibility',
            duration: 180,
            amplifier: 0,
            id: 'true_invisibility'
        },
        {
            potion: 'cofh_core:true_invisibility',
            duration: 480,
            amplifier: 0,
            id: 'long_true_invisibility'
        }
    ];

    recipes.forEach((recipe) => {
        event.createCustom(recipe.id, () => {
            return new $PotionBuilder(recipe.id)
                .effect(recipe.potion, recipe.duration * 20, recipe.amplifier)
                .createObject();
        });
    });
});
