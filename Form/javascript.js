var patt = /^[А-ЗЙ-ЩЮ-щьюяЄєЇїІі]{1,25}[']?[А-ЗЙ-ЩЮ-щьюяЄєЇїІі]{1,25}$/;
var err1 = "Незаповнене поле";
var err2 = "Допустимі символи: А-Я, а-я, '";
var err3 = "Неправильний формат";
var err4 = "Введено НЕ цифри";
var err5 = "Ви забули вказати стать";
var err6 = "Ви забули обрати оператора";
var err7 = "Виберіть хоча б один колір";
var err8 = "Виберіть не більше 3-х кольорів";
var err9 = "Як мінімум 15 символів";

function showError(container, errorMessage)
{
    container.classList.add('error');
    msgElem = document.createElement('div');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container)
{
    if(container.classList.contains('error'))
		container.classList.remove('error');
    if (container.lastChild.className == "error-message")
		container.removeChild(container.lastChild);
	
}

function v_name(elem)
{
	resetError(elem.parentNode);
	if(elem.value == ""){
		showError(elem.parentNode, err1);
		return false;
	}
	else if(!patt.test(elem.value)){
		showError(elem.parentNode, err2);
		return false;
	}
	else return true;
}

function v_email(elem)
{
	resetError(elem.parentNode);
	if(elem.value == ""){
		showError(elem.parentNode, err1);
		return false;
	}
	else if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(elem.value)){
		showError(elem.parentNode, err3);
		return false;
	}
	else return true;
}

function v_phone(elem)
{
	resetError(elem.parentNode);
	if(elem.value == ""){
		showError(elem.parentNode, err1);
		return false;
	}
	else if(!/^(\+380|0)\d{9}$/g.test(elem.value)){
		showError(elem.parentNode, err3);
		return false;
	}
	else return true;
}

function v_age(elem)
{
	resetError(elem.parentNode);
	if(elem.value == ""){
		showError(elem.parentNode, err1);
		return false;
	}
	else if(!/^\d+$/.test(elem.value)){
		showError(elem.parentNode, err4);
		return false;
	}
	return true;
}

function v_sex(elem)
{
	var i;
	resetError(elem.item(0).parentNode.parentNode);
	for (i = 0; i < elem.length; i++){
		if(elem.item(i).checked)
			return true;
	}
		showError(elem.item(0).parentNode.parentNode,err5);
		return false;
}

function v_oper(elem)
{
	resetError(elem.parentNode);
	if(elem.value == "null"){
		showError(elem.parentNode,err6);
		return false;
	}
	else return true;
}

function v_color(elem)
{
	resetError(elem.item(0).parentNode.parentNode.parentNode.parentNode);
	var i, j = 0;
	for(i = 0; i < elem.length; i++){
		if(elem.item(i).checked) j++;
	}
	if(j == 0){
		showError(elem.item(0).parentNode.parentNode.parentNode.parentNode,err7);
		return false;
	}
	else if (j > 3){
		showError(elem.item(0).parentNode.parentNode.parentNode.parentNode,err8);
		return false;
	}
	else return true;
}

function v_msg(elem)
{
	resetError(elem.parentNode);
	var len = elem.value.length;
	if(len < 15){
		showError(elem.parentNode,err9);
		return false;
	}
	else return true;
}

function validate(mForm){
	var v1 = v_name(mForm.name);
	var v2 = v_name(mForm.surname);
	var v3 = v_email(mForm.email);
	var v4 = v_phone(mForm.phone);
	var v5 = v_age(mForm.age);
	var v6 = v_sex(mForm.sex);
	var v7 = v_oper(mForm.oper);
	var v8 = v_color(mForm.color);
	var v8 = v_msg(mForm.msg);
	return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8;
}

function success(){
	alert("Success");
}