//用户数据
users = JSON.parse(localStorage["users"])
input = []
//喝水
ckd = false
drd = 0
drk = []
//商店
goods = [{ name: "MG-红包", price: 5 }, { name: "MG-精灵球", price: 40 }, { name: "MG-宠物干粮", price: 10 }, { name: "MG-一本满足", price: 500 }, { name: "MG-水", price: 10 }, { name: "MG-刮刮乐", price: 10 }, { name: "MG-奖券", price: 10 }, { name: "鲜榨果汁", price: 5 }, { name: "可乐", price: 4 }]
market = JSON.parse(localStorage["market"])
//彩票数据
lottery = JSON.parse(localStorage["lottery"])
result = JSON.parse(localStorage["result"])
//奖励数据
award = []
//宠物数据
apet = []
pets = [{ name: "白泽", level: 7, exp: 500 }, { name: "钟山神", level: 4, exp: 50 }, { name: "九尾狐", level: 2, exp: 5 }, { name: "饕餮", level: 1, exp: 0 }, { name: "麒麟", level: 3, exp: 15 }, { name: "白矖", level: 6, exp: 200 }]
//红包数据
pkgi = 0
owner = "无"
owneri = 0
pktam = 0
gaini = []
gainu = []
gains = []
pkgs = []
admins = ["OG0OPFxOFw", "Ancy.WWeeo", ".bLVj9fdOM", "unica/qOLU", "YtIMnsXOBE"]   //设置管理员
//签到重置 开奖
onTimeDo = (h, m, s, callback) => {
    interval = (h >= 0 && (24 * 3600)) || (m >= 0 && 3600) || (s >= 0 && 60)
    loop = () => {
        next = new Date()
        h >= 0 && next.setHours(h)
        m >= 0 && next.setMinutes(m)
        s >= 0 && next.setSeconds(s)
        delta = next.getTime() - Date.now()
        delta += (delta < 0) * (interval * 1000)
        later delta {
            callback()
            later 2000 loop()
        }
    }
    loop()
}
tDay = () => {
    now = new Date()
    now.getMonth() + 1 + "月"
        + String(now.getDate()).padStart(2, "0") + "日"
}
txt = (_data, _name) => {
    blob = new Blob([JSON.stringify(_data)])
    aLink = document.createElement('a')
    aLink.href = URL.createObjectURL(blob)
    aLink.setAttribute('download', _name)
    document.body.appendChild(aLink)
    aLink.click()
}
kai = () => {
    r = lottery.length
    t = lottery.map(x => x.amount).reduce((a, x) => a = a + x)
    l = Math.floor(Math.random() * lottery.length)
    ln = lottery[l].name
    la = lottery[l].amount
    li = users.findIndex(x => x.uid == lottery[l].uid)
    lottery.splice(l, 1)
    m = Math.floor(Math.random() * lottery.length)
    mn = lottery[m].name
    ma = lottery[m].amount
    mi = users.findIndex(x => x.uid == lottery[m].uid)
    lottery.splice(m, 1)
    n = Math.floor(Math.random() * lottery.length)
    nn = lottery[n].name
    na = lottery[n].amount
    ni = users.findIndex(x => x.uid == lottery[n].uid)
    lottery.splice(n, 1)

    a = Math.floor(t * (-2 * la * la / t / t + 2 * la / t + 1 / 2))
    b = Math.floor(t * 0.5 * (-2 * ma * ma / t / t + 2 * ma / t + 1 / 2))
    c = Math.floor(t * 0.2 * (-2 * na * na / t / t + 2 * na / t + 1 / 2))

    result = "开奖结果\t奖池：" + t + " DRB\n一等奖：@" + ln + "\n　购买：" + la + " DRB\n　奖金：" + a + " DRB"

    users[li].coin += a
    send(li, "【彩票中奖】恭喜您获得一等奖，购买金额为" + la + " DRB，奖金为" + a + " DRB")
    if r> 1 then {
        users[mi].coin += b
        send(mi, "【彩票中奖】恭喜您获得二等奖，购买金额为" + ma + " DRB，奖金为" + b + " DRB")
        result += "\n二等奖：@" + mn + "\n　购买：" + ma + " DRB\n　奖金：" + b + " DRB"
    }
    if r> 2 then {
        users[ni].coin += c
        send(ni, "【彩票中奖】恭喜您获得三等奖，购买金额为" + na + " DRB，奖金为" + c + " DRB")
        result += "\n三等奖：@" + nn + "\n　购买：" + na + " DRB\n　奖金：" + c + " DRB"
    }
    lottery = []
    drrr.print(result)
}
onTimeDo(3, 1, 0, () => { lottery.length > 0 && kai() })

onTimeDo(0, 1, 0, () => {
    for  x of users {
        if x.check == true then x.day = 0
        if (x.trc == true && !(x.tree == 0)) then {
            x.tree = 0
            x.letters.unshift("【树木枯死】您的树因为没有每天浇水而枯死了")
            x.newl = true
            if x.letters.length == 9 then{
                x.letters.reverse()
                a = x.letters.findIndex(i => i.slice(0, 1) == "【")
                if a>= 0 then { x.letters.splice(a, 1) }
   else { x.letters.splice(0, 1) }
                x.letters.reverse()
            }
        }else if (x.tree.level > 2 && !(x.tree == 0)) then x.tree.fruit = x.tree.level
        x.check = true
        x.trc == true
    }
    txt(users, tDay() + "数据")
})

