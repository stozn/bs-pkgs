//用户数据
let users=[]
let duid
//挂机数据
let hangs=[]
//转账数据
let trans=[]
//红包数据
let pkgi=0
let owner
let owneri
let am
let gaini=[]
let gainu=[]
let gains=[]
let pkgs=[]
const admins=["Ancy.WWeeo","Robot/23Cc","unica/qOLU","YtIMnsXOBE"]   //设置管理员
//每日重置可签到
timer 24*60*60*1000 {  
  for  x of users {
    if x.check==true then x.day=0
    x.check=true
  }
}
//每15分钟在后台输出一次数据
timer 15*60*1000{
  let mydate=new Date(); 
  let h=mydate.getHours();  
  let m=mydate.getMinutes();
  print(users)
  print("时间:"+h+":"+m)
}
//创建新用户
newu = (user,tc) =>{
  users.push({ uid: ++duid,name: user,tc: tc,coin: 0,check: true,day: 0})
}
//校验用户 返回用户编号，若返回-1，则用户tc不匹配
checku = (user) =>{
  let n
  let tc
  let i=drrr.users.findIndex(u => u.name == user) 
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
//关键字拆分
onekey=(cmd,cont)=>{
  return cont.replace(cmd, "").trim();
}
twokey=(cmd,cont)=>{
let u=cont.replace(cmd, "").trim().slice(0,cont.replace(cmd, "").trim().search("\\s")).trim()
let m=cont.replace(cmd, "").trim().slice(cont.replace(cmd, "").trim().search("\\s")).trim()
let r=[u,m]
return r
}
threekey=(cmd,cont)=>{
let u=twokey(cmd,cont)[0]
let m=twokey(cmd,cont)[1]
let n=m.slice(0,m.search("\\s")).trim()
let l=m.slice(m.search("\\s")).trim()
let r=[u,n,l]
return r
}
//排行榜
sort = (key) =>{
  users.sort((a,b) => b[key] - a[key])
  let pm=users
  let word=" DRB"
  if key=="day" then word="天"
  if users.length >10 then pm=pm.slice(0,10)    //截取排名前10的用户
  let p=pm.reduce((a,x,y) => {
    let name=x.name
    let l=name.length
    let b=" "
    let c=""
    if l<18 then{ for i=0;i<(18-l);i++ { c=c+b }}
    a=a+"\n"+(y+1)+"."+x.name+c+x[key]+word
    return a
  },"总用户:"+users.length+"人")
  return p
 }
event [msg, me, dm] (user, cont: "^/排行榜") => {
  drrr.print("资产排行榜      "+sort("coin"))
  drrr.print("连续签到排行榜  "+sort("day"))
  }

//签到
event [msg, me, dm] (user, cont: "^/签到") => { 
  let dyb=Math.floor(Math.random() * 3)+1
  let yb=4
  let n=checku(user)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if users[n].check then {
  users[n].day++
  users[n].check=false
  yb=yb+users[n].day
  if yb>30 then yb=30
  users[n].coin+=yb
  drrr.print("/me @"+user+" 签到成功，DRB+"+yb+"，现在共有"+users[n].coin+" DRB，已连续签到"+users[n].day+"天")
  } else { drrr.print( "/me @"+ user +" 今天已经签过到了，明天记得继续来签到哦")
}
  }
//转账
event [msg, me, dm] (user, cont: "^/转账\\s+\\S+\\s+\\d") => {
  let tou=twokey("/转账",cont)[0]
  let cn=parseInt(twokey("/转账",cont)[1])
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
} else if (m == -1) then {
  drrr.dm(user,"@"+user+"您转账的用户【"+tou+"】不存在"+m)
} else if users[n].coin < (cn+1) then {
  drrr.dm(user,"@"+ user +"很抱歉，您只有"+users[n].coin+"DRB，不足以转账"+cn+" DRB 并缴纳 1 DRB手续费")
} else if cn<11 then {
  drrr.dm(user,"@"+ user +"很抱歉，转账最低额度为 10 DRB 并收取 1 DRB手续费")
}else {
  let sid=user
  let rid=users[m].name
  trans.push({send: sid,recv: rid,coin: cn})
  drrr.dm(user,"@"+user+"您将要转账给【"+tou+"】"+cn+" DRB,将收取 1 DRB手续费确认操作请回复 /1")
  let a=trans.findIndex(x=> x.send==sid)
  }
}
//确认转账
event [msg, me, dm] (user, cont: "^/1") => {
  let n=checku(user)
  let a=trans.findIndex(x=> x.send==user)
  if a>=0 then { 
    let m=users.findIndex(x=> x.name==trans[a].recv)
    let cn=trans[a].coin
    users[n].coin=users[n].coin-cn-1
    users[m].coin=users[m].coin+cn
    trans.splice(a,1)
    drrr.dm(user,"好的，转帐成功")
  }
}
//查看个人信息
event [msg, me, dm] (user, cont: "^/个人") => {
  let n=checku(user)
  if n>=0 then
  drrr.dm(user,"用户名："+users[n].name+" ,资产："+users[n].coin+" DRB ,连续签到："+users[n].day+"天")
  }

