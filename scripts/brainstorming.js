// JavaScript Document

		var count=1;
		var jarray=new Array(100);
	function init(){
		var text1 = new Element('input', {id:'text', size: '30'});
        var add = new Element('button', {'class': 'add', id:'addl',value:'ADD'});
		var fini = new Element('button', {'class': 'finish', id:'fin',value:'FINISH'});
	    $("data-entry").appendChild(text1);
	    $("data-entry").appendChild(add);
      	$("data-entry").appendChild(fini);
		text1.activate();
        $("addl").observe('click',function() {
		//alert(document.getElementById("text").value);
		//var div = new Element('div',{'class': 'divi',id:'div_data_entry_'+count});
		if(document.getElementById("text").value!=""){
		var divt = document.createElement("div");
		divt.id = "div"+count;
		divt.className ="divi";
		divt.innerHTML = document.getElementById("text").value;
		jarray[count]=document.getElementById("text").value;
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
			alert(jarray);
			/*var fso = new ActiveXObject("Scripting.FileSystemObject");
            varFileObject = fso.OpenTextFile("D:\\harshit.txt", 2, true,0); // 2=overwrite, true=create if not exist, 0 = ASCII
			varFileObject.write("hsgha");
			varFileObject.close();*/
			jarray.toJSON();
			alert(jarray);
			//d.removeChild(document.getElementById("data));
									  
									  });
									  
									  
		
		}
	function removeElement()
        {
            var d=document.getElementById('new');
            d.removeChild(document.getElementById(this.parentNode.id));
			count--;
			
		}
			
		