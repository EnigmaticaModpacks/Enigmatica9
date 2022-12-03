ServerEvents.tags('item', (event) => {
    event.get("forge:storage_blocks/raw_falsite").add("blue_skies:raw_falsite_block")
    event.get("forge:storage_blocks/raw_horizonite").add("blue_skies:raw_horizonite_block")
    event.get("forge:storage_blocks/raw_ventium").add("blue_skies:raw_ventium_block")
    event.get("blue_skies:storage_blocks/raw_falsite").remove("blue_skies:raw_falsite_block")
    event.get("blue_skies:storage_blocks/raw_horizonite").remove("blue_skies:raw_horizonite_block")
    event.get("blue_skies:storage_blocks/raw_ventium").remove("blue_skies:raw_ventium_block")
});
