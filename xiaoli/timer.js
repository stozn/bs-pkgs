//报时优化
 checkTime = (i) =>{if (i<10) then{i="0" + i} return i}
//准点报时与活动。每60秒触发1次
 timer 60 * 1000{
 
//时间日期设置
  mydate=new Date();//获取当前日期
 const Y="";//年
   Y = mydate.getFullYear();//获取完整的年份(4位)
 const M="";//月
   M = mydate.getMonth();//获取当前月份(0-11,0代表1月)
 const N="";//日
   N = mydate.getDate();//获取当前日(1-31)
 const D="";//周
   D = mydate.getDay();
 const h="";//时
   h = mydate.getHours();
 const m="";//分
   m = mydate.getMinutes();

//周参数
 weekday=new Array(7)
 weekday[0]="周日！"
 weekday[1]="周一"
 weekday[2]="周二"
 weekday[3]="周三"
 weekday[4]="周四"
 weekday[5]="周五"
 weekday[6]="周六"
d =[weekday[mydate.getDay()]]

//甜品
  dessert = ["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
  de = dessert[Math.floor(Math.random() * 11)] 

//报时设定
  t = ["/me 整点报时：现在是【"+checkTime(h)+":"+checkTime(m) +"】，努力回忆了一下，好像没啥要紧事要做，回去继续睡吧w"]
    td = ["/me 整点报时：现在是白天【"+checkTime(h)+":"+checkTime(m) +"】"]
    tn = ["/me 整点报时：现在是夜晚【"+checkTime(h)+":"+checkTime(m) +"】"]

//喝水提醒器
  f = ["/me ヾ(≧▽≦*)o】现在的时间是【"+checkTime(h)+":"+checkTime(m) +"】每60分钟给大家添水1次，记得好好补充水分哦"]
  
//夜晚行动
  ns =["给盖好被子避免着凉","(っ´Ι`)っ翻找冰箱发现（☆▽☆）【"+de+"！！吃了回去继续睡吧w"]
  n = ["/me 【迷迷糊糊的爬起来，"+ ns[Math.floor(Math.random() * ns.length)] ];
  cur = 0
  bs = ["(:3[___]","(:[___]","([___]","(:3[」_]","(:3[」＿]=:","|[__]∠)_","_(:з」∠)_"]
  ywz = ["ヾ(≧▽≦*)o","φ(*￣0￣)","q(≧▽≦q)","ψ(｀∇´)ψ","φ(゜▽゜*)♪"]
  ko = ywz[Math.floor(Math.random() * 5)] 

  //规则
  //抽签日规则
  {if (N==1 || N==15)//1号与15号规则换主题
  then
  {
  if (h==0 &&m ==0)   //0点换主题
  then { drrr.descr(ko +"“渡落揧旯祭（durarara祭）”到啦！开放抽签功能24小时w"+d+".night")
  drrr.print(t)
}
  else
  if (m ==0)   then { drrr.print(t)}//整点报时
  else
  if (m==30)   then { drrr.print(f)}//60分钟1次【每小时的30分】提醒喝水
  else
  if (m ==15||m==45)   then { drrr.print(n)}  //每30分钟1次【每15/45分】触发【随机活动】
  else
  if (m ==5||m==10||m==20||m==25||m==35||m==40||m==50||m==55)  //每5分钟1次【修改房间ID】
   then  
  {drrr.title("多喝温水"+bs[cur])
   cur = (cur + 1) % ns.length}
else
//日常规则
  if (m ==0)   then { drrr.print(t)}//整点报时
  else
  if (m==30)   then { drrr.print(f)}//60分钟1次【每小时的30分】提醒喝水
  else
  if (m ==15||m==45)   then { drrr.print(n)}  //每30分钟1次【每15/45分】触发【随机活动】
  else
  if (m ==5||m==10||m==20||m==25||m==35||m==40||m==50||m==55)  //每5分钟1次【修改房间ID】
   then  
  {drrr.title("多喝温水"+bs[cur])
   cur = (cur + 1) % ns.length}

}



}}