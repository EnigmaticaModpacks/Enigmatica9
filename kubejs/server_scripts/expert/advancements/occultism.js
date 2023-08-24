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

    const id_prefix = 'occultism:advancements/occultism/';

    const advancements = [
        {
            parent: 'occultism:occultism/root',
            criteria: {
                death_tome_gate_small: {
                    conditions: {
                        ritual_predicate: {
                            ritual_id: 'enigmatica:expert/occultism/ritual/death_tome_gate_small'
                        }
                    },
                    trigger: 'occultism:ritual'
                }
            },
            display: {
                announce_to_chat: false,
                description: { translate: 'advancements.occultism.death_tome_gate_small.description' },
                frame: 'task',
                hidden: true,
                icon: { item: 'occultism:jei_dummy/none' },
                show_toast: false,
                title: { translate: 'advancements.occultism.death_tome_gate_small.title' }
            },
            requirements: [['death_tome_gate_small']]
        }
    ];

    advancements.forEach((advancement) => {
        event.addJson(`${id_prefix}${advancement.id}.json`, advancement);
    });
});
