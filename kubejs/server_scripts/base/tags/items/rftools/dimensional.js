ServerEvents.tags('item', (event) => {
    event.add('forge:gems/dimensional', 'rftoolsbase:dimensionalshard');
    event.add('forge:gems', 'rftoolsbase:dimensionalshard');
    event.remove('forge:dusts', 'rftoolsbase:dimensionalshard');

    event.add('forge:ores/dimensional', /rftoolsbase:dimensionalshard_/);
});
