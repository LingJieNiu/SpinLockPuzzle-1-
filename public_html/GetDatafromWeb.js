var json;         
  var xmlhttp; 
 function loadXMLDoc(url,cfunc)
{  
  if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }  
  


xmlhttp.onreadystatechange=cfunc;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}



function getData()
{
   
 loadXMLDoc("https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-107230748615/resources/tests/spinlock1",function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
	data= xmlhttp.responseText;
    json = JSON.parse(data); 
    document.getElementById("new").value=json;
	//var array= new Array(20);
	var array=initializeArray();
	document.getElementById("olddata").value=array;
	// console.log(json);
	return json;
        // return json;
        }
        //return json;
    });
	
	//document.getElementById("new").value=json;
	//var array= new Array(20);
	//var array=initializeArray();
	//document.getElementById("olddata").value=array;
	// console.log(json);
	//return json;
	
}