//每15分钟在后台输出一次数据，顺手清理整点奖励的用户
timer 15* 60 * 1000{
    mydate = new Date();
    h = mydate.getHours();
    m = mydate.getMinutes();
    users = users.filter(x => (x.coin + x.day + x.bag.length + x.letters.length) > 0)
    localStorage["users"] = JSON.stringify(users)
    localStorage["lottery"] = JSON.stringify(lottery)
    localStorage["result"] = JSON.stringify(result)
    localStorage["market"] = JSON.stringify(market)
    //整点用户清理
    mydate = new Date()
    m = mydate.getMinutes()
    if m> 2 then award= []
    users = users.filter(x => (x.coin + x.day + x.bag.length + x.letters.length) > 0)
    users = users.filter(x => !tc == "无")
}
//随机整数
rand = (a, b) => {
    Math.floor(Math.random() * Math.floor(1 + b - a)) + a
}
//支持@
checka = (name) => {
    a = name
    if (name.slice(0, 1) == "@") then a= name.slice(1)
    a
}
//创建新用户
newu = (user, tc) => {
    drrr.dm(user, "如需详细指引，请前往小粒个人网站查看详细帮助\n http://xiaoli.22web.org/help/\n小粒Q群：167575329", "http://xiaoli.22web.org/help/")
    users.sort((a, b) => a.uid - b.uid)
    duid = users[users.length - 1].uid + 1
    users.push({ uid: duid, name: user, tc: tc, coin: 0, check: true, day: 0, dayz: 0, drink: 0, tree: 0, trc: true, bag: [], pet: [], letters: [], newl: false })
}
//校验用户 返回用户编号，若返回-1，则用户tc不匹配
checku = (user) => {
    n = (-1)
    m = (-1)
    tc = "无"
    i = drrr.users.findIndex(u => u.name == user)
    if drrr.users[i].tripcode == false then  drrr.print("/me @" + user + " 请设置tc | 设置方法请看 https://drrr.wiki/Tripcode")
  else tc = drrr.users[i].tripcode

    n = users.findIndex(u => u.tc == tc)
    m = users.findIndex(u => u.name == user)
    if n == (-1) && m == (-1) then {
        if user.search("\\s") >= 0 then {
            drrr.print("/me @" + user + " 您的用户名中含有空格，暂不支持，请修改")
                -1
        }else{
            newu(user, tc)
            n = users.length - 1
            n
        }
    }else if m == (-1) || (users[m].tc == tc) then  n 
    else {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
            -1
    }

}
mess = (array) => {
    for m = array.length - 1; m > 0; m-- {
        i = Math.floor(Math.random() * m);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    array
}
//关键字拆分
onekey = (cmd, cont) => {
    cont.replace(cmd, "").trim();
}
twokey = (cmd, cont) => {
    u = cont.replace(cmd, "").trim().slice(0, cont.replace(cmd, "").trim().search("\\s")).trim()
    m = cont.replace(cmd, "").trim().slice(cont.replace(cmd, "").trim().search("\\s")).trim()
    r = [u, m]
    r
}
threekey = (cmd, cont) => {
    u = twokey(cmd, cont)[0]
    m = twokey(cmd, cont)[1]
    n = m.slice(0, m.search("\\s")).trim()
    l = m.slice(m.search("\\s")).trim()
    r = [u, n, l]
    r
}
//消息推送
send = (n, c) => {
    users[n].letters.unshift(c)
    users[n].newl = true
    if users[n].letters.length == 9 then{
        users[n].letters.reverse()
        a = users[n].letters.findIndex(x => x.slice(0, 1) == "【")
        if a>= 0 then { users[n].letters.splice(a, 1) }
   else { users[n].letters.splice(0, 1) }
        users[n].letters.reverse()
    }
}
//添加使用物品
add = (m, good, amt) => {
    j = users[m].bag.findIndex(x => x.name == good)
    if j>= 0 then{
        users[m].bag[j].amount += amt
    }else {
        users[m].bag.push({ name: good, amount: amt })
    }
}
use = (n, good) => {
    gd = users[n].bag.findIndex(x => x.name == good)
    if users[n].bag[gd].amount == 1 then {
        users[n].bag.splice(gd, 1)
    }else {
        users[n].bag[gd].amount--
    }
}
//排行榜
sort = (key) => {
    usr = users
    usr.sort((a, b) => b[key] - a[key])
    pm = usr
    word = "天"
    if key== "coin" then word= " DRB"
    if key== "drink" then word= "次"
    if usr.length > 7 then pm= pm.slice(0, 7)    //截取排名前7的用户
    p = pm.reduce((a, x, y) => {
        a = a + "\n" + (y + 1) + "." + x.name + "\t" + x[key] + word
        a
    }, "\t总用户:" + usr.length + "人")
    p
}
event[msg, me, dm](user, cont: "^/(资产|签到|早起|喝水)榜") => {
    if cont== "/资产榜" then drrr.print("资产榜" + sort("coin"))
else if cont== "/签到榜" then drrr.print("签到榜" + sort("day"))
else if cont== "/早起榜" then drrr.print("早起榜" + sort("dayz")) 
else drrr.print("喝水榜" + sort("drink"))
}
//签到
event[msg, me, dm](user, cont: "^/签到$") => {
    yb = 4
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if users[n].check then {
        users[n].day++
        users[n].check = false
        yb = yb + users[n].day
        if yb> 10 then yb= 10
        users[n].coin += yb
        dh = "/me @" + users[n].name + " 签到成功，DRB+" + yb + "，现在共有" + users[n].coin + " DRB，已连续签到" + users[n].day + "天"
        dt = new Date()
        if (dt.getHours() == 6 && dt.getMinutes() <= 30) then {  //6:00-6:30
            yb = yb * 2
            users[n].coin += yb
            users[n].dayz++
            dh = "/me @" + users[n].name + " 早起成功，DRB+" + yb + "×2，现在共有" + users[n].coin + " DRB，已连续签到" + users[n].day + "天，已连续早起" + users[n].dayz + "天"
            if (users[n].dayz == 10 && users[n].tree == 0) then {
                dh += "，恭喜您获得一棵树苗！"
                users[n].tree = { level: 1, water: 0, fruit: 0 }
            }
        }
        drrr.print(dh)
    } else { drrr.print("/me @" + users[n].name + " 今天已经签过到了，明天记得继续来签到哦") }
}
//全服奖励
event[msg, me, dm](user, cont: "^/全服奖励\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        nm = twokey("/全服奖励", cont)[0]
        cn = parseInt(twokey("/全服奖励", cont)[1])
        for  x of users { x.coin += cn }
        for x of users.map((x, y) => y){
            send(x, "【全服奖励】*" + nm + "*已发送到您账户，金额为" + cn + " DRB，请留意查收")
        }
        drrr.print("/me *全服奖励* 【" + nm + "】已发放，金额" + cn + " DRB")
    }
}
//个人奖励
event[msg, me, dm](user, cont: "^/奖励\\s+\\d+\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        uid = parseInt(threekey("/奖励", cont)[0])
        nm = threekey("/奖励", cont)[1]
        cn = parseInt(threekey("/奖励", cont)[2])
        n = users.findIndex(x => x.uid == uid)
        if n< 0 then {
            drrr.dm(user, "未找到UID为【" + uid + "】的用户")
        }else {
            users[n].coin += cn
            send(n, "【个人奖励】*" + nm + "*已发送到您账户，金额为" + cn + " DRB，请留意查收")
            drrr.dm(user, "【个人奖励】*" + nm + "*已发送到@" + users[n].name + "的账户，金额为" + cn + " DRB")
        }
    }
}
event[msg, me, dm](user, cont: "^/奖励\\s+\\S+\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        name = checka(threekey("/奖励", cont)[0])
        nm = threekey("/奖励", cont)[1]
        cn = parseInt(threekey("/奖励", cont)[2])
        n = users.findIndex(x => x.name == name)
        if n< 0 then {
            drrr.dm(user, "未找到用户名为【" + name + "】的用户")
        }else {
            users[n].coin += cn
            send(n, "【个人奖励】*" + nm + "*已发送到您账户，金额为" + cn + " DRB，请留意查收")
            drrr.dm(user, "【个人奖励】*" + nm + "*已发送到@" + users[n].name + "的账户，金额为" + cn + " DRB")
        }
    }
}
//个人惩罚
event[msg, me, dm](user, cont: "^/惩罚\\s+\\d+\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        uid = parseInt(threekey("/惩罚", cont)[0])
        nm = threekey("/惩罚", cont)[1]
        cn = parseInt(threekey("/惩罚", cont)[2])
        n = users.findIndex(x => x.uid == uid)
        if n< 0 then {
            drrr.dm(user, "未找到UID为【" + uid + "】的用户")
        }else {
            users[n].coin -= cn
            send(n, "【个人惩罚】您因*" + nm + "*受到惩罚，罚金为" + cn + " DRB")
            drrr.dm(user, "【个人惩罚】@" + users[n].name + "因*" + nm + "*受到惩罚，罚金为" + cn + " DRB")
        }
    }
}
event[msg, me, dm](user, cont: "^/惩罚\\s+\\S+\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        name = checka(threekey("/惩罚", cont)[0])
        nm = threekey("/惩罚", cont)[1]
        cn = parseInt(threekey("/惩罚", cont)[2])
        n = users.findIndex(x => x.name == name)
        if n< 0 then {
            drrr.dm(user, "未找到用户名为【" + name + "】的用户")
        }else {
            users[n].coin -= cn
            send(n, "【个人惩罚】您因*" + nm + "*受到惩罚，罚金为" + cn + " DRB")
            drrr.dm(user, "【个人惩罚】@" + users[n].name + "因*" + nm + "*受到惩罚，罚金为" + cn + " DRB")
        }
    }
}
//种树
//经验升级设置
chcke = (e) => {
    s = [0, 5, 10, 20, 30]  //设置等级分界点
    if e < s[1] then { [1, s[1] - e] }  //1级 1-4
  else if e < s[2] then { [2, s[2] - e] }  //2级 5-9
  else if e < s[3] then { [3, s[3] - e] }  //3级 10-19
  else if e < s[4] then { [4, s[4] - e] }  //4级 20-29
  else if e < s[5] then { [5, s[5] - e] }  //5级 30

}
event[msg, me, dm](user, cont: "^/(展示)?树") => {
    n = checku(user)
    p = " 您还没有树，早起签到10天后（时间为6:00-6:30），将获得树苗"
    if (n == (-1)) then drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
  else {
        if !users[n].tree == 0 then
        p = "您的树:\n等级：." + users[n].tree.level + "级\t浇水：" + users[n].tree.water + "天\t果子：" + users[n].tree.fruit + "个"
        if cont== "/宠物" then {
            drrr.dm(user, "@" + users[n].name + p)
        }else {
            drrr.print("@" + users[n].name + p)
        }
    }
}
event[msg, me, dm](user, cont:"^/浇水")  => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-水") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有【MG-水】，请前往商店购买")
    } else if users[n].tree == 0 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您还没有树，早起签到10天后（时间为6:00-6:30），将获得树苗")
    }else {
        use(n, "MG-水")
        users[n].tree.water++
        users[n].trc = false
        lv = chcke(users[n].tree.water)[0]
        dt = chcke(users[n].tree.water)[1]
        if users[n].tree.level == 7 then {
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前已浇水" + users[n].tree.water + "次 ，已经达到最高等级Lv.5")
        }else if lv== users[n].tree.level then {
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前已浇水" + users[n].tree.water + "次 ，距离下一级还差" + dt + "次")
        }else {
            users[n].tree.level = lv
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前已浇水" + users[n].tree.water + "次 ，恭喜升到 Lv." + lv + " ,距离下一级级还差" + dt + "次")
        }
    }
}
event[msg, me, dm](user, cont:"^/摘果")  => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if users[n].tree == 0 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您还没有树，早起签到10天后（时间为6:00-6:30），将获得树苗")
    }else if users[n].tree.fruit == 0 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的树还没有结果子，快来浇水吧")
    }  else {
        fruits = ["🍊", "🍋", "🥭", "🍑", "🍐", "🍎", "🍏", "🥝"]
        nm = users[n].tree.fruit
        f = () => fruits[Math.floor(Math.random() * fruits.length)]
        a = f()
        add(n, a, 1)
        b = f()
        add(n, b, 1)
        c = f()
        add(n, c, 1)
        ft = a + b + c
        if nm== 4 then{
            d = f()
            add(n, d, 1)
            ft = a + b + c + d
        }
        if nm== 5 then{
            d = f()
            add(n, d, 1)
            e = f()
            add(n, e, 1)
            ft = a + b + c + d + e
        }
        users[n].tree.fruit = 0
        drrr.print("/me @" + users[n].name + " 您成功摘下" + nm + "个果子，分别是【" + ft + "】")

    }
}
//喝水提醒
loop = () => {
    ckd = true
    drrr.print("/me 已经过" + drd + "分钟了，快来喝水领奖励吧")
    drd = rand(15, 30)
    later 2* 60 * 1000 ckd= false
    later drd* 60 * 1000 loop()
}
loop()
event[msg, me, dm](user, cont: "^/喝完了") => {
    yb = rand(2, 5)
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else {
        nm = users[n].name
        i = drk.findIndex(u => u == nm)
        if !ckd then {
            drrr.print("/me @" + users[n].name + " 棒棒哒，但可惜错过了奖励时间，请在下次喝水提醒时，2分钟内前来领取奖励")
        }else if i>= 0 then {
            drrr.print("/me @" + users[n].name + " 您已领取过本次喝水奖励了")
        }else {
            drk.push(nm)
            users[n].coin += yb
            users[n].drink++
            drrr.print("/me @" + users[n].name + " 您已成功领取本次喝水奖励，收获" + yb + " DRB，共已喝水" + users[n].drink + "次")
        }
    }
}
//彩票

