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
            this.oRouter.navTo(key);
          
        },
      });
    }
  );
  