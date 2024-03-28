ServerEvents.tags('item', (event) => {
    event.add('forge:stripped_logs', [/log_stripped/, /stripped_.*)(log|stem|pedu)/]);
});
