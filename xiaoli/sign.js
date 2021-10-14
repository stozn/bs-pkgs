//用户数据
let users=[{ uid: 1,name: "管理员",tc: "YtIMnsXOBE",coin: 10000000,check: true,day: 0,bag: ["MG-精灵球","MG-精灵球","MG-精灵球","MG-精灵球"],pet: []}]
let duid
//挂机数据
let hangs=[]
//转账数据
let trans=[]
//商店
let goods=[{name: "MG-红包",price: 1},{name: "MG-精灵球",price: 50},{name: "MG-宠物干粮",price: 10}]
//奖励数据
let au=[]
//宠物数据
let apet=[]
let pets=[{name: "猫",level: 1,exp: 0}]
//红包数据
let pkgi=0
let owner
let owneri
let am
let gaini=[]
let gainu=[]
let gains=[]
let pkgs=[]
const admins=["OG0OPFxOFw","Ancy.WWeeo","Robot/23Cc","unica/qOLU","YtIMnsXOBE"]   //设置管理员
//每日重置可签到
timer 24*60*60*1000 {  
  for  x of users {
    if x.check==true then x.day=0
    x.check=true
  }
}
//每15分钟在后台输出一次数据，顺手清理整点奖励的用户
timer 15*60*1000{
  let mydate=new Date(); 
  let h=mydate.getHours();  
  let m=mydate.getMinutes();
  print(users)
  print("时间:"+h+":"+m)
 //整点用户清理
  mydate= new Date()
  const m=mydate.getMinutes() 
  if m>2 then au=[]
}
//创建新用户
newu = (user,tc) =>{
  users.push({ uid: ++duid,name: user,tc: tc,coin: 0,check: true,day: 0,bag: [],pet: []})
}
//校验用户 返回用户编号，若返回-1，则用户tc不匹配
checku = (user) =>{
  let n=(-1)
  let tc
  let i=info.room.users.findIndex(u => u.name == user) 
  if info.room.users[i].tripcode==false then {
    tc="无"
  }else {
    tc=info.room.users[i].tripcode
  } 
  if tc=="无" then {
     n=users.findIndex(u => u.name == user)  
  } else {
     n=users.findIndex(u => u.tc == tc) 
     if (n ==(-1)) then  n=users.findIndex(u => u.name == user) 
  }
  if (n ==(-1)) then {
  newu(user,tc)
  n=users.length-1
  return n
  }else if (users[n].tc=="无") then { 
    users[n].tc=tc
    return n 
  }else if (users[n].tc==tc) then { return n }
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
  if users.length >7 then pm=pm.slice(0,7)    //截取排名前7的用户
  let p=pm.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+"."+x.name+"\t"+x[key]+word
    return a
  },"总用户:"+users.length+"人")
  return p
 }
event [msg, me, dm] (user, cont: "^/排行榜") => {
  drrr.print("资产排行榜      "+sort("coin"))
  later 2*1000 drrr.print("连续签到排行榜  "+sort("day"))
  }

