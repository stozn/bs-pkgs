let users=[]
//每日重置可签到
timer 24*60*60*1000 {  
  let a=0
  while (a<users.length){
    users[a].check=true
    a++
  }
}
//签到
event [msg, me, dm] (user, cont: "^/签到") => { 
 const yb=Math.floor(Math.random() * 3)+1
 let n=users.findIndex(u => u.name == user)
  if (n == -1) then {
  users.push({ name: user,coins: yb,check: false})
  n=users.length-1
  drrr.print(user+"签到成功，硬币+"+yb+"，现在的硬币数量为"+users[n].coins+"。")
  } else if users[n].check then {
  users[n].coins+=yb
  users[n].check=false
  drrr.print(user+"签到成功，硬币+"+yb+"，现在的硬币数量为"+users[n].coins+"。")
  } else { drrr.print(user+"今天已经签过到了，现在的硬币数量为"+users[n].coins+"。")
}
  }
  
//排行榜
event [msg, me, dm] (user, cont: "^/排行榜") => {
  users.sort((a,b) => b.coins - a.coins)
  let pm=users
  if users.length >10 then pm=pm.slice(0,10)    //截取排名前10的用户
  let p=pm.reduce((a,x,y) => a=a+"\n"+(y+1)+"."+x.name+"\t"+x.coins+"硬币","")
  drrr.print(p)
  }
//注文
event [me,msg] (user, cont:"^/注文\\s+\\S")  => {
var r=cont.replace("/注文", "").trim();
zw=["可乐","茶","啤酒","葡萄酒","红酒","白酒","汁","咖啡","拿铁","卡布奇诺"];
tb=["🥤","🍵","🍺","🍷","🍷","🍶","🍹","☕","☕","☕"];
var i=0;
var t="";
var a=false;
let n=users.findIndex(u => u.name == user)
  if (n == -1) then {
  users.push({ name: user,coins: 0,check: true})
  n=users.length-1
  drrr.print(user+"很抱歉，注文功能需要花费1硬币，您的硬币数为"+users[n].coins+"，请签到获取硬币。")
} else if (users[n].coins == 0) then {
  drrr.print(user+"很抱歉，注文功能需要花费1硬币，您的硬币数为"+users[n].coins+"，请签到获取硬币。")
} else {
  users[n].coins--
  drrr.print("/me @"+ user +" 您使用了1硬币，现在您的硬币数量为"+users[n].coins+"，["+r+"]马上就好，请稍等一分钟" );
  while (i<zw.length && !a){
  var reg = new RegExp(zw[i]);
  a=reg.test(r);
  if (a) then {
    t=tb[i];
  }
  i++;
  }
  later 60*1000 {
   drrr.print("/me @"+ user +" 这是你刚刚注文的"+t+"["+r+"]，请慢用");
  }
}
}