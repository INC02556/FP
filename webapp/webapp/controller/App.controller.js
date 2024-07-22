sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "../model/formatter"
    ],
    function(BaseController,formatter) {
      "use strict";
      return BaseController.extend("fpchopchop.webapp.controller.App", {
        formatter: formatter,
        onInit: function() {
          var that = this;
          this.oRouter = this.getOwnerComponent().getRouter();
        },
        onItemSelect: function(oEvent){
          var key = oEvent.getParameter("item").getKey();
          if(key === "toggle"){
            const oSideNavigation = this.byId("sideNavigation"),
            bExpanded = oSideNavigation.getExpanded();
            oSideNavigation.setExpanded(!bExpanded);
          }
          else{
            this.oRouter.navTo(key);
          }
          
        },
      });
    }
  );
  