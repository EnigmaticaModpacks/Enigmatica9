/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'create:advancements/';

    const advancements = [
        {
            id: 'brass',
            parent: 'create:diving_suit',
            criteria: {
                0: {
                    conditions: { items: [{ items: ['emendatusenigmatica:brass_ingot'] }] },
                    trigger: 'minecraft:inventory_changed'
                }
            },
            display: {
                announce_to_chat: false,
                description: { color: '#DBA213', translate: 'advancement.create.brass.desc' },
                frame: 'task',
                hidden: false,
                icon: { item: 'emendatusenigmatica:brass_ingot' },
                show_toast: true,
                title: { translate: 'advancement.create.brass' }
            },
            requirements: [['0']]
        }
    ];

    advancements.forEach((advancement) => {
        event.addJson(`${id_prefix}${advancement.id}.json`, advancement);
    });
});
