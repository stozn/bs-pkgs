//用户数据
let users=
let input=[]
//商店
let goods=[{name: "MG-红包",price: 1},{name: "MG-精灵球",price: 10},{name: "MG-宠物干粮",price: 3},{name: "鲜榨果汁",price: 2},{name: "可乐",price: 4}]
let market=[]
//彩票数据
let lottery=[]
let result="暂无开奖结果"
//奖励数据
let award=[]
//宠物数据
let apet=[]
let pets=[{name: "白泽",level: 7,exp: 500},{name: "钟山神",level: 4,exp: 50},{name: "九尾狐",level: 2,exp: 5},{name: "饕餮",level: 1,exp: 0},{name: "麒麟",level: 3,exp: 15},{name: "白矖",level: 6,exp: 200}]
//红包数据
let pkgi=0
let owner
let owneri
let pktam
let gaini=[]
let gainu=[]
let gains=[]
let pkgs=[]
const admins=["OG0OPFxOFw","Ancy.WWeeo","Robot/23Cc","unica/qOLU","YtIMnsXOBE"]   //设置管理员
//签到重置 开奖
timer 58*1000 {
   mydate=new Date()
   const h=mydate.getHours()
   const m=mydate.getMinutes()
   if h==3 && m==1 && lottery.length>0 then kai()
   if h==0 && m==0 then{
    for  x of users {
     if x.check==true then x.day=0
     x.check=true
    }
  }
 users=users.filter(x=> (x.coin+x.day+x.bag.length+x.letters.length)>0)
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
  if m>2 then award=[]
}
//随机整数
rand = (a,b) =>{
  return Math.floor(Math.random() * Math.floor(b-a+1))+a
}
//支持@
checka = (name) =>{
    let a=name
    if(name.slice(0,1)=="@") then a=name.slice(1)
    return a
}
//创建新用户
newu = (user,tc) =>{
  users.sort((a,b) => a.uid - b.uid)
  let duid=users[users.length-1].uid+1
  users.push({ uid: duid,name: user,tc: tc,coin: 0,check: true,day: 0,bag: [],pet: [],letters: [],newl: false})
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
//消息推送
send=(n,c)=>{
  users[n].letters.unshift(c)
  users[n].newl=true
  if users[n].letters.length==9 then{
    users[n].letters.reverse()
   let  a=users[n].letters.findIndex(x=> x.slice(0,1)=="【")
   if a>=0 then { users[n].letters.splice(a,1) }
   else { users[n].letters.splice(0,1) }
    users[n].letters.reverse()
  }
}
//排行榜
sort = (key) =>{
  let usr=users
  usr.sort((a,b) => b[key] - a[key])
  let pm=usr
  let word=" DRB"
  if key=="day" then word="天"
  if usr.length >7 then pm=pm.slice(0,7)    //截取排名前7的用户
  let p=pm.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+"."+x.name+"\t"+x[key]+word
    return a
  },"总用户:"+usr.length+"人")
  return p
 }
event [msg, me, dm] (user, cont: "^/排行榜") => {
  drrr.print("资产排行榜      "+sort("coin"))
  later 2*1000 drrr.print("签到排行榜  "+sort("day"))
  }
event [msg, me, dm] (user, cont: "^/帮助") => {
  drrr.dm(user,"请前往小粒个人网站查看详细帮助页","http://xiaoli.22web.org/help/")
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
  drrr.print("/me @"+users[n].name+" 签到成功，DRB+"+yb+"，现在共有"+users[n].coin+" DRB，已连续签到"+users[n].day+"天")
  } else { drrr.print( "/me @"+users[n].name+" 今天已经签过到了，明天记得继续来签到哦")
}
  }
