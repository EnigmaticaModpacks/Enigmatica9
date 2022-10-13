ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/eccentrictome/shapeless/';

    const recipes = [
        {
            output: Item.of('eccentrictome:tome', {
                'eccentrictome:mods': {
                    ars_nouveau: {
                        0: {
                            Count: 1,
                            id: 'ars_nouveau:worn_notebook'
                        }
                    },
                    blue_skies: {
                        0: {
                            Count: 1,
                            id: 'blue_skies:blue_journal'
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
                    littlelogistics: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'littlelogistics:guide' }
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
                        },
                        1: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'occultism:dictionary_of_spirits' }
                        }
                    },
                    patchouli: {
                        0: {
                            Count: 1,
                            id: 'patchouli:guide_book',
                            tag: { 'patchouli:book': 'patchouli:modded_for_dummies' }
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
                    }
                },
                'eccentrictome:version': 1
            }),
            inputs: ['minecraft:book', '#forge:bookshelves'],
            id: 'eccentrictome:tome'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
