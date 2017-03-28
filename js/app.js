// open
var src_bright = ["img/cheap1-03.png", 
		  "img/secure1-02.png",
		  "img/convenient1-05.png",
		  "img/fast1-04.png",
		  "img/smart1-01.png"];
var src_dark = ["img/cheap-03.png",
		"img/secure-02.png",
		"img/convenient-05.png",
		"img/fast-04.png",
		"img/smart-01.png"];
var src_content = ["Secure Financial Services, Inc. provides hight quality trade analysis reports, starting with the standard profit and loss analysis, for targeted legal response.",
	"The fintech net have been proved extremely safe.",
	"You can use fintech everywhere, everytimes.",
	"Nowadays, our internet is faster and faster, so is the fintech.",
	"Fintech is designed by many professional engineer to make your life smarter."]
function dark(he){
	var temp;
	var check=0;
	for(var i=0;i<5;i++){
		if(he.attr('src')==src_btight[i]){	
			check=1;
			temp=i;
		}
	}
	if(check==1){
		he.attr('src',src_dark[temp]);
	}
}
$('.feature_icon').find('img').on('mouseenter',function(){
	var temp;
	var check=0;
	for(var i=0;i<5;i++){
		if($(this).attr('src')==src_dark[i]||$(this).attr('src')==src_bright[i]){			
			check=1;
			temp=i;
			dark($(this).siblings(i));
		}
		else{
			dark($('#'+i));
		}
	}
	if(check==1){
		$(this).attr('src',src_l[temp]);
		$('.p2_c_d_p1').text(src_t[temp]);
		$('.p2_c_d_p2').data("kind",temp);
		}
	};
