//悄悄话
event dm (user: "", cont:"^/悄悄话", url, tripcode, req)  => {   
const i=0;
const a=true;
drrr.dm(user,"收到！");
while(i<drrr.users.length){
  if(drrr.users[i].name == cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim()) then {
        a=false;
        }
  i++
}

if (a) then {
  const cs=0;
  event join (user) => {
    if (user == cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim() && cs<1) then {
      cs=1;
      drrr.dm(cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim(),"有人给你悄悄话：" + cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search(" ")).trim());
    }
  }
}else{
drrr.dm(cont.replace("/悄悄话", "").trim().slice(0,cont.replace("/悄悄话", "").trim().search(" ")).trim(),"有人给你悄悄话："+cont.replace("/悄悄话", "").trim().slice(cont.replace("/悄悄话", "").trim().search(" ")));
}
}