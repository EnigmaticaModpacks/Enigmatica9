ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isExpertMode == false) {
        return;
    }

    const materials = [
        'aeternium',
        'aluminum',
        'amber',
        'andesite',
        'apatite',
        'apple',
        'aquite',
        'bamboo',
        'beetroot',
        'bitumen',
        'brass',
        'bronze',
        'carminite',
        'carrot',
        'charcoal',
        'charoite',
        'cinnabar',
        'coal_coke',
        'coal',
        'cobalt',
        'coke',
        'constantan',
        'copper',
        'deepslate',
        'diamond',
        'dimensional',
        'diopside',
        'electrum',
        'elementium',
        'emerald',
        'ender_pearl',
        'enderium',
        'falsite',
        'flax',
        'fluorite',
        'gold',
        'gunpowder',
        'hop_graphite',
        'hops',
        'horizonite',
        'iesnium',
        'infused_iron',
        'invar',
        'iridium',
        'iron',
        'lapis',
        'lead',
        'lumium',
        'nether_gold',
        'nether_quartz',
        'netherite',
        'nickel',
        'niter',
        'obsidian',
        'onion',
        'osmium',
        'peridot',
        'platinum',
        'potato',
        'pyrope',
        'quartz',
        'raw_zinc',
        'redstone',
        'refined_glowstone',
        'refined_obsidian',
        'rice',
        'rose_gold',
        'ruby',
        'saltpeter',
        'sapphire',
        'signalum',
        'silver',
        'sky',
        'source',
        'steel',
        'sugar_cane',
        'sulfur',
        'tainted_gold',
        'tin',
        'tomato',
        'uranium',
        'ventium',
        'wood',
        'zinc'
    ];

    const regex_materials = `(${materials.join('|')})`;
    const payload = {
        filters: [
            `ae2:ender_dust`,
            `ars_nouveau:source_gem`,

            `/create:(crushed_raw|andesite_alloy|golden_sheet|raw_zinc|deepslate_ore)/`,
            `/create:${regex_materials}_(ingot|nugget|sheet|block|ore)/`,
            `/createaddition:${regex_materials}_(ingot|nugget|sheet|rod|grit)/`,

            `/emendatusenigmatica:(iron|gold|copper|diamond|emerald|netherite|raw)_(gold|copper|iron|ingot|nugget|block)/`,
            `/emendatusenigmatica:${regex_materials}_air/`,
            `/emendatusenigmatica:andesite/`,

            `/immersiveengineering:(stick|dust|plate|ingot|nugget|raw|raw_block|storage|ore|deepslate_ore)_${regex_materials}/`,
            `/immersiveengineering:(coke|slag)/`,

            `/industrialforegoing:.*_gear/`,

            `/mekanism:(clump|dirty_dust|crystal|shard)_${regex_materials}/`,
            `/mekanism:(dust|ingot|nugget|raw|block_raw|block)_${regex_materials}/`,
            `/mekanism:.*_ore/`,
            `mekanism:sawdust`,

            `/minecraft:deepslate_${regex_materials}/`,
            `/minecraft:${regex_materials}_ore/`,

            `/naturesaura:(sky|infused|tainted)/`,

            `/occultism:${regex_materials}_(dust|ingot|nugget|block|ore)/`,
            `/occultism:raw_${regex_materials}/`,

            `quark:charcoal_block`,

            `/thermal:${regex_materials}_(dust|ingot|nugget|plate|gear|block|seeds)/`,
            `/thermal:raw_${regex_materials}/`,

            'twilightforest:carminite'
        ],
        disable: true
    };

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_unify_materials.json`, payload);
});
