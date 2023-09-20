function MeterCalibration(meter,cylinderPiston,masterJson)
{
	var meterguage=parseInt(meter) ;
	 $("#main-div-conf").html("");
	 $("#sub-main-div1").html("");
	  $("#sub-main-div2").html("");
	  $('#canvas-div').html("");
	  
	  $("#centerText1").html( "METER CALIBRATION");
$("#centerText2").html("INPUT");
	   var CalculateActualFlowStr =''
	  				 + '<div class="row" id="CalculateActualFlow" >'
//	  				 +'<form action=" ">'
						+'<div class="col-sm-4">'
				       +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Enter Weight:  </label>'
				       +'</div>'
					 +'<div class="col-sm-4">'
					 
				       +'<input type="number"  id="enter_weight"  style=margin:15px 10px;width:100%;" min = "0" max = "'+meterguage+'" class=" form-control" disabled />'
				       +'</div>'
				       +'<div class="col-sm-4">'
				       +'<br><button type="submit" class="btn btn-danger"  id="submit_wt" style="width:100%;margin-top: -6px;" disabled>Submit</input>'
				       
				       +'</div>'
//				       +'</form>'
				      +'</div>'
				
						+'<div class="col-sm-2">'
					 +'</div>'
					 +'<div class="col-sm-8">'
					   +'<button type="button"style="padding: 10px;margin:20px; " class="btn btn-danger btnStyle"  id="faultFinding"  hidden>FAULT FINDING</button>'
//					 +'<button type="button" style="padding: 10px;margin:20px; "  class="btn btn-danger btnStyle" id="showGraph" hidden ><b>SHOW GRAPH </b></button>'
					 +'</div>'
					 +'<div class="col-sm-2">'
					 +'</div>'
				
				
//				
//				         +'<div class="col-sm-12">'
//				       +'<br><button type="submit"style="padding: 10px;margin:20px; " class="btn btn-danger btnStyle"  id="faultFinding"  data-toggle="modal" data-target="#myModal" hidden>FAULT FINDING</button>'
//				      +'</div>'
				      
		 $("#main-div-conf").html(CalculateActualFlowStr);		
		 $("#faultFinding").click(function(){
			console.log("click function fualtFinding");
//					fualtFinding(masterJson);
                   fualtFinding(masterJson);
			   });			      
//	paper = new Raphael(document.getElementById('canvas-div'));
$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 700;
	var h = 700;

	var width = $(window).width();

	if($(window).width() < 500){
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}else{
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//var paper = new Raphael(document.getElementById('canvas-div'),900,900);
var x = 565;
var y = 350;
var Tot_weight;
//console.log("Weight = "+weight);
var unit1,angle;
//=270/100;
//var angle= unit1*weight;
var  x1,y1;
s=paper.text((x1+200),(y1+165),'');
s1=paper.text((x1+200),(y1+165),'');
var angle1=10;
var angle2=10;
var mline,triangle,arc,arc_anim;

var spring_flag=0;
var Img;
var sectorImg;
var keepRotating;
var screw1,arc_circle;
var real_dwt,handle,Weight_img,h_screw;
var hndl_angle=280;
var time=1000;
var handle_flag=1;
var screwCalibration;
var zeroError=paper.text((x1+200),(y1+165),'');
var spanError=paper.text((x1+250),(y1+165),'');
var seqence_flag=0;
var wtSpring=0;
if(meterguage==16){
	meterguage1();
}else if(meterguage==50){
	meterguage2();
}else{
	 meterguage3();
}
real_Dwt();
meterwork();

function real_Dwt(){
	
	real_dwt = paper.image("images/real_dwt.png",(x1-54), (y1-20), 800,650);	
	Weight_img = paper.image("images/weight_Img_calibration.png",x1+425, y1+110, 200,100);	
	handle= paper.image("images/Handle111.png",x1+234, y1+184, 271,271);
	h_screw=paper.image("images/h_Screw.png",x1+344, y1+295, 50,50);
		}
//zeroError.toFront();	
var stage;
var circle2_small =paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'}); 	
var ranErr, pres,divideVal,errDisp;

//setTimeout(function(){ 
//		alert("Click on Pointer  and Calibrate Zero"); 
//		
//		},time+1500);

init_wt_calibrate_zero(-2);
function init_wt_calibrate_zero(Tot_weight){
	 unit1=270/meterguage;
	 angle= unit1*Tot_weight;
	 keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
	 mline.animate(keepRotating);
}


function zero_calibration(Tot_weight){
	 unit1=270/meterguage;
	 angle= unit1*Tot_weight;
	 keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
	 mline.animate(keepRotating);
	
//	setTimeout(function(){ 
//		alert("Now Enter Weight"); 
//		},time+100);
//	 
}
	
function span_calibration(Tot_weight){	
	 unit1=270/meterguage;
	 angle= unit1*Tot_weight; 
	 keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
	 mline.animate(keepRotating);
}


function spanWeight(){
	Weight_img.animate({y:y1+100}, time+500);
	var r = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
	Img.animate(r); 
	angle2=-25; 	    
	var r1 = Raphael.animation({ 'transform':  'r'+(angle2)+ ', '+(x1+247)+', '+(y1+121.8)+' '}, 1000 );	
	sectorImg.animate(r1);	
	Tot_weight=meterguage;
	//meterguage;
	console.log("Weight = "+Tot_weight);
	weight=parseInt(Tot_weight);
	console.log("Weight = "+weight);
 	num = Math.floor(Math.random() * (rmax - rmin + 1) + rmin);
 	console.log("Error_val = "+num);
 	Error_val=parseInt(num);
 	Meter_weight=weight+Error_val;
	console.log("Weight With Error = "+Meter_weight);			
	unit1=270/meterguage;
	console.log("unit1 = "+unit1);
	angle= unit1*Meter_weight;  	
	console.log("angle = "+angle);		
	keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
	mline.animate(keepRotating);
	console.log("angle wt="+angle);
}

//16 reading meter
   function meterguage1(){
	  x1 = x-528 , y1 = y-307;
//Border circle
	var circleB1 = paper.circle(x1+200, y1+98, 90).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 84).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 82).attr({'stroke':'#c7c5c5'});
 
    var circle1 = paper.circle(x1+200, y1+98, 43).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 40).attr({'stroke':'#0293e0','stroke-width': 2});
 	
 	//center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2_small = paper.circle(x1+200, y1+98, 5).attr({'fill' :'#0293e0'});
 	
 	var triangle=paper.path('M' + (x1+153) + ' ' + (y1+143) + 'l 24 -22    l 43 0   l 24 22 z').attr({'stroke' :'white', 'fill':'white'});
