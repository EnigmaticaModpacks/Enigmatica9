ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        // Emendatus Enigmatica Related Stuff for Normal Mode
        // Ore Processing Rework Related stuff

        // { id: /create:crushing\/.*_ore/ },
        // { id: /create:crushing\/.*raw_.*_block/},
        // { id: /create:crushing\/.*raw_/},
        // { id: /create:compat\/.*_ore/ },
        // { id: /create:splashing\/.*crushed_.*_ore/ },
        { id: /emendatusenigmatica:slurry\/dirt/ },
        { id: /emendatusenigmatica:dust\/from_ore_crusher_spirit/ },
        { id: /emendatusenigmatica:dust\/from_ore_crush_spell/ },
        { id: /emendatusenigmatica:crushed\/from_raw_block_crushing/ },
        { id: /emendatusenigmatica:shard\/from_ore/ },
        { id: /emendatusenigmatica:shard\/from_raw/ },
        { id: /emendatusenigmatica:clump\/from_ore/ },
        { id: /emendatusenigmatica:clump\/from_raw/ },
        // { id: /immersiveengineering:crusher\/raw_.*/},
        // { id: /immersiveengineering:crusher\/ore_.*/},
        { id: /immersiveengineering:arcfurnace\/ore/ },
        { id: /immersiveengineering:arcfurnace\/raw_ore/ },
        { id: /immersiveengineering:arcfurnace\/raw_block/ },
        { id: /thermal:machines\/smelter\/smelter.*_ore/ },
        { id: /thermal:machines\/smelter\/smelter.*_raw/ },
        // { id: 'thermal:machines/pulverizer/pulverizer_apatite'},
        // { id: 'thermal:machines/pulverizer/pulverizer_cinnabar'},
        // { id: 'thermal:machines/pulverizer/pulverizer_niter'},
        // { id: 'thermal:machines/pulverizer/pulverizer_sulfur'},
        // { id: /thermal:machines\/pulverizer\/pulverizer_.*_ingot_to_dust/},
        // { id: /thermal:compat\/.*\/pulverizer_.*_ingot_to_dust/},
        { id: /thermal:compat\/.*_ore/, type: "thermal:smelter"},
        { id: /thermal:compat\/.*_raw_/, type: "thermal:smelter"},
        // { id: /thermal:machines\/pulverizer\/pulverizer.*_ore/ },
        // { id: /thermal:machines\/pulverizer\/pulverizer.*_raw/ },
        // { id: /thermal:compat\/.*_ore/, type: "thermal:pulverizer"},
        // { id: /thermal:compat\/.*_raw_/, type: "thermal:pulverizer"},
        // { id: /thermal:compat\/create.*\/centrifuge_create.*_crushed/ },
        // { id: /mekanism:processing\/.*\/from_raw_block/ },
        // { id: /mekanism:processing\/.*\/from_raw_ore/ },
        // { id: /mekanism:processing\/.*\/from_ore/ },
        { id: 'occultism:crushing/iesnium_dust' }, // There is a lot of different recipes with really similar ids (occultism:crushing/copper_dust_from_raw), so regex would delete all of those, what we don't want
        { id: 'occultism:crushing/copper_dust' }, 
        { id: 'occultism:crushing/gold_dust' }, // This was used to be regex, if duplicates of gold_dust are found, this is why.
        { id: 'occultism:crushing/silver_dust' },
        { id: 'occultism:crushing/iron_dust' }
    ]

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});