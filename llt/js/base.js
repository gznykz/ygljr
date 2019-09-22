//点击下载APP弹窗
var showWin = {
	init:function(){
		this.show();
	},
	show:function(){
		//点击下载APP
		$("#xz").click(function(){
			$("#downloadAppBox,#maskBox").show();
		})
		//点击关闭按钮
		$("#close-btn-box").click(function(){
			$("#downloadAppBox,#maskBox").hide();
		})
	}
};

$(document).ready(function(){
	showWin.init();
})
