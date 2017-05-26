sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.rahul.chartChart.controller.View1", {
		change:function(){
			var oChart = this.getView().byId("chart_example");
			oChart.setYData([1,2,3]);
			oChart.setXData(["Jan","Feb","Mar"]);
		},
		initial  :function(){
			var oChart = this.getView().byId("chart_example");
			oChart.setYData([65, 59, 10, 81, 56, 55, 40]);
			oChart.setXData(["January", "February", "March", "April", "May", "June", "July"]);
		}
	});
});