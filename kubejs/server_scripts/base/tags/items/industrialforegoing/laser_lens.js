ServerEvents.tags('item', (event) => {
    const items = [
        'industrialforegoing:laser_lens0',
        'industrialforegoing:laser_lens1',
        'industrialforegoing:laser_lens2',
        'industrialforegoing:laser_lens3',
        'industrialforegoing:laser_lens4',
        'industrialforegoing:laser_lens5',
        'industrialforegoing:laser_lens6',
        'industrialforegoing:laser_lens7',
        'industrialforegoing:laser_lens8',
        'industrialforegoing:laser_lens9',
        'industrialforegoing:laser_lens10',
        'industrialforegoing:laser_lens11',
        'industrialforegoing:laser_lens12',
        'industrialforegoing:laser_lens13',
        'industrialforegoing:laser_lens14',
        'industrialforegoing:laser_lens15'
    ];

    event.get('industrialforegoing:laser_lens').add(items);

    event.get('industrialforegoing:laser_lens/white').add('industrialforegoing:laser_lens0');
    event.get('industrialforegoing:laser_lens/orange').add('industrialforegoing:laser_lens1');
    event.get('industrialforegoing:laser_lens/magenta').add('industrialforegoing:laser_lens2');
    event.get('industrialforegoing:laser_lens/light_blue').add('industrialforegoing:laser_lens3');
    event.get('industrialforegoing:laser_lens/yellow').add('industrialforegoing:laser_lens4');
    event.get('industrialforegoing:laser_lens/lime').add('industrialforegoing:laser_lens5');
    event.get('industrialforegoing:laser_lens/pink').add('industrialforegoing:laser_lens6');
    event.get('industrialforegoing:laser_lens/grey').add('industrialforegoing:laser_lens7');
    event.get('industrialforegoing:laser_lens/light_grey').add('industrialforegoing:laser_lens8');
    event.get('industrialforegoing:laser_lens/cyan').add('industrialforegoing:laser_lens9');
    event.get('industrialforegoing:laser_lens/purple').add('industrialforegoing:laser_lens10');
    event.get('industrialforegoing:laser_lens/blue').add('industrialforegoing:laser_lens11');
    event.get('industrialforegoing:laser_lens/brown').add('industrialforegoing:laser_lens12');
    event.get('industrialforegoing:laser_lens/green').add('industrialforegoing:laser_lens13');
    event.get('industrialforegoing:laser_lens/red').add('industrialforegoing:laser_lens14');
    event.get('industrialforegoing:laser_lens/black').add('industrialforegoing:laser_lens15');
});
