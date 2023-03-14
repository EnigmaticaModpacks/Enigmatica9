ServerEvents.chestLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    let village_chests = [
        'profession/everbright/cartographer',
        'profession/everbright/library',
        'profession/everbright/temple',
        'profession/everbright/stargazer',
        'profession/everbright/nightwatcher',

        'profession/everdawn/cartographer',
        'profession/everdawn/library',
        'profession/everdawn/temple',
        'profession/everdawn/stargazer',
        'profession/everdawn/nightwatcher'
    ];

    village_chests.forEach((village_chest) => {
        event.modify(`blue_skies:village/${village_chest}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = [1, 1];
                pool.addItem(
                    Item.of(
                        'ars_nouveau:stable_warp_scroll',
                        '{an_warp_scroll:{dim:"twilightforest:twilight_forest",x:0,xRot:0.0f,y:200,yRot:0.0f,z:0}}'
                    ),
                    1
                );
            });
        });
    });
});
