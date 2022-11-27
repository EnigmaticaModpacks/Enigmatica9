ServerEvents.recipes((event) => {
    const recipes = [];

    const recipes_to_remove = []

    const exceptions = [
        'brass'
    ]

    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:${metal}_plate`)) {
            recipes.push({
                output: `emendatusenigmatica:${metal}_plate`,
                inputs: [`#forge:ingots/${metal}`, '#forge:tools/crafting_hammers'],
                id: `emendatusenigmatica:plate/from_ingot/${metal}`
            })
            // Remove other recipes
            // Reason for this is pretty simple, AU doesn't unify recipes that are created / modified by KubeJS, so we need to remove unused recipes manually >.>
            // OR recipe is a bit different, but if we modify it, it will not be Unified as well ^^"
            if (!exceptions.includes(metal)) {
                recipes_to_remove.push({
                    id: `immersiveengineering:crafting/plate_${metal}_hammering`
                })
            }
        }
    })

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });

    recipes_to_remove.forEach((recipe) => {
        event.remove(recipe)
    })
});
