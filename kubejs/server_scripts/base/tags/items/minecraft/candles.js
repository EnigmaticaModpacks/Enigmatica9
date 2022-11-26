ServerEvents.tags('item', (event) => {
    const items = [/candle/];
    event.get('minecraft:candles').add(items);
});
