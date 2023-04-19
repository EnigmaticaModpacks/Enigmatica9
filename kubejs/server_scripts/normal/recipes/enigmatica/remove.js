ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        // Emendatus Enigmatica Related Stuff for Normal Mode
        // Ore Processing Rework Related stuff

        { id: /emendatusenigmatica:slurry\/dirt/ },
        { id: /emendatusenigmatica:dust\/from_ore_crusher_spirit/ },
        { id: /emendatusenigmatica:dust\/from_ore_crush_spell/ },
        { id: /emendatusenigmatica:crushed\/from_raw_block_crushing/ },
        { id: /emendatusenigmatica:shard\/from_ore/ },
        { id: /emendatusenigmatica:shard\/from_raw/ },
        { id: /emendatusenigmatica:clump\/from_ore/ },
        { id: /emendatusenigmatica:clump\/from_raw/ },
        { id: 'emendatusenigmatica:ingot/from_crushed_ore/smelting/netherite' },
        { id: 'emendatusenigmatica:ingot/from_crushed_ore/blasting/netherite' },

        { id: /immersiveengineering:arcfurnace\/ore/ },
        { id: /immersiveengineering:arcfurnace\/raw_ore/ },
        { id: /immersiveengineering:arcfurnace\/raw_block/ },

        { id: /thermal:machines\/smelter\/smelter.*_ore/ },
        { id: /thermal:machines\/smelter\/smelter.*_raw/ },
        { id: /thermal:compat\/.*_ore/, type: 'thermal:smelter' },
        { id: /thermal:compat\/.*_raw_/, type: 'thermal:smelter' },

        { id: /occultism:crushing\/gold_dust/ }, // This is regex to also remove duplicates from raw ore
        { id: 'occultism:crushing/iesnium_dust' }, // There is a lot of different recipes with really similar ids (occultism:crushing/copper_dust_from_raw), so regex would delete all of those, what we don't want
        { id: 'occultism:crushing/copper_dust' },
        { id: 'occultism:crushing/silver_dust' },
        { id: 'occultism:crushing/iron_dust' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
