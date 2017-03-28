// open
$('.feature_icon').find('img').on('mouseenter',function(){
		var temp;
		var check=0;
		for(var i=0;i<5;i++){
			if($(this).attr('src')==src_d[i]||$(this).attr('src')==src_l[i]){
				
				check=1;
				temp=i;
				dark($(this).siblings(i));
			}
			else{
				dark($('#'+i));
			}
		}
