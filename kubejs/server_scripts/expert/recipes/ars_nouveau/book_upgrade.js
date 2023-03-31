ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/book_upgrade/';
    const recipes = [
        {
            result: { item: 'ars_nouveau:apprentice_spell_book' },
            ingredients: [{ item: 'ars_nouveau:novice_spell_book' }, { item: 'naturesaura:calling_spirit' }],
            id: 'ars_nouveau:apprentice_spell_book_upgrade'
        },
        {
            result: { item: 'ars_nouveau:archmage_spell_book' },
            ingredients: [
                { item: 'ars_nouveau:apprentice_spell_book' },
                { item: 'ars_elemental:mark_of_mastery' },
                { item: 'naturesaura:death_ring' }
            ],
            id: 'ars_nouveau:archmage_spell_book_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:book_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
