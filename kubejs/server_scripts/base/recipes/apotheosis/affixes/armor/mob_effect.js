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

    const id_prefix = 'apotheosis:affixes/armor/mob_effect/';
    const recipes = [
        {
            name: 'revitalizing',
            type: 'apotheosis:mob_effect',
            mob_effect: 'ars_nouveau:recovery',
            target: 'HURT_SELF',
            cooldown: 1200,
            values: {
                epic: { duration: { min: 20, steps: 1, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 20, steps: 3, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 40, steps: 7, step: 40 }, amplifier: { min: 1, steps: 2, step: 1 } }
            },
            types: ['helmet', 'chestplate', 'leggings', 'boots']
        },
        {
            name: 'bolstering',
            type: 'apotheosis:mob_effect',
            mob_effect: 'minecraft:resistance',
            target: 'HURT_SELF',
            values: {
                rare: { duration: { min: 20, steps: 3, step: 20 }, amplifier: 0 },
                epic: { duration: { min: 40, steps: 5, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 60, steps: 7, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 100, steps: 10, step: 40 }, amplifier: { min: 1, steps: 2, step: 1 } }
            },
            types: ['helmet', 'chestplate', 'leggings', 'boots']
        },
        {
            name: 'shielding',
            type: 'apotheosis:mob_effect',
            mob_effect: 'ars_nouveau:shielding',
            target: 'HURT_SELF',
            values: {
                rare: { duration: { min: 20, steps: 3, step: 20 }, amplifier: 0 },
                epic: { duration: { min: 40, steps: 5, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 60, steps: 7, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 100, steps: 10, step: 40 }, amplifier: { min: 1, steps: 2, step: 1 } }
            },
            types: ['helmet', 'chestplate', 'leggings', 'boots']
        },
        {
            name: 'chilling',
            type: 'apotheosis:mob_effect',
            mob_effect: 'cofh_core:chilled',
            target: 'HURT_ATTACKER',
            values: {
                epic: { duration: { min: 40, steps: 5, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                mythic: { duration: { min: 60, steps: 7, step: 20 }, amplifier: { min: 0, steps: 1, step: 1 } },
                ancient: { duration: { min: 100, steps: 10, step: 40 }, amplifier: { min: 1, steps: 2, step: 1 } }
            },
            types: ['helmet', 'chestplate', 'leggings', 'boots']
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
