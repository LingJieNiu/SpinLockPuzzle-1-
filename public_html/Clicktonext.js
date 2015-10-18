var count=0;
function ClickToNext(){
    var index=1;
	
        var array=new Array();
        
	var getstring=document.getElementById("new").value;
        array=getstring.split(",");
       // var array=getData();
        //console.log(typeof array);
       // console.log(array);
	var newdata=array[count];
        document.getElementById("newdata").value=newdata;
	var olddata=document.getElementById("olddata").value.split(",");
	
	var sum=rundata(newdata,olddata);
       // console.log(sum);
       // console.log(typeof sum);
       
     
         if(sum==0){  
             
              document.getElementById("showit1").innerHTML = "The"+index+"'th spinner puzzle finish,continue click\n\
                                                                to do next ";
        
        index++;
         
    }else if (sum==1){
        
         document.getElementById("showit1").innerHTML= "spinner puzzle stop in here";
         return 0;
             
    }else{
        
          showdata(sum);
    }
     
            
       
        
        
        
        
	//showdata(sum);
	
    
 return	count++;
}