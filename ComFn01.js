﻿﻿﻿﻿﻿﻿
function hidestatus()
{
//window.status=''
//return true
}
//if (document.layers)
//document.captureEvents(Event.mouseover | Event.mouseout)
//document.onmouseover=hidestatus
//document.onmouseout=hidestatus

document.onactivate=function(){ 
	var inputs=document.getElementsByTagName("input");

	for (var i=0;i<inputs.length;i++){
		inputs[i].onfocusin = function(){
			if(event.srcElement.type == "text") {
				if(event.srcElement.readOnly) {event.srcElement.blur();return;}
				event.srcElement.style.borderColor='#1487ac';
				event.srcElement.style.backgroundColor='#e5f0f5';
				event.srcElement.style.borderWidth='1';
			}
		}
		inputs[i].onfocusout = function(){
			if(event.srcElement.type == "text") {
				if(event.srcElement.readOnly) {return;}
				event.srcElement.style.borderColor='#dbdbdb';
				event.srcElement.style.backgroundColor='#FFFFFF';
				event.srcElement.style.borderWidth='1';
			}
		}
	}
}

// 권한(st_Mode)를 체크하여 버튼 삭제
function chkAuthBtn(auth_mode) {
	if(auth_mode == "R") {
    	for(i=0; i<document.getElementsByName("Ubtn").length; i++){
     	document.getElementsByName("Ubtn")[i].style.display = "none";
    	}
    }
}

