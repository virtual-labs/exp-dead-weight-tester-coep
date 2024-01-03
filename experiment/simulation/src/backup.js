
function mimicCall(weight,meter,cylinderPiston)
{

var paper = new Raphael(document.getElementById('canvas-div'), 1000, 800);
$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 1000;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
//	 console.log("weight    "+weight);
//		   console.log("meter    "+meter);
//		   console.log("cylinderPiston    "+cylinderPiston);
var x = 565;
var y = 451;
var a = parseInt(cylinderPiston);
var b = a/2;
var cylin;
var pis,polish;
var sx,sy,sz;
var sxp,syp;
var wid;
var rec_wid;
var pf , pf1, pis1;
var time = 1000;
var hx,px;
var R_cap,R_cap1,oilTank;
var l;
 var keepRotating;
var x1, y1;
var flag = 0;
var w1;
var rec,borderhide1, borderhide;
var SetFlagVal=0,  v2_check = 0 , v1_check = 0;
var meterguage=parseInt(meter) ;
var r_capCheck = 0;
var Img , h_img, plus, minus;
var angle1=-30;
var pf_flag = 0;
var Img, sectorImg;
var arc,mline,arc_anim,triangle;
var wt_ht = 0;
var totalStackWeight = 0 ;
var weight12 = 0;
var index = 0;
var err =0;
var errDisp = 0;
var actualPressure =0;
var wt_arr = [];
var cnt = 0;
var blank_rec;
var up_anim; 
 var unit1 = 0;
 var M_valve,R_valve;
 var cnt10kgf = 0;  
 var cnt5kgf = 0;
 var cnt2kgf = 0; 
 var cnt1kgf = 0; 
 var cnt500gf = 0;
 var cnt100gf = 0;  
 var position=0;
 var pressure = 0;
var pres = 0;
 var masterJson = {};
 var jsonArr = [];
 var imgWeightArray = [];
 var wtStackMasterJson = {};
 var add = 0;
 var stackJsonArr = [];
 var r = 3;
 var area = 0;
cylinder();
platform();
handle();
oil_reservoir();
valve();

 var s=paper.text((x1+200),(y1+165),'');
var s1=paper.text((x1+200),(y1+165),'')
surface();
remove_Weight_label();
weight5(x,y);
weight2(x,y);
weight1(x,y);
weight500(x,y);
weight100(x,y);
weight50(x,y);

//meterwork(x,y);

if(meterguage==16 ){
	
	meterguage1();
}else if(meterguage==50){
	meterguage2();
}else{
	 meterguage3();
}

function cylinder() {
			 cylin = paper.path("M"+(x-300)+ " " +(y+163)+ " l 410   0  l "+(a+10)+" 0    l "+(1.5*a)+" 0   l 0 "+(-a)+" " 
                    +"l "+(-1.5*a)+" 0  l "+(-a-10)+" 0       l "+(-1.5*a+(a/3))+" 0 "
                    //platform
                    +"l 0 "+(-1.1*a )+" l "+(-a+(a/4))+" 0    l 0 "+(1.1*a)+" "
                    //oil
                    +"l "+-(a+90)+" 0   l 0 "+(-a )+"       l "+(b*1.2)+" 0    l 0 "+(-2*a)+"   l "+(-a*1.9)+" 0    l   0 "+(2*a)+" l "+(b*1.2)+" 0 l 0 "+a
//                  +"l "+-(a+90)+" 0   l 0 "+(-1.3*a )+"   l "+(b*1.5)+" 0    l 0 "+(-a*1.5)+"   l "+(-a*2.5)+" 0    l   0 "+(a*1.5)+"   l "+(b*1.5)+" 0    l 0 "+(1.3*a)+"  "
					// meter
                    +"l "+-(a*3)+" 0  l 0 "+(-4.1*a )+" l "+(-a/4)+" 0  l 0  "+(-0.7*b)+"    l "+(-a/4)+" 0 l 0  "+(0.7*b)+"  l "+(-a/4)+" 0     l 0 "+(5.1*a)+"z "
//				    +"l "+-(a*3)+" 0  l 0 "+(-4.1*a )+" l "+(-a/3)+" 0       l 0  "+(-0.7*b)+"    l "+(-a/3)+" 0   l 0  "+(0.7*b)+"  l "+(-a/3)+" 0     l 0 "+(5.1*a)+"z "
                    ).attr({ 'stroke': '#8e9490', 'stroke-width': 1.5 });
}

function platform(){

	if(a == 50)
	  {
		sx = x+16;
		sy = y+112;
		sy1 = y+22;
		sz = x+14.9;
		sxp = x+28;
		syp = y+73.5;
		wid = b+12;
		rec_wid = a-15.5;
		
	}else if(a == 55)
               {
	    sx = x+6.5;
	    sy1 = y+8;
		sy = y+107;
		sz = x+5.2;
		sxp = x+21;
		syp = y+65;
		wid = b+13;
		rec_wid = a-17.3;
	   
    }else{
	    sx = x-2.8;
		sy = y+102;
		sy1 = y-6;
		sz = x-4.4;
		sxp = x+13;
		syp = y+56.6;
		wid = b+14;
		rec_wid = a-19;
         }
    pis1 = paper.path("M"+sz+" "+sy1+" l 0 "+(1.8)*a+ " l "+wid+ " 0 l 0 "+(-(1.8)*a)+"z").attr({'stroke' : '#000' , 'stroke-width' : 2 , 'fill': '#7c8ba3'});	

	pis1_Border = paper.path("M"+sz+" "+sy+" l 0 "+(-(1.8)*a)+ " l "+wid+ " 0 l 0 "+(1.8*a) ).attr({'stroke' : '#000' , 'stroke-width' : 2});	
	pis = paper.path("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)).attr({'stroke' : '#000' , 'stroke-width' : 1 ,'fill':'#5c5e61'  });	
            
	pf = paper.path("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ")
      .attr({'stroke' : '#000' , 'stroke-width' : 3 , 'fill':'#000'});
        polish = paper.rect((sxp-5),(syp-18),20,20,5) .attr({'stroke' : '#000' , 'stroke-width' : 1 , 'gradient': '160-#C0C0C0-#757575'});  
      

	h_img = paper.image("images/handle.png",(x+295), (y-50),70, 70);
	plus = paper.image("images/plus1.png",(x+385), (y-35), 40, 40); 
	minus = paper.image("images/minus1.png",(x+235), (y-35), 40, 40);                
} 

function handle() {
	
	if(a == 50)
	  {
		hx = 5.9;
		px = 4.1;
		block = 50;
		block_ht = 2.2;
	}else if(a == 55){
		hx = 5.4;
		px = 3.9;
		block = 39;
		block_ht = 2.3;
	}else{
		hx = 5;
		px = 3.7;
		block = 30;
		block_ht = 2.3;
	}
	r1 = paper.path("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*b)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*b)+" 0 z")
         .attr({'stroke' : '#5c5e61' , 'stroke-width' : 2,'fill':"#212c38"});          
         
    h = paper.path("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-1.8*(a))+" 0 "+" l 0 "+(b/4)+" l "+(1.8*(a))+" 0 l "+(a+60)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z ")	 
	 .attr({'stroke' : '#7f8999' , 'stroke-width' : 2,'fill':"#7f8999"});     
	  
    p = paper.path("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-b*1.2)+ " 0 l 0 "+a+ " l "+(b*1.2)+" 0 l 0 "+(-b))
	  .attr({'stroke' : '#5c5e61' , 'stroke-width' : 2,'fill':"#5c5e61"});
}

Oil_Button();
var oil_Lable, oilImg,oil_rect;

function Oil_Button(){
	if(a == 50){
      x1 = x-520 , y1 = y-307;
      	 oil_rect = paper.image("images/oil_reservoir.png",(x1+300),( y1+125),150,50);

     }else if(a == 55){
	  x1 = x-540 , y1 = y-324;
      	 oil_rect = paper.image("images/oil_reservoir.png",(x1+305),( y1+125),150,50);

     }else{
	  x1 = x-552 , y1 = y-340;
      	 oil_rect = paper.image("images/oil_reservoir.png",(x1+301),( y1+110),150,50);

     }  

}



function oil_reservoir(){
	  if(a==50){                
		 oilTank= paper.path("M"+(x-320.5+(3.9*a))+ " " +(y+190+(-2.3*a))+ "l  0   "+(-a/4)+"    l "+(b*1.2)+" 0        l 0 "+(-a*2)+"   l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"      l "+(-b*1.1)+" 0          l   0 "+(a*2)+"   l "+(b*1.2)+" 0    l  0   "+(a/4)+"  "     
	       ).attr({'stroke-width':1.5,'stroke': '#8e9490'});	
//	       'fill':'#6b5c3d', 
		R_cap =paper.ellipse(x-288.2+(2.9*a), y+156+(-4.3*a),25, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-286+(2.5*a))+ " " +(y+161+(-4.3*a))+"l 0  16   l "+((b*1.5)-1.5)+" 0    l 0 -16      l "+(-b*1.5)+" 0 ").attr({'stroke-width':2.9,'fill':'black'});


	  }else if(a==55){
		oilTank= paper.path("M"+(x-355.2+(3.9*a))+ " " +(y+194+(-2.3*a))+ "l  0   "+(-a/4)+"    l "+(b*1.2)+" 0        l 0 "+(-a*2)+"   l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"      l "+(-b*1.1)+" 0          l   0 "+(a*2)+"   l "+(b*1.2)+" 0    l  0   "+(a/4)+"  "  
		  ).attr({'stroke-width':1.5, 'stroke': '#8e9490'});	 
		R_cap =paper.ellipse(x-319.5+(2.9*a), y+157.5+(-4.3*a),26, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-318.05+(2.5*a))+ " " +(y+161.5+(-4.3*a))+"l 0  19   l "+(b*1.5)+" 0    l 0 -19      l "+((-b*1.5)+0.5)+" 0 ").attr({'fill':'black'});

	  }else{
		oilTank= paper.path("M"+(x-389+(3.9*a))+ " " +(y+196+(-2.3*a))+ "l  0   "+(-a/4)+"    l "+(b*1.2)+" 0        l 0 "+(-a*2)+"   l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"      l "+(-b*1.1)+" 0          l   0 "+(a*2)+"   l "+(b*1.2)+" 0    l  0   "+(a/4)+"  "  
		 ).attr({ 'stroke-width':1.5, 'stroke': '#8e9490'});	 
		R_cap = paper.ellipse(x-350+(2.9*a), y+156.5+(-4.3*a),28, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-348.6+(2.5*a))+ " " +(y+160.5+(-4.3*a))+"l 0  20 l "+(b*1.5)+" 0    l 0 -20      l "+(-b*1.5)+" 0   ").attr({'fill':'black'});

       }
  }
   var oil_flag = 0;
  var setflag=0;
  var rFlg = 0;
 
 function R_capOpen(){
		if(setflag==0){
	  oil_flag = 1;
	  
//	  console.log("R_Validation "+R_Validation);
	   if (a==50){
	 	var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,442, 394' }, 2000 );
        R_cap.animate(keepRotating5.repeat(1));
        
       }else if(a==55){
		var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,426, 376' }, 2000 );
        R_cap.animate(keepRotating5.repeat(1));
        
       
       }else{
		var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,413, 353' }, 2000 );
		R_cap.animate(keepRotating5.repeat(1));
		
	   }
	   setflag++;
	  }
} 
 
function R_capClose(){
	  oil_flag = 0;
	    rCapClose = 1;
	    console.log("rCapClose :"+rCapClose);
        if (a==50){
	 	var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,442, 394' }, 2000 );
        R_cap.animate(keepRotating6.repeat(1));
//        setflag=0;
        setInterval(function(){
        R_valve.attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
        },time+1000);
       }else if(a==55){
        var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,426, 376' }, 2000 );
        R_cap.animate(keepRotating6.repeat(1));
//        setflag=0;
        setInterval(function(){
               R_valve.attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
         },time+1000);
       }else{
	
		var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,413, 353' }, 2000 );
		R_cap.animate(keepRotating6.repeat(1));
//		 setflag=0;
		  setInterval(function(){
		         R_valve.attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
         },time+1000);
	   }
} 
R_cap.click(function(){
	if(r_capCheck == 0) {
		R_capOpen();
     }
     if(r_capCheck == 1){
	    R_capClose();
}
	  
//R_Validation--;
});



var Tank_arr = [];
var ct = 1;


oil_rect.click(function(){
	if(oil_flag==1){
		if(a == 50 && ct == 1){
			
			oilImg=paper.image("images/oil.png",(x1+348), (y1+187), 65, 65);
			Tank_arr[0]=paper.path('M'+(x-287.5+(2.9*a))+ ' ' +(y+77.4+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':8});
			Tank_arr[0].animate({path :'M'+(x-287.5+(2.9*a))+ ' ' +(y+77.4+(-2.3*a))+ 'l 0 '+((a*2.2)+1.5)+' '},time, function(){ 
	
			Tank_arr[1]=paper.path('M'+(x-288.2+(2.9*a))+ ' ' +(y+188.9+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':33});
			Tank_arr[1].animate({path :'M'+(x-288.2+(2.9*a))+ ' ' +(y+188.9+(-2.3*a))+ 'l 0 '+((-a/4)-1)+' '},time, function(){ 
			
			Tank_arr[2]=paper.path('M'+(x-288.2+(2.9*a))+ ' ' +(y+178+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':93});
			Tank_arr[2].animate({path :'M'+(x-288.2+(2.9*a))+ ' ' +(y+178+(-2.3*a))+ 'l 0 '+(-a*2)+' '},time+1000, function(){ 
		rFlg = 1;
//		console.log("R_validation in oil "+ R_validation);
		oilImg.remove();
		
		})
		ct++;
		
		})					
		})
		
	}else if(a == 55 && ct == 1){
			oilImg=paper.image("images/oil.png",(x1+351), (y1+184), 65, 65);
			
			Tank_arr[0]=paper.path('M'+(x-318+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':8});
			Tank_arr[0].animate({path :'M'+(x-318+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0 '+((a*2.2)+3)+' '},time, function(){ 
	
			Tank_arr[1]=paper.path('M'+(x-319.3+(2.9*a))+ ' ' +(y+194+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':38});
			Tank_arr[1].animate({path :'M'+(x-319.3+(2.9*a))+ ' ' +(y+194+(-2.3*a))+ 'l 0 '+((-a/4)-2)+' '},time, function(){ 
			
			Tank_arr[2]=paper.path('M'+(x-319.3+(2.9*a))+ ' ' +(y+180+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':104});
			Tank_arr[2].animate({path :'M'+(x-319.3+(2.9*a))+ ' ' +(y+180+(-2.3*a))+ 'l 0 '+(-a*2)+' '},time+1000, function(){ 
			rFlg = 1;
			oilImg.remove();
		})
		ct++;
		})			
		})
		
	}else if(a == 60 && ct == 1){
			oilImg=paper.image("images/oil.png",(x1+344), (y1+172), 70, 70);
			Tank_arr[0]=paper.path('M'+(x-348+(2.9*a))+ ' ' +(y+61+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#dba45c', 'stroke-width':8});
			Tank_arr[0].animate({path :'M'+(x-348+(2.9*a))+ ' ' +(y+61+(-2.3*a))+ 'l 0 '+((a*2.2)+2)+' '},time, function(){ 
	
			Tank_arr[1]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+194.6+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#dba45c', 'stroke-width':40});
			Tank_arr[1].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+194.6+(-2.3*a))+ 'l 0 '+((-a/4)-1)+' '},time, function(){ 
			
			Tank_arr[2]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+180+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#dba45c', 'stroke-width':113});
			Tank_arr[2].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+180+(-2.3*a))+ 'l 0 '+((-a*2)+2)+' '},time+1000, function(){ 
			rFlg = 1;
			oilImg.remove();
		})
		ct++;
		})		
		})
	}
	}else{
		alert("open cap of reservoir oil tank");
		
	}
	
})
  
  var os = 0;
function oilSpread(){
	 tempJson = {};
	var arr = [];
//	tempJson.R_oil = "Reservoir oil";
	
	if(a==50){
		arr[0]=paper.path('M'+(x-288.5+(2.9*a))+ ' ' +(y+213+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':33.2});
		arr[0].animate({path :'M'+(x-288.5+(2.9*a))+ ' ' +(y+235+(-2.3*a))+ 'l 0 '+(-b)+' '},time);
	    arr[0]=paper.path('M'+(x-288.2+(2.9*a))+ ' ' +(y+78+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':93});
		arr[0].animate({path :'M'+(x-288.2+(2.9*a))+ ' ' +(y+78+(-2.3*a))+ 'l 0 '+(b/3)+' '},time, function(){

		arr[1]=paper.path('M'+(x-282.5+(2.9*a))+ ' ' +(y+253+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':48.5});
		arr[1].animate({path :'M'+(x-282.5+(2.9*a))+ ' ' +(y+253+(-2.3*a))+'l  '+(-a*4.2)+'  0  l  '+(a*11)+' 0   '},time);
		arr[1]=paper.path('M'+(x-288.2+(2.9*a))+ ' ' +(y+86+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':93});
		arr[1].animate({path :'M'+(x-288.2+(2.9*a))+ ' ' +(y+85+(-2.3*a))+ 'l 0 '+(b+2)+' '},time, function(){  
					
		arr[2]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+254+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':36});
		arr[2].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+254+(-2.3*a))+'l 0  '+(-a*1.8)+' '},time);
		arr[2]=paper.path('M'+(x-288.2+(2.9*a))+ ' ' +(y+110+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':93});
		arr[2].animate({path :'M'+(x-288.2+(2.9*a))+ ' ' +(y+110+(-2.3*a))+ 'l 0 '+(b/2)+' '},time, function(){ 
		
		arr[3]=paper.path('M'+(x-162.1+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':35.6});
		arr[3].animate({path :'M'+(x-161.9+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-a*2.3)+'     '},time, function(){
		os = 1;
         });
		  pis1.toFront();
         pf.toFront();
         pis.toFront(); 
         polish.toFront(); 
              
		});		
		});
		rFlg = 1;	
		r1.toFront();
		h.toFront();
		p.toFront();	
		
		});
		
	
	}else if(a==55){
		arr[0]=paper.path('M'+(x-319+(2.9*a))+ ' ' +(y+218+(-2.3*a))+ 'l 0  0   ').attr({'stroke': '#6b5c3d','stroke-width':37.5});
		arr[0].animate({path :'M'+(x-319+(2.9*a))+ ' ' +(y+245+(-2.3*a))+ 'l 0 '+(-b)+' '},time);
		arr[0]=paper.path('M'+(x-319.3+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':103});
		arr[0].animate({path :'M'+(x-319.3+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0 '+(b/3)+' '},time, function(){
		
		arr[1]=paper.path('M'+(x-319+(2.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':53.8});
		arr[1].animate({path :'M'+(x-319+(2.9*a))+ ' ' +(y+262+(-2.3*a))+'l  '+(-a*4.09)+'  0  l  '+(a*11.2)+' 0   '},time);
        arr[1]=paper.path('M'+(x-319.3+(2.9*a))+ ' ' +(y+78+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':103});
		arr[1].animate({path :'M'+(x-319.3+(2.9*a))+ ' ' +(y+78+(-2.3*a))+ 'l 0 '+(b)+' '},time, function(){
		
		arr[2]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':40});
		arr[2].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0 '+((-a*1.8)+1.1)+'  '},time);
		arr[2]=paper.path('M'+(x-319.3+(2.9*a))+ ' ' +(y+105+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':103});
		arr[2].animate({path :'M'+(x-319.3+(2.9*a))+ ' ' +(y+105+(-2.3*a))+ 'l 0 '+(b/2)+' '},time, function(){
		
		arr[3]=paper.path('M'+(x-189.2+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':39.2});
		arr[3].animate({path :'M'+(x-189.2+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-a*2.2)+'     '},time, function(){
		os = 1;
		});
         pis1.toFront();
         pf.toFront();
         pis.toFront(); 
         polish.toFront();       
		});	
		});	
		rFlg = 1;	
		r1.toFront();
		h.toFront();
		p.toFront();	
			
		});

		
	}else{
		arr[0]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+219.5+(-2.3*a))+ 'l 0  0   ').attr({'stroke': '#6b5c3d', 'stroke-width':41});
		arr[0].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+249+(-2.3*a))+ 'l 0 '+(-b)+' '},time);
		arr[0]=paper.path('M'+(x-350.2+(2.9*a))+ ' ' +(y+61+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':113});
		arr[0].animate({path :'M'+(x-350.2+(2.9*a))+ ' ' +(y+61+(-2.3*a))+ 'l 0 '+(b/3)+' '},time, function(){
		
		arr[1]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+271+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':59});
		arr[1].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+271+(-2.3*a))+'l  '+(-a*4.09)+'  0  l  '+(a*11.2)+' 0 '},time);
		arr[1]=paper.path('M'+(x-350.2+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':113});
		arr[1].animate({path :'M'+(x-350.2+(2.9*a))+ ' ' +(y+70+(-2.3*a))+ 'l 0 '+(b)+' '},time, function(){

		arr[2]=paper.path('M'+(x-633.8+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arr[2].animate({path :'M'+(x-633.8+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0 '+(-a*1.6)+'  '},time);
		arr[2]=paper.path('M'+(x-350.2+(2.9*a))+ ' ' +(y+99.5+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#fff', 'stroke-width':113});
		arr[2].animate({path :'M'+(x-350.2+(2.9*a))+ ' ' +(y+99.5+(-2.3*a))+ 'l 0 '+(b/2)+' '},time, function(){
		
		arr[3]=paper.path('M'+(x-216.7+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arr[3].animate({path :'M'+(x-216.7+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-a*2)+'     '},time, function(){
		os = 1;
		});
        pis1.toFront();
         pf.toFront();
         pis.toFront(); 
         polish.toFront();         
		});		
		});	
		rFlg = 1;	
        r1.toFront();
			
		h.toFront();
		p.toFront();
		});

	}    
}



function valve(){
	if(a==50){

		 borderhide= paper.rect(x-303+(-a+2.6),y+138.4+(-2.3*a ),b*1.9,25).attr({'stroke':'white','fill':'white'});
		 M_valve = paper.path("M"+(x-299.5+(-a+2.6))+" "+(y+163+(-2.3*a ))+"l "+(b*1.4)+" -24    l "+(-b*1.4)+" 0    l "+(b*1.4)+" 24    l "+(-b*1.4)+" 0 "
	 			   +"l "+((b*1.4)/2)+" -12 l "+(a-10)+" 0  l "+(-a+10)+" 0 "
	 			   +"M"+(x-248+(-a+8.1))+" "+(y+161+(-2.5*a ))+" l  0 -8   l 8 0   l 0  16  l -8 0   l 0 -8  "
              ).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });	
              
         borderhide1= paper.rect(x-115+(-a),y+139.4+(-1.3*a ),b*1.9,23).attr({'stroke':'white','fill':'white'});       
         R_valve = paper.path("M"+(x-109.5+(-a))+" "+(y+162+(-1.3*a ))+"l "+(b*1.3)+" -22       l "+(-b*1.3)+" 0    l "+(b*1.3)+" 22       l "+(-b*1.3)+" 0 "
	               + "l "+((b*1.2)/2)+" -11    "+(a-10)+" 0  l "+(-a+10)+" 0  "
	               +"M"+(x-103+(-a*0.01))+" "+(y+162+(-1.5*a ))+"l 0 -8   l 8 0   l 0  16  l -8 0   l 0 -8 "
				).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
	
	} else if(a == 55){ 
		 borderhide= paper.rect(x-335+(-a+2.6),y+138.4+(-2.3*a ),b*1.9,25).attr({'stroke':'white','fill':'white'});
		 M_valve = paper.path("M"+(x-332+(-a+2.6))+" "+(y+163+(-2.3*a ))+"l "+(b*1.4)+" -24    l "+(-b*1.4)+" 0    l "+(b*1.4)+" 24    l "+(-b*1.4)+" 0 "
	 			   +"l "+((b*1.4)/2)+" -12 l "+(a-10)+" 0  l "+(-a+10)+" 0 "
	 			   +"M"+(x-272.5+(-a+8.1))+" "+(y+162+(-2.5*a ))+" l  0 -8   l 8 0   l 0  16  l -8 0   l 0 -8  "

              ).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
         borderhide1= paper.rect(x-129+(-a),y+139.4+(-1.3*a ),b*1.9,23).attr({'stroke':'white','fill':'white'}); 	 
         R_valve = paper.path("M"+(x-122.9+(-a))+" "+(y+162+(-1.3*a ))+"l "+(b*1.3)+" -22       l "+(-b*1.3)+" 0    l "+(b*1.3)+" 22       l "+(-b*1.3)+" 0 "
	               + "l "+((b*1.2)/2)+" -11    "+(a-10)+" 0  l "+(-a+10)+" 0  "
	               +"M"+(x-115+(-a*0.01))+" "+(y+162+(-1.5*a ))+"l 0 -8   l 8 0   l 0  16  l -8 0   l 0 -8 "
				).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
		
	}else{
		 borderhide= paper.rect(x-370+(-a+2.6),y+140.4+(-2.3*a ),b*1.9,25).attr({'stroke':'white','fill':'white'});
		 M_valve = paper.path("M"+(x-362.9+(-a+2.6))+" "+(y+165+(-2.3*a ))+"l "+(b*1.4)+" -24    l "+(-b*1.4)+" 0    l "+(b*1.4)+" 24    l "+(-b*1.4)+" 0 "
	 			   +"l "+((b*1.4)/2)+" -12 l "+(a-10)+" 0  l "+(-a+10)+" 0 "
	 			   +"M"+(x-297+(-a+8.1))+" "+(y+165+(-2.5*a ))+" l  0 -8   l 8 0   l 0  16  l -8 0   l 0 -8  "

              ).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
         borderhide1= paper.rect(x-145+(-a),y+135.4+(-1.3*a ),b*1.9,23).attr({'stroke':'white','fill':'white'});     	 
         R_valve = paper.path("M"+(x-135.9
         +(-a))+" "+(y+157.8+(-1.3*a ))+"l "+(b*1.3)+" -22       l "+(-b*1.3)+" 0    l "+(b*1.3)+" 22       l "+(-b*1.3)+" 0 "
	               + "l "+((b*1.2)/2)+" -11    "+(a-10)+" 0  l "+(-a+10)+" 0  "
	               +"M"+(x-128+(-a*0.01))+" "+(y+159+(-1.5*a ))+"l 0 -8   l 8 0   l 0  16  l -8 0   l 0 -8 "
				).attr({'stroke' : '#000'  , 'fill':'red','stroke-width': 2 });
	}
}   


function Rvalve_off(){
		var anim1 = Raphael.animation({ fill: "red" ,'stroke' : "#000" , 'stroke-width' : 2},"bounce");
       R_valve.animate(anim1); 
}

var keepRotating5,keepRotating6;
var bubble,flagRValve=0;
var keepRotating5,keepRotating6;
var R_valve_flag=0;
var r_valve_val = 0;
 R_valve.click(function(){
	r_valve_val = 1;
	v1_check = 1;
	if(rFlg == 1){
		var anim1 = Raphael.animation({ fill: "#2da60f" ,'stroke' : "#000" , 'stroke-width' : 2},1000,"bounce");
       R_valve.animate(anim1);  	
       oilSpread();
     
       R_valve.toFront();
	  M_valve.toFront();
	}else{
		alert("Fill the tank with oil completely ");
	}
});
     

//air bubble
var simuli=1;
function air_bubble(){
	
	
	if(a==50){
			var totalDelay = 0;
			function generateCircles2() {
		 	if (totalDelay <id1) {
			setTimeout(function() {
			totalDelay += 1;
			 yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			 size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-170),(y-420)+ yPos, size).attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -610+yPos, cy: (y-30)  }, time, generateCircles3());
			
			circle.animate(cirAni.delay(100));
           
				}
			},150);
			}
		}
		   function generateCircles3() {
		   setTimeout(function() {
		    yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
		    size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-140),(y-420)+ yPos, size);
			circle1.attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni1 = Raphael.animation({ cx: x-609+yPos, cy:(y-30) }, time, generateCircles2());
			circle1.animate(cirAni1.delay(100));
			  }
			}, 150);
		}
		generateCircles2();
	
	}else if(a==55){
		
			var totalDelay = 0;
			function generateCircles2() {
			if (totalDelay <id1) {
			setTimeout(function() {
			totalDelay += 1;
			 yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			 size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-199),(y-429)+ yPos, size).attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -630+yPos, cy: (y-48)  }, time, generateCircles3());
			circle.animate(cirAni.delay(100));
				}
			}, 150);
		  }
		}
			function generateCircles3() {
			setTimeout(function() {
				 yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			 size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-130),(y-430)+ yPos, size);
			circle1.attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni1 = Raphael.animation({ cx: x-630+yPos, cy:(y-48) }, time, generateCircles2());
			circle1.animate(cirAni1.delay(100));
				}
			}, 150);
		}
		generateCircles2();
		
		
	}else{
			var totalDelay = 0;
			function generateCircles2() {
		 	if (totalDelay <id1) {
			setTimeout(function() {
			 totalDelay += 1;
			 yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			 size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-210),(y-440)+ yPos, size).attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -640+yPos, cy: (y-70)  }, time, generateCircles3());
			circle.animate(cirAni.delay(100));
				}
			}, 150);
			}
		}
			function generateCircles3() {
			setTimeout(function() {
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-160),(y-440)+ yPos, size);
			circle1.attr({'stroke':'#fff','fill': '#fff'});
			if (simuli == 1) {
			cirAni1 = Raphael.animation({ cx: x-640+yPos, cy:(y-70) }, time, generateCircles2());
			circle1.animate(cirAni1.delay(100));
				}
			}, 150);
			}
	generateCircles2();		
	}	
}

//16 reading meter
   
   function meterguage1(){
 if(a == 50){
      x1 = x-528 , y1 = y-287;
     }else if(a == 55){
	  x1 = x-563 , y1 = y-314;
     }else{
	  x1 = x-598 , y1 = y-342.1; 
     } 
     
	var circleB1 = paper.circle(x1+200, y1+98, 79).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 74).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 72).attr({'stroke':'#c7c5c5'});
 
    var circle1 = paper.circle(x1+200, y1+98, 43).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 40).attr({'stroke':'#0589f5','stroke-width': 2});
 	
 	//center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2 = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'});
 	
 	 triangle=paper.path('M' + (x1+200) + ' ' + (y1+117) + 'l -30 20 l 60 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});

 	var meter_range1= paper.path('M' + (x1+169.5) + ' ' + (y1+127) + 'l -9 7.5    M' + (x1+160) + ' ' + (y1+81)+'l -9 -3.7   M'+ (x1+200)+ ' ' +(y1+45)+ 'l 0 9        M' + (x1+240) + ' ' + (y1+81) + 'l 9 -2.5     M' + (x1+229) + ' ' + (y1+128) + 'l 9 7').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+154),(y1+140),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+142),(y1+76),'4').attr({'stroke-width':5,'font-size':15}).transform( 'r-75');  
 	             paper.text((x1+200),(y1+36),'8').attr({'stroke-width':5,'font-size':15}).transform( 'r0');  
 	             paper.text((x1+258),(y1+76),'12').attr({'stroke-width':5,'font-size':15}).transform( 'r70');  
 	             paper.text((x1+243),(y1+140),'16').attr({'stroke-width':5,'font-size':15}).transform( 'r-40');  
 	             paper.text((x1+197),(y1+135),'kg/cm').attr({'stroke-width':4,'font-size':13}); 
 	var square=	paper.text((x1+217),(y1+130),'2').attr({'stroke-width':4,'font-size':8});
 	var s=paper.text((x1+200),(y1+150),'psi').attr({'font-size':12,'fill':'#0589f5' });

 	var range1= paper.path('M' + (x1+165) + ' ' + (y1+123) + 'l -6 4.3    M'+ (x1+161) + ' ' + (y1+117.5) + 'l -9 5.1     M'+ (x1+159)+ ' ' +(y1+112)+ 'l -6 2    	  M' + (x1+157) + ' ' + (y1+106) + 'l -9 1        M' + (x1+156) + ' ' + (y1+99.5) + 'l -6 0     M' + (x1+156.5) + ' ' + (y1+93) + 'l -9 -1       M' + (x1+158) + ' ' + (y1+86) + 'l -6 -1 '
 						  +'M' + (x1+163) + ' ' + (y1+75)+'l -6 -2.5        M' + (x1+167) + ' ' + (y1+69)+'l -9 -5        M' + (x1+172) + ' ' + (y1+65.5)+'l -6 -4.7    M' + (x1+176.5) + ' ' + (y1+62)+'l -6.1 -9.5    M' + (x1+182) + ' ' + (y1+58)+'l -3 -6.5      M' + (x1+188.2) + ' ' + (y1+57)+'l -3.2 -10.5      M' + (x1+194) + ' ' + (y1+54.5)+'l -1 -6.5    '
 						  +'M' + (x1+207)+ ' ' +(y1+55)+ 'l 1 -7            M'+ (x1+213)+ ' ' +(y1+56)+ 'l 3.4 -9         M'+ (x1+219)+ ' ' +(y1+59)+ 'l 3.4 -6.5       M'+ (x1+224)+ ' ' +(y1+62)+ 'l 6.7 -9           M'+ (x1+229)+ ' ' +(y1+67)+ 'l 6.2 -7         M'+ (x1+233.6)+ ' ' +(y1+71)+ 'l 9 -6.8          M'+ (x1+237)+ ' ' +(y1+75.5)+ 'l 6.7 -3   '
 						  +'M' + (x1+242) + ' ' + (y1+88) + 'l 6 -1         M' + (x1+244) + ' ' + (y1+94.2) + 'l 9 -0.7   M' + (x1+244) + ' ' + (y1+100.7) + 'l 6 0.2   M' + (x1+242.8) + ' ' + (y1+107) + 'l 9 2       M' + (x1+241) + ' ' + (y1+113) + 'l 6 2       M' + (x1+238) + ' ' + (y1+119) + 'l 9 5          M' + (x1+234.5) + ' ' + (y1+124.2) + 'l 6 5  ' ); 	
	
 	var meter_range2= paper.path('M' + (x1+171) + '   ' + (y1+127) + 'l 6 -6    M' + (x1+164.5) + ' ' + (y1+81) + 'l 6 2     M'+ (x1+200) + ' ' + (y1+59) + 'l 0 6    M' + (x1+237.5) + ' ' + (y1+86.5) + 'l -6 2      M' + (x1+228.5) + ' ' + (y1+126) + 'l -5 -5' ).attr({'stroke' :'#0589f5','stroke-width':2}); 

 	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -35 37   l 37 -33  M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'});
//Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
//sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
//Img.toBack();
//mline.toFront();


}


//50 value metergauge 
   function meterguage2(){
  if(a == 50){
      x1 = x-528 , y1 = y-307;
     }else if(a == 55){
	  x1 = x-563 , y1 = y-334;
     }else{
	  x1 = x-598 , y1 = y-361; 
     }  

	var circleB1 = paper.circle(x1+200, y1+98, 99).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 94).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'stroke':'#c7c5c5'});
 
    var circle1 = paper.circle(x1+200, y1+98, 58).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 55).attr({'stroke':'#0589f5','stroke-width': 2});
 	
 	//center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2 = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'});
 	
 	 triangle=paper.path('M' + (x1+200) + ' ' + (y1+121) + 'l -47 30 l 94 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});
	
 	var meter_range1= paper.path('M' + (x1+159) + ' ' + (y1+138) + 'l -10 9     M' + (x1+142) + ' ' + (y1+88)+'l -10 -2    M'+ (x1+175)+ ' ' +(y1+45)+ 'l -5 -10.5        M' + (x1+227) + ' ' + (y1+47) + 'l 6 -10       M' + (x1+257) + ' ' + (y1+90) + 'l 12 -1.5       M' + (x1+239.5) + ' ' + (y1+139) + 'l 8.5 10').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+143),(y1+152),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+123),(y1+85),'10').attr({'stroke-width':5,'font-size':15}).transform( 'r-80');  
 	             paper.text((x1+166),(y1+27),'20').attr({'stroke-width':5,'font-size':15}).transform( 'r-25');  
 	             paper.text((x1+237),(y1+30),'30').attr({'stroke-width':5,'font-size':15}).transform( 'r30');  
 	             paper.text((x1+278),(y1+87),'40').attr({'stroke-width':5,'font-size':15}).transform( 'r80');  
 	             paper.text((x1+255),(y1+153),'50').attr({'stroke-width':5,'font-size':15}).transform( 'r-50');  
 	             paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13,'font-weight':'bold'}); 
 	var square=	paper.text((x1+220),(y1+145),'2').attr({'stroke-width':4,'font-size':8,'font-weight':'bold'});
 	var s=paper.text((x1+200),(y1+165),'psi').attr({'font-size':12,'fill':'#0589f5' ,'font-weight':'bold'});

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
//Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
//sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
//Img.toBack();
//
//mline.toFront();
}

