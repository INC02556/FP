/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fp_chop_chop/webapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
