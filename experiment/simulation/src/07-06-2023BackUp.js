
function mimicCall(weight,meter,cylinderPiston)
{

var paper = new Raphael(document.getElementById('canvas-div'), 1100, 700);
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
	 console.log("weight    "+weight);
		   console.log("meter    "+meter);
		   console.log("cylinderPiston    "+cylinderPiston);
var x = 500;
var y = 400;
var a = parseInt(cylinderPiston);
var b = a/2;
var cylin;
var pis;
var sx,sy,sz;
var sxp,syp;
var wid;
var rec_wid;
var pf , pf1, pis1;
var time = 1000;
var hx,px;
var R_cap;

var l;
 var keepRotating;
var x1, y1;
var flag = 0;
var w1;
var rec,borderhide1, borderhide;
var SetFlagVal=0;
var meterguage=parseInt(meter);
var Img , h_img, plus, minus;
var angle1=-30;
var textW = paper.text(0,0," ");
var pf_flag = 0;
var Img, sectorImg;
var arc,mline,arc_anim,triangle;
var wt_ht = 0;
var weight11 = 0 ;
var weight12 = 0;
var index = 0;
var wt_arr = [];
var cnt = 0;
var blank_rec;
var up_anim; 
var unit1 = 0;
cylinder();
platform();
handle();
//oilSpread();
oil_reservoir();
valve();
meterguage2(); 
//meterwork();
  
surface();
remove_Weight_label();
weight5(x,y);
weight2(x,y);
weight1(x,y);
weight500(x,y);
weight100(x,y);
weight50(x,y);
meterwork(x,y);

function cylinder() {


      cylin = paper.path("M"+(x-300)+ " " +(y+163)+ " l 410   0  l "+(a+10)+" 0    l "+(1.5*a)+" 0   l 0 "+(-a)+" " 
                                                           +"l "+(-1.5*a)+" 0  l "+(-a-10)+" 0       l "+(-1.5*a+(a/3))+" 0 "
                                                           //platform
                                                           +"l 0 "+(-1.1*a )+" l "+(-a+(a/4))+" 0    l 0 "+(1.1*a)+" "
                                                           //oil
                                                           +"l "+-(a+90)+" 0   l 0 "+(-a )+"       l "+(b*1.2)+" 0    l 0 "+(-1.7*a)+"   l "+(-a*1.9)+" 0    l   0 "+(1.7*a)+" l "+(b*1.2)+" 0 l 0 "+a
//                                                         +"l "+-(a+90)+" 0   l 0 "+(-1.3*a )+"   l "+(b*1.5)+" 0    l 0 "+(-a*1.5)+"   l "+(-a*2.5)+" 0    l   0 "+(a*1.5)+"   l "+(b*1.5)+" 0    l 0 "+(1.3*a)+"  "

                                                           // meter
                                                             +"l "+-(a*3)+" 0  l 0 "+(-4.1*a )+" l "+(-a/4)+" 0  l 0  "+(-0.7*b)+"    l "+(-a/4)+" 0 l 0  "+(0.7*b)+"  l "+(-a/4)+" 0     l 0 "+(5.1*a)+"z "

//                                                           +"l "+-(a*3)+" 0  l 0 "+(-4.1*a )+" l "+(-a/3)+" 0       l 0  "+(-0.7*b)+"    l "+(-a/3)+" 0   l 0  "+(0.7*b)+"  l "+(-a/3)+" 0     l 0 "+(5.1*a)+"z "
                                                          ).attr({ 'stroke': '#8e9490', 'stroke-width': 1.5 });
}

function platform(){

	if(a == 50)
	  {
		sx = x+16;
		sy = y+112;
		sz = x+14.9;
		sxp = x+28;
		syp = y+73.5;
		wid = b+12;
		rec_wid = a-15.5;
		
	}else if(a == 55)
               {
	    sx = x+6.5;
		sy = y+107;
		sz = x+5.2;
		sxp = x+21;
		syp = y+65;
		wid = b+13;
		rec_wid = a-17.3;
	   
    }else{
	    sx = x-2.8;
		sy = y+102;
		sz = x-4.4;
		sxp = x+13;
		syp = y+56.6;
		wid = b+14;
		rec_wid = a-19;
         }
	pis1 = paper.path("M"+sz+" "+sy+" l 0 "+(-(2.2)*a)+ " l "+wid+ " 0 l 0 "+(2.2*a) ).attr({'stroke' : '#000' , 'stroke-width' : 2 , 'fill': '#7c8ba3'});	
	pis = paper.path("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)).attr({'stroke' : '#000' , 'stroke-width' : 1 ,'fill':'#5c5e61'  });	
            
	pf = paper.path("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ")
      .attr({'stroke' : '#000' , 'stroke-width' : 3 , 'fill':'#000'});
      if(a == 50){
	      l = paper.path("M"+(x+15)+" "+(y+8)+"l -20 0 l 0 -15 l 77 0 l 0 15 l -20 0").attr({'stroke':"#000",'stroke-width': 2});
	       } else if(a == 55){
		l = paper.path("M"+(x+6)+" "+(y-8)+"l -20 0 l 0 -15 l 79 0 l 0 15 l -20 0").attr({'stroke':"#000",'stroke-width': 2});

	}else{
		 l = paper.path("M"+(x-4)+" "+(y-24.5)+"l -20 0 l 0 -15 l 83 0 l 0 15 l -20 0").attr({'stroke':"#000",'stroke-width': 2});
	}  
	
	h_img = paper.image("images/handle1.png",(x+295), (y-60),70, 90);
	plus = paper.image("images/plus1.png",(x+385), (y-35), 40, 40); 
	minus = paper.image("images/minus1.png",(x+235), (y-35), 40, 40);                
} 

function handle() {
	
	if(a == 50)
	  {
		hx = 5.9;
		px = 2.7;
		block = 50;
		block_ht = 2.2;
	}else if(a == 55){
		hx = 5.4;
		px = 2.4;
		block = 39;
		block_ht = 2.3;
	}else{
		hx = 5;
		px = 2.2;
		block = 30;
		block_ht = 2.3;
	}
	r1 = paper.path("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a*1.5)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a*1.5)+" 0 z")
         .attr({'stroke' : '#5c5e61' , 'stroke-width' : 2,'fill':"#212c38"});
         
    h = paper.path("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z ")	 
	 .attr({'stroke' : '#7f8999' , 'stroke-width' : 2,'fill':"#7f8999"});     
	  
    p = paper.path("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b))
	  .attr({'stroke' : '#5c5e61' , 'stroke-width' : 2,'fill':"#5c5e61"});
}

function oil_reservoir(){
	  if(a==50){
		 R = paper.path("M"+(x-320.5+(3.9*a))+ " " +(y+190+(-2.3*a))+ "l  0   "+(-a/4)+"    l "+(b*1.2)+" 0        l 0 "+(-a*1.7)+"   l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"      l "+(-b*1.1)+" 0          l   0 "+(a*1.7)+"   l "+(b*1.2)+" 0    l  0   "+(a/4)+"  "     
	       ).attr({'fill':'#6b5c3d','stroke-width':1.5,'stroke': '#8e9490'});	 
		R_cap =paper.ellipse(x-288.2+(2.9*a), y+170.7+(-4.3*a),25, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-286.8+(2.5*a))+ " " +(y+175+(-4.3*a))+"l 0  11.5   l "+(b*1.5)+" 0    l 0 -10      l "+(-b*1.5)+" 0 ")
		.attr({'stroke-width':3,'fill':'black'});


	  }else if(a==55){
		 R = paper.path("M"+(x-355.2+(3.9*a))+ " " +(y+194+(-2.3*a))+ "l  0   "+(-a/4)+"   l "+(b*1.2)+" 0        l 0 "+(-a*1.7)+"   l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"       l "+(-b*1.1)+" 0          l   0 "+(a*1.7)+"    l "+(b*1.2)+" 0   l  0   "+(a/4)+" "     
	       ).attr({'fill':'#6b5c3d ','stroke-width':1.5, 'stroke': '#8e9490'});	 
		R_cap =paper.ellipse(x-319.5+(2.9*a), y+174.2+(-4.3*a),26, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-318+(2.5*a))+ " " +(y+178+(-4.3*a))+"l 0  11.5   l "+(b*1.5)+" 0    l 0 -10      l "+(-b*1.5)+" 0 ").attr({'stroke-width':3,'fill':'black'});

	  }else{
		 R = paper.path("M"+(x-389+(3.9*a))+ " " +(y+196+(-2.3*a))+ "l  0   "+(-a/4)+"     l "+(b*1.2)+" 0        l 0 "+(-1.7*a)+"  l "+(-b*1.1)+" 0    l 0 "+(-a/3)+"    l "+(-b*1.6)+" 0     l 0 "+(a/3)+"       l "+(-b*1.1)+" 0            l   0 "+(a*1.7)+"   l "+(b*1.2)+" 0   l  0   "+(a/4)+" "
	       ).attr({'fill':'#6b5c3d', 'stroke-width':1.5, 'stroke': '#8e9490'});	 
		R_cap = paper.ellipse(x-350+(2.9*a), y+174+(-4.3*a),28, 5).attr({'stroke-width':2.5, 'fill':'black'});
		R_cap1=paper.path("M"+(x-348.5+(2.5*a))+ " " +(y+178+(-4.3*a))+"l 0  11.5   l "+(b*1.5)+" 0    l 0 -10      l "+(-b*1.5)+" 0 ").attr({'stroke-width':3,'fill':'black'});

       }
  }
function oilSpread(){
	var arr = [];
	
	if(a==50){
		arr[0]=paper.path('M'+(x-288.5+(2.9*a))+ ' ' +(y+213+(-2.3*a))+ 'l 0  0   ').attr({ 'stroke':'#6b5c3d', 'stroke-width':33.2});
		arr[0].animate({path :'M'+(x-288.5+(2.9*a))+ ' ' +(y+235+(-2.3*a))+ 'l 0 '+(-b)+' '},time, function(){
	
		arr[1]=paper.path('M'+(x-282.5+(2.9*a))+ ' ' +(y+253+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':48.5});
		arr[1].animate({path :'M'+(x-282.5+(2.9*a))+ ' ' +(y+253+(-2.3*a))+'l  '+(-a*4.2)+'  0  l  '+((a*8.4)+1.2)+' 0   '},time, function(){
		
		arr[2]=paper.path('M'+(x-121.6+(3.9*a))+ ' ' +(y+253+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':48.5});
		arr[2].animate({path :'M'+(x-121.6+(3.9*a))+ ' ' +(y+253+(-2.3*a))+'l  '+(a*1.02)+'  0'},time, function(){
			
		arr[3]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+254+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':36});
		arr[3].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+254+(-2.3*a))+'l 0  '+(-a*1.8)+' '},time, function(){ 
		
		arr[4]=paper.path('M'+(x-162.1+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':35.6});
		arr[4].animate({path :'M'+(x-162.1+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-b*3.3)+'     '},time, function(){
		
         });
          pis.toFront();
          
		});	
		p.toFront();	
		});
		var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+a+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+a+' 0');
        h.animate({path: _transformedPath}, time);  
       var _transformedPath2 = Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)
	                            +" l "+(block_ht*a)+" 0 z", ' T 0 0 ');
	    r1.animate({path: _transformedPath2}, time+3000);
		});
		});
			
	}else if(a==55){
		arr[0]=paper.path('M'+(x-319+(2.9*a))+ ' ' +(y+218+(-2.3*a))+ 'l 0  0   ').attr({'stroke': '#6b5c3d','stroke-width':37.5});
		arr[0].animate({path :'M'+(x-319+(2.9*a))+ ' ' +(y+245+(-2.3*a))+ 'l 0 '+(-b)+' '},time, function(){
		
		arr[1]=paper.path('M'+(x-319+(2.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':53.8});
		arr[1].animate({path :'M'+(x-319+(2.9*a))+ ' ' +(y+262+(-2.3*a))+'l  '+(-a*4.09)+'  0  l  '+(a*8.2)+' 0   '},time, function(){
		
		arr[2]=paper.path('M'+(x-94+(2.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':53.8});
		arr[2].animate({path :'M'+(x-94+(2.9*a))+ ' ' +(y+262+(-2.3*a))+' l  '+(a*1.01)+' 0   '},time, function(){
		
		arr[3]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':40});
		arr[3].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0 '+((-a*1.8)+1.1)+'  '},time, function(){
		
		arr[4]=paper.path('M'+(x-189.2+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':39.2});
		arr[4].animate({path :'M'+(x-189.2+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-b*1.7)+'     '},time, function(){
		});
        pis.toFront();          
		});	
		p.toFront();	
		});
		var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+a+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+a+' 0');

        h.animate({path: _transformedPath}, time);  
       var _transformedPath2 = Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)
	                            +" l "+(block_ht*a)+" 0 z", ' T 0 0 ');
	    r1.animate({path: _transformedPath2}, time+3000);
		
		});
		});
	}else{
		arr[0]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+219.5+(-2.3*a))+ 'l 0  0   ').attr({'stroke': '#6b5c3d', 'stroke-width':41});
		arr[0].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+249+(-2.3*a))+ 'l 0 '+(-b)+' '},time, function(){
		
		arr[1]=paper.path('M'+(x-350+(2.9*a))+ ' ' +(y+271+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':59});
		arr[1].animate({path :'M'+(x-350+(2.9*a))+ ' ' +(y+271+(-2.3*a))+'l  '+(-a*4.09)+'  0  l  '+(a*8.2)+' 0   '},time, function(){
	
		arr[2]=paper.path('M'+(x-115+(2.9*a))+ ' ' +(y+271+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':59});
		arr[2].animate({path :'M'+(x-115+(2.9*a))+ ' ' +(y+271+(-2.3*a))+' l  '+(a*1.04)+' 0   '},time, function(){
		
		arr[3]=paper.path('M'+(x-633.8+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arr[3].animate({path :'M'+(x-633.8+(3.9*a))+ ' ' +(y+262+(-2.3*a))+'l 0 '+(-a*1.6)+'  '},time, function(){
		
		arr[4]=paper.path('M'+(x-216.7+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
		arr[4].animate({path :'M'+(x-216.7+(3.9*a))+ ' ' +(y+256.8+(-2.3*a))+'l 0  '+(-b*1.5)+'     '},time, function(){
		});
        pis.toFront();          
		});	
		p.toFront();	
		});
		
		var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+a+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+a+' 0');

        h.animate({path: _transformedPath}, time);  
       var _transformedPath2 = Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)
	                            +" l "+(block_ht*a)+" 0 z", ' T 0 0 ');

	    r1.animate({path: _transformedPath2}, time+1000);
		
		});
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

 R_valve.click(function(){
	
var anim1 = Raphael.animation({ fill: "#2da60f" ,'stroke' : "#000" , 'stroke-width' : 2},1000,"bounce");
       R_valve.animate(anim1); 
	setInterval(function(){
		  Rvalve_off();
       }, time*4.5,function(){
	 });
	
       oilSpread();
       R_valve.toFront();
	  M_valve.toFront();
  });

//air bubble
var setflag=0;
R_cap.click(function(){
	if(setflag==0){
	  
	   if (a==50){
	 	var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,441, 410' }, 2000 );
        R_cap.animate(keepRotating5.repeat(1));
        air_bubble();
       }else if(a==55){
		var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,425, 395' }, 2000 );
        R_cap.animate(keepRotating5.repeat(1));
        air_bubble();
       
       }else{
		var keepRotating5 = Raphael.animation({ 'transform': 'r90 ,410, 373' }, 2000 );
		R_cap.animate(keepRotating5.repeat(1));
		 air_bubble();
	   }
	  setflag++;
	}else{
	    
        if (a==50){
	 	var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,441, 410' }, 2000 );
        R_cap.animate(keepRotating6.repeat(1));
        setflag=0;
       }else if(a==55){
        var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,425, 395' }, 2000 );
        R_cap.animate(keepRotating6.repeat(1));
        setflag=0;
        
       
       }else{
		var keepRotating6 = Raphael.animation({ 'transform': 'r-0 ,410, 373' }, 2000 );
		R_cap.animate(keepRotating6.repeat(1));
		 setflag=0;
	   }
        
         }

});

var simuli=1;
	
function air_bubble(){
	if(a==50){
			var totalDelay = 0;
			function generateCircles2() {
		 	if (totalDelay <10) {
			setTimeout(function() {
			totalDelay += 1;
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-170),(y-420)+ yPos, size).attr('fill', "black");
//			circle2 = paper.circle((x-160),(y-434)+ yPos, size).attr('fill', "black");
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -610+yPos, cy: (y-30)  }, time, generateCircles3());
			circle.animate(cirAni.delay(100));
//			circle2.animate(cirAni.delay(100));
				}
			}, 150);
			}
		}
		   function generateCircles3() {
		   setTimeout(function() {
		   var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
		   var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-140),(y-420)+ yPos, size);
			circle1.attr("fill", "black");
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
			if (totalDelay <10) {
			setTimeout(function() {
			totalDelay += 1;
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-199),(y-429)+ yPos, size).attr('fill', "black");
			circle2 = paper.circle((x-160),(y-429)+ yPos, size).attr('fill', "black");
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -630+yPos, cy: (y-48)  }, time, generateCircles3());
			circle.animate(cirAni.delay(100));
			circle2.animate(cirAni.delay(100));
				}
			}, 150);
		  }
		}
			function generateCircles3() {
			setTimeout(function() {
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-130),(y-430)+ yPos, size);
			circle1.attr("fill", "black");
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
		 	if (totalDelay <5) {
			setTimeout(function() {
			 totalDelay += 1;
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle = paper.circle((x-210),(y-440)+ yPos, size).attr('fill', "black");
			circle2 = paper.circle((x-130),(y-440)+ yPos, size).attr('fill', "black");
			if (simuli == 1) {
			cirAni = Raphael.animation({cx: x -640+yPos, cy: (y-70)  }, time, generateCircles3());
			circle.animate(cirAni.delay(100));
			circle2.animate(cirAni.delay(100));
				}
			}, 150);
			}
		}
			function generateCircles3() {
			setTimeout(function() {
			var yPos = y + Math.floor(Math.random() * (30 - 1 + 1) + 1);
			var size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
			circle1 = paper.circle((x-160),(y-440)+ yPos, size);
			circle1.attr("fill", "black");
			if (simuli == 1) {
			cirAni1 = Raphael.animation({ cx: x-640+yPos, cy:(y-70) }, time, generateCircles2());
			circle1.animate(cirAni1.delay(100));
				}
			}, 150);
			}
	generateCircles2();		
	}	
}

