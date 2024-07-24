// BaseController.js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("fpchopchop.webapp.controller.BaseController", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.attachRouteMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function(oEvent) {
            // var sRouteName = oEvent.getParameter("name");
            // var oSideNavigation = this.getView().byId("sideNavigation");
            // if (sRouteName) {
            //     oSideNavigation.setSelectedKey(sRouteName);
            // }
            // else{
            //     oSideNavigation.setSelectedKey("reporting");
            // }
        }
    });
});
