const admins=["OG0OPFxOFw","Ancy.WWeeo","Robot/23Cc","unica/qOLU","YtIMnsXOBE"]   //设置管理员
let notices=[]

event [msg, me, dm] (user, cont: "^/通知\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then {
    let nt=cont.replace("/通知", "").trim()     
    notices.push(nt)
    drrr.dm(user,"成功添加通知："+nt)
 }
}
event [msg, me, dm] (user, cont: "^/说\\s+\\S", url, tc) => { 
  if admins.some(a => a==tc) then drrr.print(cont.replace("/说", "").trim());
}
event [msg, me, dm] (user, cont: "^/通知$", url, tc) => { 
  if admins.some(a => a==tc) then {
   let dt=JSON.stringify(notices)
   drrr.dm(user,dt)
   }
}
event join (user) => {
 let ns =["|进来了就是美少女","|今天也请多多喝水","|你也来喝水啦w"]
 let n = ns[Math.floor(Math.random() * ns.length)]
 let l = Math.floor(Math.random() * notices.length)
 let m = ["查看指令列表请输入：【/帮助】" ]
  drrr.print("/me 欢迎光临@" + user + n)
  later 1000 drrr.dm(user,m)
  later 2000 drrr.dm(user,"通知:"+notices[l])
}
event [msg, me, dm] (user, cont: "^/删除通知\\s+\\d", url, tc) => { 
  if admins.some(a => a==tc) then {
  let p=parseInt(cont.replace("/删除通知", "").trim())-1
   if p>(notices.length+1) then {
  drrr.dm(user,"输入的序号不存在")
   } else {
   let m=notices[p]
   notices.splice(p,1)
   drrr.dm(user,"成功删除："+m)
  }
  }
}