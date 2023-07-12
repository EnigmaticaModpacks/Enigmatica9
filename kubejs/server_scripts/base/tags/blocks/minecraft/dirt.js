ServerEvents.tags('block', (event) => {
    event.get('minecraft:dirt').remove([/farmingforblockheads:fertilized_farmland/]);
});
