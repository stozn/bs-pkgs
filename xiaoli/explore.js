ccards = [{ kind: "coin", amt: 1 }, { kind: "coin", amt: 2 }, { kind: "coin", amt: 3 }, { kind: "coin", amt: 4 }, { kind: "coin", amt: 5 },
{ kind: "coin", amt: 5 }, { kind: "coin", amt: 7 }, { kind: "coin", amt: 7 }, { kind: "coin", amt: 9 }, { kind: "coin", amt: 11 },
{ kind: "coin", amt: 11 }, { kind: "coin", amt: 13 }, { kind: "coin", amt: 14 }, { kind: "coin", amt: 15 }, { kind: "coin", amt: 17 }]
tcards = [{ kind: "trap", name: "落石" }, { kind: "trap", name: "落石" }, { kind: "trap", name: "落石" },
{ kind: "trap", name: "毒蛇" }, { kind: "trap", name: "毒蛇" }, { kind: "trap", name: "毒蛇" },
{ kind: "trap", name: "咒灵" }, { kind: "trap", name: "咒灵" }, { kind: "trap", name: "咒灵" },
{ kind: "trap", name: "蜘蛛" }, { kind: "trap", name: "蜘蛛" }, { kind: "trap", name: "蜘蛛" },
{ kind: "trap", name: "火焰" }, { kind: "trap", name: "火焰" }, { kind: "trap", name: "火焰" }]
rcards = [{ kind: "relic", name: "派大星-5", coin: 5 }, { kind: "relic", name: "圣杯-5", coin: 5 }, { kind: "relic", name: "空心盾-5", coin: 5 },
{ kind: "relic", name: "纯金刑架-10", coin: 10 }, { kind: "relic", name: "铜钟-10", coin: 10 }]
card = []
tcard = []
rcard = []
ucard = []
tcd = []
pub = { coin: 0, relic: [] }
players = []
player = []
explorers = []
resters = []
ts = 1
day = 1
wt = 15


pz = () => {
    a = 0
    b = 0
    c = 0
    card.forEach(x => {
        if x.kind == "coin" then a++
    else if x.kind == "relic" then b++
    else c++
    })
    drrr.print("/me陷阱卡已出现" + tcd.length + "张，金币卡有" + a + "张，陷阱卡有" + c + "张，神器卡有" + b + "张\t公共区金币：" + pub.coin + "\t神器：【" + pub.relic.map(x => x.name).join("】【") + "】")
}
mess = (array) => {
    for m = array.length - 1; m > 0; m-- {
        i = Math.floor(Math.random() * m);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    array.map(x => x)
}

state prepare {
    tcard = tcards.map(x => x)
    rcard = mess(rcards)
    ucard = []
    tcd = []
    pub = { coin: 0, relic: [] }
    players = []
    player = []
    explorers = []
    resters = []
    ts = 1
    day = 1

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
            drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ".@ " + user).join("\n"))
        } else drrr.print("/me 没有玩家")
    }
    event[msg, me](user, cont: "^/go$") => {
        if players.includes(user) then {
            players.forEach(x => player.push({ name: x, bag: 0, coin: 0 }))
            going prelude
        }
    else drrr.print("/me" + user + " 不在游戏中")
    }
    drrr.print("/me 【冒险】游戏开始, [+1] 加入, [-1] 退出, [/p] 玩家, [/go] 开始 ,[/休息 秒数] 设置休息时长,[/指令] 指令列表")
}

state prelude {
    if player.length > 0 then  {
        day = 1
        card = ccards.concat(tcard, ucard)
        card.push(rcard.shift())
        card = mess(card)
        drrr.print("/me【冒险第" + ts + "次】  出发！")
        explorers = player.map(x => x)
        resters = []
        tcd = []
        ucard = []
        pub = { coin: 0, relic: [] }
        later  2* 1000 going explore
    }else going prepare
}