//全服奖励
event [msg, me, dm] (user, cont: "^/全服奖励\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let nm=twokey("/全服奖励",cont)[0]
    let cn=parseInt(twokey("/全服奖励",cont)[1])
    for  x of users { x.coin+=cn }
    for x of users.map((x,y)=> y){
      send(x,"【全服奖励】*"+nm+"*已发送到您账户，金额为"+cn+" DRB，请留意查收")
    }
    drrr.print("/me *全服奖励* 【"+nm+"】已发放，金额"+cn+" DRB")
  }
}
//个人奖励
event [msg, me, dm] (user, cont: "^/奖励\\s+\\d+\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let uid=parseInt(threekey("/奖励",cont)[0])
    let nm=threekey("/奖励",cont)[1]
    let cn=parseInt(threekey("/奖励",cont)[2])
    let n=users.findIndex(x=> x.uid==uid)
    if n<0 then {
      drrr.dm(user,"未找到UID为【"+uid+"】的用户")
    }else {
      users[n].coin+=cn
      send(x,"【个人奖励】*"+nm+"*已发送到您账户，金额为"+cn+" DRB，请留意查收")
      drrr.dm(user,"【个人奖励】*"+nm+"*已发送到@"+users[n].name+"的账户，金额为"+cn+" DRB")
    }
  }
}
event [msg, me, dm] (user, cont: "^/奖励\\s+\\S+\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let name=checka(threekey("/奖励",cont)[0])
    let nm=threekey("/奖励",cont)[1]
    let cn=parseInt(threekey("/奖励",cont)[2])
    let n=users.findIndex(x=> x.name==name)
    if n<0 then {
      drrr.dm(user,"未找到用户名为【"+name+"】的用户")
    }else {
      users[n].coin+=cn
      send(x,"【个人奖励】*"+nm+"*已发送到您账户，金额为"+cn+" DRB，请留意查收")
      drrr.dm(user,"【个人奖励】*"+nm+"*已发送到@"+users[n].name+"的账户，金额为"+cn+" DRB")
    }
  }
}
//个人惩罚
event [msg, me, dm] (user, cont: "^/惩罚\\s+\\d+\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let uid=parseInt(threekey("/惩罚",cont)[0])
    let nm=threekey("/惩罚",cont)[1]
    let cn=parseInt(threekey("/惩罚",cont)[2])
    let n=users.findIndex(x=> x.uid==uid)
    if n<0 then {
      drrr.dm(user,"未找到UID为【"+uid+"】的用户")
    }else {
      users[n].coin-=cn
      send(x,"【个人惩罚】您因*"+nm+"*受到惩罚，罚金为"+cn+" DRB")
      drrr.dm(user,"【个人惩罚】@"+users[n].name+"因*"+nm+"*受到惩罚，罚金为"+cn+" DRB")
    }
  }
}
event [msg, me, dm] (user, cont: "^/惩罚\\s+\\S+\\s+\\S+\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
    let name=checka(threekey("/惩罚",cont)[0])
    let nm=threekey("/惩罚",cont)[1]
    let cn=parseInt(threekey("/惩罚",cont)[2])
    let n=users.findIndex(x=> x.name==name)
    if n<0 then {
      drrr.dm(user,"未找到用户名为【"+name+"】的用户")
    }else {
      users[n].coin-=cn
      send(x,"【个人惩罚】您因*"+nm+"*受到惩罚，罚金为"+cn+" DRB")
      drrr.dm(user,"【个人惩罚】@"+users[n].name+"因*"+nm+"*受到惩罚，罚金为"+cn+" DRB")
    }
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
  let i=award.findIndex(u => u==nm)
  if m>2 then {
    drrr.print("/me @"+users[n].name+" 还未到领取时间，请在每个整点的2分钟内前来领取奖励")
  }else if i>=0 then {
    drrr.print("/me @"+users[n].name+" 您已领取过本小时奖励了")
  }else {
    award.push(nm)
    users[n].coin+=yb
    drrr.print("/me @"+users[n].name+" 您已成功领取本小时奖励，收获"+yb+" DRB")
  }
 }
}
//彩票
kai=()=>{
   let r=lottery.length
   let t=lottery.map(x=>x.amount).reduce((a,x)=> a=a+x)
   let l=Math.floor(Math.random() * lottery.length)
   let ln=lottery[l].name
   let la=lottery[l].amount
   let li=users.findIndex(x => x.uid==lottery[l].uid)
   lottery.splice(l,1)
   let m=Math.floor(Math.random() * lottery.length)
   let mn=lottery[m].name
   let ma=lottery[m].amount
   let mi=users.findIndex(x => x.uid==lottery[m].uid)
   lottery.splice(m,1)
   let n=Math.floor(Math.random() * lottery.length)
   let nn=lottery[n].name
   let na=lottery[n].amount
   let ni=users.findIndex(x => x.uid==lottery[n].uid)
   lottery.splice(n,1)
   
   let a=Math.floor(t*(-2*la*la/t/t+2*la/t+1/2))
   let b=Math.floor(t*0.5*(-2*ma*ma/t/t+2*ma/t+1/2))
   let c=Math.floor(t*0.2*(-2*na*na/t/t+2*na/t+1/2))
      
   result="开奖结果\t奖池："+t+" DRB\n一等奖：@"+ln+"\n　购买："+la+" DRB\n　奖金："+a+" DRB"

   users[li].coin+=a
   send(li,"【彩票中奖】恭喜您获得一等奖，购买金额为"+la+" DRB，奖金为"+a+" DRB")
   if r>1 then {
     users[mi].coin+=b
     send(mi,"【彩票中奖】恭喜您获得二等奖，购买金额为"+ma+" DRB，奖金为"+b+" DRB")
     result+="\n二等奖：@"+mn+"\n　购买："+ma+" DRB\n　奖金："+b+" DRB"
   }
   if r>2 then {
     users[ni].coin+=c
     send(ni,"【彩票中奖】恭喜您获得三等奖，购买金额为"+na+" DRB，奖金为"+c+" DRB")
     result+="\n三等奖：@"+nn+"\n　购买："+na+" DRB\n　奖金："+c+" DRB"
   } 
   lottery=[]
   drrr.print(result)
  }