//meter 100
function meterguage3(){
	if(a == 50){
      x1 = x-528 , y1 = y-307;
     }else if(a == 55){
	  x1 = x-563 , y1 = y-334;
     }else{
	  x1 = x-598 , y1 = y-361; 
     }  
//Border circle
	var circleB1 = paper.circle(x1+200, y1+98, 99).attr({'stroke':'#7a7979','stroke-width': 1});
	var circleB2 = paper.circle(x1+200, y1+98, 94).attr({'stroke':'#ededed','stroke-width': 5});	
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'stroke':'#c7c5c5'}); 
    var circle1 = paper.circle(x1+200, y1+98, 58).attr({'stroke':'black','stroke-width': 2}); 
    var circle1 = paper.circle(x1+200, y1+98, 55).attr({'stroke':'skyblue','stroke-width': 2});
 	
 //center point
 	var circle2 = paper.circle(x1+200, y1+98, 6).attr({'fill' :'black','stroke-width': 2});
 	var circle2 = paper.circle(x1+200, y1+98, 5).attr({'fill' :'red'}); 	
 	var triangle=paper.path('M' + (x1+200) + ' ' + (y1+121) + 'l -47 30 l 94 0 z  ').attr({'stroke' :'white','fill':'white','stroke-width':13});
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

	
 	var meter_range1= paper.path('M' + (x1+159) + ' ' + (y1+138) + 'l -10 9     M' + (x1+142) + ' ' + (y1+88)+'l -10 -2    M'+ (x1+175)+ ' ' +(y1+45)+ 'l -5 -10.5        M' + (x1+227) + ' ' + (y1+47) + 'l 6 -10       M' + (x1+257) + ' ' + (y1+90) + 'l 12 -1.5       M' + (x1+239.5) + ' ' + (y1+139) + 'l 8.5 10').attr({'fill' :'black','stroke-width':2}); 	
 	             paper.text((x1+143),(y1+152),'0').attr({'stroke-width':5,'font-size':15}).transform( 'r50');    
 	             paper.text((x1+123),(y1+85),'20').attr({'stroke-width':5,'font-size':15}).transform( 'r-80');  
 	             paper.text((x1+166),(y1+27),'40').attr({'stroke-width':5,'font-size':15}).transform( 'r-25');  
 	             paper.text((x1+237),(y1+30),'60').attr({'stroke-width':5,'font-size':15}).transform( 'r30');  
 	             paper.text((x1+278),(y1+87),'80').attr({'stroke-width':5,'font-size':15}).transform( 'r80');  
 	             paper.text((x1+253),(y1+155),'100').attr({'stroke-width':5,'font-size':15}).transform( 'r-41');  
 	             paper.text((x1+198),(y1+150),'kg/cm').attr({'stroke-width':4,'font-size':13}); 
 	var square=	paper.text((x1+218),(y1+145),'2').attr({'stroke-width':4,'font-size':8});
 	var s=paper.text((x1+200),(y1+165),'psi').attr({'font-size':12,'fill':'skyblue' });
 	
 	 mline= paper.path('M' + (x1+195) + ' ' + (y1+100) + 'l -45 46   l 48 -42    M' + (x1+200) + ' ' + (y1+91) + ' l 7 -15  A 15 15 0 0 1 '+ (x1+222) + ' ' + (y1+91) +'l -15 7  z M' ).attr({'stroke-width':1, 'fill':'black'});

//Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);
//sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
//Img.toBack();
//
//mline.toFront();
}


	
//var sp;
//
//function meterwork(){
//	x1 = x-528 , y1 = y-307;
//sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7, 'stroke-opacity': 0.8});
//arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+259 )+" "+(y1+115)+" M    l -21 15.3  "
//).attr({'stroke':'#cb9931','stroke-width':7,'stroke-opacity': 0.8});
//
//sectorImg.toFront();
//triangle.toBack();
//sp.toFront();
//mline.toFront();
//s.toFront();
//s1.toFront();
//}
//
//function meterwork(x,y){
//	if (a==50){
//	x1 = x-528 , y1 = y-308.4;
//	sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7, 'stroke-opacity': 0.8});
//arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+259 )+" "+(y1+115)+" M    l -21 15.3  "
//).attr({'stroke':'#cb9931','stroke-width':7,'stroke-opacity': 0.8});
//
//sectorImg.toFront();
//triangle.toBack();
//sp.toFront();
//mline.toFront();
//s.toFront();
//s1.toFront();}else if(a==55){
//   x1 = x-599 , y1 = y-361;
//	 sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7, 'stroke-opacity': 0.8});
//arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+259 )+" "+(y1+115)+" M    l -21 15.3  "
//).attr({'stroke':'#cb9931','stroke-width':7,'stroke-opacity': 0.8});
//
//sectorImg.toFront();
//triangle.toBack();
//sp.toFront();
//mline.toFront();
//s.toFront();
//s1.toFront();
//}else{
//
//	 sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -46  ").attr({'stroke':' #cb9931  ','stroke-width':7, 'stroke-opacity': 0.8});
//arc= paper.path("M "+(x1+200)+" "+(y1+147.5)+ " A 30 30 0 0 1 "+(x1+200)+" "+(y1+49)+" M  "    
//		  + "M "+(x1+199)+" "+(y1+49)+ " A 65 65 0 0 1 "+(x1+259 )+" "+(y1+115)+" M    l -21 15.3  "
//).attr({'stroke':'#cb9931','stroke-width':7,'stroke-opacity': 0.8});
//
//sectorImg.toFront();
//triangle.toBack();
//sp.toFront();
//mline.toFront();
//s.toFront();
//s1.toFront();
//	}	
//}