// 	var mline= paper.path('M' + (x1+194) + ' ' + (y1+97) + 'l -25 1   l 25 1.8 z M' + (x1+205) + ' ' + (y1+95) + 'l 5 0 l 0 5 l -5 0 Z ' ).attr({'fill' :'black','stroke-width':2});
 	//Main reading-0,4,8,12,16	
 	var meter_range1= paper.path('M' + (x1+169.5) + ' ' + (y1+127) + 'l -9 7.5    M' + (x1+160) + ' ' + (y1+81)+'l -9 -3.7   M'+ (x1+200)+ ' ' +(y1+45)+ 'l 0 9        M' + (x1+240) + ' ' + (y1+81) + 'l 9 -2.5     M' + (x1+229) + ' ' + (y1+128) + 'l 9 7').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+154),(y1+140),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+142),(y1+76),'4').attr({'stroke-width':5,'font-size':15}).transform( 'r-75');  
 	             paper.text((x1+200),(y1+36),'8').attr({'stroke-width':5,'font-size':15}).transform( 'r0');  
 	             paper.text((x1+258),(y1+76),'12').attr({'stroke-width':5,'font-size':15}).transform( 'r70');  
 	             paper.text((x1+243),(y1+140),'16').attr({'stroke-width':5,'font-size':15}).transform( 'r-40');  
 	           
 	var square=	paper.text((x1+217),(y1+130),'2').attr({'stroke-width':4,'font-size':8});
  s=paper.text((x1+200),(y1+150),'psi').attr({'font-size':12,'fill':'#0293e0' });
  s1=  paper.text((x1+197),(y1+135),'kg/cm').attr({'stroke-width':4,'font-size':13}); 
// 	 var meter_rangetx1t = paper.tex1t(x1, y1 ,'0').transform( 'r'+angle);        
//    // save angle degree
//    tx1t.data('t',tx1t.attr("transform"));
 	var range1= paper.path('M' + (x1+165) + ' ' + (y1+123) + 'l -6 4.3    M'+ (x1+161) + ' ' + (y1+117.5) + 'l -9 5.1     M'+ (x1+159)+ ' ' +(y1+112)+ 'l -6 2    	  M' + (x1+157) + ' ' + (y1+106) + 'l -9 1        M' + (x1+156) + ' ' + (y1+99.5) + 'l -6 0     M' + (x1+156.5) + ' ' + (y1+93) + 'l -9 -1       M' + (x1+158) + ' ' + (y1+86) + 'l -6 -1 '
 						  +'M' + (x1+163) + ' ' + (y1+75)+'l -6 -2.5        M' + (x1+167) + ' ' + (y1+69)+'l -9 -5        M' + (x1+172) + ' ' + (y1+65.5)+'l -6 -4.7    M' + (x1+176.5) + ' ' + (y1+62)+'l -6.1 -9.5    M' + (x1+182) + ' ' + (y1+58)+'l -3 -6.5      M' + (x1+188.2) + ' ' + (y1+57)+'l -3.2 -10.5      M' + (x1+194) + ' ' + (y1+54.5)+'l -1 -6.5    '
 						  +'M' + (x1+207)+ ' ' +(y1+55)+ 'l 1 -7            M'+ (x1+213)+ ' ' +(y1+56)+ 'l 3.4 -9         M'+ (x1+219)+ ' ' +(y1+59)+ 'l 3.4 -6.5       M'+ (x1+224)+ ' ' +(y1+62)+ 'l 6.7 -9           M'+ (x1+229)+ ' ' +(y1+67)+ 'l 6.2 -7         M'+ (x1+233.6)+ ' ' +(y1+71)+ 'l 9 -6.8          M'+ (x1+237)+ ' ' +(y1+75.5)+ 'l 6.7 -3   '
 						  +'M' + (x1+242) + ' ' + (y1+88) + 'l 6 -1         M' + (x1+244) + ' ' + (y1+94.2) + 'l 9 -0.7   M' + (x1+244) + ' ' + (y1+100.7) + 'l 6 0.2   M' + (x1+242.8) + ' ' + (y1+107) + 'l 9 2       M' + (x1+241) + ' ' + (y1+113) + 'l 6 2       M' + (x1+238) + ' ' + (y1+119) + 'l 9 5          M' + (x1+234.5) + ' ' + (y1+124.2) + 'l 6 5  ' ); 	
	
 	var meter_range2= paper.path('M' + (x1+171) + '   ' + (y1+127) + 'l 6 -6    M' + (x1+164.5) + ' ' + (y1+81) + 'l 6 2     M'+ (x1+200) + ' ' + (y1+59) + 'l 0 6    M' + (x1+237.5) + ' ' + (y1+86.5) + 'l -6 2      M' + (x1+228.5) + ' ' + (y1+126) + 'l -5 -5' ).attr({'stroke' :'#0293e0','stroke-width':2}); 
// 	var circle1 = paper.circle(x1+200, y1+98, 40).attr({'stroke':'red','stroke-width': 2});

	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -35 37   l 37 -33  M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'});
// 	var circle111 = paper.circle(x1+200, y1+98, 51).attr({'stroke':'red','opacity1':0.5});		                                                                           	

Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
sectorImg = paper.image("images/sector_hight.png",(x1+211.8), (y1+91), 54, 55);
 zeroError=paper.image("images/click11.png",x1-20, y1+90, 185,65);
 zeroError.animate({x:x1-1}, time);	 

//Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
////sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
//sectorImg = paper.image("images/sector16.png",(x1+211), (y1+91.4), 53, 55);

Img.toBack();
mline.toFront();
}



