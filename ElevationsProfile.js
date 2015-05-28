define([
"dojo/ready",
"dojo/_base/declare",
"dojo/_base/connect",
"dojo/_base/lang",
"dojo/on",
"dojo/dom",
"dojo/dom-class",
"dojo/dom-construct",
"dijit/registry",
"dijit/layout/ContentPane",
"esri/arcgis/utils",
"esri/dijit/Legend",
"esri/dijit/Scalebar",
"esri/dijit/Measurement",
"esri/units",
"dijit/_WidgetBase",
"dijit/_TemplatedMixin",
"dijit/_WidgetsInTemplateMixin",
//"dojo/text!./ElevationsProfile/Widget.html",
"./ElevationsProfile/Widget",
"dojo/aspect",
"dojo/domReady!"
], function (ready, declare, connect, lang, on, dom, domClass,
domConstruct, registry, ContentPane, arcgisUtils, Legend,
Scalebar, Measurement, Units, _WidgetBase, _TemplatedMixin,
_WidgetsInTemplateMixin,
//template,
Elevation, aspect
) {

return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {


    widgetsInTemplate: true,
    //templateString: template,
    templateString: '<div ><div data-dojo-attach-point="profileChartNode"></div></div>',

    postCreate: function () {

        this.inherited(arguments);

        // ===========================================================================================//
        // ELEVATIONS PROFILE PARAMETERS //
        var profileParams = {
            map: this.map,
            //profileTaskUrl: this.config.helperServices.elevationSync.url,
            //profileTaskUrl: "[server]/rest/services/TEST/Profile/GPServer",
            profileTaskUrl: "http://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer",
            //scalebarUnits: this.config.scalebarUnits
            scalebarUnits: "dual"
        };
        // ELEVATIONS PROFILE //
//alert("1");
        var elevationsProfile = new Elevation(profileParams, this.profileChartNode);

/*
        // SEND ERRORS TO THE CONSOLE //
        elevationsProfile.on("error", console.warn);
        // ENABLE/DISABLE MAP EVENTS WHEN USER IS DRAWING WITH MEASUREMENT DISTANCE TOOL //
        elevationsProfile.on("measure-distance-checked", lang.hitch(this, function (evt) {
            if (evt.checked) {
                connect.disconnect(this.clickEventHandle);
                this.clickEventHandle = null;
            } else {
                this.clickEventHandle = connect.connect(this.map, "onClick", this.clickEventListener);
            }
        }));

*/        
        // STARTUP THE DIJIT //
        elevationsProfile.startup();
        // ===========================================================================================//

    },



})

});