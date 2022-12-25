ServerEvents.tags('item', (event) => {
    event.removeAll(`blue_skies:gems`);
    event.removeAll(`blue_skies:gems/pyrope`);
    event.removeAll(`blue_skies:gems/aquite`);
    event.removeAll(`blue_skies:gems/diopside`);
    event.removeAll(`blue_skies:gems/charoite`);
    event.removeAll(`blue_skies:gems/moonstone`);
});
