ServerEvents.tags('item', (event) => {
    const items = [
        'patchouli:guide_book',
        'blue_skies:blue_journal',
        'occultism:dictionary_of_spirits',
        'rftoolsbase:manual',
        'ars_nouveau:worn_notebook',
        'immersiveengineering:manual'
    ];
    event.add('forge:manuals', items);
});
