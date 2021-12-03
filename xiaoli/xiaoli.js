fmtNow = () => {
  now = new Date()
  String(now.getHours()).padStart(2, "0")
   + ":" + String(now.getMinutes()).padStart(2, "0")
}

sample = array => array[Math.floor(Math.random() * array.length)]

onTimeDo = (h, m, s, callback) => {
  next = new Date()
  h >= 0 && next.setHours(h)
  m >= 0 && next.setMinutes(m)
  s >= 0 && next.setSeconds(s)
  interval = (h >= 0 && (24 * 3600)) || (m >= 0 && 3600) || (s >= 0 && 60)
  delta = next.getTime() - Date.now()
  delta += (delta < 0) * (interval * 1000)
  later delta {
    callback()
    timer (interval * 1000) callback()
  }
}

//进入房间【欢迎
event join (user) => {
  ns =["||进来了就是美少女","||今天也请多多喝水","||你也来喝水啦w"]
  n = ns[Math.floor(Math.random() * ns.length)];
  m = ["如需帮助请输入：【/帮助】" ]
  drrr.print("/me 欢迎光临@" + user + n)
  drrr.dm(user,m);
}
//帮助
event [me,msg] (user: "", content:"/帮助")  => {
  drrr.dm(user,"指令列表：（简体）\n新功能【悄悄话（dm）】：【/悄悄话 + 空格 + 对方ID（不用@） + 空格 +（内容）】\n续杯指令（msg/me）：【/再来一杯】\n投喂指令（msg/me）：【/投喂】【/套餐】\n查看帮助（msg/me）：【/帮助】\n抽奖指令（msg/me）：【/抽奖】【/概率】【/中奖历史】\n※适当抽奖，请勿影响大家的聊天体验" );
}
//递水服务
event join (user:"")  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  drrr.print("/me @" + user + "|递 【"+ sample(ns) +"】请慢用")
}

onTimeDo(-1, 0, 0, () => {
  drrr.print("/me 整点报时：现在是【"+fmtNow() +"】，努力回忆了一下，好像没啥要紧事要做，回去继续睡吧w")
})

onTimeDo(-1, 30, 0, () => {
  drrr.print("/me ヾ(≧▽≦*)o】现在的时间是【"+fmtNow()+"】每60分钟给大家添水1次，记得好好补充水分哦")
})

randomActivity = () => {
  ns =["给盖好被子避免着凉","(っ´Ι`)っ翻找冰箱发现（☆▽☆）【"+
    sample(["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"])
    +"！！吃了回去继续睡吧w"]
  drrr.print("/me 【迷迷糊糊的爬起来，"+ sample(s))
}

onTimeDo(-1, 15, 0, randomActivity)
onTimeDo(-1, 45, 0, randomActivity)

//准点报时与活动。每60秒触发1次
timer 60 * 1000 {
  ds =["(:3[___]","(:[___]","([___]","(:3[」_]","(:3[」＿]=:","|[__]∠)_","_(:з」∠)_"]
  drrr.title("多喝温水"+sample(ds)) //否则换房间标题【也就是大约60秒换一次】
}
//播放音乐
event msg (user, msg: "^/播放") => {
  word = argfmt(["$[1-]"], user, msg)[0]
  drrr.play(word)
}
//控制温度
timer 2500 * 1000{
  ns = ["/me 好像有点冷了，【关掉空调再盖好被子】","/me 好像有点冷了，【把空调调到27°】","/me 好像有点热欸，，，【打开空调并调到25°】","/me 起床去喝了一杯水🥛"]
  drrr.print(sample(ns))
}
// 再来一杯
event [me,msg] (user: "", content:"/再来一杯")  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  drrr.print("/me @" + user + "|递【" + sample(ns) +"~】请慢用")
}
// 投喂恶龙
event [me,msg] (user: "", content:"/投喂")  => {
  ns =["毛豆1kg","毛豆5kg","毛豆10kg","毛豆汁500mL","毛豆汁1000mL","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + sample(ns) +"~】看他吃的多开心w")
}
// 投喂恶龙套餐
event [me,msg] (user: "", content:"/套餐")  => {
  ns =["毛豆","毛豆汁","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
  as =["但是这些东西完全不够恶龙塞牙缝","恶龙开心的吃了起来","双眼开始放光","恶龙视乎对这些食物不感兴趣","恶龙好像吃的有些饱了"]
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + sample(ns) + sample(ns) + sample(ns) +"~】"+ sample(as))
}
//抽奖系统
event [me,msg] (user: "", content:"/抽奖")=> {
  mb = ["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
  nb = ["🦁","🐶","🐱","🐯","🦁","🦁","🐼","🐇","🐧","🐿","🐈","🐒"]
  array = ["🍉","🍑","🍎","🍇","🍋","🥥","🍊","🍓","🍒","🍈","🎃","🥝"]

  fruits = Array.from({length: 5}, (x, i) => sample(array));
  bucket = array.map(() => 0)
  fruits.forEach(d => bucket[array.indexOf(d)] += 1)
  most_freq = Math.max.apply(Math, bucket)
  most_fruit = array[bucket.indexOf(most_freq)]

  leading = "@" + user +"抽到的是【"+fruits.join("")+"】"

  hints = ["",
    "/me @" + user +" |抽到的 【"+fruits.join("")+"】完全没有相同的！",
    leading + "有两个【"+most_fruit+"】🎉奖励："+most_fruit+"汁一杯哒！",
    leading + "有三个一样的水果！🎉🎉奖励："+sample(mb)+"一份！",
    leading + "有四个一样的水果！🎉🎉🎉奖励：【"+sample(nb)+"玩偶】一只！并获得"+sample(mb)+"一份！",
    leading + "🎉🎉🎉🎊🎊🎰恭喜中大奖：奖励【u酱特调妹汁一杯】"]

  drrr.print(hints[most_freq])
}
//乖嘛
event [me,msg] (user: "黯泣", content:"小粒今天乖嘛")=> {
  drrr.print("我今天超乖的！")
  drrr.print("/me 【<(ˉ^ˉ)>")
}
//换房主
event [me,msg] (user: "黯泣", content:"给我房主")=> {
  drrr.chown(user)
}
event [me,msg] (user: "unica", content:"给我房主")=> {
  drrr.chown(user)
}
event [me,msg] (user: "LanCeLoT_Ng", content:"给我房主")=> {
  drrr.chown(user)
}

//让小粒说
event dm (user: "黯泣", cont:"^/说")  => {
  drrr.print(cont.replace("/说", "").trim());
}
//悄悄话
event dm (user: "", cont:"^/悄悄话")  => {
  ts=0;
  a=true;
  u=cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim();
  m=cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search(" "));
  drrr.dm(user,"收到！");

  target = drrr.users.find(user => user.name == u)
  if target then {
    a=false;
    drrr.dm(u,"有人给你悄悄话："+m);
  }
  else {
    // may replace by join
    Myfor =()=> {
      target = drrr.users.find(user => user.name == u)
      if target then {
        a=false;
        drrr.dm(u,"有人给你悄悄话："+m);
      }
      else {
        ts++;
        if (ts<60*24*3) then{setTimeout(Myfor, 60*1000);}
      }
    }
    Myfor();
  }
}
//踢人
event dm (user: "黯泣", cont:"^/踢")  => {
  drrr.kick(cont.replace("/踢", "").trim());
}
event dm (user: "黯泣", cont:"^/kick")  => {
  drrr.kick(cont.replace("/kick", "").trim());
}
//ban
event dm (user: "黯泣", cont:"^/ban")  => {
  drrr.ban(cont.replace("/ban", "").trim());
}
