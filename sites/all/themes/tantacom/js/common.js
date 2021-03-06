/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);


/*
 SelectNav.js (v. 0.1)
 Converts your <ul>/<ol> navigation into a dropdown list for small screens
 https://github.com/lukaszfiszer/selectnav.js
*/
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"→",u=n.label||"- Navigation -",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}()


// JavaScript Document

var herramientas = {
	archivoGrafico:function(){
		if($('.archivoGrafico .slider').length){			
			Shadowbox.init({ 
				onFinish: herramientas.createClosePopup,
				displayCounter: false,
				continuous: false
			});
			
			// paginacion de las imagenes
			var prev = $('.slider li .preview');
			$('.slider li').hide();
			$('.slider li:eq(0)').show();
			$('.tools .ant').hide();
			var cuantos = $('.slider li').length - 1;
			if (cuantos == 0){$('.tools .sig').hide();}
			var aux = 0;		
			
			$('.tools .sig').click(function(e){
				aux++;
				$('.slider li').hide();
				$('.slider li:eq(' + aux + ')').fadeIn('slow');
				if(aux == cuantos) {
					$('.tools .sig').hide()
					$('.tools .ant').show();
					aux = cuantos;
				} else if (aux == 1){
					$('.tools .ant').show();
				}
				e.preventDefault();
			});
			$('.tools .ant').click(function(e){
				aux--;
				$('.slider li').hide();
				$('.slider li:eq(' + aux + ')').fadeIn('slow');
				if(aux == 0) {
					$('.tools .ant').hide();
					$('.tools .sig').show();
				} else if (aux == cuantos - 1){
					$('.tools .sig').show();
				}
				e.preventDefault();
			});
			$('.slider').css("height",$('.slider').height());	
		}
	},
	createClosePopup:function(){		
		if (!$("#sb-info").hasClass("cloneOk")){
			var closeAux = $("#sb-info").clone(true);
			$("#sb-info").remove();
			$("#sb-wrapper-inner").before(closeAux);
			$("#sb-info").addClass("cloneOk");
			var controlsAux = $("#sb-nav-next").clone(true);
			$("#sb-nav-next").remove();
			$("#sb-body").before(controlsAux);
			controlsAux = $("#sb-nav-previous").clone(true);
			$("#sb-nav-previous").remove();
			$("#sb-body").before(controlsAux);
			$("#sb-info").css("visibility","visible");
		}
	},
	jcarousel:function(){
		if($("section.slider").length){
			/*$('section.slider ul').jcarousel({
				wrap: 'circular'
			});
			*/
		}
		var auxW = $("#sliderDots").width();
		$("#sliderDots li").css("width",auxW);
	},
	jcarouselDots:function(){
		if($("#sliderDots").length){			
			$('.jcarousel-control a:eq(0)').addClass('sel');
			
			$("#sliderDots").jcarousel({
				scroll: 1,
				wrap: 'circular',
				initCallback: mycarousel_initCallback
			});
		}	
	}
}

function mycarousel_initCallback(carousel) {
	
	var cual = 0;
	var cuantosLi = $('.jcarousel-list li').length - 1;
	
	$('.jcarousel-control a').bind('click', function() {
		$('.jcarousel-control a').removeClass('sel');
		carousel.scroll($.jcarousel.intval($(this).text()));
		$(this).addClass('sel');
		
		cual = $.jcarousel.intval($(this).text()) -1;
		
		return false;
	});
	
	$('.jcarousel-next').bind('click', function() {
		cual++;
		
		if(cual == cuantosLi + 1){ cual = 0;}
		
		$('.jcarousel-control a').removeClass('sel');		
		$('.jcarousel-control a:eq(' + cual + ')').addClass('sel');
		
		return false;
	});
	$('.jcarousel-prev').bind('click', function() {
		cual--;
		
		if( cual == -1 ){ cual = cuantosLi;}
		
		$('.jcarousel-control a').removeClass('sel');		
		$('.jcarousel-control a:eq(' + cual + ')').addClass('sel');
		
		return false;
	});
};