//if(meterguage==1){
//	meterguage2();
//	//meterguage1();
//}else if(meterguage==2){
//	meterguage2();
//}else{
//	meterguage2();
//	//meterguage3();
//}
//
//50 value metergauge 
var sp;
function meterwork(){
	if(a == 50){
      x1 = x-528 , y1 = y-307;
     }else if(a == 55){
	  x1 = x-563 , y1 = y-334;
     }else{
	  x1 = x-598 , y1 = y-361; 
     } 

	 sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -40  l -41 -41 ").attr({'stroke':' #cb9931  ','stroke-width':7});
arc= paper.path("   M "+(x1+160)+" "+(y1+110.5)+ " A 4.8 3.8 75 0 1 "+(x1+265)+" "+(y1+111)+" M     l -25 20  ").attr({'stroke':'#cb9931','stroke-width':7});
    mline.toFront();
//    	arc_anim= paper.path( "M "+(x1+160.5)+" "+(y1+110.5)+ " A 5.5  3.7  90 0 1 "+(x1+265)+" "+(y1+111)+" M     l -22 17  ").attr({'stroke':'#cb9931','stroke-width':5});
	
}

   function meterguage2(){
//	var circle1 = paper.circle(x1+200, y1+98, 60).attr({'gradient': '90-#e6e7e8-#595959','stroke-width': 5,'stroke-linejoin': 'round'});
//Border circle 
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
 Img = paper.image("images/wheel1.png",(x1+170), (y1+71.9), 60, 60);;
sectorImg = paper.image("images/sectorview.png",(x1+211.8), (y1+95.2), 35, 40);
Img.toBack();
triangle.toBack();
mline.toFront();

}


