ServerEvents.tags('item', (event) => {
    event
        .get('thermal:crafting/dies')
        .add([
            'ae2:silicon_press',
            'ae2:logic_processor_press',
            'ae2:engineering_processor_press',
            'ae2:calculation_processor_press'
        ]);
});
