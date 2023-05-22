// TODO: Delete next breaking update
// This script is TEMPORARY!
// It should be removed in next release / breaking update, with additional removal of EE Vanilla materials, full list of items removed can be found here:
// https://github.com/EnigmaticaModpacks/Enigmatica9/pull/338
// It is used to add conversion note for all items that are going to be removed!

JEIEvents.information((event) => {
    const materials = ["copper", "iron", "gold", "diamond", "emerald", "netherite"]
    const types = ["ingot", "nugget", "block"]
    const conversion_message = [
        Text.of("This item is going to be removed in the near future.").red(),
        " ",
        Text.of("Please convert it to the vanilla variant before updating.").red()
    ]

    materials.forEach(material => {

        types.forEach(type => {
            let ee_item = `emendatusenigmatica:${material}_${type}`;
            let mc_item = `minecraft:${material}_${type}`;
            if (Item.exists(ee_item) && Item.exists(mc_item)) {
                event.addItem(ee_item, conversion_message);
            }
        })

        let ee_item = `emendatusenigmatica:raw_${material}`;
        let mc_item = `minecraft:raw_${material}`;
        if (Item.exists(ee_item) && Item.exists(mc_item)) {
            event.addItem(ee_item, conversion_message);
        }
        if (Item.exists(ee_item + "_block") && Item.exists(mc_item + "_block")) {
            event.addItem(ee_item, conversion_message);
        }

    })
});
ItemEvents.tooltip((event) => {
    const materials = ["copper", "iron", "gold", "diamond", "emerald", "netherite"]
    const types = ["ingot", "nugget", "block"]
    const conversion_message = "This item is going to be removed! Convert it before updating."

    materials.forEach(material => {

        types.forEach(type => {
            let item = `emendatusenigmatica:${material}_${type}`;
            if (Item.exists(item) && Item.exists(`minecraft:${material}_${type}`)) {
                event.add(item, Text.of(conversion_message).red());
            }
        })

        let item = `emendatusenigmatica:raw_${material}`;
        if (Item.exists(item) && Item.exists(`minecraft:raw_${material}`)) {
            event.add(item, Text.of(conversion_message).red());
        }
        if (Item.exists(item + "_block") && Item.exists(`minecraft:raw_${material}_block`)) {
            event.add(item + "_block", Text.of(conversion_message).red());
        }

    })
});