var spring_flag=0;



function surface(){
	 surf = paper.path("M"+(x+250)+" "+(y-150)+"l 150 0 l 0 -210 l -150 0 l 0 210")
	.attr({'stroke' : '#70706f'  , 'fill':'#b6bda6','stroke-width': 2 });
}

function weight5(x,y){
	
  txt_weight = "10kgf";
  wt5mx = 260, wt5my = 182, wt5rx = 130, wt5ry = 30 , txtwx = 325, txtwy = 167;
  wt5 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt5;
   textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
   txtAnim = txt_weight;
  
}

function weight2(x,y){
  txt_weight = "5kgf";
  wt5mx = 267, wt5my = 214, wt5rx = 115, wt5ry = 30 , txtwx = 325, txtwy = 200;
  wt2 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt2;
  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
  txtAnim = txt_weight;
}

function weight1(x,y){
  txt_weight = "2kgf";
  wt5mx = 274, wt5my = 246, wt5rx = 100, wt5ry = 30 , txtwx = 325, txtwy = 233;
  wt1 = paper.rect((x+wt5mx),(y-wt5my), wt5rx, wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt1;
  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
  txtAnim = txt_weight;
}

function weight500(x,y){
  txt_weight = "1kgf";
  wt5mx = 281, wt5my = 278, wt5rx = 85, wt5ry = 30 , txtwx = 325, txtwy = 264;
  wt500 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt500;
  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
  txtAnim = txt_weight;
}

function weight100(x,y){
   txt_weight = "500gf";
   wt5mx = 288, wt5my = 310, wt5rx = 70, wt5ry = 30 , txtwx = 325, txtwy = 295;
  wt100 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt100;
  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
  txtAnim = txt_weight;
}

function weight50(x,y){
   txt_weight = "100gf";
   wt5mx = 298, wt5my = 342, wt5rx = 55, wt5ry = 30 , txtwx = 325, txtwy = 326;
  wt50 = paper.rect((x+wt5mx),(y-wt5my), wt5rx,wt5ry,5).attr({'stroke-width': 2,'gradient': '160-#A9A9A9-#D3D3D3'});
  wt = wt50;
  textW = paper.text(x+txtwx,y-txtwy,txt_weight).attr({'fill':'black','font-weight':'bold','font-size' : 15});
  txtAnim = txt_weight;
}


function remove_Weight_label(){
	
	 rec = paper.rect(x+270,y-130,120,30,5).attr({'stroke-width': 2, 'fill':'#d483b8'});
	 rec_text = paper.text(x+329,y-115," Remove Weight ").attr({'font-weight':'bold','font-size' : 15});

}

// platform click
pf.click( function(){
      var up_lift;
      pf_flag = 1;
	  if(a == 50){
		up_lift = -a+34;
		up_anim = up_lift-50;
	}else if(a == 55){
		up_lift = -a+37;
		up_anim = up_lift-56;

	}else{
		up_lift = -a+40;
		up_anim = up_lift-62;

	}
         pf.animate({path: Raphael.transformPath("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ", 'T 0 '+up_anim)}, time);	    
	                          
	    var _transformedPath1 = Raphael.transformPath("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)
	                   
	                       , 'T 0 '+up_anim);

	    pis.animate({path: _transformedPath1}, time); 
  blank_rec = paper.rect(x-50,y-130,150,120).attr({'stroke':'#fff','fill':'#fff'});

   pis1.toFront();
   pis.toFront();  
   l.toFront(); 
   pf.toFront();
	  
});

textW = txtAnim;


// vertical piston move

pis.click( function(){
      var up_lift;
      pf_flag = 0;
	  if(a == 50){
		up_lift = -a+34;
	}else if(a == 55){
		up_lift = -a+37;
	}else{
		up_lift = -a+40;
	}
	
	  var _transformedPath_p1 = Raphael.transformPath("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ", 'T 0 '+(-up_lift-(b-(b/3)-1)));
         pf.animate({path: _transformedPath_p1}, time);	
//        pf.animate({path: Raphael.transformPath("M"+sxp+" "+syp+" l 0 "+(-1.64*a)+" l "+(-1.4*a)+" 0 l 0 "+(-b/2)+" l "+(3*a)+" 0 l 0 "
//	                          +(b/2)+" l "+(-1.4*a)+" 0 l 0 "+(1.64*a)+" z ", 'T 0 '+(up_lift-50))}, time);	 
      
      var _transformedPath1 = Raphael.transformPath("M"+sx+" "+sy+" l "+rec_wid+" 0 l 0"+(-b*1.5)+" l "+(-rec_wid)+" 0 l 0 "+(b*1.5)	                   
	                       , 'T 0 '+(-up_lift-(b-(b/3)-1)));
//, 'T 0 '+(-up_lift-(b-(b/3)))
	    pis.animate({path: _transformedPath1}, time); 
	     	    
blank_rec = paper.rect(x-50,y-150,150,80).attr({'stroke':'#fff','fill':'#fff'});


   pis1.toFront();
   pis.toFront();
   
	l.toFront();
   pf.toFront();
});

// horizontal plunger moving forward

var hflag = 0;
var hndl = 0;
var forward = -2;
var forward_55 = 0;
var forward_60 = 0;

minus.click(function(){
	
if(a == 50){
	
if(forward >= -2){
	     
	      hndl=hndl-15;
	 h_img.animate({'transform':'r'+(hndl)+''},time);
	      forward = forward+5;

	console.log("minus clicks "+forward);
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward+' 0');

        h.animate({path: _transformedPath}, time);
        r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a)+" 0 z") },time);
 hflag--;
 

 console.log("value of handle1 "+hndl);
}
  if(forward > 58){
	forward = 58;
	h_img.animate({'transform':'r0'},time);
	
//	hflag = 0;
     alert("Minimum limit...");
	 
	
	
}
}else if(a == 55){
	
	if(forward_55 >= 0){
	     	      hndl=hndl-15;
	 h_img.animate({'transform':'r'+(hndl)+''},time);

	      forward_55 = forward_55+5;

	console.log("minus clicks "+forward_55);
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward_55+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward_55+' 0');

        h.animate({path: _transformedPath}, time);
        r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a)+" 0 z") },time);
 hflag--;
 

 console.log("value of handle1 "+hndl);
}
  if(forward_55 > 65){
	forward_55 = 65;
//	hflag = 0;
     alert("Minimum limit...");
	 h_img.animate({'transform':'r0'},time);
	
	
}
	
}else{
	
	if(forward_60 >= 0){
	     
	      forward_60 = forward_60+5;
	      hndl=hndl-15;
	 h_img.animate({'transform':'r'+(hndl)+''},time);

	console.log("minus clicks "+forward_60);
	var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward_60+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward_60+' 0');

        h.animate({path: _transformedPath}, time);
        r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a)+" 0 z") },time);
 hflag--;
 

 console.log("value of handle1 "+hndl);
}
  if(forward_60 > 70){
	forward_60 = 70;
//	hflag = 0;
	 h_img.animate({'transform':'r0'},time);

     alert("Minimum limit...");
	
	
}
	
}
})