//============================================================================================================
//                                  JavaScript 공통함수 파일
//==============================================================================================================
//  서비스 폴더
//  서비스  ID     commonFnc.js
//  서 비 스 명    공통함수
//  작  성   일    2002.02.22
//  작  성   자    한태길
//  이       력
//
//==============================================================================================================

  //5-2에서 사용 변수
  var color1 = "#f5f7ee";
  var color2 = "";

  var netscape = "";
  ver = navigator.appVersion; len = ver.length;
  for(iln = 0; iln < len; iln++) if (ver.charAt(iln) == "(") break;
  netscape = (ver.charAt(iln+1).toUpperCase() != "C");

  isIE = (navigator.appName.indexOf("Microsoft") != -1) ? true : false;
  if(!isIE){
    alert("이 사이트는 Internet Explorer 전용입니다.");
	document.location="www.microsoft.com";
  }

  //==============================================================================================================
  //-----> 1-1 입력된 문자열에 포함된 특수문자를 Ascii코드값으로 변경하여 리턴한다.(get 방식에서 url을
  //         파라미터값으로 전달시에 적용)
  //==============================================================================================================
  function getAscii(param){
    var newparam = "";
	for (var i=0;i<param.length;i++) {
	  ch = param.charAt(i);
	  if(ch == "&"){
	    ch = "%26";
	  }else if(ch == "/"){
	    ch = "%2F";
	  }else if(ch == "+"){
	    ch = "%2B";
	  }else if(ch == "-"){
	    ch = "%2D";
	  }else if(ch == " "){
	    ch = "+";
	  }else if(ch == "="){
		ch = "%3D";
	  }else if(ch == "!"){
	    ch = "%21";
	  }else if(ch == "?"){
	    ch = "%3F";
	  }else if(ch == "|"){
		ch = "%7C";
	  }
	  newparam = newparam + ch;
	}
	return newparam;
  }

  //==============================================================================================================
  //-----> 1-2  입력된 문자열에 포함된 특수문자를 Ascii코드값으로 변경하여 리턴한다.(get 방식으로 특수문자를
  //        파라미터값으로 전달시에 적용)
  //==============================================================================================================
  function getUrl(val){
   	newval = "";
	for (var i=0;i<val.length;i++) {
	  ch = val.charAt(i);
	  if(ch == "/"){
	    ch = "%2F";
	  }else if(ch == "+"){
	    ch = "%2B";
	  }else if(ch == ":"){
	    ch = "%3A";
	  }/*else if(ch == "-"){
	    ch = "%2D";
	  }*/else if(ch == " "){
	    ch = "+";
	  }/*else if(ch == "="){
	    ch = "%3D";
	  }else if(ch == "!"){
	    ch = "%21";
	  }else if(ch == "?"){
	    ch = "%3F";
	  }*/else if(ch == "|"){
		ch = "%7C";
	  }
	  newval = newval + ch;
	}
	return newval;
  }

  //==============================================================================================================
  //-----> 1-3  입력된 문자열의 길이를 리턴한다.
  //==============================================================================================================
  function getLength(varCk) {
	var varLen = 0;
	var agr = navigator.userAgent;

	for (i=0; i<varCk.length; i++) {
	  ch = varCk.charAt(i);
	  if ((ch == "\n") || ((ch >= "ㅏ") && (ch <= "히")) || ((ch >="ㄱ") && (ch <="ㅎ")))
		varLen += 3;
	  else
		varLen += 1;
	}
	return (varLen);
  }

  //==============================================================================================================
  //-----> 1-4  해당 CheckBox들중 선택된 항목들의 갯수를 리턴한다.
  //==============================================================================================================
  function getCheckedNum(formname, objname){
	var frm = eval("document." + formname);
	var len = frm.elements.length;
	var k = 0;

	for( var i=0; i<len; i++) {
	  var ele = frm.elements[i];
	  if(ele.name == objname && ele.checked){
	    k++;
	  }
	}
	return k;
  }

  //==============================================================================================================
  //-----> 1-5  입력 문자열의 좌측을 trim하여 리턴한다.
  //==============================================================================================================
  function trimLeft(str){
    var s = new String(str);
    if (s.substr(0,1) == " ")
      return trimLeft(s.substr(1));
    else
      return s;
  }

  //==============================================================================================================
  //-----> 1-6  입력 문자열의 우측을 trim하여 리턴한다.
  //==============================================================================================================
  function trimRight(str){
    var s = new String(str);
    if(s.substr(s.length-1,1) == " ")
      return trimRight(s.substring(0, s.length-1))
    else
      return s;
  }

  //==============================================================================================================
  //-----> 1-7  입력 문자열의 좌,우측을 trim하여 리턴한다.
  //==============================================================================================================
  function trim(str){
    return trimLeft(trimRight(str));
  }

  //==============================================================================================================
  //-----> 1-8  입력 문자열의 모든 공백문자(" ")를 제거하여 리턴한다.
  //==============================================================================================================
  function alltrim(a){
    for (; a.indexOf(" ") != -1 ;){
      a = a.replace(" ","");
    }
    return a;
  }


  //==============================================================================================================
  //-----> 2-1  TextBox의 입력값에 대한 null 및 공백문자 체크
  //==============================================================================================================
  function checkText(val){
	var isok = false;
	if(val != null){
	  var len = val.length;
	  for(var i=0;i<len;i++){
	    var ch = val.charAt(i);
	    if(ch != ' '){
		  isok = true;
		  break;
		}
      }
	}
	return isok;
  }

  //==============================================================================================================
  //-----> 2-2  TextArea의 입력값에 대한 null 및 Enter키,공백문자 체크
  //==============================================================================================================
  function checkTextArea(input){
	var isok = false;
    for (var i = 0; i < input.length; i++) {
      if ((input.charCodeAt(i) == 13) && (input.charCodeAt(i+1) == 10)) {
        i++;
      } else {
	    if(input.charAt(i) != ' '){
          isok = true;
		  break;
		}
      }
    }
	return isok;
  }

  //==============================================================================================================
  //-----> 2-3  CheckBox에서 하나 이상의 선택여부 확인
  //==============================================================================================================
  function checkCheckBox(formname,objname) {
    var isok = false;
    var len = eval("document." + formname + "." + objname).length;
	if(len > 1){
	  for (var i=0; i<len; i++){
  	    if(eval("document." + formname + "." + objname + "[" + i + "]").checked){
		  isok = true;
		  break;
		}
	  }
  	}
	else{
	  if(eval("document." + formname + "." + objname).checked){
	    isok = true;
	  }
	}
	return isok;
  }

  //==============================================================================================================
  //-----> 2-4  SelectBox에서 선택한 항목의 유효성 확인
  //==============================================================================================================
  function checkSelect(formname,objname){
	var selIndex = eval("document." + formname + "." + objname).selectedIndex;
	var selValue = eval("document." + formname + "." + objname).options[selIndex].value;

	if(selIndex == 0 || selValue == null || selValue == ""){
	  return false;
	}
	return true;
  }

  //==============================================================================================================
  //-----> 2-5  SelectBox에서 선택한 항목의 유효성 확인(Select의 onChange 또는 onClick Event에서 사용)
  //==============================================================================================================
  function checkSelectThis(obj,val){
	var selIndex = obj.selectedIndex;
	var selValue = obj.options[selIndex].value;

	if(selIndex == 0 || selValue == null || selValue == ""){
	  alert("항목을 선택하세요!");
	  obj.focus();
	}
  }

  //==============================================================================================================
  //-----> 2-6  입력값인 년,월,일의 유효성 체크
  //==============================================================================================================
  function checkDate(varCk1,varCk2,varCk3,formname,objname) {
	if ( (isInteger(varCk1,"")) && (isInteger(varCk2,"")) && (isInteger(varCk3,"")) ) {
	  if ( (getLength(varCk1)==4) && (getLength(varCk2)==2) && (getLength(varCk3)==2) ) {
	    if (varCk1>="0001" && varCk1<="2099" && varCk2>="01" && varCk2<="12") {
		  febDays = "29";

		  if ((parseInt(varCk1,10) % 4) == 0) {
		    if ((parseInt(varCk1,10) % 100) == 0 && (parseInt(varCk1,10) % 400) != 0){
			  febDays = "28";
			}
		  }else{
			febDays = "28";
		  }

		  if (varCk2=="01" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="02" && varCk3>="01" && varCk3<=febDays) return true;
		  if (varCk2=="03" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="04" && varCk3>="01" && varCk3<="30") return true;
		  if (varCk2=="05" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="06" && varCk3>="01" && varCk3<="30") return true;
		  if (varCk2=="07" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="08" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="09" && varCk3>="01" && varCk3<="30") return true;
		  if (varCk2=="10" && varCk3>="01" && varCk3<="31") return true;
		  if (varCk2=="11" && varCk3>="01" && varCk3<="30") return true;
		  if (varCk2=="12" && varCk3>="01" && varCk3<="31") return true;
		}
		alert("유효하지 않은 년,월,일(YYYYMMDD)입니다. 다시 확인해 주세요!");
		eval("document." + formname + "." + objname).focus();
		eval("document." + formname + "." + objname).select();
		return false;
	  }else{
		alert("년,월,일(YYYYMMDD)의 자릿수가 잘못 입력되었습니다!");
		eval("document." + formname + "." + objname).focus();
		eval("document." + formname + "." + objname).select();
		return false;
	  }
	}else {
	  alert("년,월,일(YYYYMMDD)은 숫자만 입력가능합니다!");
	  eval("document." + formname + "." + objname).focus();
	  eval("document." + formname + "." + objname).select();
	  return false;
	}
  }

  //==============================================================================================================
  //-----> 3-1  입력값인 문자열이 모두 영문인지 체크
  //==============================================================================================================
  function isEnglish(val){
    var isok = true;
	if(checkText(val)){
	  for (var i=0;i<val.length;i++) {
	    ch = val.charAt(i);
	    if((ch>='ㄱ' && ch<='ㅎ') || (ch>='ㅏ' && ch<='히')){
		  isok = false;
		  alert("영문으로 입력하세요!");
		  break;
	    }
	  }
	}
	return isok;
  }

  //==============================================================================================================
  //-----> 3-2  입력값인 문자열이 모두 영문 대문자인지 체크
  //==============================================================================================================
  function isUpper(val){
    var isok = true;
	if(checkText(val)){
	  for (var i=0;i<val.length;i++) {
	    ch = val.charAt(i);
	    if((ch>='a' && ch<='z') || (ch>='ㄱ' && ch<='ㅎ') || (ch>='ㅏ' && ch<='히')){
		  isok = false;
		  alert("영문 대문자로 입력하세요!");
		  break;
	    }
	  }
	}
	return isok;
  }

  //==============================================================================================================
  //-----> 3-3  입력값인 문자열이 소수인지 체크
  //==============================================================================================================
  function isFloat(str, len, pointlen){
    var check = 0;

	for(var i=0; i<str.length; i++){
      ch = str.charAt(i);

	  if(i == 0){
	   	if(ch == '.'){
	      alert("실수 형식이 올바르지 않습니다.");
     	  return false;
		}
	  }

	  if((ch < '0' || ch > '9') && ch != '.'){
	    if(ch == ' '){
		  alert("공백은 허여하지 않습니다.");
		  return false;
		}
		alert("실수 형식이 올바르지 않습니다.");
	    return false;
	  }

	  if(ch == '.'){
	    ++check;
	  }
    }

    no = parseFloat(str);

    if(isNaN(no) || check > 1){
      alert("실수 형식이 올바르지 않습니다.");
	  return false;
    }

	maxstr = "1";
	for(var j=0; j<len-pointlen; j++){
	  maxstr += "0";
	}

	maxval = parseInt(maxstr,10);

	if(no >= maxval){
	  alert("허용 크기값을 초과하였습니다.");
	  return false;
	}
	return true;
  }

  //==============================================================================================================
  //-----> 3-4  입력값인 문자열이 정수인지 체크
  //==============================================================================================================
  function checkNumber(str, len){



    var strlen = str.length;
		for(var i=0; i<strlen; i++){
      ch = str.charAt(i);

			/*if(i == 0){
			if(strlen > 1){
				if(ch < '1' || ch > '9'){
					alert("Invalid Number Format!");
					return false;
				}
			}
			}else{*/
			if(ch < '0' || ch > '9'){
				if(ch == ' '){
				alert("공백문자는 허용하지 않습니다.");
				return false;
				}
				alert("숫자형식이 올바르지 않습니다.");
				return false;
			}
			//}
		}
    no = parseInt(str,10);

    if(isNaN(no)){
      alert("숫자형식이 올바르지 않습니다.");
			return false;
    }
		maxstr = "1";

		for(var j=0; j<len; j++){
			maxstr += "0";
		}

		maxval = parseInt(maxstr,10);
		if(no >= maxval){
			alert("허용 크기값을 초과하였습니다.");
			return false;
		}
		return true;
	}

  //==============================================================================================================
  //-----> 3-5  입력값인 날짜의 유효성 체크
  //==============================================================================================================
  function isValidDate(val,formname,objname,token){
	if(val != null && val != ""){
	  var len = val.length;
	  if(len == 10){
	    for (var i=0;i<len;i++) {
	      if(i == 4 || i == 7){
		    if(val.charAt(i) != token){
		      alert("날짜입력 양식은 'yyyy" + token + "mm" + token + "dd'이며 년,월,일은 숫자만 입력가능합니다!");
		      eval("document." + formname + "." + objname).focus();
			  eval("document." + formname + "." + objname).select();
			  return false;
			}
		  }
		}
		var year = val.substring(0,4);
		var month = val.substring(5,7);
		var day = val.substring(8,10);
		if(checkDate(year,month,day,formname,objname)){
		  return true;
		}
	  }
	  else{
	    alert("날짜입력 양식은 'yyyy" + token + "mm" + token + "dd'이며 년,월,일은 숫자만 입력가능합니다!");
		eval("document." + formname + "." + objname).focus();
		eval("document." + formname + "." + objname).select();
	    return false;
	  }
	}
	return false;
  }

  //==============================================================================================================
  //-----> 3-5-1  입력값인 날짜의 유효성 체크 : 날짜를 직접 입력 가능하도록 만듬
  //==============================================================================================================
  function isValidDateThis(obj){
		var formname = 'forms[0]';
		var objname = obj.name;
		var val = obj.value;
		var token = '-';

		if(val != null && val != ""){
			var len = val.length;
			if(len == 8){
				var year = val.substring(0,4);
				var month = val.substring(4,6);
				var day = val.substring(6,8);
				if(checkDate(year,month,day,formname,objname)){
					obj.value = year + token + month + token + day;
					return true;
				}
			}else if(len == 10){
				var year = val.substring(0,4);
				var month = val.substring(5,7);
				var day = val.substring(8,10);
				if(checkDate(year,month,day,formname,objname)){
					return true;
				}
			}else{
				alert("날짜입력 양식은 'YYYYMMDD'이며 년,월,일은 숫자만 입력가능합니다!");
				obj.focus();
				obj.select();
				return false;
			}
		}

		return false;
  }

  function isValidDateThis2(obj){
		var formname = 'forms[0]';
		var objname = obj.name;
		var val = obj.value;
		var token = '-';

		if(val != null && val != ""){
			var len = val.length;
			if(len == 8){
				var year = val.substring(0,4);
				var month = val.substring(4,6);
				var day = val.substring(6,8);
				if(checkDate(year,month,day,formname,objname)){
					obj.value = year + token + month + token + day;
					return true;
				}
			}else if(len == 4){
				var year = val.substring(0,4);
				if(checkDate(year,'01','01',formname,objname)){
					obj.value = year ;
					return true;
				}
			}else if(len == 6){
				var year = val.substring(0,4);
				var month = val.substring(4,6);
				if(checkDate(year,month,'01',formname,objname)){
					obj.value = year + token + month ;
					return true;
				}
			}else if(len == 10){
				var year = val.substring(0,4);
				var month = val.substring(5,7);
				var day = val.substring(8,10);
				if(checkDate(year,month,day,formname,objname)){
					return true;
				}
			}else{
				alert("날짜입력 양식은 'YYYYMMDD', 'YYYYMM', 'YYYY' 의 \n\n세가지중 하나로 나타내며 년,월,일은 숫자만 입력가능합니다!");
				obj.focus();
				obj.select();
				return false;
			}
		}

		return false;
  }

  //==============================================================================================================
  //-----> 3-5-2  날짜를 입력가능 형태로 바꿈 : 날짜를 직접 입력 가능하도록 만듬
  //==============================================================================================================
	function canWriteDate(obj){
		delDiv();

		var objname = obj.name;
		var val = obj.value;
		var token = '-';

		obj.value = replaceAll(val, token, '');
		obj.focus();
		obj.select();
	}

  //==============================================================================================================
  //-----> 3-6  입력값인 날짜의 유효성 체크("YYYYMMDD" or "yyyy"+token+"mm"+token+"dd")
  //==============================================================================================================
  function isValidDate2(val,formname,objname,token){
	if(!checkText(val)){
	  return true;
	}
	else{
	  var len = val.length;
	  if(len == 8){
	    var year = val.substring(0,4);
	    var month = val.substring(4,6);
		var day = val.substring(6,8);
		if(checkDate(year,month,day,formname,objname)){
		  eval("document." + formname + "." + objname).value = year + token + month + token + day;
		  return true;
		}
	  }else if(len == 10){
		if(isValidDate(val,formname,objname,token)){
		  return true;
		}
	  }
	  else{
	    alert("날짜입력 양식은 'yyyy" + token + "mm" + token + "dd'이며 년,월,일은 숫자만 입력가능합니다!");
		eval("document." + formname + "." + objname).focus();
		eval("document." + formname + "." + objname).select();
	    return false;
	  }
	}
	return false;
  }

  //==============================================================================================================
  //-----> 3-7  입력값인 문자열의 크기 체크(Max Size)
  //==============================================================================================================
  function isMaxSize(str, len){
	if(str != null){
	  var strlen = str.length;
	  if(strlen > len){
		alert("이 입력필드의 최대 크기는 " + len + "입니다!");
		return false;
	  }
	  return true;
	}
	return false;
  }

  //==============================================================================================================
  //-----> 3-8  입력 문자열 검사 (한글/영자/숫자/특수문자)
  //==============================================================================================================
  function isString(varCk, charSet, mode) {
	var chk=true;
	A:for (i=0; i<=varCk.length-1; i++) {
	  ch = varCk.substring(i,i+1);
	  //영문, 숫자 허용
	  if(mode == 0){
		if ((ch>="0" && ch<="9") || (ch>="a" && ch<="z") || (ch>="A" && ch<="Z") || ch == " ") {
		  chk = true;
		}else {
		  chk=false;
		  for(j=0; j<=charSet.length-1; j++) {
		    comp = charSet.substring(j,j+1);
			if (ch==comp) {
			  chk = true;
			  continue A;
			}
		  }
		  break A;
		}
	  }
	  //한글, 숫자 허용
	  else if(mode == 1){
		if ((ch>="0" && ch<="9") || (ch>="ㄱ" && ch<="ㅎ") || (ch>="ㅏ" && ch<="히") || ch == " ") {
		  chk = true;
		}else {
		  chk=false;
		  for(j=0; j<=charSet.length-1; j++) {
		    comp = charSet.substring(j,j+1);
			if (ch==comp) {
			  chk = true;
			  continue A;
			}
		  }
		  break A;
		}
	  }
	}
	return chk;
  }

  //==============================================================================================================
  //-----> 3-9  입력 문자열 검사 (숫자/특수문자)
  //==============================================================================================================
  function isInteger(varCk, charSet) {
	var chk=true;
	A:for (i=0; i<=varCk.length-1; i++) {
	  ch = varCk.substring(i,i+1);
	  if (ch>="0" && ch<="9") {
		chk = true;
	  }else {
		chk=false;
		for (j=0; j<=charSet.length-1; j++) {
		  comp = charSet.substring(j,j+1);
		  if (ch==comp) {
			chk = true;
		    continue A;
		  }
		}
		break A;
	  }
	}
	return chk;
  }

  //==============================================================================================================
  //-----> 3-10  E-mail 주소의 유효성 체크
  //==============================================================================================================
  function isValidEmail(email) {
	var arrMatch = email.match(/^(\".*\"|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/);
	if (arrMatch == null) {
	  return false;
	}

	var arrIP = arrMatch[2].match(/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/);
	if (arrIP != null) {
	  for (var i = 1; i <= 4; i++) {
		if (arrIP[i] > 255) {
		  return false;
        }
   	  }
	}
	return true;
  }

  //==============================================================================================================
  //-----> 3-11  기간으로 검색시 시작날짜와 끝날짜의 전후관계를 비교한다.
  //==============================================================================================================
  function compareDate(date1, date2){
	if (date1 == "" || date2 == "")	{
		return true;
	}
	var isok = true;
	var year1 = date1.substring(0,4);
	var month1 = date1.substring(5,7);
	var day1 = date1.substring(8,10);
	var year2 = date2.substring(0,4);
	var month2 = date2.substring(5,7);
	var day2 = date2.substring(8,10);

	dt1 = new Date(year1,month1,day1);
	dt2 = new Date(year2,month2,day2);

	if(dt1.getTime() > dt2.getTime()){
//	  alert("검색기간중 끝날짜가 시작날짜 보다 이후입니다!");
	  isok = false;
	}
	return isok
  }

  //==============================================================================================================
  //-----> 3-12  시작날짜와 끝날짜의 전후관계를 비교한다.
  //==============================================================================================================
  function compareDt(dtObj1, dtObj2){
	if (dtObj1.vlaue == "" || dtObj2.value == "")	{
		return true;
	}
	
	dtObj1.value = replaceAll(dtObj1.value, "-", "");
	dtObj2.value = replaceAll(dtObj2.value, "-", "");
	
	var isok = true;
	var year1 = dtObj1.value.substring(0,4);
	var month1 = dtObj1.value.substring(4,6);
	var day1 = dtObj1.value.substring(6,8);
	var year2 = dtObj2.value.substring(0,4);
	var month2 = dtObj2.value.substring(4,6);
	var day2 = dtObj2.value.substring(6,8);

	dt1 = new Date(year1,month1,day1);
	dt2 = new Date(year2,month2,day2);

	if(dt1.getTime() > dt2.getTime()){
	  alert("종료일이 시작일보다 이전날짜 입니다.");
	  dtObj2.value = "";
	  dtObj2.focus();
	  isok = false;
	}
	return isok
  }

  //==============================================================================================================
  //-----> 3-12  시작날짜와 끝날짜의 전후관계를 비교한 후 날짜타입으로 리턴한다.
  //==============================================================================================================
  function compareDt2(dtObj1, dtObj2){
	if (dtObj1.vlaue == "" || dtObj2.value == "")	{
		return true;
	}
	
	dtObj1.value = replaceAll(dtObj1.value, "-", "");
	dtObj2.value = replaceAll(dtObj2.value, "-", "");
	
	var isok = true;
	var year1 = dtObj1.value.substring(0,4);
	var month1 = dtObj1.value.substring(4,6);
	var day1 = dtObj1.value.substring(6,8);
	var year2 = dtObj2.value.substring(0,4);
	var month2 = dtObj2.value.substring(4,6);
	var day2 = dtObj2.value.substring(6,8);

	dt1 = new Date(year1,month1,day1);
	dt2 = new Date(year2,month2,day2);

	if(dt1.getTime() > dt2.getTime()){
	  alert("종료일이 시작일보다 이전날짜 입니다.");
	  dtObj2.value = "";
	  dtObj2.focus();
	  isok = false;
	}
	if(isok == true) {
	  dtObj1.value = year1 + "-" + month1 + "-" + day1;
	  dtObj2.value = year2 + "-" + month2 + "-" + day2;
	}
	return isok
  }

  //==============================================================================================================
  //-----> 4-1  해당 ChekBox들을 모두 checked상태로 변경한다.
  //==============================================================================================================
  function setAllCheckBox(formname, objname){
    var thisform = eval("document." + formname);

	for( var i=0; i<thisform.elements.length; i++) {
	  var ele = thisform.elements[i];
	  if(ele.name == objname){
	    ele.checked = true;
	  }
    }
    return;
  }

  //==============================================================================================================
  //-----> 4-2  해당 ChekBox들을 모두 unchecked상태로 변경한다.
  //==============================================================================================================
  function unsetAllCheckBox(formname, objname){
    var thisform = eval("document." + formname);

	for( var i=0; i<thisform.elements.length; i++) {
	  var ele = thisform.elements[i];
	  if(ele.name == objname){
	    ele.checked = false;
	  }
    }
    return;
  }

  //==============================================================================================================
  //-----> 4-4  해당 Form의 모든 Element들을 disabled 상태로 변경한다.
  //==============================================================================================================
  function setDisabled(formname){
    thisform = eval("document." + formname);
    for( var i=0; i<thisform.elements.length; i++) {
	  var ele = thisform.elements[i];
	  if(  ele.type != 'hidden'  )  {
		  ele.disabled = true;
		  ele.style.border = '1px';
	  }
	}
  }

  //==============================================================================================================
  //-----> 4-5  해당 Form의 모든 입력 Element들을 trim한다.
  //==============================================================================================================
  function setTrim(formname){
    var thisform = eval(formname);
    for( var i=0; i<thisform.length; i++) {
	  var ele = thisform.elements[i];
	  if(ele.type == "text" || ele.type == "textarea"){
	    ele.value = trim(ele.value);
	  }
	}
  }

  //==============================================================================================================
  //-----> 5-1  Enter Key Press시 다음 Element로 포커스 이동.
  //==============================================================================================================
  function KeyTab(formname,nextfield){
    var k = window.event.keyCode;
    if (k == 13) { // enter key pressed
      eval("document." + formname + "." + nextfield + ".select()");
    }
  }

  //==============================================================================================================
  //-----> 5-2  Event 발생시 Object의 bgcolor변경.
  //==============================================================================================================
  function changeColor(object, color) { object.style.backgroundColor = color; }


  //==============================================================================================================
  //  FamilyNet 사용
  //==============================================================================================================
  function setFormat(val){

  	len = val.length;

  	if(inval == 1){

  		val = "0" + val;

  	}

  	return val;

  }

  function printOut(data_count, url){
	form=document.forms[0];
	incount = parseInt(data_count,10);

	if(incount == 0){
		alert( '리스트의 물품이 없습니다. ' );
		return;
	}
	form.action=url;
	form.target = '_self';
	form.submit();
  }

  function checkData(){
  	frm = document.forms[0];
	date_from = frm.year.options[frm.year.selectedIndex].value + "/" + frm.month.options[frm.month.selectedIndex].value
	            + "/" + frm.date.options[frm.date.selectedIndex].value;
	date_to = frm.exp_year.options[frm.exp_year.selectedIndex].value + "/" + frm.exp_month.options[frm.exp_month.selectedIndex].value
	          + "/" + frm.exp_date.options[frm.exp_date.selectedIndex].value;
	if(!compareDate(date_from, date_to)){
	  frm.year.focus();
	  return false;
	}
	frm.is_first.value="false";
	return true;
  }

  function searchB(url){
	form = document.forms[0];
	form.action = url;
	form.target = '_self';
	form.is_first.value="false";
	form.submit();
}
function orderSearch( type, url){
	form = document.forms[0];
	if( form.sort_col.value == type ){
		if( form.sort_type.value == 'asc' )
			form.sort_type.value = 'desc';
		else
			form.sort_type.value = 'asc';
	}else{
		form.sort_col.value = type;
		form.sort_type.value = 'asc';
	}
	searchB(url);
}

  function setSelect(y1, m1, d1, y2, m2, d2) {
      form = document.forms[0];
      setCombo(form.year, 0, parseInt(y1,10)-1, 3, 1, 1);
      setCombo(form.month, 0, 1, 12, 1, parseInt(m1,10)-1);
      setCombo(form.date, 0, 1, getDayNum(y1, m1), 1, parseInt(d1,10)-1);
	  setCombo(form.exp_year, 0, parseInt(y2,10)-1, 3, 1, 1);
      setCombo(form.exp_month, 0, 1, 12, 1, parseInt(m2,10)-1);
      setCombo(form.exp_date, 0, 1, getDayNum(y2, m2), 1, parseInt(d2,10)-1);
  }

/*==============================================================================================================
*    입력 문자열 검사 (특수문자)
*===============================================================================================================
* 추가 DB와 통신상에 사용되는 특수문자를 사용 못하게 ('[', ']', '|','`', ',')
* '[' = 91, ']' = 93, '|' = 124, '`' = 96
*=============================================================================================================*/
function checkValidation(obj, eventKey) {
	var booReturn = true;
	if(eventKey == 219 || eventKey == 221 || eventKey == 220 || eventKey == 192 || eventKey == 188) {
		alert("사용할 수 없는 문자입니다.");
		obj.value = obj.value.substr(0, obj.value.length-1);
		booReturn = false;
	}
	return booReturn;
}

/*==============================================================================================================
*    숫자만 입력가능
*=============================================================================================================*/
function checkNumber2(str){
	var strlen = str.length;
	for(var i=0; i<strlen; i++){
		ch = str.charAt(i);
		if((ch < '0' || ch > '9') && ch != '.'){
			return false;
		}
	}
	return true;
}

/*==============================================================================================================
*     string속의 space문자를 ''로 바꿔준다
*=============================================================================================================*/
function getName(val){
	newval = "";
	for(var i=0; i<val.length; i++) {
		ch = val.charAt(i);
		if(ch == ' '){
			ch = '';
		}
		newval = newval + ch;
	}
	return newval;
}

/*==============================================================================================================
*   달력 선택
*	폼명, 입력될 TextBox이름
*=============================================================================================================*/
function calChoice(vForm, vTextBox) {
	date_str = eval(vForm+'.'+vTextBox).value;

	if (date_str != '') {
		if (date_str.length == 8) { // 저장시 isHipen 체크후 달력버튼 클릭시 에러 수정  Modify 2009/06/21 - Kek
			date_str = date_str.substr(0,4) + "-" + date_str.substr(4,2) + "-" + date_str.substr(6,2);
		}
		if (! isValidDate(date_str, vForm, vTextBox, '-'))
			date_str = ""; //return false;  // 메세지만 보이게 한다. Modify 2005/02/22 Back
	}

	smd_html = "/common/cals_onclick.jsp";
	smd_args = date_str.substr(0,4) + date_str.substr(5,2) + date_str.substr(8,2);
	smd_size = "status=no; help=no; dialogWidth:320px; dialogHeight:350px";
	smd_result = window.showModalDialog(smd_html, smd_args, smd_size);

	if (smd_result != -1 && smd_result != null && smd_result != "") {
		var firstList = new Array ();
		firstList = smd_result.split(";");

		if (firstList[0] == "space")
		{
			eval(vForm+'.'+vTextBox).value = "";
		} else {
			eval(vForm+'.'+vTextBox).value = firstList[0];
		}

		eval(vForm+'.'+vTextBox).focus();
		eval(vForm+'.'+vTextBox).select();
	}
}

/*==============================================================================================================
*   달력 선택
*	폼명, 입력될 TextBox이름	- 달력입력 이외의 입력 값이 가능한 경우 (예, 90일 이후)
*=============================================================================================================*/
function calChoice2(vForm, vTextBox) {
	smd_html = "/common/cals_onclick.jsp";
	smd_args = "";
	smd_size = "status=no; help=no; dialogWidth:320px; dialogHeight:350px";
	smd_result = window.showModalDialog(smd_html, smd_args, smd_size);

	if (smd_result != -1 && smd_result != null && smd_result != "") {
		var firstList = new Array ();
		firstList = smd_result.split(";");

		if (firstList[0] == "space")
		{
			eval(vForm+'.'+vTextBox).value = "";
		} else {
			eval(vForm+'.'+vTextBox).value = firstList[0];
		}

		eval(vForm+'.'+vTextBox).focus();
		eval(vForm+'.'+vTextBox).select();
	}
}

/*==============================================================================================================
*   콤보박스의 리스트중, 원하는값을 선택
*	vComboBox : 해당 콤보박스 (예 : myForm.selLandCls)
*	vValue    : 콤보박스 리스트중 선택하고자 하는 Value
*=============================================================================================================*/
function ComboBoxSelected(vComboBox, vValue) {
	for (i=0; i<vComboBox.length; i++) {
		if (vComboBox[i].value == vValue) {
			vComboBox[i].selected = true;
		}
	}
    /* START
    * 초기화를 위하여 vValue를 ""로 넘겼을때를 위해
    * 2007-11-23
    * Boyeon.sohn
    */
    if(vValue=="")
        vComboBox[0].selected = true;
    /* END
    * 초기화를 위하여 vValue를 ""로 넘겼을때를 위해
    * 2007-11-23
    * Boyeon.sohn
    */
}


/*==============================================================================================================
*   폼의 콘트롤들을 사용불가능 상태로 만든다.
*	frmName : 폼이름
*	사용가능으로 만들 콘트롤은 enable='Y' 라는 애트리뷰트를 넣는다.
*	예 : <input type='button' name=test value='닫기' enable='Y'>
*=============================================================================================================*/
function disabled_form(frmName,mode) {
	if(mode != 'R') return;

	var f1 = document.forms[frmName];
	for(i=0;i<f1.length;i++){
		if(f1[i].enable != 'Y'){
			f1[i].disabled = true;
			f1[i].style.border = '1px';
		}
	}
	//버튼안보이게하기
	//disable_uptButton();
}


/*==============================================================================================================
*   로컬의 현재 일자를 돌려준다.
*	형식 :
*=============================================================================================================*/
function LocalGetToday(vSep) {
	var yy = "";
	var mon = "";
	var day = "";

	currdate = new Date();

	tmpyy = currdate.getYear();
	yy = (tmpyy > 99) ? tmpyy : 1900 + tmpyy;

	tmpmon = currdate.getMonth();
	if(tmpmon < 9) {
		mon = "0" + (tmpmon + 1);
	}
	else
		mon = tmpmon + 1;

	tmpday = currdate.getDate();
	if(tmpday < 10)
		day = "0" + tmpday;
	else
		day = tmpday;

	return yy+vSep+mon+vSep+day;
}


/*==============================================================================================================
*   우편번호 선택 화면 Open
*	파라미터 : 폼명, 우편번호입력박스명, 주소1 입력박스명
*=============================================================================================================*/
function PostOpen(vForm, vZip, vAddr1) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=yes,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=yes,";
	s_status=s_status + "resizable=no,";
	s_status=s_status + "width=450,";
	s_status=s_status + "height=500,";
	s_status=s_status + "top=100,";
	s_status=s_status + "left=300,";

	myRef = window.open("/sysm/SysmpostList50.do?pafrm="+vForm+"&param="+vZip+"&param1="+vAddr1, "PostSelect", s_status);
	myRef.focus();
}

/*==============================================================================================================
*   우편번호 선택 화면 Open
*	파라미터 : 폼명, 우편번호입력박스명, 주소1 입력박스명
*=============================================================================================================*/
function PostOpen100(vForm, vOrdAddr, vNewAddr, vGubun) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=yes,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=no,";
	s_status=s_status + "resizable=no,";
	s_status=s_status + "width=920,";
	s_status=s_status + "height=570,";
	s_status=s_status + "top=10,";
	s_status=s_status + "left=300,";

	myRef = window.open("/sysm/SysmpostList100.do?pafrm="+vForm+"&paold="+vOrdAddr+"&panew="+vNewAddr+"&pagubun="+vGubun, "PostSelect", s_status);
	myRef.focus();
}
function changeAddrType(mode,type,form,old_addr,new_addr,gubun){
	var oldAddr = eval("document."+form+"."+old_addr);
	var newAddr = eval("document."+form+"."+new_addr);
	
	var nowAddr = null;
	var changeAddr = null;
	if(type == "A"){
		nowAddr = oldAddr;
		changeAddr = newAddr;
	}else if(type == "B"){
		nowAddr = newAddr;
		changeAddr = oldAddr;
	}
	
	var objGubun = eval("document."+form+"."+gubun);
	if(mode != "C" && objGubun[1].checked == true && newAddr[0].value == ""){
		if( confirm("신 주소(도로명 주소)가 없습니다.\n신 주소를 조회하시겠습니까?") == true ){
			PostOpen100(form,old_addr,new_addr,gubun);
		}else{
			objGubun[0].checked = true;
			return;
		}
	}
	
	nowAddr[0].className = "input_";
	nowAddr[1].className = "input_";
	nowAddr[2].className = "input_";
	nowAddr[2].readOnly  = false;
	
	changeAddr[0].className = "input_readonly";
	changeAddr[1].className = "input_readonly";
	changeAddr[2].className = "input_readonly";
	changeAddr[2].readOnly  = true;
}