// 50 meter
   function meterguage2(){
	  x1 = x-528 , y1 = y-307;
//	var circle1 = paper.circle(x1+200, y1+98, 60).attr({'gradient': '90-#e6e7e8-#595959','stroke-width': 5,'stroke-linejoin': 'round'});
//Border circle
	var circleB1 = paper.circle(x1+200, y1+98, 99).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 94).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'stroke':'#c7c5c5'});
 
    var circle1 = paper.circle(x1+200, y1+98, 58).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 55).attr({'stroke':'#0293e0','stroke-width': 2});
// 	var springc= paper.circle(x1+200, y1+98, 45).attr({'stroke':'sky1blue','stroke-width': 2});
 	//center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2_small = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'});
 	
 	 triangle=paper.path('M' + (x1+199) + ' ' + (y1+122) + 'l -47 30 l 94 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});

 	var meter_range1= paper.path('M' + (x1+159) + ' ' + (y1+138) + 'l -10 9     M' + (x1+142) + ' ' + (y1+88)+'l -10 -2    M'+ (x1+175)+ ' ' +(y1+45)+ 'l -5 -10.5        M' + (x1+227) + ' ' + (y1+47) + 'l 6 -10       M' + (x1+257) + ' ' + (y1+90) + 'l 12 -1.5       M' + (x1+239.5) + ' ' + (y1+139) + 'l 8.5 10').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+143),(y1+152),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+123),(y1+85),'10').attr({'stroke-width':5,'font-size':15}).transform( 'r-80');  
 	             paper.text((x1+166),(y1+27),'20').attr({'stroke-width':5,'font-size':15}).transform( 'r-25');  
 	             paper.text((x1+237),(y1+30),'30').attr({'stroke-width':5,'font-size':15}).transform( 'r30');  
 	             paper.text((x1+278),(y1+87),'40').attr({'stroke-width':5,'font-size':15}).transform( 'r80');  
 	             paper.text((x1+255),(y1+153),'50').attr({'stroke-width':5,'font-size':15}).transform( 'r-50');  
 	              
 	var square=	paper.text((x1+218),(y1+145),'2').attr({'stroke-width':4,'font-size':8});
 	 s=paper.text((x1+200),(y1+165),'psi').attr({'font-size':12,'fill':'#0293e0' });
 	    s1= paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13});

 	var range1= paper.path('M' + (x1+144) + ' ' + (y1+115) + 'l -10 3     M' + (x1+154) + ' ' + (y1+62.5) + 'l -10 -6       M' + (x1+201) + ' ' + (y1+39) + 'l 0 -10      M' + (x1+248) + ' ' + (y1+64) + 'l 10 -6        M' + (x1+256) + ' ' + (y1+117) + 'l 10 4'
			  +'M'+(x1+155)+' '+(y1+134) + 'l -7 5   M'+(x1+152)+' '+(y1+130)+ 'l -7 4    M'+(x1+149)+' '+(y1+124.9)+ 'l -7 4     M'+(x1+146)+' '+(y1+120)+ 'l -7 3'
			  +'M'+(x1+143)+' '+(y1+110)+'l -7 1     M'+(x1+142)+' '+(y1+104)+'l -7 1     M'+(x1+141.5)+' '+(y1+99)+ 'l -7 0      M'+(x1+142)+' '+(y1+93)+ 'l -7 -0.5             ' 
			  +'M'+(x1+144)+' '+(y1+82)+'l -7 -2     M'+(x1+146)+' '+(y1+77)+'l -7 -2.8   M'+(x1+148)+' '+(y1+72)+'l -7 -3        M'+(x1+151)+' '+(y1+67)+'l -7 -4'
			  +'M'+(x1+158)+' '+(y1+59)+'l -7 -5     M'+(x1+162)+' '+(y1+55)+'l -7 -6     M'+(x1+166)+' '+(y1+52)+'l -6 -7        M'+(x1+170)+' '+(y1+48)+'l -5 -7'
			  +'M'+(x1+180)+' '+(y1+43)+'l -3 -7     M'+(x1+185)+' '+(y1+41)+'l -2 -7     M'+(x1+190)+' '+(y1+40)+'l -1 -7        M'+(x1+196)+' '+(y1+39)+'l -1 -7'
			  +'M'+(x1+206)+' '+(y1+39.5)+'l 1 -7    M'+(x1+212)+' '+(y1+40)+'l 2 -7      M'+(x1+217)+' '+(y1+42)+'l 3 -7         M'+(x1+222)+' '+(y1+44)+'l 3 -7'    
			  +'M'+(x1+232)+' '+(y1+50)+'l 5 -7      M'+(x1+236)+' '+(y1+53.5)+'l 6 -7    M'+(x1+239.7)+' '+(y1+57)+'l 7 -6       M'+(x1+244)+' '+(y1+61)+'l 7 -6'
			  +'M'+(x1+251)+' '+(y1+69)+'l 7 -4      M'+(x1+254)+' '+(y1+74)+'l 7 -3      M'+(x1+256)+' '+(y1+79)+'l 7 -2         M'+(x1+257.5)+' '+(y1+85)+'l 7 -1.7'   
			  +'M'+(x1+259)+' '+(y1+95)+'l 7 0       M'+(x1+259)+' '+(y1+101)+'l 7 0      M'+(x1+258)+' '+(y1+106.5)+'l 7 1       M'+(x1+257)+' '+(y1+112)+'l 7 2'
			  +'M'+(x1+253)+' '+(y1+122.5)+'l 7 3    M'+(x1+250)+' '+(y1+127)+'l 7 4      M'+(x1+247)+' '+(y1+131)+'l 7 5         M'+(x1+243.4)+' '+(y1+135)+'l 7 6');

 	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -45 46   l 48 -42 M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'}); 	


//var sectorImg = paper.image("image/s1.png",(x1+210.2), (y1+93.2), 50, 35);
//var rotate = Raphael.animation({ 'transform':  'r'+-angle1+ ', '+(x1+290)+', '+(y1+91.2)+' '}, 500 ).repeat( 'infinity' );
//sectorImg.animate(rotate);
Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
sectorImg = paper.image("images/sector_hight.png",(x1+211.8), (y1+91), 54, 55);
 zeroError=paper.image("images/click11.png",x1-20, y1+90, 185,65);
 zeroError.animate({x:x1-1}, time);	    
