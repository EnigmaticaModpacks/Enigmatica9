ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isExpertMode == false) {
        return;
    }

    const materials = [
        'aeternium',
        'aluminum',
        'andesite',
        'amber',
        'apatite',
        'aquite',
        'bitumen',
        'brass',
        'bronze',
        'carminite',
        'charcoal',
        'charoite',
        'cinnabar',
        'coal',
        'coal_coke',
        'cobalt',
        'constantan',
        'copper',
        'diamond',
        'dimensional',
        'diopside',
        'electrum',
        'elementium',
        'emerald',
        'enderium',
        'ender_pearl',
        'falsite',
        'fluorite',
        'gold',
        'hop_graphite',
        'horizonite',
        'iesnium',
        'infused_iron',
        'invar',
        'iridium',
        'iron',
        'lapis',
        'lead',
        'lumium',
        'netherite',
        'nickel',
        'niter',
        'obsidian',
        'osmium',
        'peridot',
        'platinum',
        'pyrope',
        'redstone',
        'refined_glowstone',
        'refined_obsidian',
        'rose_gold',
        'ruby',
        'sapphire',
        'signalum',
        'silver',
        'sky',
        'source',
        'steel',
        'sulfur',
        'tainted_gold',
        'tin',
        'uranium',
        'ventium',
        'wood',
        'zinc',
        'quartz',
        'gunpowder',
        'rice',
        'onion',
        'tomato',
        'beetroot',
        'potato',
        'carrot',
        'apple',
        'bamboo',
        'sugar_cane'
    ];

    const regex_materials = `(${materials.join('|')})`;

    const payload = {
        filters: [
            `/immersiveengineering:(stick|dust|plate|ingot|nugget|raw|raw_block|storage)_${regex_materials}/`,
            `/mekanism:(dust|ingot|nugget|raw|block_raw|block)_${regex_materials}/`,
            `/mekanism:(clump|dirty_dust|crystal|shard)/`,
            `/thermal:${regex_materials}_(dust|ingot|nugget|plate|gear|block)/`,
            `/emendatusenigmatica:(iron|gold|copper)_(ingot|nugget|block)/`,
            `/create:${regex_materials}_(ingot|nugget|sheet|block)/`,
            `/create:crushed_raw/`,
            `/createaddition:${regex_materials}_(ingot|nugget|sheet|rod)/`

            // Create, Natures Aura
        ],
        disable: true
    };

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_unify_materials.json`, payload);
});
