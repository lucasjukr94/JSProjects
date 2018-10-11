//copiar e colar o código no console do browser
var a='';
for(var i=0;i<$("td[data-real-value]").length;i++){
	if(i%5==0){
		a+='\n'
	}
	a+=($("td[data-real-value]")[i].innerHTML)+';';
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

download('teste.csv',a);