event[msg, me, dm](user, cont: "^/直接开奖", url, tc) => {
    if  lottery.length > 0 && admins.some(a => a == tc)  then kai()
}
event[msg, me, dm](user, cont: "^/彩票") => {
    lt = lottery.map((x, i) => i + 1 + ". " + x.name + "  " + x.amount + " DRB")
    b = 0
    if lottery.length > 0 then b= lottery.map(x => x.amount).reduce((a, x) => a = a + x)
    drrr.print("今日彩票 总金额：" + b + "DRB\n" + lt.join("\n"))
}
event[msg, me, dm](user, cont: "^/开奖结果") => {
    drrr.print(result)
}
event[msg, me, dm](user, cont:"^/买彩票\\s+\\d")  => {
    p = parseInt(cont.replace("/买彩票", "").trim())
    n = checku(user)
    id = lottery.findIndex(x => x.uid == users[n].uid)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if (id >= 0) then {
        drrr.print("/me @" + users[n].name + " 您今天已经购买过彩票了，金额为" + lottery[id].amount + " DRB")
    } else if (users[n].coin < p) then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您没有 " + p + " DRB，您只有 " + users[n].coin + "DRB")
    } else if (p < 5) then {
        drrr.print("/me @" + users[n].name + " 买彩票至少花费 5 DRB")
    } else {
        users[n].coin -= p
        lottery.push({ name: users[n].name, uid: users[n].uid, amount: p })
        drrr.print("/me @" + users[n].name + " 您已成功购买金额为" + p + " DRB的【彩票】，现在您有" + users[n].coin + "DRB，请记得在明天前来查看开奖结果")
    }
}
//转账
event[msg, me, dm](user, cont: "^/转账\\s+\\S+\\s+\\d") => {
    tou = checka(twokey("/转账", cont)[0])
    cn = parseInt(twokey("/转账", cont)[1])
    n = checku(user)
    m = users.findIndex(x => x.name == tou)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if (m == (-1)) then {
        drrr.dm(user, "@" + users[n].name + " 您转账的用户【" + tou + "】不存在" + m)
    } else if users[n].coin < (cn + 1) then {
        drrr.dm(user, "@" + users[n].name + " 很抱歉，您只有" + users[n].coin + "DRB，不足以支付" + cn + "(转账金额)+" + Math.floor(cn * 0.05) + "(5%手续费)=" + (Math.floor(cn * 0.05) + cn) + " DRB")
    } else if cn< 20 then {
        drrr.dm(user, "@" + users[n].name + " 很抱歉，转账最低额度为 20 DRB 并收取转账金额5%手续费")
    }else {
        users[n].coin = users[n].coin - Math.floor(cn * 0.05) - cn
        users[m].coin = users[m].coin + cn
        send(m, "【转账提醒】@" + users[n].name + " 转账给您" + cn + " DRB")
        drrr.dm(user, "@" + users[n].name + " 您已成功转账给【" + tou + "】" + cn + " DRB,收取了" + Math.floor(cn * 0.05) + " DRB手续费")
    }
}
//查看个人信息
event[msg, me, dm](user, cont: "^/(展示)?个人") => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }else {
        if cont== "/个人" then {
            drrr.dm(user, "用户名：" + users[n].name + " ,tc：" + users[n].tc + " ,UID：" + users[n].uid + " ,资产：" + users[n].coin + " DRB ,连续签到："
                + users[n].day + "天，连续早起：" + users[n].dayz + "天，喝水：" + users[n].drink + "次")
        }else {
            drrr.print("用户名：" + users[n].name + " ,tc：" + users[n].tc + " ,UID：" + users[n].uid + " ,资产：" + users[n].coin + " DRB ,连续签到："
                + users[n].day + "天，连续早起：" + users[n].dayz + "天，喝水：" + users[n].drink + "次")
        }
    }
}
//查看红包情况
showp = () => {
    res = ""
    if gainu.length > 0 then{
        r = gainu.map((x, i) => "\n" + (i + 1) + "." + x + "\t" + gains[i] + " DRB")
        res = r.join("")
    }
    rt = "【" + owner + "的红包】 已领取【" + gains.length + "/" + pktam + "】" + res
    rt
}
event[msg, me, dm](user, cont: "^/红包") => {
    drrr.print(showp())
}
//发红包
event[msg, me, dm](user, cont: "^/发红包\\s+\\d+\\s+\\d") => {
    if pkgs.length > 0 then drrr.print("/me @" + user + " 现在已经有一个正在被领取的红包，" +
        "请等该红包被领取完或者超时清空后再发出新红包 ")
  else {
        amc = parseInt(twokey("/发红包", cont)[0])
        cn = parseInt(twokey("/发红包", cont)[1])
        n = checku(user)
        if (n == (-1)) then {
            drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
        } else if !users[n].bag.some(x => x.name == "MG-红包") then {
            drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有红包，请前往商店购买")
        } else if cn< 20 then {
            drrr.print("/me @" + users[n].name + " 很抱歉，红包总金额至少为20 DRB")
        } else if users[n].coin < cn then {
            drrr.print("/me @" + users[n].name + " 很抱歉，您只有" + users[n].coin + "DRB，不足以发出" + cn + " DRB的红包")
        } else if amc> 20 then {
            drrr.print("/me @" + users[n].name + " 很抱歉，红包个数最多为20个")
        } else {
            users[n].coin -= cn
            use(n, "MG-红包")
            pkgi++
            owner = users[n].name
            owneri = users[n].uid
            pktam = amc
            gaini = []
            gainu = []
            gains = []
            pkgs = new Array(pktam)
            pkgs.fill(1)
            cns = cn - pktam
            pi = pkgi
            w = 0
            while w< (amc - 1)  {
                j = rand(1, 2 * cns / (amc - w))
                pkgs[w] = pkgs[w] + j
                cns -= j
                w++
            }
            pkgs[w] = pkgs[w] + cns
            drrr.print("/me 【" + owner + "的红包】快来领取吧！个数：【" + pktam + "】")
            later 10* 60 * 1000 {
                if (pkgs.length > 0 && pkgi == pi) then {
                    bck = pkgs.reduce((a, x) => a += x)
                    bn = users.findIndex(x => x.uid == owneri)
                    users[bn].coin += bck
                    pkgs = []
                    drrr.print("/me 【" + owner + "的红包】超过10分钟未被领取完，已返还剩余金额给" + owner + "，现在可以发出新红包了")
                    drrr.print(showp())
                }
            }
        }
    }
}