var formsValidations = {
		setMsgError:function(txt, form){
		
			var parentForm = form.parent();
			var msgError = parentForm.find(".msgError");
			var divElement = (msgError.length != 0) ? msgError.eq(0) : document.createElement("div");		
			var ulElement = document.createElement("ul");
			var liElement = null;		
			var errors = txt.split("|");
			var msgConfirm = $(".msgConfirm");			
			jQuery(divElement).attr("class", "msgError");
			jQuery(divElement).attr("tabIndex","-1");				
			
			if(jQuery(divElement).find("ul").length != 0) jQuery(divElement).empty();
			
			for(var i = 0; i < errors.length - 1; i++){
				liElement = document.createElement("li");
				liElement.appendChild(document.createTextNode(errors[i]));
				ulElement.appendChild(liElement);
			}
			
			jQuery(divElement).append($("<span>El alta no ha podido realizarse por estos motivos:</span>"));
			jQuery(divElement).append(ulElement);		
			if(msgError.length == 0) form.before(jQuery(divElement));			
			jQuery(divElement).focus();		
		
	},
	setMsgValido:function(txt, form){
			
			var parentForm = form.parent();
			var msgError = parentForm.find(".msgError");
			var divElement = (msgError.length != 0) ? msgError.eq(0) : document.createElement("div");		
			var ulElement = document.createElement("ul");
			var liElement = null;		
			var errors = txt.split("|");
			var msgConfirm = $(".msgConfirm");			
			jQuery(divElement).attr("class", "messages status");
			jQuery(divElement).attr("tabIndex","-1");				
			
			if(jQuery(divElement).find("ul").length != 0) jQuery(divElement).empty();
			
			for(var i = 0; i < errors.length - 1; i++){
				liElement = document.createElement("li");
				liElement.appendChild(document.createTextNode(errors[i]));
				ulElement.appendChild(liElement);
			}
			
			jQuery(divElement).append($("<span>"+txt+"</span>"));
			jQuery(divElement).append(ulElement);		
			if(msgError.length == 0) form.before(jQuery(divElement));			
			jQuery(divElement).focus();		
		
	},
	validaContacto:function(obj){

		var errorTxt = "";
		var f = $(obj);			
		var author = f.find("input#edit-submitted-nombre");
		var email = f.find("input#edit-submitted-email");
		var telefono = f.find("input#edit-submitted-telefono");
		var necesito = $("#edit-submitted-que-necesitas");
		var acepto = f.find(":checkbox");
		var parentt = necesito.parent();
		
		if(!necesito.val()){		
			errorTxt += "El campo '¿Qué necesitas?' es obligatorio |";
			parentt.addClass("error");
		}else parentt.removeClass("error");

		parentt = author.parent();
		
		if(!author.val()){		
			errorTxt += "El campo 'Nombre' es obligatorio |";
			parentt.addClass("error");
		}else parentt.removeClass("error");
				
		parentt = email.parent();
		if(!email.val()){
		    errorTxt += "El campo 'Email' es obligatorio |";			
		    parentt.addClass("error");
		}else{
		    parentt.removeClass("error");
		    if(!regularExpressions.isValidEmail(email.val())){
		    	errorTxt += "El formato del campo 'Email' no es correcto |";			
		    	parentt.addClass("error");
		    }else parentt.removeClass("error");
		}
		
				
		parentt = telefono.parent();
		
		if(telefono.val().length != 0){
		
			if(!regularExpressions.esTelefono(telefono.val())){
				errorTxt += "El formato del campo 'Teléfono' no es correcto |";
				parentt.addClass("error");
			}else parentt.removeClass("error");
		}
		
		
		parentt = acepto.parent();
		
		if(!acepto.is(":checked")){		
			errorTxt += "Debes aceptar las condiciones legales |";
			parentt.addClass("error");
		}else parentt.removeClass("error");
		
		
		
		if(errorTxt != ""){				
			formsValidations.setMsgError(errorTxt, f);
			return false;
		}else{			
			return true;
		}
	},
	
	validaSusNewsletter:function(obj){

		var errorTxt = "";
		var f = $(obj);		
		var email = f.find(":text");
		var acepto = f.find(":checkbox");
		var parentt = email.parent();
		if(!email.val()){
		    errorTxt += "Debes rellenar el campo email |";			
		    parentt.addClass("error");
		}else{
		    parentt.removeClass("error");
		    if(!regularExpressions.isValidEmail(email.val())){
		    	errorTxt += "El email no es correcto |";			
		    	parentt.addClass("error");
		    }else parentt.removeClass("error");
		}
		
		if(!acepto.is(":checked")){		
			errorTxt += "Debes aceptar las condiciones legales |";
			parentt.addClass("error");
		}else parentt.removeClass("error");

		
						
		if(errorTxt != ""){				
			formsValidations.setMsgError(errorTxt, f);
			return false;
		}else{			
			return true;
		}
	}
		
}