plus.click(function(){
if(a == 50){
	if(forward <= 58 ){
	console.log("plus clicks "+forward);
	   
       hndl=hndl+15; 
       h_img.animate({'transform':'r'+(hndl)+''},time);
     
         forward = forward-5; 
         
         
	 var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward+' 0');

        h.animate({path: _transformedPath}, time);   
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a+(forward))+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a+(-forward))+" 0 z") },time);
    
hflag++;
 
 console.log("value of handle1 "+hndl);
 } 
 if(forward < -2 ){
	forward = -2;
//	hflag = 0;
	 h_img.animate({'transform':'r0'},time);
	alert("Maximum limit...");
}
} else if(a == 55){
	
		if(forward_55 <= 65){
	console.log("plus clicks "+forward_55);
	   
       hndl=hndl+15; 
       h_img.animate({'transform':'r'+hndl+''},time);
     
         forward_55 = forward_55-5; 
         
         
	 var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward_55+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward_55+' 0');

        h.animate({path: _transformedPath}, time);   
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a+(forward_55))+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a+(-forward_55))+" 0 z") },time);
    
hflag++;
 
 console.log("value of handle1 "+hndl);
 } 
 if(forward_55 < 0){
	forward_55 = 0;
//	hflag = 0;
	 h_img.animate({'transform':'r0'},time);
	alert("Maximum limit...");
}
	
}
else{
		if(forward_60 <= 70){
	console.log("plus clicks "+forward_60);
	   
       hndl=hndl+15; 
       h_img.animate({'transform':'r'+hndl+''},time);
     
         forward_60 = forward_60-5; 
         
         
	 var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+forward_60+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	

      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+forward_60+' 0');

        h.animate({path: _transformedPath}, time);   
  r1.animate({path:Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a+(forward_60))+" 0 "+"l 0 "+(a-1)+" l "+(block_ht*a+(-forward_60))+" 0 z") },time);
    
