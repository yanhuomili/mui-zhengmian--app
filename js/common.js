var open=function(url,options){
	var obj=options||{};
	mui.openWindow({
		url:url,
		id:url,
		waiting:{
			title:'加载中...'
		},
		extras:obj
	})
}