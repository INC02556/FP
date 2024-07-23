sap.ui.define(['sap/ui/core/mvc/Controller',
	"fpchopchop/webapp/model/formatter",
],
	function (Controller, formatter) {
		"use strict";

		return Controller.extend("fpchopchop.webapp.controller.picklistsequencing", {
			formatter: formatter,
		});
	});