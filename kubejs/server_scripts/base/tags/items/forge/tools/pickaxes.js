ServerEvents.tags('item', (event) => {
    event
        .get('forge:tools')
        .add([/_pickaxe/, /_paxel/, /_aiot/])
        .remove(['occultism:ritual_dummy/craft_infused_pickaxe']);
    event
        .get('forge:tools/pickaxes')
        .add([/_pickaxe/, /_paxel/, /_aiot/])
        .remove(['occultism:ritual_dummy/craft_infused_pickaxe']);
    event
        .get('forge:pickaxes')
        .add([/_pickaxe/, /_paxel/, /_aiot/])
        .remove(['occultism:ritual_dummy/craft_infused_pickaxe']);
    event
        .get('minecraft:cluster_max_harvestables')
        .add([/_pickaxe/, /_paxel/, /_aiot/])
        .remove(['occultism:ritual_dummy/craft_infused_pickaxe']);
});