var spring_flag=0;

function surface(){
	 surf = paper.path("M"+(x+250)+" "+(y-150)+"l 150 0 l 0 -210 l -150 0 l 0 210")
	.attr({'stroke' : '#70706f'  , 'fill':'#b6bda6','stroke-width': 2 });
}

function weight5(x,y){
	
  txt_weight = "10kgf";
  wt5mx = 260, wt5my = 182, wt5rx = 130, wt5ry = 30 , txtwx = 325, txtwy = 167;
  wt5 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
//  wt = wt5;
   textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
//   txtAnim = txt_weight;
   
   
}

function weight2(x,y){
  txt_weight = "5kgf";
  wt5mx = 267, wt5my = 214, wt5rx = 115, wt5ry = 30 , txtwx = 325, txtwy = 200;
  wt2 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});

  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});

}

function weight1(x,y){
  wt1 = paper.image("images/2kgfBackground.png",(x+250), (y-245),150, 30);
}

function weight500(x,y){
  wt500 = paper.image("images/1kgfBackground.png",(x+250), (y-275),150, 30);
}

function weight100(x,y){
 wt100 = paper.image("images/500Background.png",(x+250), (y-305),150, 30);
}

function weight50(x,y){
  wt50 = paper.image("images/100gfBackground.png",(x+250), (y-335),150, 30);
}


