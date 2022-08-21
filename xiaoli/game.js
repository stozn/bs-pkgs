keys = [1, 2, 3, 4]
key = ""
words = [""]
word = "无"
ak = "000"
bk = "000"
as = 0
bs = 0
ts = 0
players = []
roles = [0, 1, 2]
roleName = ["队长", "队员", "间谍"]

announcement = "/me尚未开始游戏"
announce = (msg) => {
    announcement = msg
    drrr.print(msg)
}
str = (s) => String(s)
mess = (array) => {
    for m = array.length - 1; m > 0; m-- {
        i = Math.floor(Math.random() * m);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    array
}

state prepare {
    players = []
    key = ""
    word = "无"
    ak = "000"
    bk = "000"
    as = 0
    bs = 0
    ts = 0
    event[msg, me](user, cont: "^\\+1$") => {
        if players.includes(user) then
        drrr.print("/me" + user + " 已经加入了")
    else{
            players.push(user)
            drrr.print("/me" + user + " 加入游戏")
        }
    }
    event[msg, me](user, cont: "^-1$") => {
        if players.includes(user) then {
            players.splice(players.indexOf(user), 1);
            drrr.print("/me" + user + " 退出游戏")
        }
    else drrr.print("/me" + user + " 不在游戏中")
    }
    event[msg, me](user, cont: "^/p$") => {
        if players.length then {
            drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ". " + user).join("\n"))
        } else drrr.print("/me 没有玩家")
    }
    event[msg, me](user, cont: "^/go$") => {
        if players.length == 3 then {
            going prelude
        }
    else drrr.print("/me需满足 3 人, 目前 " + String(players.length) + "人")
    }
    announce("/me 【截码战】游戏开始, [+1] 加入, [-1] 退出, [/p] 玩家, [/go] 开始 [/h] 帮助")
}

state prelude {
    roles.sort(() => Math.random() - 0.5)
    r = players.map((name, idx) => roleName[roles[idx]] + "：" + "@" + name).join("\n")
    drrr.print("角色：\n" + r)
    later 4000 announce("/me 请队长和队友查看本次游戏密码表，想再次查看请发送【/密码表】")
    a = roles.findIndex(x => x == 0)
    b = roles.findIndex(x => x == 1)
    words = mess(words)
    word = words.slice(0, 4).join(" ")
    later 6000 drrr.dm(players[a], "密码表：\n" + word)
    later 6000 drrr.dm(players[b], "密码表：\n" + word)
    later  14* 1000 going hide
}


state hide {
    keys = mess(keys)
    announce("/me请队长查看三位数字口令，并在公屏给出3个线索，回复OK结束")
    i = roles.findIndex(x => x == 0)
    key = str(keys[0]) + str(keys[1]) + str(keys[2])
    drrr.dm(players[i], "本次口令为：" + key)
    event[msg, me](user:players[i], cont: "(OK|ok)") => {
        going guess
    }
}

state guess {
    announce("/me请队员和间谍开始解密，私信我三位数字口令，队员可以发送【/skip】跳过这一环节（若队员未提交将会扣一分）")
    a = roles.findIndex(x => x == 1)
    b = roles.findIndex(x => x == 2)
    ak = 0
    bk = 0
    event dm (user:players[a], cont:"^[1-4]{3}$") => {
        ak = cont
        drrr.dm(user, "你提交的口令是：" + ak)
        if !(ak == 0 || bk == 0) then going result
    }
    event dm (user:players[b], cont:"^[1-4]{3}$") => {
        bk = cont
        drrr.dm(user, "你提交的口令是：" + bk)
        if !(ak == 0 || bk == 0) then going result
    }
    event[msg, me](user:players[a], cont:"^/skip") => {
        drrr.print("/me跳过此环节，直接查看结果")
        going result
    }

}

state result {
    ar = ""
    br = ""
    for (i = 0; i < 3; i++) {
        if ak[i] == key[i] then  ar+= "√" else ar += "×"
        if bk[i] == key[i] then  br+= "√" else br += "×"
    }
    if !(ar == "√√√") then {
        as++
        ar += " -1分"
    }
    if !(br == "√√√") then {
        bs++
        br += " +1分"
    }
    ts++
    drrr.print("结果：\n队长：" + key + "\n队友：" + ak + "  " + ar + "\n间谍：" + bk + "  " + br)
    if (as == 2 || bs == 2 || ts == 8) then {
        later 2000 drrr.print("最终分数为：\n队友：-" + as + "分\n间谍：" + bs + "分")
        later 4000 drrr.print("游戏结束,本次游戏共进行" + ts + "轮")
    }else {
        later 10* 1000 going hide
    }
}

event[msg, me, dm](user, cont: "^/密码表$") => {
    if players.includes(user) then
    drrr.dm(users, "密码表：" + word)
    else   drrr.print("/me @" + user + " 您不是队长或队员")
}
event[msg, me, dm](user, cont: "^/s$") => drrr.print("当前分数为：\n队友：-" + as + "分\n间谍：" + bs + "分")
event[msg, me, dm](user, cont: "^/h$") => {
    drrr.print("/h 帮助\n/k 查看密码表\n/p 当前玩家\n/s 当前分数\n/r 开始报名（如有游戏则重开）")
}
event[msg, me](user, cont: "^/r$") => going prepare
going prepare
