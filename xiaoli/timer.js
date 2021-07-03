//报时优化
 checkTime = (i) =>{if (i<10) then{i="0" + i} return i}
//准点报时与活动。每60秒触发1次
 timer 60 * 1000{
 
  //时间日期设置
  mydate=new Date(); //获取当前日期
  const Y=mydate.getFullYear();  //年
  const M=mydate.getMonth()+1;   //月
  const N=mydate.getDate();      //日
  const D= mydate.getDay();      //周
  const h=mydate.getHours();     //时
  const m=mydate.getMinutes();   //分

  //周参数
  weekday=["周日！","周一","周二","周三","周四","周五","周六"]
  w=weekday[D]

  

  //喝水提醒器
  f="/me ヾ(≧▽≦*)o】现在是【"+checkTime(h)+":"+checkTime(m) +"】 每60分钟给大家添水1次，记得好好补充水分哦"
  
  //日间活动
  ds=["打扫卫生中...","摸鱼中..."]
  d=["/me 现在我正在"+ ds[Math.floor(Math.random()*ds.length)] ]
  
  //夜晚活动
  ns=["给盖好被子避免着凉","(っ´Ι`)っ翻找冰箱发现(☆▽☆)【"+de+"】！！吃了回去继续睡吧w"]
  n=["/me 【迷迷糊糊的爬起来，"+ ns[Math.floor(Math.random() * ns.length)] ]
  
  //房间ID
  bs=["(:3[___]","(:[___]","([___]","(:3[」_]","(:3[」＿]=:","|[__]∠)_","_(:з」∠)_"]
  ywz=["ヾ(≧▽≦*)o","φ(*￣0￣)","q(≧▽≦q)","ψ(｀∇´)ψ","φ(゜▽゜*)♪"]
  ko=ywz[Math.floor(Math.random() * 5)] 
  
  //抽签日主题
  if ((N==1 || N==15) && h==0 && m==0) then {   
  drrr.descr(ko +"“渡落揧旯祭(durarara祭)”到啦！开放抽签功能24小时w  今天"+w+".night");
  later 1000 drrr.print("🔔🔔🔔 12点的钟声已经响起，一天悄无声息的过去变为昨日，欢迎来到"+M+"月"+N+"日！");
  later 2000 drrr.print("“渡落揧旯祭(durarara祭)”到啦！开放抽签功能24小时w")}
  
  //日常主题
  else if (h==0 && m==0) then {
  drrr.descr(ko +"今天"+w+".night");
  later 1000 drrr.print("🔔🔔🔔 12点的钟声已经响起，一天悄无声息的过去变为昨日，欢迎来到"+M+"月"+N+"日！")}
  
  //每日活动
  else if (h>6 && h<23 && m==0) then {drrr.print(td)} //日间整点报时
  else if (m==0) then {drrr.print(tn)}               //夜间整点报时
  else if (m==30) then {drrr.print(f)}               //提醒喝水【30分触发】60分钟1次
  else if (h>6 && h<23 && (m==15 || m==45)) then {drrr.print(d)}  //日间活动【15/45分触发】30分钟1次
  else if (m==15 || m==45) then {drrr.print(n)}                   //夜间活动【15/45分触发】30分钟1次
  else if (m==5||m==10||m==20||m==25||m==35||m==40||m==50||m==55) then  //修改房间ID 5分钟1次 
  {drrr.title("多喝温水"+bs[Math.floor(Math.random() * bs.length)])}  

}