event [msg, me, dm] (user, cont: "^/直接开奖", url, tc) => { 
   if  lottery.length>0 && admins.some(a => a==tc)  then kai()
}
event [msg, me, dm] (user, cont: "^/彩票") => {
  let lt=lottery.map((x,i) => i+1+". "+x.name+"  "+x.amount+" DRB")
  let b=0
  if lottery.length>0 then b=lottery.map(x=>x.amount).reduce((a,x)=> a=a+x) 
  drrr.print("今日彩票 总金额："+b+"DRB\n"+lt.join("\n"))
  }
event [msg, me, dm] (user, cont: "^/开奖结果") => {
  drrr.print(result)
  }
event [msg, me, dm] (user, cont:"^/买彩票\\s+\\d")  => {
  let p=parseInt(cont.replace("/买彩票", "").trim())
  let n=checku(user)
  let id=lottery.findIndex(x=> x.uid==users[n].uid) 
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (id>=0) then {
  drrr.print("/me @"+ users[n].name +" 您今天已经购买过彩票了，金额为"+lottery[id].amount+" DRB")
} else if (users[n].coin < p) then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，您没有 "+p+" DRB，您只有 "+users[n].coin+"DRB")
} else if (p<5) then {
  drrr.print("/me @"+ users[n].name +" 买彩票至少花费 5 DRB")
} else {
  users[n].coin-=p
  lottery.push({name: users[n].name,uid: users[n].uid,amount: p})
  drrr.print("/me @"+ users[n].name +" 您已成功购买金额为"+p+" DRB的【彩票】，现在您有"+users[n].coin+"DRB，请记得在明天前来查看开奖结果")
  }
}
//转账
event [msg, me, dm] (user, cont: "^/转账\\s+\\S+\\s+\\d") => {
  let tou=checka(twokey("/转账",cont)[0])
  let cn=parseInt(twokey("/转账",cont)[1])
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (m ==(-1)) then {
  drrr.dm(user,"@"+users[n].name+" 您转账的用户【"+tou+"】不存在"+m)
} else if users[n].coin < (cn+1) then {
  drrr.dm(user,"@"+ users[n].name +" 很抱歉，您只有"+users[n].coin+"DRB，不足以支付"+cn+"(转账金额)+"+Math.floor(cn*0.05)+"(5%手续费)="+(Math.floor(cn*0.05)+cn)+" DRB")
} else if cn<20 then {
  drrr.dm(user,"@"+ users[n].name +" 很抱歉，转账最低额度为 20 DRB 并收取转账金额5%手续费")
}else {
  users[n].coin=users[n].coin-Math.floor(cn*0.05)-cn
  users[m].coin=users[m].coin+cn
  send(m,"【转账提醒】@"+users[n].name+" 转账给您"+cn+" DRB")
  drrr.dm(user,"@"+users[n].name+" 您已成功转账给【"+tou+"】"+cn+" DRB,收取了"+Math.floor(cn*0.05)+" DRB手续费")
  }
}
//查看个人信息
event [msg, me, dm] (user, cont: "^/(展示)?个人") => {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  }else {
      if cont=="/个人" then {
      drrr.dm(user,"用户名："+users[n].name+" ,tc："+users[n].tc+" ,UID："+users[n].uid+" ,资产："+users[n].coin+" DRB ,连续签到："+users[n].day+"天")
    }else {
      drrr.print("用户名："+users[n].name+" ,tc："+users[n].tc+" ,UID："+users[n].uid+" ,资产："+users[n].coin+" DRB ,连续签到："+users[n].day+"天")
    }
 }
}
//查看红包情况
showp=()=>{
  let res=""
  if gainu.length>0 then{
  let r=gainu.map((x,i) => "\n"+(i+1)+"."+x+"\t"+gains[i]+" DRB")
  res=r.join("")
  }
  let rt="【"+owner+"的红包】 已领取【"+gains.length+"/"+pktam+"】"+res
  return rt
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
  drrr.print("/me @"+ users[n].name +" 很抱歉，您的背包中没有红包，请前往商店购买")
} else if cn<20 then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，红包总金额至少为20 DRB")
} else if users[n].coin < cn then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，您只有"+users[n].coin+"DRB，不足以发出"+cn+" DRB的红包")
} else if amc>20 then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，红包个数最多为20个")
} else {
  users[n].coin-=cn
  let k=users[n].bag.findIndex(x => x=="MG-红包")
  users[n].bag.splice(k,1)
  pkgi++
  owner=user
  owneri=users[n].uid
  pktam=amc
  gaini=[]
  gainu=[]
  gains=[]
  pkgs= new Array(pktam)
  pkgs.fill(1)
  let cns=cn-pktam
  let pi=pkgi
  let w=0
  while w<(amc-1)  {
   let j=rand(1,2*cns/(amc-w))
   pkgs[w]=pkgs[w]+j
   cns-=j
   w++
  } 
  pkgs[w]=pkgs[w]+cns
  drrr.print("/me 【"+owner+"的红包】快来领取吧！个数：【"+pktam+"】")
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
  if gains.length==pktam then
  drrr.print("/me @"+ users[n].name+" 您来晚了，红包已经被抢光了")
  else drrr.print("/me @"+ users[n].name +" 您来晚了，红包已经超时了")
} else{
  let id=users[n].uid
  if gaini.some(a => a==id)  then {
  drrr.print("/me @"+users[n].name +" 您已经抢过这个红包了")
  }else{
    let gain=pkgs.shift()
    gaini.push(id)
    gainu.push(user)
    gains.push(gain)
    users[n].coin+=gain
    if pkgs.length>0 then
    drrr.print("/me @"+ users[n].name+" 领取了【"+owner+"的红包】，获得"+gain+" DRB   剩余红包【"+pkgs.length+"/"+pktam+"】")
    else {
      drrr.print("/me @"+ users[n].name +" 领取了【"+owner+"的红包】，获得"+gain+" DRB   红包被抢光啦，现在可以发出新红包了")
      drrr.print(showp())
    }
   } 
  }
 } 
 
