//进入房间【欢迎
event join (user) => {
  ns =["||进来了就是美少女","||今天也请多多喝水","||你也来喝水啦w"]
  n = ns[Math.floor(Math.random() * ns.length)];
  m = ["指令列表：（大字or小字-简体）\n续杯指令：【/再来一杯】\n投喂指令：【/投喂】【/套餐】\n查看帮助：【/帮助】\n抽奖指令：【/抽奖】【/概率】【/中奖历史】\n※适当抽奖，请勿影响大家的聊天体验" ]
  drrr.print("/me 欢迎光临@" + user + n)
  drrr.dm(user,m);
}
//帮助
event [me,msg] (user: "", content:"/帮助", url, tripcode, req)  => {
  drrr.dm(user,"指令列表：（大字or小字-简体）\n续杯指令：【/再来一杯】\n投喂指令：【/投喂】【/套餐】\n查看帮助：【/帮助】\n抽奖指令：【/抽奖】【/概率】【/中奖历史】\n※适当抽奖，请勿影响大家的聊天体验" );
}
//递水服务
event join (user:"")  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "|递 【"+ n +"】请慢用")}
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
  ds =["(:3[___]","(:[___]","([___]","(:3[」_]","(:3[」＿]=:","|[__]∠)_","_(:з」∠)_"]
  d = ds[Math.floor(Math.random() * 7)] 
  if (M ==0)   then { drrr.print(t)}//整点报时
  else
  if (M==30)   then { drrr.print(f)}//60分钟1次【每小时的30分】提醒喝水
  else
  if (M ==15||M==45)   then { drrr.print(n)}  //每30分钟1次【每15/45分】触发【随机活动】
  else
  drrr.title("多喝温水"+d) //否则换房间标题【也就是大约60秒换一次】
}
//播放音乐
event msg (user, msg: "^/播放") => {
  word = argfmt(["$[1-]"], user, msg)[0]
  drrr.play(word)
}
//控制温度
timer 2500 * 1000{
  ns = ["/me 好像有点冷了，【关掉空调再盖好被子】","/me 好像有点冷了，【把空调调到27°】","/me 好像有点热欸，，，【打开空调并调到25°】","/me 起床去喝了一杯水🥛"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print(n)
}
// 再来一杯
event [me,msg] (user: "", content:"/再来一杯", url, tripcode, req)  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "|递【" + n +"~】请慢用")
}
// 投喂恶龙
event [me,msg] (user: "", content:"/投喂", url, tripcode, req)  => {
  ns =["毛豆1kg","毛豆5kg","毛豆10kg","毛豆汁500mL","毛豆汁1000mL","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
    n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n +"~】看他吃的多开心w")
}
// 投喂恶龙套餐
event [me,msg] (user: "", content:"/套餐", url, tripcode, req)  => {
  ns =["毛豆","毛豆汁","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
n = ns[Math.floor(Math.random() * 12)]
m = ns[Math.floor(Math.random() * 12)]
b = ns[Math.floor(Math.random() * 12)]
  as =["但是这些东西完全不够恶龙塞牙缝","恶龙开心的吃了起来","双眼开始放光","恶龙视乎对这些食物不感兴趣","恶龙好像吃的有些饱了"]
    a = as[Math.floor(Math.random() * as.length)];  
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n + m + b +"~】"+a)
}
//抽奖系统
event [me,msg] (user: "", content:"/抽奖", url, tripcode, req)=> {
array = ["🍉","🍑","🍎","🍇","🍋","🥥","🍊","🍓","🍒","🍈","🎃","🥝"]
mb = ["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
nb = ["🦁","🐶","🐱","🐯","🦁","🦁","🐼","🐇","🐧","🐿","🐈","🐒"]
a = array[Math.floor(Math.random() * 12)]
b = array[Math.floor(Math.random() * 12)]
c = array[Math.floor(Math.random() * 12)]
d = array[Math.floor(Math.random() * 12)]
e = array[Math.floor(Math.random() * 12)]
m = mb[Math.floor(Math.random() * 11)] 
n = nb[Math.floor(Math.random() * 12)]  
//全中
  if a == b && b == c && c == d && d 	== e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】🎉🎉🎉🎊🎊🎰恭喜中大奖：奖励【u酱特调妹汁一杯】")
  else
//中4个
  if a==b && a==c && a==d || a==b && a==c && a==e || a==c && a==d && a==e || b==c && b==d && b==e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】有四个一样的水果！🎉🎉🎉奖励：【"+n+"玩偶】一只！并获得"+m+"一份！")
else  
//中3个
  if a==b && a==c ||a==b && a==d ||a==b && a==e ||a==c && a==d ||a==c && a==e ||a==d && a==e ||b==c && b==d ||b==c && b==e ||b==d && b==e || c==d && c==e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】有三个一样的水果！🎉🎉奖励："+m+"一份！")
else

//中2个  
  if a==b || a==c || a==d || a==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+a+"】🎉奖励："+a+"汁一杯哒！")
else
  if b==c || b==d || b==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+b+"】🎉奖励："+b+"汁一杯哒！")
