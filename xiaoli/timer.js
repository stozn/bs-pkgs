//报时优化
checkTime = (i) =>{if (i<10) then{i="0" + i} return i}
//准点报时与活动。每60秒触发1次
timer 60 * 1000{
 const H="";
 const M="";
  mydate=new Date();
  H = mydate.getHours();
  M = mydate.getMinutes();
  mb = ["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
  m = mb[Math.floor(Math.random() * 11)] 
  t = ["/me 整点报时：现在是【"+checkTime(H)+":"+checkTime(M) +"】"]
  f = ["/me 现在的时间是【"+checkTime(H)+":"+checkTime(M) +"】"]
  z =["现在是【"+checkTime(H)+":"+checkTime(M) +"】 开始开店准备"]
  x =["开始打扫卫生","开始休息"]
  ns=[""]
  n = ["/me 【越努力越幸运】现在是【，"+ ns[Math.floor(Math.random() * ns.length)] ];
  
  ds =["🎟","🎞","🎫","🎉","🎊","✨","🎁","🎯","🏆","🎲","🎰","🕹","🎮"]
  d = ds[Math.floor(Math.random() * 13)] 
  if (H==6&&M ==0)   then { drrr.print(Z)}//开店工作
  else
  if (M ==0)   then { drrr.print(t)}//6点整点报时
  else
  if (M==30)   then { drrr.print(f)}//60分钟1次【每小时的30分】提醒喝水
  else
  if (M ==15||M==45)   then { drrr.print(n)}  //每30分钟1次【每15/45分】触发【随机活动】
  else
  drrr.title("柏青哥|"+d) //换房间标题【也就是大约60秒换一次】
}