function remove_Weight_label(){	
	 rec = paper.image("images/remove.png",(x+250), (y-130),150, 35);	 
}

//submitReading();
//var subRec,subText;
//function submitReading(){	
//	 subRec = paper.image("images/submit.png",(x-50), (y+200),150, 35);	 
//}
//
//subRec.click(function(){
//	addFun();
//	calculationPanel();
//	 var tempJson = {};
//	tempJson.gf100 = cnt100gf;
//	tempJson.gf500 = cnt500gf;
//	tempJson.kgf1 = cnt1kgf;
//	tempJson.kgf2 = cnt2kgf;
//	tempJson.kgf5 = cnt5kgf;
//    tempJson.kgf10 = cnt10kgf;
//    
//    tempJson.totalWeight = totalStackWeight;
//
//    
//    jsonArr.push(tempJson);
//	masterJson.weight = jsonArr;
//	console.log(masterJson);
//    console.log(imgWeightArray);
//    console.log(wtStackMasterJson);
	
//})
// platform click close
function calculationPanel()
{
		console.log(masterJson);
//		console.log();
//		console.log();
	$("#main-div-conf").html("");
	var ansPanel='<div class=" row ">'
		+'<div class="col-sm-4">'
		+'<label>Enter Answer</label>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<input type="text" class="from-control" id="ans" ></input>'
		+'</div>'
		+'<div class="col-sm-4">'
		+'<button class="btn btn-success">SUBMIT</button>'
		+'</div>'
		+'</div>'
		$("#sub-main-div1").html(ansPanel);
	tableCreation();
	
}
function tableCreation(){
	var tableData=''
//	+'<div class="row container">'
	+'  <h4><center>Observation Table</center></h4>'
	+' <table class="table">'
	+'  <thead class="thead-dark">'
	+'     <tr>'
	+'      <th>Sr no</th>'
	+'      <th>Weight</th>'
	+'    <th>Pressure</th>'
	+'    <th>Error</th>'
	+'    <th>Actual Reading</th>'
	+'    <th>Standard Reading</th>'
	+'    </tr>'
	+'  </thead>'
	+'  <tbody>'
	
	for(i=0,p=1;i<masterJson.weight.length;i++,p++)
		{
		tableData+='    <tr>'
			+'		<td>'+p+'</td>'
			+'      <td>'+masterJson.weight[i].totalWeight+'KGF</td>'
			+'      <td>'+masterJson.weight[i].meterPressureWithError+'</td>'
			+'      <td>'+masterJson.weight[i].errorAdded+'</td>'
			+'      <td>'+p+'</td>'
		    +'      <td>'+masterJson.weight[i].totalWeight+'</td>'
			+'    </tr>'
		}
	
	tableData+='  </tbody>'
	+'</table>'
//	+'</div>'
	$("#sub-main-div2").html(tableData);
}
var Yposition=0;
var up_lift = 0;
var wt_pos = 0;
var weightUpValue = 0;  