else
  if c==d || c==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+c+"】🎉奖励："+c+"汁一杯哒！")
else
  if d==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+d+"】🎉奖励："+d+"汁一杯哒！")
//不中
  else
  drrr.print("/me @" + user +" |抽到的 【"+a+b+c+d+e+"】完全没有相同的！")
}
//乖嘛
event [me,msg] (user: "黯泣", content:"小粒今天乖嘛", url, tripcode, req)=> {
drrr.print("我今天超乖的！")
drrr.print("/me 【<(ˉ^ˉ)>")  
}
//换房主
event [me,msg] (user: "黯泣", content:"给我房主", url, tripcode, req)=> {
drrr.chown(user)
}
event [me,msg] (user: "unica", content:"给我房主", url, tripcode, req)=> {
drrr.chown(user)
}
event [me,msg] (user: "LanCeLoT_Ng", content:"给我房主", url, tripcode, req)=> {
drrr.chown(user)
}

//让小粒说
event dm (user: "黯泣", cont:"^/说", url, tripcode, req)  => {  
    drrr.print(cont.replace("/说", "").trim());
}
//私信转发
event dm (user: "", cont:"", url, tripcode, req)  => {
  drrr.dm("黯泣",user+"说:"+cont );
}
//匿名消息
event dm (user: "", cont:"^/匿名", url, tripcode, req)  => {  
  drrr.dm(cont.replace("/匿名", "").trim().slice(0,cont.replace("/匿名", "").trim().search(" ")).trim(),"有人对你说"+cont.replace("/匿名", "").trim().slice(cont.replace("/匿名", "").trim().search(" ")));
}
//踢人
event dm (user: "黯泣", cont:"^/踢", url, tripcode, req)  => {  
    drrr.kick(cont.replace("/踢", "").trim());
}
event dm (user: "黯泣", cont:"^/kick", url, tripcode, req)  => {  
    drrr.kick(cont.replace("/kick", "").trim());
}
//ban人
event dm (user: "黯泣", cont:"^/ban", url, tripcode, req)  => {  
    drrr.ban(cont.replace("/ban", "").trim());
}
//悄悄话
event dm (user: "", cont:"^/悄悄话", url, tripcode, req)  => {   
const i=0;
const a=true;
drrr.dm(user,"收到！");
while(i<drrr.users.length){
  if(drrr.users[i].name == cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim()) then {
        a=false;
        }
  i++
}

if (a) then {
  const cs=0;
  event join (user) => {
    if (user == cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim() && cs<1) then {
      cs=1;
      drrr.dm(cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim(),"有人给你留言：" + cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search(" ")).trim());
    }
  }
}else{
drrr.dm(cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim(),"有人让我悄悄你说："+cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search(" ")));
}
}