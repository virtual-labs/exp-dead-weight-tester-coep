function tableCreate(masterJson,meter,cylinderPiston)
	{$(".panelBody").css({"background-color": "#fff"});
	
	
	var tableMainDiv = '<div class="row ">'
					+'<div class="col-sm-12" style="margin-bottom :20px;" >'
			        + '<table class=" table table-bordered " style="margin:10px;">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #154951; color:#fff;">'
					+ '  <th>Sr No.</th>'
					+ '   <th>Weight (kgf)</th>'
					+ '  <th>Pressure (psi)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for(i=0,p=1;i<masterJson.weight.length;i++,p++)
						{
						tableMainDiv+='    <tr>'
							+'		<td>'+p+'</td>'
							+'      <td>'+masterJson.weight[i].totalWeight+'</td>'
							+'      <td>'+masterJson.weight[i].meterPressureWithError+'</td>'
				//			+'      <td>'+masterJson.weight[i].errorAdded+'</td>'
				//			+'      <td>'+p+'</td>'
				//		    +'      <td>'+masterJson.weight[i].totalWeight+'</td>'
							+'    </tr>'
						}
				
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					  +'</div>'
					  +'</div>'
					+'<div class="col-sm-2">'
					 +'</div>'
					 +'<div class="col-sm-8">'
					 +'<button type="button" style="padding: 10px;margin:20px; "  class="btn btn-danger btnStyle" id="showGraph" hidden ><b>SHOW GRAPH </b></button>'
					 +'</div>'
					 +'<div class="col-sm-2">'
					 +'</div>'
					 
				$("#sub-main-div1").html(tableMainDiv);
				if(masterJson.weight.length >= 5)
				{
					$('#showGraph').removeAttr('hidden');		
				}
				var checkAlert=0;
				$("#showGraph").click(function() {
					
					
							
					if (masterJson.weight.length >= 5) { 
						
						
					if ( masterJson.weight[masterJson.weight.length - 1].totalWeight != meter && masterJson.weight[0].totalWeight != 0 )
					{
						checkAlert = 1;
						alert(" need to add both zero and max limits");
							
					}
					
					else if (masterJson.weight[0].totalWeight != 0) 
					{
						checkAlert = 1;
						alert("You need to add zero weight reading (Don't add any weight and take reading)!!");
					
					}
					
					else if (masterJson.weight[masterJson.weight.length - 1].totalWeight != meter)
					{
							checkAlert = 1;
							alert("You need to add max weight "+meter+" !!");
							
					}
					if (checkAlert == 0 )
					{ 
						$("#centerText1").html("CALIBRATION");
                        $("#centerText2").html("CALIBRATE GRAPH");
						graphCreate(masterJson,meter);
						
						$("#showGraph").prop("disabled",true);
						calibration(masterJson,meter,cylinderPiston);
						
						
//					str =''
//						+'<div class="col-sm-2">'
//					 +'</div>'
//					 +'<div class="col-sm-8">'
//					 +'<button type="button" style="padding: 10px;margin:20px; "  class="btn btn-danger btnStyle " id="Calibration"  ><b> NEXT LEVEL </b></button>'
////					 +'<button type="button" style="padding: 10px;margin:20px; "  class="btn btn-danger btnStyle" id="showGraph" hidden ><b>SHOW GRAPH </b></button>'
//					 +'</div>'
//					 +'<div class="col-sm-2">'
//					 +'</div>'
//					 +'</div>'
//				        $("#sub-main-div2").html(str);
//						console.log("calibration ");
					}
//				}
//				else{
//					alert("Please provide atleast 5 reading ");}
				}
//				console.log(masterJson);
				$("#Calibration").click(function(){
					calibration(masterJson);
                   
			   });			
			});
			
			
			 	
			}
	
	
		
	function graphCreate(masterJson,meter)
	{
//		$("#panelHeadingBold").html("GRAPH REPRESENTATION");
		
	var xdata=[];
	var ydata=[];
	
	var graphData1=[];
	for (var i = 0; i < masterJson.weight.length; i++)
	 {
		xdata[i] = parseFloat(masterJson.weight[i].totalWeight);
		ydata[i] = parseFloat(masterJson.weight[i].meterPressureWithError);
		
	}
	for (var j = 0; j < masterJson.weight.length; j++) {
			tempArr = [];
			tempArr[0] = xdata[j];
			tempArr[1] = ydata[j];
			graphData1.push(tempArr);

	}
//		console.log("xdata "+xdata);
//		console.log("ydata "+ydata);
//		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
//		console.log("After xdata "+xdata);
//		console.log("After ydata "+ydata);
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
//		console.log("Xmax "+Xmax);
//		console.log("Ymax "+Ymax);
		var maxPoint=0;
		if(Xmax<Ymax)
		{
			maxPoint=Ymax;
		}
		else
		{
			maxPoint=Xmax;
		}
//		console.log(" Weight V/S Pressure  " + graphData1);
		Highcharts.chart('main-div-conf', 
		{
//			legend: {
//				    symbolPadding: 0,
//				    symbolWidth: 0,
//				    symbolHeight: 0,
//				    squareSymbol: true
//				  },
				exporting: { enabled: true },
				credits: { enabled: false},
			title: {
				text: ' Weight V/S Pressure  '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				min: 0.0,
				max: maxPoint,
				title: {
					text: 'Weight'
				}
			},
			yAxis: {
				min: 0.0,
				max: maxPoint,
				title: {
					text: 'Pressure'
				}
			},
			series: [
				{
					type: 'line',
					name: 'Standard value',
					data: [[0.0, 0.0], [maxPoint, maxPoint]],
					marker: {
						enabled: false
					},
					states: {
						hover: {
							lineWidth: 0
						}
					},
					enableMouseTracking: false
				},

				{
					type: 'scatter',
					name: 'Observation value',

					data: graphData1,
					marker: {
						radius: 4
					}
				}]

		});
		
	
		
		}
	
	