var fixes = {

	controlHeight:function(obj){

		var elems = obj.find("article");
		for(var i = 0; i < elems.length; i+=2) {
		  var divs = elems.slice(i, i+2), 
		  height = Math.max(divs.eq(0).height(), divs.eq(1).height());
		  divs.css('min-height', height);
		}

	}

}

var ajax = {

	validaNewsletter:function(obj)
	{
		
		if (formsValidations.validaSusNewsletter(jQuery(obj)))
		{
		
			var email = obj.find(":text");
			var errorTxt = "";
			
			$.ajax({
			  type: "POST",
			  url: "registronews",
			  data: "mail="+email.val(),
			  success: function(msg)
			  {
				//$("#results").append(html);
				
				if (msg=="ok")
				{
				errorTxt += "La suscripción se ha realizado correctamente, en breve recibirás un email con las instruciones.Muchas Gracias";
				formsValidations.setMsgValido(errorTxt, obj);
				$("#modSus").find('p').hide();
				$("#campaignmonitor-general-form").hide();
				}
				else
				{
					errorTxt += "El email ya esta dado de alta. |";
					formsValidations.setMsgError(errorTxt, obj);
				}
				
			  }
			});
		}
		return false;
	}
}

/* expresiones regulares para validar formularios */
var regularExpressions = {	
	isValidEmail:function (str){
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return (filter.test(str));
	},
	esCadena:function(c) { return /^[0-9A-Za-z-\/Ññ?É?ÓÚáéíóúÜüÄäËë?ïÖö´,'/\\t\n\r\s]+$/.test(c); },
	esAlfabetico:function(c){return /^([a-zA-Z])+$/.test(c);},
	esNumero:function(c){return /^[0-9]+$/.test(c);},
	esTelefono:function(c){return /^[0-9\s\+\-)(]+$/.test(c)}
}

$(function () {	
	herramientas.archivoGrafico();
	herramientas.jcarousel();
	herramientas.jcarouselDots();
	/*if($("#formContacto").length != 0){
		jQuery("#formContacto").submit(function(){return formsValidations.validaContacto( jQuery(this)) })	
	}*/
	if($("#campaignmonitor-general-form").length != 0){
		jQuery("#campaignmonitor-general-form").submit(function(){return ajax.validaNewsletter( jQuery(this)) })	
	}
	if($("section.quienesSomos").length != 0) fixes.controlHeight($("section.quienesSomos"));
	if($("section.partners").length != 0) fixes.controlHeight($("section.partners"));
	if($("section.soluciones").length != 0) fixes.controlHeight($("section.soluciones"));
	
	if($("#nav").length != 0){
		selectnav('nav', {
			label: 'Menu'
		});
	}
	
	// hide #back-top first
	
	if ($(window).width() <= 900) {
		$("body").append('<p id="back-top"><a href="#top"><span></span>Subir</a></p>');
		$("#back-top").hide();
		// fade in #back-top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	
		// scroll body to 0px on click
		$('#back-top a').click(function (e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			e.preventDefault();
		});
	}
	
});

$(document).ready( function()
	{

		if($("#nav").length != 0){
			
			$('#nav > li > a').each(function () {
				if (this == "http://www.tantacom.com/el-blog-de-tanta")
				{
					$(this).attr("href","http://blog.tantacom.com");
				}
				
			});
			
		}
		
		$('.flexslider').flexslider({
			animation: "slide",
			start: function(slider){
			  $('body').removeClass('loading');
			}
		  });
		
		
    });

