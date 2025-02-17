var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'GoogleEarth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'تجمعات مياه',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> تجمعات مياه'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2,
maxResolution:196.03126306583374,
 
                style: style__2,
                popuplayertitle: 'مرتفعات و هضاب',
                interactive: true,
    title: 'مرتفعات و هضاب<br />\
    <img src="styles/legend/_2_0.png" /> beach<br />\
    <img src="styles/legend/_2_1.png" /> cave_entrance<br />\
    <img src="styles/legend/_2_2.png" /> cliff<br />\
    <img src="styles/legend/_2_3.png" /> peak<br />\
    <img src="styles/legend/_2_4.png" /> spring<br />\
    <img src="styles/legend/_2_5.png" /> tree<br />\
    <img src="styles/legend/_2_6.png" /> volcano<br />\
    <img src="styles/legend/_2_7.png" /> <br />' });
var format_125000_3 = new ol.format.GeoJSON();
var features_125000_3 = format_125000_3.readFeatures(json_125000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_125000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_125000_3.addFeatures(features_125000_3);
var lyr_125000_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_125000_3, 
                style: style_125000_3,
                popuplayertitle: 'حدود خريطة 1:25000',
                interactive: true,
                title: '<img src="styles/legend/125000_3.png" /> حدود خريطة 1:25000'
            });
var format_____4 = new ol.format.GeoJSON();
var features_____4 = format_____4.readFeatures(json_____4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_____4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____4.addFeatures(features_____4);
var lyr_____4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____4, 
                style: style_____4,
                popuplayertitle: 'اماكن_تزاوج_الجرد_الصحراوي',
                interactive: true,
    title: 'اماكن_تزاوج_الجرد_الصحراوي<br />\
    <img src="styles/legend/____4_0.png" /> انتقالي<br />\
    <img src="styles/legend/____4_1.png" /> انتقالي إلى تجمعي<br />\
    <img src="styles/legend/____4_2.png" /> تجمعي<br />\
    <img src="styles/legend/____4_3.png" /> <br />' });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5,
maxResolution:140.0223307613098,
 minResolution:0.001400223307613098,

                style: style__5,
                popuplayertitle: 'وادي',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> وادي'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6,
maxResolution:140.0223307613098,
 
                style: style__6,
                popuplayertitle: 'مواقع',
                interactive: true,
    title: 'مواقع<br />\
    <img src="styles/legend/_6_0.png" /> city<br />\
    <img src="styles/legend/_6_1.png" /> county<br />\
    <img src="styles/legend/_6_2.png" /> farm<br />\
    <img src="styles/legend/_6_3.png" /> hamlet<br />\
    <img src="styles/legend/_6_4.png" /> island<br />\
    <img src="styles/legend/_6_5.png" /> locality<br />\
    <img src="styles/legend/_6_6.png" /> national_capital<br />\
    <img src="styles/legend/_6_7.png" /> region<br />\
    <img src="styles/legend/_6_8.png" /> suburb<br />\
    <img src="styles/legend/_6_9.png" /> town<br />\
    <img src="styles/legend/_6_10.png" /> village<br />\
    <img src="styles/legend/_6_11.png" /> <br />' });

lyr_GoogleEarth_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_125000_3.setVisible(true);lyr_____4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr__1,lyr__2,lyr_125000_3,lyr_____4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr__2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_125000_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', });
lyr_____4.set('fieldAliases', {'تاريخ': 'تاريخ', 'تاري_1': 'تاري_1', 'مظهر': 'مظهر', 'السلو': 'السلو', 'التكا': 'التكا', 'الكثا': 'الكثا', 'إحداث': 'إحداث', 'Northing_C': 'Northing_C', 'Easting_C': 'Easting_C', 'N': 'N', 'E': 'E', 'Easting1': 'Easting1', 'اسم_ا': 'اسم_ا', 'المحا': 'المحا', 'المنط': 'المنط', 'Google_Lin': 'Google_Lin', 'Link1': 'Link1', });
lyr__5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr__6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr__1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr__2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_125000_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', });
lyr_____4.set('fieldImages', {'تاريخ': 'TextEdit', 'تاري_1': 'DateTime', 'مظهر': 'TextEdit', 'السلو': 'TextEdit', 'التكا': 'TextEdit', 'الكثا': 'TextEdit', 'إحداث': 'TextEdit', 'Northing_C': 'TextEdit', 'Easting_C': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', 'Easting1': 'TextEdit', 'اسم_ا': 'TextEdit', 'المحا': 'TextEdit', 'المنط': 'TextEdit', 'Google_Lin': 'TextEdit', 'Link1': 'TextEdit', });
lyr__5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr__6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr__1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr__2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_125000_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', });
lyr_____4.set('fieldLabels', {'تاريخ': 'no label', 'تاري_1': 'no label', 'مظهر': 'no label', 'السلو': 'no label', 'التكا': 'no label', 'الكثا': 'no label', 'إحداث': 'no label', 'Northing_C': 'no label', 'Easting_C': 'no label', 'N': 'no label', 'E': 'no label', 'Easting1': 'no label', 'اسم_ا': 'no label', 'المحا': 'no label', 'المنط': 'no label', 'Google_Lin': 'no label', 'Link1': 'no label', });
lyr__5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr__6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});