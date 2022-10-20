//priority: 500
ServerEvents.tags('block', (event) => {
    let cardboard_whitelist = [];

    let basic_containers = getItemsInTag('#enigmatica:containers/basic');

    event
        .get('mekanism:cardboard_blacklist')
        .add(/.*/)
        .remove(cardboard_whitelist)
        .remove(basic_containers)
        .add(/sophisticatedstorage:.*/); // RE-remove sophisticated storage, as those don't like Cardboard Boxes
});
