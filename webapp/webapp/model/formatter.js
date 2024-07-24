sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
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