Img.toBack();
mline.toFront();
zeroError.toFront();

}

//meter 100   
   function meterguage3(){
	 x1 = x-528 , y1 = y-307;
//Border circle
	var circleB1 = paper.circle(x1+200, y1+98, 99).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 94).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'stroke':'#c7c5c5'}); 
    var circle1 = paper.circle(x1+200, y1+98, 58).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 55).attr({'stroke':'#0293e0','stroke-width': 2});
 	
 //center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2_small = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'}); 	
 	triangle=paper.path('M' + (x1+200) + ' ' + (y1+121) + 'l -47 30 l 94 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});
 	var range1= paper.path('  '
		//1to 5
			  +'M'+(x1+157)+' '+(y1+136) + 'l -7 5.5     M'+(x1+155)+' '+(y1+134) + 'l -7 5         M'+(x1+153.5)+' '+(y1+132) + 'l -7 4.5      M'+(x1+152)+' '+(y1+129.5)+ 'l -7 4.5    M'+(x1+150)+' '+(y1+127)+ 'l -10 6'     
		//6 to 10	  
			  +'M'+(x1+149)+' '+(y1+124.9)+ 'l -7 4      M'+(x1+147.5)+' '+(y1+122.5)+ 'l -7 3.4    M'+(x1+146)+' '+(y1+120)+ 'l -7 3           M'+(x1+145)+' '+(y1+117.5)+ 'l -7 2.5    M' + (x1+144) + ' ' + (y1+115) + 'l -10 3'
		//11 to 15 
			  +'M'+(x1+143.5)+' '+(y1+112.5)+'l -7 1.5   M'+(x1+143)+' '+(y1+110)+'l -7 1           M'+(x1+142.5)+' '+(y1+107)+'l -7 1          M'+(x1+142)+' '+(y1+104)+'l -7 1         M' + (x1+141) + ' ' + (y1+101.5) + 'l -10 0.7'   
		//16 to 20	  
			  +'M'+(x1+141.5)+' '+(y1+99)+ 'l -7 0       M'+(x1+142)+' '+(y1+96)+ 'l -7 -0.5        M'+(x1+142)+' '+(y1+93)+ 'l -7 -0.5         M'+(x1+142)+' '+(y1+90.8)+ 'l -7 -1       ' 
		//21 to 25	  
			  +'M'+(x1+143)+' '+(y1+85)+'l -7 -2         M'+(x1+144)+' '+(y1+82)+'l -7 -2           M'+(x1+145)+' '+(y1+79.3)+'l -7 -2          M'+(x1+146)+' '+(y1+77)+'l -7 -2.8       M'+(x1+147)+' '+(y1+74.3)+'l l -10 -4.5'
		//26 to 30	 	 
			  +'M'+(x1+148)+' '+(y1+71.5)+'l -7 -3       M'+(x1+149)+' '+(y1+69)+'l -7 -3.5         M'+(x1+151)+' '+(y1+67)+'l -7 -4            M'+(x1+152.2)+' '+(y1+64.5)+'l -7 -4     M'+(x1+154)+' '+(y1+62.4)+'l -10  -6.6 '		 
		//31 to 35	  
			  +'M'+(x1+156)+' '+(y1+60.5)+'l -7 -5       M'+(x1+158)+' '+(y1+59)+'l -7 -5.5         M'+(x1+160)+' '+(y1+57)+'l -7 -6            M'+(x1+162)+' '+(y1+55)+'l -7 -6.5       M'+(x1+164)+' '+(y1+53.5)+'l -9  -10.5 '     
		//36 to 40	 
			  +'M'+(x1+166)+' '+(y1+52)+'l -6 -7         M'+(x1+167)+' '+(y1+49)+'l -5 -6.5         M'+(x1+170)+' '+(y1+48)+'l -5 -7            M'+(x1+173)+' '+(y1+47.7)+'l -5.4  -9.5  M' + (x1+200) + ' ' + (y1+39.2) + 'l 0 -10.2'			  			  
		//41 to 45	  
			  +'M'+(x1+177.5)+' '+(y1+44)+'l -3 -7       M'+(x1+180)+' '+(y1+43)+'l -3 -7           M'+(x1+182.2)+' '+(y1+42)+'l -2.6 -7        M'+(x1+185)+' '+(y1+41)+'l -2 -7         M'+(x1+187)+' '+(y1+41)+'l -2 -10.5  '     
	    //46 to 50
			  +'M'+(x1+190)+' '+(y1+40)+'l -1 -7         M'+(x1+193)+' '+(y1+39.5)+'l -1 -7         M'+(x1+195.2)+' '+(y1+39)+'l -0.5 -6.5      M'+(x1+197.6)+' '+(y1+39)+'l -0.1 -7     '
		//51 to 55	  
			  +'M'+(x1+203)+' '+(y1+39.5)+'l 0.5 -7      M'+(x1+206)+' '+(y1+39.5)+'l 1 -7          M'+(x1+209)+' '+(y1+39.5)+'l 1.1 -7         M'+(x1+211.8)+' '+(y1+40.5)+'l 1.5 -7    M'+(x1+214)+' '+(y1+41)+'l 3.3 -10.5'       
		//56 to 60	  
			  +'M'+(x1+216.3)+' '+(y1+41.6)+'l 3 -7      M'+(x1+219.2)+' '+(y1+42.2)+'l 3 -7        M'+(x1+222)+' '+(y1+43.7)+'l 3 -7           M'+(x1+224.7)+' '+(y1+44.7)+'l 3.7 -7'    		  
		//61 to 65	  
			  +'M'+(x1+230)+' '+(y1+48)+'l 4.9 -7        M'+(x1+232)+' '+(y1+50)+'l 5 -7            M'+(x1+234)+' '+(y1+51.7)+'l 5.7 -7         M'+(x1+236)+' '+(y1+53.5)+'l 6 -7        M'+(x1+239)+' '+(y1+54.2)+'l 8.5 -8.7    '     
		//66 to 70	  
			  +'M'+(x1+239.7)+' '+(y1+57)+'l 6.8 -6      M'+(x1+241.5)+' '+(y1+59)+'l 6.8 -6        M'+(x1+243.5)+' '+(y1+61)+'l 7 -6           M'+(x1+246)+' '+(y1+62.5)+'l 7 -5.8      M' + (x1+248) + ' ' + (y1+64) + 'l 10 -6      '
		//71 to 75	  
			  +'M'+(x1+249)+' '+(y1+66.4)+'l 7 -4        M'+(x1+251)+' '+(y1+69)+'l 7 -4            M'+(x1+252)+' '+(y1+71.8)+'l 7 -3.5         M'+(x1+254)+' '+(y1+74)+'l 7 -3          M'+(x1+254)+' '+(y1+76.5)+'l 10  -3.5'	  
	    //76 to 80
			  +'M'+(x1+256)+' '+(y1+79)+'l 7 -2          M'+(x1+256.5)+' '+(y1+82)+'l 7 -2          M'+(x1+257.5)+' '+(y1+85)+'l 7 -1.7         M'+(x1+258)+' '+(y1+87.1)+'l 7 -1.5'   
		//81 to 85
			  +'M'+(x1+258.9)+' '+(y1+92.5)+'l 7 -0.5    M'+(x1+259)+' '+(y1+95)+'l 7 0             M'+(x1+259)+' '+(y1+98)+'l 7 0              M'+(x1+259)+' '+(y1+101)+'l 7 0          M'+(x1+258.8)+' '+(y1+104)+'l 10 0.4'
		//86 to 90
			  +'M'+(x1+258)+' '+(y1+106.5)+'l 7 1        M'+(x1+257.7)+' '+(y1+109.5)+'l 7 1.5      M'+(x1+257)+' '+(y1+112)+'l 7 2             M'+(x1+256)+' '+(y1+114.5)+'l 7 2        M' + (x1+255.5) + ' ' + (y1+117) + 'l 10 4'
		//91 to 95	  
			  +'M'+(x1+254.6)+' '+(y1+119.5)+'l 7 3      M'+(x1+253)+' '+(y1+122.5)+'l 7 3          M'+(x1+252)+' '+(y1+125)+'l 7 3             M'+(x1+250)+' '+(y1+127)+'l 7 4          M'+(x1+249)+' '+(y1+129)+'l 10 7 '
		//96 to 100	  
			  +' M'+(x1+247)+' '+(y1+131)+'l 7 5         M'+(x1+245.5)+' '+(y1+133.7)+'l 7 5        M'+(x1+243.4)+' '+(y1+135)+'l 7 6           M'+(x1+242.5)+' '+(y1+138)+'l 6 6');

 	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -45 46   l 48 -42    M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'});
	
 	var meter_range1= paper.path('M' + (x1+159) + ' ' + (y1+138) + 'l -10 9     M' + (x1+142) + ' ' + (y1+88)+'l -10 -2    M'+ (x1+175)+ ' ' +(y1+45)+ 'l -5 -10.5        M' + (x1+227) + ' ' + (y1+47) + 'l 6 -10       M' + (x1+257) + ' ' + (y1+90) + 'l 12 -1.5       M' + (x1+239.5) + ' ' + (y1+139) + 'l 8.5 10').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+143),(y1+152),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+123),(y1+85),'20').attr({'stroke-width':5,'font-size':15}).transform( 'r-80');  
 	             paper.text((x1+166),(y1+27),'40').attr({'stroke-width':5,'font-size':15}).transform( 'r-25');  
 	             paper.text((x1+237),(y1+30),'60').attr({'stroke-width':5,'font-size':15}).transform( 'r30');  
 	             paper.text((x1+278),(y1+87),'80').attr({'stroke-width':5,'font-size':15}).transform( 'r80');  
 	             paper.text((x1+253),(y1+155),'100').attr({'stroke-width':5,'font-size':15}).transform( 'r-41');  
 	             paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13}); 
 	var square=	paper.text((x1+218),(y1+145),'2').attr({'stroke-width':4,'font-size':8});
 	 s=paper.text((x1+200),(y1+165),'psi').attr({'font-size':12,'fill':'#0293e0' });
 	s1=  paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13}); 


