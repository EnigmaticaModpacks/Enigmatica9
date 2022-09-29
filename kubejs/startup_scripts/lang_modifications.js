//priority: 800
const entries = [
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
];

let lang_file = `kubejs/assets/enigmatica/lang/en_us.json`;
let lang_json = JsonIO.read(lang_file);

entries.forEach((entry) => {
    lang_json[entry.key] = entry.value[packMode];
});

JsonIO.write(lang_file, lang_json);
