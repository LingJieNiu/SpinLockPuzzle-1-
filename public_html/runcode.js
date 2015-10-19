function rundata(newdata,olddata){
 
 
  
    if (newdata!="x"&& newdata!="z"){
		
		
//	}


/*	
	while(newdata=="z"){
		
		break;
		
	}
	*/
	var sum=new Array();
	var newdata1=newdata.split("");
	 for(var i=0;i<newdata1.length;i++){
	
	
	     //parseInt(sum[i])=(parseInt(sum[i])+parseInt(newarr[i]))%10;
	   sum[i]=(parseInt(newdata1[i])+parseInt(olddata[i]))%10;
	
	    }	  
		  document.getElementById("olddata").value=sum;
	return sum;
    }
    else if(newdata=="x"){
        
        initializeArray(olddata);
       document.getElementById("olddata").value=initializeArray(olddata);
		//ClickToNext();
		
        return 0;
    }else if(newdata=="z"){
        
       return 1;
        
    }
    
}
	
	
	function showdata(sum){
		
	var length1=sum.length;
		 console.log("this is in showdata:"+sum); 
                 console.log(typeof sum); 
                 
	   var thisarray = new Array(length1);
	for(var newarrlength=0; newarrlength<length1; newarrlength++){
	
	  thisarray[newarrlength]=new Array();
      var returnarr=changeseat(sum[newarrlength]);
	  //console.log(returnarr);
	  
       for( var n=0;n<3;n++){	
           
            
	      thisarray[newarrlength][n]= returnarr[n]; 
   
	 
	     }
              
	}
      //   console.log(thisarray[0][0]);
	var line= "<table style='width:30%' border='1'> >";
	for(var a=0;a<3;a++){
	
	 // var thisarray= spinner(newarr[newarrlength]);
	  
	 line+="<tr id='tr"+a+"'>";
	 
    for( var b=0;b<length1;b++)
	 {
	
	     line+="<td id='td"+b+"'>"+thisarray[b][a]+"</td>";
	
	    }
		line+="</tr>";
	}
	line+="</table>";
	
	
		 
		 
	document.getElementById("showit1").innerHTML = line;	 
	
		
		
		
		
		
	}
	
	
	
	
	
	function changeseat(target){

	var array=[0,1,2,3,4,5,6,7,8,9];
	
	//target=(target+target1)%10;
	var arr=[1,0,9];
	var point=2;
	for(var i=0; i<target; i++){
		var temp=arr[0];
		var temp2=arr[1];
		arr[0]=array[point];
		arr[1]=temp;
		arr[2]=temp2;
		point++;
		
		while(point>9){
			point=0;
			
		}
	}
	//arr1=arr;
	return arr;
}
	
	
	
	
	
	
	
	