// 	var circle111 = paper.circle(x1+200, y1+98, 51).attr({'stroke':'red','opacity1':0.5});		                                                                           	
// 	var keepRotating = Raphael.animation({'transform':  'r'+angle+ ', 300, 298' }, 500 ); 	
//	mline.animate(keepRotating);
Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
sectorImg = paper.image("images/sector_hight.png",(x1+211.8), (y1+91), 54, 55);
 zeroError=paper.image("images/click11.png",x1-20, y1+90, 185,65);
 zeroError.animate({x:x1-1}, time);	

//Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
////sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
//sectorImg = paper.image("images/sector_hight.png",(x1+211.8), (y1+91), 53, 55);
Img.toBack();
mline.toFront();

}

 var line1,line1_border;
function meterwork(){
	
	if(meterguage==16){
		x1 = x-528 , y1 = y-307;
//		var sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7});
//		 line1_border= paper.path("M"+(x1+265.5 )+" "+(y1+116)+" M    l -26 28 ").attr({'stroke':'#cb9931','stroke-width':8});
//	 line1= paper.path("M"+(x1+264 )+" "+(y1+118)+" M    l -22 23 ").attr({'stroke':'#fff','stroke-width':4});
//		arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  			  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M   "
//					  ).attr({'stroke':'#cb9931','stroke-width':7});
//screw1=paper.image("images/screwDesign.png",(x1+257.7), (y1+111), 11.5, 11.5);  //       	screw2=paper.image("images/screw_Image.png",(x1+236.5), (y1+125.2), 11, 11);
//      	 console.log("x1="+x1);
//         console.log("y1="+y1);
//		sectorImg.toFront();
////		screw2.toFront();
//		sp.toFront();
//		//mline.toFront();
//		s.toFront();
//		s1.toFront();
//		mline.toFront();
//		zeroError.toFront();
	var sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7,'stroke-opacity':0.8});
		//arcfinal= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 5  5 120 0 1 "+(x1+200)+" "+(y1+48.5)+" M  "   		  + "M "+(x1+200)+" "+(y1+49)+ " A 10  10 120 0 1 "+(x1+200)+" "+(y1+130)+" M   "
	 line1_border= paper.path("M"+(x1+265.5 )+" "+(y1+116)+" M    l -26 28 ").attr({'stroke':'#cb9931','stroke-width':8});
	 line1= paper.path("M"+(x1+264 )+" "+(y1+118)+" M    l -22 23 ").attr({'stroke':'#fff','stroke-width':4});

		arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
		  			  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M   ").attr({'stroke':'#cb9931','stroke-width':7,'stroke-opacity':0.8});
		screw1=paper.image("images/screwDesign.png",(x1+257.7), (y1+111), 11.5, 11.5);  
