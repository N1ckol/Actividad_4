var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CentroA_sin_HNyMX_1 = new ol.format.GeoJSON();
var features_CentroA_sin_HNyMX_1 = format_CentroA_sin_HNyMX_1.readFeatures(json_CentroA_sin_HNyMX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentroA_sin_HNyMX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroA_sin_HNyMX_1.addFeatures(features_CentroA_sin_HNyMX_1);
var lyr_CentroA_sin_HNyMX_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentroA_sin_HNyMX_1, 
                style: style_CentroA_sin_HNyMX_1,
                interactive: true,
                title: '<img src="styles/legend/CentroA_sin_HNyMX_1.png" /> CentroA_sin_HNyMX'
            });
var format_Municipios_HN_2 = new ol.format.GeoJSON();
var features_Municipios_HN_2 = format_Municipios_HN_2.readFeatures(json_Municipios_HN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_HN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_HN_2.addFeatures(features_Municipios_HN_2);
var lyr_Municipios_HN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_HN_2, 
                style: style_Municipios_HN_2,
                interactive: true,
                title: '<img src="styles/legend/Municipios_HN_2.png" /> Municipios_HN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CentroA_sin_HNyMX_1.setVisible(true);lyr_Municipios_HN_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CentroA_sin_HNyMX_1,lyr_Municipios_HN_2];
lyr_CentroA_sin_HNyMX_1.set('fieldAliases', {'pais': 'pais', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'codpais': 'codpais', });
lyr_Municipios_HN_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'COD_MUNI': 'COD_MUNI', 'DEP': 'DEP', 'MUN': 'MUN', 'COD_MUN_': 'COD_MUN_', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CentroA_sin_HNyMX_1.set('fieldImages', {'pais': '', 'shape_leng': '', 'shape_area': '', 'codpais': '', });
lyr_Municipios_HN_2.set('fieldImages', {'NOMBRE': '', 'COD_MUNI': '', 'DEP': '', 'MUN': '', 'COD_MUN_': '', 'CODPAIS': '', 'Km2': '', 'Densidad': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_CentroA_sin_HNyMX_1.set('fieldLabels', {'pais': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', 'codpais': 'inline label', });
lyr_Municipios_HN_2.set('fieldLabels', {'NOMBRE': 'inline label', 'COD_MUNI': 'inline label', 'DEP': 'inline label', 'MUN': 'inline label', 'COD_MUN_': 'inline label', 'CODPAIS': 'inline label', 'Km2': 'inline label', 'Densidad': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Municipios_HN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});