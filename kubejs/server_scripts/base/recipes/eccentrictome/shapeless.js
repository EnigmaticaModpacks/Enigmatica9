ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/eccentrictome/shapeless/';

    const recipes = [
        {
            output: Item.of('eccentrictome:tome', {
                'eccentrictome:mods': {
                    ae2: {
                        0: {
                            Count: 1,
                            id: 'ae2:guide'
                        }
                    },
                    apotheosis: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'apotheosis:apoth_chronicle' }
                        }
                    },
                    ars_nouveau: {
                        0: {
                            Count: 1,
                            id: 'ars_nouveau:worn_notebook'
                        }
                    },
                    engineersdecor: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }
                        }
                    },
                    ftbquests: {
                        0: {
                            Count: 1,
                            id: 'ftbquests:book'
                        }
                    },
                    immersiveengineering: {
                        0: {
                            Count: 1,
                            id: 'immersiveengineering:manual'
                        }
                    },
                    industrialforegoing: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'industrialforegoing:industrial_foregoing' }
                        }
                    },
                    littlelogistics: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'littlelogistics:guide' }
                        }
                    },
                    modonomicon: {
                        0: {
                            Count: 1,
                            id: 'modonomicon:modonomicon',
                            tag: { 'modonomicon:book_id': 'theurgy:the_hermetica' }
                        }
                    },
                    modularrouters: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'modularrouters:book' }
                        }
                    },
                    naturesaura: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'naturesaura:book' }
                        }
                    },
                    occultism: {
                        0: {
                            Count: 1,
                            id: 'occultism:dictionary_of_spirits',
                            tag: { 'modonomicon:book_id': 'occultism:dictionary_of_spirits' }
                        }
                    },
                    pneumaticcraft: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'pneumaticcraft:book' }
                        }
                    },
                    powah: {
                        0: {
                            Count: 1,
                            id: 'powah:book'
                        }
                    },
                    rftoolsbase: {
                        0: {
                            Count: 1,
                            id: 'rftoolsbase:manual'
                        }
                    },
                    sushigocrafting: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'sushigocrafting:sushigocrafting' }
                        }
                    },
                    thermal: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'thermal:guidebook' }
                        }
                    }
                },
                'eccentrictome:version': 1.0
            }),
            inputs: ['minecraft:book', '#forge:bookshelves'],
            id: 'eccentrictome:tome'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
