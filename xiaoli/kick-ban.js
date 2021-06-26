//踢人
event dm (user: "黯泣", cont:"^/踢", url, tripcode, req)  => {  
    drrr.kick(cont.replace("/踢", "").trim());
}
event dm (user: "黯泣", cont:"^/kick", url, tripcode, req)  => {  
    drrr.kick(cont.replace("/kick", "").trim());
}
//ban
event dm (user: "黯泣", cont:"^/ban", url, tripcode, req)  => {  
    drrr.ban(cont.replace("/ban", "").trim());
}