//        screw2=paper.image("images/black_screw.png",(x1+245.5), (y1+127), 11, 11);
//        screw_Calibration=paper.image("images/screw_img.png",(x1+245), (y1+120), 11, 11);
        console.log("x1="+x1);
        console.log("y1="+y1);
		sectorImg.toFront();
//		screw2.toFront();
		sp.toFront();
		//mline.toFront();
		s.toFront();
		s1.toFront();
		mline.toFront();
		zeroError.toFront();
	}else{
		x1 = x-528 , y1 = y-307;
		var sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7});
		//arcfinal= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 5  5 120 0 1 "+(x1+200)+" "+(y1+48.5)+" M  "   		  + "M "+(x1+200)+" "+(y1+49)+ " A 10  10 120 0 1 "+(x1+200)+" "+(y1+130)+" M   "
	 line1_border= paper.path("M"+(x1+265.5 )+" "+(y1+116)+" M    l -26 28 ").attr({'stroke':'#cb9931','stroke-width':8});
	 line1= paper.path("M"+(x1+264 )+" "+(y1+118)+" M    l -22 23 ").attr({'stroke':'#fff','stroke-width':4});

//		arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  			  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+259 )+" "+(y1+115)+" M   "
//					  ).attr({'stroke':'#cb9931','stroke-width':7});
arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
		  			  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M   "
					  ).attr({'stroke':'#cb9931','stroke-width':7});
		screw1=paper.image("images/screwDesign.png",(x1+257.7), (y1+111), 11.5, 11.5);  
//        screw2=paper.image("images/black_screw.png",(x1+245.5), (y1+127), 11, 11);
//        screw_Calibration=paper.image("images/screw_img.png",(x1+245), (y1+120), 11, 11);
        console.log("x1="+x1);
        console.log("y1="+y1);
		sectorImg.toFront();
//		screw2.toFront();
		sp.toFront();
		s.toFront();
		s1.toFront();
		mline.toFront();
		zeroError.toFront();
	}
}

function sector_movement(){		    	
//if(handle_flag==1){
//		handle.animate({'transform':'r'+(hndl_angle)+''},time);	  
//		handle_flag=0;
//}else{
//		hndl_angle=90	;  
//		handle_flag=1;
//		handle.animate({'transform':'r'+(-hndl_angle)+''},time);
//}
    
//angle1=35;	  
if(meterguage==16)
{
	
		if(Error_val<0){
			handle.animate({'transform':'r'+(hndl_angle)+''},time);	  
		
//			var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+242)+', '+(y1+121.8)+' '}, time);	
//		    	sectorImg.animate(rotate_sector);
	angle2=35; 
		    var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+246)+', '+(y1+128.5)+' '}, time);	
		    	sectorImg.animate(rotate_sector);	
		    	console.log("Sector angle = "+angle1);
		    	span_calibration(Tot_weight);
		    	
			console.log("meter16 IF");
				
		 		var r = Raphael.animation({ 'transform':  'r'+(angle1)+', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
		    	Img.animate(r);	
				Weight_img.animate({y:y1+100}, time+500);				
			    keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
				mline.animate(keepRotating);
				
				var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -30 24 "},1000);
				line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});				
				var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -27 21 "},1000);   
				line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4}); 
			
				
				var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
				  + "M "+(x1+199)+" "+(y1+49)+ " A 70 70 0 0 1 "+(x1+269 )+" "+(y1+113)+" M "+ line1}, 1000);
				arc.animate(keep);
				screw1.animate({transform: ['t',4.5,-3]}, 1000);
				screw1.toFront();
//				screw2.toFront();
				spring_flag++;
		}else{
			  	hndl_angle=90	;  
				handle.animate({'transform':'r'+(-hndl_angle)+''},time);
			   angle2=-35;
				var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle2)+ ', '+(x1+242)+', '+(y1+124.8)+' '}, time);	
			    sectorImg.animate(rotate_sector);		
			    span_calibration(Tot_weight);
				console.log("meter16 ELSE");
				
				Weight_img.animate({y:y1+110}, time);	
				var r = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
				Img.animate(r);    	 	
				
				keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+98)+' '}, 1000 );	
				mline.animate(keepRotating);
				console.log("Minus Angle="+angle);
			
				
			    var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -35 28 "},1000);
						line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
						
						var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -31 25 "},1000);   
						line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});	
				
				var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
					  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M "+line1},1000);
				arc.animate(keep);
				screw1.animate({transform: ['t',-0.1,0.5]}, 1000);
				screw1.toFront();
//				screw2.toFront();
				spring_flag=0;
		}
}else{	
////50 meter	
		if(Error_val<0){
				console.log("meter50/100 IF");	
				handle.animate({'transform':'r'+(hndl_angle)+''},time);	
				angle2=35;  
				var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+242)+', '+(y1+121.8)+' '}, time);	
			    sectorImg.animate(rotate_sector);
			    console.log("angle2 value in IF sector_work="+angle2);
		    	span_calibration(Tot_weight);		
				Weight_img.animate({y:y1+100}, time+500);
//				screw_Calibration.animate({x:x1+248,y:y1+115}, time);
			 	var r = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
			    Img.animate(r);  	    

			   	console.log("Sector angle="+angle1);
				keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
				mline.animate(keepRotating);
				console.log("plus angle="+angle);					
				var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -30 24 "},1000);
				line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});				
				var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -27 21 "},1000);   
				line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4}); 
			
