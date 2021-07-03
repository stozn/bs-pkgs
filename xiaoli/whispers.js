//悄悄话
event dm (user: "", cont:"^/悄悄话\\s+\\S+\\s+\\S", url, tripcode, req)  => {   
//设置
const kp=60*24*3 //保存时间=kp*rf毫秒
const rf=60*1000 //刷新频率=rf毫秒

//主体功能
const i=0
const ts=0
const a=true
const u=cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search("\\s")).trim()
const m=cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search("\\s"))
if(u.slice(0,1)=="@") then {u=u.slice(1);}
later 2000{drrr.dm(user,"收到！你发送给了："+u+"，内容是："+m);}
while(i<drrr.users.length && a){
  if(drrr.users[i].name == u) then {
    a=false;
    drrr.dm(u,"有人让我悄悄跟你说："+m);
    }
  i++
}
Myfor =()=> {
  const j=0; 
  while(j<drrr.users.length && a){
    if(drrr.users[j].name == u) then {
      a=false;
      drrr.dm(u,"有人让我悄悄跟你说："+m);
     }
   j++
   }
 ts++;
 if (a && ts<kp) then{setTimeout(Myfor, rf);}  
}
Myfor();
}