//抢红包
event[msg, me, dm](user, cont: "^/抢") => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if pkgs.length == 0 then {
        if gains.length == pktam then
        drrr.print("/me @" + users[n].name + " 您来晚了，红包已经被抢光了")
  else drrr.print("/me @" + users[n].name + " 您来晚了，红包已经超时了")
    } else{
        id = users[n].uid
        if gaini.some(a => a == id)  then {
            drrr.print("/me @" + users[n].name + " 您已经抢过这个红包了")
        }else{
            gain = pkgs.shift()
            gaini.push(id)
            gainu.push(user)
            gains.push(gain)
            users[n].coin += gain
            if pkgs.length > 0 then
            drrr.print("/me @" + users[n].name + " 领取了【" + owner + "的红包】，获得" + gain + " DRB   剩余红包【" + pkgs.length + "/" + pktam + "】")
    else {
                drrr.print("/me @" + users[n].name + " 领取了【" + owner + "的红包】，获得" + gain + " DRB   红包被抢光啦，现在可以发出新红包了")
                drrr.print(showp())
            }
        }
    }
}

//背包
event[msg, me, dm](user, cont: "^/(展示)?背包") => {
    n = checku(user)
    if (n == (-1)) then drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
  else {
        p = users[n].bag.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + ".【" + x.name + "】 ×" + x.amount
            a
        }, " 您的背包有:")
        if cont== "/背包" then {
            drrr.dm(user, "@" + users[n].name + p)
        }else {
            drrr.print("@" + users[n].name + p)
        }
    }
}
//商店
event[msg, me, dm](user, cont: "^/商店") => {
    good=mess(goods)
    if good.length > 7 then good= good.slice(0, 7)
    gds = good.map((x, i) => i + 1 + ". " + x.name + "  " + x.price + " DRB")
    drrr.print("商店\n" + gds.join("\n"))
}
event[msg, me, dm](user, cont: "^/集市") => {
    mt = mess(market)
    if mt.length > 7 then mt= mt.slice(0, 7)
    gds = mt.map((x, i) => i + 101 + ". " + x.name + "  " + x.price + " DRB")
    drrr.print("集市\n" + gds.join("\n"))
}
event[me, msg](user, cont:"^/买\\s+\\d+(\\s+\\d)?")  => {
    reg = new RegExp("^/买\\s+\\d+\\s+\\d")
    a = 1
    g = parseInt(cont.replace("/买", "").trim())
    if reg.test(cont) then{
        g = parseInt(twokey("/买", cont)[0])
        a = parseInt(twokey("/买", cont)[1])
    }
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if ((g > goods.length && g < 101) || g > market.length + 100 || g < 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else if g<= goods.length then{
        good = goods[g - 1].name
        p = goods[g - 1].price * a
        if (users[n].coin < p) then {
            drrr.print("/me @" + users[n].name + " 很抱歉，购买" + a + "件【" + good + "】需要花费 " + p + " DRB，您只有" + users[n].coin + "DRB")
        } else {
            users[n].coin -= p
            add(n, good, a)
            drrr.print("/me @" + users[n].name + " 您已成功购买" + a + "件【" + good + "】，花费了" + p + " DRB，现在您有" + users[n].coin + "DRB")
        }
    }else if a== 1 then {
        good = market[g - 101].name
        p = market[g - 101].price
        own = market[g - 101].own
        if (users[n].coin < p) then {
            drrr.print("/me @" + users[n].name + " 很抱歉，【" + good + "】需要花费 " + p + " DRB，您只有" + users[n].coin + "DRB")
        } else {
            i = users.findIndex(x => x.uid == own)
            users[n].coin -= p
            s = Math.floor(p * 0.05)
            users[i].coin += p - s
            market.splice(g - 101, 1)
            add(n, good, a)
            drrr.print("/me @" + users[n].name + " 您已成功购买【" + good + "】，花费了" + p + " DRB，现在您有" + users[n].coin + "DRB")
            send(i, "【售出提醒】@" + users[n].name + " 花费" + p + " DRB 购买了您在集市出售的【" + good + "】，已收取" + s + " DRB 交易费用")
        }
    }else {
        good = market[g - 101].name
        drrr.print("/me @" + users[n].name + " 很抱歉，您在集市中只能购买1件【" + good + "】")
    }
}
event[msg, me, dm](user, cont: "^/卖\\s+\\d+\\s+\\d") => {
    gd = parseInt(twokey("/卖", cont)[0])
    p = parseInt(twokey("/卖", cont)[1])
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if gd > users[n].bag.length || gd == 0 then {
        drrr.dm(user, "@" + users[n].name + " 输入的序号不存在")
    } else {
        good = users[n].bag[gd - 1].name
        use(n, good)
        market.push({ name: good, price: p, own: users[n].uid })
        drrr.print("/me @" + users[n].name + " 您已将【" + good + "】 放到集市上出售啦！")
    }
}
//赠送
event[msg, me, dm](user, cont: "^/赠送\\s+\\S+\\s+\\d") => {
    tou = checka(twokey("/赠送", cont)[0])
    gd = parseInt(twokey("/赠送", cont)[1]) - 1
    n = checku(user)
    m = users.findIndex(x => x.name == tou)
    l = users[n].bag.findIndex(x => x == gd)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if (m == (-1)) then {
        drrr.dm(user, "@" + users[n].name + " 您赠送的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】")
    } else if gd >= users[n].bag.length then {
        drrr.dm(user, "@" + users[n].name + " 输入的序号不存在")
    } else {
        good = users[n].bag[gd].name
        use(n, good)
        add(m, good, 1)
        send(m, "【赠送提醒】@" + users[n].name + " 赠送给您【" + good + "】")
        drrr.dm(user, "@" + users[n].name + " 您已成功将【" + good + "】赠送给" + tou)
    }
}
event[msg, me, dm](user, cont: "^/上架\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        good = twokey("/上架", cont)[0]
        p = parseInt(twokey("/上架", cont)[1])
        i = goods.findIndex(g => g.name == good)
        if i>= 0 then {
            drrr.print("/me 【" + good + "】 已经上架了")
        }else {
            goods.push({ name: good, price: p })
            drrr.print("/me 【" + good + "】 上架啦！")
        }
    }
}
event[msg, me, dm](user, cont: "^/下架\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        good = cont.replace("/下架", "").trim()
        i = goods.findIndex(g => g.name == good)
        if i>= 0 then {
            goods.splice(i, 1)
            drrr.print("/me 【" + good + "】 下架了")
        }else {
            drrr.print("/me 还没有这个商品哦")
        }
    }
}
//礼品码
keys = { "107895": [], "116722": [], "132205": [], "136065": [], "182357": [], "185032": [], "186464": [], "198374": [], "220764": [], "223879": [], "228921": [], "233878": [], "239980": [], "240332": [], "248104": [], "258866": [], "260034": [], "264773": [], "275258": [], "280407": [], "293917": [], "329777": [], "342846": [], "354989": [], "360340": [], "372383": [], "383986": [], "390533": [], "411266": [], "414589": [], "425842": [], "426004": [], "431819": [], "448370": [], "449681": [], "470303": [], "486487": [], "506775": [], "510296": [], "534015": [], "561602": [], "562731": [], "588162": [], "617143": [], "637326": [], "641851": [], "642125": [], "655326": [], "657107": [], "680575": [], "698884": [], "707093": [], "715375": [], "734364": [], "735163": [], "744755": [], "750959": [], "762878": [], "771234": [], "774473": [], "779305": [], "784254": [], "788787": [], "796402": [], "798757": [], "823920": [], "825940": [], "853806": [], "856898": [], "861915": [], "877966": [], "881882": [], "882249": [], "895424": [], "898813": [], "913460": [], "940164": [], "943072": [], "944271": [], "950580": [], "951807": [], "953155": [], "966320": [], "970393": [], "997513": [], "053710": [], "095197": [], "055148": [], "037406": [], "065489": [], "082849": [], "056651": [], "055474": [], "009625": [], "077049": [], "053215": [], "066259": [], "094949": [], "053042": [], "056500": [] }