hflag++;
 
 console.log("value of handle1 "+hndl);
 } 
 if(forward_60 < 0){
	forward_60 = 0;
//	hflag = 0;
	 h_img.animate({'transform':'r0'},time);
	alert("Maximum limit...");
}

	
}
})



h.click( function() {
 
     var _transformedPath_p = Raphael.transformPath("M"+(x+(px*a))+" "+(y +163-b)+" l 0 "+(-b)+" l "+(-a-10)+ " 0 l 0 "+a+ " l "+(a+10)+" 0 l 0 "+(-b) , 'T '+a+' 0 ' );
         p.animate({path: _transformedPath_p}, time);	
         
      var _transformedPath = Raphael.transformPath("M"+(x+(hx*a))+" "+(y+161-(b))+" l "+(-3.2*(a))+" 0 "+" l 0 "+(b/4)+" l "+(3.2*(a))+" 0 l "+(b+5)+" 0 l 0 "+(1.5*a)+" l "+(b/4)+" 0 "
	                                             +" l 0 "+(-3.2*a)+" l "+(-b/4)+" 0 l 0 "+(1.58*a)+" z " , 'T '+a+' 0');

        h.animate({path: _transformedPath}, time);  
       var _transformedPath2 = Raphael.transformPath("M"+(x+(hx*a-block))+" "+(y+161-(b))+"l 0 "+(-b+3)+" l "+(-block_ht*a)+" 0 "+"l 0 "+(a-1)
	                            +" l "+(block_ht*a)+" 0 z", ' T 0 0 ');

	    r1.animate({path: _transformedPath2}, time);   
       
 
});

