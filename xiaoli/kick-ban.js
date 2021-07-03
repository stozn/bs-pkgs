//踢人
event dm (user: "黯泣", cont:"^/踢\\s+\\S") => {  
u=cont.replace("/踢", "").trim()
if(u.slice(0,1)=="@") then {u=u.slice(1)}
drrr.kick(u);
}
event dm (user: "黯泣", cont:"^/kick\\s+\\S") => {  
u=cont.replace("/kick", "").trim()
if(u.slice(0,1)=="@") then {u=u.slice(1)}
drrr.kick(u);
}
//ban
event dm (user: "黯泣", cont:"^/ban")  => {  
u=cont.replace("/ban", "").trim()
if(u.slice(0,1)=="@") then {u=u.slice(1)}
drrr.ban(u);
}