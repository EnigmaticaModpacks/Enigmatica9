ServerEvents.tags('entity_type', (event) => {
    const entities = [
        /occultism/,
        /ars_nouveau:familiar_.*/,
        /ars_elemental:.*_familiar/,
        'twilightforest:naga',
        'twilightforest:lich',
        'twilightforest:minoshroom',
        'twilightforest:hydra',
        'twilightforest:knight_phantom',
        'twilightforest:ur_ghast',
        'twilightforest:alpha_yeti',
        'twilightforest:naga',
        'twilightforest:snow_queen',
        'minecraft:wither',
        'minecraft:ender_dragon',
        'blue_skies:alchemist',
        'blue_skies:summoner',
        'blue_skies:arachnarch',
        'blue_skies:starlit_crusher'
    ];
    event.get('enigmatica:mob_spawner_blacklist').add(entities);
});
