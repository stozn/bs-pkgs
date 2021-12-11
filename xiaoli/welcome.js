 admins = ["OG0OPFxOFw", "Ancy.WWeeo", "Robot/23Cc", "unica/qOLU", "YtIMnsXOBE"]   //设置管理员
 notices = []
 msgs = []
timer 14* 60 * 1000{
    print(msgs)
}
event[msg, me, dm](user, cont: "^/留言\\s+\\S", url, tc) => {
     msg = cont.replace("/留言", "").trim()
    msgs.unshift("@" + user + "：" + msg)
    drrr.dm(user, "成功留言：" + msg)
}
event[msg, me, dm](user, cont: "^/留言板") => {
     msg = msgs.map((x, i) => i + 1 + ". " + x)
    drrr.print("留言板\n" + msg.join("\n"))
}
event[msg, me, dm](user, cont: "^/删除留言\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
         p = parseInt(cont.replace("/删除留言", "").trim()) - 1
        if p> (msgs.length - 1) then {
            drrr.dm(user, "输入的序号不存在")
        } else {
             m = msgs[p]
            msgs.splice(p, 1)
            drrr.dm(user, "成功删除：" + m)
        }
    }
}
event[msg, me, dm](user, cont: "^/通知\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
         nt = cont.replace("/通知", "").trim()
        notices.push(nt)
        drrr.dm(user, "成功添加通知：" + nt)
    }
}
event[msg, me, dm](user, cont: "^/说\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then drrr.print(cont.replace("/说", "").trim());
}
event[msg, me, dm](user, cont: "^/通知$", url, tc) => {
    if admins.some(a => a == tc) then {
         dt = JSON.stringify(notices)
        drrr.dm(user, dt)
    }
}
event[msg, me, dm](user, cont: "^/导出", url, tc) => {
    if admins.some(a => a == tc) then {
        print(msgs)
    }
}

//乖嘛
event [me,msg] (user: "", content:"小粒今天乖嘛")=> {
if (user=="黯泣") then {
drrr.print("我今天超乖的！")
drrr.print("/me 【<(ˉ^ˉ)>")  
}
else {
drrr.print("才不告诉你呢！")
drrr.print("/me 【<(ˉ^ˉ)>") 
}
}


event[me, msg](user: "", content:"^/再来一杯")  => {
    ns = ["酸梅汤", "温水", "柠檬水", "葡萄糖水", "鲜榨🍉汁", "鲜榨🍊汁", "鲜榨🍇汁", "鲜榨🍓汁", "鲜榨🥥汁", "鲜榨🥝汁"]
    n = ns[Math.floor(Math.random() * ns.length)];
    drrr.print("/me @" + user + "|递【" + n + "~】请慢用")
}
event join (user) => {
     ns = ["|进来了就是美少女", "|今天也请多多喝水", "|你也来喝水啦w"]
     ds = ["酸梅汤", "温水", "柠檬水", "葡萄糖水", "鲜榨🍉汁", "鲜榨🍊汁", "鲜榨🍇汁", "鲜榨🍓汁", "鲜榨🥥汁", "鲜榨🥝汁"]
     n = ns[Math.floor(Math.random() * ns.length)]
     d = ds[Math.floor(Math.random() * ds.length)]
     l = Math.floor(Math.random() * notices.length)
    drrr.print("/me 欢迎光临@" + user + n + "|递【" + d + "~】请慢用  *如需帮助请回复 /帮助")
    print(user)
    if notices.length > 0 then {
      drrr.dm(user, "通知:" + notices[l])
    }
}
event[msg, me, dm](user, cont: "^/删除通知\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
         p = parseInt(cont.replace("/删除通知", "").trim()) - 1
        if p> (notices.length - 1) then {
            drrr.dm(user, "输入的序号不存在")
        } else {
             m = notices[p]
            notices.splice(p, 1)
            drrr.dm(user, "成功删除：" + m)
        }
    }
}
timer 10*60*1000 {
    drrr.dm(drrr.users[0].name,"求求把房主给小粒吧")
}
event[msg, me, dm](user, cont:"^/房主", url, tc) => {
    if admins.some(a => a == tc) then {
        drrr.chown(user)
    }
}
event[msg, me, dm](user, cont:"^/踢\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        u = cont.replace("/踢", "").trim()
        if (u.slice(0, 1) == "@") then {u = u.slice(1) }
        drrr.kick(u);
    }
}
event[msg, me, dm](user, cont:"^/kick\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        u = cont.replace("/kick", "").trim()
        if (u.slice(0, 1) == "@") then {u = u.slice(1) }
        drrr.kick(u);
    }
}
//ban
event[msg, me, dm](user, cont:"^/ban\\s+\\S", url, tc)  => {
    if admins.some(a => a == tc) then {
        u = cont.replace("/ban", "").trim()
        if (u.slice(0, 1) == "@") then {u = u.slice(1) }
        drrr.ban(u)
    }
}