ServerEvents.tags('enchantment', (event) => {
    const enchantments = [
        'apotheosis:earths_boon',
        'apotheosis:infusion',
        'apotheosis:rebounding',
        'apotheosis:spearfishing',
        'ars_elemental:mirror_shield',
        'ars_nouveau:reactive',
        'minecraft:binding_curse',
        'minecraft:soul_speed',
        'minecraft:swift_sneak',
        'minecraft:vanishing_curse',
        'supplementaries:stasis'
    ];

    event.get('the_bumblezone:blacklisted_crystalline_flower_enchantments').add(enchantments);
});