function pfClick(){
	pf_flag = 1; 
	if(a == 50){
	up_lift = up_lift+5;
	console.log("up_lift :"+up_lift);
	Yposition= syp-124;
	 }
	 if(a == 55){
		up_lift = up_lift+5;
		console.log("up_lift :"+up_lift);
		Yposition= syp-135;
	}if(a == 60){
		up_lift = up_lift+5;
		console.log("up_lift :"+up_lift);
		Yposition= syp-145;
	}
	pf.animate({path: Raphael.transformPath("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ", 'T 0 '+-up_lift)}, time);	    
	                          
	    var _transformedPath1 = Raphael.transformPath("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)
	                   
	                       , 'T 0 '+-up_lift);

	    pis.animate({path: _transformedPath1}, time);
	//  polish = paper.rect((sxp-5),(syp-18),20,20,5) .attr({'stroke' : '#000' , 'stroke-width' : 1 , 'gradient': '160-#C0C0C0-#A9A9A9'});  
        polish.animate({'width': 20, 'height': 20, 'x': sxp-5, 'y': syp-18-up_lift}, time);
	
	for(i=0, position = 0 ; i<wtStackMasterJson.LIFOSTACK.length; i++)
	 {		
	      str=wtStackMasterJson.LIFOSTACK[i].weight;
	    if( str=="gf100" ){

		
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);	
			Yposition = Yposition-30;
			console.log(wtStackMasterJson);
		
	     }	
	      if( str=="gf500" ){
		
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);					
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;	
				     }
	      if( str=="kgf1" ){
		
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);				
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;				
	     }	
	      if( str=="kgf2" ){
		
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);					
			console.log(wtStackMasterJson);	
			Yposition = Yposition-30;			
	     }	
	      if( str=="kgf5" ){
			
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);			
			console.log(wtStackMasterJson);			
			Yposition = Yposition-30;	
	     }	
	      if( str=="kgf10" ){	
			
		imgWeightArray[i].animate({y: Yposition-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }	   	  
  if(a == 50 && up_lift > 30){
	up_lift = 30;

}
if(a == 55 && up_lift>36){
	up_lift = 36;
}if(a == 60 && up_lift>42){
	up_lift = 42;
} 
  
   pis.toFront();  
//   l.toFront(); 
   pf.toFront();
   polish.toFront();
	 }
    var pis1_transformedPath1  = Raphael.transformPath("M"+sz+" "+sy1+" l 0 "+((1.7*a)-up_lift)+ " l "+wid+ " 0 l 0 "+((-(1.7)*a)+up_lift)+"z");	
	pis1.animate({path: pis1_transformedPath1}, time);
	
}
var rmin = 12 ; var rmax = 30;
//var num = Math.random()*(rmax-rmin+1)+rmin;
var num = Math.floor(Math.random() * (rmax -rmin + 1) + rmin);
var divideVal = 0;
var ranErr=0;
function meterAnimonPlus(){	
	
 ranErr = num.toFixed(1);
     console.log(" num "+num);
     console.log(" ranErr "+ranErr);
    
	var weight_M = totalStackWeight;
var unit1=270/meterguage;

var angle= unit1*weight_M;
  pres = parseFloat(ranErr);
  pressure = pres+angle;
console.log("angle :"+angle);
console.log("pressure :"+pressure);

	var arry=[];
    
     if(a==50){
	    
	 	x1 = x-528 , y1 = y-307;
	 	if (meterguage==16){
		keepRotating = Raphael.animation({ 'transform':  'r'+(pressure)+ ', '+(x1+200)+', '+(y1+118)+' '}, 5000 );
		mline.animate(keepRotating); 

			 	
		}else { 
		keepRotating = Raphael.animation({ 'transform':  'r'+(pressure)+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
	    mline.animate(keepRotating);

		}	
	}else if(a==55){
		x1 = x-560 , y1 = y-334;
		if (meterguage==16){
		keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+196.7)+', '+(y1+118)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating); 

		}else {
		keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+196.6)+', '+(y1+98)+' '}, 5000 ,'elastic');
	    mline.animate(keepRotating);
     			
		}
 	    
	       
	}else{
		
		if (meterguage==16){
			x1 = x-540 , y1 = y-330;
		keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+142)+', '+(y1+86)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
	   
		}else {
		keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating); 
	 	}
	}
	presCal = pressure - totalStackWeight;
	actualPres = pressure-presCal;
	if(meterguage == 50){
		divideVal = 5;
	}if(meterguage == 100){
		divideVal = 2.8;
	}if(meterguage == 16){		
		divideVal = 12;
	}

   errDisp = pres/divideVal;
	var erDisplay = errDisp.toFixed(1);
	 err = parseFloat(erDisplay);	 
	actualPressure = actualPres+err;
    console.log("actualPressure :"+actualPressure);
    console.log("err :"+err);
       R_valve.toFront();
	  M_valve.toFront();
	  }
function meterAnimonMinus(){	
	angle = 0+ranErr;
	 if(a==50){
	    
	 	x1 = x-528 , y1 = y-307;
	 	if (meterguage==16){
		keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+118)+' '}, 5000 );
		mline.animate(keepRotating); 

			 	
		}else { 
		keepRotating = Raphael.animation({ 'transform':  'r'+(angle)+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
	    mline.animate(keepRotating);

		}	
	}else if(a==55){
		x1 = x-560 , y1 = y-334;
		if (meterguage==16){
		keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+196.7)+', '+(y1+118)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating); 

		}else {
		keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+196.6)+', '+(y1+98)+' '}, 5000 ,'elastic');
	    mline.animate(keepRotating);
     			
		}
 	    
	       
	}else{
		
		if (meterguage==16){
			x1 = x-540 , y1 = y-330;
		keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+142)+', '+(y1+86)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
	   
		}else {
		keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating); 
	 	}
	}
 
	  }

function addFun(){
	 var tempJson = {};
	tempJson.gf100 = cnt100gf;
	tempJson.gf500 = cnt500gf;
	tempJson.kgf1 = cnt1kgf;
	tempJson.kgf2 = cnt2kgf;
	tempJson.kgf5 = cnt5kgf;
    tempJson.kgf10 = cnt10kgf;
    
    tempJson.totalWeight = totalStackWeight;
    tempJson.meterPressureWithError = actualPressure; 
    tempJson.errorAdded = err; 
    jsonArr.push(tempJson);
	masterJson.weight = jsonArr;
//	calculationPanel();
	console.log(masterJson);
    console.log(imgWeightArray);
    console.log(wtStackMasterJson);
}
// vertical piston move

function pisAnim(){
	pf_flag = 0;
	 if(a == 50){		
     up_lift -= 5 ;
      
     Yposition = syp-124;
     } if(a == 55){
	up_lift -= 6;
	console.log(" pisAnim value "+up_lift);
	Yposition= syp-135;
	}if(a == 60){
		up_lift -= 5;
	console.log(" pisAnim value "+up_lift);
		Yposition= syp-145;
	}
      console.log("Value of up_lift in minus: "+up_lift);
	
	  var _transformedPath_p1 = Raphael.transformPath("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ", 'T 0 '+-up_lift);
         pf.animate({path: _transformedPath_p1}, time);	

      var _transformedPath1 = Raphael.transformPath("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)	                   
	                       , 'T 0 '+-up_lift);

	    pis.animate({path: _transformedPath1}, time);	    
    polish.animate({'width': 20, 'height': 20, 'x': sxp-5, 'y': syp-18+-up_lift}, time);
   
	    for(i=0; i<wtStackMasterJson.LIFOSTACK.length; i++)
	 {		
	     str=wtStackMasterJson.LIFOSTACK[i].weight; 
	    if( str=="gf100" ){
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);	
		Yposition = Yposition-30;	
			console.log(wtStackMasterJson);
		
	     }	
	      if( str=="gf500" ){

		
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }
	      if( str=="kgf1" ){

		
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }	
	      if( str=="kgf2" ){

		
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }	
	      if( str=="kgf5" ){

		
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }	
	      if( str=="kgf10" ){

		
		imgWeightArray[i].animate({y: Yposition+-up_lift}, time);			
			console.log(wtStackMasterJson);
			Yposition = Yposition-30;
	     }
	     
    }
   pis.toFront();  
   pf.toFront();
   polish.toFront();
}


// horizontal plunger moving forward

var hflag = 0;
var hndl = 0;
var forward = 0;

var forVal = 0;
var temp_val = 0;
var plusFlg = 0;
var minusFlg = 0;
	var id = 1;
	var id1 = 0;

plus.click(function(){		
	
	 if(a == 50)
    {
	forVal = -100;
}else if (a == 55){
	forVal = -110;
}else if(a == 60){
	forVal = -120;
}if(v1_check == 1 && v2_check == 2){
  if(id==1||id==2||id==3||id==4){
	horizontalAnimPlus();
	
}else{ 
	
	if(forward <= 0){		
	
	}if(totalStackWeight == 0)
	{
		alert("Place Weight on Platform");
		
		hndl = 0;
	} else{
		if(totalStackWeight>meterguage-5){
		alert("Add weight as per meter maximum limit ");
		
	}else{
		if(forward>=-40)
		 {
	plusAnim();	
	pfClick();	
	console.log(" actualPressure "+actualPressure);	
	meterAnimonPlus();
	     }else{
		plusAnim();
	
	   }
	}
	addFun();
}
   

console.log("value of hndl in max :"+hndl);
}	
}else{
	alert("click on valves");
}	
})

function plusAnim(){
	console.log("value of plus forward initially : "+forward);
	 forward = forward-10;
	 hndl=hndl+60; 
      h_img.animate({'transform':'r'+(hndl)+''},time);
	 console.log("value of plus forward : "+forward);
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-b*1.2)+ " 0 l 0 "+a+ " l "+(b*1.2)+" 0 l 0 "+(-b) , 'T '+forward+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-1.8*(a))+" 0 "+" l 0 "+(b/4)+" l "+(1.8*(a))+" 0 l "+(a+60)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward+' 0');
     
        h.animate({path: _transformedPath}, time);   
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*(a/2.5)+forward)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*(a/2.5)-forward)+" 0 z") },time);
if(forward <= forVal-5)
     {	
//	console.log("value of hndl in max :"+hndl);
	if(a == 55 )
	 {
			hndl = 660;
		}if(a == 50)
		    {
			hndl = 660;
		}if(a == 60){
		   hndl = 780;	
		}	
		
	  h_img.animate({'transform':'r'+(hndl)+''},time);
	forward = forVal;
	
		bubbleCall();	
	if(plusFlg == 0){
	setTimeout(function(){ 
	alert("Maximum limit...")
     
	},time+100);
	} 
	plusFlg = 1;	
}  
  
}
var rCapClose = 0;
var st1 = 1;
	function bubbleCall(){
		
	if(id == 1 && st1 == 1){
		id1 = 5;		
		air_bubble();
		
		st1++;
//		console.log("value of st1  plus for st1 = 1: "+st1);	
	} if(id == 2 && st1 == 2){
		id1 = 3;		
		air_bubble();
		
		st1++;
//		console.log("value of st1  plus for st1 = 1: "+st1);	
	} if(id == 3 && st1 == 3){
		id1 = 1;		
		air_bubble();

		st1++;
//		console.log("value of st1  plus for st1 = 1: "+st1);	
	} if(id == 4 && st1 == 4){
		if(rCapClose == 1){
			minusAnim();
			
       
		}if(rCapClose == 0){
			r_capCheck = 1;
//        r_capClose();
		 setTimeout(function(){
		alert(" Now close the cap of Oil Reservoir  ");
		},time+100);
		
		}
        st1++;
//        console.log("value of st1  plus for st1 = 1: "+st1);	
	}if(id == 5 && st1 == 5){
//		console.log("value of st1  plus for st1 = 1: for id 5 "+st1);	
//		pfClick();
		
	}
	
	}
