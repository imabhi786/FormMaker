i=0;
j=1;
k=1;
l=1;
m=1;
n=1;
// document.cookie="i=0";
// document.cookie="j=1";
// document.cookie="k=1";
// document.cookie="l=1";
function upi(){
	i=i+1;
}
function upj(){
	j=j+1;
}
function upk(){
	k=k+1;
}
function upl(){
	l=l+1;
}
function upm(){
	m=m+1;
}
function upn(){
	n=n+1;
}

function removeElement(parentDiv, childDiv,val){
 

     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
     if(val==4)
     {
     	m--;
     }
     if(val==5)
     {
     	n--;
     }
     if(val==1)
     {
     	j--;
     }
     if(val==2)
     {
     	k--;
     }
     if(val==3)
     {
     	l--;
     }
}
function namef(){
	var x=document.createElement("span");
	var y=document.createElement("input");
	y.setAttribute("placeholder","Name of the form");
	y.setAttribute("type","text");
	upi();
	y.setAttribute("name","elen_"+m);
	upm();
	if(m>2)
	{
		alert("Cannot have more than one name");
		return;
	}
	x.appendChild(y);
	var z=document.createElement("button");
	var w=document.createElement("i");
	w.setAttribute("class","fa fa-trash");
	z.appendChild(w);
	z.setAttribute("onclick","removeElement('myform','id_"+i+"','4')");
	x.appendChild(z);
	x.setAttribute("id","id_"+i);
	document.getElementById("myform").appendChild(x);
	
}

function heading(){
	var x=document.createElement("span");
	var y=document.createElement("input");
	y.setAttribute("placeholder","Heading of the form");
	y.setAttribute("type","text");
	upi();
	y.setAttribute("name","eleh_"+n);
	upn();
	if(n>2)
	{
		alert("Cannot have more than one heading");
		return;
	}
	x.appendChild(y);
	var z=document.createElement("button");
	var w=document.createElement("i");
	w.setAttribute("class","fa fa-trash");
	z.appendChild(w);
	z.setAttribute("onclick","removeElement('myform','id_"+i+"','5')");
	x.appendChild(z);
	x.setAttribute("id","id_"+i);
	document.getElementById("myform").appendChild(x);
}

function inputfield(){
	var x=document.createElement("span");
	var y=document.createElement("input");
	y.setAttribute("placeholder"," Name of Input_"+j+"");
	y.setAttribute("type","text");
	upi();
	y.setAttribute("name","ele_"+j);
	upj();
	x.appendChild(y);
	var z=document.createElement("button");
	var w=document.createElement("i");
	w.setAttribute("class","fa fa-trash");
	z.appendChild(w);
	z.setAttribute("onclick","removeElement('myform','id_"+i+"','1')");
	x.appendChild(z);
	x.setAttribute("id","id_"+i);
	document.getElementById("myform").appendChild(x);
	console.log(j);
	document.getElementById("j_value").value=j;
}

function radiofield(){
	var x=document.createElement("span");
	var y=document.createElement("input");
	var no_radio=document.createElement("input");
	y.setAttribute("placeholder","Name of Radio_"+k+"");
	y.setAttribute("type","text");
	no_radio.setAttribute("placeholder","Entity Name");
	no_radio.setAttribute("type","text");
	no_radio.setAttribute("style","width:120px;margin:20px");
	var no_radio1=document.createElement("input");
	no_radio1.setAttribute("placeholder","Entity Name");
	no_radio1.setAttribute("type","text");
	no_radio1.setAttribute("style","width:120px;margin:20px");
	var no_radio2=document.createElement("input");
	no_radio2.setAttribute("placeholder","Entity Name");
	no_radio2.setAttribute("type","text");
	no_radio2.setAttribute("style","width:120px;margin:20px");
	upi();
	y.setAttribute("name","rad_"+k);
	y.setAttribute("style","margin-right:130px;margin-left:105px");
    upk();
	x.appendChild(y);
	var z=document.createElement("button");
	var w=document.createElement("i");
	w.setAttribute("class","fa fa-trash");
	z.appendChild(w);
	z.setAttribute("onclick","removeElement('myform','id_"+i+"','2')");
	
	x.appendChild(no_radio);
	x.appendChild(no_radio1);
	x.appendChild(no_radio2);x.appendChild(z);
	x.setAttribute("id","id_"+i);
	document.getElementById("myform").appendChild(x);
	document.getElementById("k_value").value=k;
}

function checkboxfield(){
	var x=document.createElement("span");
	var y=document.createElement("input");
	var no_radio=document.createElement("input");
    no_radio.setAttribute("placeholder","Entity Name");
	no_radio.setAttribute("type","text");
	no_radio.setAttribute("style","width:100px");
    var no_radio1=document.createElement("input");
	no_radio1.setAttribute("placeholder","Entity Name");
	no_radio1.setAttribute("type","text");
	no_radio1.setAttribute("style","width:100px");
	var no_radio2=document.createElement("input");
	no_radio2.setAttribute("placeholder","Entity Name");
	no_radio2.setAttribute("type","text");
	no_radio2.setAttribute("style","width:100px");
	var no_radio3=document.createElement("input");
	no_radio3.setAttribute("placeholder","Entity Name");
	no_radio3.setAttribute("type","text");
	no_radio3.setAttribute("style","width:100px");
	y.setAttribute("placeholder","Name of Checkfield_"+l+"");
	y.setAttribute("type","text");
	y.setAttribute("style","margin-right:130px;margin-left:130px");
	upi();
	y.setAttribute("name","check_"+l);
	upl();
	x.appendChild(y);
	var z=document.createElement("button");
	var w=document.createElement("i");
	w.setAttribute("class","fa fa-trash");
	z.appendChild(w);
	z.setAttribute("onclick","removeElement('myform','id_"+i+"','3')");
	
	x.appendChild(no_radio);
	x.appendChild(no_radio1);
	x.appendChild(no_radio2);
	x.appendChild(no_radio3);
	x.appendChild(z);
	x.setAttribute("id","id_"+i);
	document.getElementById("myform").appendChild(x);
	document.getElementById("l_value").value=l;
}
function reset(){
	document.getElementById("myform").innerHTML=" ";
	i=0;
	j=1;
	k=1;
	l=1;
	m=1;
	n=1;
}