//背包
event [msg, me, dm] (user, cont: "^/(展示)?背包") => {
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  else {
     let p=users[n].bag.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+".【"+x.name+"】 ×"+x.amount
    return a
  }," 您的背包有:")
    if cont=="/背包" then {
      drrr.dm(user,"@"+users[n].name+p)
    }else {
      drrr.print("@"+users[n].name+p)
    }
  }
}
//商店
event [msg, me, dm] (user, cont: "^/商店") => {
  let gds=goods.map((x,i) => i+1+". "+x.name+"  "+x.price+" DRB")
  drrr.print("商店\n"+gds.join("\n"))
  }
event [msg, me, dm] (user, cont: "^/集市") => {
  let gds=market.map((x,i) => i+101+". "+x.name+"  "+x.price+" DRB")
  drrr.print("集市\n"+gds.join("\n"))
  }
event [me,msg] (user, cont:"^/买\\s+\\d+(\\s+\\d)?")  => {
  let reg = new RegExp("^/买\\s+\\d+\\s+\\d")
  let a=1
  let g=parseInt(cont.replace("/买", "").trim())
  if reg.test(cont) then{
     g=parseInt(twokey("/买",cont)[0])
     a=parseInt(twokey("/买",cont)[1])
  }
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (g>goods.length && g<101 )|| g>(market.length+100 || g<1) then {
  drrr.print("/me @"+users[n].name+" 输入的序号不存在")
} else if g<=goods.length then{
  let good=goods[g-1].name
  let p=goods[g-1].price*a
  if (users[n].coin < p) then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，【"+good+"】需要花费 "+p+" DRB，您只有"+users[n].coin+"DRB")
} else {
  users[n].coin-=p
  let j=users[n].bag.findIndex(x=> x.name==good)
  if j>=0 then{
    users[n].bag[j].amount++
  }else {
    users[n].bag.push({name: good,amount: a})
  }
  drrr.print("/me @"+ users[n].name +" 您已成功购买【"+good+"】，花费了"+p+" DRB，现在您有"+users[n].coin+"DRB")
  }
  }else if a==1 then {
  let good=market[g-101].name
  let p=market[g-101].price
  let own=market[g-101].own
  if (users[n].coin < p) then {
  drrr.print("/me @"+users[n].name +" 很抱歉，【"+good+"】需要花费 "+p+" DRB，您只有"+users[n].coin+"DRB")
} else {
  let i=users.findIndex(x=> x.uid==own)
  users[n].coin-=p
  users[i].coin+=p
  market.splice(g-101,1)
  let j=users[n].bag.findIndex(x=> x.name==good)
  if j>=0 then{
    users[n].bag[j].amount++
  }else {
    users[n].bag.push({name: good,amount: a})
  }
  drrr.print("/me @"+users[n].name +" 您已成功购买【"+good+"】，花费了"+p+" DRB，现在您有"+users[n].coin+"DRB")
   }
  }else {
  let good=market[g-101].name
  drrr.print("/me @"+ users[n].name +" 很抱歉，您最多只能购买1件【"+good+"】")
  }
 }