wt50.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight50(x-290,y+289-wt_ht);
	}else if(a == 55){
		weight50(x-297,y+271-wt_ht);
	}else{
		weight50(x-303,y+253-wt_ht);
	}
	}else{
		if(a == 50){
		weight50(x-290,y+223-wt_ht);
	}else if(a == 55){
		weight50(x-295,y+192-wt_ht);
	}else{
		weight50(x-303,y+171-wt_ht);
	}
		
	}
	
	weight12 = 0.1;
	  weight11 += weight12;
	   wt_ht += 30;
           flag++;
           cnt++;
//           wt_arr[cnt] = wt;
         
        console.log(weight11); 
         console.log("counter : "+cnt);   
  
//         console.log("www "+weight12);
	});

 wt100.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight100(x-290,y+257-wt_ht);
	}else if(a == 55){
		weight100(x-297,y+239-wt_ht);
	}else{
		weight100(x-303,y+221-wt_ht);
	}
	}else{
		if(a == 50){
		weight100(x-290,y+191-wt_ht);
	}else if(a == 55){
		weight100(x-295,y+165-wt_ht);
	}else{
		weight100(x-303,y+139-wt_ht);
	}
		
	}
	
	weight12 = 0.5;
	  weight11 += weight12;
	   wt_ht += 30;
           flag++;
           cnt++;
//           wt_arr[cnt] = wt;
         
        console.log(weight11); 
         console.log("counter : "+cnt);   
  