function changeAddrDetail(type,form,old_addr,new_addr){
	var oldAddr = eval("document."+form+"."+old_addr);
	var newAddr = eval("document."+form+"."+new_addr);
	var nowAddr = null;
	var changeAddr = null;
	if(type == "A"){
		nowAddr = oldAddr;
		changeAddr = newAddr;
	}else if(type == "B"){
		nowAddr = newAddr;
		changeAddr = oldAddr;
	}
	
	if(changeAddr[0].value != ""){
		changeAddr[2].value = nowAddr[2].value;
	}
}

/*==============================================================================================================
*   우편번호 선택 화면 Open
*	파라미터 : 폼명, 우편번호입력박스명, 주소1 시도 입력박스명, 주소2 구군 입력박스명, 주소3 동 입력박스명
*=============================================================================================================*/
function PostOpen2(vForm, vZip, vAddr1, vAddr2, vAddr3) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=yes,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=yes,";
	s_status=s_status + "resizable=no,";
	s_status=s_status + "width=450,";
	s_status=s_status + "height=500,";
	s_status=s_status + "top=100,";
	s_status=s_status + "left=300,";

	myRef = window.open("/nmrt/NmrtpostList01.do?pafrm="+vForm+"&param="+vZip+"&param1="+vAddr1+"&param2="+vAddr2+"&param3="+vAddr3, "PostSelect2", s_status);
	myRef.focus();
}
/*==============================================================================================================
*   개인정보 선택 화면 Open
*	파라미터 : 폼명, 개인정보번호입력박스명, 이름 입력박스명, 주민번호 입력박스명
*=============================================================================================================*/
function PrvtOpen(vForm, vPrvtNo, vName, vSid) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=yes,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=yes,";
	s_status=s_status + "resizable=yes,";
	s_status=s_status + "width=800,";
	s_status=s_status + "height=600,";

	myRef = window.open("/sysm/SysmprvtList50.do?p_frm="+vForm+"&p_prvt_no="+vPrvtNo+"&p_name="+vName+"&p_sid="+vSid, "PrvtSelect", s_status);
	myRef.focus();
}
/*==============================================================================================================
*   개인정보 조회 화면 Open
*	파라미터 : 폼명, 개인정보번호입력박스명, 이름 입력박스명, 주민번호 입력박스명
*=============================================================================================================*/
function ViewPrvtOpen(vPrvtNo) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=no,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=yes,";
	s_status=s_status + "resizable=yes,";
	s_status=s_status + "width=800,";
	s_status=s_status + "height=600,";

	myRef = window.open("/sysm/SysmprvtCRUD01.do?prvt_no="+vPrvtNo+"&&mode=R", "ViewPrvt", s_status);
	myRef.focus();
}


function ViewPrvtOpenMode(vPrvtNo, vMode) {
	var s_status ;
	s_status=s_status + "toolbar=no,";
	s_status=s_status + "location=no,";
	s_status=s_status + "directories=no,";
	s_status=s_status + "status=no,";
	s_status=s_status + "menubar=no,";
	s_status=s_status + "scrollbars=yes,";
	s_status=s_status + "resizable=yes,";
	s_status=s_status + "width=800,";
	s_status=s_status + "height=600,";

	myRef = window.open("/sysm/SysmprvtCRUD01.do?prvt_no="+vPrvtNo+"&mode="+vMode, "ViewPrvtMode", s_status);
	myRef.focus();
}


/*==============================================================================================================
*   해당문자열이 숫자인지 체크
*	파라미터 : 문자열
*=============================================================================================================*/
function checkStrNumber( str ){
	var c;
	for(k = 0;k < str.length; k++) {
		c = str.charAt(k);
		if( k==0 && c == '.' ) {
			return false;
		}
		if( !((c >= '0' && c <= '9') || c=='.' )){
			return false;
		}
	}
	return true;
}

/*==============================================================================================================
*   해당문자열의 길이 구하기 (한글처리 가능)
*	파라미터 : 문자열, 영문숫자가 아닌경우 몇바이트로 계산할지길이
*=============================================================================================================*/
function GetStringLength_PutLen(p_str, hanLen) {
	var c;
	var l_sLength = 0;

	for(k = 0;k < p_str.length; k++) {
		c = p_str.charAt(k);
		//내장함수 escape를 통해 그 글자의 길이가 4보다 크면 한글이므로 3를 더한다. // 현DB 가 UTF8 이므로...
		if(escape(c).length > 4){
			l_sLength += hanLen;
		}else{
			l_sLength++;
		}
	}
	return l_sLength;
}

/*==============================================================================================================
*   한글처리 포함하여 해당문자열을 해당 길이만큼만 가져온다.
*	파라미터 : 문자열, 잘라올 길이 , 영문숫자가 아닌경우 몇바이트로 계산할지길이
*=============================================================================================================*/
function getStringLenStr( p_str ,  hanLen, len ){
	var c;
	var l_sLength = 0;
	var restr = "";
	for(k = 0;k < p_str.length; k++) {
		c = p_str.charAt(k);
		if(escape(c).length > 4){
			l_sLength += hanLen;
		}else{
			l_sLength++;
		}
		if( l_sLength <= len){
			restr = restr + c;
		}else{
			break;
		}
	}

	return restr;
}

/*==============================================================================================================
*   주민 번호 체크
*	파라미터 : 13자리 주민 번호 또는 14자리 ('-') 포함한 주민번호
*=============================================================================================================*/
	function juminCheck( juminStr ){
	    var idnm1,idnm2,a,b,c,d,e,f,g,h,i,j,k,l,sum,pivot,modulus,endnumber;
		if (juminStr.indexOf("-") != -1) {
			if (juminStr.indexOf("-") != 6) {
				return false;
			}
		}
	    var juminStr = juminStr.replace( "-","");
		if (juminStr.length != 13) {
			return false;
		}
		idnm1 = juminStr.substring(0,6);
		idnm2 = juminStr.substring(6,13);
		if( idnm1.length != 6 && idnm2.length != 7 ){
			return false;
		}

        a = idnm1.substring(0, 1)
        aa = a * 2;
        b = idnm1.substring(1, 2)
        bb = b * 3;
        c = idnm1.substring(2, 3)
        cc = c * 4;
        d = idnm1.substring(3, 4)
        dd = d * 5;
        e = idnm1.substring(4, 5)
        ee = e * 6;
        f = idnm1.substring(5, 6)
        ff = f * 7;
        g = idnm2.substring(0, 1)
        gg = g * 8;
        h = idnm2.substring(1, 2)
        hh = h * 9;
        i = idnm2.substring(2, 3)
        ii = i * 2;
        j = idnm2.substring(3, 4)
        jj = j * 3;
        k = idnm2.substring(4, 5)
        kk = k * 4;
        l = idnm2.substring(5, 6)
        ll = l * 5;

		pivot = idnm2.substring(6,7)
        sum = aa + bb + cc + dd + ee + ff + gg + hh + ii + jj + kk + ll;
        modulus = sum % 11
        endnumber = 11 - modulus

        if(endnumber == 11) {
           endnumber = 1;
        } else if (endnumber == 10) {
           endnumber = 0;
        } else {
           endnumber = endnumber;
        }

		 if (pivot != endnumber) {
			 return false;
	     }
		 return true;
	}

	function jmCheck( frmName, fieldName ){
		var value = eval("document." + frmName + "." + fieldName).value;
		if( ! juminCheck( value ) ) {
			if( value == "" ) return;
			alert('잘못된 주민번호입니다');
			//eval("document." + frmName + "." + fieldName).value= "";
			//eval("document." + frmName + "." + fieldName).focus();
			return;
		}
	}

/*==============================================================================================================
*   외국인 주민 번호 체크
*	파라미터 : 13자리 주민 번호 또는 14자리 ('-') 포함한 주민번호
*=============================================================================================================*/
	function OutJuminCheck( juminStr ){
		var sum=0;
		var odd=0;
		buf = new Array(13);
		if (juminStr.indexOf("-") != -1) {
			if (juminStr.indexOf("-") != 6) {
				return false;
			}
		}
	    var juminStr = juminStr.replace( "-","");
		if (juminStr.length != 13) {
			return false;
		}

		for(i=0; i<13; i++) { 
			buf[i]=parseInt(juminStr.charAt(i));
		}
		odd = buf[7]*10 + buf[8];
		if(odd%2 != 0) { return false; }
		if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
			return false;
		}
		multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
		for(i=0, sum=0; i<12; i++) { 
			sum += (buf[i] *= multipliers[i]);
		}
		sum = 11 - (sum%11);
		if(sum >= 10) { 
			sum -= 10;
		}
		sum += 2;
		if(sum >= 10) { 
			sum -= 10;
		}
		if(sum != buf[12]) { 
			return false;
		}
		return true;
	}

/*==============================================================================================================
*   전화번호 체크
*	파라미터 : 전화번호
*=============================================================================================================*/
	function checkPhoneNumber( str ){
	    var numPattern = /0\d+\-\d\d+\-\d\d\d\d/g;
	    numPattern = str.match(numPattern);
	    if(numPattern == null){
		numPattern = /([^0-9])/;
		numPattern = str.match(numPattern);
		if(numPattern == null && str.length >= 4 ){
		    return true;
		}
	        return false;
	    }
	    return true;
    }


	function checkPhoneNumber2( str ){
	    var numPattern = /0\d+\-\d\d+\-\d\d\d\d/g;
	    numPattern = str.match(numPattern);
	    if(numPattern == null){
		numPattern = /([^0-9])/;
		numPattern = str.match(numPattern);
		if(numPattern == null && str.length >= 4 ){
		    return true;
		}
		var numP2 = /\d+/g;
		if( str.match( numP2 ) != str || str.length < 5 ){
			if( str == null || str == "" ) return true;
	        return false;
	    }
		}
	    return true;
    }

	function checkPhoneNum(){
		var e1 = event.srcElement;
		var srcNumber = e1.value;
		if( ! checkPhoneNumber2( srcNumber ) ){
			alert("전화번호 형식이 틀립니다.");
			e1.value = "";
			e1.focus();
		}
	}

/*==============================================================================================================
*   폼의 콘트롤들을 사용불가능 상태로 만든다.
*	사용가능으로 만들 콘트롤은 enable='Y' 라는 애트리뷰트를 넣는다.
*	onload 이벤트에서 호출한다. disabled_form(formname)
*	예 : <input type='button' name=test value='닫기' enable='Y'>
*=============================================================================================================*/
function disabled_form(mode) {
	if(mode != 'R') return;

	var f1 = document.all;
	for(i=0;i<f1.length;i++){
		if(f1[i].enable != 'Y'){
			if( f1[i].type == 'checkbox' ||f1[i].type == 'radio' ||f1[i].type == 'select-one' ||f1[i].type == 'button' ||f1[i].type == 'submit' ||f1[i].type == 'image'){
				if(f1[i].type == 'image'){
					f1[i].style.cursor = '';
				}
				f1[i].disabled = true;
				f1[i].style.border = '1px';
			}else if( f1[i].type == 'text' ||f1[i].type == 'textarea' ) {	/* 2005/03/16 : 텍스트상자 readOnly 로 수정 */
				f1[i].readOnly = true;
				f1[i].style.border = '1px';
			}
		}
	}
	//버튼안보이게하기
	//disable_uptButton();
}


/*==============================================================================================================
*   폼의 콘트롤들을 사용불가능 상태로 만든다.
*	사용가능으로 만들 콘트롤은 isHipen="Y",isDate="Y",isPost='Y' 라는 애트리뷰트를 넣는다.
*	onload 이벤트에서 호출한다. chang_form(mode)
*	예 : <input type='text' name=test value='날짜' isHipen="Y" isDate="Y">
*=============================================================================================================*/
var dateGuBun = /\-/g;
function chang_form(mode) {
	if(mode == 'C') return;
	var f1 = document.all;

	for(i=0;i<f1.length;i++){
		if(f1[i].isHipen == 'Y' && f1[i].isDate == 'Y'){
			f1[i].value = plusHipen(f1[i].value, 'date');
		} else if(f1[i].isHipen == 'Y' && f1[i].isPost == 'Y'){
			f1[i].value = plusHipen(f1[i].value, 'post');
		}
	}
	if(mode == 'R') {
//		for(i=0;i<f1.length;i++){
//			if(f1[i].enable != 'Y'){
//				if(f1[i].type == 'text' ||f1[i].type == 'textarea' ||f1[i].type == 'checkbox' ||f1[i].type == 'radio' ||f1[i].type == 'select-one' ||f1[i].type == 'button' ||f1[i].type == 'submit' ||f1[i].type == 'image') f1[i].disabled = true;
//			}
//		}

	disabled_form('R');
	}
}

function readOnly_form( b ) {

	var f1 = document.all;
	for(i=0;i<f1.length;i++){
		if(f1[i].readOnly != true){
			if(f1[i].type == 'text' ||f1[i].type == 'textarea' ||f1[i].type == 'checkbox' ||f1[i].type == 'radio' ||f1[i].type == 'select-one' ||f1[i].type == 'button' ||f1[i].type == 'submit' ) f1[i].readOnly = b;
		}
	}
}

function initForm(  ) {

	var f1 = document.all;
	for(i=0;i<f1.length;i++){
		if(f1[i].type == 'text' ||f1[i].type == 'textarea'  ) f1[i].value = "";
	}
}

/*==============================================================================================================
*   해당페이지에서 팝업창 띄운것들 없애기
*	파라미터 :
*=============================================================================================================*/
function checkPop() {
	if(winDown != null && !winDown.closed) winDown.close();
}


