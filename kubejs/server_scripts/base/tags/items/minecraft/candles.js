ServerEvents.tags('item', (event) => {
    let items = [/candle/];
    event.get('minecraft:candles').add(items);
});
