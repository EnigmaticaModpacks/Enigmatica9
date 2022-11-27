ServerEvents.recipes((event) => {
    const recipes = [];

    const recipes_to_remove = []

    let props = Object.keys(metal_properties);
    
    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:${metal}_gear`)) {
            // Remove other recipes
            // Reason for this is pretty simple, AU doesn't unify recipes that are created / modified by KubeJS, so we need to remove unused recipes manually >.>
            // OR recipe is a bit different, but if we modify it, it will not be Unified as well ^^"
            if (Item.exists(`industrialforegoing:${metal}_gear`)) {
                recipes_to_remove.push({
                    id: `industrialforegoing:${metal}_gear`
                })
            }
        }
    })

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });

    recipes_to_remove.forEach((recipe) => {
        event.remove(recipe)
    })
});
