function config1(){

var weight="";
 var meter="";
var cylinderPiston="";
var htm= ''

	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select meter gauge</label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="meter">'
	   +'<option value="0">--- Select meter --- </option>'
	   +'<option value="16" >Small(0-16)  </option>'
	   +'<option value="50">Medium(0-50)</option>'
	   +'<option value="100">Large(0-100)</option>'
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
	   +'<label for="cylinderPiston">Select cylinder Piston Area</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg selectbg selectStyle"  id="cylinderPiston">'
	   +'<option value="0">--- Select cylinder Piston --- </option>'
	   +'<option value="50" >3 mm </option>'
	   +'<option value="55">5 mm</option>'
	   +'<option value="60">7 mm</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	 
	   $("#main-div-conf").html(htm);
	    $("#cylinderPiston").change(function(){
		var CalculateActualFlowStr = '<div class="row" id="CalculateActualFlow" >'
	
CalculateActualFlowStr +='<div class="col-sm-4">'
				       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"> Calculate the radius of cylinder:  </label>'
				       +'</div>'
					 +'<div class="col-sm-4">'
				       +'<input type="text" id="flowAns" style=margin:15px 10px;width:100%;"  class=" form-control" />'
				       +'</div>'
				       +'<div class="col-sm-4">'
				       +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
				       +'</div>'
				       
				       
				         +'</div>'
				       +'<br>'
				       +'<br>'
				       +'<div class=" col-sm-12" >'
				       +'<button type="button" class="btn btn-success btnStyle" id="checkConfg" hidden>CHECK CONFIGURATION </button>'
				        +'</div>'
				       + ' <!-- Modal -->'
						+ '<div class="modal fade" id="myModal" role="dialog">'
						+ ' <div class="modal-dialog modal-md">'
						+ '    <div class="modal-content">'
						+ '     <div class="modal-header">'
						
						+ '       <h4 class="modal-title">Message box</h4>'
						+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
						+ '     </div>'
						+ '     <div class="modal-body">'
						+ '       <p id="modelMsg">This is a small modal.</p>'
						+ '     </div>'
						+ '     <div class="modal-footer">'
						+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
						+ '     </div>'
						+ '   </div>'
						+ ' </div>'
						+ '</div>'
						//model Close
				      
				       $("#CalculateActualFlow").html(CalculateActualFlowStr);	
		  
		$("#main-div-conf").append(CalculateActualFlowStr);
		 var id=0;
	   $("#btnAnsCheck").click(function() {
		meter=$("#meter").val();
		cylinderPiston=$("#cylinderPiston").val();
		
		if(meter==0||cylinderPiston==0)
		   {
			 $("#modelMsg").html("<b class='boldTextBlue'>Select Meter Gauge. </b>");
			}
			else{
			
		var flowAns = $("#flowAns").val().trim();
		if(flowAns=="")
			{
//				alert("empty");
				 $("#modelMsg").html("<b class='boldTextBlue' >Dont Skip empty textbox . </b>");
				 $("body").css("padding","0px 0px 0px 0px");
			}
		else{
		console.log("cylinderPiston "+cylinderPiston);
				if(cylinderPiston==50){
					cylinderPiston1=3;
					console.log("cylinderPiston1 "+cylinderPiston1);
				}
				else if(cylinderPiston==55){
					cylinderPiston1=5;
					console.log("cylinderPiston1 "+cylinderPiston1);
				}
				else {
					cylinderPiston1=7;
					console.log("cylinderPiston1 "+cylinderPiston1);
				}
			temp =parseFloat(cylinderPiston1/3.14);
		
			flowActual=Math.sqrt(temp);
			flow=flowActual.toFixed(2);
			console.log("flow   "+flow);
			if (id <= 3) {
				
				if (flowAns == flow) {
					checkAns = 0;
					console.log("success");
//					 $("#CalculateActualFlow").html("");
					  $("#checkConfg").attr('hidden',false);
					 $("#main-div-conf").html("<h4><center id='simulationLabel'>Now Start Simulation</center></h4>");
						console.log("meter   "+meter);
					console.log("cylinderPiston   "+cylinderPiston);
					$("#canvas-div").html("");
					 mimicCall(meter,cylinderPiston);
					 
	
				} else if (flowAns != flow) {
					
	//			alert("Entered value is incorrect.Try it again... ");
				 $("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try it again . </b>");
				 $("body").css("padding","0px 0px 0px 0px");
				console.log("wrong");
				}
	
	
			} else if (id == 4) {
				
	//			alert("formula : Volume of the float = "+unescape('%u220F')+" / 4 Dr"+unescape('%B2')+"h ");
				
				 $("#modelMsg").html("<b class='boldTextBlue'>formula : Area = "+unescape('%u220F')+" r"+unescape('%B2')+"</b> ");
				 $("body").css("padding","0px 0px 0px 0px");
				
			} else {
				flowAns = $("#flowAns").val().trim();
	
				if (flowAns == flow) {
					checkAns = 0;
					$("#flowAns").val('');
//					 $("#CalculateActualFlow").html("");
					  $("#checkConfg").attr('hidden',false);
					 $("#main-div-conf").html("<h4><center id='simulationLabel'>Now Start Simulation</center></h4>");
					console.log("meter   "+meter);
					console.log("cylinderPiston   "+cylinderPiston);
					$("#canvas-div").html("");
					 mimicCall(meter,cylinderPiston);
					  
	
				} else {
					checkAns = 0;
	//				alert("correct answer is " + flow );
					 $("#modelMsg").html("<b class='boldTextRed'>Correct answer is " + flow+"</b>");
					 $("body").css("padding","0px 0px 0px 0px");	
	
				}
			}
			id++;
			
			
			}
	}
			}); 
	});
	   
		   
		  
		   
	
	   }