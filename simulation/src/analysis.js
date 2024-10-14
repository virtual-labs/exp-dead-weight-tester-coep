function resultAnalysis(counterMasterJson){
	$("#procedure").prop("hidden",true);
	$("#demo").prop("hidden",true);
	
var correctVal = (counterMasterJson.questionary.correctAnswer/6).toFixed(2);
var quesPercent = (correctVal*100).toFixed(1);
quesPercent = parseFloat(quesPercent);

var config = ((1/(counterMasterJson.config.attempt+1))*100).toFixed(2);
config = parseFloat(config);
console.log(config);

var mimicVal = (1/(counterMasterJson.mimic.misplacePolishSurface+1)*100).toFixed(2);
mimicVal = parseFloat(mimicVal);

var totZero = parseInt(counterMasterJson.calibration.zeroCalibrationForMinusWrong)+parseInt(counterMasterJson.calibration.zeroCalibrationForWrongPlus);
var totSpan = parseInt(counterMasterJson.calibration.spanCalibrationForMinusWrong)+parseInt(counterMasterJson.calibration.spanCalibrationForWrongPlus);
	
var calPercent = ((totZero+totSpan)/2).toFixed(2);
calPercent = parseFloat(calPercent);
    
var fault = ((1/counterMasterJson.faultFinding.wrongSelection+1)*100).toFixed(2);
fault = parseFloat(fault);

var htm = ''
	+ '<div class="container-fluid">'
	+ '  <div class="row">'
//	+ '<div class="col-md-4">'
//	+ ' <div class="panel panel-danger headingPanel" >'
//	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b> Pressure Gauge : '+counterMasterJson.config.meter+' </b></span></center></div>'
//	+ '</div>'
//	+ '</div>'

	+ '<div class="col-md-12">'
	+ ' <div class="panel remarkBground" >'
	+ ' <div class="panel-body remark" ><center>Congratulations!!! <b>Dead weight tester simulation is completed !!</b>'
//	+ '<br> <b>Satisfactory performance</b></center></div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'

//	+ '<div class="col-md-4">'
//	+ ' <div class="panel panel-danger headingPanel">'
//	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Cylinder Piston :'+counterMasterJson.config.cylinderPiston+'</b></span></center></div>'
//	+ '</div>'
//	
//		+ ' <div class="panel panel-danger headingPanel" >'
//	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b> Pressure Gauge : '+counterMasterJson.config.meter+' </b></span></center></div>'
//	+ '</div>'
//	
//	+ ' </div>'
	+ ' </div>'
	
	+'  <div class="row">'
	+ '<div class="col-md-12">'
	+ ' <center><p class="configHeader"><b>Selected Configuration : &emsp; </b><span class="heading1">Cylinder Piston :'+counterMasterJson.config.cylinderPiston
	+ ' and  Pressure Gauge : '+counterMasterJson.config.meter+' </span></p></center>'
	+'</div>'
	+'</div>'
	
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<table class="table table-bordered table-striped">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY (DEAD WEIGHT TESTER)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		   if(quesPercent>=60){
			htm += '<td class=""><center class="attained"> Attained</center></td>'
		}else{
			htm +='<td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		   
		  
		   htm += '  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   if(config>=60){
		   htm += '<td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='<td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  htm +=' </tr>'
		   +'   <tr>'
		  +'     <td class=""><center>Mimic</center></td>'
		  if(mimicVal>=60){
			 htm += '<td class=""><center class="attained"> Attained</center></td>'
		}else{
			htm +='<td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  
		  
		   htm +='  </tr>'
		   +'  <tr>'
		+'<td class=""><center>Calibration</center></td>'
		   
		   if(calPercent>=60){
			htm += '<td class=""><center class="attained"> Attained</center></td>'
		}else{
			htm +='<td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  
		   htm +=' </tr>'
		   +'<tr>'
		  +' <td class=""><center>Meter Calibration</center></td>'
		   +'<td class=""><center class="attained"> Attained</center></td>'
		  
		   +'  </tr>'
		   +'<tr>'
		  +' <td class=""><center>Fault Finding</center></td>'
		  if(fault>=60){
		   htm += '<td class=""><center class="attained"> Attained</center></td>'
		  }else{
		  htm +='<td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		   htm +='  </tr>'
			
		   +' </tbody>'
		  +' </table>'
		
		
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Mimic (Polish Surface)</b></span></center>'		
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">On place</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">'+counterMasterJson.mimic.onPolishSurface+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">Misplaced</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+counterMasterJson.mimic.misplacePolishSurface+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		
//		+'<div class="col-md-4">'
//		+' <div class="panel panel-danger headingPanel" style = "margin-top:10px;">'
//		+' <div class="panel-body" id="panelbody">'
//		+'<center><span class="heading1"><b>TESTING PERFORMANCE </b></span></center>'
		
//		+'</div>'
//		+'</div>'
//		+'</div>'
//		+'</div>'

        + '<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic Knowledge </b></span></center>'		
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">6</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+counterMasterJson.questionary.correctAnswer+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
        
        
        
        +'<div class="col-md-12">'
//		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Configuration</b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.config.attempt+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="margin-bottom: 28px;margin-top:5px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
        
        
        
        +'</div>'
		+'</div>'
		+'</div>'
		
		
		
		
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
		
		
		
		
		
//$("#main-div").html(htm);

$("#mainDiv").html(htm);

	    





let initialData = [
    { name: 'Questionaries', y: quesPercent },
    { name: 'Configuration', y: config },
    { name: 'Mimic', y: mimicVal },
    { name: 'Calibration', y: calPercent },
    { name: 'Fault Finding', y: calPercent }
];

// Create the pie chart
let chart = Highcharts.chart('graph-div', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Observations'
    },
    series: [{
        name: 'Observed',
        colorByPoint: true,
        data: initialData,
        dataLabels: {
                        enabled: true,
                        style: {
                            fontSize: '12px', 
							},                       
                    }
    }],
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %'
            }
        }
    }
});

  }