// Animação de movimentação
function doAnim(){
	document.getElementById(infoBox).style.opacity = 0;
	elem = document.getElementById(contentBox).firstElementChild;
	elemCont = document.getElementById(limitCont);
			
	// Pega os valores das divs para poder fazer a animação
	move = window.getComputedStyle(elem).marginTop;
	height = window.getComputedStyle(elemCont).height;
			
	var divmarginTop = parseFloat(move.split("px"));
	var divHeight = parseFloat(height.split("px"));
			
	// Subtrai 10px para que seja setado como novo valor
	stringCalc = Math.round(divmarginTop - 10);
	// Verifica se já atingiu o limite da div se sim coloca o primeiro conteudo como último e reseta a posição da margem e inicia a animação do conteudo interno. Caso contrário volta ao começo e faz tudo de novo
	if (stringCalc > -divHeight){
    	elem.style.marginTop = stringCalc+"px";
		setTimeout(doAnim, 20);			
	}else{
		firstElement = elem.children[0];                                        
		elem.appendChild(firstElement);
		elem.style.marginTop = "0px";
		setTimeout(doFade, 20);
		if(loop == true){
			setTimeout(doAnim, delayTime);
		}				
	}
}

// Animação de fade
function doFade(){
	elem = document.getElementById(infoBox);
	opacity = window.getComputedStyle(elem).opacity;
	new_valor = Math.round(10*opacity + 1)/10;
	if (new_valor < 1){
		elem.style.opacity = new_valor;
		setTimeout(doFade, 30)
	}
}

function typeSearch() {
	var varInput = document.getElementById(inputBox).value;
	var divValue = document.getElementById(contentText).textContent;

	if(varInput == ""){
		document.getElementById(resultTextBox).innerHTML=divValue;
		document.getElementById(resultBox).innerHTML = "Found 0 occurances of the word \"\" in the below text.";
	}else{
		var n=divValue.replace(new RegExp(varInput,"g"), "<span style=\"background-color:#FF0000;\">"+ varInput +"<\/span>");
		document.getElementById(resultTextBox).innerHTML=n;
		document.getElementById(resultBox).innerHTML = "Found " + (divValue.split(varInput).length - 1) + " occurances of the word \"" + varInput + "\" in the below text.";
	}		
	document.getElementById(formId).onsubmit = function() {
		return false;
	}
}

function showTab() {
	for (i=0; i<numTabs; i++){
    var divCont = tabCont[i];
	var selectedId = this.getAttribute('id');
	var tabId = tabLinks[i];
	
	if(selectedId == tabId){
		document.getElementById(selectedId).className = activeBox;
		document.getElementById(divCont).className = showDiv;
	}else{
		document.getElementById(tabId).className = deactivatedBox;	
		document.getElementById(divCont).className = hideDiv;
	}
	}
	
}
