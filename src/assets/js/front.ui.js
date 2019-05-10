/*
 파일명:		front.ui.js
 설   명:		공통 자바스크립트
 작성자:		glim
 최초작성일:	2016/12/21
 최종수정일:	2016/12/21
*/
(function($){

})


$(document).ready( function(){

	//페이지로딩시 공통실행 메서드
	gl.home.autoStart();

	$( window ).resize(function() { resize(); });
	resize();
})

var globalObj = this;
var _Browser_Ver;


//var _mnbSelectId = [1,2,0];// = [1,2];/*활성화된 메뉴 0 부터 카운트됨*/
var _mnbSelectId=[];
var _timer;//gnb timer


(function(g){		//자동호출 및 초기화
	//네임스페이스 정의 및 함수 정의
	var gl = gl || {};
	gl.createNamespace = function(namespace){
		var parts = namespace.split('.');
		var current = this;
		for(var i in parts){
			if(!current[parts[i]]){
				current[parts[i]] = {};
			}
			current = current[parts[i]];
		}
	};
	gl.createNamespace("home");			// 초기화 네임스페이스

	//초기화 메서드
	gl.home = {
		autoStart : function(){
			//console.log ( "autoStart" );

			if($('#leftContainer').length > 0){//메뉴 생성
				//gl.home.initLnb();
			}

			try {
				//datepicker: setting
				$.datepicker.setDefaults({
					showMonthAfterYear: true,
					showOn: "button",
         			buttonImageOnly: false,
					buttonImage : "",
					buttonText: "",
					currentText: "Now",
					dateFormat: 'yy-mm-dd',
					showOtherMonths: true,
					selectOtherMonths: true,
					dayNamesMin: ['일','월','화','수','목','금','토'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
					nextText: '다음 달',
					prevText: '이전 달',
					changeMonth: true,
			      changeYear: true
				});
				
			}
			catch(exception){
				//catchStatements
			}

			if ( $('.btn_file_upload').length > 0){

				$('.btn_file_upload').each(function(i) {

					$(this).bind('click', function(){
						var agt = navigator.userAgent.toLowerCase(); // 브라우저 판별
						var tg = $(this).parent();
						var value_txt;
						tg.find('.ipt_file').trigger('click');
						if (agt.indexOf("msie") != -1)
						{
							value_txt = $(this).val();
							tg.find('.ipt1').value = "";
							tg.find('.ipt1').val(value_txt);
						}
						else if(agt.indexOf("11.0") != -1)
						{
							value_txt = tg.find('.ipt_file').val();
							tg.find('.ipt1').value = "";
							tg.find('.ipt1').val(value_txt);
							tg.find('.ipt1').value = value_txt;
							console.log("$('.ipt_file').val()의 값 :"+$('.ipt_file').val());
							console.log("$('.ipt_file')[0].value :"+$('.ipt_file')[0].value);
						}
						else
						{
							tg.find('.ipt_file').bind('change', function(){
								value_txt = $(this).val();
								tg.find('.ipt1').value = "";
								tg.find('.ipt1').val(value_txt);
								tg.find('.ipt1').value = value_txt;
							});
						}
						return false;
					});
				});
			}

		}
	}

	//g에 gl 속성으로 gl 할당
	g.gl = gl;

})(globalObj);

/* Gnb */
var _minwidth = 1024;
var _gnbh= 800;

/* RESIZE  */
function resize (){
	//console.log ("resize");
	var ww = $( window ).width();

	var wh = $( window ).height();
	var bh = $("#wrap").height();
	var hh = (_gnbh > wh) ? _gnbh:wh;
	if (  bh < wh ){
		$('#leftContainer').css({'min-height':hh});
	}else {
		$('#leftContainer').attr('style','');
	}
}

/*
엘리먼트 show hide (공통class)
fn_tabswich (container,tab,num,tg)
ex) fn_tabswich('#pPerformantView','.tabed', 1,'.tab_content');
Pram :
		container : 전체컨테이너
		tab : tab
		idx : 활성화 인덱스 1부터 시작
		tg : 탭 컨텐츠 공통 클래스
*/
function fn_tabswich (container,tab,num,tg){
	//공통 비활성화
	$(container).find(tg).hide();
	$(container+ " "+ tab +" li" ).removeClass("here");
	//선택 활성화
	$(container+ " "+ tab +" li:nth-child("+(num)+")" ).addClass("here");
	$($(container ).find(tg)[num-1]).show();
}



$.fn.pixels = function(property) {
    return parseInt(this.css(property).slice(0,-2));
};