//查看红包情况
showp=()=>{
  let res=""
  if gainu.length>0 then{
  let r=gainu.map((x,i) => "\n"+(i+1)+"."+x+"\t"+gains[i]+" DRB")
  res=r.join("")
  }
  let result="【"+owner+"的红包】 已领取【"+gains.length+"/"+am+"】"+res
  return result
}
event [msg, me, dm] (user, cont: "^/红包") => {
  drrr.print(showp())
}
//发红包
event [msg, me, dm] (user, cont: "^/发红包\\s+\\d+\\s+\\d") => {
 if pkgs.length>0 then drrr.print("/me @"+user+"现在已经有一个正在被领取的红包，"+
                                  "请等该红包被领取完或者超时清空后再发出新红包 ")
  else {
  let amc=parseInt(twokey("/发红包",cont)[0])
  let cn=parseInt(twokey("/发红包",cont)[1])
  let n=checku(user)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
} else if users[n].coin < cn then {
  drrr.print("/me @"+ user +"很抱歉，您只有"+users[n].coin+"DRB，不足以发出"+cn+" DRB的红包")
} else if amc>cn then {
  drrr.print("/me @"+ user +"很抱歉，小粒无法把"+cn+"枚DRB掰开分给"+amc+"个人")
} else {
  users[n].coin-=cn
  pkgi++
  owner=user
  owneri=users[n].uid
  am=amc
  gaini=[]
  gainu=[]
  gains=[]
  pkgs= new Array(am)
  pkgs.fill(1)
  let cns=cn-am
  let pi=pkgi
  while cns>0  {
   let j=Math.floor(Math.random() * pkgs.length)
   pkgs[j]=pkgs[j]+1
   cns--
  } 
  drrr.print("/me 【"+owner+"的红包】快来领取吧！个数：【"+am+"】")
  later 10*60*1000 {
    if (pkgs.length>0 && pkgi==pi)then {
      let bck=pkgs.reduce((a,x)=>a+=x)
      let bn=users.findIndex(x => x.uid==owneri)
      users[bn].coin+=bck
      pkgs=[]
      drrr.print("/me 【"+owner+"的红包】超过10分钟未被领取完，已返还剩余金额给"+owner+"，现在可以发出新红包了")
      drrr.print(showp())
    } 
  }
  } 
 }
}

//抢红包
event [msg, me, dm] (user, cont: "^/抢") => {
  let n=checku(user)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
} else if pkgs.length==0 then {
  if gains.length==am then
  drrr.print("/me @"+ user +"您来晚了，红包已经被抢光了")
  else drrr.print("/me @"+ user +"您来晚了，红包已经超时了")
} else{
  let id=users[n].uid
  if gaini.some(a => a==id)  then {
  drrr.print("/me @"+ user +"您已经抢过这个红包了")
  }else{
    let gain=pkgs.shift()
    gaini.push(id)
    gainu.push(user)
    gains.push(gain)
    users[n].coin+=gain
    if pkgs.length>0 then
    drrr.print("/me @"+ user +"领取了【"+owner+"的红包】，获得"+gain+" DRB   剩余红包【"+pkgs.length+"/"+am+"】")
    else {
      drrr.print("/me @"+ user +"领取了【"+owner+"的红包】，获得"+gain+" DRB   红包被抢光啦，现在可以发出新红包了")
      drrr.print(showp())
    }
   } 
  }
 } 
 
