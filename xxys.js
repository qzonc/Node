/*
小小影视 unlock Vip

EmperorTian资源推送频道 ：https://t.me/iOSAppTS 
推送Quantumult X、Thor、Shadowrocket、HTTP Catcher、JSBox、Loon、快捷指令 等软件配置教程以及其他各类优秀APP资源。
EmperorTian吹水群 ：https://t.me/iOSAppJLQ

QX:

[rewrite_local]

https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body xxys.js


MITM = *.*apps.com, *.xiao*.com

*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "8888";
	obj.data.uinfo["play_daily_remainders"] = "8888";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
	obj.data.user["goldcoin"] = "8888";
   	obj.data.user["avatar_url"] = "https://i.loli.net/2020/03/07/jSFIgxorDqkQzln.jpg";
}
if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
}
$done({body: JSON.stringify(obj)});