//											var lineAnim1=Raphael.animation({path:"M"+(x1+267.5 )+" "+(y1+116)+" M    l -26 25 "},1000);
//											line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
//											
//											var lineAnim=Raphael.animation({path:"M"+(x1+267 )+" "+(y1+116)+" M    l -23 22 "},1000);			
//											    line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});
			    
			    var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
				+ "M "+(x1+199)+" "+(y1+49)+ " A 70 70 0 0 1 "+(x1+269 )+" "+(y1+113)+" M "+line1}, 1000);
				arc.animate(keep);					
				screw1.animate({transform: ['t',4.5,-3]}, 1000);
			   screw1.toFront();

		}else{
			
			hndl_angle=90	;  
			handle.animate({'transform':'r'+(-hndl_angle)+''},time);
			angle2=-35;
			var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle2)+ ', '+(x1+242)+', '+(y1+124.8)+' '}, time);	
			    sectorImg.animate(rotate_sector);		
			console.log("angle2 value in ELSE sector_work="+angle2);
		    span_calibration(Tot_weight);
			console.log("meter50/100 ELSE");	
			Weight_img.animate({y:y1+110}, time);	
			var r = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
			Img.animate(r);    	 	
			
			keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+98)+' '}, 1000 );	
			mline.animate(keepRotating);
			console.log("Minus Angle="+angle);
			
			//var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -26 25 "},1000);
			//line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
			
			//var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -23 22 "},1000);   
			//line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4}); 
			var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -35 28 "},1000);
						line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
						
						var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -31 25 "},1000);   
						line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});

			var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
				+ "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M "+line1}, 1000);
			arc.animate(keep);
			screw1.animate({transform: ['t',-0.1,0.5]}, 1000);
			screw1.toFront();
		}

}
}

function subclick(){
	handle.animate({'transform':'r'+(hndl_angle)+''},time);	
					Weight_img.animate({y:y1+100}, time+500);
					var r = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
					Img.animate(r);  	    
					var r1 = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+247)+', '+(y1+121.8)+' '}, 1000 );	
					sectorImg.animate(r1);		
					console.log("Weight With Error = "+Meter_weight);			
					unit1=270/meterguage;
					console.log("unit1 = "+unit1);
					angle= unit1*weight;  	
					console.log("angle = "+angle);		
					keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
					mline.animate(keepRotating);
					console.log("angle wt="+angle);	 
					if(wtSpring==0){
						angle1=10;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
						sectorImg.animate(rotate_sector);
						wtSpring=1;	    			    	
					}else{	
						angle1=5;	
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
							sectorImg.animate(rotate_sector);
						wtSpring=0;    
					}	
}

var rmin = -2.3 ;
 var rmax = 2.5;
 var Meter_weight,Error_val,Total_weight;
$("#submit_wt").click(function(){
	Tot_weight=$("#enter_weight").val();
	console.log("Weight = "+Tot_weight);
	weight=parseInt(Tot_weight);
	console.log("Weight = "+weight);	
	
			if(meterguage==16 && weight<meterguage){		
					handle.animate({'transform':'r'+(hndl_angle)+''},time);	
					Weight_img.animate({y:y1+100}, time+500);
					var r = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
					Img.animate(r);  	    
					var r1 = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+247)+', '+(y1+121.8)+' '}, 1000 );	
					sectorImg.animate(r1);		
					console.log("Weight With Error = "+Meter_weight);			
					unit1=270/meterguage;
					console.log("unit1 = "+unit1);
					angle= unit1*weight;  	
					console.log("angle = "+angle);		
					keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
					mline.animate(keepRotating);
					console.log("angle wt="+angle);	 
					if(wtSpring==0){
						angle1=10;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
						sectorImg.animate(rotate_sector);
						wtSpring=1;	    			    	
					}else{	
						angle1=5;	
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
							sectorImg.animate(rotate_sector);
						wtSpring=0;    
					}
					setTimeout(function(){ 
					alert("Meter Calibrated Successfully");
					},time+500);		
			}else if(meterguage==50 && weight<meterguage){
					handle.animate({'transform':'r'+(hndl_angle)+''},time);	
					Weight_img.animate({y:y1+100}, time+500);
					var r = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
					Img.animate(r);  	    
					var r1 = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+247)+', '+(y1+121.8)+' '}, 1000 );	
					sectorImg.animate(r1);		
					console.log("Weight With Error = "+Meter_weight);			
					unit1=270/meterguage;
					console.log("unit1 = "+unit1);
					angle= unit1*weight;  	
					console.log("angle = "+angle);		
					keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
					mline.animate(keepRotating);
					console.log("angle wt="+angle);	 
					if(wtSpring==0){
						angle1=10;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
						sectorImg.animate(rotate_sector);
						wtSpring=1;	    			    	
					}else{	
						angle1=5;	
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
							sectorImg.animate(rotate_sector);
						wtSpring=0;    
					}
					setTimeout(function(){ 
					alert("Meter Calibrated Successfully");
					},time);				
			}else if(meterguage==100 && weight<meterguage){
					handle.animate({'transform':'r'+(hndl_angle)+''},time);	
					Weight_img.animate({y:y1+100}, time+500);
					var r = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
					Img.animate(r);  	    
					var r1 = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+247)+', '+(y1+121.8)+' '}, 1000 );	
					sectorImg.animate(r1);		
					console.log("Weight With Error = "+Meter_weight);			
					unit1=270/meterguage;
					console.log("unit1 = "+unit1);
					angle= unit1*weight;  	
					console.log("angle = "+angle);		
					keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
					mline.animate(keepRotating);
					console.log("angle wt="+angle);	 
					if(wtSpring==0){
						angle1=10;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
						sectorImg.animate(rotate_sector);
						wtSpring=1;	    			    	
					}else{	
						angle1=5;	
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
							sectorImg.animate(rotate_sector);
						wtSpring=0;    
					}
					setTimeout(function(){ 
					alert("Meter Calibrated Successfully");
					},time);
						
			}else{
					setTimeout(function(){ 
	 				alert("Please Enter Weight within Meter Range");
	 				},time);
	 				
			}

$("#faultFinding").attr('hidden',false);

});




