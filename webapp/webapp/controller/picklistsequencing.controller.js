sap.ui.define(["./BaseController",
	"fpchopchop/webapp/model/formatter",
	"sap/ui/core/format/DateFormat"
],
	function (BaseController, formatter,DateFormat) {
		"use strict";
		return BaseController.extend("fpchopchop.webapp.controller.picklistsequencing", {
			formatter: formatter,
			onInit: function() {
				// var oModel = new sap.ui.model.json.JSONModel();
				// oModel.setData({
				// 	todayDate: new Date() 
				// });
				// this.getView().setModel(oModel);
				this.getView().byId("todayDate").setText(`Today’s Date: ${DateFormat.getDateInstance({ pattern: "dd MMM yyyy" }).format(new Date())}`)
			}
		});
	});