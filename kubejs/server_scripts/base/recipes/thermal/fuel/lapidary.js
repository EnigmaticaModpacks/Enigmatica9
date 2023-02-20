ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/lapidary_fuel/';

    var multiplier = 1;
    const recipes = [
        {
            ingredient: { item: 'rftoolsbase:dimensionalshard' },
            energy: 700000,
            id: `${id_prefix}dimensionalshard`
        },
        {
            ingredient: { tag: 'forge:gems/diamond' },
            energy: 500000,
            id: `${id_prefix}diamond`
        },
        {
            ingredient: { tag: 'forge:gems/charoite' },
            energy: 500000,
            id: `${id_prefix}charoite`
        },
        {
            ingredient: { tag: 'forge:gems/aquite' },
            energy: 500000,
            id: `${id_prefix}aquite`
        },
        {
            ingredient: { tag: 'forge:gems/emerald' },
            energy: 125000,
            id: `${id_prefix}emerald`
        },
        {
            ingredient: { tag: 'forge:gems/diopside' },
            energy: 125000,
            id: `${id_prefix}diopside`
        },
        {
            ingredient: { tag: 'forge:gems/fluix' },
            energy: 125000,
            id: `${id_prefix}fluix`
        },
        {
            ingredient: { tag: 'forge:gems/pyrope' },
            energy: 125000,
            id: `${id_prefix}pyrope`
        },
        {
            ingredient: { tag: 'forge:gems/lapis' },
            energy: 40000,
            id: `${id_prefix}lapis`
        },
        {
            ingredient: { tag: 'forge:gems/prismarine' },
            energy: 40000,
            id: `${id_prefix}prismarine`
        },
        {
            ingredient: { tag: 'forge:gems/quartz' },
            energy: 40000,
            id: `${id_prefix}quartz`
        },
        {
            ingredient: { tag: 'forge:gems/fluorite' },
            energy: 40000,
            id: `${id_prefix}fluorite`
        },
        {
            ingredient: { tag: 'forge:gems/apatite' },
            energy: 40000,
            id: `${id_prefix}apatite`
        },
        {
            ingredient: { tag: 'forge:gems/amethyst' },
            energy: 40000,
            id: `${id_prefix}amethyst`
        },
        {
            ingredient: { tag: 'forge:gems/certus_quartz' },
            energy: 40000,
            id: `${id_prefix}certus_quartz`
        },
        {
            ingredient: { tag: 'forge:gems/moonstone' },
            energy: 40000,
            id: `${id_prefix}moonstone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:lapidary_fuel';
        recipe.energy = recipe.energy * multiplier;
        event.custom(recipe).id(recipe.id);
    });
});
