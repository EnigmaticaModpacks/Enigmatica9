ServerEvents.tags('block', (event) => {
    let items = [/candle/];
    event.get('minecraft:candles').add(items);
});