/*==============================================================================================================
*   라디오 박스에서 선택된 체크의 값을 구하는 함수.
*	파라미터 : String 형으로 해당 라디오 박스의 이름을 준다. "rdoTest"
*=============================================================================================================*/
function RadioSelectValue(vObj) {
	if(eval("document.all."+vObj).checked){
		return eval("document.all."+vObj).value;
	}
	for (i=0; i< eval("document.all."+vObj).length; i++) {
		if (eval("document.all."+vObj+"["+i+"]").checked) {
			return eval("document.all."+vObj+"["+i+"]").value;
		}
	}
	return "";
}

/*==============================================================================================================
*   라디오 박스의 리스트중, 원하는값을 선택
*	vRadioBox : 해당 콤보박스 (예 : myForm.selLandCls)
*	vValue    : 콤보박스 리스트중 선택하고자 하는 Value
*=============================================================================================================*/
function RadioBoxSelected(vRadioBox, vValue) {
	for (i=0; i<vRadioBox.length; i++) {
		if (vRadioBox[i].value == vValue) {
			vRadioBox[i].checked = true;
		}
	}

    if(vValue=="")
        vRadioBox[0].checked = true;

}

/*==============================================================================================================
*   라디오박스의 리스트중, 원하는값을 선택
*	vRadioBox : 해당 콤보박스 (예 : myForm.selLandCls)
*	vValue    : 콤보박스 리스트중 선택하고자 하는 Value
*=============================================================================================================*/
function ComboBoxSelected(vRadioBox, vValue) {
	for (i=0; i<vRadioBox.length; i++) {
		if (vRadioBox[i].value == vValue) {
			vRadioBox[i].checked = true;
		}
	}
    /* START
    * 초기화를 위하여 vValue를 ""로 넘겼을때를 위해
    * 2007-11-23
    * Boyeon.sohn
    */
    if(vValue=="")
        vRadioBox[0].checked = true;
    /* END
    * 초기화를 위하여 vValue를 ""로 넘겼을때를 위해
    * 2007-11-23
    * Boyeon.sohn
    */
}

/*==============================================================================================================
*   화면에 객체를 보이거나 보이지 않게 한다.
*	파라미터 : String 형으로 해당 ID를 준다.
*=============================================================================================================*/
function displayMode_OnOff(name)
{
	obj = document.all[name];
	if(obj.style.display == 'none') obj.style.display = 'block';
	else obj.style.display = 'none';
	self.resizeTo(document.body.scrollWidth , document.body.scrollHeight + 10);
}

/*==============================================================================================================
*   폼필드 값 설정 체크
*	파라미터 : 폼필드, 값
*   추가 : 04.08.28 한영태
*=============================================================================================================*/
function setFormValue(field, val){
	var field_type;
	var length = eval(field.length);
	if(length >= 1){
		field_type = field[0].type;
	}else{
		field_type  = field.type;
	}

	if(field_type=='select-one'){
		for(i=0; i < field.length; i++)	{
			if(field.options[i].value == val){
				field.options[i].selected = true;
			}
		}
	}else if(field_type=='radio'||field_type=='checkbox'){
		setRdoValue(field, val);
	}else{
		field.value=val.replace("&quot;","\"").replace("&#39;","'").replace("&lt;","<").replace("&gt;",">");;
	}
}

/*==============================================================================================================
*   폼 radio 필드 값 설정 체크
*	파라미터 : 폼필드, 값
*   추가 : 04.08.28 한영태
*=============================================================================================================*/
function setRdoValue(field, val)
{
	for(i=0; i < field.length; i++){
	if(field[i].value == val){
		field[i].checked = true;
		}
	}
}

/*==============================================================================================================
*   이메일 주소 체크
*	파라미터 : 폼필드
*   추가 : 04.09.15 한영태
*=============================================================================================================*/
function checkEmail(field)
{
	field.value = trim(field.value);
	var value = field.value;
	value = value.replace(/^\s+/, '');
	field.value = value;

	if (field == null || value == "") return true;
	//han_young_tae@aa.com 이나 youngtae.han@aa.com 허용
	if ( !(/^[a-zA-Z0-9\-_.]+[/@][a-zA-Z0-9\-_]+[\.][a-zA-Z0-9\-_]+[\.]?[a-z]+$/.test(value)) )
    {
        alert("잘못된 이메일 주소입니다. 확인하세요");
        field.focus();
        return false;
    }
	return true;
}

/*==============================================================================================================
*   폼필드 입력값의 byte length 체크
*	파라미터 : 폼필드, 최대 허용 길이
*   한글사용시 한글 한자를 3 bytes로 계산함
*   onKeyup="checkByteLength2(100)"
*   추가 : 04.09.15 한영태
*=============================================================================================================*/
function checkByteLength(field, len)
{
	if(getByteLength(field.value)> len)
	{
        alert("최대 허용 길이를 초과하였습니다.");
        field.focus();
        return false;
	}
	return true;
}

function checkByteLength2(len)
{
	var e1 = event.srcElement;
	var str = e1.value;
	if(getByteLength(str)> len)
	{
        alert("입력범위를 초과하였습니다.");
		e1.value = getStrLen2( str , len );
        //e1.focus();
        return false;
	}
	return true;
}

/*==============================================================================================================
*   폼필드 입력값의 byte length 체크
*	파라미터 : 폼필드, 최대 허용 길이
*   UTF-8 3 bytes로 계산함
*   추가 : 04.10.25 한영태
*=============================================================================================================*/
function getByteLength(val)
{
	var len = 0;
	var lengthTable = new Array( new Array("\u0080", 1), new Array("\u07FF", 2), new Array("\uFFFF", 3) );
	if ( val == null ) return 0

	for(var i = 0; i < val.length; i ++ ) {
		for (j = 0; j < lengthTable.length; j++) {
			if (val.charAt(i) < lengthTable[j][0]) {
				len += lengthTable[j][1];
				break;
			}
		}
	}
	return len;
}

/*==============================================================================================================
*   p_str 문자열을 입력받아 len 길이만큼 리턴한다. 한글3자로
*	형식 :  getStrLen2( '한글123',5 )
*=============================================================================================================*/
function getStrLen2( p_str , len ){
	var c;
	var l_sLength = 0;
	var restr = "";
	var lengthTable = new Array( new Array("\u0080", 1), new Array("\u07FF", 2), new Array("\uFFFF", 3) );

	for(k = 0;k < p_str.length; k++) {
		c = p_str.charAt(k);
		for (j = 0; j < lengthTable.length; j++) {
			if (c < lengthTable[j][0]) {
				l_sLength += lengthTable[j][1];
				break;
			}
		}
		if( l_sLength <= len){
			restr = restr + c;
		}else{
			break;
		}
	}

	return restr;
}

/*==============================================================================================================
*   폼필드중 Select에대한 선택값을 반환한다.
*	파라미터 : 폼필드
*   추가 : 04.10.13 한영태
*=============================================================================================================*/
function getSelectValue(field){
	var selIndex = field.selectedIndex;
	var selValue = field.value;

	return selValue;
}

/*==============================================================================================================
*   로컬의 년월을 돌려준다.
*	형식 :
*=============================================================================================================*/
function getGetYYYYMM() {
	var yy = "";
	var mon = "";
	currdate = new Date();
	tmpyy = currdate.getYear();
	yy = (tmpyy > 99) ? tmpyy : 1900 + tmpyy;

	tmpmon = currdate.getMonth();
	if(tmpmon < 9) {
		mon = "0" + (tmpmon + 1);
	}
	else
		mon = tmpmon + 1;

	return yy+''+mon;
}

/*==============================================================================================================
// URL의 파라미터 값 구하기.

// 사용법.
//		1. 파라미터값 구하기.
//			var page = new PageQuery(location.search);
//			var myValue1 = page.getValue("text1");		// myValue1 변수에 text1 파라미터의 값이 저장됨.
//		2.  모든 파라미터명 구하기
//			page.getParameters()
//		3. 모든 파라미터명=값 의형태로 반환
//			page.getKeyValuePairs()
//		4. 전체 파라미터의 갯수 반환
//			page.getLength()
*=============================================================================================================*/
function PageQuery(q)
{
	if(q.length > 1) this.q = q.substring(1, q.length);
	else this.q = null;
	this.keyValuePairs = new Array();
	if(q) {
		for(var i=0; i < this.q.split("&").length; i++) {
			this.keyValuePairs[i] = this.q.split("&")[i];
		}
	}
	this.getKeyValuePairs = function() { return this.keyValuePairs; }
	this.getValue = function(s) {
		for(var j=0; j < this.keyValuePairs.length; j++) {
			if(this.keyValuePairs[j].split("=")[0] == s)
				return this.keyValuePairs[j].split("=")[1];
		}
		return "";
	}
	this.getParameters = function() {
		var a = new Array(this.getLength());
		for(var j=0; j < this.keyValuePairs.length; j++) {
			a[j] = this.keyValuePairs[j].split("=")[0];
		}
		return a;
	}
	this.getLength = function() { return this.keyValuePairs.length; }
}


/*==============================================================================================================
*   vStr 문자열을 받아서 len 길이 후의 위치에 chr 문자를 추가하여 리턴
*	형식 :  addDelim( '330170', 3, '-' )
*   예제 : 330170 -> 330-170
*=============================================================================================================*/
function addDelim( vStr, len, chr ){
	if( vStr.length > len ){
		vStr = vStr.substring( 0, len ) + chr + vStr.substring( len, vStr.length );
	}
	return vStr;
}

function addDelim_3( vStr, len, chr ){
	if( vStr.length >= len ){
		vStr = vStr.substring( 0, len ) + chr + vStr.substring( len, vStr.length );
	}
	return vStr;
}

/*==============================================================================================================
*   vStr 문자열을 받아서 len 길이 후의 위치에 chr 문자를 추가하고 그 후에 len2 후에 chr 추가 후 리턴
*	형식 :  addDelim( '20040102', 4, 2, '/' )
*   예제 : 20040102 -> 2004/01/02
*=============================================================================================================*/
function addDelim2( vStr, len, len2, chr ){
	if( vStr.length > len + len2 ){
		vStr = vStr.substring( 0, len ) + chr + vStr.substring( len, len+len2 ) + chr + vStr.substring( len+len2, vStr.length );
	}else if( vStr.length <= len + len2 && vStr.length > len ){
		vStr = vStr.substring( 0, len ) + chr + vStr.substring( len, vStr.length );
	}
	return vStr;
}

function getZipFormat( vStr ) {
	return addDelim( vStr , 3, '-' );
}

function getZipFormat3( vStr ) {
	return addDelim_3( vStr , 3, '-' );
}

function getSidFormat( vStr ) {
	return addDelim( vStr , 6, '-' );
}

function getDateFormat( vStr ) {
	return addDelim2( vStr , 4, 2, '-' );
}

function replaceAll(a , chr1 , chr2){
    for (; a.indexOf(chr1) != -1 ;){
      a = a.replace(chr1,chr2);
    }
    return a;
}

/*==============================================================================================================
*   해당 filed의 min, max 길이를 체크하여 해당범위를 넘는지 체크한다.
*	형식 :  isLengthCheck('frm','name', 1, 10 )
*=============================================================================================================*/
function isLengthCheck( frmName, fieldName , minLen, maxLen ){
	var len = (eval("document." + frmName + "." + fieldName).value).length;
	if( len < minLen || len > maxLen ){
		return false;
	}else{
		return true;
	}
}

/*==============================================================================================================
*   input 항목의 onkeyup 이벤트에 해당필드의 입력된 문자의 maxLen 을 체크하여 초과될 경우 메세지를 나타낸후 초과된 길이만큼 삭제한다.
*	형식 :  checkMaxLen( 'frm', 'name', 10 )
*=============================================================================================================*/
function checkMaxLen2( frmName, fieldName , maxLen ){
	var str = eval("document." + frmName + "." + fieldName).value;
	var len = getLength( str );
	if( len > maxLen ){
		alert( "입력범위를 초과하였습니다." );
		eval("document." + frmName + "." + fieldName).value = getStrLen( str , maxLen );
	}
}

function checkMaxLen( maxLen ){
	var e1 = event.srcElement;
	var str = e1.value;
	var len = getLength( str );
	if( len > maxLen ){
		alert( "입력범위를 초과하였습니다." );
		e1.value = getStrLen( str , maxLen );
	}
}

/*==============================================================================================================
*   p_str 문자열을 입력받아 len 길이만큼 리턴한다. 한글3자로
*	형식 :  getStrLen( '한글123',5 )
*=============================================================================================================*/
function getStrLen( p_str , len ){
	var c;
	var l_sLength = 0;
	var restr = "";
	for(k = 0;k < p_str.length; k++) {
		c = p_str.charAt(k);
		if ((c == "\n") || ((c >= "ㅏ") && (c <= "히")) || ((c >="ㄱ") && (c <="ㅎ"))){
		    l_sLength += 3;
	    }else{
		    l_sLength += 1;
        }
		if( l_sLength <= len){
			restr = restr + c;
		}else{
			break;
		}
	}

	return restr;
}


/*==============================================================================================================
*   숫자 입력 항목의 입력값 체크.
*	사용법 : <input type="text" name="pnum" onKeyup="checknumber(5)" style="text-align:right">
*	형  식 :  checknumber(5) ==> 무조건 5자리만 들어감.
			  NUMBER(12.2) 일 경우, 12를 파라미터로 주면 됨.
*=============================================================================================================*/
function checknumber(vVal){
	event.srcElement.value = event.srcElement.value.substring(0,vVal);

	if (event.keyCode ==36 || event.keyCode ==37 || event.keyCode ==39 || event.keyCode ==8) return false;
	if (event.srcElement.value == "") return false;

	var x=event.srcElement.value;
	var anum=/(^\d+$)|(^\d+\.\d+$)|(^\d+\.+$)/;
	var str="";
	var comma2 = false;

	if (x.indexOf("..") != -1) {
		x = x.replace("..",".");
		event.srcElement.value= x;
	}
	if (anum.test(x))
		testresult=true
	else{
		alert("숫자만 입력 하세요")
		for (i=0;i<x.length;i++)
			if (anum.test(x.substr(i,1)) ) str += x.substr(i,1);
		event.srcElement.value= str;
		testresult=false
	}
	return (testresult)
}

/*==============================================================================================================
*   문화재 상세 정보를 조회 할 수 있음.
*	p_cp_no		: 문화재번호	: 무조건 값이 입력 되어야함. (not null)
	p_cp_sno	: 문화재순번	: 특정 문화재 순번을 조회 하고자 할 경우 입력 (null)
	mode		: 처리 모드		: 문화재 정보의 처리 모드를 입력한다. (null --> R ) (수정대상 --> U)
	p_win_gb	: 화면표시방법	: Popup을 띄울것인가? 아니면, 현재화면에 표시할 것인가를 결정한다. (null --> pupup) (cur --> 현재화면)
	p_prt_dsct_no : 지정/보호구역정보 상세조회 : 지정/보호구역정보를 상세조회 할 경우, 지정/보호구역일련번호 (null)
	p_prt_good_no : 보호물정보 상세조회 : 보호물정보를 상세조회 할 경우, 보호물번호 (null)
	p_blg_no	: 부속물정보 상세조회 : 부속물정보를 상세조회 할 경우, 부속물번호 (null)
	p_itcp_owr_no : 보유자정보 상세조회 : 보유자정보를 상세조회 할 경우, 보유자번호 (null)
	p_owr_org_prvt_no : 보유단체정보 상세조회 : 보유단체정보를 상세조회 할 경우, 보유단체개인정보번호 (null)
*=============================================================================================================*/
function CulturalInfoDetailView(p_cp_no, p_cp_sno, mode, p_win_gb, p_prt_dsct_no, p_prt_good_no, p_blg_no, p_itcp_owr_no, p_owr_org_prvt_no) {
	var stMode = mode;
	var stWinGb = "";
	var stURL = "";

	if (p_cp_no == null || p_cp_no == "") {
		alert("문화재를 선택하세요.");
		return;
	}
	if (mode == null || mode == "") {
		stMode = "R";
	}
	if (p_win_gb == null || p_win_gb == "") {
		stWinGb = "popup";
	}


	stURL =  "/cpms/CpmsmastMenu01.do?";
	stURL += "mode="+stMode;
	stURL += "&p_cp_no="+p_cp_no;
	stURL += "&p_cp_sno="+p_cp_sno;
	stURL += "&p_win_gb="+stWinGb;
	stURL += "&p_prt_dsct_no="+p_prt_dsct_no;
	stURL += "&p_prt_good_no="+p_prt_good_no;
	stURL += "&p_blg_no="+p_blg_no;
	stURL += "&p_itcp_owr_no="+p_itcp_owr_no;
	stURL += "&p_owr_org_prvt_no="+p_owr_org_prvt_no;

	if (stWinGb == "popup") {
		myRef = window.open(stURL,"CulturalInfoDetailView", "left=20,top=20,width=825,height=600,toolbar=0,resizable=1,status=1,scrollbars=1");
		myRef.focus();
	} else {
		location.href = stURL;
	}
}

