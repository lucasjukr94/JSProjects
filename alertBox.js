var globalId = 0;
var globalAlertCount = 0;
var timeOutArray = [];
//Cria div que vai conter as caixas de mensagens
$(document).ready(function(){
	document.body.innerHTML += "<div style='position:absolute;bottom:50px;right:50px;width:370px;><div style='width:100%;' id='boxAlert'></div></div>";
});
//Exclui caixa de alerta
function closeAlertBox(index){
	//$("#alertBox_"+index).fadeOut("slow",function(){$("#alertBox_"+index).remove();});
	$("#alertBox_"+index).animate({width:"-=250px"},500,function(){$("#alertBox_"+index).remove();});
	globalAlertCount--;
	//alertBoxOpacity();
}
//Cria caixa de alerta
function alertBox(msg,titulo,tipo){
	console.log(tipo);
	switch(tipo){
		case 'success':
			document.getElementById("boxAlert").innerHTML += "<div class='alert alert-success alert-dismissible' id='alertBox_"+globalId+"' data-alert-box='"+globalId+"'><a href='#' onclick='closeAlertBox("+globalId+")' class='close'>&times;</a><h4><i class='icon fa fa-check'></i> "+titulo+"</h4>"+msg+"</div>"
			break;
		case "warning":
			document.getElementById("boxAlert").innerHTML += "<div class='alert alert-warning alert-dismissible' id='alertBox_"+globalId+"' data-alert-box='"+globalId+"'><a href='#' onclick='closeAlertBox("+globalId+")' class='close'>&times;</a><h4><i class='icon fa fa-warning'></i> "+titulo+"</h4>"+msg+"</div>"
			break;
		case "danger":
			document.getElementById("boxAlert").innerHTML += "<div class='alert alert-danger alert-dismissible' id='alertBox_"+globalId+"' data-alert-box='"+globalId+"'><a href='#' onclick='closeAlertBox("+globalId+")' class='close'>&times;</a><h4><i class='icon fa fa-ban'></i> "+titulo+"</h4>"+msg+"</div>"
			break;
		case "custom":
			document.getElementById("boxAlert").innerHTML += "<div id='alertBox_"+globalId+"' data-alert-box='"+globalId+"' style='width:300px;background-color:rgba(125,150,130,0.5);border-radius:10px;float:left;padding:20px;margin-top:10px;'><div><b>"+titulo+"</b><div style='float:right;'><a href='#' onclick='closeAlertBox("+globalId+")' >X</a></div></div><div><p>"+msg+"</p></div></div>";
			break;
		default:
			//info
			document.getElementById("boxAlert").innerHTML += "<div class='alert alert-info alert-dismissible' id='alertBox_"+globalId+"' data-alert-box='"+globalId+"'><a href='#' onclick='closeAlertBox("+globalId+")' class='close'>&times;</a><h4><i class='icon fa fa-info'></i> "+titulo+"</h4>"+msg+"</div>"
			break;
	}
	timeOut(globalId);
	globalId++;
	globalAlertCount++;
	//alertBoxOpacity();
}
function timeOut(globalId){
	timeOutArray.push(setTimeout(function(){ closeAlertBox(globalId); }, 10000));
}
//Atualiza a opacidade das caixas de alerta
function alertBoxOpacity(){
	opa=1;
	for(var i=globalAlertCount-1;i>=0;i--){
		$("div[data-alert-box]")[i].style.opacity = opa;
		opa-=0.1;
	}
}