ServerEvents.tags('item', (event) => {
    event.removeAll('blue_skies:storage_blocks');

    event.removeAll('blue_skies:storage_blocks/falsite');
    event.removeAll('blue_skies:storage_blocks/ventium');
    event.removeAll('blue_skies:storage_blocks/horizonite');

    event.removeAll('blue_skies:storage_blocks/raw_falsite');
    event.removeAll('blue_skies:storage_blocks/raw_ventium');
    event.removeAll('blue_skies:storage_blocks/raw_horizonite');

    event.removeAll('blue_skies:storage_blocks/pyrope');
    event.removeAll('blue_skies:storage_blocks/aquite');
    event.removeAll('blue_skies:storage_blocks/diopside');
    event.removeAll('blue_skies:storage_blocks/moonstone');

    event.removeAll('blue_skies:storage_blocks/raw_aquite');
    event.removeAll('blue_skies:storage_blocks/raw_charoite');
});
