sap.ui.define(["./BaseController",
	"fpchopchop/webapp/model/formatter",
],
	function (BaseController, formatter) {
		"use strict";

		return BaseController.extend("fpchopchop.webapp.controller.picklistsequencing", {
			formatter: formatter,
		});
	});