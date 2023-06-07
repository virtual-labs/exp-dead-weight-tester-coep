
//var masterJson = {};
//var JsonArr = [];
//var t="";
//var min="";
//var max="";
//var supplierConstaint="";
//var maxInput="";
//var maxOutput="";
//var noBlades="";
//var  fluidType="";
//var  materialType="" ;
//var BladeShape="";
//var pipeSize="";
//var time1="";
var weight="";
 var meter="";
var cylinderPiston="";
var htm= ''
//+'<div class="row" >'
//		+'<div class="col-sm-6">'
//	   +'<label for="weight">Select weight</label>'
//	   +'</div>'
//		   
//	   +'<div class="col-sm-6" >'
//	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="weight" >'
//	   +'<option value="0">--- Select Weight --- </option>'
//	   +'<option value="0">100 Gf</option>'
//	   +'<option value="0">500 Gf</option>'
//	   +'<option value="0">1 KGf</option>'
//	   +'<option value="0">2 KGf</option>'
//	   +'<option value="0">5 KGf</option>'
////	   +'<option value="50">50</option>'
////	   +'<option value="60">60</option>'
//	   +'</select>'
//	   +'</div>'
//	   +'</div>'
	  
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select meter </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="meter">'
	   +'<option value="0">--- Select meter --- </option>'
	   +'<option value="16" >Small(0-16)  </option>'
	   +'<option value="50">Medium(0-50)</option>'
	   +'<option value="100">Large(0-100)</option>'
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
	   +'<label for="cylinderPiston">Select cylinder Piston</label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="cylinderPiston">'
	   +'<option value="0">--- Select cylinder Piston --- </option>'
	   +'<option value="50" >3 MM </option>'
	   +'<option value="55">5 MM</option>'
	   +'<option value="60">7 MM</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<button type="button" class="btn btn-success btnStyle" id="checkConfg">CHECK CONFIGURATION </button>'
	   $("#main-div-conf").html(htm);
	  
	   $("#checkConfg").click(function(){
//		   alert("ghh");
		   weight=$("#weight").val();
		   meter=$("#meter").val();
		   cylinderPiston=$("#cylinderPiston").val();
		   $("#sub-main-div").html("weight    "+weight);
		   $("#sub-main-div").append("  meter  "+meter);
		   $("#sub-main-div").append("  cylinderPiston  "+cylinderPiston);
		   console.log("weight    "+weight);
		   console.log("meter    "+meter);
		   console.log("cylinderPiston    "+cylinderPiston);
		  $("#canvas-div").html("");

		   mimicCall(weight,meter,cylinderPiston);
	   });