ServerEvents.tags('item', (event) => {
    event.add('forge:ores', ['minecraft:ancient_debris']);
    event.add('forge:ores/nether/gold', ['minecraft:nether_gold_ore']);
    event.add('forge:ores/netherite', 'minecraft:ancient_debris');
    event.get('forge:ores/emerald').add('byg:emeraldite_ore');
    event.get('forge:ores/emeraldite').remove('byg:emeraldite_ore');
});
