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
  t = ["/me 整点报时：现在是【"+checkTime(H)+":"+checkTime(M) +"】，努力回忆了一下，好像没啥要紧事要做，回去继续睡吧w"]
  f = ["/me ヾ(≧▽≦*)o】现在的时间是【"+checkTime(H)+":"+checkTime(M) +"】每60分钟给大家添水1次，记得好好补充水分哦"]
  ns =["给盖好被子避免着凉","(っ´Ι`)っ翻找冰箱发现（☆▽☆）【"+m+"！！吃了回去继续睡吧w"]
  n = ["/me 【迷迷糊糊的爬起来，"+ ns[Math.floor(Math.random() * ns.length)] ];
  cur = 0
  bs = ["(:3[___]","(:[___]","([___]","(:3[」_]","(:3[」＿]=:","|[__]∠)_","_(:з」∠)_"]
  if (M ==0)   then { drrr.print(t)}//整点报时
  else
  if (M==30)   then { drrr.print(f)}//60分钟1次【每小时的30分】提醒喝水
  else
  if (M ==15||M==45)   then { drrr.print(n)}  //每30分钟1次【每15/45分】触发【随机活动】
  else
   drrr.title("多喝温水"+ns[cur])
   cur = (cur + 1) % ns.length
}