var hndl_val = 0;
var maxH = 0;
function minusAnim(){
	forward = forward+10;
	plusFlg = 0;
	 hndl=hndl-60; 
      h_img.animate({'transform':'r'+(hndl)+''},time);
	
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-b*1.2)+ " 0 l 0 "+a+ " l "+(b*1.2)+" 0 l 0 "+(-b) , 'T '+forward+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-1.8*(a))+" 0 "+" l 0 "+(b/4)+" l "+(1.8*(a))+" 0 l "+(a+60)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward+' 0');

        h.animate({path: _transformedPath}, time); 
      
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*(a/2.5)+forward)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*(a/2.5)-forward)+" 0 z") },time);
  
  if(forward >= 1){		
		console.log("value of hndl is for min:"+hndl); 
		hndl = 0; 
			  h_img.animate({'transform':'r'+(hndl)+''},time);

			forward = 0;	
			if(minusFlg == 0){
	setTimeout(function(){ 
	alert("Minimum limit...")
      
	},time+100);
	}
	minusFlg = 1;
	}
  

}
minus.click(function(){
   plusFlg = 0;
   
   
	if(st1 == 1){
		keepRotating = Raphael.animation({ 'transform':  'r-0.5 '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
		id = 1;		
		minusAnim();
	}if(st1 == 2){
		keepRotating = Raphael.animation({ 'transform':  'r-0.5 '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
		id = 2;
		minusAnim();		
	}if(st1 == 3){
		keepRotating = Raphael.animation({ 'transform':  'r-0.5 '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
		id = 3;
		minusAnim();	
	}if(st1 == 4){
		
		keepRotating = Raphael.animation({ 'transform':  'r-0.5 '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');
		mline.animate(keepRotating);
		id = 4;
		minusAnim();
	}if(st1==5){
	id = 5;
	if(rCapClose == 0){
			forward = forVal; 
		}if(rCapClose == 1){
			minusAnim();
		}
	
	if(up_lift > 0){
	pisAnim();
	addFun();
	meterAnimonMinus();
	}else{
		up_lift = 0;
	}
   }
 
})


function horizontalAnimPlus(){
		forward = forward-10;
	 hndl=hndl+60; 
      h_img.animate({'transform':'r'+(hndl)+''},time);
//	 console.log("value of plus forward : "+forward);
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-b*1.2)+ " 0 l 0 "+a+ " l "+(b*1.2)+" 0 l 0 "+(-b) , 'T '+forward+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-1.8*(a))+" 0 "+" l 0 "+(b/4)+" l "+(1.8*(a))+" 0 l "+(a+60)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward+' 0');
     
        h.animate({path: _transformedPath}, time);   
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*(a/2.5)+forward)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*(a/2.5)-forward)+" 0 z") },time);
if(forward <= forVal-5)
     {	
//	console.log("value of hndl in max :"+hndl);
	if(a == 55 )
	 {
			hndl = 660;
		}if(a == 50)
		    {
			hndl = 660;
		}if(a == 60){
		   hndl = 780;	
		}	
		
	  h_img.animate({'transform':'r'+(hndl)+''},time);
	forward = forVal;
	bubbleCall();
	if(plusFlg == 0){
//	setTimeout(function(){ 
//	alert("Maximum limit...")
//     
//	},time+100);
	} 
	plusFlg = 1;	
}  
	
}



wt50.click(function(){	
if(minusFlg == 1){
    
	 tempStackMasterJson = {};
 	tempStackMasterJson.weight ='gf100' ;
	tempStackMasterJson.position = position;
	
	tempStackMasterJson.tempName ='weight100gf' ;
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;	
	
	cnt100gf++;		
	
	if(a == 50){
	imgWeightArray[position] = paper.image("images/100gf.png",(x-40), y-53-wt_ht,150, 30);
	}else if(a == 55){
	imgWeightArray[position] = paper.image("images/100gf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
    imgWeightArray[position] = paper.image("images/100gf.png",(x-55), (y-88.58-wt_ht),150, 30);	
        }
	
//	if(wt_ht <= 300){
      position++;
	weight12 = 0.100;
	  totalStackWeight+= weight12;
	  
	 wt_ht += 30;
           flag++;
           cnt++;
            console.log("cnt100gf++ :"+cnt100gf);
           console.log("wt_ht :"+wt_ht);

        console.log(totalStackWeight); 
         console.log("counter : "+cnt);   
       }
       if(minusFlg == 0){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
	}
  
	});
var dwt;
var weight500gf;
 wt100.click(function(){
if(minusFlg == 0){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
}

if(minusFlg == 1){
 

	tempStackMasterJson = {};
	tempStackMasterJson.weight ='gf500' ;
	tempStackMasterJson.position=position;
	tempStackMasterJson.tempName ='weight500gf' ;
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;
	cnt500gf++;	
	
	if(a == 50){
	 imgWeightArray[position] = paper.image("images/500gf.png",(x-40), y-53-wt_ht,150, 30);
	}else if(a == 55){
	imgWeightArray[position]= paper.image("images/500gf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
	 imgWeightArray[position] = paper.image("images/500gf.png",(x-55), (y-88.58-wt_ht),150, 30);
	}	
	
	position++;	
	weight12 = 0.500;
	  totalStackWeight+= weight12;
	   wt_ht += 30;
           flag++;
           cnt++;
//           wt_arr[cnt] = wt;
          console.log("cnt500gf++ :"+cnt500gf);
         console.log("counter : "+cnt);        
//         console.log("www "+weight12);
     }
    
	});
	
	 wt500.click(function(){
		if(minusFlg == 0){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
} if(minusFlg == 1){
		
		tempStackMasterJson = {};
		tempStackMasterJson.weight ='kgf1' ;
	tempStackMasterJson.position=position;	
	tempStackMasterJson.tempName ='weight1kgf' ;	
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;		
		cnt1kgf++;
		

	if(a == 50){
		imgWeightArray[position] = paper.image("images/1kgf.png",(x-40), y-53-wt_ht,150, 30);
	}else if(a == 55){
		imgWeightArray[position] = paper.image("images/1kgf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
		imgWeightArray[position] = paper.image("images/1kgf.png",(x-55), (y-88.58-wt_ht),150, 30);
	}

	position++;
	weight12 = 1;
	  totalStackWeight+= weight12;
		  
	   wt_ht += 30;
           flag++;
             cnt++;
              console.log("cnt1kgf++ :"+cnt1kgf);
            console.log("counter : "+cnt);  
            console.log(totalStackWeight);
//             console.log("www "+weight12);
       }
	});
	
	wt1.click(function(){
		if(minusFlg == 0){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
} if(minusFlg == 1){ 
		tempStackMasterJson = {};
		tempStackMasterJson.weight ='kgf2' ;
	tempStackMasterJson.position=position;
	tempStackMasterJson.tempName ='weight2kgf';
	
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;	
		cnt2kgf++;
		

	if(a == 50){
		imgWeightArray[position] = paper.image("images/2kgf.png",(x-40), (y-53-wt_ht),150, 30);
	}else if(a == 55){
		imgWeightArray[position] = paper.image("images/2kgf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
		 imgWeightArray[position] = paper.image("images/2kgf.png",(x-55), (y-88.58-wt_ht),150, 30);
	}

	position++;
	   weight12 = 2;
	  totalStackWeight+= weight12;
	   wt_ht += 30;
           flag++;
            cnt++;
             console.log("cnt2kgf++ :"+cnt100gf);
       console.log("counter : "+cnt);  
      console.log(totalStackWeight);
//       console.log("www "+weight12);
      }
	});

  wt2.click(function(){
	if(minusFlg == 0){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
} if(minusFlg == 1){
	
	tempStackMasterJson = {};
	tempStackMasterJson.weight ='kgf5' ;
	tempStackMasterJson.position=position;
	tempStackMasterJson.tempName ='weight5kgf';
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;
	
	
	cnt5kgf++;

	if(a == 50){
		imgWeightArray[position] = paper.image("images/5kgf.png",(x-40), (y-53-wt_ht),150, 30);
	}else if(a == 55){
		imgWeightArray[position] = paper.image("images/5kgf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
		 imgWeightArray[position] = paper.image("images/5kgf.png",(x-55), (y-88.58-wt_ht),150, 30);
	}

	position++;
	 weight12 = 5;
	  totalStackWeight+= weight12;
	   wt_ht += 30;
           flag++;
          
            cnt++;
             console.log("cnt5kgf++ :"+cnt5kgf);
            console.log("counter : "+cnt);  
      console.log(totalStackWeight);
//       console.log("www "+weight12);
     }
	});
	var wt_anim;
	wt5.click(function(){
		if(minusFlg == 0 ){
	 wt_ht = 0;
	alert("Go to minimum position of handle and then add weight");
} if(minusFlg == 1){
	
		tempStackMasterJson = {};
		tempStackMasterJson.weight ='kgf10' ;
	tempStackMasterJson.position=position;
	tempStackMasterJson.tempName ='weight10kgf';
	stackJsonArr.push(tempStackMasterJson);
	wtStackMasterJson.LIFOSTACK=stackJsonArr;
	
	
		cnt10kgf++;

	if(a == 50){

imgWeightArray[position] =  paper.image("images/10kgf.png",(x-40), y-53-wt_ht,150, 30);


	}else if(a == 55){
	imgWeightArray[position] =  paper.image("images/10kgf.png",(x-50), (y-71-wt_ht),150, 30);
	}else{
	imgWeightArray[position] =  paper.image("images/10kgf.png",(x-55), (y-88.58-wt_ht),150, 30);
	}

	position++;
	weight12 = 10;
	  totalStackWeight+= weight12;
	   wt_ht += 30;
       flag++;        
        cnt++; 
             console.log("cnt10kgf :"+cnt10kgf);
   console.log(totalStackWeight);
     }
	});
	
	wt = wt_ht;
	var y2 =0;
	var rem;
	
var weight_blocks = 0;

var arrLen = 0;
var arrImg = [];
function weight_remove(){
  
		var wt = 0;
		 cnt--;
		 wt_ht -= 30;       		
      
	var length = masterJson.weight.length-1;
	var gf500 = Boolean("gf500" in masterJson.weight[length]);
	var gf100 = Boolean("gf100" in masterJson.weight[length]);
	var kgf1 = Boolean("kgf1" in masterJson.weight[length]);
	var kgf2 = Boolean("kgf2" in masterJson.weight[length]);
    var kgf5 = Boolean("kgf5" in masterJson.weight[length]);
    var kgf10 = Boolean("kgf10" in masterJson.weight[length]);
	var str=wtStackMasterJson.LIFOSTACK[wtStackMasterJson.LIFOSTACK.length-1].weight;

  imgWeightArray[imgWeightArray.length-1].remove();
	imgWeightArray.pop();
	   console.log(imgWeightArray);
	if(gf100 === true && str=="gf100" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].gf100 == 0){
		cnt100gf = 0;
		masterJson.weight[masterJson.weight.length-1].gf100 = 0;
        }else{
	
	    cnt100gf--;
	    wt_ht -= 30;
		totalStackWeight -= 0.100;
		masterJson.weight[masterJson.weight.length-1].gf100 -=1;	
		

		console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	     }
	       console.log(masterJson);
	} 
	
	
	if(gf500 === true && str=="gf500" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].gf500 == 0){
		cnt500gf = 0;
		masterJson.weight[masterJson.weight.length-1].gf500 = 0;
        }else{
	
	    cnt500gf--;
		totalStackWeight -= 0.500;
		masterJson.weight[masterJson.weight.length-1].gf500 -=1;
		console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	     }
	       console.log(masterJson);
	} 
	
	if(kgf1 === true && str=="kgf1" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].kgf1 == 0){
		cnt1kgf = 0;
		masterJson.weight[masterJson.weight.length-1].kgf1 = 0;
        }else{
	
	    cnt1kgf--;
		totalStackWeight-= 1;
		masterJson.weight[masterJson.weight.length-1].kgf1 -=1;	
		console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	   
	     }
	       console.log(masterJson);
	} 
	
	if(kgf2 === true && str=="kgf2" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].kgf2 == 0){
		cnt2kgf = 0;
		masterJson.weight[masterJson.weight.length-1].kgf2 = 0;
        }else{
	    cnt2kgf--;
		totalStackWeight-= 2;
		masterJson.weight[masterJson.weight.length-1].kgf2 -=1;	

	console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	   
	     }
	       console.log(masterJson);
	} 
	
	if(kgf5 === true && str=="kgf5" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].kgf5 == 0){
		cnt5kgf = 0;
		masterJson.weight[masterJson.weight.length-1].kgf5 = 0;
        }else{
	    cnt5kgf--;
		totalStackWeight-= 5;			
		masterJson.weight[masterJson.weight.length-1].kgf5 -=1;
	console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	   
	     }
	       console.log(masterJson);
	} 
	
	if(kgf10 === true && str=="kgf10" )
	{
		
		if(masterJson.weight[masterJson.weight.length-1].kgf10 == 0){
		cnt10kgf = 0;
		masterJson.weight[masterJson.weight.length-1].kgf10 = 0;
        }else{
	    cnt10kgf--;
	    
		totalStackWeight -= 10;		
		masterJson.weight[masterJson.weight.length-1].kgf10 -=1;
		console.log(wtStackMasterJson);
	   console.log("totalStackWeight"+totalStackWeight);
	     }
	       console.log(masterJson);
	}     
		
	
	}



			
 rec.click(function(){ 
	
	
       flag--;       
//        wtStackMasterJson.LIFOSTACK = wtStackMasterJson.LIFOSTACK;
    
	if(wt_ht < 0)
	 {
		wt_ht = 0;		
			cnt = 0;	
	alert(" Add weight on platform ");
     }else{
		
//	var len= wtStackMasterJson.LIFOSTACK.length-1;
//	console.log("len "+len);
         
		  weight_remove();
		   delete wtStackMasterJson.LIFOSTACK.pop();
		  console.log("After delete");
        console.log(wtStackMasterJson);		 
//		  totalStackWeight-= weight12;
		    pf.toFront();
		    polish.toFront();				  	
}	
})
//var maxFlag = 1;

 M_valve.click( function(){
	
	meterAnim();
})

