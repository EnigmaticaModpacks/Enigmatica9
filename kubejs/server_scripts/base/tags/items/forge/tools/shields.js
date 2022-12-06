ServerEvents.tags('item', (event) => {
    event
        .get('forge:tools')
        .add([/_shield$/, 'immersiveengineering:shield'])
        .remove(['twilightforest:stronghold_shield']);
    event
        .get('forge:tools/shields')
        .add([/_shield$/, 'immersiveengineering:shield'])
        .remove(['twilightforest:stronghold_shield']);
    event
        .get('forge:shields')
        .add([/_shield$/, 'immersiveengineering:shield'])
        .remove(['twilightforest:stronghold_shield']);
});
