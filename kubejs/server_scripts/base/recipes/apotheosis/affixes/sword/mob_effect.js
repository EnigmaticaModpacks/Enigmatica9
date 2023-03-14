ServerEvents.highPriorityData((event) => {
    /*
    Valid Targets:
        ATTACK_SELF
		ATTACK_TARGET
		HURT_SELF
		HURT_ATTACKER
		BREAK_SELF
		ARROW_SELF
		ARROW_TARGET
		BLOCK_SELF
		BLOCK_ATTACKER
    */

    const id_prefix = 'apotheosis:affixes/sword/mob_effect/';
    const recipes = [
        {
            name: 'breathless',
            type: 'apotheosis:mob_effect',
            mob_effect: 'naturesaura:breathless',
            target: 'ATTACK_TARGET',
            values: {
                rare: { duration: { min: 100, steps: 5, step: 20 }, amplifier: 0 },
                epic: { duration: { min: 140, steps: 8, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 180, steps: 10, step: 20 }, amplifier: { min: 0, steps: 2, step: 1 } },
                ancient: { duration: { min: 240, steps: 10, step: 40 }, amplifier: { min: 2, steps: 3, step: 1 } }
            },
            types: ['sword', 'trident', 'heavy_weapon']
        },
        {
            name: 'bleeding',
            type: 'apotheosis:mob_effect',
            mob_effect: 'apotheosis:bleeding',
            target: 'ATTACK_TARGET',
            values: {
                rare: { duration: { min: 100, steps: 5, step: 20 }, amplifier: 0 },
                epic: { duration: { min: 140, steps: 8, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 180, steps: 10, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 240, steps: 10, step: 40 }, amplifier: { min: 2, steps: 3, step: 1 } }
            },
            types: ['sword', 'trident', 'heavy_weapon']
        },
        {
            name: 'paralysis',
            type: 'apotheosis:mob_effect',
            mob_effect: 'the_bumblezone:paralyzed',
            target: 'ATTACK_TARGET',
            values: {
                mythic: { duration: { min: 20, steps: 10, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 240, steps: 10, step: 40 }, amplifier: { min: 2, steps: 3, step: 1 } }
            },
            types: ['sword', 'trident', 'heavy_weapon']
        },
        {
            name: 'blasting',
            type: 'apotheosis:mob_effect',
            mob_effect: 'ars_nouveau:blasting',
            target: 'ATTACK_TARGET',
            values: {
                epic: { duration: { min: 40, steps: 8, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 20, steps: 4, step: 20 }, amplifier: { min: 0, steps: 2, step: 1 } },
                ancient: { duration: { min: 10, steps: 2, step: 20 }, amplifier: { min: 1, steps: 3, step: 1 } }
            },
            types: ['sword', 'trident', 'heavy_weapon']
        }
    ];

    const disabled_recipes = [];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ name: recipe.name, conditions: [{ type: 'forge:false' }] });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
