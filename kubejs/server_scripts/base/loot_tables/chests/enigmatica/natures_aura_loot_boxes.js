ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/natures_aura/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('emendatusenigmatica:infused_iron', 1, 8);
            pool.addItem('naturesaura:gold_powder', 1, 8);
            pool.addItem('naturesaura:token_joy', 1, 1);
            pool.addItem('naturesaura:token_fear', 1, 1);
            pool.addItem('naturesaura:token_anger', 1, 1);
            pool.addItem('naturesaura:token_sorrow', 1, 1);
            pool.addItem('naturesaura:ancient_log', 1, 16);
            pool.addItem('naturesaura:ender_crate', 1, 2);
            pool.addItem('naturesaura:spawn_lamp', 1, 1);
            pool.addItem(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 1, 8);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/natures_aura/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('naturesaura:token_euphoria', 1, 1);
            pool.addItem('naturesaura:token_terror', 1, 1);
            pool.addItem('naturesaura:token_rage', 1, 1);
            pool.addItem('naturesaura:token_grief', 1, 1);
            pool.addItem('emendatusenigmatica:sky_ingot', 1, 2);
            pool.addItem('emendatusenigmatica:tainted_gold', 1, 8);
            pool.addItem('naturesaura:birth_spirit', 1, [4, 8]);
            pool.addItem(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'), 1, 8);
            pool.addItem(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 1, 8);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/natures_aura/rare' });
        });
    });
});