//function meterAnimonPlus(){	
//	var rmin = 15 ; var rmax = 25;
////var num = Math.random()*(rmax-rmin+1)+rmin;
//var num = Math.floor(Math.random() * (rmax -rmin + 1) + rmin);
//let ranErr = num.toFixed(0);
//     console.log(" num "+num);
//     console.log(" ranErr "+ranErr);
//    
//	var weight_M = totalStackWeight;
//var unit1=270/meterguage;
//
//var angle= unit1*weight_M;
//  pres = parseInt(ranErr);
//  pressure = pres+angle;
//console.log("angle :"+angle);
//console.log("pressure :"+pressure);
//
//	var arry=[];
//    
//     if(a==50){
//	    
//	 	x1 = x-528 , y1 = y-307;
//	 	if (meterguage==16  ){
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+200)+', '+(y1+118)+' '}, 9000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
//
//			 	
//		}else { 
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating);
//
//		}	
//	}else if(a==55){
//		x1 = x-560 , y1 = y-334;
//		if (meterguage==16){
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+196.7)+', '+(y1+118)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
//
//		}else {
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+196.6)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating);
//     			
//		}
// 	    
//	       
//	}else{
//		
//		if (meterguage==16){
//			x1 = x-540 , y1 = y-330;
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+142)+', '+(y1+86)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating);
//	   
//		}else {
//		var keepRotating = Raphael.animation({ 'transform':  'r'+pressure+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
//	 	}
//	}
//
//       R_valve.toFront();
//	  M_valve.toFront();
//	  }
//	  else{
//		setTimeout(function(){ 
//		alert("First turn on the valve of Reservior oil tank")
//		},time+100);
//	}
//	}else
//	   {
//		flagRValve = 0;
//		alert("Turn on Reservoir oil tank valve...");
//	}
//  }


//}


function meterAnim(){	
//	if(flagRValve>0)
//	{
	v2_check = 2;
	if(r_valve_val > 0 && os == 1	){
//	var weight_M = totalStackWeight;
//var unit1=270/meterguage;
//var angle= unit1*weight_M;

var anim = Raphael.animation({ fill: "#2da60f" ,'stroke' : "#000" , 'stroke-width' : 2},1000,"bounce");
       M_valve.animate(anim); 
	var arry=[];
    
     if(a==50){
	    
	 	x1 = x-528 , y1 = y-307;
	 	if (meterguage==16  ){
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+118)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
		arry[0]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':36});
		arry[0].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  '+(-a*2.3)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':11.5});
		arry[1].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b+5.4)+' '},time, function(){
		circleB3 = paper.circle(x1+200, y1+116.7, 72).attr({'fill':'#6b5c3d','opacity':0.1});
			
		});
		});
			 	
		}else { 
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating);
	    arry[0]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':36});
		arry[0].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  '+(-a*2.3)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':11.5});
		arry[1].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b+5.4)+' '},time, function(){ 	
		circleB3 = paper.circle(x1+200, y1+98, 92).attr({'fill':'#6b5c3d','opacity':0.1});	
			
		});
		});
		}	
	}else if(a==55){
		x1 = x-560 , y1 = y-334;
		if (meterguage==16){
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+196.7)+', '+(y1+118)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
		arry[0]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':40});
		arry[0].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  '+((-a*2.3)-2.7)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':12.3});
		arry[1].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b-6)+' '},time-1000, function(){ 			
		circleB3 = paper.circle(x1+200, y1+116.7, 72).attr({'fill':'#6b5c3d','opacity':0.1});
		});				
		});
		}else {
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+196.6)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating);
	    arry[0]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':40});
		arry[0].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  '+((-a*2.3)-2.7)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':12.3});
		arry[1].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b-6)+' '},time-1000, function(){ 			
		circleB3 = paper.circle(x1+200, y1+98, 92).attr({'fill':'#6b5c3d','opacity':0.1});
		});				
		});
     			
		}
 	    
	       
	}else{
		
		if (meterguage==16){
			x1 = x-540 , y1 = y-330;
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+142)+', '+(y1+86)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating);
		arry[0]=paper.path('M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arry[0].animate({path :'M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  '+(-a*2.4)+' '},time, function(){ 
			
		arry[1]=paper.path('M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':13.2});
		arry[1].animate({path :'M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b*1.7)+' '},time-500, function(){ 
		circleB3 = paper.circle(x1+143, y1+85, 72).attr({'fill':'#6b5c3d','opacity':0.1});

		});
				
		});
	   
		}else {
//		var keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//		mline.animate(keepRotating); 
		arry[0]=paper.path('M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arry[0].animate({path :'M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  '+(-a*2.4)+' '},time, function(){ 
			
		arry[1]=paper.path('M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':13.2});
		arry[1].animate({path :'M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b*1.7)+' '},time-500, function(){ 
		circleB3 = paper.circle(x1+155, y1+76, 92).attr({'fill':'#6b5c3d','opacity':0.1});
		});
				
		});
	 	}
	}

       R_valve.toFront();
	  M_valve.toFront();
	  }
	  
//	  else{
//		alert("First turn on the valve of Reservior oil tank");
//	}
//	}else
//	   {
//		flagRValve = 0;
//		alert("Turn on Reservoir oil tank valve...");
//	}
  }
var pressure = 0;
var presCal = 0 , actualPres = 0;


}
  