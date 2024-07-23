sap.ui.define(['sap/ui/core/mvc/Controller',
	"fpchopchop/webapp/model/formatter",
	'sap/ui/model/json/JSONModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
	function (Controller, formatter,JSONModel,Filter,FilterOperator, FlattenedDataset, FeedItem) {
		"use strict";

		return Controller.extend("fpchopchop.webapp.controller.main", {
			formatter: formatter,
			onInit: function () {
				var oModel = this.getOwnerComponent().getModel("DeliveryOrder");
				this._oGlobalFilter = null;
				var data = [{
					"Category": "Category 1",
					"Revenue": 100
				}, {
					"Category": "Category 2",
					"Revenue": 200
				}, {
					"Category": "Category 3",
					"Revenue": 300
				}, {
					"Category": "Category 4",
					"Revenue": 400
				}, {
					"Category": "Category 5",
					"Revenue": 500
				}];
				// Load local JSON data
				var oDataModel = new sap.ui.model.json.JSONModel(data);
				// Use this line in case you are loading from external OData url
				// oDataModel.loadData(data);
	
				// Get the VizFrame control
				var oChartContainer = this.getView().byId("chartContainer");
	
				// Set the data model to the VizFrame
				oChartContainer.setModel(oDataModel);
	
				// Create a FlattenedDataset
				var oDataset = new FlattenedDataset({
					dimensions: [{
						name: "Category",
						value: "{Category}"
					}],
					measures: [{
						name: "Revenue",
						value: "{Revenue}"
					}],
					data: {
						path: "/"
					}
				});
	
				// Add the dataset to the VizFrame
				oChartContainer.setDataset(oDataset);
	
				// Create a FeedItem for Category dimension
				var oCategoryFeed = new FeedItem({
					uid: "categoryAxis",
					type: "Dimension",
					values: ["Category"]
				});
	
				// Create a FeedItem for Revenue measure
				var oRevenueFeed = new FeedItem({
					uid: "valueAxis",
					type: "Measure",
					values: ["Revenue"]
				});
	
				// Add the FeedItems to the VizFrame
				oChartContainer.addFeed(oCategoryFeed);
				oChartContainer.addFeed(oRevenueFeed);
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