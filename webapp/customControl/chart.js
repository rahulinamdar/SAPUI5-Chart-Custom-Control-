sap.ui.define([
	"sap/ui/core/Control",
	"com/rahul/chartChart/customControl/charts"
], function(oCoreControl) {
	oCoreControl.extend("com.rahul.chartChart.customControl.chart", {
		metadata: {
			properties: {
				id: {
					type: "string"
				},
				xData: {
					type: "object"
				},
				yData: {
					type: "object"
				},
				/* other (configuration) properties */
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "700px"
				},
				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "700px"
				}
			}
		},
		renderer: function(oRM, oControl) {
			var sStyle = "style=width:"+oControl.getWidth()+";height:"+oControl.getHeight()+";";
			oRM.write("<div ");
			/*oRM.addStyle("width", oControl.getWidth());
			oRM.addStyle("height", oControl.getHeight());*/
			oRM.write(sStyle);
			oRM.writeControlData(oControl);
			oRM.addClass("sapUiResponsiveMargin custom_chart");
			oRM.writeClasses();
			oRM.write(">");
			oRM.write("<canvas id='"+oControl.getId()+"_chart' >");
			oRM.write("</canvas>");
			oRM.write("</div>");
		},
		onAfterRendering: function() {
			var oControl = this;
			var ctx = jQuery("#"+this.getId()+"_chart");
			var oMychart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: oControl.getXData(),
					datasets: [{
						label: "My First dataset",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(75,192,192,0.4)",
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: "rgba(220,220,220,1)",
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: oControl.getYData(),
						spanGaps: false
					}]
				}
			});
		}

	});
});