//         console.log("www "+weight12);
	});
	
	 wt500.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight500(x-290,y+225-wt_ht);
	}else if(a == 55){
		weight500(x-298,y+207-wt_ht);
	}else{
		weight500(x-305,y+189-wt_ht);
	}
	}else{
		if(a == 50){
		weight500(x-290,y+159-wt_ht);
	}else if(a == 55){
		weight500(x-298,y+133-wt_ht);
	}else{
		weight500(x-305,y+107-wt_ht);
	}
	}
	weight12 = 1;
	  weight11 += weight12;
		  
	   wt_ht += 30;
           flag++;
             cnt++;
            console.log("counter : "+cnt);  
            console.log(weight11);
//             console.log("www "+weight12);
	});
	
	wt1.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight1(x-290,y+193-wt_ht );
	}else if(a == 55){
		weight1(x-298,y+175-wt_ht);
	}else{
		weight1(x-306,y+157-wt_ht);
	}
	}else{
		if(a == 50){
		weight1(x-290,y+127-wt_ht );
	}else if(a == 55){
		weight1(x-298,y+101-wt_ht);
	}else{
		weight1(x-306,y+75-wt_ht);
	}
		
	}
	   weight12 = 2;
	  weight11 += weight12;
	   wt_ht += 30;
           flag++;
            cnt++;
       console.log("counter : "+cnt);  
      console.log(weight11);
//       console.log("www "+weight12);
	});

  wt2.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight2(x-290,y+161-wt_ht);
	}else if(a == 55){
		weight2(x-297,y+143-wt_ht);
	}else{
		weight2(x-304,y+125-wt_ht);
	}
	}else{
		if(a == 50){
		weight2(x-290,y+95-wt_ht);
	}else if(a == 55){
		weight2(x-297,y+69-wt_ht);
	}else{
		weight2(x-304,y+43-wt_ht);
	}
	}
	 weight12 = 5;
	  weight11 += weight12;
	   wt_ht += 30;
           flag++;
            cnt++;
            console.log("counter : "+cnt);  
      console.log(weight11);
//       console.log("www "+weight12);
	});
	
	wt5.click(function(){
	if(pf_flag == 0)
	{
	if(a == 50){
		weight5(x-290,y+129-wt_ht);
	}else if(a == 55){
		weight5(x-297,y+111-wt_ht);
	}else{
		weight5(x-304,y+93.2-wt_ht);
	}
	}else{
		if(a == 50){
		weight5(x-290,y+63-wt_ht);
	}else if(a == 55){
		weight5(x-297,y+37-wt_ht);
	}else{
		weight5(x-304,y+11-wt_ht);
	}
		
	}	
	weight12 = 10;
	  weight11 += weight12;
	   wt_ht += 30;
       flag++;
        cnt++;
        console.log("counter : "+cnt);  
//       console.log("www "+weight12);
   console.log(weight11);
	});
	
	wt = wt_ht;
	var y2 =0;
	var rem;
	
	function weight_remove(){
		console.log("sneha weight : "+weight11);
		var wt = 0;
		 cnt--;
            console.log("counter dec : "+cnt);  
		if(a == 50){	
		
		if(pf_flag == 1){
		wt = wt_ht+33;
	    y2 = -wt-88.5;	
		}else{
		wt = wt_ht+33;
	    y2 = -wt-22;	
	    }
   rem = paper.path('M' +(x+35)+ ' ' +(y+y2)+ 'l 0 0').attr({'stroke':'#000' , 'stroke-width':'180'});
			 rem.animate( {path:"M"+ (x+35) +" "+ (y+y2) +"  l 0 32.1 ", 'stroke-width': '180', 'stroke':'#fff',
			opacity : 1}, 		  
			
			)}; 
	if(a == 55){
		if(pf_flag == 1){
		wt = wt_ht+34;
	y2 = -wt-93.7;	
		}else{
		wt = wt_ht+33;
	y2 = -wt-20.7;
	    }
   rem = paper.path('M' +(x+35)+ ' ' +(y+y2-20)+ 'l 0 0').attr({'stroke':'#fff' , 'stroke-width':'180'});
			 rem.animate( {path:"M"+ (x+35) +" "+ (y+y2-20) +"  l 0 32.8 ", 'stroke-width': '180', 'stroke':'#fff',
			opacity : 1}, 
			); 
	}if(a == 60){
		if(pf_flag == 1){
		wt = wt_ht+33;
	y2 = -wt-100.6;
		
		}else{
		wt = wt_ht+32.8;
	y2 = -wt-18.7;
	    }
	
   rem = paper.path('M' +(x+35)+ ' ' +(y+y2-40)+ 'l 0 0').attr({'stroke':'#fff' , 'stroke-width':'180'});
			 rem.animate( {path:"M"+ (x+35) +" "+ (y+y2-40) +"  l 0 32.2 ", 'stroke-width': '180', 'stroke':'#fff',
			opacity : 1}, 
			); 
	}
		
	}

var weight_blocks = 0;


