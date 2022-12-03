ServerEvents.tags('item', (event) => {
    event.get("forge:ores/falsite").add("blue_skies:falsite_ore")
    event.get("forge:ores/horizonite").add("blue_skies:horizonite_ore")
    event.get("forge:ores/ventium").add("blue_skies:ventium_ore")
    event.get("blue_skies:ores/falsite").remove("blue_skies:falsite_ore")
    event.get("blue_skies:ores/horizonite").remove("blue_skies:horizonite_ore")
    event.get("blue_skies:ores/ventium").remove("blue_skies:ventium_ore")
});
