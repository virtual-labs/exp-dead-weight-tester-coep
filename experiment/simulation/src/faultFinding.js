function tableCreateForFualtFinding1(masterJson)
			{$(".panelBody").css({"background-color": "#fff"});
//				 var min = 0.5;
//				 var max = 10.00;
				
				var tableMainDiv = '<h3><center>OBSERVE  READING & IDENTIFY THE FAULT</center></h3>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
					+ '  <th><center>Weight</center></th>'
					+ '   <th><center>Pressure</center></th>'
//					+ '  <th >Rotameter Flow (Actual) (LPM)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.weight.length; i++) {
//					var errorRandom=Math.random() * (max - min) + min;
//					console.log("errorRandom   "+errorRandom);
//					var errorAddFault=errorRandom+masterJson.demo[i].rFlow;
					tableMainDiv += '<tr>'
						+ '   <td><center>' + masterJson.weight[i].totalWeight + '</center></td>'
						+ '   <td style="background-color:#d65d5d;"><center>0</center></td>'
//						+ '   <td style="background-color:#de767645"><center>' + errorAddFault.toFixed(2) + '</center></td>'
						+ '     </tr>'

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}
			
			function tableCreateForFualtFinding2(masterJson)
				{ 
				var min = 1;
				 var max = masterJson.weight.length-1;
				 var place=parseInt(Math.random() * (max - min) + min);
				 console.log("Place Continue  "+place);
				var min1 = 0.5;
				 var max1 = 10;
				var tableMainDiv = '<h4><center>OBSERVE THE TABLE READING & SELECT THE FAULT</center></h4>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
					+ '  <th>Weight</th>'
					+ '   <th>Pressure</th>'
//					+ '  <th >Rotameter Flow (Actual) (LPM)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.weight.length; i++,p++) {
					var temp=Math.random() * (max1 - min1) + min1;
					errorRandom=temp.toFixed(2);
					console.log("errorRandom   "+errorRandom);
					if(place<=i-1)
						{
							var error=masterJson.weight[place].meterPressureWithExpectedError;
							tableMainDiv += '<tr>'
							+ '   <td><center>' +masterJson.weight[i].totalWeight + '</center></td>'
							+ '   <td style="background-color:#d65d5d;"><center>' + error + '</center></td>'
//							+ '   <td style="background-color:#de767645;"><center>' + errorRotameter.toFixed(2) + '</center></td>'
							+ '     </tr>'
						
						}
					else
						{
						var error=parseFloat(errorRandom+masterJson.weight[i].meterPressureWithExpectedError);
						tableMainDiv += '<tr>'
							+ '   <td><center>' + masterJson.weight[i].totalWeight + '</center></td>'
							+ '   <td style="background-color:#d65d5d;"><center >' + error + '</center></td>'
//							+ '   <td style="background-color:#de767645;"><center >' + + masterJson.weight[i].meterPressureWithExpectedError + + '</center></td>'
							+ '     </tr>'
						}
					

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}


 var randomNumber;
 var count_correct_fault = 0;
 var count_wrong_fault = 0;
function fualtFinding(masterJson,counterMasterJson)
{
	
	$("#centerText1").html("DEAD WEIGHT TESTER");
	 $("#centerText2").html("FAULT FINDING ");
	$("#main-div-conf").html("");
	 $("#canvas-div").html("");
	 
	 $("#nextFaultFindingDiv").html("");
	 $("#calibrationDiv").html("");
	 $("#panelHeadingBold").html(""); 
	  randomNumber=Math.floor(Math.random() * 2);
//	 randomNumber=1;
	 console.log("random  "+randomNumber);
	var str=''
	str+='<div class="row ">'
//			+'<button type="button" class="col-sm-12 btn btn-danger" style="margin-top:20px;" id="nextFaultFinding"disabled>Next Level</button>'
		 +'<div class="col-sm-12 " id="fualtFindingTable">'
		+'</div>'
//		 +'<div class="col-sm-12">'
//		 +' <select  class="form-control col-sm-12" id="errorSelection">'
//		 +' <option  value="0">Select Error type </option>'
//		 +' <option  value="1"> Float Weight reduces </option>'
//		 +'  <option value="2">Guided  ( Misplace )</option>'
//		
//		 +'  </select>'
		 +'<div class="col-sm-12">'
		 +' <select  class="form-control col-sm-12" id="errorSelection">'
		 +' <option >Select Error type </option>'
		 +' <option  value="0">Needle jam </option>'
		 +'  <option value="1">Helical spring fluctuate & break</option>'
//		 +'  <option value="3"></option>'
		 +'  </select>'
		 +'</div>'
		 +'<div class="col-sm-12 ">'
		 +'<div class="alert alert-danger" role="alert" id="alertMsgBox" style="margin-top:20px;" hidden>'
		 +'<b id="msgBox"> Wrong Selection !!!!!!!!</b>'
		+'</div>'
			+'</div>'
//    +'</div>'
//    + '<form action="/action_page.php">'
//    + '<div class="form-group">'
//     + ' <label for="sel1">Select list (select one):</label>'
//     + '<select class="form-control" id="sel1" name="sellist1">'
//      + '  <option>1</option>'
//     + '  <option>2</option>'
//     + '  <option>3</option>'
//     + '  <option>4</option>'
//      +'</select>'
//      
//   +' </div>'
//   +' <button type="submit" class="btn btn-primary">Submit</button>'
//  +'</form>'
//</div>
    +'</div>'
    $("#main-div-conf").html(str);
	
	if(randomNumber==0){
		tableCreateForFualtFinding1(masterJson);
	}
	else
		{
		tableCreateForFualtFinding2(masterJson);
		}
	
    $("#canvas-div").html("<img src='images/DWT.png' class='img-fluid'>");
	
    $("#errorSelection").change(function() {
	 $("#errorSelection").css("height", "");
    	var selectedOption=$("#errorSelection").val();
    	console.log("selectedOption   "+selectedOption);
//    	if(counter<=3){
    		if( randomNumber==selectedOption){
    			$("#main-div-conf").html("");
    			 $("#canvas-div").html("");
    			 $("#alertMsgBox").attr('hidden',true);
//    			 alert("succefully done ");
//    			  $("#mainDiv").html("<b> Result page in progress.</b> ");
//    			
                count_correct_fault++;
				resultAnalysis(counterMasterJson);
    		}
    		else{
    			$("#alertMsgBox").attr('hidden',false);
    			$("#msgBox").html("<b class='errorMsgf'> Wrong selection !!!!!!!!!</b>");	
    			count_wrong_fault++;
    			}
//    	}
//    	else{
//    		
//    	}
    	
    	var countTempJson = {};
				 countTempJson.wrongOption = count_wrong_fault;
				 countTempJson.correctOption = count_correct_fault;
				 counterMasterJson.faultFinding = countTempJson;
//    	counter=counter+1;
    });
}//main function