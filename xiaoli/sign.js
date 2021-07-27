let users=[]
const admins=["Ancy.WWeeo","Robot/23Cc","unica/qOLU"]   //设置管理员
//每日重置可签到
timer 24*60*60*1000 {  
  let a=0
  while (a<users.length){
    users[a].check=true
    a++
  }
}
//创建新用户
newu = (user,tc) =>{
  users.push({ name: user,tc:tc,coins: 0,check: true})
}
//校验用户 返回用户编号，若返回-1，则用户tc不匹配
checku = (user) =>{
  let n
  let tc
  let i=(-1)
  let a=true
 
while(i<drrr.users.length && a){
  if(drrr.users[i+1].name == user) then {
    a=false;
    }
  i++
 } 
  if drrr.users[i].tripcode==false then {
    tc="无"
  }else {
    tc=drrr.users[i].tripcode
  } 
  if tc=="无" then {
     n=users.findIndex(u => u.name == user)  
  } else {
     n=users.findIndex(u => u.tc == tc) 
  }
  if (n == -1) then {
  newu(user,tc)
  n=users.length-1
  return n
  }else if (users[n].tc==tc) then 
  {
    return n
  }
  else return -1
  }  

//排行榜
sort = () =>{
  users.sort((a,b) => b.coins - a.coins)
  let pm=users
  if users.length >10 then pm=pm.slice(0,10)    //截取排名前10的用户
  let p=pm.reduce((a,x,y) => a=a+"\n"+(y+1)+"."+x.name+"\t"+x.coins+"硬币","排行榜 总用户:"+users.length+"人")
  return p
 }
event [msg, me, dm] (user, cont: "^/排行榜") => {
  drrr.print(sort())
  }
//签到
event [msg, me, dm] (user, cont: "^/签到") => { 
 const yb=Math.floor(Math.random() * 3)+1
  let n=checku(user,tc)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if users[n].check then {
  users[n].coins+=yb
  users[n].check=false
  drrr.print("/me @"+user+"签到成功，硬币+"+yb+"，现在的硬币数量为"+users[n].coins+"。")
  } else { drrr.print( "/me @"+ user +"今天已经签过到了，现在的硬币数量为"+users[n].coins+"。")
}
  }
//删除
event [msg, me, dm] (user, cont: "^/删除\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
   del=cont.replace("/删除", "").trim();
   let n=users.findIndex(u => u.name == del)
   if (n == -1) then {
     drrr.dm(user,"●该用户不存在")
  } else {
    users.splice(n,1)
    drrr.dm(user,"●成功删除用户"+del)
  }
   }
}
//导出
event [msg, me, dm] (user, cont: "^/导出", url, tc) => { 
  if admins.some(a => a==tc) then {
   print(users)
   print("删除此行")
   drrr.dm(user,"●成功导出数据")
   }
}
//导入
event [msg, me, dm] (user, cont: "^/导入\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    data=cont.replace("/导入", "").trim();
    dt=JSON.parse(data)      //支持分批导入，以解决drrr字数限制
    if dt==false then {
      drrr.dm(user,"●数据有误")
    }else {
    users=users.concat(dt)   
    var r = []
    var d = []
    let l = users.length
    for  i = 0; i < l; i++  {
     for  j = i + 1; j < l; j++ {
      if (users[i].name === users[j].name) then {
        j = i+1
        d.push(users[i])
        i++
      } 
    }  
    r.push(users[i])
  }
  if (r.length==users.length) then{
    drrr.dm(user,"●导入数据成功")
  }else {
    users=r
    let de=d.reduce((a,x,y) => a=a+"\n"+(y+1)+"."+x.name+"\t"+x.coins+"硬币","")
    drrr.dm(user,"●更新数据成功，已删除旧数据:")
    later 500 drrr.dm(user,de)
  }         
 later 1000 drrr.dm(user,sort())
    }
  }
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
  drrr.print(user+"/me @"+ user +"很抱歉，注文功能需要花费1硬币，您的硬币数为"+users[n].coins+"，请签到获取硬币。")
} else if (users[n].coins == 0) then {
  drrr.print(user+"/me @"+ user +"很抱歉，注文功能需要花费1硬币，您的硬币数为"+users[n].coins+"，请签到获取硬币。")
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