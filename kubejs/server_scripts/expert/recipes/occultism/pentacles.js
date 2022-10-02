ServerEvents.highPriorityData((event) => {
    let pentacles = [
        {
            name: 'summon_familiar',
            pattern: [
                'F   P P   F',
                ' PP     PP ',
                ' PWP H PWP ',
                '  PP   PP  ',
                'P         P',
                '     B     ',
                'P         P',
                '  PP   PP  ',
                ' PWP   PWP ',
                ' PP     PP ',
                'F   P P   F'
            ],
            mapping: {
                B: 'occultism:golden_sacrificial_bowl',
                P: { block: 'naturesaura:gold_powder' },
                W: { block: 'occultism:chalk_glyph_white' },
                F: { block: 'twilightforest:firefly_jar' },
                H: { block: 'twilightforest:naga_trophy' }
            }
        }
    ];

    pentacles.forEach((pentacle) => {
        event.addJson(`occultism:occultism_pentacles/${pentacle.name}.json`, pentacle);
    });
});
