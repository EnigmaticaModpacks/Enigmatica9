ServerEvents.tags('item', (event) => {
    event
        .get('forge:tools')
        .add([/_hammer$/, /jackhammer/, /warhammer/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
    event
        .get('forge:tools/hammers')
        .add([/_hammer$/, /jackhammer/, /warhammer/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
    event
        .get('forge:hammers')
        .add([/_hammer$/, /jackhammer/, /warhammer/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
});
