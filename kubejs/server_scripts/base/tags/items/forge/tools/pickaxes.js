ServerEvents.tags('item', (event) => {
    const items = [/_pickaxe/, /_paxel/, /_aiot/];

    const exceptions = ['occultism:ritual_dummy/craft_infused_pickaxe'];

    const tagGroups = ['minecraft:cluster_max_harvestables', 'forge:tools', 'forge:pickaxes', 'forge:tools/pickaxes'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
