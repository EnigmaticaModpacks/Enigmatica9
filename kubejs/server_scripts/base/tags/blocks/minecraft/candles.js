ServerEvents.tags('block', (event) => {
    const items = [/candle/];
    event.get('minecraft:candles').add(items);
});