//签到
event [msg, me, dm] (user, cont: "^/签到") => { 
  let yb=14
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
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
//整点奖励
event [msg, me, dm] (user, cont: "^/领取奖励") => { 
  let yb=Math.floor(Math.random() * 5)+5
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  } else {
  mydate= new Date()
  const m=mydate.getMinutes() 
  let nm=users[n].name
  let i=au.findIndex(u => u==nm)
  if m>2 then {
    drrr.print("/me @"+user+" 还未到领取时间，请在每个整点的2分钟内前来领取奖励")
  }else if i>=0 then {
    drrr.print("/me @"+user+" 您已领取过本小时奖励了")
  }else {
    au.push(nm)
    users[n].coin+=yb
    drrr.print("/me @"+user+" 您已成功领取本小时奖励，收获"+yb+" DRB")
  }
 }
}
//转账
event [msg, me, dm] (user, cont: "^/转账\\s+\\S+\\s+\\d") => {
  let tou=twokey("/转账",cont)[0]
  let cn=parseInt(twokey("/转账",cont)[1])
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (m ==(-1)) then {
  drrr.dm(user,"@"+user+" 您转账的用户【"+tou+"】不存在"+m)
} else if users[n].coin < (cn+1) then {
  drrr.dm(user,"@"+ user +" 很抱歉，您只有"+users[n].coin+"DRB，不足以转账"+cn+" DRB 并缴纳 1 DRB手续费")
} else if cn<11 then {
  drrr.dm(user,"@"+ user +" 很抱歉，转账最低额度为 10 DRB 并收取 1 DRB手续费")
}else {
  let sid=user
  let rid=users[m].name
  trans.push({send: sid,recv: rid,coin: cn})
  drrr.dm(user,"@"+user+" 您将要转账给【"+tou+"】"+cn+" DRB,将收取 1 DRB手续费确认操作请回复 /1")
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
  drrr.dm(user,"用户名："+users[n].name+" ,tc："+users[n].tc+" ,资产："+users[n].coin+" DRB ,连续签到："+users[n].day+"天")
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
 if pkgs.length>0 then drrr.print("/me @"+user+" 现在已经有一个正在被领取的红包，"+
                                  "请等该红包被领取完或者超时清空后再发出新红包 ")
  else {
  let amc=parseInt(twokey("/发红包",cont)[0])
  let cn=parseInt(twokey("/发红包",cont)[1])
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if !users[n].bag.some(x => x=="MG-红包") then {
  drrr.print("/me @"+ user +" 很抱歉，您的背包中没有红包，请前往商店购买")
} else if users[n].coin < cn then {
  drrr.print("/me @"+ user +" 很抱歉，您只有"+users[n].coin+"DRB，不足以发出"+cn+" DRB的红包")
} else if amc>cn then {
  drrr.print("/me @"+ user +" 很抱歉，小粒无法把"+cn+"枚DRB掰开分给"+amc+"个人")
} else {
  users[n].coin-=cn
  let k=users[n].bag.findIndex(x => x=="MG-红包")
  users[n].bag.splice(k,1)
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
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if pkgs.length==0 then {
  if gains.length==am then
  drrr.print("/me @"+ user +" 您来晚了，红包已经被抢光了")
  else drrr.print("/me @"+ user +" 您来晚了，红包已经超时了")
} else{
  let id=users[n].uid
  if gaini.some(a => a==id)  then {
  drrr.print("/me @"+ user +" 您已经抢过这个红包了")
  }else{
    let gain=pkgs.shift()
    gaini.push(id)
    gainu.push(user)
    gains.push(gain)
    users[n].coin+=gain
    if pkgs.length>0 then
    drrr.print("/me @"+ user +" 领取了【"+owner+"的红包】，获得"+gain+" DRB   剩余红包【"+pkgs.length+"/"+am+"】")
    else {
      drrr.print("/me @"+ user +" 领取了【"+owner+"的红包】，获得"+gain+" DRB   红包被抢光啦，现在可以发出新红包了")
      drrr.print(showp())
    }
   } 
  }
 } 
 
//背包
event [msg, me, dm] (user, cont: "^/背包") => {
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  else drrr.dm(user,"@"+users[n].name+" 您的背包有【"+users[n].bag.join("】【")+"】")
  }
//商店
event [msg, me, dm] (user, cont: "^/商店") => {
  let gds=goods.map((x,i) => i+1+". "+x.name+"  "+x.price+" DRB")
  drrr.print("商店\n"+gds.join("\n"))
  }
event [me,msg] (user, cont:"^/买\\s+\\d")  => {
  let g=parseInt(cont.replace("/买", "").trim())
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if g>goods.length then {
  drrr.print("/me @"+user+" 输入的序号不存在")
}else {
  let good=goods[g-1].name
  let p=goods[g-1].price
  if (users[n].coin < p) then {
  drrr.print("/me @"+ user +" 很抱歉，【"+good+"】需要花费 "+p+" DRB，您只有"+users[n].coin+"DRB")
} else {
  users[n].coin-=p
  users[n].bag.push(good)
  drrr.print("/me @"+ user +" 您已成功购买【"+good+"】，花费了"+p+" DRB，现在您有"+users[n].coin+"DRB")
  }
 } 
}
//赠送
event [msg, me, dm] (user, cont: "^/赠送\\s+\\S+\\s+\\S") => {
  let tou=twokey("/赠送",cont)[0]
  let gd=twokey("/赠送",cont)[1]
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  let l=users[n].bag.findIndex(x=>x==gd)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (m ==(-1)) then {
  drrr.dm(user,"@"+user+" 您赠送的用户【"+tou+"】不存在")
} else if (l ==(-1)) then {
  drrr.dm(user,"@"+ user +" 很抱歉，您的背包没有【"+gd+"】")
} else {
  users[n].bag.splice(l,1)
  users[m].bag.push(gd)
  drrr.dm(user,"@"+ user +" 您已成功将【"+gd+"】赠送给"+tou)
 }
}
event [msg, me, dm] (user, cont: "^/上架\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let good=twokey("/上架",cont)[0]
    let p=parseInt(twokey("/上架",cont)[1])
    let i=goods.findIndex(g => g.name==good)
    if i>=0 then {
    drrr.print("/me 【"+good+"】 已经上架了")
    }else {
    goods.push({name: good,price: p})
    drrr.print("/me 【"+good+"】 上架啦！")
    }
  }
}
event [msg, me, dm] (user, cont: "^/下架\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    let good=cont.replace("/下架", "").trim()
    let i=goods.findIndex(g => g.name==good)
    if i>=0 then {
    goods.splice(i,1)
    drrr.print("/me 【"+good+"】 下架了")
    }else {
    drrr.print("/me 还没有这个商品哦")
    }
  }
}
//宠物系统
//经验升级设置
checke = (e) =>{
    let s=[0,5,15,50,100,200,500]  //设置等级分界点
       if e <s[1] then { return [1,s[1]-e] }  //1级 1-4
  else if e <s[2] then { return [2,s[2]-e]}  //2级 5-14
  else if e <s[3] then { return [3,s[3]-e] }  //3级 15-49
  else if e <s[4] then { return [4,s[4]-e] }  //4级 50-99
  else if e <s[5] then { return [5,s[5]-e] }  //5级 100-199
  else if e <s[6] then { return [6,s[6]-e] }  //6级 200-499
  else                 { return [7,0] }       //7级 500-∞
}
timer 5*60*1000{
if Math.random()<0.15 then {
  let i=Math.floor(Math.random() * pets.length)
  let m=pets[i].name
  let a=Math.random()*20+5
  apet.push(pets[i])
  drrr.print("/me 发现一只【"+m+"】，快来捕捉吧")
  later a*60*1000 {
    let n=apet.findIndex(x => x.name==m)
    if n>=0 then {
      apet.splice(n,1)
      drrr.print("/me 【"+m+"】逃走了")
    }
  }
  }
}
event [msg, me, dm] (user, cont: "^/全部宠物") => {
  let p=pets.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+".【"+x.name+"】\tLv."+x.level+"\tExp."+x.exp
    return a
  }," 全部宠物有:")
  drrr.print(p)
}
event [msg, me, dm] (user, cont: "^/观察") => {
  if apet.length==0 then {
    drrr.print("/me 现在没有宠物出没")
  }else{
  let p=apet.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+".【"+x.name+"】\tLv."+x.level+"\tExp."+x.exp
    return a
  }," 现在出没的宠物有:")
  drrr.print(p)
  }
}
event [msg, me, dm] (user, cont: "^/宠物") => {
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  else {
    
  let p=users[n].pet.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+".【"+x.name+"】\tLv."+x.level+"\tExp."+x.exp
    return a
  }," 您的宠物有:")
  drrr.dm(user,"@"+users[n].name+p)
  }
}
event [msg, me, dm] (user, cont: "^/捕捉") => {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if apet.length==0 then { 
  drrr.print("/me @"+user+" 现在还没有宠物出没哦")
} else if !users[n].bag.some(x => x=="MG-精灵球") then {
  drrr.print("/me @"+ user +" 很抱歉，您的背包中没有精灵球，请前往商店购买")
} else {
  let p=users[n].bag.findIndex(x => x=="MG-精灵球")
  users[n].bag.splice(p,1)
  drrr.print("/me @"+user+" 正在努力捕捉中...")
  later 5000 {
  let i=Math.floor(Math.random() * apet.length)
  let k=Math.random()<0.2  //成功概率 0.2

  if !k || (apet.length-1)<i then {
  drrr.print("/me @"+user+" 哎呀，失手了")
  }else { 
    let m=apet[i].name
    users[n].pet.push(apet[i])
    apet.splice(i,1)
    drrr.print("/me @"+user+" 成功捕获一只【"+m+"】")
   }
  }
 }
}
event [me,msg] (user, cont:"^/投喂\\s+\\d")  => {
  let p=parseInt(cont.replace("/投喂", "").trim())-1
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if !users[n].bag.some(x => x=="MG-宠物干粮") then {
  drrr.print("/me @"+ user +" 很抱歉，您的背包中没有宠物干粮，请前往商店购买")
} else if p>(users[n].pet.length+1) then {
  drrr.print("/me @"+user+" 输入的序号不存在")
} else {
  let q=users[n].bag.findIndex(x => x=="MG-精灵球")
  users[n].bag.splice(q,1)
  let name=users[n].pet[p].name
  users[n].pet[p].exp++
  let lv=checke(users[n].pet[p].exp)[0]
  let dt=checke(users[n].pet[p].exp)[1]
  if users[n].pet[p].level==7 then {
    drrr.print("/me @"+ user +" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，已经达到最高等级Lv.7")
  }else if lv==users[n].pet[p].level then {
    drrr.print("/me @"+ user +" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，目前 Lv."+lv+" ,距离下一级还差"+dt+"经验值")
  }else {
    users[n].pet[p].level=lv
    drrr.print("/me @"+ user +" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，恭喜升到 Lv."+lv+" ,距离下一级级还差"+dt+"经验值")
  }
  }
}
event [me,msg] (user, cont:"^/更改宠物名\\s+\\d+\\s+\\S")  => {
  let p=parseInt(twokey("/更改宠物名",cont)[0])-1
  let nm=twokey("/更改宠物名",cont)[1]
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if p>(users[n].pet.length+1) then {
  drrr.print("/me @"+user+" 输入的序号不存在")
} else if users[n].pet[p].level<3 then {
  drrr.print("/me @"+user+" 您的宠物【"+users[n].pet[p].name+"】未达到Lv.3或以上，暂无法更名")
} else if nm.search("-")>=0 then {
  drrr.print("/me @"+user+" 新名字中不能包含“-”字符")
} else {
  let onm=users[n].pet[p].name
  let m=onm.slice(onm.search("-")+1)
  users[n].pet[p].name=nm+"-"+m
  if onm==m then {
  drrr.print("/me @"+user+" 您已成功将宠物【"+onm+"】名字更改为【"+users[n].pet[p].name+"】")
  }else {
  drrr.print("/me @"+user+" 您已成功将宠物【"+onm+"】名字更改为【"+users[n].pet[p].name+"】")
  }
   }
} 
event [me,msg] (user, cont:"^/放生\\s+\\d")  => {
  let p=parseInt(cont.replace("/放生", "").trim())-1
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if p>(users[n].pet.length+1) then {
  drrr.print("/me @"+user+" 输入的序号不存在")
} else {
  let a=Math.random()*20+5 //暂留时间5-25
  let pet=users[n].pet[p]
  users[n].pet.splice(p,1)
  apet.push(pet)
  drrr.print("/me @"+user+" 您已成功放生【"+pet.name+"】，它将在一段时间后离开")
  later a*60*1000 {
    let i=apet.findIndex(x => x.name==pet.name && x.exp==pet.exp)
    if i>=0 then {
      apet.splice(n,1)
      drrr.print("/me 【"+pet.name+"】逃走了")
   }
  }
 }
}
event [msg, me, dm] (user, cont: "^/创造\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    let anm=onekey("/创造",cont)
    let i=pets.findIndex(g => g.name==anm)
    if i>=0 then {
    drrr.print("/me 【"+anm+"】 已经存在了")
    }else {
    pets.push({name: anm,level: 1,exp: 0})
    drrr.print("/me 【"+anm+"】 诞生啦！")
    }
  }
}
//添加
event [msg, me, dm] (user, cont: "^/添加\\s+\\S+\\s+\\S+\\s+\\d", url, tc) => {
  if admins.some(a => a==tc) then {
  let name=threekey("/添加",cont)[0]
  let tc=threekey("/添加",cont)[1]
  let coin=parseInt(threekey("/添加",cont)[2])
  users.push({ uid: ++duid,name: name,tc: tc,coin: coin,check: true,day: 0,bag:[],pet: []})
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
   if (n ==(-1)) then {
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
   drrr.print(data)
   }
}
//导入
event [msg, me, dm] (user, cont: "^/导入\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    data=cont.replace("/导入", "").trim()
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
  if (n ==(-1)) then {
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
//DRB特供版抽奖
event [me,msg] (user, content:"^/抽奖")=> {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if (users[n].coin < 5) then {
  drrr.print("/me @"+ user +"很抱歉，抽奖功能需要花费 5 DRB，您的DRB数为"+users[n].coin+"。")
} else {
  users[n].coin-=5
  drrr.print("/me @"+ user +" 您使用了 5 DRB，现在您的DRB数量为"+users[n].coin+"，正在抽奖中..." )

array = ["🍉","🍎","🍇","🍊","🍒","🍈"]
a = array[Math.floor(Math.random() * 6)]
b = array[Math.floor(Math.random() * 6)]
c = array[Math.floor(Math.random() * 6)]
later 2*1000 {
//中奖 
  if a == b && b == c 
then {
  users[n].coin+=300
  drrr.print("@" + user +"抽到的是【"+a+b+c+"】🎉🎉🎉🎊🎊🎰恭喜中大奖： + 300 DRB")
}
  else
//不中
  drrr.print("/me @" + user +" |抽到的 【"+a+b+c+"】没中奖哦~请再接再厉~！")
  }
 }
}
//刮刮乐
event [me,msg] (user, content:"^/刮刮乐")=> {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if (users[n].coin < 3) then {
  drrr.print("/me @"+ user +"很抱歉，刮刮乐 需要花费 2 DRB，您的DRB数为"+users[n].coin+"。")
} else {
  users[n].coin-=3
  drrr.print("/me @"+ user +" 您使用了 3 DRB，现在您的DRB数量为"+users[n].coin+"，刮奖中..." )

g = [Math.floor(Math.random()*100+1)]
later 2*1000 {
//中奖 10
  if g == 100
then {
  users[n].coin+=200
  drrr.print("@" + user +" |是 "+g+" 🎉🎊恭喜中奖： + 200 DRB")
}
    else
//中奖 90
  if g >= 90
then {
  users[n].coin+=20
  drrr.print("/me @" + user +" |是 "+g+" 🎉： + 20 DRB")
}
  else
//中奖 75
  if g >= 75
then {
  users[n].coin+=5
  drrr.print("/me @" + user + " |是 "+g+"  🎉： + 5 DRB")
}
  else
//不中
  drrr.print("/me @" + user +" |是 "+g+" 残念！没中奖~")
  }
 }
}
