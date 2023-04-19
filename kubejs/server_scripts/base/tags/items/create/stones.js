ServerEvents.tags('item', (event) => {
    event.add('forge:stone', [
        'create:asurine',
        'create:crimsite',
        'create:limestone',
        'create:scoria',
        'create:scorchia',
        'create:veridium',
        'create:ochrum'
    ]);
    event.add('forge:stones/asurine', 'create:asurine');
    event.add('forge:stones/crimsite', 'create:crimsite');
    event.add('forge:stones/limestone', 'create:limestone');
    event.add('forge:stones/scoria', 'create:scoria');
    event.add('forge:stones/scorchia', 'create:scorchia');
    event.add('forge:stones/veridium', 'create:veridium');
    event.add('forge:stones/ochrum', 'create:ochrum');
});
