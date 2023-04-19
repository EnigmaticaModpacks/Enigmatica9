ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add(['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer']);
    event
        .get('forge:tools/crafting_hammers')
        .add(['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer']);
});
