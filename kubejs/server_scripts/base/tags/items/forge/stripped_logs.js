ServerEvents.tags('item', (event) => {
    event.add('forge:stripped_logs', [/log_stripped/, /stripped_.*_(log|stem|pedu)/]);
});