event [msg, me, dm] (user, cont: "^/卖\\s+\\S+\\s+\\d") => { 
  let gd=twokey("/卖",cont)[0]
  let p=parseInt(twokey("/卖",cont)[1])
  let n=checku(user)
  let l=users[n].bag.findIndex(x=>x==gd)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (l ==(-1)) then {
  drrr.dm(user,"@"+ users[n].name +" 很抱歉，您的背包没有【"+gd+"】")
} else {
  users[n].bag.splice(l,1)
  market.push({name: gd,price: p,own: users[n].uid})
  drrr.print("/me @"+users[n].name+" 您已将【"+gd+"】 放到集市上出售啦！") 
  }
}
//赠送
event [msg, me, dm] (user, cont: "^/赠送\\s+\\S+\\s+\\d") => {
  let tou=checka(twokey("/赠送",cont)[0])
  let gd=parseInt(twokey("/赠送",cont)[1])-1
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  let l=users[n].bag.findIndex(x=>x==gd)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (m ==(-1)) then {
  drrr.dm(user,"@"+users[n].name+" 您赠送的用户【"+tou+"】不存在，请检查输入是否为对方【用户名】")
} else if gd >= users[n].bag.length then {
  drrr.dm(user,"@"+ users[n].name +" 输入的序号不存在")
} else {
  let good=users[n].bag[gd].name
  if users[n].bag[gd].amount==1 then {
    users[n].bag.splice(gd,1)
  }else {
    users[n].bag[gd].amount--
  }
  let j=users[m].bag.findIndex(x=> x.name==good)
  if j>=0 then{
    users[m].bag[j].amount++
  }else {
    users[m].bag.push({name: good,amount: 1})
  }
  send(m,"【赠送提醒】@"+ users[n].name +" 赠送给您【"+good+"】")
  drrr.dm(user,"@"+ users[n].name +" 您已成功将【"+good+"】赠送给"+tou)
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
timer 10*60*1000{
if Math.random()<0.55 then {
  let i=Math.floor(Math.random() * pets.length)
  let m=pets[i].name
  let a=Math.random()*10+5
  apet.push({name: pets[i].name,level: pets[i].level,exp: pets[i].exp})
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
event [msg, me, dm] (user, cont: "^/(展示)?宠物") => {
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  else {
  let p=users[n].pet.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+".【"+x.name+"】\tLv."+x.level+"\tExp."+x.exp
    return a
  }," 您的宠物有:")
  if cont=="/宠物" then {
      drrr.dm(user,"@"+users[n].name+p)
    }else {
      drrr.print("@"+users[n].name+p)
    }
  }
}
event [msg, me, dm] (user, cont: "^/捕捉") => {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if apet.length==0 then { 
  drrr.print("/me @"+users[n].name+" 现在还没有宠物出没哦")
} else if users[n].pet.length==5 then {
  drrr.print("/me @"+users[n].name +" 很抱歉，您已拥有5只宠物，已达容量上限，可放生宠物继续捕捉")
} else if !users[n].bag.some(x => x=="MG-精灵球") then {
  drrr.print("/me @"+ users[n].name+" 很抱歉，您的背包中没有精灵球，请前往商店购买")
} else {
  let p=users[n].bag.findIndex(x => x=="MG-精灵球")
  users[n].bag.splice(p,1)
  drrr.print("/me @"+users[n].name+" 正在努力捕捉中...")
  later 5000 {
  let i=Math.floor(Math.random() * apet.length)
  let k=Math.random()<0.5  //成功概率 0.5
  if !k || (apet.length-1)<i then {
  drrr.print("/me @"+users[n].name+" 哎呀，失手了")
  }else { 
    let m=apet[i].name
    users[n].pet.push(apet[i])
    apet.splice(i,1)
    drrr.print("/me @"+users[n].name+" 成功捕获一只【"+m+"】")
   }
  }
 }
}
event [msg, me, dm] (user, cont:"^/投喂\\s+\\d")  => {
  let p=parseInt(cont.replace("/投喂", "").trim())-1
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if !users[n].bag.some(x => x=="MG-宠物干粮") then {
  drrr.print("/me @"+ users[n].name +" 很抱歉，您的背包中没有宠物干粮，请前往商店购买")
} else if p>(users[n].pet.length-1) then {
  drrr.print("/me @"+users[n].name+" 输入的序号不存在")
} else {
  let q=users[n].bag.findIndex(x => x=="MG-精灵球")
  users[n].bag.splice(q,1)
  let name=users[n].pet[p].name
  users[n].pet[p].exp++
  let lv=checke(users[n].pet[p].exp)[0]
  let dt=checke(users[n].pet[p].exp)[1]
  if users[n].pet[p].level==7 then {
    drrr.print("/me @"+ users[n].name +" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，已经达到最高等级Lv.7")
  }else if lv==users[n].pet[p].level then {
    drrr.print("/me @"+users[n].name+" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，目前 Lv."+lv+" ,距离下一级还差"+dt+"经验值")
  }else {
    users[n].pet[p].level=lv
    drrr.print("/me @"+users[n].name +" 您已投喂了【"+name+"】一份宠物干粮，【"+name+"】获得1经验值，恭喜升到 Lv."+lv+" ,距离下一级级还差"+dt+"经验值")
  }
  }
}
event [msg, me, dm] (user, cont:"^/更改宠物名\\s+\\d+\\s+\\S")  => {
  let p=parseInt(twokey("/更改宠物名",cont)[0])-1
  let nm=twokey("/更改宠物名",cont)[1]
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if p>(users[n].pet.length-1) then {
  drrr.print("/me @"+users[n].name+" 输入的序号不存在")
} else if users[n].pet[p].level<3 then {
  drrr.print("/me @"+users[n].name+" 您的宠物【"+users[n].pet[p].name+"】未达到Lv.3或以上，暂无法更名")
} else if nm.search("-")>=0 then {
  drrr.print("/me @"+users[n].name+" 新名字中不能包含“-”字符")
} else {
  let onm=users[n].pet[p].name
  let m=onm.slice(onm.search("-")+1)
  users[n].pet[p].name=nm+"-"+m
  if onm==m then {
  drrr.print("/me @"+users[n].name+" 您已成功将宠物【"+onm+"】名字更改为【"+users[n].pet[p].name+"】")
  }else {
  drrr.print("/me @"+users[n].name+" 您已成功将宠物【"+onm+"】名字更改为【"+users[n].pet[p].name+"】")
  }
   }
} 
event [msg, me, dm] (user, cont:"^/放生\\s+\\d")  => {
  let p=parseInt(cont.replace("/放生", "").trim())-1
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if p>(users[n].pet.length-1) || users[n].pet.length==0 then {
  drrr.print("/me @"+users[n].name+" 输入的序号不存在")
} else {
  let a=Math.random()*20+5 //暂留时间5-25
  let pet=users[n].pet[p]
  users[n].pet.splice(p,1)
  apet.push(pet)
  drrr.print("/me @"+users[n].name+" 您已成功放生【"+pet.name+"】，它将在一段时间后离开")
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
event [msg, me, dm] (user, cont: "^/灭绝\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    let anm=onekey("/灭绝",cont)
    let i=pets.findIndex(g => g.name==anm)
    if i<0 then {
    drrr.print("/me 【"+anm+"】 不存在")
    }else {
    pets.splice(i,1)
    drrr.print("/me 【"+anm+"】 灭绝了，默哀...")
    }
  }
}
//信箱
event join (user) => {
  let n=checku(user)
  let a=""
  let i=info.room.users.findIndex(u => u.name == user) 
  if info.room.users[i].tripcode==false then {
    a+="\n您还未设置tc，请尽快设置，未来将清空无tc的用户\n设置方法请看https://drrr.wiki/Tripcode"
  }
  if users[n].newl then {
    a+="\n您有新的来信，请留意查收"
   }
  if users[n].letters.length==8 then {
    a+="\n您的信箱已满，请及时清理已阅的信件"
   }
  if !a=="" then {
   latter 2000 drrr.dm(user,"@"+users[n].name+"："+a)
  }
}
event [msg, me, dm] (user, cont: "^/写信\\s+\\S+\\s+\\S") => {
  let tou=checka(twokey("/写信",cont)[0])
  let ct=twokey("/写信",cont)[1]
  let n=checku(user)
  let m=users.findIndex(x=>x.name==tou)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
} else if (m ==(-1)) then {
  drrr.dm(user,"@"+users[n].name+" 您写信的用户【"+tou+"】不存在")
} else {
  send(m,"@"+users[n].name+"：" +ct)
  drrr.dm(user,"@"+users[n].name+" 您已成功写信给【"+tou+"】，内容为："+ct)
  }
}
event [msg, me, dm] (user, cont: "^/信箱") => {
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  else {
    users[n].newl=false
      let p=users[n].letters.reduce((a,x,y) => {
    a=a+"\n"+(y+1)+"."+x.slice(0,10)+"..."
    return a
  },"的信箱\t【"+users[n].letters.length+"/8】")
    drrr.dm(user,"@"+users[n].name+p)
  }
  }
event [msg, me, dm] (user, cont:"^/查阅\\s+\\d")  => {
  let p=parseInt(cont.replace("/查阅", "").trim())-1
  let n=checku(user)
  if (n == (-1)) then {
  drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
}  else if p>(users[n].letters.length-1) then {
  drrr.print("/me @"+users[n].name+" 输入的序号不存在")
} else {
    users[n].newl=false
    let m=users[n].letters[p]
    drrr.dm(user,m)
  }
  }
event [msg, me, dm] (user, cont: "^/删除信件\\s+\\d") => { 
  let n=checku(user)
  if (n == (-1)) then drrr.print("/me @"+user+" 您的tc与已有的用户不匹配")
  else {
  let p=parseInt(cont.replace("/删除信件", "").trim())-1
   if p>(users[n].letters.length-1) then {
  drrr.dm(user,"输入的序号不存在")
   } else {
   let m=users[n].letters[p]
   users[n].letters.splice(p,1)
   drrr.dm(user,"@"+users[n].name+" 成功删除："+m)
  }
  }
}
//查找用户
event [msg, me, dm] (user, cont: "^/查找\\s+\\S") => { 
    let tg=checka(onekey("/查找",cont))
    let  arr=[]
    let reg = new RegExp(tg)
    for x of users { if reg.test(x.name) then arr.push(x) }
    if arr.length>0 then{
    drrr.dm(user,arr.map((x,y)=> (y+1)+".用户名："+x.name+" ,tc："+x.tc+" ,UID："+x.uid+" ,资产："+x.coin+" DRB").join("\n"))
    } else {
      drrr.dm(user,"未找到用户【"+tg+"】")
    }
}
event [msg, me, dm] (user, cont: "^/查找tc\\s+\\S") => { 
    let tg=onekey("/查找tc",cont)
    let  arr=[]
    let reg = new RegExp(tg)
    for x of users { if reg.test(x.tc) then arr.push(x) }
    if arr.length>0 then{
    drrr.dm(user,arr.map((x,y)=> (y+1)+".用户名："+x.name+" ,tc："+x.tc+" ,UID："+x.uid+" ,资产："+x.coin+" DRB").join("\n"))
    } else {
      drrr.dm(user,"未找到用户【"+tg+"】")
    }
}
//删除
event [msg, me, dm] (user, cont: "^/删除\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
   del=checka(cont.replace("/删除", "").trim())
   let n=users.findIndex(u => u.name == del)
   if (n ==(-1)) then {
     drrr.dm(user,"●该用户不存在")
  } else {
    users.splice(n,1)
    drrr.dm(user,"●成功删除用户"+del)
  }
 }
}
event [msg, me, dm] (user, cont: "^/删除\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
   del=parseInt(onekey("/删除",cont))
   let n=users.findIndex(u => u.uid == del)
   if (n ==(-1)) then {
     drrr.dm(user,"●该用户UID不存在")
  } else {
    let name=users[n].name
    print(users[n])
    users.splice(n,1)
    drrr.dm(user,"●成功删除用户"+name)
  }
 }
}
//导出
event [msg, me, dm] (user, cont: "^/导出$", url, tc) => { 
  if admins.some(a => a==tc) then {
   print(users)
   print(goods)
   print(pets)
   print(lottery)
   drrr.print("ok")
   }
}
event [msg, me, dm] (user, cont: "^/导出\\s+\\S", url, tc) => { 
    let tg=checka(onekey("/导出",cont))
    let n=users.findIndex(x=> x.name==tg)
    if admins.some(a => a==tc) then {
    if n<0 then{
    drrr.dm(user,"未找到用户【"+tg+"】")
    } else {
      print(users[n])
      drrr.dm(user,"已导出用户："+users[n].name)
    }
  }
}
event [msg, me, dm] (user, cont: "^/导出\\s+\\d", url, tc) => { 
    let tg=parseInt(onekey("/导出",cont))
    let n=users.findIndex(x=> x.uid==tg)
    if admins.some(a => a==tc) then {
    if n<0 then{
    drrr.dm(user,"未找到UID【"+tg+"】")
    } else {
      print(users[n])
      drrr.dm(user,"已导出用户："+users[n].name)
    }
  }
}
//导入
event [msg, me, dm] (user, cont: "^/导入", url, tc) => { 
    if admins.some(a => a==tc) then {
    if input.length==0 then{
    drrr.dm(user,"无导入数据")
    } else {
      let a=[]
      let b=[]
      for x of input{
        if users.some(m=> (m.name==x.name || m.tc==x.tc) && m.uid!=x.uid) then{
          b.push(x)
        }else{
          a.push(x)
        }
      }
      users=users.concat(a)
      input=[]
      if b.length>0 then {
      print("未成功导入：")
      print(b)  
      }
      drrr.dm(user,"已导入"+a.length+"名用户，有"+b.length+"名用户冲突")   
    }
  }
}
//注文
event [msg, me, dm] (user, cont:"^/注文\\s+\\S")  => {
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
event [msg, me, dm] (user, content:"^/抽奖")=> {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if (users[n].coin < 5) then {
  drrr.print("/me @"+ users[n].name +"很抱歉，抽奖功能需要花费 5 DRB，您的DRB数为"+users[n].coin+"。")
} else {
  users[n].coin-=5
  drrr.print("/me @"+ users[n].name +" 您使用了 5 DRB，现在您的DRB数量为"+users[n].coin+"，正在抽奖中..." )

array = ["🍉","🍎","🍇","🍊","🍒","🍈"]
a = array[Math.floor(Math.random() * 6)]
b = array[Math.floor(Math.random() * 6)]
c = array[Math.floor(Math.random() * 6)]
later 2*1000 {
//中奖 
  if a == b && b == c 
then {
  users[n].coin+=100
  drrr.print("@" + users[n].name +"抽到的是【"+a+b+c+"】🎉🎉🎉🎊🎊🎰恭喜中奖： + 100 DRB")
}
  else
//不中
  drrr.print("/me @" + users[n].name +" |抽到的 【"+a+b+c+"】没中奖哦~请再接再厉~！")
  }
 }
}
//刮刮乐
event [msg, me, dm] (user, content:"^/刮刮乐")=> {
  let n=checku(user)
  if (n ==(-1)) then {
  drrr.print("/me @"+user+"您的tc与已有的用户不匹配")
  } else if (users[n].coin < 10) then {
  drrr.print("/me @"+ users[n].name +"很抱歉，刮刮乐 需要花费 10 DRB，您的DRB数为"+users[n].coin+"。")
} else {
  users[n].coin-=10
  drrr.print("/me @"+ users[n].name +" 您使用了 10 DRB，现在您的DRB数量为"+users[n].coin+"，刮奖中..." )

g = Math.floor(Math.random()*100+1)
later 2*1000 {
//中奖 10
  if g == 100
then {
  users[n].coin+=200
  drrr.print("@" + users[n].name +" |是 "+g+" 🎉🎊恭喜中奖： + 200 DRB")
}
    else
//中奖 90
  if g >= 90
then {
  users[n].coin+=20
  drrr.print("/me @" + users[n].name +" |是 "+g+" 🎉： + 20 DRB")
}
  else
//中奖 75
  if g >= 75
then {
  users[n].coin+=5
  drrr.print("/me @" + users[n].name + " |是 "+g+"  🎉： + 5 DRB")
}
  else
//不中
  drrr.print("/me @" + users[n].name +" |是 "+g+" 残念！没中奖~")
  }
 }
}