event dm (user, cont:"^/兑换\\s+\\d")  => {
    key = parseInt(cont.replace("/兑换", "").trim())
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !keys.hasOwnProperty(key) then {
        drrr.dm(user, "您输入的礼品码不存在")
    } else if keys[key].some(a => a == users[n].uid) then {
        drrr.dm(user, "您已经使用过该礼品码")
    }else{
        keys[key].push(users[n].uid)
        users[n].coin += 50
        drrr.dm(user, "您已经成功使用该礼品码，获得50 DRB，目前共有" + users[n].coin + " DRB")
        if keys[key].length == 10 then delete keys[key]
    }
}
event[msg, me, dm](user, cont: "^/礼品码", url, tc) => {
    if admins.some(a => a == tc) then {
        k = "礼品码：\n"
        for p in keys k+= p + ","
        print(k)
        drrr.dm(user, k)
    }
}
//宠物系统
//经验升级设置
checke = (e) => {
    s = [0, 5, 15, 50, 100, 200, 500]  //设置等级分界点
    if e < s[1] then { [1, s[1] - e] }  //1级 1-4
  else if e < s[2] then { [2, s[2] - e] }  //2级 5-14
  else if e < s[3] then { [3, s[3] - e] }  //3级 15-49
  else if e < s[4] then { [4, s[4] - e] }  //4级 50-99
  else if e < s[5] then { [5, s[5] - e] }  //5级 100-199
  else if e < s[6] then { [6, s[6] - e] }  //6级 200-499
  else                 { [7, 0] }       //7级 500-∞
}
timer 10* 60 * 1000{
    if Math.random() < 0.25 then {
        i = Math.floor(Math.random() * pets.length)
        m = pets[i].name
        a = Math.random() * 10 + 5
        apet.push({ name: pets[i].name, level: pets[i].level, exp: pets[i].exp })
        drrr.print("/me 发现一只【" + m + "】，快来捕捉吧")
        later a* 60 * 1000 {
            n = apet.findIndex(x => x.name == m)
            if n>= 0 then {
                apet.splice(n, 1)
                drrr.print("/me 【" + m + "】逃走了")
            }
        }
    }
}

