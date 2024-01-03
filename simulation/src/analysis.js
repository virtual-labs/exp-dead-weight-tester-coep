function resultAnalysis(counterMasterJson){
	$("#procedure").prop("hidden",true);
//console.log(counterMasterJson);

//	$("#resultId").click(function(){
	var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'
//		+'<div class="col-md-1">'
//
//		+' </div>'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Pressure Gauge : '+counterMasterJson.config.meter+'</span></center></div>'
		+'</div>'
		+'</div>'

		+'<div class="col-md-4">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center>Congratulations!!! <br> Dead weight tester experiment is completed successfully!!'
		+'<br> Satisfactory performance</center></div>'
		+'</div>'
		+'</div>'

		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Cylinder Piston :'+counterMasterJson.config.cylinderPiston+'</span></center></div>'
		+'</div>'
		+' </div>'
//		+'<div class="col-md-1">'
//
//		+' </div>'
		+' </div>'
		
		//Close 1 Row
		+'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY(DEAD WEIGHT TESTER)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		   +' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Calibration</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Meter Calibration</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
			 +'   <tr>'
		  +'     <td class=""><center>Fault Finding</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		+'<div class="col-md-4">'
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY(DEAD WEIGHT TESTER)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		   +' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Mimic</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
		  
		   +'  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Calibration</center></td>'
		   +'<td class=""><center class="attained">Attained</center></td>'
		   +' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Meter Calibration</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
			 +'   <tr>'
		  +'     <td class=""><center>Fault Finding</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +' </tbody>'
		  +' </table>'
		+' </div>'
		
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1">Basic knowledge </span></center>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.questionary.correctAnswer+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>6</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+'</div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Calculated radius of cylinder(cm):</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.config.attempt+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Mimic(Polish Surface)</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">On Place </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.mimic.onPolishSurface+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Misplaced</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.mimic.misplacePolishSurface+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-sm-12">'

		
	
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Zero error Calculated</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.zeroWrong+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Span error Calculated</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.spanWrong+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Zero Adjustment</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Plus clicks</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.zeroCalibrationForWrongPlus+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Minus clicks</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.zeroCalibrationForMinusWrong+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'


		+' </div>'
		
		+' </div>'
		//Close 3 Row
		+' <div class="row">'
		+'<div class="col-sm-12">'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Span Adjustment</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Plus clicks</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.spanCalibrationForWrongPlus+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Minus clicks</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.spanCalibrationForMinusWrong+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+' </div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Again Zero Adjustment</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Plus clicks</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.zeroCalibrationForAgainPlus+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Minus clicks</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.calibration.zeroCalibrationForAgainMinus+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Fault Finding</span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

//		+'<center><span class="valueBox"><b>'+counterMasterJson.faultFinding.wrongOption+'</b></span></center>'
        +'<center><span class="valueBox"><b>'+counterMasterJson.faultFinding.wrongSelection+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+' </div>'
		+' </div>'

		+' </div>'
//		//Close 4 Row
//		+' <div class="row">'
//		+'<div class="col-sm-7">'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Span error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//		
//		
//		
//		
//		
//		
//		
////		+'</div>'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
////		+'</div>'
//
//		+' </div>'
//		+'<div class="col-sm-5">'
////		+'fgfghhhgh'
//		+' </div>'
//		+' </div>'
//		//Close 5 Row
//		+' <div class="row">'
//		+'<div class="col-sm-7">'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Span error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
////		+'</div>'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
////		+' </div>'
//		
//		
//		+'</div>'
//
//		+' </div>'
//
//		+' </div>'
		//Close 6 Row
//		+' <div class="row">'
//		+'<div class="col-sm-7">'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Span error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
////		+' </div>'
//		+'</div>'
//
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
////		+' </div>'
//		+'</div>'
//
//		+' </div>'
////		+'<DIV CLASS="COL-SM-5">'
//////		+'FGFGHHHGH'
////		+' </DIV>'
//		+' </div>'
//		+'</div>'
//		
		
		$("#mainDiv").html(htm);
//		var graph=// Create the chart
			Highcharts.chart('graph-div', {
			    chart: {
			        type: 'pie'
			    },
			    title: {
			        text: 'Performance',
			        align: 'left'
			    },
			    subtitle: {
			        text: 'Chart</a>',
			        align: 'left'
			    },

			    accessibility: {
			        announceNewData: {
			            enabled: true
			        },
			        point: {
			            valueSuffix: '%'
			        }
			    },

			    plotOptions: {
			        series: {
			            borderRadius: 5,
			            dataLabels: [{
			                enabled: true,
			                distance: 15,
			                format: '{point.name}'
			            }, {
			                enabled: true,
			                distance: '-30%',
			                filter: {
			                    property: 'percentage',
			                    operator: '>',
			                    value: 5
			                },
			                format: '{point.y:.1f}%',
			                style: {
			                    fontSize: '0.9em',
			                    textOutline: 'none'
			                }
			            }]
			        }
			    },

			    tooltip: {
			        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			    },

			    series: [
			        {
			            name: 'Browsers',
			            colorByPoint: true,
			            data: [
			                {
			                    name: 'Configuration',
			                    y: 61.04,
			                    drilldown: 'Configuration'
			                },
			                {
			                    name: 'Mimic',
			                    y: 9.47,
			                    drilldown: 'Mimic'
			                },
			                {
			                    name: 'Table and Graph',
			                    y: 9.32,
			                    drilldown: 'Table and Graph '
			                },
			                {
			                    name: 'Meter Calibration',
			                    y: 8.15,
			                    drilldown: 'Meter Calibration'
			                },
			                {
			                    name: 'Fault Finding',
			                    y: 11.02,
			                    drilldown: 'Fault Finding'
			                }
			            ]
			        }
			    ],
			    drilldown: {
			        series: [
			            {
			                name: 'Mimic',
			                id: 'Mimic',
			                data: [
			                    [
			                        'v97.0',
			                        36.89
			                    ],
			                    [
			                        'v96.0',
			                        18.16
			                    ],
			                    [
			                        'v95.0',
			                        0.54
			                    ],
			                    [
			                        'v94.0',
			                        0.7
			                    ],
			                    [
			                        'v93.0',
			                        0.8
			                    ],
			                    [
			                        'v92.0',
			                        0.41
			                    ],
			                    [
			                        'v91.0',
			                        0.31
			                    ],
			                    [
			                        'v90.0',
			                        0.13
			                    ],
			                    [
			                        'v89.0',
			                        0.14
			                    ],
			                    [
			                        'v88.0',
			                        0.1
			                    ],
			                    [
			                        'v87.0',
			                        0.35
			                    ],
			                    [
			                        'v86.0',
			                        0.17
			                    ],
			                    [
			                        'v85.0',
			                        0.18
			                    ],
			                    [
			                        'v84.0',
			                        0.17
			                    ],
			                    [
			                        'v83.0',
			                        0.21
			                    ],
			                    [
			                        'v81.0',
			                        0.1
			                    ],
			                    [
			                        'v80.0',
			                        0.16
			                    ],
			                    [
			                        'v79.0',
			                        0.43
			                    ],
			                    [
			                        'v78.0',
			                        0.11
			                    ],
			                    [
			                        'v76.0',
			                        0.16
			                    ],
			                    [
			                        'v75.0',
			                        0.15
			                    ],
			                    [
			                        'v72.0',
			                        0.14
			                    ],
			                    [
			                        'v70.0',
			                        0.11
			                    ],
			                    [
			                        'v69.0',
			                        0.13
			                    ],
			                    [
			                        'v56.0',
			                        0.12
			                    ],
			                    [
			                        'v49.0',
			                        0.17
			                    ]
			                ]
			            },
			            {
			                name: 'Configuration',
			                id: 'Configuration',
			                data: [
			                    [
			                        'v15.3',
			                        0.1
			                    ],
			                    [
			                        'v15.2',
			                        2.01
			                    ],
			                    [
			                        'v15.1',
			                        2.29
			                    ],
			                    [
			                        'v15.0',
			                        0.49
			                    ],
			                    [
			                        'v14.1',
			                        2.48
			                    ],
			                    [
			                        'v14.0',
			                        0.64
			                    ],
			                    [
			                        'v13.1',
			                        1.17
			                    ],
			                    [
			                        'v13.0',
			                        0.13
			                    ],
			                    [
			                        'v12.1',
			                        0.16
			                    ]
			                ]
			            },
			            {
			                name: 'Table and Graph',
			                id: 'Table and Graph',
			                data: [
			                    [
			                        'v97',
			                        6.62
			                    ],
			                    [
			                        'v96',
			                        2.55
			                    ],
			                    [
			                        'v95',
			                        0.15
			                    ]
			                ]
			            },
			            {
			                name: 'Meter Calibration',
			                id: 'Meter Calibration',
			                data: [
			                    [
			                        'v96.0',
			                        4.17
			                    ],
			                    [
			                        'v95.0',
			                        3.33
			                    ],
			                    [
			                        'v94.0',
			                        0.11
			                    ],
			                    [
			                        'v91.0',
			                        0.23
			                    ],
			                    [
			                        'v78.0',
			                        0.16
			                    ],
			                    [
			                        'v52.0',
			                        0.15
			                    ]
			                ]
			            },
						{
			                name: 'Fault Finding',
			                id: 'Fault Finding',
			                data: [
			                    [
			                        'v96.0',
			                        4.17
			                    ],
			                    [
			                        'v95.0',
			                        3.33
			                    ],
			                    [
			                        'v94.0',
			                        0.11
			                    ],
			                    [
			                        'v91.0',
			                        0.23
			                    ],
			                    [
			                        'v78.0',
			                        0.16
			                    ],
			                    [
			                        'v52.0',
			                        0.15
			                    ]
			                ]
			            }
			        ]
			    }
			});

// });//Result button

  }