//挂机
event [msg, me, dm] (user, cont: "^/挂机") => { 
  let n=checku(user)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
} else {
  let id=users[n].uid
  if hangs.some(a => a==id)  then {
  drrr.print("/me @"+ user +"您已经在挂机了")
  }else {
  hangs.push(id)
  drrr.print("/me @"+ user +"您现在开始挂机了，挂够30分钟将会获得 5-10 DRB")
  later 30*60*1000 {
    Myfor =()=> {
    let i=drrr.users.findIndex(u => {
      let n=checku(u.name)
      return id==users[n].uid
    })
    if i>=0 then {
    let a=Math.floor(Math.random() * 6)+5
    users[n].coin+=a
    drrr.print("/me @"+ user +"您成功挂机30分钟，获得"+a+" DRB,现在共有"+users[n].coin+" DRB")
    setTimeout(Myfor, 30*60*1000)
    }else {
    let n=users.findIndex(x => x.uid==id)
    let q=hangs.findIndex(x=> x==id)
    hangs.splice(n,1)
     }
    }
    Myfor()
   }
  }
 }
}
//添加
event [msg, me, dm] (user, cont: "^/添加\\s+\\S+\\s+\\S+\\s+\\d") => {
  if admins.some(a => a==tc) then {
  let name=threekey("/添加",cont)[0]
  let tc=threekey("/添加",cont)[1]
  let coin=parseInt(threekey("/添加",cont)[2])
  drrr.print(threekey("/添加",cont)[2])
  drrr.print(tc)
  users.push({ uid: ++duid,name: name,tc: tc,coin: coin,check: true,day: 0})
    let r = []
    let d = []
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
    drrr.dm(user,"●添加数据成功")
  }else {
    users=r
    let de=d.reduce((a,x,y) => a=a+"\n"+(y+1)+"."+x.name+"\t"+x.coin+"DRB","")
    drrr.dm(user,"●更新数据成功，已删除旧数据:")
    later 500 drrr.dm(user,de)
  }         
 later 1000 drrr.dm(user,sort("coin"))
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
  let dt=JSON.stringify(users)
  let data="/导入"+dt
   print(data)
   print("删除此行")
   drrr.dm(user,data)
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
    let r = []
    let d = []
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
    let de=d.reduce((a,x,y) => a=a+"\n"+(y+1)+"."+x.name+"\t"+x.coin+"DRB","")
    drrr.dm(user,"●更新数据成功，已删除旧数据:")
    later 500 drrr.dm(user,de)
  }         
 later 1000 drrr.dm(user,sort("coin"))
    }
  }
}    
//注文
event [me,msg] (user, cont:"^/注文\\s+\\S")  => {
let r=cont.replace("/注文", "").trim();
zw=["可乐","茶","啤酒","葡萄酒","红酒","白酒","汁","咖啡","拿铁","卡布奇诺"];
tb=["🥤","🍵","🍺","🍷","🍷","🍶","🍹","☕","☕","☕"];
let i=0;
let t="";
let a=false;
let n=checku(user)
  if (n == -1) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
} else if (users[n].coin == 0) then {
  drrr.print("/me @"+ user +"很抱歉，注文功能需要花费 1 DRB，您的DRB数为"+users[n].coin+"。")
} else {
  users[n].coin--
  drrr.print("/me @"+ user +" 您使用了 1 DRB，现在您的DRB数量为"+users[n].coin+"，["+r+"]马上就好，请稍等一分钟" );
  while (i<zw.length && !a){
  let reg = new RegExp(zw[i]);
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
