//https://www.nike.com.br/calendario-lancamentos

var dados = "Nome;Link;Id;Mês;Dia;Hora;\n";
for(var i=0;i<$("div[class='exp-calendar-card']").length;i++){
	dados+=$("h3[class='exp-calendar-card-title title']")[i].innerHTML+";";
	dados+=$("a[class='exp-calendar-link']")[i].href+";";
	dados+=$("div[class='exp-calendar-card']")[i].id+";";
	dados+=$("div[class='exp-calendar-card-month title']")[i].innerHTML+";";
	dados+=$("div[class='exp-calendar-card-day title']")[i].innerHTML+";";
	dados+=$("div[class='exp-calendar-card']")[i].getAttribute("data-timelaunch")+";\n";
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

download('teste.csv',dados);