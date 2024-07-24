sap.ui.define(["./BaseController",
	"fpchopchop/webapp/model/formatter",
	'sap/ui/model/json/JSONModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
	function (BaseController, formatter,JSONModel,Filter,FilterOperator, FlattenedDataset, FeedItem) {
		"use strict";

		return BaseController.extend("fpchopchop.webapp.controller.main", {
			formatter: formatter,
			onInit: function () {
				var oModel = this.getOwnerComponent().getModel("DeliveryOrder");
			},
			_filter: function() {
				if (this._oGlobalFilter) {
					console.log(this._oGlobalFilter)
					this.byId("DeliveryOrderTable").getBinding().filter(this._oGlobalFilter, "Application");
				}
			},
	
			filterGlobally: function(oEvent) {
				const sQuery = oEvent.getParameter("query");
				this._oGlobalFilter = null;
				if (sQuery) {
					this._oGlobalFilter = new Filter([
						new Filter("Plant", FilterOperator.Contains, sQuery),
						new Filter("Delivery", FilterOperator.Contains, sQuery),
						new Filter("Article Code", FilterOperator.Contains, sQuery),
						new Filter("Picker Name", FilterOperator.Contains, sQuery),
						new Filter("Picked Qty", FilterOperator.Contains, sQuery),
						new Filter("Picking Status", FilterOperator.Contains, sQuery),
						new Filter("Start Time", FilterOperator.Contains, sQuery),
						new Filter("End Time", FilterOperator.Contains, sQuery),
						new Filter("Ship to Party", FilterOperator.Contains, sQuery)
					], false);
				}
				this._filter();
			},
		});
	});