event[msg, me, dm](user, cont: "^/全部宠物") => {
    p = pets.reduce((a, x, y) => {
        a = a + "\n" + (y + 1) + ".【" + x.name + "】\tLv." + x.level + "\tExp." + x.exp
        a
    }, " 全部宠物有:")
    drrr.print(p)
}
event[msg, me, dm](user, cont: "^/观察") => {
    if apet.length == 0 then {
        drrr.print("/me 现在没有宠物出没")
    }else{
        p = apet.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + ".【" + x.name + "】\tLv." + x.level + "\tExp." + x.exp
            a
        }, " 现在出没的宠物有:")
        drrr.print(p)
    }
}
event[msg, me, dm](user, cont: "^/(展示)?宠物") => {
    n = checku(user)
    if (n == (-1)) then drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
  else {
        p = users[n].pet.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + ".【" + x.name + "】\tLv." + x.level + "\tExp." + x.exp
            a
        }, " 您的宠物有:")
        if cont== "/宠物" then {
            drrr.dm(user, "@" + users[n].name + p)
        }else {
            drrr.print("@" + users[n].name + p)
        }
    }
}
event[msg, me, dm](user, cont: "^/捕捉") => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if apet.length == 0 then {
        drrr.print("/me @" + users[n].name + " 现在还没有宠物出没哦")
    } else if users[n].pet.length == 5 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您已拥有5只宠物，已达容量上限，可放生宠物继续捕捉")
    } else if !users[n].bag.some(x => x.name == "MG-精灵球") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有精灵球，请前往商店购买")
    } else {
        use(n, "MG-精灵球")
        drrr.print("/me @" + users[n].name + " 正在努力捕捉中...")
        i = Math.floor(Math.random() * apet.length)
        k = Math.random() < 0.3  //成功概率 0.3
        if !k || (apet.length - 1) < i then {
            later 5* 1000 drrr.print("/me @" + users[n].name + " 哎呀，失手了")
        }else {
            m = apet[i].name
            users[n].pet.push(apet[i])
            apet.splice(i, 1)
            later 5* 1000 drrr.print("/me @" + users[n].name + " 成功捕获一只【" + m + "】")

        }
    }
}
event[msg, me, dm](user, cont:"^/投喂\\s+\\d")  => {
    p = parseInt(cont.replace("/投喂", "").trim()) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-宠物干粮") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有宠物干粮，请前往商店购买")
    } else if p> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        use(n, "MG-宠物干粮")
        name = users[n].pet[p].name
        users[n].pet[p].exp++   //这行改成 users[n].pet[p].exp+=100
        lv = checke(users[n].pet[p].exp)[0]
        dt = checke(users[n].pet[p].exp)[1]
        if users[n].pet[p].level == 7 then {
            drrr.print("/me @" + users[n].name + " 您已投喂了【" + name + "】一份宠物干粮，【" + name + "】获得1经验值，目前 Lv." + lv + " ，已经达到最高等级Lv.7")
        }else if lv== users[n].pet[p].level then {
            drrr.print("/me @" + users[n].name + " 您已投喂了【" + name + "】一份宠物干粮，【" + name + "】获得1经验值，目前 Lv." + lv + " ,距离下一级还差" + dt + "经验值")
        }else {
            users[n].pet[p].level = lv
            drrr.print("/me @" + users[n].name + " 您已投喂了【" + name + "】一份宠物干粮，【" + name + "】获得1经验值，恭喜升到 Lv." + lv + " ,距离下一级级还差" + dt + "经验值")
        }
    }
}
//一本满足
event[msg, me, dm](user, cont:"^/一本满足\\s+\\d")  => {
    p = parseInt(cont.replace("/一本满足", "").trim()) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-一本满足") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有一本满足，请前往商店购买")
    } else if p> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        use(n, "MG-一本满足")
        name = users[n].pet[p].name
        users[n].pet[p].exp += 100
        lv = checke(users[n].pet[p].exp)[0]
        dt = checke(users[n].pet[p].exp)[1]
        if users[n].pet[p].level == 7 then {
            drrr.print("/me @" + users[n].name + " 您投喂了【" + name + "】一本满足，【" + name + "】获得100经验值，目前 Lv." + lv + " ，已经达到最高等级Lv.7")
        }else if lv== users[n].pet[p].level then {
            drrr.print("/me @" + users[n].name + " 您投喂了【" + name + "】一本满足，【" + name + "】获得100经验值，目前 Lv." + lv + " ,距离下一级还差" + dt + "经验值")
        }else {
            users[n].pet[p].level = lv
            drrr.print("/me @" + users[n].name + " 您投喂了【" + name + "】一本满足，【" + name + "】获得100经验值，恭喜升到 Lv." + lv + " ,距离下一级级还差" + dt + "经验值")
        }
    }
}
//一本满足结束
event[msg, me, dm](user, cont:"^/更改宠物名\\s+\\d+\\s+\\S")  => {
    p = parseInt(twokey("/更改宠物名", cont)[0]) - 1
    nm = twokey("/更改宠物名", cont)[1]
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if p> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else if users[n].pet[p].level < 3 then {
        drrr.print("/me @" + users[n].name + " 您的宠物【" + users[n].pet[p].name + "】未达到Lv.3或以上，暂无法更名")
    } else if nm.search("-") >= 0 then {
        drrr.print("/me @" + users[n].name + " 新名字中不能包含“-”字符")
    } else {
        onm = users[n].pet[p].name
        m = onm.slice(onm.search("-") + 1)
        users[n].pet[p].name = nm + "-" + m
        if onm== m then {
            drrr.print("/me @" + users[n].name + " 您已成功将宠物【" + onm + "】名字更改为【" + users[n].pet[p].name + "】")
        }else {
            drrr.print("/me @" + users[n].name + " 您已成功将宠物【" + onm + "】名字更改为【" + users[n].pet[p].name + "】")
        }
    }
}
event[msg, me, dm](user, cont:"^/放生\\s+\\d")  => {
    p = parseInt(cont.replace("/放生", "").trim()) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if p> (users[n].pet.length - 1) || users[n].pet.length == 0 then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        a = Math.random() * 20 + 5 //暂留时间5-25
        pet = users[n].pet[p]
        users[n].pet.splice(p, 1)
        apet.push(pet)
        drrr.print("/me @" + users[n].name + " 您已成功放生【" + pet.name + "】，它将在一段时间后离开")
        later a* 60 * 1000 {
            i = apet.findIndex(x => x.name == pet.name && x.exp == pet.exp)
            if i>= 0 then {
                apet.splice(i, 1)
                drrr.print("/me 【" + pet.name + "】逃走了")
            }
        }
    }
}
event[msg, me, dm](user, cont: "^/创造\\s+\\S+\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        anm = twokey("/创造", cont)[0]
        ex = parseInt(twokey("/创造", cont)[1])
        i = pets.findIndex(g => g.name == anm)
        if i>= 0 then {
            drrr.print("/me 【" + anm + "】 已经存在了")
        }else {
            pets.push({ name: anm, level: checke(ex)[0], exp: ex })
            drrr.print("/me 【" + anm + "】 诞生啦！")
        }
    }
}
event[msg, me, dm](user, cont: "^/灭绝\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        anm = onekey("/灭绝", cont)
        i = pets.findIndex(g => g.name == anm)
        if i< 0 then {
            drrr.print("/me 【" + anm + "】 不存在")
        }else {
            pets.splice(i, 1)
            drrr.print("/me 【" + anm + "】 灭绝了，默哀...")
        }
    }
}
event[msg, me, dm](user, cont: "^/召唤", url, tc) => {
    if admins.some(a => a == tc) then {
    
        i = Math.floor(Math.random() * pets.length)
        m = pets[i].name
        a = Math.random() * 10 + 5
        apet.push({ name: pets[i].name, level: pets[i].level, exp: pets[i].exp })
        drrr.print("/me 发现一只【" + m + "】，快来捕捉吧")
        later a* 60 * 1000 {
            n = apet.findIndex(x => x.name == m)
            if n>= 0 then {
                apet.splice(n, 1)
                drrr.print("/me 【" + m + "】逃走了")
            }

        }
    }
}
//信箱
event join (user) => {
    n = checku(user)
    a = ""
    i = drrr.users.findIndex(u => u.name == user)
    if drrr.users[i].tripcode == false then {
        a += "\n您还未设置tc，无法使用用户系统\n设置方法请看https://drrr.wiki/Tripcode"
    }
    if users[n].newl then {
        a += "\n您有新的来信，请留意查收"
    }
    if users[n].letters.length == 8 then {
        a += "\n您的信箱已满，请及时清理已阅的信件"
    }
    if !a == "" then {
        latter 1000 drrr.dm(user, "@" + users[n].name + "：" + a)
    }
}
event[msg, me, dm](user, cont: "^/写信\\s+\\S+\\s+\\S") => {
    tou = checka(twokey("/写信", cont)[0])
    ct = twokey("/写信", cont)[1]
    n = checku(user)
    m = users.findIndex(x => x.name == tou)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if (m == (-1)) then {
        drrr.dm(user, "@" + users[n].name + " 您写信的用户【" + tou + "】不存在")
    } else {
        send(m, "@" + users[n].name + "：" + ct)
        drrr.dm(user, "@" + users[n].name + " 您已成功写信给【" + tou + "】，内容为：" + ct)
    }
}
event[msg, me, dm](user, cont: "^/信箱") => {
    n = checku(user)
    if (n == (-1)) then drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
  else {
        users[n].newl = false
        p = users[n].letters.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + "." + x.slice(0, 10) + "..."
            a
        }, "的信箱\t【" + users[n].letters.length + "/8】")
        drrr.dm(user, "@" + users[n].name + p)
    }
}
event[msg, me, dm](user, cont:"^/查阅\\s+\\d")  => {
    p = parseInt(cont.replace("/查阅", "").trim()) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }  else if p> (users[n].letters.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        users[n].newl = false
        m = users[n].letters[p]
        drrr.dm(user, m)
    }
}
event[msg, me, dm](user, cont: "^/删除信件\\s+\\d") => {
    n = checku(user)
    if (n == (-1)) then drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
  else {
        p = parseInt(cont.replace("/删除信件", "").trim()) - 1
        if p> (users[n].letters.length - 1) then {
            drrr.dm(user, "输入的序号不存在")
        } else {
            m = users[n].letters[p]
            users[n].letters.splice(p, 1)
            drrr.dm(user, "@" + users[n].name + " 成功删除：" + m)
        }
    }
}
event[msg, me, dm](user, cont: "^/清空信箱") => {
    n = checku(user)
    if (n == (-1)) then drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
  else {
        users[n].letters = []
        drrr.dm(user, "@" + users[n].name + " 成功清空信箱")
    }
}
//查找用户
event[msg, me, dm](user, cont: "^/查找\\s+\\S") => {
    tg = checka(onekey("/查找", cont))
    arr = []
    reg = new RegExp(tg)
    for x of users { if reg.test(x.name) then arr.push(x) }
    if arr.length > 0 then{
        drrr.dm(user, arr.map((x, y) => (y + 1) + ".用户名：" + x.name + " ,tc：" + x.tc + " ,UID：" + x.uid + " ,资产：" + x.coin + " DRB").join("\n"))
    } else {
        drrr.dm(user, "未找到用户【" + tg + "】")
    }
}
event[msg, me, dm](user, cont: "^/查找tc\\s+\\S") => {
    tg = onekey("/查找tc", cont)
    arr = []
    reg = new RegExp(tg)
    for x of users { if reg.test(x.tc) then arr.push(x) }
    if arr.length > 0 then{
        drrr.dm(user, arr.map((x, y) => (y + 1) + ".用户名：" + x.name + " ,tc：" + x.tc + " ,UID：" + x.uid + " ,资产：" + x.coin + " DRB").join("\n"))
    } else {
        drrr.dm(user, "未找到用户【" + tg + "】")
    }
}
//删除
event[msg, me, dm](user, cont: "^/删除\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        del = checka(cont.replace("/删除", "").trim())
        n = users.findIndex(u => u.name == del)
        if (n == (-1)) then {
            drrr.dm(user, "●该用户不存在")
        } else {
            users.splice(n, 1)
            drrr.dm(user, "●成功删除用户" + del)
        }
    }
}
event[msg, me, dm](user, cont: "^/删除\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        del = parseInt(onekey("/删除", cont))
        n = users.findIndex(u => u.uid == del)
        if (n == (-1)) then {
            drrr.dm(user, "●该用户UID不存在")
        } else {
            name = users[n].name
            print(users[n])
            users.splice(n, 1)
            drrr.dm(user, "●成功删除用户" + name)
        }
    }
}
//导出
event[msg, me, dm](user, cont: "^/导出$", url, tc) => {
    if admins.some(a => a == tc) then {
        localStorage["users"] = JSON.stringify(users)
        localStorage["lottery"] = JSON.stringify(lottery)
        localStorage["result"] = JSON.stringify(result)
        localStorage["market"] = JSON.stringify(market)
        print(users)
        print(goods)
        print(pets)
        print(lottery)
        drrr.print("ok")
    }
}
event[msg, me, dm](user, cont: "^/导出\\s+\\S", url, tc) => {
    tg = checka(onekey("/导出", cont))
    n = users.findIndex(x => x.name == tg)
    if admins.some(a => a == tc) then {
        if n< 0 then{
            drrr.dm(user, "未找到用户【" + tg + "】")
        } else {
            print([users[n]])
            drrr.dm(user, "已导出用户：" + users[n].name)
        }
    }
}
event[msg, me, dm](user, cont: "^/导出\\s+\\d", url, tc) => {
    tg = parseInt(onekey("/导出", cont))
    n = users.findIndex(x => x.uid == tg)
    if admins.some(a => a == tc) then {
        if n< 0 then{
            drrr.dm(user, "未找到UID【" + tg + "】")
        } else {
            print([users[n]])
            drrr.dm(user, "已导出用户：" + users[n].name)
        }
    }
}
//导入
event[msg, me, dm](user, cont: "^/导入", url, tc) => {
    if admins.some(a => a == tc) then {
        if input.length == 0 then{
            drrr.dm(user, "无导入数据")
        } else {
            a = []
            b = []
            c = []
            for x of input{
                if users.some(m => (m.name == x.name || m.tc == x.tc) && m.uid != x.uid) then{
                    b.push(x)
                }else if users.some(m => m.uid = x.uid) then {
                    n = users.findIndex(i => i.uid == x.uid)
                    users[n] = x
                    c.push(x)
                }else{
                    a.push(x)
                }
            }
            users = users.concat(a)

            input = []
            if b.length > 0 then {
                print("未成功导入：")
                print(b)
            }
            drrr.dm(user, "已导入" + a.length + "名新用户，更改了" + c.length + "名旧用户，有" + b.length + "名用户冲突")
        }
    }
}
//注文
event[msg, me, dm](user, cont:"^/注文\\s+\\S")  => {
    r = cont.replace("/注文", "").trim();
    zw = ["可乐", "茶", "啤酒", "葡萄酒", "红酒", "白酒", "汁", "咖啡", "拿铁", "卡布奇诺"];
    tb = ["🥤", "🍵", "🍺", "🍷", "🍷", "🍶", "🍹", "☕", "☕", "☕"];
    i = 0;
    t = "";
    a = false;
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
    } else if (users[n].coin < 10) then {
        drrr.print("/me @" + user + "很抱歉，注文功能需要花费 10 DRB，您的DRB数为" + users[n].coin + "。")
    } else {
        users[n].coin -= 10
        drrr.print("/me @" + user + " 您使用了 10 DRB，现在您的DRB数量为" + users[n].coin + "，[" + r + "]马上就好，请稍等一分钟");
        while (i < zw.length && !a) {
            reg = new RegExp(zw[i]);
            a = reg.test(r);
            if (a) then {
                t = tb[i];
            }
            i++;
        }
        later 60* 1000 {
            drrr.print("/me @" + user + " 这是你刚刚注文的" + t + "[" + r + "]，请慢用");
        }
    }
}
//DRB特供版抽奖
event[msg, me, dm](user, content:"^/抽奖")=> {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-奖券") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有奖券，请前往商店购买")
    } else {
        use(n, "MG-奖券")

        array = ["🍉", "🍎", "🍇", "🍊", "🍒", "🍈"]
        a = array[Math.floor(Math.random() * 6)]
        b = array[Math.floor(Math.random() * 6)]
        c = array[Math.floor(Math.random() * 6)]

        //中奖
        if a == b && b == c
then {
            users[n].coin += 100
            drrr.print("@" + users[n].name + "抽到的是【" + a + b + c + "】🎉🎉🎉🎊🎊🎰恭喜中奖： + 100 DRB")
        }
  else
        //不中
        drrr.print("/me @" + users[n].name + " |抽到的 【" + a + b + c + "】没中奖哦~请再接再厉~！")
    }
}
//刮刮乐
event[msg, me, dm](user, content:"^/刮刮乐")=> {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
    }else if !users[n].bag.some(x => x.name == "MG-刮刮乐") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有刮刮乐，请前往商店购买")
    } else {
        use(n, "MG-刮刮乐")

        g = Math.floor(Math.random() * 100 + 1)

        //中奖 10
        if g == 100
then {
            users[n].coin += 100
            drrr.print("@" + users[n].name + " |是 " + g + " 🎉🎊恭喜中奖： + 100 DRB")
        }
    else
        //中奖 90
        if g >= 90
then {
            users[n].coin += 20
            drrr.print("/me @" + users[n].name + " |是 " + g + " 🎉： + 20 DRB")
        }
  else
        //中奖 75
        if g >= 75
then {
            users[n].coin += 5
            drrr.print("/me @" + users[n].name + " |是 " + g + "  🎉： + 5 DRB")
        }
  else
        //不中
        drrr.print("/me @" + users[n].name + " |是 " + g + " 残念！没中奖~")

    }
}