sectorImg.click(function(){
	if(seqence_flag==1){
	spanError.remove();
	sector_movement();  	
	setTimeout(function(){ 
		alert("Now Enter Weight"); 
//		$("#enter_weight").prop("enna")
		$( "#enter_weight" ).prop( "disabled", false );
		$( "#submit_wt" ).prop( "disabled", false );
		},time+500);
		
}else{
	setTimeout(function(){ 
		alert("Click on Pointer to Set Zero Calibration "); 
		},time);
}		    	
	
		    	
});

//var clickHere=paper.image("images/c1.png",(x1+155), (y1-80), 100,100);
	
mline.click(function(){
if(seqence_flag==0){
zeroError.remove();
				zero_calibration(0);		
			if(handle_flag==1){
				handle.animate({'transform':'r'+(hndl_angle)+''},time);	  
				handle_flag=0;
			}else{
				hndl_angle=90	;  
				handle_flag=1;
				handle.animate({'transform':'r'+(-hndl_angle)+''},time);
			}
			if(meterguage==16){
		//		if(spring_flag==0){
						Weight_img.animate({y:y1+100}, time+500);
				 		var r = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
				    	Img.animate(r);		  
				 		var r1 = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+245)+', '+(y1+121.5)+' '}, 1000 );	
				    	sectorImg.animate(r1);
						
					    keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
						mline.animate(keepRotating);
						console.log("plus angle="+angle);	
					
					var lineAnim1=Raphael.animation({path:"M"+(x1+267.5 )+" "+(y1+116)+" M    l -26 25 "},1000);
					line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
					
					var lineAnim=Raphael.animation({path:"M"+(x1+267 )+" "+(y1+116)+" M    l -23 22 "},1000);			
					    line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});
					    
					    var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
						+ "M "+(x1+199)+" "+(y1+49)+ " A 70 70 0 0 1 "+(x1+269 )+" "+(y1+113)+" M "+line1}, 1000);
						arc.animate(keep);					
						screw1.animate({transform: ['t',4.5,-3]}, 1000);
						screw1.toFront();
						
		
		//				screw2.toFront();
						spring_flag++;
		
			}else{	
		//50 meter	
				if(spring_flag==0){	 
						Weight_img.animate({y:y1+100}, time+500);
		//				screw_Calibration.animate({x:x1+248,y:y1+115}, time);
					 	var r = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
					    Img.animate(r);  	
					        
					 	var r1 = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+245)+', '+(y1+121.8)+' '}, 1000 );	
					    sectorImg.animate(r1);	
						keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 4000 ,'elastic');	
						mline.animate(keepRotating);
						console.log("plus angle="+angle);	
					
					var lineAnim1=Raphael.animation({path:"M"+(x1+267.5 )+" "+(y1+116)+" M    l -26 25 "},1000);
					line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
					
					var lineAnim=Raphael.animation({path:"M"+(x1+267 )+" "+(y1+116)+" M    l -23 22 "},1000);			
					    line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});
					    
					    var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
						+ "M "+(x1+199)+" "+(y1+49)+ " A 70 70 0 0 1 "+(x1+269 )+" "+(y1+113)+" M "+line1}, 1000);
						arc.animate(keep);					
						screw1.animate({transform: ['t',4.5,-3]}, 1000);
					   screw1.toFront();
		
					   spring_flag++;		
				}		
		}
	
		setTimeout(function(){ 
				alert("Now Calibrate span"); 
					Weight_img.animate({y:y1+100}, time+500);
			var r = Raphael.animation({ 'transform':  'r'+(-angle1)+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
			Img.animate(r); 
			
			console.log("sector angle for max limit = "+angle1);
			Tot_weight=meterguage;
			//meterguage;
			console.log("Weight = "+Tot_weight);
			weight=parseInt(Tot_weight);
			console.log("Weight = "+weight);
		 	num = Math.floor(Math.random() * (rmax - rmin + 1) + rmin);
		 	console.log("Error_val = "+num);
		 	Error_val=parseInt(num);
		 	if(Error_val==0){
				Meter_weight=weight+Error_val+1;
				console.log("Error val with adding 1 = "+Meter_weight);
			}else{
		 	Meter_weight=weight+Error_val;
		 	}
			console.log(" Error val without1 = "+Meter_weight);	
					
			unit1=270/meterguage;
			console.log("unit1 = "+unit1);
			angle= unit1*Meter_weight;  	
			console.log("angle = "+angle);		
			keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 3000 ,'elastic');	
			mline.animate(keepRotating);
			console.log("angle wt="+angle);	
			spanError=paper.image("images/spanerror.png",x1+290, y1+100, 205,65);
			spanError.animate({x:x1+260}, time);	
			handle.animate({'transform':'r'+(hndl_angle)+''},time);
			var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
						+ "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+268 )+" "+(y1+115)+" M "+line1}, 1000);
			arc.animate(keep);	
		 if(Error_val<0){
			console.log("Error_val= "+Error_val);
						angle2=38;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+246)+', '+(y1+128.5)+' '}, time);	
				    	sectorImg.animate(rotate_sector);
						console.log("IF____angle==38");
						var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -30 24 "},1000);
						line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
						
						var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -27 21 "},1000);   
						line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4});
		//				var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
		//				+ "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+264 )+" "+(y1+115)+" M "+line1}, 1000);
		//				arc.animate(keep);
						
					}else{
							console.log("Error_val= "+Error_val);
		
						angle2=45;
						var rotate_sector = Raphael.animation({ 'transform':  'r'+(-angle2)+ ', '+(x1+240)+', '+(y1+124.5)+' '}, time);	
				    	sectorImg.animate(rotate_sector);
						console.log("ELSE____angle==45");
						var lineAnim1=Raphael.animation({path:"M"+(x1+265.5 )+" "+(y1+116)+" M    l -35 19 "},1000);
						line1_border.animate(lineAnim1).attr({'stroke':'#cb9931','stroke-width':8});
						
						var lineAnim=Raphael.animation({path:"M"+(x1+264 )+" "+(y1+117)+" M    l -31 16 "},1000);   
						line1.animate(lineAnim).attr({'stroke':'#fff','stroke-width':4}); 	
					}

		},time+1000);
seqence_flag=1;
}
	
});

}