/*검색조건의 변수를 을 상세화면까지 넘겨줌 ( 상세화면 검색 후 목록보기를 통해 리스트화면으로 왔을 때 입력한 조건이 유지됨*/
function CulturalInfoDetailView2(p_cp_no, p_cp_sno, mode, p_win_gb, p_prt_dsct_no, p_prt_good_no, p_blg_no, p_itcp_owr_no, p_owr_org_prvt_no, p_cp_cls, p_apm_no, p_cp_plc, p_des_cnl_gbn, p_cp_name, p_owr_prvt_nm, p_sid, p_posr_prvt_nm, p_mng_org_prvt_nm, p_start_s, p_end_s, p_start_c, p_end_c, p_mng_dept_nm  ) {
	var stMode = mode;
	var stWinGb = "";
	var stURL = "";

	if (p_cp_no == null || p_cp_no == "") {
		alert("문화재번호를 선택하셔야 합니다.");
		return;
	}
	if (mode == null || mode == "") {
		stMode = "R";
	}
	if (p_win_gb == null || p_win_gb == "") {
		stWinGb = "popup";
	}


	stURL =  "/cpms/CpmsmastMenu01.do?";
	stURL += "mode="+stMode;
	stURL += "&p_cp_no="+p_cp_no;
	stURL += "&p_cp_sno="+p_cp_sno;
	stURL += "&p_win_gb="+stWinGb;
	stURL += "&p_prt_dsct_no="+p_prt_dsct_no;
	stURL += "&p_prt_good_no="+p_prt_good_no;
	stURL += "&p_blg_no="+p_blg_no;
	stURL += "&p_itcp_owr_no="+p_itcp_owr_no;
	stURL += "&p_owr_org_prvt_no="+p_owr_org_prvt_no;
	stURL += "&CP_NAME="+p_cp_name;
	stURL += "&CP_CLS="+p_cp_cls;
	stURL += "&APM_NO="+p_apm_no;
	stURL += "&CP_PLC="+p_cp_plc;
	stURL += "&OWR_PRVT_NM="+p_owr_prvt_nm;
	stURL += "&SID="+p_sid;
	stURL += "&POSR_PRVT_NM="+p_posr_prvt_nm;
	stURL += "&MNG_ORG_PRVT_NM="+p_mng_org_prvt_nm;
	stURL += "&DES_CNL_GBN="+p_des_cnl_gbn;
	stURL += "&staDt_s="+p_start_s;
	stURL += "&endDt_s="+p_end_s;
	stURL += "&staDt_c="+p_start_c;
	stURL += "&endDt_c="+p_end_c;
	stURL += "&mng_dept_nm="+p_mng_dept_nm;
	

	if (stWinGb == "popup") {
		myRef = window.open(stURL,"CulturalInfoDetailView", "left=20,top=20,width=825,height=600,toolbar=0,resizable=1,status=1,scrollbars=1");
		myRef.focus();
	} else {
		location.href = stURL;
	}
}

/*==============================================================================================================
*   문화재 관리단체의 상세정보를 조회 할 수 있음.
*	mode		: 처리 모드		: 문화재 정보의 처리 모드를 입력한다. (null --> R ) (수정대상 --> U)
	p_mng_org_prvt_no	: 관리단체 개인정보번호	: 조회하고자하는 관리단체 개인정보번호 (not null)
*=============================================================================================================*/
function CulMngOrgView(mode, p_mng_org_prvt_no) {
	var stURL = "";

	if (mode != "C") {
		if (p_mng_org_prvt_no == null || p_mng_org_prvt_no == "") {
			alert("관리단체 개인정보번호를 선택하셔야 합니다.");
			return false;
		}
	}

	if (mode == null || mode == "") {
		stMode = "R";
	}

	stURL =  "/cpms/CpmsmgifR___01.do?";
	stURL += "mode="+mode;
	stURL += "&p_mng_org_prvt_no="+p_mng_org_prvt_no;

	myRef = window.open(stURL,"cpmsmgif_modify", "left=40,top=70,width=800,height=500,toolbar=0,resizable=0,status=1");
	myRef.focus();
}

