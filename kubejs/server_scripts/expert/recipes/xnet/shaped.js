ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/xnet/shaped/';

    const recipes = [
        {
            output: '16x xnet:netcable_routing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:fluix_glass_cable',
                B: '#forge:fabrics/woven',
                C: 'quark:white_rune'
            },
            id: `${id_prefix}netcable_routing`
        },
        {
            output: `xnet:connector_routing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: `quark:white_rune`,
                C: 'ae2:interface'
            },
            id: `${id_prefix}connector_routing`
        },
        {
            output: `xnet:connector_upgrade`,
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:gems/spirit_attuned',
                B: `#forge:plates/plastic`,
                C: `#forge:paper`,
                D: 'ae2:me_p2p_tunnel'
            },
            id: `${id_prefix}connector_upgrade`
        },
        {
            output: `xnet:advanced_connector_routing`,
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:gems/spirit_attuned',
                B: `#forge:plates/plastic`,
                C: `xnet:connector_routing`,
                D: 'ae2:me_p2p_tunnel'
            },
            id: `${id_prefix}advanced_connector_routing`
        },
        {
            output: `xnet:controller`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'immersiveengineering:electron_tube',
                B: `supplementaries:crystal_display`,
                C: '#forge:plates/aluminum',
                D: 'ae2:energy_acceptor',
                E: 'ae2:energy_cell'
            },
            id: `${id_prefix}controller`
        },
        {
            output: `2x xnet:router`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'immersiveengineering:electron_tube',
                B: `supplementaries:crystal_display`,
                C: '#forge:plates/aluminum',
                D: 'ae2:controller',
                E: 'supplementaries:relayer'
            },
            id: `${id_prefix}router`
        }
    ];

    xnet_colors.forEach((color) => {
        recipes.push(
            {
                output: `16x xnet:netcable_${color}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'ae2:fluix_glass_cable',
                    B: '#forge:fabrics/woven',
                    C: `quark:${color}_rune`
                },
                id: `${id_prefix}netcable_${color}`
            },
            {
                output: `xnet:connector_${color}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: '#forge:nuggets/electrum',
                    B: `quark:${color}_rune`,
                    C: 'ae2:interface'
                },
                id: `${id_prefix}connector_${color}`
            },
            {
                output: `xnet:advanced_connector_${color}`,
                pattern: [' A ', 'BCB', ' D '],
                key: {
                    A: '#forge:gems/spirit_attuned',
                    B: `#forge:plates/plastic`,
                    C: `xnet:connector_${color}`,
                    D: 'ae2:me_p2p_tunnel'
                },
                id: `${id_prefix}advanced_connector_${color}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
