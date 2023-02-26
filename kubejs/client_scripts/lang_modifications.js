//priority: 800
const entries = {
    naturesaura: [
        {
            key: 'block.naturesaura.infused_iron_block',
            value: {
                normal: 'Infused Iron Block',
                expert: 'Infused Ironwood Block'
            }
        },
        {
            key: 'item.naturesaura.infused_iron',
            value: {
                normal: 'Infused Iron Ingot',
                expert: 'Infused Ironwood Ingot'
            }
        },
        {
            key: 'advancement.naturesaura.infused_materials.desc',
            value: {
                normal: 'Use the Natural Altar to create Infused Iron',
                expert: 'Use the Natural Altar to create Infused Ironwood'
            }
        }
    ],
    create: [
        {
            key: 'block.create.andesite_belt_funnel',
            value: {
                normal: 'Andesite Belt Funnel',
                expert: 'Compressed Stone Belt Funnel'
            }
        },
        {
            key: 'block.create.andesite_casing',
            value: {
                normal: 'Andesite Casing',
                expert: 'Compressed Stone Casing'
            }
        },
        {
            key: 'block.create.andesite_encased_cogwheel',
            value: {
                normal: 'Andesite Encased Cogwheel',
                expert: 'Compressed Stone Encased Cogwheel'
            }
        },
        {
            key: 'block.create.andesite_encased_large_cogwheel',
            value: {
                normal: 'Andesite Encased Large Cogwheel',
                expert: 'Compressed Stone Encased Large Cogwheel'
            }
        },
        {
            key: 'block.create.andesite_encased_shaft',
            value: {
                normal: 'Andesite Encased Shaft',
                expert: 'Compressed Stone Encased Shaft'
            }
        },
        {
            key: 'block.create.andesite_funnel',
            value: {
                normal: 'Andesite Funnel',
                expert: 'Compressed Stone Funnel'
            }
        },
        {
            key: 'block.create.andesite_ladder',
            value: {
                normal: 'Andesite Ladder',
                expert: 'Compressed Stone Ladder'
            }
        },
        {
            key: 'block.create.andesite_tunnel',
            value: {
                normal: 'Andesite Tunnel',
                expert: 'Compressed Stone Tunnel'
            }
        },
        {
            key: 'block.create.mechanical_crafter',
            value: {
                normal: 'Mechancical Crafter',
                expert: 'Enchanted Crafter'
            }
        },
        {
            key: 'block.create.brass_casing',
            value: {
                normal: 'Brass Casing',
                expert: 'Enchanted Casing'
            }
        },
        {
            key: 'block.create.brass_funnel',
            value: {
                normal: 'Brass Funnel',
                expert: 'Enchanted Funnel'
            }
        },
        {
            key: 'block.create.brass_tunnel',
            value: {
                normal: 'Brass Tunnel',
                expert: 'Enchanted Tunnel'
            }
        },
        {
            key: 'item.create.brass_hand',
            value: {
                normal: 'Brass Hand',
                expert: 'Enchanted Hand'
            }
        },
        {
            key: 'advancement.create.andesite_alloy.desc',
            value: {
                normal: "Obtain some Andesite Alloy, Create's most important resource",
                expert: "Obtain some Compressed Stone, Create's most important resource"
            }
        },
        {
            key: 'advancement.create.andesite_casing',
            value: {
                normal: 'The Andesite Age',
                expert: 'The Compressed Stone Age'
            }
        },
        {
            key: 'advancement.create.andesite_casing.desc',
            value: {
                normal: 'Apply Andesite Alloy to stripped wood, creating a basic casing for your machines',
                expert: 'Apply Compressed Stone to stripped wood, creating a basic casing for your machines'
            }
        }
    ]
};

Object.keys(entries).forEach((mod) => {
    let lang_file = `kubejs/assets/${mod}/lang/en_us.json`;
    let lang_json = JsonIO.read(lang_file);

    entries[mod].forEach((entry) => {
        lang_json[entry.key] = entry.value[packMode];
    });

    JsonIO.write(lang_file, lang_json);
});