/*==============================================================================================================
*   문화재를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) CulturalSelect("CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
		cp_no : 문화재번호				cp_sno : 문화재순번					mng_org_prvt_no : 관리단체개인정보번호
		cp_name : 문화재명				cp_cname :문화재한문명				cp_ename : 문화재영문명
		cp_cls : 종목코드				apm_no : 지정번호					cp_plc : 소재시도코드
		grpg_cd : 분류코드				con_mng_cd : 집중관리여부코드		rel_cd : 종교코드
		cre_age : 조성연대코드			dynasty : 왕조코드					qty_area : 수량 및 면적
		material : 재료					structure : 구조					forms : 형태
		scale : 규모					plc_zip_cd : 소재지우편번호			plc_addr1 : 소재지 주소1
		plc_addr2 : 소재지주소2			owr_prvt_no : 소유자개인정보번호	posr_prvt_no : 점유자개인정보번호
		pato_gbn : 궁능원구분			des_cnl_gbn : 지정해제구분			des_dt : 지정일자('YYYY-MM-DD')
		cnl_dt : 해제일자('YYYY-MM-DD')	mng_org_prvt_nm : 관리단체명		cp_cls_nm : 종목명
		cp_plc_nm : 소재시도명			grpg_cd_nm : 분류명					con_mng_cd_nm : 집중관리여부명
		rel_cd_nm : 종교명				cre_age_nm : 조성연대명				des_cnl_gbn_nm : 지정해제구분명
		dynasty_nm : 왕조명				owr_prvt_nm : 소유자명				posr_prvt_nm : 점유자명
		cp_cls_apm_no : 종별 (중요무형문화재 23호)
*=============================================================================================================*/
function CulturalSelect(vParams) {
	myRef = window.open("/cpms/CpmsmastList01.do?params="+vParams, "CulturalSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

function CulturalSelect2(vParams, vCpCls, vApmNo, vCpName, vCpPlc) {
	myRef = window.open("/cpms/CpmsmastList01.do?params="+vParams+"&CP_NAME="+escape(vCpName)+"&CP_CLS="+vCpCls+"&APM_NO="+vApmNo+"&CP_PLC="+vCpPlc, "CulturalSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

/**
 * 문화재 다중선택 
 **/
function CulturalMultiSelect(vParams) {
	myRef = window.open("/cpms/CpmsmastList02.do?params="+vParams, "CulturalSelect", "left=10,top=10,width=825,height=900,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

function CulturalSelect3(vParams, jSctipt) {
	myRef = window.open("/cpms/CpmsmastList01.do?params="+vParams + "&jscript=" + jSctipt , "CulturalSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

function CulturalSelect4(vParams, jSctipt, vCpCls, vApmNo, vCpName, vCpPlc ) {
	myRef = window.open("/cpms/CpmsmastList01.do?params="+vParams + "&jscript=" + jSctipt + "&CP_NAME="+escape(vCpName)+"&CP_CLS="+vCpCls+"&APM_NO="+vApmNo+"&CP_PLC="+vCpPlc , "CulturalSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}
/*==============================================================================================================
*   문화재의 지정/보호구역 정보를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) PrtDsctSelect(문화재번호, "CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
		prt_dsct_no : 지정/보호구역일련번호	cp_no  : 문화재번호				cp_sno cp_sno : 문화재순번
		dsct_gbn : 지정/보호구분코드		dsct_gbn_nm : 지정/보호구분명	land_cls : 지목코드
		land_cls_nm : 지목명				area : 면적						des_area : 지정면적
		prt_dsct_zip_cd : 우편번호			prt_dsct_addr1 : 주소1			prt_dsct_addr2 : 주소2
		land_lot_no : 지번					owr_gbn : 소유구분코드			owr_gbn_nm : 소유구분명
		owr_prvt_no : 소유자개인정보번호	owr_prvt_nm : 소유자명			des_cnl_gbn : 지정해제구분
		des_cnl_gbn_nm : 지정해제구분명		des_dt : 지정일					cnl_dt : 해제일
		reg_dt : 등록일						upd_dt : 수정일					updr_id : 수정자id
*=============================================================================================================*/
function PrtDsctSelect(vCpNo, vParams) {
	if (vCpNo == "")
	{
		alert("문화재번호가 입력되지 않았습니다.");
		return false;
	}
	myRef = window.open("/cpms/CpmspdifList01.do?p_cp_no="+vCpNo+"&params="+vParams, "PrtDsctSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}


/*==============================================================================================================
*   문화재의 보호물 정보를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) PrtGoodSelect(문화재번호, "CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
		prt_good_no : 보호물번호		cp_no : 문화재번호			cp_sno : 문화재일련번호
		prt_good_name : 보호물명칭		qty : 수량					owr : 소유자
		mngr : 관리자					posr : 점유자				des_cnl_gbn : 지정해제구분코드
		des_cnl_gbn_nm : 지정해제구분명	des_dt : 지정일				cnl_dt : 해제일
		reg_dt : 등록일					upd_dt : 수정일				updr_id : 수정자id
==============================================================================================*/
function PrtGoodSelect(vCpNo, vParams) {
	if (vCpNo == "")
	{
		alert("문화재번호가 입력되지 않았습니다.");
		return false;
	}
	myRef = window.open("/cpms/CpmspgifList01.do?p_cp_no="+vCpNo+"&params="+vParams, "PrtGoodSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}


/*==============================================================================================================
*   문화재의 보유자 정보를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) OwnerSelect(문화재번호, "CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
		itcp_owr_no : 보유자번호		cp_no : 문화재번호				cp_sno : 문화재순번
		des_gbn : 인정구분코드			des_gbn_nm : 인정구분명			owr_prvt_no : 보유자개인정보번호
		owr_prvt_nm : 보유자명			owr_ant_name : 보유자예명		owr_job : 보유자직업?
		owr_skill : 보유기예능			thr_prvt_no : 스승개인정보번호	thr_prvt_nm : 스승이름
		des_cnl_gbn : 지정해제구분코드	des_cnl_gbn_nm : 지정해제구분명	des_dt : 지정일
		cnl_dt : 해제일					reg_dt : 등록일					upd_dt : 수정일
		updr_id : 수정자id
==============================================================================================*/
function OwnerSelect(vCpNo, vParams) {
	if (vCpNo == "")
	{
		alert("문화재번호가 입력되지 않았습니다.");
		return false;
	}
	myRef = window.open("/cpms/CpmsowifList01.do?p_cp_no="+vCpNo+"&params="+vParams, "OwnerSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}


/*==============================================================================================================
*   문화재의 부속물 정보를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) BlgSelect(문화재번호, "CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
        blg_no : 부속물번호         cp_no : 문화재번호          cp_sno : 문화재순번
        blg_name : 명칭             blg_std : 규격              blg_qty : 수량
        reg_dt : 등록일             udp_dt : 수정일             updr_id : 수정자ID
==============================================================================================*/
function BlgSelect(vCpNo, vParams) {
	if (vCpNo == "")
	{
		alert("문화재번호가 입력되지 않았습니다.");
		return false;
	}
	myRef = window.open("/cpms/CpmsblifList01.do?p_cp_no="+vCpNo+"&params="+vParams, "BlgSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

/*==============================================================================================================
*   문화재의 보유단체 정보를 선택 할 수 있음.
*	vParams : 선택하고자하는 필드명 + ";" + 입력될 폼의 객체명
			예) OwrOrgSelect(문화재번호, "CP_NAME;myForm.T1;apm_no;myForm.T2");
			예) 폼명.항목명 (주의: .value는 쓰지 않는다.)
*	넘겨받을수 있는 필드정의
        owr_org_prvt_no : 보유단체개인정보번호  cp_no : 문화재번호                  cp_sno : 문화재순번
        owr_org_prvt_nm : 보유단체명            repr_prvt_no : 대표자개인정보번호   repr_prvt_nm : 대표자명
        des_dt : 지정일                         cnl_dt : 해제일
==============================================================================================*/
function OwrOrgSelect(vCpNo, vParams) {
	if (vCpNo == "")
	{
		alert("문화재번호가 입력되지 않았습니다.");
		return false;
	}
	myRef = window.open("/cpms/CpmsogifList01.do?p_cp_no="+vCpNo+"&params="+vParams, "OwrOrgSelect", "left=10,top=10,width=825,height=600,toolbar=0,resizable=0,status=1,scrollbars=1");
    myRef.focus();
}

/*============================================================================
 * 설  명 : AAA-BB-CC등의 하이픈기호가 삽입된 Data를 AABBCC로 바꾼 후 리턴한다.
 * 인자 1 : value - 하이픈이들어간 Data
 * 리턴값 : 하이픈이 제거된 Data
 ============================================================================*/
 function rmDate(value) {
	return value.replace(dateGuBun,"");
 }

/*======================================================================================================
 * 설  명 : YYYYMMDD의 날짜를 YYYY-MM-DD로 바꾸거나 123456의 우편번호를 123-456으로 바꾼후 리턴한다.
 * 인자 1 : value - 8자리 날짜, 6자리 우편번호
 * 인자 2 : gubun - data 또는 post의 구분값
 * 리턴값 : format 된 10자리 날짜, 7자리 우편번호
 ======================================================================================================*/
function plusHipen(value, gubun) {
	if (value == "") {
		return value;
	}
	if (gubun == "date"){
		yyyy = value.substring(0, 4);
		mm = value.substring(4, 6);
		dd = value.substring(6, 8);
		return yyyy + "-" + mm + "-" + dd;
	}else if( gubun == "post"){
		front = value.substring(0,3);
		real	= value.substring(3,6);
		return front + "-" + real;
	}
}
/*=======================================================
 * 설  명 : 숫자에 , 를 제거한 후 리턴한다.
 * 인자 1 : num에 , 가 붙은 숫자
 * 리턴값 : , 가 제거된 문자열
 =======================================================*/
function rmNum(value) {
	return value.replace(/\,/g,"");
}



/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어 리턴
 =======================================================*/
function getCommaSplit( srcNumber ) {
    num1 = srcNumber.length;        //숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);   //입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
        return src2;
        srcNumber = src2;
    }

    re = /^$|,/g;                          // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;

    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            return arrNumber.join('');
        } else {
            return arrNumber[0].split('.')[0];
        }
        return "1";
   }
}
/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어 리턴
 * 추가자 : 정희석
 =======================================================*/
function getCommaSplit_1( srcNumber ) {
		if(srcNumber == null || srcNumber == "") return "0";
		if(eval(srcNumber) == 0) return "0";

    num1 = srcNumber.length;        //숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);   //입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
        return src2;
        srcNumber = src2;
    }

    re = /^$|,/g;                          // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;

    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            return arrNumber.join('');
        } else {
            return arrNumber[0].split('.')[0];
        }
        return "1";
   }
}
/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 =======================================================*/
function commaSplit( ) {
	var e1 = event.srcElement;
	var srcNumber = e1.value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
            //alert("a");
    //return src2;
            srcNumber = src2;
    }

    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    ///// document.forms[0].sell_price.value=srcNumber;//힌드값에..콤마를 뺀 값을 넣어든다.

    var txtNumber = '' + srcNumber;


   //여기서 부터 3자리마다 콤마를 찍어 준다.
    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        e1.value = "";
        e1.focus();
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            e1.value = arrNumber.join('');
        } else {
            e1.value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}
/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다 (0을 허용한다)
 =======================================================*/
function commaSplit0() {
	var e1 = event.srcElement;
	var srcNumber = e1.value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
            //alert("a");
    //return src2;
            srcNumber = "0";
    }

    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    ///// document.forms[0].sell_price.value=srcNumber;//힌드값에..콤마를 뺀 값을 넣어든다.

    var txtNumber = '' + srcNumber;


   //여기서 부터 3자리마다 콤마를 찍어 준다.
    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        e1.value = "";
        e1.focus();
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            e1.value = arrNumber.join('');
        } else {
            e1.value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}
/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  폼이름, 숫자필드이름
 =======================================================*/
function commaSplit1(frmName, eleName ) {

	var srcNumber = eval("document." + frmName + "." + eleName).value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

	/*
    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
    //return src2;
            srcNumber = src2;
    }
    */
	
    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;

   //여기서 부터 3자리마다 콤마를 찍어 준다.
    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        eval("document." + frmName + "." + eleName).value = "";
        eval("document." + frmName + "." + eleName).focus();
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] = arrNumber[0]*1 + '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            eval("document." + frmName + "." + eleName).value = arrNumber.join('');
        } else {
            eval("document." + frmName + "." + eleName).value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}

/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  폼이름, 숫자필드이름
 * 수정자 : 정희석
 =======================================================*/
function commaSplit1_1(frmName, eleName ) {
	var obj = eval("document." + frmName + "." + eleName);
	if (obj == null || obj.value == undefined)
	{
		return;
	}

	var srcNumber = obj.value;
	srcNumber = replaceAll(srcNumber,' ','');
	srcNumber = replaceAll(srcNumber,',','');

	if(checkNumber2(srcNumber) == false) {
		obj.value = "0";
		return;
	}

	if(srcNumber == "" || eval(srcNumber) == 0){
		obj.value = "0";
		return;
	}

	num1 = srcNumber.length;//숫자의 길이를 구한다.
	src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
	src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

	if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
		//return src2;
		srcNumber = src2;
	}

	re = /^$|,/g; // "$" and "," 입력 제거
	srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

	var txtNumber = '' + srcNumber;


 //여기서 부터 3자리마다 콤마를 찍어 준다.
	if (isNaN(txtNumber)) {//숫자인가 비교
		alert("숫자만 입력 하세요..");
		obj.value = "";
		obj.focus();
		return "0";
	} else {
		var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
		var arrNumber = txtNumber.split('.');
		arrNumber[0] += '.';
		do {
				arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
		} while (rxSplit.test(arrNumber[0]));

		if (arrNumber.length > 1) {
				obj.value = arrNumber.join('');
		} else {
				obj.value = arrNumber[0].split('.')[0];
		}
		return "1";
 }
}

/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어주고 한글로 표시한다 (금액)
 * 인자 1 :  폼이름, 숫자필드이름 , 금액 한글필드이름
 =======================================================*/
function commaSplit2(frmName, eleName, hanEvalName ) {

	var srcNumber = eval("document." + frmName + "." + eleName).value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........

    //return src2;
            srcNumber = src2;
    }

    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;

    //여기서 부터 숫자를 한글로 변환 시켜주는 부분
    if(srcNumber != ""){
       var i, j=0, k=0;
       var han1 = new Array("","일","이","삼","사","오","육","칠","팔","구");
       var han2 = new Array("","만 ","억 ","조 ","경 ","해 ","시 ","양 ","구 ","간 ");
       var han3 = new Array("","십","백","천");
       var result="", hangul = srcNumber + "", pm = "";
       var str = new Array(), str2="";
       var strTmp = new Array();

       if(parseInt(srcNumber)==0) eval("document." + frmName + "." + hanEvalName).value = "영"; //입력된 숫자가 0일 경우 처리
       if(hangul.substring(0,1) == "-"){ //음수 처리
           pm = "마이너스 ";
           hangul = hangul.substring(1, hangul.length);
       }
       if(hangul.length > han2.length*4) eval("document." + frmName + "." + hanEvalName).value ="too much number"; //범위를 넘는 숫자 처리 자리수 배열 han2에 자리수 단위만 추가하면 범위가 늘어남.

       for(i=hangul.length; i > 0; i=i-4){
           str[j] = hangul.substring(i-4,i); //4자리씩 끊는다.
           for(k=str[j].length;k>0;k--){
               strTmp[k] = (str[j].substring(k-1,k))?str[j].substring(k-1,k):"";
               strTmp[k] = han1[parseInt(strTmp[k])];
               if(strTmp[k]) strTmp[k] += han3[str[j].length-k];
               str2 = strTmp[k] + str2;
           }
           str[j] = str2;
           if(str[j]) result = str[j]+han2[j]+result;
           j++; str2 = "";
       }

       eval("document." + frmName + "." + hanEvalName).value = "( " + pm + result + "원 )"; //부호 + 숫자값
    }else{
       eval("document." + frmName + "." + hanEvalName).value = "";
    }

    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        eval("document." + frmName + "." + eleName).value = "";
		eval("document." + frmName + "." + hanEvalName).value = "";
        eval("document." + frmName + "." + eleName).focus();
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            eval("document." + frmName + "." + eleName).value = arrNumber.join('');
        } else {
            eval("document." + frmName + "." + eleName).value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}

/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  폼이름, 숫자필드이름, 앞자리, 뒷자리
 =======================================================*/
function commaSplit3(frmName, eleName, ap_cnt, du_cnt ) {

	var srcNumber = eval("document." + frmName + "." + eleName).value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(srcNumber.substr(0,2) == "00" || srcNumber.substr(0,2) == "01" || srcNumber.substr(0,2) == "02" || srcNumber.substr(0,2) == "03" || srcNumber.substr(0,2) == "04" || srcNumber.substr(0,2) == "05" || srcNumber.substr(0,2) == "06" || srcNumber.substr(0,2) == "07" || srcNumber.substr(0,2) == "08" || srcNumber.substr(0,2) == "09"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
            srcNumber = src2;
    }

    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;


   //여기서 부터 3자리마다 콤마를 찍어 준다.
    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        eval("document." + frmName + "." + eleName).value = "";
        eval("document." + frmName + "." + eleName).focus();
        return "0";
    } else {


		var arraystr = txtNumber.split('.')
		if(arraystr.length > 1) {
			// 길이체크
			var nososuText = arraystr[0];
			var sosuText   = arraystr[1];
			if(nososuText.length > ap_cnt) {
				alert("소수점 앞 자리수는 " + ap_cnt + "을 넘을수 없습니다.");
	            txtNumber = nososuText.substring(0, ap_cnt)  + "." + sosuText;
//				return "1";
			}
			if(sosuText.length > du_cnt) {
				alert("소수점 뒤 자리수는 " + du_cnt + "을 넘을수 없습니다.");
	            txtNumber  = nososuText  + "." + sosuText.substring(0, du_cnt);
//				return "1";
			}
		}
		else {
			if(txtNumber.length > ap_cnt) {
				alert("소수점 앞 자리수는 " + ap_cnt + "을 넘을수 없습니다.");
	            txtNumber  = txtNumber.substring(0, ap_cnt);
//				return "1";
			}
		}


//		if(sosuText.length > du_cnt) {
//			eval("document." + frmName + "." + eleName).value = arrNumber.join('');
//		}

        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            eval("document." + frmName + "." + eleName).value = arrNumber.join('');
        } else {
            eval("document." + frmName + "." + eleName).value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}


function file_upload2(rcp_no,form_sno,form_no,mode,title)
{
		var s_status ;
		s_status=s_status + "toolbar=no,";
		s_status=s_status + "location=no,";
		s_status=s_status + "directories=no,";
		s_status=s_status + "status=no,";
		s_status=s_status + "menubar=no,";
		s_status=s_status + "scrollbars=yes,";
		s_status=s_status + "resizable=yes,";
		s_status=s_status + "width=820,";
		s_status=s_status + "height=600,";
		var url = "/common/CommFileUpload12.jsp?p_rcp_no=" + rcp_no + "&p_doc_num=" + form_sno + "&p_step_no=" + form_no + "&mode=" + mode;
		myRef = window.open(url, "uploadWin", s_status);
		myRef.focus();
	//var ws = "status:no; help:no; dialogWidth:800px; dialogHeight:600px;";
	//var ret = showModalDialog(url, window, ws );

}

/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  폼이름, 숫자필드이름
 =======================================================*/
function commaSplit13(frmName, eleName ) {

	var srcNumber = eval("document." + frmName + "." + eleName).value;
	srcNumber = replaceAll(srcNumber,' ','');
    num1 = srcNumber.length;//숫자의 길이를 구한다.
    src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
    src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

    if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
    //return src2;
			srcNumber = "0";
    }

    re = /^$|,/g; // "$" and "," 입력 제거
    srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

    var txtNumber = '' + srcNumber;


   //여기서 부터 3자리마다 콤마를 찍어 준다.
    if (isNaN(txtNumber)) {//숫자인가 비교
        alert("숫자만 입력 하세요..");
        eval("document." + frmName + "." + eleName).value = "";
        eval("document." + frmName + "." + eleName).focus();
        return "0";
    } else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            eval("document." + frmName + "." + eleName).value = arrNumber.join('');
        } else {
            eval("document." + frmName + "." + eleName).value = arrNumber[0].split('.')[0];
        }
        return "1";
   }
}


/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  값
 =======================================================*/
    function commaSplit_2(srcNumber) {

        var txtNumber = '' + srcNumber;
        if (isNaN(txtNumber) || txtNumber == "") {
            alert("숫자만 입력 하세요");
            //fieldName.select();
            //fieldName.focus();
        }
        else {
            var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
            var arrNumber = txtNumber.split('.');
            arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));
        if (arrNumber.length > 1) {
            return arrNumber.join('');
        }
        else {
            return arrNumber[0].split('.')[0];
          }
       }
    }


/*=======================================================
 * 설  명 : 숫자에 3자리마다 , 를 찍어준다
 * 인자 1 :  폼이름, 숫자필드이름
 * 수정자 : 정희석
 =======================================================*/
function commaSplit_sum(frmName, targetName, srcNames) {
	var obj = eval("document.all." + targetName);
	if (obj == null)
	{
		return;
	}
	
	var srcNameArray = srcNames.split(":");
	
	if (srcNameArray.length == 0) return;
	
	var srcNumber = 0;
	
	for(var i=0; i<srcNameArray.length; i++) {
		var tmpObj = eval("document." + frmName + "." + srcNameArray[i]);
		srcNameArray[i] = replaceAll(tmpObj.value, ' ', '');
		srcNameArray[i] = replaceAll(srcNameArray[i], ',', '');
		srcNumber += eval(srcNameArray[i]);
	}

	if(checkNumber2(srcNumber) == false) {
		obj.value = "0";
		return;
	}

	if(srcNumber == "" || eval(srcNumber) == 0){
		obj.value = "0";
		return;
	}
	
	srcNumber = "" + srcNumber;
	num1 = srcNumber.length;//숫자의 길이를 구한다.
	src1 = srcNumber.substr(0,1);//입력숫자의 첫번째를 잘라 낸다..
	src2 = srcNumber.substr(1,num1);//'0'다음의 숫자를 잘라낸다.

	if(src1 == "0"){ //만약 숫자가 "0"으로 시작되면 앞에 '0'을 뺀 숫자만큼 리턴 한다........
		//return src2;
		srcNumber = src2;
	}

	re = /^$|,/g; // "$" and "," 입력 제거
	srcNumber = srcNumber.replace(re, ""); //콤마를 제거 해 준다....

	var txtNumber = '' + srcNumber;


 //여기서 부터 3자리마다 콤마를 찍어 준다.
	if (isNaN(txtNumber)) {//숫자인가 비교
		alert("숫자만 입력 하세요..");
		obj.value = "";
		//obj.focus();
		return "0";
	} else {
		var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
		var arrNumber = txtNumber.split('.');
		arrNumber[0] += '.';
		do {
				arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
		} while (rxSplit.test(arrNumber[0]));

		if (arrNumber.length > 1) {
				obj.value = arrNumber.join('');
		} else {
				obj.value = arrNumber[0].split('.')[0];
		}
		return "1";
	}
}


/*=======================================================
 * 설  명 : 등록,수정,삭제시 저장 확인여부를 물어본다.
 * 인자 1 : js_mode에 C, U, D  예) ConfirmCheck('C')
 * 리턴값 : 확인->true , 취소->false
 =======================================================*/
function ConfirmCheck(js_mode)
{
	var confirmText = '';
	if(js_mode == 'C') confirmText = "해당 내역을 저장하시겠습니까?";
	else if(js_mode == 'U') confirmText = "해당 내역을 수정하시겠습니까?";
	else if(js_mode == 'D') confirmText = "해당 내역을 삭제하시겠습니까?";

	if(confirm( confirmText )){
		return true;
	}
	return false;
}

function file_upload(rcp_no,form_sno,form_no,mode,title)
{
		var s_status ;
		s_status=s_status + "toolbar=no,";
		s_status=s_status + "location=no,";
		s_status=s_status + "directories=no,";
		s_status=s_status + "status=yes,";
		s_status=s_status + "menubar=no,";
		s_status=s_status + "scrollbars=yes,";
		s_status=s_status + "resizable=yes,";
		s_status=s_status + "width=820,";
		s_status=s_status + "height=600,";
		var url = "/common/CommFileUpload02.jsp?p_rcp_no=" + rcp_no + "&p_doc_num=" + form_sno + "&p_step_no=" + form_no + "&mode=" + mode;
		myRef = window.open(url, "uploadWin", s_status);
		myRef.focus();
	//var ws = "status:no; help:no; dialogWidth:800px; dialogHeight:600px;";
	//var ret = showModalDialog(url, window, ws );

}



/*=======================================================
 * 설  명 : 특수문자 입력못하게 하는 스크립트
 * 사용방법 : onKeyUp="javascript:CS();"
 =======================================================*/
xspecialChar = new Array("[","]","(",")","<",">","/","'",'"')
function CS() {
	var e1 = event.srcElement;
	var str = e1.value;

	var checkVal = str;
	var tmpStr = "";
	for(var i=0;i<checkVal.length;i++) {
		for (var j=0; j<xspecialChar.length;j++) {
			if(checkVal.charAt(i)==xspecialChar[j]){
				alert("특수문자는 사용할 수 없습니다.<br>☞특수문자 : [  ]  (  )  <  >  /  '  \" ");
				charIs.value = tmpStr;
				return false;
			}
		}
		tmpStr += checkVal.charAt(i);
	}
	return tmpStr;
}




/*=======================================================
 * 설  명    : onmouseover 에 각 입력박스가 최대값 len 을 넘을때 div 영역에서 보여준다.
 * 파람 설명 : x = 그려줄 테이블 넓이 , len = 초과값
 * 사용방법  : onmouseover="appData(200, 50)"
 =======================================================*/
function appData( x, len ) {
   try {
		var e1 = event.srcElement;
		var str = e1.value;
		str = replaceAll( str, "\n","<br>");

		if( len > str.length ) return;
		var vHtml = "   <table  bgcolor='#F4FAE7'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			Move2()
		}
	} catch(error) {
		return;
	} finally {

	}
}

/*=======================================================
 * 설  명    : onmouseover 이벤트에서 지정된 넓이로 text를 풍선도움말로 표시한다.
 * 파람 설명 : x = 그려줄 테이블 넓이 , text = 표시할 텍스트
 * 사용방법  : onmouseover="appData2(200, text)"
 =======================================================*/
function appData2( x, str ) {
   try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='#F4FAE7'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			Move2()
		}
	} catch(error) {
		return;
	} finally {

	}
}

function appData2_1( x, str , color ) {
   try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='"+ color +"'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			Move2( )
		}
	} catch(error) {
		return;
	} finally {

	}
}

function appData2_2( x, str , color ) {
   try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='"+ color +"'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			Move2_1( x )
		}
	} catch(error) {
		return;
	} finally {

	}
}


function appMessage( x, y, x1, y1, str , color ) {
   try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='"+ color +"'border='1' cellpadding='0' cellspacing='0'			   " +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >         " +
					"	  <tr>																		       " +
					"		<td width='"+x+"' height='"+ y +"' align='left' valign='top'>" + str + "</td>  " +
					"	  </tr>																		       " +
					"	</table>																	       " ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			MoveAll( x1, y1 )
		}
	} catch(error) {
		return;
	} finally {

	}
}

/*=======================================================
 * 설  명 : appData() 에 종속
 =======================================================*/
function Move(e) {
	document.layers['APP_DATA'].left=e.pageX + document.body.scrollLeft;
	document.layers['APP_DATA'].top=e.pageY   + document.body.scrollTop;
}
function Move2(){
	document.all["APP_DATA"].style.left=event.clientX + document.body.scrollLeft;
	document.all["APP_DATA"].style.top=event.clientY  + document.body.scrollTop;
}
function MoveMiddle(){
	document.all["APP_DATA"].style.left=event.clientX + document.body.scrollLeft;
	document.all["APP_DATA"].style.top=event.clientY  + document.body.scrollTop - 16;
}
function MoveAll(x,y){
	document.all["APP_DATA"].style.left=event.clientX + document.body.scrollLeft+x;
	document.all["APP_DATA"].style.top=event.clientY  + document.body.scrollTop+y;
}
function Move2_1(x){
	document.all["APP_DATA"].style.left=event.clientX + document.body.scrollLeft-x;
	document.all["APP_DATA"].style.top=event.clientY  + document.body.scrollTop;
}
function Move2_1_0(y){
	document.all["APP_DATA"].style.left=event.clientX + document.body.scrollLeft;
	document.all["APP_DATA"].style.top=event.clientY  + document.body.scrollTop-y;
}
function Loaded() {
	if (document.layers) {
		 window.captureEvents(Event.MOUSEMOVE)
		 window.onmousemove=Move
	}
}

/*=======================================================
  * 설  명   : appData() 로 그려준 div 영역을 지워준다.
  * 사용방법  : onmouseout="delDiv()"
 =======================================================*/
function delDiv(){
	try{
		document.all["APP_DATA"].innerHTML = "";
	} catch(error) {
		return;
	} finally {

	}
}

/*=======================================================
 * 설  명 : onMouseOver,onMouseOut 시 색상을 바꿔줌(tr 마우스 오버시 이벤트)
 * 사용방법 : <tr onMouseOver="trMouseOver(this);" onMouseOut="trMouseOut(this);">
 =======================================================*/
function trMouseOver(obj){
	if (obj.style.backgroundColor == '' || obj.style.backgroundColor.toLowerCase() == '#ffffff')
		obj.style.backgroundColor='#f4f8f0';
}

function trMouseOut(obj){
	if (obj.style.backgroundColor == '' || obj.style.backgroundColor.toLowerCase() == '#f4f8f0')
		obj.style.backgroundColor='#ffffff';
}

/*=======================================================
 * 설  명 : 멀티 그리드의 onMouseOver,onMouseOut 시 색상을 바꿔줌(tr 마우스 오버시 이벤트)
 * 사용방법 : <tr onMouseOver="trMouseOver2(target_row_tot,obj_id);" onMouseOut="trMouseOut2(target_row_tot,obj_id);">
 =======================================================*/
