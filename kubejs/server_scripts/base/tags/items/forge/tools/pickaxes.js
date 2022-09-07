ServerEvents.tags('item', (event) => {
    var items = [/_pickaxe/, /_paxel/, /_aiot/];

    var exceptions = ['occultism:ritual_dummy/craft_infused_pickaxe'];

    var tags = ['minecraft:cluster_max_harvestables', 'forge:tools', 'forge:pickaxes', 'forge:tools/pickaxes'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
