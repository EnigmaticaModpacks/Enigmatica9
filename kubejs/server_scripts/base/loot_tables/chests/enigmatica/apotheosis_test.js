ServerEvents.chestLootTables((event) => {
    const tables = [
        {
            rolls: [500, 500],
            generic_entries: [{ type: 'apotheosis:random_affix_item', weight: 1 }]
        }
    ];

    tables.forEach((table) => {
        modifyLootTable(event, 'enigmatica:apotheosis_test', table);
    });
});
