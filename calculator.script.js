function getvalue(value){
    var data = document.getElementById("calvalue").value += value;
    if(data == ""){
           document.getElementById("calvalue").focus();
           document.getElementById("getcalvalue").value = "";
        }
        else{
           var result = eval(data);
        document.getElementById("getcalvalue").value = result;
        }
  }
  function getvalue1(){
        
        var fresult = document.getElementById("getcalvalue").value;
        document.getElementById("calvalue").value = fresult ;
        document.getElementById("getcalvalue").value = "";
     }
     function getvalue2(){
        document.getElementById("calvalue").value = "" ;
        document.getElementById("getcalvalue").value ="";
     }
     function getvalue3(){
        var clrdata = document.getElementById("calvalue").value;
        var solveddata = clrdata.substring(0,clrdata.length-1);

        

        document.getElementById("calvalue").value=solveddata;
        if(clrdata.length == 1 || clrdata == "" ){
           document.getElementById("calvalue").focus();
           document.getElementById("getcalvalue").value = "";
           
        }
        else{
           document.getElementById("getcalvalue").value = eval(solveddata);
        }
     }