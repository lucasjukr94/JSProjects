var globalId = 0;
//Cria div que vai conter as caixas de mensagens
$(document).ready(function(){
	document.body.innerHTML += "<div style='position:absolute;bottom:50px;right:50px;width:350px;' id='boxAlert'>";
});
//Exclui caixa de alerta
function closeAlertBox(index){
	$("#alertBox_"+index).remove();
}
//Cria caixa de alerta
function alertBox(msg,titulo){
	document.getElementById("boxAlert").innerHTML += "<div id='alertBox_"+globalId+"' style='width:300px;background-color:rgba(125,150,130,0.5);border-radius:10px;float:left;padding:20px;margin-top:10px;'>" +
		"<div>" +
			"<b>"+titulo+"</b>" +
			"<div style='float:right;'>" +
				"<a href='#' onclick='closeAlertBox("+globalId+")' >X</a>" +
			"</div>" +
		"</div>" +
		"<div>" +
			"<p>"+msg+"</p>" +
		"</div>" +
	"</div>";
	
	globalId++;
}