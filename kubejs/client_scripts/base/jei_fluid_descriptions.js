JEIEvents.information((event) => {
    const descriptions = [
        {
            items: ['starbunclemania:source_fluid'],
            text: [`Use a Source Condenser to convert Source to this liquid form.`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            // console.log(`Descriptions: ${item}`);
            event.addFluid(item, description.text);
        });
    });
});