function remove_weight_val(){
	
	weight_blocks = (wt_ht+30)/30;
	
//	console.log("weights are :"+weight_blocks);
}
			
 rec.click(function(){ 
	
	 wt_ht -= 30;
       flag--;
       
	if(wt_ht < 0)
	 {
		wt_ht = 0;		
			cnt = 0;	
	alert(" Add weight on platform ");
     }else{	
		  weight_remove();
		  remove_weight_val();
		  weight11 -= weight12;
		  console.log(weight11);	
		    pf.toFront();				  	
}
	
})
var weight13 = 0
rec_text.click(function(){ 
	
	 wt_ht -= 30;
       flag--;
	if(wt_ht < 0)
	 {
		wt_ht = 0;	
		cnt = 0;	
	alert(" Add weight on platform ");
     }else{	
		  weight_remove();
		  remove_weight_val();
		weight11 -= weight12;
		  console.log(weight11);
		  pf.toFront();			  	
}	
  
})

 M_valve.click( function(){
	var weight_M = weight11;
var unit1=270/meterguage;
var angle= unit1*weight_M;

console.log("surbhi weight"+weight11);
console.log("surbhi angle"+angle);
	if(spring_flag==0){
 	 sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -40  l -41 -41 ").attr({'stroke':' #cb9931  ','stroke-width':7});

 	var r = Raphael.animation({ 'transform':  'r'+-angle1+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
    Img.animate(r);
  
 	var r1 = Raphael.animation({ 'transform':  'r'+(angle1)+ ', '+(x1+233.9)+', '+(y1+121.9)+' '}, 1000 );	
    sectorImg.animate(r1);
	spring_flag++;
	
	keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');	
	mline.animate(keepRotating);

	var keep = Raphael.animation({path:"M "+(x1+160.5)+" "+(y1+110.5)+ " A 5.5  3.7  90 0 1 "+(x1+265)+" "+(y1+111)+" M     l -22 15  "}, 5000,'elastic');
	arc.animate(keep);
}else{
	 sp= paper.path("M "+(x1+200)+" "+(y1+190)+ "l 0 -40  l -41 -41 ").attr({'stroke':' #cb9931  ','stroke-width':7});

 	 	var r = Raphael.animation({ 'transform':  'r'+angle1+ ', '+(x1+200)+', '+(y1+97.2)+' '}, 1000 );	
    Img.animate(r);
    
 	var r1 = Raphael.animation({ 'transform':  'r'+(-angle1-20)+ ', '+(x1+233.9)+', '+(y1+121.9)+' '}, 1000 );	
    sectorImg.animate(r1);
	
	spring_flag=0;
	 keepRotating = Raphael.animation({ 'transform':  'r'+(-angle1-15)+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic');	
   mline.animate(keepRotating);

var keep = Raphael.animation({path: "M "+(x1+200)+" "+(y1+150.5)+ "      M "+(x1+160)+" "+(y1+110)+ " A 4.8 3.8 75 0 1 "+(x1+265)+" "+(y1+111)+" M     l -25 20  "
}, 5000,'elastic');
arc.animate(keep);

}

	var arry=[];
	var anim = Raphael.animation({ fill: "#2da60f" ,'stroke' : "#000" , 'stroke-width' : 2},1000,"bounce");
       M_valve.animate(anim);  
       
           
     if(a==50){
	x1 = x-528 , y1 = y-308.4;
// 	 keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating); 
	    arry[0]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':36});
		arry[0].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+137.9+(-2.3*a))+'l 0  '+(-a*2.3)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':11.5});
		arry[1].animate({path :'M'+(x-524.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b+5.4)+' '},time, function(){ 		
		var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'fill':'#6b5c3d','opacity':0.1});	
		 });
		});

		
	} else if(a==55){
		x1 = x-560 , y1 = y-334;
// 	keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+196.6)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' );
//	    mline.animate(keepRotating);
	    arry[0]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':40});
		arry[0].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+139+(-2.3*a))+'l 0  '+((-a*2.3)-2.7)+' '},time, function(){ 
			
	    arry[1]=paper.path('M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':12.3});
		arry[1].animate({path :'M'+(x-579+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b-6)+' '},time-1000, function(){ 
		
		var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'fill':'#6b5c3d','opacity':0.1});	
			
		});
				
		});    
	}else{
// 	keepRotating = Raphael.animation({ 'transform':  'r'+angle+ ', '+(x1+200)+', '+(y1+98)+' '}, 5000 ,'elastic').repeat( 'infinity' ).delay(1500);
//	mline.animate(keepRotating); 
	   
	arry[0]=paper.path('M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':42.8});
	arry[0].animate({path :'M'+(x-633.4+(3.9*a))+ ' ' +(y+140.3+(-2.3*a))+'l 0  '+(-a*2.4)+' '},time, function(){ 
			
	arry[1]=paper.path('M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  0').attr({'stroke':'#6b5c3d','stroke-width':13.2});
	arry[1].animate({path :'M'+(x-633.5+(3.9*a))+ ' ' +(y+24+(-2.3*a))+'l 0  '+(-b*1.7)+' '},time-700, function(){ 
		
	var circleB3 = paper.circle(x1+200, y1+98, 92).attr({'fill':'#6b5c3d','opacity':0.1});	
//	var keep = Raphael.animation({path:"M "+(x1+200)+" "+(y1+150)+ "l -21.2 -20     M "+(x1+179.2)+" "+(y1+130.5)+ " A 20 25 -45 0 1 "+(x1+240)+" "+(y1+75)+" M     l -10 30 l -30 -8"}, 5000,'elastic');
//    arc.animate(keep);


// 	var r = Raphael.animation({ 'transform':  'r'+angle1+ ', '+(x1+200)+', '+(y1+98)+' '}, 3000 );	
//    Img.animate(r);
//    Img.toBack();
//    triangle.toBack();

		});
				
		});
	}

       R_valve.toFront();
	  M_valve.toFront();
	
   });

console.log("value of weight"+weight11);
console.log("value of unit1"+unit1);
}
  