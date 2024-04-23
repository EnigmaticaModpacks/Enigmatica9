ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/lich', (table) => {
        table.addPool((pool) => {
            pool.rolls = 4;
            pool.addItem(
                Item.of(
                    'ars_nouveau:novice_spell_book',
                    '{color:12,display:{Lore:[\'{"text":"Just what sort of leather is this, anyway?","color":"dark_red"}\'],Name:\'{"text":"Tattered Spell Book","color":"dark_purple"}\'}}'
                ),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('minecraft:enchanted_book').enchant('spirit:soul_reaper', 1), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem('twilightforest:charm_of_life_2', 1, [5, 15]);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_elementa:anima_essence'), 1, [10, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_nouveau:abjuration_essence'), 1, [10, 16]);
        });
    });
});
