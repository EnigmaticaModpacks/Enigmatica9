ServerEvents.tags('item', (event) => {
    const items = [/_pickaxe/, /_paxel/, /_aiot/];

    const exceptions = ['occultism:ritual_dummy/craft_infused_pickaxe'];

    // const tagGroups = ['minecraft:cluster_max_harvestables', 'forge:tools', 'forge:pickaxes', 'forge:tools/pickaxes'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/pickaxes').add(items).remove(exceptions);
    event.get('forge:pickaxes').add(items).remove(exceptions);
    event.get('minecraft:cluster_max_harvestables').add(items).remove(exceptions);
});
