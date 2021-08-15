//悄悄话
const admins=["Ancy.WWeeo","Robot/23Cc","unica/qOLU","YtIMnsXOBE"]   //设置管理员
let msgs=[]
event dm (user, cont:"^/悄悄话\\s+\\S+\\s+\\S")  => {   
let i=0
let a=true
const u=cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search("\\s")).trim()
const m=cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search("\\s"))
if(u.slice(0,1)=="@") then {u=u.slice(1);}
later 2000 drrr.dm(user,"收到！你发送给了："+u+"，内容是："+m)
while(i<drrr.users.length && a){
  if(drrr.users[i].name == u) then {
    a=false;
    drrr.dm(u,"有人让我悄悄跟你说："+m);
    }
  i++
}
  if a  then {
    let n=msgs.findIndex(x => x.tou == u)
    if n>(-1) then msgs[n].msg.push(m)
    else msgs.push({tou: u ,msg: [m]})
  }
}
event join (user) => {
  let n=msgs.findIndex(u => u.tou == user)
  if n>(-1) then {
  let j=0
  Myfor =()=> {
   drrr.dm(user,"有人让我悄悄跟你说："+msgs[n].msg[j]);
   j++
   if j<msgs[n].msg.length then setTimeout(Myfor, 1500) 
   else msgs.splice(n,1)
   }
   Myfor()
  }
}
//管理员查看
event [msg, me, dm] (user, cont: "^/悄悄话$", url, tc) => { 
  if admins.some(a => a==tc) then {
   let dt=JSON.stringify(msgs)
   drrr.dm(user,dt)
   }
}