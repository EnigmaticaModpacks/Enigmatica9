const emi_hide_recipes = { filters: [] };

// EMI Compat
emi_hide_recipes.filters.push({ id: `jei:/${id.replace(':', '/')}` });

JsonIO.write(`kubejs/assets/emi/recipe/filters/emi_hide_recipes.json`, emi_hide_recipes);
