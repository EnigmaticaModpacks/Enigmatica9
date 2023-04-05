ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/lich', (table) => {
        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem(
                Item.of(
                    'ars_nouveau:novice_spell_book',
                    '{color:12,display:{Lore:[\'{"text":"Just what sort of leather is this, anyway?","color":"dark_red"}\'],Name:\'{"text":"Tattered Spell Book","color":"dark_purple"}\'}}'
                ),
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [5, 15];
            pool.addItem('twilightforest:charm_of_life_2', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem('supplementaries:antique_ink', 1, 1);
        });
    });
});
