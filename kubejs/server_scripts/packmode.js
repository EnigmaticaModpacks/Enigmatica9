//priority: 1004
PlayerEvents.loggedIn((event) => {
    const expertModeQuest = '2CCCDD05AED3153F';
    const normalModeQuest = '0E45018D600614BA';

    console.log(`Setting mode for player: ${event.player}`);

    if (global.packmode == 'expert') {
        event.player.data.ftbquests.reset(normalModeQuest);
        event.player.data.ftbquests.complete(expertModeQuest);
    } else {
        event.player.data.ftbquests.reset(expertModeQuest);
        event.player.data.ftbquests.complete(normalModeQuest);
    }
});

const defaultConfig = {
    mode: 'normal',
    message: 'Valid modes are normal and expert.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal' and 'expert'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isExpertMode = packMode == 'expert';
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';

console.log(`Current packmode is: ${global.packmode}`);
