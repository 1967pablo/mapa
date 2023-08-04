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
var format_escuelas_1 = new ol.format.GeoJSON();
var features_escuelas_1 = format_escuelas_1.readFeatures(json_escuelas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_escuelas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_escuelas_1.addFeatures(features_escuelas_1);
var lyr_escuelas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_escuelas_1, 
                style: style_escuelas_1,
                interactive: true,
                title: '<img src="styles/legend/escuelas_1.png" /> escuelas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_escuelas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_escuelas_1];
lyr_escuelas_1.set('fieldAliases', {'esc': 'esc', 'depto': 'depto', 'zona': 'zona', 'ESCUELA': 'ESCUELA', 'DIRECCI�N': 'DIRECCI�N', 'LUGAR': 'LUGAR', 'esc_grados_alumnos_esc': 'esc_grados_alumnos_esc', 'esc_grados_alumnos_grado': 'esc_grados_alumnos_grado', 'esc_grados_alumnos_varones': 'esc_grados_alumnos_varones', 'esc_grados_alumnos_mujeres': 'esc_grados_alumnos_mujeres', 'esc_grados_alumnos_docente': 'esc_grados_alumnos_docente', 'esc_grados_alumnos_docente_cel': 'esc_grados_alumnos_docente_cel', });
lyr_escuelas_1.set('fieldImages', {'esc': 'Range', 'depto': 'Range', 'zona': 'TextEdit', 'ESCUELA': 'TextEdit', 'DIRECCI�N': 'TextEdit', 'LUGAR': 'TextEdit', 'esc_grados_alumnos_esc': 'Range', 'esc_grados_alumnos_grado': 'Range', 'esc_grados_alumnos_varones': 'Range', 'esc_grados_alumnos_mujeres': 'Range', 'esc_grados_alumnos_docente': 'TextEdit', 'esc_grados_alumnos_docente_cel': 'TextEdit', });
lyr_escuelas_1.set('fieldLabels', {'esc': 'inline label', 'depto': 'no label', 'zona': 'no label', 'ESCUELA': 'no label', 'DIRECCI�N': 'inline label', 'LUGAR': 'inline label', 'esc_grados_alumnos_esc': 'inline label', 'esc_grados_alumnos_grado': 'inline label', 'esc_grados_alumnos_varones': 'inline label', 'esc_grados_alumnos_mujeres': 'inline label', 'esc_grados_alumnos_docente': 'inline label', 'esc_grados_alumnos_docente_cel': 'inline label', });
lyr_escuelas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});