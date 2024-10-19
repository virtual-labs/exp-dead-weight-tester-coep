var counterMasterJson ={};	
var ansCount = 0;
$(".panelBody").css({"background-color": "#fff"});
//	$(function() {
//		basicKnowledge = function() {
	var ques_cnt = 0;	
			var flag = false;
			var myRadio = null;
			dataQues = {};

			$("#main-div-conf").html('');
			
				$("#panelHeadingBold").html('BASIC KNOWLEDGE');

			var questions = '';
			questions += ''
				+ '<div id = "questionDiv">'

			for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

				for (var j = 0; j < QuestionsJSON.data["SEC"][0].QUES.length; j++) {

					questions += '<div class="col-md-12">'
						+ '<br><span class="queno">Question No : ' + (i + 1) + '</span>'
						+ '<br><div class="queTitle">'

						+ QuestionsJSON.data["SEC"][i].QUES[j].QC
						+ '</div>'

					for (var k = 0; k < QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++) {

						questions += '<div>'
							+ '<div class="ansTitle col-md-6">'

							+ "<input class='radioType'  name='radio-" + i + "' id='" + i + "' ANSID='" + QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID + "' type='radio'"
							+ "' value='"
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ "' >"
							+ '<p style="margin: -20px 0 8px 29px;font-size: 18px;">'
							+ QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content
							+ '</p>'

							+ '</div>'
							+ '</div>'
					}
					questions += '</div>'
				}
			}

			questions += '<div class="buttonDiv">'
				+ '<button  class="btn btn-danger"  id="testSubmit" data-toggle="modal" data-target="#questionModal">Submit Test</button>'
				+ '<button  class="btn btn-danger"  id="nextLevel1" data-toggle="modal" data-target="#questionModal" hidden>Next Level</button>'

//				data-toggle="modal" data-target="#myModal"
			//	+ '<button id="config" class=" btn btn-danger nextLevelBtn" >Next Level</button>'

				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="questionModal"  role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button"  class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id="configcallModal" data-dismiss="modal">OK</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				
				+ '</div>'
				+ ' </div>'

				
				
		

			$("#main-div-conf").html(questions);
             
             $('#nextLevel1').on('click', function() {	
	      if(ansCount != 0){
		config1();
	} 
});
			$('#testSubmit').on('click', function() {		
				$("body").css("padding","0px 0px 0px 0px");
				
					var arr = [];
					
					for (var i = 0; i < QuestionsJSON.data["SEC"].length; i++) {

						var qid = $('input[name=radio-' + i + ']').attr(
							'id');

						var ansId = $('input[name=radio-' + i + ']:checked').attr(
							'ANSID');

						myRadio = $(
							'input[name=radio-' + i + ']:checked')
							.val();

						if (myRadio == null) {
							flag = flag && false;
//							alert('Please attempt all the questions');
//							$("body").css("padding","0px");
							$("#modelMsg").html("<b class='boldTextRed'>Please attempt all the questions.</b>");
						break;	
						}
						arr.push({
							"QID": qid,
							"ANS": myRadio,
							"ANSId": ansId
						});
					}

					

					if (myRadio != null) {
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].ANSId == "true") {
								ansCount++;
								
							}
						}
//						dataQues.corrAns = ansCount;
//						 data.corrAns = dataQues;
//						 console.log(data);
						 
				$("#testSubmit").prop("hidden",true);
				$("#nextLevel1").prop("hidden",false);
						 
						$("#modelMsg").html("<b class='boldTextGreen'>Test Submitted Successfully . Correct Answers Are : " + ansCount+"</b>");
//						alert("Test Submitted Successfully . Correct Answers Are : " + ansCount);
//						$("body").css("padding","0px 0px 0px 0px");
						
						var tempCountJson ={};
						tempCountJson.correctAnswer = ansCount; 
//						 jsonArr.push(tempJson);
					counterMasterJson.questionary = tempCountJson;
						 $("#centerText2").html("CONFIGURATION"); 
							
		   					
					}
					
//			$('#config').on('click', function() {
//				
//				});
						
			});
			
		
//			}
				
//	});
