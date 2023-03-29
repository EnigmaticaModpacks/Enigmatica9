ServerEvents.tags('block', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.get('minecraft:wither_summon_base_blocks').removeAll();
    event.get('minecraft:wither_summon_base_blocks').add(['kubejs:disabled_structure_indicator']);
});
