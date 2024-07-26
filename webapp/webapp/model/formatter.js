sap.ui.define([
    "sap/ui/core/format/DateFormat"
], function(DateFormat) {
    "use strict";
    return {
        todayDate: function(sDate) {
            var oDate = new Date(sDate);
            var oDateFormat = DateFormat.getDateInstance({ pattern: "dd MMM yyyy" });
            return oDateFormat.format(oDate);
        },
		deliveryStatus(sStatus){
            switch (sStatus) {
				case "UnScheduled":
                    return "Error"; 
				case "Open":
					return "Warning"; 
				case "Low":
                    return "Success" ;
				default:
					return "Success";
			}
        }
    };
});