function trMouseOver2(target_row_tot,obj_id){
	for(var x=0; x<target_row_tot; x++){
		var obj = document.getElementById(obj_id+x);
		if (obj.style.backgroundColor == '' || obj.style.backgroundColor.toLowerCase() == '#ffffff')
			obj.style.backgroundColor='#f4f8f0';
	}
}

function trMouseOut2(target_row_tot,obj_id){
	for(var x=0; x<target_row_tot; x++){
		var obj = document.getElementById(obj_id+x);
		if (obj.style.backgroundColor == '' || obj.style.backgroundColor.toLowerCase() == '#f4f8f0')
			obj.style.backgroundColor='#ffffff';
	}
}

var rowOnclick = null;
/*=======================================================
 * 설  명 : tr에 마우스를 클릭하면 색상을 바꿔줌
 * 사용방법 : <tr onclick="rowOnclickEvent(this);" >
 =======================================================*/
function rowOnclickEvent(obj){

	if(rowOnclick != null){
		rowOnclick.style.backgroundColor = '';
	}

	obj.style.backgroundColor = '#f4f7f0';
	rowOnclick = obj;
	return;
}

/*=======================================================
 * 설  명 : 필수입력 항목을 체크한다.
 * 사용방법 : checkNullValue( 'frm', 'aplr_nm;;aplr_dt', '신청인성명;;신청인이름');
 * 리턴   : true , false
 =======================================================*/
function checkNullValue( frmName , objs, objTxts ){
	var obj    = objs.split(";;");
	var objTxt = objTxts.split(";;");
	var str = "";
	for(var i=0; i < obj.length; i++) {
		str = eval(frmName + "." + obj[i] ).value  ;
		if( str == "" ){
			alert( "[" + objTxt[i] + "] 는(은) 필수입력 항목입니다." ) ;
			eval(frmName + "." + obj[i] ).focus();
			return false;
		}
	}
	return true;
}

function checkNullValueRow( frmName , objs, objTxts , row ){
	var obj    = objs.split(";;");
	var objTxt = objTxts.split(";;");
	var str = "";
	for(var i=0; i < obj.length; i++) {
		str = eval(frmName + "." + obj[i] )[row].value  ;
		if( str == "" ){
			alert( "[" + objTxt[i] + "] 는(은) 필수입력 항목입니다." ) ;
			eval(frmName + "." + obj[i] )[row].focus();
			return false;
		}
	}
	return true;
}

/*=======================================================
 * 설  명 : 공통프로세스 화면을 리프레쉬.
 * 사용방법 : com_reloadOpener();
 * 리턴   :
 =======================================================*/
function com_reloadOpener() {
	if ( opener != undefined ) {
		parent.opener.location.reload();
		this.window.close();
	}
}


/*=======================================================
 * 설  명 : 신청서 삭제시 공통프로세스 화면 리스트로 리프레쉬.
 * 사용방법 : com_reloadOpener_init(cnt);
 * 리턴   :
 =======================================================*/
function com_reloadOpener_init(cnt) {
	if ( opener != undefined ) {
		parent.opener.parent.location.href = "/prss/PrssrcldList01.do?p_wrk_gbn=" + cnt;
		this.window.close();
	}
}

/*=======================================================
*설 명 :
*사용방법 :
*리터  :
 =======================================================*/
function checkForEnter(evt)
{
	evt = (evt) ? evt : event;
	var charCode = (evt.which) ? evt.which: evt.keyCode;
	if (charCode == 13)
		goSubmit();
	return true;
}

function onlyDate()
{
	var e1 = event.srcElement;
	var num ="0123456789-";
	event.returnValue = true;
	var str = "";

	for (var i=0;i<e1.value.length;i++)	{
		if(-1 == num.indexOf(e1.value.charAt(i))){
			event.returnValue = false;
		}else{
			str = str + e1.value.charAt(i) ;
		}
	}

	if (!event.returnValue){
		alert("정확한 날짜로 입력하세요");
		e1.value= str  ;
		return false;
	}
	return true;
}

function dateStyle(){
	if( onlyDate() == false ) return ;
	if( event.keyCode == '8' || event.keyCode == '37' || event.keyCode == '39') return;
	var e1 = event.srcElement;
	var str = e1.value;
	str = replaceAll( str , '-', '');

	if( str.length > 3 && str.length < 6 ){
		str = str.substr(0,4) + "-" + str.substr(4,str.length);
	}else if (str.length >= 6 ){
		str = str.substr(0,4) + "-" + str.substr(4,2) + "-" + str.substr(6,str.length-6);
	}
	e1.value = str ;
    checkMaxLen(10);
}

/*=======================================================
 * 설  명    : onMouseOver 날짜 Type을 설명하는 도움말을 표시한다.
 * 사용방법  : onMouseOver="date_div_show()"
 =======================================================*/
function date_div_show() {
	var x = 220;
	var str = "<font  color=red>※</font> 날짜입력 양식은 <u>'<font color=blue>YYYYMMDD</font>'</u>이며 &nbsp;&nbsp;&nbsp;&nbsp;<font color=#FF9900>년,월,일은 숫자만 입력가능</font>합니다!";

	try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='#F4FAE7'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			MoveMiddle()
		}
	} catch(error) {
		return;
	} finally {
	}
}


function date_div_show2() {
	var x = 290;
	var str = "<font  color=red>※</font> 날짜입력 양식은 <u>'<font color=blue>YYYYMMDD, YYYYMM, YYYY</font>'</u>  &nbsp;&nbsp;&nbsp;&nbsp;로 가능하며 <font color=#FF9900>년,월,일은 숫자만 입력가능</font>합니다!";

	try {
		if( trim(str) == "" ) return;
		str = replaceAll( str, "\n","<br>");

		var vHtml = "   <table  bgcolor='#F4FAE7'border='1' cellpadding='0' cellspacing='0'			" +
					"	   style='border-collapse: collapse' bordercolor='#C0C0C0' width='"+x+"' >	" +
					"	  <tr>																		" +
					"		<td width='"+x+"'  align='left' valign='top'>" + str + "</td>	    	" +
					"	  </tr>																		" +
					"	</table>																	" ;
		Loaded()
		if (document.all) {
			document.all["APP_DATA"].innerHTML =  vHtml;
			MoveMiddle()
		}
	} catch(error) {
		return;
	} finally {
	}
}


/*=======================================================
 * 설  명    : 날짜를 비교해 일수를 계산하여 text필드(target_dt)에 넣기.
 * 사용방법  : js_DateDiff2( myForm.strt_dt, myForm.end_dt, myForm.target_dt )
 =======================================================*/
function js_DateDiff2(strt_dt, end_dt, target_dt) {
    var yy, mm, dd, yy2, mm2, dd2;
	try{
		v1 = replaceAll( strt_dt.value , '-' , '' );
		v2 = replaceAll( end_dt.value , '-' , '' );

        if(v1.length == 8) {
	        yy = v1.substr(0,4);
	        mm = v1.substr(4,2);
	        dd = v1.substr(6,2);
	    }
        if(v2.length == 8) {
	        yy2 = v2.substr(0,4);
	        mm2 = v2.substr(4,2);
	        dd2 = v2.substr(6,2);
	    }

		if(v1 != "" && v2 !="" ) {
			a1 = new Date(yy*1, mm*1-1, dd*1).getTime();
			a2 = new Date(yy2*1, mm2*1-1, dd2*1).getTime();

			b = (a2-a1)/(1000*60*60*24);
			target_dt.value = b+1;
		}
	}catch(exception){
	}
}


/*=======================================================
 * 설  명    : 소수점 자리를 맞추어서 나타낸다.
 * 사용방법  : InNum1( this, 4)
 =======================================================*/

function InNum1(obj , zari ){
	 var str = obj.value ;

	 if( str == '' ) return;

	 var str_len = str.length ;
	 var dott = str.indexOf(".");
	 var dif = str_len - dott - 1 ; // 소수점 자리수
	 if ( dott == -1 ) dif = -1;

	 if( dif > zari ){
		 alert( '소수점 '+ zari +'자리까지만 입력 가능합니다.' );
		 obj.value = str.substring( 0, dott+ zari + 1 );
		 obj.focus();
	 }else if( dif >= -1 && dif < zari ){

		if( dif == -1 ) {
		    str = str + '.';
			dif = 0;
		}
		var tmp = "";

		for( var i=0 ; i < zari - dif ; i++ ){
			tmp = tmp + '0' ;
		}

		obj.value = str + tmp ;
	 }
}

function InNum0(obj , zari ){
	 var str = obj.value ;

	 if( str == '' ) return;

	 var str_len = str.length ;
	 var dott = str.indexOf(".");
	 var dif = str_len - dott - 1 ; // 소수점 자리수
	 if ( dott == -1 ) dif = -1;

	 if( dif > zari ){
		 obj.value = str.substring( 0, dott+ zari + 1 );
		 obj.focus();
	 }else if( dif >= -1 && dif < zari ){

		if( dif == -1 ) {
		    str = str + '.';
			dif = 0;
		}
		var tmp = "";

		for( var i=0 ; i < zari - dif ; i++ ){
			tmp = tmp + '0' ;
		}

		obj.value = str + tmp ;
	 }
}

function InNum2(str , zari ){
	 str = str + '';

	 var str_len = str.length ;
	 var dott = str.indexOf(".");
	 var dif = str_len - dott - 1 ; // 소수점 자리수
	 if ( dott == -1 ) dif = -1;

	 if( dif > zari ){
		 str = str.substring( 0, dott+ zari + 1 );
	 }else if( dif >= -1 && dif < zari ){

		if( dif == -1 ) {
		    str = str + '.';
			dif = 0;
		}
		var tmp = "";

		for( var i=0 ; i < zari - dif ; i++ ){
			tmp = tmp + '0' ;
		}

		str = str + tmp ;
	 }
	 return str;
}



/*=======================================================
 * 설  명    : 우편번호 팝업 스크립트
 * 사용방법  :
 =======================================================*/
	function search_post(pafrm, param, param1, addr){
		LeftPosition = (screen.width) ? (screen.width-670)/2 : 0;
		TopPosition = (screen.height) ? (screen.height-500)/2 : 0;
		settings = 'scrollbars=1,height=500,width=670,top='+TopPosition+',left='+LeftPosition;
		window.open("/sysm/SysmpostList50.do?pafrm="+pafrm+"&param="+param+"&param1="+param1 + "&addr=" + addr, "우편번호", settings);
	}




/*=======================================================
 * 설  명    : 우편번호에 따른 주소 자동 가져오기
 * 사용방법  :
 =======================================================*/
    function checkZip( frmName, zip_eleName, addr1_eleName ){

        //eval("document." + frmName + "." + zip_eleName).maxlength=6;

        if (event.keyCode < 46 || event.keyCode > 57) {
            event.returnValue = false;
        }

        var value  = eval("document." + frmName + "." + zip_eleName).value ;
        var value2 = replaceAll( value , '-' , '' );

        if( event.keyCode == 13 ){
            var  numCheck = isNaN( value2 ) ;
            if( numCheck == true ) { // 문자포함이면
                if ( value2.length > 1 ){ // 문자열이 두자리 이상이면 우편번호 검색해서 팝업을 띄운다.
                    search_post(frmName, zip_eleName, addr1_eleName , value2 );
                }
            }else {  // 숫자이면
                if( value2.length == 6 ) {                              // 6자리이면 직접 우편번호 데이터 가져온다.
                    eval("document." + frmName ).method = "post";
		            eval("document." + frmName ).action = "/common/CommGetVal.jsp?form_name="+ frmName +
                              "&ele_name=" + addr1_eleName + "&won_action="+ eval("document." + frmName ).action +
                              "&won_target=" + eval("document." + frmName ).target +
                              "&exec_query=\"SELECT SIDO || ' ' || GUGUN || ' ' || DONG || BUNJI AS ADDR1 FROM SYSMPOST WHERE ZIP_CD = '"+ value2 +"' ORDER BY ZIP_CD, BUNJI DESC\""  ;
					eval("document." + frmName ).target = "iframe_post";

		            eval("document." + frmName ).submit();

                }else if( value2.length >= 3 && value2.length < 6 ) {   // 3자리 이상 6자리 미만이면 팝업으로 관련 우편번호 보여준다.
                    search_post(frmName, zip_eleName, addr1_eleName , value2 );
                }
            }
        }

        if( value.length > 6 )  {
            eval("document." + frmName + "." + zip_eleName).value = value.substr ( 0, 7 );
            return;
        }

        eval("document." + frmName + "." + zip_eleName).value = getZipFormat3( value2 );

    }


//==============================================================================================================
//-----> 공백(space)를 구분자로 하여 입력된 나눠서 tagin 함수를 콜한다.
//==============================================================================================================
	function HtmlTextSearch( param1 ) {
		var sText = param1;

		var sTextArray = new Array ();
		sTextArray = sText.split(" ");

		for (i=0; i<sTextArray.length; i++)
		{
			if (trim(sTextArray[i]) != "")
			{
				tagin( trim(sTextArray[i]) );
			}
		}
	}

//==============================================================================================================
//-----> Html 페이지에서 특정 문자열을 찾아 해당 문자를 반전시킨다.
//==============================================================================================================

	function tagin(param1){

		var r, i, i;
		var s=document.selection.createRange().text;

		if (!s) s=param1;
		if(s) {
			r=document.body.createTextRange();
			for(i=0;r.findText(s);i++){
				r.execCommand('BackColor','','#D94A03');
				r.execCommand('ForeColor','','#FFFFFF');
				r.collapse(false)
			};
		}
	}

//==============================================================================================================
//  2007-01-12 : 강유미
//  현재입력값 길이를 모두 입력하면 다음 필드에 Focus 처리
//  Parameter 정의 : 폼이름, 현재필드명, 현재필드길이, Focus할 필드명
//==============================================================================================================

    function js_nextFocus(frmName, curField, strLen, nextField) {
      var curVal  = eval("document." + frmName + "." + curField).value;
      var nextVal = eval("document." + frmName + "." + nextField);

      if(curVal.length == strLen) nextVal.focus();
      return;
    }

//==============================================================================================================
//  2007-01-12 : 강유미
//  주민번호1,2 값을 하나의 필드로 셋팅하고 주민번호 체크 함수 호출
//  Parameter 정의 : 폼이름, 주민번호1필드명, 주민번호2필드명, 주민번호1,2 합친필드명
//==============================================================================================================

    function js_jmMerge(frmName, tmpSid1, tmpSid2, orgSid) {
      var sidVal1 = eval("document." + frmName + "." + tmpSid1).value;
      var sidVal2 = eval("document." + frmName + "." + tmpSid2).value;
      var orgVal  = eval("document." + frmName + "." + orgSid);

      if(sidVal1.length == 6 && sidVal2.length == 7) {
        orgVal.value = sidVal1 + sidVal2;
        jmCheck(frmName, orgSid);
      }else{
				alert("잘못된 주민번호입니다.");
			}

      return;
    }

//==============================================================================================================
//  2007-01-12 : 강유미
//  주민번호1,2 값을 하나의 필드로 셋팅하고 주민번호 체크 함수 호출
//  Parameter 정의 : 폼이름, 주민번호1필드명, 주민번호2필드명, 주민번호1,2 합친필드명
//==============================================================================================================

    //전자결재연동 2006.11.17 : 강유미
    //전자결재 시스템 연계 POPUP
	function openAbubePrss() {

      //2006.11.16 : 강유미
      //전자결재연동 : 현재단계에 결재 미완료된 건이 있으면 다음단계 진행 할 수 없다.
			try
			{
				if(opener.js_getApprInfo('1') == true && opener.js_getApprInfo('2') == false) {
					alert("결재내역 조회로 결재 진행 정보를 확인하십시오.");
					return;
				}
			} catch(error) {
				try
				{
					if(parent.opener.js_getApprInfo('1') == true && parent.opener.js_getApprInfo('2') == false) {
						alert("결재내역 조회로 결재 진행 정보를 확인하십시오.");
						return;
					}
				} catch(error) {
					return;
				} finally {}

			} finally {}


			myRef = window.open("","prssacube", "left=200,top=150,width=250,height=80,toolbar=0,resizable=0,status=0,scrollbars=0");
      document.frmAcube.target = "prssacube";
      document.frmAcube.action = "/prss/PrssAcubePrcApi.jsp";
      document.frmAcube.submit();
      myRef.focus();
    }


//==============================================================================================================
//  2007-02-01 : 김기남
//  사업자 번호 체크로직
//  Parameter 정의 : 폼이름, 필드명
//==============================================================================================================

 function checkCompNmbrCheck(formName, label){

	  var str = eval("document." + formName + "." + label).value;


	 while (str.indexOf('-')!=-1){
	  str = str.replace("-","");
	 }

	 if(isNaN(str)) {
	    window.alert("사업자 번호는 숫자로만 작성하셔야 합니다");
	  //formName.value="";
	  //formName.focus();
	  //  eval("document." + formName + "." + label).focus();
	  return false;
	 }

	 if (str.length != 10) {
	  //alert("사업자 번호  자릿수가 올바르지 않습니다.");
	  //  eval("document." + formName + "." + label).focus();
	  return false;
	  }

	 sumMod = 0;
	 sumMod += parseInt(str.substring(0,1));
	 sumMod += parseInt(str.substring(1,2)) * 3 % 10;
	 sumMod += parseInt(str.substring(2,3)) * 7 % 10;
	 sumMod += parseInt(str.substring(3,4)) * 1 % 10;
	 sumMod += parseInt(str.substring(4,5)) * 3 % 10;
	 sumMod += parseInt(str.substring(5,6)) * 7 % 10;
	 sumMod += parseInt(str.substring(6,7)) * 1 % 10;
	 sumMod += parseInt(str.substring(7,8)) * 3 % 10;
	 sumMod += Math.floor(parseInt(str.substring(8,9)) * 5 / 10);
	 sumMod += parseInt(str.substring(8,9)) * 5 % 10;
	 sumMod += parseInt(str.substring(9,10));

	 if (sumMod % 10 != 0)
	 {
	  //alert(str + "은(는) 올바른 사업자 번호가 아닙니다");
	  //formName.focus();
	  //eval("document." + formName + "." + label).focus();
	  return false;
	 }
	 return true;
}



