// TODO: Delete next breaking update
// This script is TEMPORARY!
// It should be removed in next release / breaking update, with additional removal of EE Vanilla materials, full list of items removed can be found here:
// https://github.com/EnigmaticaModpacks/Enigmatica9/pull/338
// It is used to generate conversion recipes for each type from EE variant to Vanilla one.

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/emendatusenigmatica/ee_conversion/';
    const materials = ["copper", "iron", "gold", "diamond", "emerald", "netherite"]
    const types = ["ingot", "nugget", "block"]

    materials.forEach(material => {

        types.forEach(type => {
            let ee_item = `emendatusenigmatica:${material}_${type}`;
            let mc_item = `minecraft:${material}_${type}`;
            if (Item.exists(ee_item) && Item.exists(mc_item)) {
                event.shapeless(mc_item, ee_item).id(`${id_prefix}${material}/${type}`);
            }
        })

        let ee_item = `emendatusenigmatica:raw_${material}`;
        let mc_item = `minecraft:raw_${material}`;
        if (Item.exists(ee_item) && Item.exists(mc_item)) {
            event.shapeless(mc_item, ee_item).id(`${id_prefix}${material}/raw`);;
        }
        if (Item.exists(ee_item + "_block") && Item.exists(mc_item + "_block")) {
            event.shapeless(mc_item + "_block", ee_item + "_block").id(`${id_prefix}${material}/raw_block`);;
        }

    })

});