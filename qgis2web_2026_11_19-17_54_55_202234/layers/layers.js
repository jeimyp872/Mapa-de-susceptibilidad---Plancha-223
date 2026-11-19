var wms_layers = [];

var lyr_SuceptibilidadMovMasa_sinpeso_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SuceptibilidadMovMasa_sinpeso<br />\
    <img src="styles/legend/SuceptibilidadMovMasa_sinpeso_0_0.png" /> 1,0000<br />\
    <img src="styles/legend/SuceptibilidadMovMasa_sinpeso_0_1.png" /> 2,0000<br />\
    <img src="styles/legend/SuceptibilidadMovMasa_sinpeso_0_2.png" /> 3,0000<br />\
    <img src="styles/legend/SuceptibilidadMovMasa_sinpeso_0_3.png" /> 4,0000<br />\
    <img src="styles/legend/SuceptibilidadMovMasa_sinpeso_0_4.png" /> 5,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SuceptibilidadMovMasa_sinpeso_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8531227.895746, 483417.196728, -8442111.983870, 573126.753886]
        })
    });
var group_SUCEPTIBILIDAD = new ol.layer.Group({
                                layers: [lyr_SuceptibilidadMovMasa_sinpeso_0,],
                                fold: 'open',
                                title: 'SUCEPTIBILIDAD'});

lyr_SuceptibilidadMovMasa_sinpeso_0.setVisible(true);
var layersList = [group_SUCEPTIBILIDAD];
