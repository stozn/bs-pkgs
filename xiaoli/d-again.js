// 再来一杯
event [me,msg] (user: "", content:"/再来一杯)  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "|递【" + n +"~】请慢用")
}
//注文
event [me,msg] (user: "", cont:"^/注文\\s+\\S")  => {
var r=cont.replace("/注文", "").trim();
zw=["可乐","茶","啤酒","葡萄酒","红酒","白酒","汁","咖啡","拿铁","卡布奇诺"];
tb=["🥤","🍵","🍺","🍷","🍷","🍶","🍹","☕","☕","☕"];
var i=0;
var t="";
var a=false;
drrr.print("/me @"+ user +" 好的，["+r+"]马上就好，请稍等两分钟" );
  while (i<zw.length && !a){
  var reg = new RegExp(zw[i]);
  a=reg.test(r);
  if (a) then {
    t=tb[i];
  }
  i++;
  }
  later 100*1000 {
   drrr.print("/me @"+ user +" 这是你刚刚注文的"+t+"["+r+"]，请慢用");
  }
}