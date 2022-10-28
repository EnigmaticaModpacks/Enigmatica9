//priority: 1001

const gateways_wave_modifiers = {
    wave_two: [
        {
            attribute: 'generic.max_health',
            operation: 'MULTIPLY_TOTAL',
            value: 0.33
        },
        {
            attribute: 'generic.armor',
            operation: 'ADDITION',
            value: 2.5
        },
        {
            attribute: 'generic.attack_damage',
            operation: 'MULTIPLY_TOTAL',
            value: 0.33
        },
        {
            attribute: 'generic.knockback_resistance',
            operation: 'ADDITION',
            value: 0.05
        },
        {
            attribute: 'generic.movement_speed',
            operation: 'MULTIPLY_TOTAL',
            value: 0.05
        }
    ],
    wave_three: [
        {
            attribute: 'generic.max_health',
            operation: 'MULTIPLY_TOTAL',
            value: 0.66
        },
        {
            attribute: 'generic.armor',
            operation: 'ADDITION',
            value: 4
        },
        {
            attribute: 'generic.attack_damage',
            operation: 'MULTIPLY_TOTAL',
            value: 0.5
        },
        {
            attribute: 'generic.knockback_resistance',
            operation: 'ADDITION',
            value: 0.1
        },
        {
            attribute: 'generic.movement_speed',
            operation: 'MULTIPLY_TOTAL',
            value: 0.1
        }
    ],
    wave_four: [
        {
            attribute: 'generic.max_health',
            operation: 'MULTIPLY_TOTAL',
            value: 0.85
        },
        {
            attribute: 'generic.armor',
            operation: 'ADDITION',
            value: 5
        },
        {
            attribute: 'generic.attack_damage',
            operation: 'MULTIPLY_TOTAL',
            value: 0.66
        },
        {
            attribute: 'generic.knockback_resistance',
            operation: 'ADDITION',
            value: 0.15
        },
        {
            attribute: 'generic.movement_speed',
            operation: 'MULTIPLY_TOTAL',
            value: 0.15
        }
    ],
    wave_five: [
        {
            attribute: 'generic.max_health',
            operation: 'MULTIPLY_TOTAL',
            value: 1.25
        },
        {
            attribute: 'generic.armor',
            operation: 'ADDITION',
            value: 6
        },
        {
            attribute: 'generic.attack_damage',
            operation: 'MULTIPLY_TOTAL',
            value: 0.85
        },
        {
            attribute: 'generic.knockback_resistance',
            operation: 'ADDITION',
            value: 0.2
        },
        {
            attribute: 'generic.movement_speed',
            operation: 'MULTIPLY_TOTAL',
            value: 0.2
        }
    ]
};