state explore {
    if player.length > 0 then  {
        chk = false
        cd = card.shift()
        if cd.kind == "trap" then{
            if tcd.some(x => x.name == cd.name) then {
                tcard.splice(tcard.findIndex(x => x.name == cd.name), 1)
                explorers.forEach(x => x.bag = 0)
                chk = true
                drrr.print("/me冒险第" + ts + "次第" + day + "天【遭遇 " + cd.name + "】\t又遇到了这个陷阱！！冒险者们仓皇而逃！不惜丢下了身上所有金币，该卡牌已移除牌组。")
                card.forEach(x => if x.kind == "relic" then ucard.push(x))
                ucard = ucard.concat(pub.relic)
            }else{
                tcd.push(cd)
                drrr.print("/me冒险第" + ts + "次第" + day + "天【遭遇 " + cd.name + "】\t幸好本次第一次遭遇该陷阱，无人伤亡。"
                    + "想要返回营地的冒险者请私信我【/返回】，" + wt + "秒后将继续冒险")
            }
        }else{
            if cd.kind == "coin" then {
                a = Math.floor(cd.amt / explorers.length)
                b = cd.amt - a * explorers.length
                explorers.forEach(x => x.bag += a)
                pub.coin += b
                drrr.print("/me冒险第" + ts + "次第" + day + "天【找到金币 " + cd.amt + "】\t每人分得到" + a + "金币，余下的" + b + "金币将存入公共区保管。"
                    + "想要返回营地的冒险者请私信我【/返回】，" + wt + "秒后将继续冒险")
            }else{
                pub.relic.push(cd)
                drrr.print("/me冒险第" + ts + "次第" + day + "天【找到神器 " + cd.name + "】\t已存入公共区保管。"
                    + "想要返回营地的冒险者请私信我【/返回】，" + wt + "秒后将继续冒险")
            }
        }
        event dm (user, cont: "^/返回$") => {
            n = explorers.findIndex(x => x.name == user)
            if n>= 0 then {
                resters = resters.concat(explorers.splice(n, 1))
                drrr.dm(user, "您已做好准备返回营地")
            }
        }
        if chk then {
            later 2* 1000 drrr.print("/me冒险者们都已回到营地")
            if ts== 5 then {
                going result
            }else {
                ts++
                later 5* 1000 going prelude
            }
        }else{
            pz()
            later wt* 1000 going choose
        }
    }else going prepare
}
state choose{
    if player.length > 0 then  {
        if resters.length > 0 then {
            a = Math.floor(pub.coin / resters.length)
            pub.coin = pub.coin - a * resters.length
            resters.forEach(x => {
                x.coin += a
                x.coin += x.bag
                x.bag = 0
            })
            drrr.print("/me" + resters.map(x => "@" + x.name).join(" ") + "返回了营地,获得公共区域的" + a + "金币，并带走了自己的金币,公共区剩余" + pub.coin + "金币")
            if resters.length == 1 && pub.relic.length > 0　then {
                c = 0
                pub.relic.forEach(x => c += x.coin)
                resters[0].coin += c
                drrr.print("/me" + "@" + resters[0].name + " 带走了神器" + pub.relic.map(x => "【" + x.name + "】").join("") + "获得" + c + "金币")
                pub.relic = []
            }
            resters = []
        }
        if explorers.length == 0 then{
            card.forEach(x => if x.kind == "relic" then ucard.push(x))
            later 2* 1000 drrr.print("/me冒险者们都已回到营地")
            if ts== 5 then {
                going result
            }else {
                ts++
                later 5* 1000 going prelude
            }
        }else{
            drrr.print("/me发送【/冒险】让我们一起继续冒险！")
            event[msg, me](user, cont: "^/冒险$") => {
                day++
                going explore 
            }
        }
    }else going prepare
}

state result {
    drrr.print("/me已完成5次冒险，冒险结束，开始统计金币数...")
    later 5* 1000 drrr.print("排名：\n" + player.sort((x, y) => y.coin - x.coin).map((x, i) => (i + 1) + ".@" + x.name + "\t" + x.coin).join("\n"))
}

event[msg, me, dm](user, cont: "^/财富$") => {
    n = player.findIndex(x => x.name == user)
    if  n>= 0 then  drrr.dm(user, "您的财富：\n金库：" + player[n].coin + " 金币\n背包：" + player[n].bag + " 金币")
    else   drrr.print("/me @" + user + " 您不是玩家")
}
event[msg, me, dm](user, cont: "^/冒险者$") => drrr.print("正在冒险中的有：\n" + explorers.map((x, i) => (i + 1) + ".@" + x.name).join("\n"))
event[msg, me, dm](user, cont: "^/公共区$") => drrr.print("/me公共区\n金币：" + pub.coin + "\t神器：【" + pub.relic.map(x => x.name).join("】【") + "】")
event[msg, me, dm](user, cont: "^/牌组$") => pz()
event[msg, me](user, cont: "^/休息\\s+\\d+$") => {
    n = parseInt(cont.replace("/休息", "").trim())
    if n< 5 || n > 60 then drrr.print("/me 休息时间只能在5-60秒内")
    else {
        wt = n
        drrr.print("/me 休息时间已设置为" + wt + "秒")
    }
}
event[msg, me, dm](user, cont: "^/指令$") => {
    drrr.print("/指令 本列表\n/冒险者 查看当前冒险者\n/公共区 查看公共区域\n/牌组 查看牌组信息\n/财富 查看个人财富\n/休息 秒数 设置休息时长\n/game 开始报名（如有游戏则重开）")
}
event[msg, me](user, cont: "^/game$") => going prepare
going prepare
