// JavaScript Document

		var count=1;
		var jsarr=new Array();
	function init(){
		var text1 = new Element('input', {id:'text', size: '30'});
        var add = new Element('button', {'class': 'add', id:'addl',value:'ADD'});
		var fini = new Element('button', {'class': 'finish', id:'fin',value:'FINISH'});
		var prin = new Element('button', {'class': 'prin', id:'prin',value:'Show'});
		var load1 = new Element('button', {'class': 'load', id:'load',value:'Load'});
	    $("data-entry").appendChild(text1);
	    $("data-entry").appendChild(add);
      	$("data-entry").appendChild(fini);
		$("data-entry").appendChild(prin);
		$("data-entry").appendChild(load1);
		text1.activate();
        $("addl").observe('click',function() {
		
		if(document.getElementById("text").value!=""){
		var divt = document.createElement("div");
		divt.id = "div"+count;
		divt.className ="divi";
		divt.innerHTML = document.getElementById("text").value;
		jsarr[count]=document.getElementById("text").value;
		divt.contentEditable='true';
		
		var b1=document.createElement('input');
                var b1Id='b'+count+'1';
                b1.type='image';
                b1.src='cross.gif';
				b1.value='X';
                b1.height='20';
                b1.width='20';
				
				b1.setAttribute('id', b1Id);
                b1.onclick=removeElement;
		
		//$("div_data_entry_"+count).innerHTML="shdjf";
		divt.appendChild(b1);
		document.getElementById('new').appendChild(divt);
		count++;
		document.getElementById("text").value="";
		}
		});	
 	$("fin").observe('click',function(){
									  
			document.getElementById('data-entry').removeChild(document.getElementById('text'));
            document.getElementById('data-entry').removeChild(document.getElementById('addl'));
			document.getElementById('data-entry').removeChild(document.getElementById('fin'));
			//d.removeChild(document.getElementById("data));
									  
									  });
	$("prin").observe('click',function(){
									   if(jsarr!="")
									   {
									   
									   jsarr.toJSON();
									   alert(jsarr+"\n JSON CREATED !!!!");
									   }
									   else
									   {
										   alert("Please do some Brainstorming session before creating JSON..");
									   }
									   });
	$("load").observe('click',function(){
									  // var newJ=jsarr.toJSON().evalJSON();
									   //alert(newJ);
									   var name=prompt("Please enter the saved JSON","");
									   var mySplit = name.split(",");
									   count=1;
									   for(i=0;i<mySplit.length;i++)
									   {
										   var divt = document.createElement("div");
											divt.id = "div"+count;
											divt.className ="divi";
											divt.innerHTML = mySplit[i];
											jsarr[count]=mySplit[i];
											divt.contentEditable='true';
											
											var b1=document.createElement('input');
													var b1Id='b'+count+'1';
													b1.type='image';
													b1.src='cross.gif';
													b1.value='X';
													b1.height='20';
													b1.width='20';
													
													b1.setAttribute('id', b1Id);
													b1.onclick=removeElement;
											
											//$("div_data_entry_"+count).innerHTML="shdjf";
											divt.appendChild(b1);
											document.getElementById('new').appendChild(divt);
											count++;
											document.getElementById("text").value="";
									   }
									   });
									 
									  
		}
	function removeElement()
        {
            var d=document.getElementById('new');
            d.removeChild(document.getElementById(this.parentNode.id));
			count--;
			
		}
			
		