//==============================================================================================================
//  2007-02-01 : 김기남
//  주민번호인지 사업자번호 인지를 체크한다.
//  Parameter 정의 : 폼이름, 필드명
//==============================================================================================================


function juminbussinCheck(frmName, fieldName){
	var value = eval("document." + frmName + "." + fieldName).value;
	var str1=value.replace( "-","");

	if(str1.length==0)  {
		return;
	} else if(str1.length==13)  {     //주민등록번호 인경우
		if( !juminCheck( str1 ) ) {
			if( value == "" ) return;
			alert('잘못된 주민등록번호입니다');
			//eval("document." + frmName + "." + fieldName).focus();
			return;
		}
	//사업자번호 체크
	} else if(str1.length==10)  {     //사업자번호 인경우
		if( !checkCompNmbrCheck(frmName,fieldName) ) {
			if( value == "" ) return;
			alert('잘못된 사업자번호입니다');
			//eval("document." + frmName + "." + fieldName).focus();
			return;
		}
	}else if(str1.length==14){
		alert('잘못된 주민등록번호입니다');
		//eval("document." + frmName + "." + fieldName).focus();
		return;
	}else{
		alert('사업자번호 또는 주민등록번호가 잘못되었습니다.');
		//eval("document." + frmName + "." + fieldName).focus();
		return;
	}
}

/*
 * 작성일 : 2007. 12. 05
 * 작성자 : 정우성
 * 내   용 : 공통 팝업창 생성
 */
function PopUpWin(url, name, width, height) {

	var x = (screen.width - width) / 2;
	var y = (screen.height - height) / 2;

	var idWin = window.open(url, name, 'left=' + x + ',top=' + y + ',width='+ width + ',height=' + height + ', toolbar=N,menubar=N,status=1,scrollbars=1,resizable=N');
	idWin.focus();
}

// 2008-06-04 resizable=Y
function PopUpWin2(url, name, width, height) {
	var x = (screen.width - width) / 2;
	var y = (screen.height - height) / 2;

	var idWin = window.open(url, name, 'left=' + x + ',top=' + y + ',width='+ width + ',height=' + height + ', toolbar=N,menubar=N,status=1,scrollbars=1,resizable=yes');
	idWin.focus();
}

// 2008-06-04 scrollbars=N
function PopUpWin3(url, name, width, height) {
	var x = (screen.width - width) / 2;
	var y = (screen.height - height) / 2;

	var idWin = window.open(url, name, 'left=' + x + ',top=' + y + ',width='+ width + ',height=' + height + ', toolbar=N,menubar=N,status=1,scrollbars=N,resizable=N');
	idWin.focus();
}

/*
 * 작성일 : 2010. 12. 01
 * 작성자 : 박현
 * 내   용 : 민원 팝업창 생성
 */
function minPopUp(url, name) {

	var x = (screen.width - 840) / 2;
	var y = 10;

	var idWin = window.open(url, name, 'left=' + x + ',top=' + y + ',width=840,height=200,toolbar=0,resizable=yes,status=1,scrollbars=yes');
	idWin.focus();
	
	if (idWin == null) {
		alert('팝업 차단을 허용해 주세요');
	} else {
		idWin.focus();
	}
	
	return idWin;
}


/*
 * 작성일 : 2007. 12. 05
 * 작성자 : 정우성
 * 내   용 : Object 객체 활성화
 */
function __ws__(id){
	document.write(id.innerHTML);
	id.id="";
}

/*
 * 작성일 : 2007. 12. 05
 * 작성자 : 김정현
 * 내   용 : 상세검색창 숨기기/보이기
 */
function dSearchTableOpen(){
	var obj = document.getElementById("d_search_table");
	var icon_obj = document.getElementById("d_search_icon");

	if(obj.style.display.toLowerCase()=="none") {
		SetCookie (location.pathname+"searchTable", "open");
		obj.style.display="block" ;
		icon_obj.src="/images/4/sbox_toggle_up.gif";
	}  else {
		SetCookie (location.pathname+"searchTable", "close");
		obj.style.display="none" ;
		icon_obj.src="/images/4/sbox_toggle_down.gif";
	}
}

/*
 * 작성일 : 2008. 01. 17
 * 작성자 : 정우성
 * 내   용 : 지정 URL로 이동
 */
function setRedirectURL(url){
	location.href = url;
}

/*
 * 작성일 : 2008. 01. 24
 * 작성자 : 유승진
 * 내  용 : 검색확장테이블 개폐상태유지 기능
 */

function dSearchTableStat() {
	if(document.all.d_search_table) {
		if(GetCookie(location.pathname+"searchTable")=="open" && GetCookie("UnloadLocation")==location.pathname) {
			document.all.d_search_table.style.display="block";
     	  	document.all.d_search_icon.src="/images/4/sbox_toggle_up.gif";
		} else SetCookie (location.pathname+"searchTable", "close");
	}
}

function setUnloadLocation() {
	SetCookie ("UnloadLocation", location.pathname);
}

/*==============================================================================================================
*   버튼을 제외한 폼의 콘트롤들을 사용불가능 상태로 만든다.
*	사용가능으로 만들 콘트롤은 enable='Y' 라는 애트리뷰트를 넣는다.
*	onload 이벤트에서 호출한다. disabled_form(formname)
*	예 : <input type='button' name=test value='닫기' enable='Y'>
*=============================================================================================================*/
function disabled_form_exceptBtns(mode) {
	if(mode != 'R') return;

	var f1 = document.all;
	for(i=0;i<f1.length;i++){
		if(f1[i].enable != 'Y'){
			if( f1[i].type == 'checkbox' ||f1[i].type == 'radio' ||f1[i].type == 'select-one' || f1[i].type == 'image'){
				if(f1[i].type == 'image'){
					f1[i].style.cursor = '';
				}
				f1[i].disabled = true;
				f1[i].style.border = '1px';
			}else if( f1[i].type == 'text' ||f1[i].type == 'textarea' ) {	/* 2005/03/16 : 텍스트상자 readOnly 로 수정 */
				f1[i].readOnly = true;
				f1[i].style.border = '1px';
			}
		}
	}
	//버튼안보이게하기
	//disable_uptButton();
}
function readOnly_form_exceptBtns( b ) {

	var f1 = document.all;
	for(i=0;i<f1.length;i++){
		if(f1[i].readOnly != true){
			if(f1[i].type == 'text' ||f1[i].type == 'textarea' ||f1[i].type == 'checkbox' ||f1[i].type == 'radio' ||f1[i].type == 'select-one') f1[i].readOnly = b;
		}
	}
}

/*
 * 작성일 : 2008. 02. 11
 * 작성자 : 정우성
 * 내   용 : 이미지 로딩후 큰 사이즈의 이미지 축소하기
 */
function upload_img_resize(target_img, imgsize)
{
	var newX;
	var newY;
	var newHeight;
	var newWidth;
	if (imgsize < 100){
		var maxWidth = 600;
		var maxHeight = 400;
	}else{
		var maxWidth = imgsize;
		var maxHeight = imgsize*0.75;
	}

	var newImg = new Image();
	newImg.src = target_img.src;

	imgw = newImg.width;
	imgh = newImg.height;

	if (imgw > maxWidth || imgh > maxHeight) {
		if (imgw > imgh) {
			if (imgw > maxWidth)
				newWidth = maxWidth;
			else
				newWidth = imgw;
				newHeight = Math.round((imgh * newWidth) / imgw);
		} else {
			if (imgh > maxHeight)
				newHeight = maxHeight;
			else
				newHeight = imgh;
				newWidth = Math.round((imgw * newHeight) / imgh);
			}
	}else {
		newWidth = imgw;
		newHeight = imgh;
	}

	newWidth = newWidth.toFixed(0)
	newHeight = newHeight.toFixed(0)

	newX = maxWidth / 2 - newWidth / 2;
	newY = maxHeight / 2 - newHeight / 2;
	target_img.onload = null;
	target_img.src = newImg.src;
	target_img.width = newWidth;
	target_img.height = newHeight;
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/gi, "");
}

String.prototype.popupView = function() {
	var img_view = this;
	var x = x + 20 ;
	var y = y + 30 ;
	htmlz = "<html><head><title>Image View</title><style>body{margin:0;cursor:pointer;}</style></head><body scroll=auto onload='width1=document.getElementById(\"Timage\").width;if(width1>1024)width1=1024;height1=document.getElementById(\"Timage\").height;if(height1>768)height1=768;top.window.resizeTo(width1+30,height1+54);' onclick='top.window.close();'><img src='"+img_view+"' title='이미지를 클릭하세요.' name='Timage' id='Timage'></body></html>";
	imagez = window.open('', "image", "width="+ 100 +", height="+ 100 +", top=0,left=0,scrollbars=auto,resizable=1,toolbar=0,menubar=0,location=0,directories=0,status=1");
	imagez.document.open();
	imagez.document.write(htmlz);
	imagez.document.close();
}

/*ActiveX 플래쉬<script>Flash(‘mnav’,‘/common/fla.mnav.swf’, ‘960’, ‘160’, ‘#FFFFFF’, ‘transparent’);</script>*/
// id: flash id // allowScriptAccess=sameDomain/always
// url: source url
// w: source width
// h: source height
// t: wmode (window/transparent/opaque)
function Flash(id,url,w,h,bg,t){
document.write("\
<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width="+w+" height="+h+" id="+id+">\
<param name='movie' value="+url+" />\
<param name='wmode' value="+t+" />\
<param name='bgcolor' value="+bg+" />\
<param name='allowScriptAccess' value='always' />\
<param name='quality' value='high' />\
<param name='menu' value='false' />\
<embed src="+url+" width="+w+" height="+h+" name="+id+" bgcolor="+bg+" allowScriptAccess='always' quality='high' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />\
</object>\
");
}
function FlashObj(id,url,param,w,h,bg,t){
document.write("\
<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width="+w+" height="+h+" id="+id+">\
<param name='movie' value="+url+" />\
<param name='FlashVars' value="+param+" />\
<param name='wmode' value="+t+" />\
<param name='bgcolor' value="+bg+" />\
<param name='allowScriptAccess' value='always' />\
<param name='quality' value='high' />\
<param name='menu' value='false' />\
<embed src="+url+" width="+w+" height="+h+" id="+id+" name="+id+" bgcolor="+bg+" allowScriptAccess='always' quality='high' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />\
</object>\
");
}

/*ActiveX WMPlayer<script>WMPlayer(‘mnav’,‘/common/fla.mnav.swf’, ‘960’, ‘160’, ‘#FFFFFF’, ‘transparent’);</script>*/
// id: Window Media Player id // allowScriptAccess=sameDomain/always
// url: source url
// w: source width
// h: source height
function WMPlayer(id,url,w,h){
document.write("\
<object classid='clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6' width="+w+" height="+h+" id="+id+">\
<param name='URL' value="+url+" />\
<param name='autoStart' value='-1' />\
<param name='uiMode' value='full' />\
</object>\
");
}


/*==============================================================================================================
*   SelectBox에 Option 추가
*	예 : addOption("sel", "001", "숭례문")
*=============================================================================================================*/
function createOption(value, text) {
	var option = document.createElement("OPTION");
	option.text = text;
	option.value = value;
	return option;
}
function addOption(obj, value, text) {
	var selectObj = document.getElementById(obj);
	selectObj.add(createOption(value, text));
	document.all[obj].value = value;
}


// 숫자 input항목의 focus 이벤트 처리
function f_focus_mny(obj){
	obj.select();
	if(obj.value == '0') obj.value='';
}

// 숫자 input항목의 blur 이벤트 처리
function f_blur_mny(obj){
	if(obj.value == '') obj.value='0';
}




 function js_jmMerge2(frmName, tmpSid1, tmpSid2, orgSid) {
   var sidVal1 = eval("document." + frmName + "." + tmpSid1).value;
   var sidVal2 = eval("document." + frmName + "." + tmpSid2).value;
   var orgVal  = eval("document." + frmName + "." + orgSid);

   	if(sidVal1.length == 6 && sidVal2.length == 7) {
    	orgVal.value = sidVal1 + sidVal2;
    	jmCheck2(frmName, orgSid,  tmpSid1, tmpSid2);
   	}else{
		alert("잘못된 주민번호입니다");
		eval("document." + frmName + "." + tmpSid1).value= "";
		eval("document." + frmName + "." + tmpSid2).value= "";
		eval("document." + frmName + "." + tmpSid1).focus();		
	}
   	return;
}



function jmCheck2( frmName, fieldName, tmpSid1, tmpSid2 ){
	var value = eval("document." + frmName + "." + fieldName).value;
	if( ! juminCheck( value ) ) {
		if( value == "" ) return;
		alert('잘못된 주민번호입니다');
		eval("document." + frmName + "." + tmpSid1).value= "";
		eval("document." + frmName + "." + tmpSid2).value= "";
		eval("document." + frmName + "." + tmpSid1).focus();
		return;
	}
}

/*==============================================================================================================
*   결재기안방식으로 기안한 온-나라 전자결재 문서 양식을 전자행정에서 확인 할 때 호출
*	L1, DOC_ID는 CommHeader.jsp 에 있는 파라미터를 사용함.
*=============================================================================================================*/

function Onnara_viewList(L1,DOC_ID ) {
	
	var url = "http://10.136.1.30/bms/com/SSO.do?cmd=SSO&L1="+L1+"&DOC_TYPE=VD&DOC_ID="+DOC_ID;
	window.open(url,'open_onnaraview','');	
}



  function createHidden(_document, _id, _name, _value){
	var obj = _document.createElement("input");
	obj.type = "hidden";
	obj.id = _id;
	obj.name = _name;
	obj.value = _value;
	return obj;
  }

  function isMobileNumber(_mob_no){
	if( typeof(_mob_no) != 'string' && typeof(_mob_no) != 'number' ){
		return false;
	}
	_mob_no = _mob_no.toString().split("-").join("").split(" ").join("").split(")").join("");
	if( _mob_no.toString() == "" || _mob_no.toString().length < 10 || _mob_no.toString().length > 11 || _mob_no.toString().substr(0,2) != '01' ){
		return false;
	}
	return true;
  }

  function chkOne_sms(_checked, _form, _rnum, _mob_no, _receiver_nm){
	if( _checked == true ){
		// 추가
		_form.checkedRnum.value  += _rnum+"／";
		_form.checkedMobNo.value += _rnum+"："+_mob_no+"／";
		_form.checkedName.value  += _receiver_nm+"／";
		return true;
	} else {
		// 제거
		_form.checkedRnum.value  = _form.checkedRnum.value.replace(_rnum+"／", "");
		_form.checkedMobNo.value = _form.checkedMobNo.value.replace(_rnum+"："+_mob_no+"／", "");
		_form.checkedName.value  = _form.checkedName.value.replace(_receiver_nm+"／", "");
		return true;
	}
	return false;
  }
  
	/** 
	* 전체 선택 
	*/
	var j = false;
	function chkAll_sms(_form) {
		if (j == false) {
			j = true;
		} else {
			j = false;
		}
  		var chkbox = document.getElementsByName("sms_chkbox");
  		var mobNo  = document.getElementsByName("sms_mobNo");
  		var name   = document.getElementsByName("sms_name");
  		var rnum   = document.getElementsByName("sms_rnum");
		for (var ch = 0; ch < chkbox.length; ch++) {
			// 전체 선택
			if (j == true) {
				if (mobNo[ch].value == "") { continue; }
				if (chkbox[ch].disabled == true) { continue; }
				var tmpRnum = "／" + rnum[ch].value + "／";
				if (_form.checkedRnum.value.indexOf(tmpRnum) == -1) { // 이미 SMS발송대상으로 체크되어있는지 확인
					// SMS발송대상번호가 휴대폰번호인 경우만 선택되게함
					var arrMobNo = mobNo[ch].value.split(",");
					var cnt = 0;
					for (var z = 0; z < arrMobNo.length; z++) {
						if (isMobileNumber(arrMobNo[z])) {
							cnt++;
						}
					}
					if (cnt > 0) {
						if (chkOne_sms(true, _form, rnum[ch].value, mobNo[ch].value, name[ch].value) == true) {
							chkbox[ch].checked = true;
						}
					}
				} 
			// 전체 선택 해제
			} else {
				chkbox[ch].checked = false;
				chkOne_sms(false, _form, rnum[ch].value, mobNo[ch].value, name[ch].value);
			}
		}
	}
