ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/lapidary_fuel/';

    var multiplier = 1;
    const recipes = [
        { input: 'rftoolsbase:dimensionalshard', energy: 700000 },
        { input: '#forge:gems/diamond', energy: 500000 },
        { input: '#forge:gems/charoite', energy: 500000 },
        { input: '#forge:gems/aquite', energy: 500000 },

        { input: '#forge:gems/emerald', energy: 125000 },
        { input: '#forge:gems/diopside', energy: 125000 },
        { input: '#forge:gems/fluix', energy: 125000 },
        { input: '#forge:gems/pyrope', energy: 125000 },

        { input: '#forge:gems/lapis', energy: 40000 },
        { input: '#forge:gems/prismarine', energy: 40000 },
        { input: '#forge:gems/quartz', energy: 40000 },
        { input: '#forge:gems/fluorite', energy: 40000 },
        { input: '#forge:gems/apatite', energy: 40000 },
        { input: '#forge:gems/amethyst', energy: 40000 },
        { input: '#forge:gems/certus_quartz', energy: 40000 },
        { input: '#forge:gems/moonstone', energy: 40000 }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:lapidary_fuel';
        recipe.ingredient =
            recipe.input.charAt(0) == '#' ? { tag: recipe.input.split('#')[1] } : { item: recipe.input };

        recipe.energy = recipe.energy * multiplier;
        event.custom(recipe).id(`${id_prefix}${recipe.input.split('/')[1]}`);
    });
});
