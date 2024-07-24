sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
        "../model/formatter",
    ],
    function(Controller,formatter,History) {
      "use strict";
      return Controller.extend("fpchopchop.webapp.controller.App", {
        formatter: formatter,
        onInit: function() {
          var that = this;
          this.oRouter = this.getOwnerComponent().getRouter();
        },
        onItemSelect: function(oEvent){
          var key = oEvent.getParameter("item").getKey();
          if(key == "reporting"){
            this.oRouter.navTo("");
          }
          else{
            this.oRouter.navTo(key);
          }
        },
      });
    }
  );
  