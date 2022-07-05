//用户数据
users = JSON.parse(localStorage["users"])
input = []
//干杯
ckd = false
drd = 0
tcn = 0
drk = []
//商店
goods = [{ name: "MG-红包", price: 5 }, { name: "MG-精灵球", price: 50 }, { name: "MG-宠物干粮", price: 5 }, { name: "MG-挑战卡", price: 30 }, { name: "MG-树苗", price: 100 }, { name: "MG-一本满足", price: 400 }, { name: "MG-水", price: 10 }, { name: "MG-刮刮乐", price: 10 }, { name: "MG-奖券", price: 10 }, { name: "鲜榨果汁", price: 5 }, { name: "可乐", price: 4 }]
market = JSON.parse(localStorage["market"])
//彩票数据
lottery = JSON.parse(localStorage["lottery"])
result = JSON.parse(localStorage["result"])
//礼品码
keys = JSON.parse(localStorage["keys"])
bonus = 50
//战报
ybt = []
//奖励数据
award = []
//宠物数据
apet = []
//红包数据
pkgi = 0
owner = "无"
owneri = 0
pktam = 0
gaini = []
gainu = []
gains = []
pkgs = []
fruits = ["🍋", "🍑", "🍐", "🍎"]
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
    for x of goods {
        if Math.random() < 0.5 then  x.price = Math.round(x.price * (0.8 + Math.random() * 0.2))
          else x.price = Math.round(x.price / (0.8 + Math.random() * 0.2))
    }
    for  x of users {
        if x.check == true then  x.day = 0
        if x.live > 0 then x.live++
        else x.live = 1
        if (x.trc == true && !(x.tree == 0)) then {
            x.tree.water -= 4
            if x.tree.water < 0 then x.tree.water = 0
            x.tree.level = chcke(x.tree.water)[0]
        }else if (x.tree.level > 2 && !(x.tree == 0)) then x.tree.fruit = x.tree.level
        x.check = true
        x.checkb = true
        x.trc == true
    }
    txt(users, tDay() + "数据")
})

//每15分钟在后台输出一次数据，顺手清理整点奖励的用户
timer 15* 60 * 1000{
    mydate = new Date();
    h = mydate.getHours();
    m = mydate.getMinutes();

    localStorage["users"] = JSON.stringify(users)
    localStorage["lottery"] = JSON.stringify(lottery)
    localStorage["result"] = JSON.stringify(result)
    localStorage["market"] = JSON.stringify(market)
    localStorage["keys"] = JSON.stringify(keys)
    //整点用户清理
    mydate = new Date()
    m = mydate.getMinutes()
    if m> 2 then award= []
    users = users.filter(x => (x.coin + x.day + x.bag.length + x.letters.length + x.pet.length + x.drink + x.dayz) > 0 && x.live < 30)
    users = users.filter(x => !(x.tc == "无"))
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
    users.push({ uid: duid, name: user, tc: tc, live: 0, coin: 0, check: true, day: 0, dayz: 0, drink: 0, tree: 0, trc: true, bag: [], pet: [], checkb: true, win: 0, letters: [], newl: false })
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
                - 1
        }else{
            newu(user, tc)
            n = users.length - 1
            n
        }
    }else if m == (-1) || (users[m].tc == tc) then  n 
    else {
        - 1
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
    if users[n].letters.length == 5 then{
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
latter = (f, t) => setTimeout(f, t * 1000)
//排行榜
sort = (key) => {
    usr = users
    usr.sort((a, b) => b[key] - a[key])
    pm = usr
    word = "天"
    if key== "coin" then word= " DRB"
    if key== "drink" then word= "次"
    if key== "win" then word= "次"
    if usr.length > 7 then pm= pm.slice(0, 7)    //截取排名前7的用户
    p = pm.reduce((a, x, y) => {
        a = a + "\n" + (y + 1) + "." + x.name + "\t" + x[key] + word
        a
    }, "\t总用户:" + usr.length + "人")
    p
}
event[msg, me, dm](user, cont: "^/(资产|签到|早起|干杯|胜利)榜") => {
    if cont== "/资产榜" then drrr.print("资产榜" + sort("coin"))
else if cont== "/签到榜" then drrr.print("签到榜" + sort("day"))
else if cont== "/早起榜" then drrr.print("早起榜" + sort("dayz")) 
else if cont== "/胜利榜" then drrr.print("胜利榜" + sort("win"))
else drrr.print("干杯榜" + sort("drink"))
}
//签到
event[msg, me, dm](user, cont: "^/签到$") => {
    yb = 4
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if users[n].check then {
        users[n].live = 0
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
            if (users[n].dayz == 5 && users[n].tree == 0) then {
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
    s = [0, 5, 10, 20, 30]  //设置分界点     等级 浇水
    if e < s[1] then { [1, s[1] - e] }     //1级 1-4
  else if e < s[2] then { [2, s[2] - e] }  //2级 5-9
  else if e < s[3] then { [3, s[3] - e] }  //3级 10-19
  else if e < s[4] then { [4, s[4] - e] }  //4级 20-29
  else if e < s[5] then { [5, s[5] - e] }  //5级 30
}

event[msg, me, dm](user, cont:"^/种树")  => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-树苗") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有树苗，请前往商店购买")
    } else if !(users[n].tree == 0) then {
        drrr.print("/me @" + users[n].name + " 您已经有一棵树了")
    }else {
        use(n, "MG-树苗")
        users[n].tree = { level: 1, water: 0, fruit: 0 }
        drrr.print("/me @" + users[n].name + " 您已成功种下一棵树，记得每天浇水哦")
    }
}
event[msg, me, dm](user, cont: "^/(展示)?树") => {
    n = checku(user)
    p = " 很抱歉，您还没有树，早起签到5天后（不需要连续早起，时间为6:00-7:00），将获得树苗，也可在商店购买树苗后【/种树】"
    if (n == (-1)) then drrr.print("/me @" + user + "您的tc与已有的用户不匹配")
  else {
        if !users[n].tree == 0 then
        p = " 您的树:\n等级：." + users[n].tree.level + "级\t湿润度：" + users[n].tree.water + "天\t果子：" + users[n].tree.fruit + "个"
        if cont== "/树" then {
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
        drrr.print("/me @" + users[n].name + " 很抱歉，您还没有树，早起签到5天后（不需要连续早起，时间为6:00-7:00），将获得树苗，也可在商店购买树苗后【/种树】")
    }else {
        use(n, "MG-水")
        users[n].tree.water++
        users[n].trc = false
        lv = chcke(users[n].tree.water)[0]
        dt = chcke(users[n].tree.water)[1]
        if users[n].tree.level == 7 then {
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前树木湿润度为" + users[n].tree.water + " ，已经达到最高等级Lv.5")
        }else if lv== users[n].tree.level then {
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前树木湿润度为" + users[n].tree.water + " ，湿润度距离下一级还差" + dt)
        }else {
            users[n].tree.level = lv
            drrr.print("/me @" + users[n].name + " 您已给您的树浇了水，目前树木湿润度为" + users[n].tree.water + " ，恭喜升到 Lv." + lv + " ,湿润度距离下一级级还差" + dt)
        }
    }
}
event[msg, me, dm](user, cont:"^/摘果")  => {
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if users[n].tree == 0 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您还没有树，早起签到5天后（不需要连续早起，时间为6:00-7:00），将获得树苗，也可在商店购买树苗后【/种树】")
    }else if users[n].tree.fruit == 0 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的树还没有结果子，树木达到3级可结果，快来浇水吧")
    }  else {
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
event[msg, me, dm](user, cont: "^/献礼") => {
    n = checku(user)
    mydate = new Date()
    N = mydate.getDate()
    if (N == 1 || N == 5 || N == 15 || N == 10 || N == 20 || N == 25 || N == 30) then {  
        drrr.print("@" + user + " 灰常抱歉。今天献礼功能不开放哦 \n※【黩翋砬柆神社】开放时间为：\n每月1、5、10、15、20、25、30开放")
    }else if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }else {
        gd = users[n].bag.findIndex(x => fruits.some(y => y == x.name) && x.amount > 9)
        if gd>= 0 then {
            gift = users[n].bag[gd].name
            if users[n].bag[gd].amount == 10 then users[n].bag.splice(gd, 1)
            else users[n].bag[gd].amount -= 10
            c = rand(80, 120)
            users[n].coin += c
            drrr.print("/me @" + user + " 成功给黩翋砬柆神献礼10个【" + gift + "】，神赐给你" + c + " DRB，目前共有" + users[n].coin + " DRB")
        }else drrr.print("/me @" + user + " 您的背包中没有集齐10个相同的果子，无法献礼")
    }
}
//整点奖励
event[msg, me, dm](user, cont: "^/领取奖励") => {
    yb = rand(2, 4)
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else {
        mydate = new Date()
        m = mydate.getMinutes()
        nm = users[n].name
        i = award.findIndex(u => u == nm)
        if m> 2 then {
            drrr.print("/me @" + users[n].name + " 还未到领取时间，请在每个整点的2分钟内前来领取奖励")
        }else if i>= 0 then {
            drrr.print("/me @" + users[n].name + " 您已领取过本小时奖励了")
        }else {
            award.push(nm)
            users[n].coin += yb
            drrr.print("/me @" + users[n].name + " 您已成功领取本小时奖励，收获" + yb + " DRB")
        }
    }
}

//干杯提醒
loop = () => {
    nt = () => {
        now = new Date()
        String(now.getHours()).padStart(2, "0")
            + ":" + String(now.getMinutes()).padStart(2, "0")
    }
    ckd = true
    drk = []
    tcn = 0
    drrr.print("DRRR 干杯！")
    drrr.print("/me 现在是【" + nt() + "】，想要一起干杯的可以发送指令【/干杯】")
    drd = rand(30, 60)
    later 5* 60 * 1000 {
        ckd = false
        u = drk.map(x => "@" + x)
        if drk.length == 0 then drrr.print("/me 5分钟过去了，没有人和小粒干杯，小粒自己默默地喝完了一杯水")
        else drrr.print("/me 5分钟过去了，小粒和" + u.join("") + "干杯了，共发送" + tcn + " DRB")
    }
    later drd* 60 * 1000 loop()
}
loop()
event[msg, me, dm](user, cont: "^/干杯") => {
    yb = rand(1, 5)
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else {
        nm = users[n].name
        i = drk.findIndex(u => u == nm)
        if !ckd then {
            drrr.print("/me @" + users[n].name + " 小粒已经喝完水啦，下次希望可以跟你一起干杯哦~")
        }else if i>= 0 then {
            drrr.print("/me @" + users[n].name + " 又举起了水杯！但是貌似已经喝不下去了~看来只能等下次机会了")
        }else {
            drk.push(nm)
            users[n].coin += yb
            users[n].drink++
            tcn += yb
            w = "/me @" + users[n].name + " 干杯成功，获得了" + yb + " DRB，现在您有" + users[n].coin + "DRB，共已干杯" + users[n].drink + "次"
            if Math.random() < 0.15 then{
                add(n, "MG-水", 1)
                w += ",恭喜获得【MG-水】×1，喝水时也要记得给树浇水哦"
            }
            drrr.print(w)
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
        drrr.dm(user, "@" + users[n].name + " 您转账的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】（可使用查找功能）")
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
                + users[n].day + "天，连续早起：" + users[n].dayz + "天，干杯：" + users[n].drink + "次，胜利：" + users[n].win + "次，不活跃：" + users[n].live + "天")
        }else {
            drrr.print("用户名：" + users[n].name + " ,tc：" + users[n].tc + " ,UID：" + users[n].uid + " ,资产：" + users[n].coin + " DRB ,连续签到："
                + users[n].day + "天，连续早起：" + users[n].dayz + "天，干杯：" + users[n].drink + "次，胜利：" + users[n].win + "次，不活跃：" + users[n].live + "天")
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
        p = mess(users[n].bag)
        if p.length > 7 then p= p.slice(0, 7)
        o = p.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + ".【" + x.name + "】 ×" + x.amount
            a
        }, " 您的背包有:")
        if cont== "/背包" then {
            drrr.dm(user, o)
        }else {
            drrr.print("@" + users[n].name + o)
        }
    }
}
//商店
event[msg, me, dm](user, cont: "^/商店") => {
    good = mess(goods)
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
event[msg, me, dm](user, cont:"^/买\\s+\\d+(\\s+\\d)?")  => {
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
    }else if p > 1000 then {
        drrr.dm(user, "@" + users[n].name + " 您定的价格" + p + "高于最高价格1000 DRB，请不要恶意抬价，如确实有需要高价售出，请自行使用【转账】【赠送】功能")
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
        drrr.dm(user, "@" + users[n].name + " 您赠送的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】（可使用查找功能）")
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
        users[n].coin += bonus
        drrr.dm(user, "您已经成功使用该礼品码，获得" + bonus + " DRB，目前共有" + users[n].coin + " DRB")
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
event[msg, me, dm](user, cont: "^/奖金\\s+\\d", url, tc) => {
    if admins.some(a => a == tc) then {
        bonus = parseInt(onekey("/奖金", cont))
        drrr.dm(user, "奖金已设置为" + bonus + " DRB")
    }
}
//宠物系统
//经验升级设置
sample = array => array[Math.floor(Math.random() * array.length)]
checke = (e) => {
    s = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 90, 110, 130, 150, 180, 210, 240, 270, 300, 340, 380, 420, 460, 500, 550, 600, 700, 800, 900, 1000]  //设置等级分界点
    if e < s[1] then { [1, s[1] - e] } 	      //1级  1-4
  else if e < s[2] then { [2, s[2] - e] }     //2级  5-9
  else if e < s[3] then { [3, s[3] - e] }     //3级  10-14
  else if e < s[4] then { [4, s[4] - e] }     //4级  15-19
  else if e < s[5] then { [5, s[5] - e] }     //5级  20-29
  else if e < s[6] then { [6, s[6] - e] }     //6级  30-39
  else if e < s[7] then { [7, s[7] - e] }     //7级  40-49
  else if e < s[8] then { [8, s[8] - e] }     //8级  50-59
  else if e < s[9] then { [9, s[9] - e] }     //9级  60-69
  else if e < s[10] then { [10, s[10] - e] }  //10级 70-89
  else if e < s[11] then { [11, s[11] - e] }  //11级 90-109
  else if e < s[12] then { [12, s[12] - e] }  //12级 110-129
  else if e < s[13] then { [13, s[13] - e] }  //13级 130-149
  else if e < s[14] then { [14, s[14] - e] }  //14级 150-179
  else if e < s[15] then { [15, s[15] - e] }  //15级 180-209
  else if e < s[16] then { [16, s[16] - e] }  //16级 210-239
  else if e < s[17] then { [17, s[17] - e] }  //17级 240-269
  else if e < s[18] then { [18, s[18] - e] }  //18级 270-299
  else if e < s[19] then { [19, s[19] - e] }  //19级 300-339
  else if e < s[20] then { [20, s[20] - e] }  //20级 340-379
  else if e < s[21] then { [21, s[21] - e] }  //21级 380-419
  else if e < s[22] then { [22, s[22] - e] }  //22级 420-459
  else if e < s[23] then { [23, s[23] - e] }  //23级 460-499
  else if e < s[24] then { [24, s[24] - e] }  //24级 500-549
  else if e < s[25] then { [25, s[25] - e] }  //25级 550-599
  else if e < s[26] then { [26, s[26] - e] }  //26级 600-699  
  else if e < s[27] then { [27, s[27] - e] }  //27级 700-799
  else if e < s[28] then { [28, s[28] - e] }  //28级 800-899
  else if e < s[29] then { [29, s[29] - e] }  //29级 900-999
  else                   { [30, 0] }          //30级 1000-∞

}
cpet = (a1, a2) => {
    t = rand(10, 20)
    q = Math.random()
    p = "精灵-N"
    l = 100
    a = 50
    d = 20
    s = 10

    if q< a1 then {
        p = "白泽-SR"
        l = 150
        a = 75
        d = 30
        s = 15
    } 
      else if q< a2 then{
        x = rand(1, 4)
        if x== 1 then {
            p = "青龙-R"
            s = 30
        }
        if x== 2 then {
            p = "白虎-R"
            a = 100
        }
        if x== 3 then {
            p = "朱雀-R"
            l = 200
        }
        if x== 4 then {
            p = "玄武-R"
            d = 40
        }
    }
    apet.push({ name: p, level: 1, exp: 0, life: l, att: a, def: d, speed: s })
    drrr.print("/me 发现一只【" + p + "】，快来捕捉吧")
    later t* 60 * 1000 {
        n = apet.findIndex(x => x.name == p)
        if n>= 0 then {
            apet.splice(n, 1)
            drrr.print("/me 【" + p + "】逃走了")
        }
    }
}
timer 20* 60 * 1000{
    if Math.random() < 0.20 then {
        cpet(0.02, 0.20)
    }
}
event[msg, me, dm](user, cont:"^/出战\\s+\\d")  => {
    p = parseInt(onekey("/出战", cont)) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }  else if p> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        a = users[n].pet[0]
        users[n].pet[0] = users[n].pet[p]
        users[n].pet[p] = a
        drrr.print("/me @" + users[n].name + " 您已将出战宠物由【" + users[n].pet[p].name + "】改为【" + users[n].pet[0].name + "】")
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
        k = Math.random() < 0.5  //成功概率 0.5
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
    p = parseInt(onekey("/投喂", cont)) - 1
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
        users[n].pet[p].exp++
        drrr.print("/me @" + users[n].name + " 您已投喂了【" + name + "】一份宠物干粮，【" + name + "】获得1经验值")
    }
}
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
        drrr.print("/me @" + users[n].name + " 您投喂了【" + name + "】一本满足，【" + name + "】获得100经验值")
    }
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
event[msg, me, dm](user, cont: "^/(展示)?宠物$") => {
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
event[msg, me, dm](user, cont:"^/(展示)?宠物\\s+\\d")  => {
    n = checku(user)
    c = twokey("/", cont)
    i = parseInt(c[1]) - 1
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if i> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        p = "的宠物：\n编号：" + c[1] + "\n名字：" + users[n].pet[i].name + "\n等级：Lv." + users[n].pet[i].level + "\n经验：" + users[n].pet[i].exp
            + " exp\n生命：" + users[n].pet[i].life + "\n攻击：" + users[n].pet[i].att + "\n防御：" + users[n].pet[i].def + "\n速度：" + users[n].pet[i].speed
        if c[0] == "宠物" then {
            drrr.dm(user, "您" + p)
        }else {
            drrr.print("@" + users[n].name + " " + p)
        }
    }
}
event[msg, me, dm](user, cont: "^/挑战者") => {
    up = mess(users.filter(x => x.pet.length > 0))
    up = up.map((x, i) => i + 1 + ". @" + x.name)
    if up.length > 7 then up= up.slice(0, 7)
    drrr.print("挑战者\n" + up.join("\n"))
}
event[msg, me, dm](user, cont: "^/挑战\\s+\\S") => {
    tou = checka(onekey("/挑战", cont))
    n = checku(user)
    m = users.findIndex(x => x.name == tou)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if (m == (-1)) then {
        drrr.dm(user, "@" + users[n].name + " 您挑战的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】（可使用查找功能）")
    } else if (users[m].pet.length == 0) then {
        drrr.dm(user, "@" + users[n].name + " 您挑战的用户【" + tou + "】还没有宠物，无法挑战")
    } else if (users[n].pet.length == 0) then {
        drrr.dm(user, "@" + users[n].name + " 您还没有宠物，无法挑战")
    }else if (users[n].checkb || users[n].bag.some(x => x.name == "MG-挑战卡")) then {
        if (!users[n].checkb && users[n].bag.some(x => x.name == "MG-挑战卡")) then {
            use(n, "MG-挑战卡")
            drrr.print("/me @" + users[n].name + " 您已使用了一张挑战卡")
        }
        users[n].checkb = false
        zdm = []
        zms = []
        xn = users[n].name
        yn = users[m].name
        xp = "【" + users[n].pet[0].name + "】"
        yp = "【" + users[m].pet[0].name + "】"
        xl = users[n].pet[0].life
        yl = users[m].pet[0].life
        xa = users[n].pet[0].att
        ya = users[m].pet[0].att
        xd = users[n].pet[0].def
        yd = users[m].pet[0].def
        f = (users[n].pet[0].speed - users[m].pet[0].speed) > 0
        drrr.print("/me @" + xn + " 对 @" + yn + " 的挑战开始。@" + xn + " 派出了" + xp + "   @" + yn + " 派出了" + yp)
        i = 1
        ad = rand(12, 18)
        ae = rand(1, 3)
        while (xl > 0 && yl > 0) {
            xs = xa - yd + rand(-10, 10)
            if Math.random() < 0.10 then xs= xa * 2 - yd + rand(-10, 10)
            ys = ya - xd + rand(-10, 10)
            if Math.random() < 0.10 then ys= ya * 2 - xd + rand(-10, 10)

            if f then{
                if (yl -= xs)<=0 then{
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　　⇓\n" + yp + "\t" + yl + "(-" + xs + ")")
                    users[n].win++
                    users[n].coin += ad
                    users[n].pet[0].exp += ae
                    ybt.unshift(xn + xp + "➨" + yn + yp + "\t" + "胜")
                    if ybt.length == 5 then ybt.splice(4, 1)
                    zms.push("/me 恭喜@" + xn + " 在第" + i + "回合取得胜利，您获得了" + ad + " DRB，" + xp + "获得" + ae + "经验，胜利次数+1，共胜利" + users[n].win + "次")
                }else{
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　　⇓\n" + yp + "\t" + yl + "(-" + xs + ")")
                    xl -= ys
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "(-" + ys + ")" + "\n　　　⇑\n" + yp + "\t" + yl)
                    if xl<= 0 then{
                        users[m].win++
                        zms.push("/me 恭喜@" + yn + " 在第" + i + "回合取得胜利，胜利次数+1，共胜利" + users[m].win + "次")
                        ybt.unshift(xn + xp + "➨" + yn + yp + "\t" + "败")
                        if ybt.length == 5 then ybt.splice(4, 1)
                    }
                }
            }else {
                if (xl -= ys)<=0 then{
                    users[m].win++
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "(-" + ys + ")" + "\n　　　⇑\n" + yp + "\t" + yl)
                    zms.push("/me 恭喜@" + yn + " 在第" + i + "回合取得胜利，胜利次数+1，共胜利" + users[m].win + "次")
                    ybt.unshift(xn + xp + "➨" + yn + yp + "\t" + "败")
                    if ybt.length == 5 then ybt.splice(4, 1)
                }else {
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "(-" + ys + ")" + "\n　　　⇑\n" + yp + "\t" + yl)
                    yl -= xs
                    zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　　⇓\n" + yp + "\t" + yl + "(-" + xs + ")")
                    if yl<= 0 then{
                        users[n].win++
                        users[n].coin += ad
                        users[n].pet[0].exp += ae
                        ybt.unshift(xn + xp + "➨" + yn + yp + "\t" + "胜")
                        if ybt.length == 5 then ybt.splice(4, 1)
                        zms.push("/me 恭喜@" + xn + " 在第" + i + "回合取得胜利，您获得了" + ad + " DRB，" + xp + "获得" + ae + "经验，胜利次数+1，共胜利" + users[n].win + "次")
                    }
                }
            }
            i++
        }
        zdm.forEach((x, y, z) => {
            latter({ latter({ drrr.dm(user, x) }, y*4) }, 3)
        })
        sj += zdm.length * 4
        latter({ drrr.print(zms[0]) }, sj)
    } else{
        drrr.print("/me @" + users[n].name + " 很抱歉，您今天已经挑战过一次了，并且您的背包中没有挑战卡，无法再次挑战，请前往商店购买，或明天再来挑战")
    }
}
event[msg, me, dm](user, cont:"^/升级\\s+\\d")  => {
    p = parseInt(cont.replace("/升级", "").trim()) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }  else if p> (users[n].pet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    }else if users[n].pet[p].level == 30 then {
        drrr.print("/me @" + users[n].name + " 您的【" + users[n].pet[p].name + "】已经达到最高等级Lv.30，无法再升级")
    }else if checke(users[n].pet[p].exp)[0] == users[n].pet[p].level then {
        drrr.print("/me @" + users[n].name + " 您的【" + users[n].name + "】目前没有充足经验升级 ,距离下一级还差" + dt + "经验值")
    }else{
        lv = checke(users[n].pet[p].exp)[0]
        dt = checke(users[n].pet[p].exp)[1]
        l = 0
        t = 0
        d = 0
        s = 0

        w = 1
        e = users[n].pet[p].name
        if e.endsWith("SR") then w= 2
          else if e.endsWith("R") then w= 1.5

        for (o = lv - users[n].pet[p].level; o > 0; o--) {
            a = rand(1, 7)
            if a< 3 then{
                i = Math.round(rand(24, 36) * w)
                l += i
                users[n].pet[p].life += i
            }else if a< 5 then {
                i = Math.round(rand(16, 24) * w)
                t += i
                users[n].pet[p].att += i
            }else if a< 7 then {
                i = Math.round(rand(8, 12) * w)
                d += i
                users[n].pet[p].def += i
            }else {
                i = Math.round(rand(8, 12) * w)
                s += i
                users[n].pet[p].speed += i
            }
        }
        users[n].pet[p].level = lv
        drrr.print("/me @" + users[n].name + " 您的【" + e + "】升级到 Lv." + lv + " ,【生命+" + l + "】【攻击+" + t + "】【防御+" + d + "】【速度+" + s + "】，距离下一级还差" + dt + "经验值")
    }
}
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
        pin = "N"
        if onm.endsWith("SR") then pin= "SR"
          else if onm.endsWith("R") then pin= "R"
        users[n].pet[p].name = nm + "-" + pin
        if onm== m then {
            drrr.print("/me @" + users[n].name + " 您已成功将宠物【" + onm + "】名字更改为【" + users[n].pet[p].name + "】")
        }else {
            drrr.print("/me @" + users[n].name + " 您已成功将宠物【" + onm + "】名字更改为【" + users[n].pet[p].name + "】")
        }
    }
}
event[msg, me, dm](user, cont: "^/战报") => {
    y = ybt.map((x, i) => (i + 1) + ". " + x)
    drrr.print("最新战报\n" + y.join("\n"))
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

event[msg, me, dm](user, cont: "^/召唤", url, tc) => {
    if admins.some(a => a == tc) then {
        cpet(0.44, 0.88)
    }
}
//信箱
event join (user) => {
    n = checku(user)
    a = ""
    i = drrr.users.findIndex(u => u.name == user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else{
        b = false
        users[n].live = 0
        if users[n].newl then {
            a += "\n您有新的来信，请留意查收"
            b = true
        }
        if users[n].letters.length == 4 then{
            a += "\n您的信箱已满，请及时清理已阅的信件"
            b = true
        }
        if (!(a == "") && b) then  drrr.dm(user, "@" + users[n].name + "：" + a)
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
        drrr.dm(user, "@" + users[n].name + " 您写信的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】（可使用查找功能）")
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
        }, "的信箱\t【" + users[n].letters.length + "/4】")
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
//更改用户
event[msg, me, dm](user, cont: "^/更改用户名\\s+\\d+\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        name = twokey("/更改用户名", cont)[1]
        uid = parseInt(twokey("/更改用户名", cont)[0])
        n = users.findIndex(x => x.uid == uid)
        if n< 0 then {
            drrr.dm(user, "未找到UID为【" + uid + "】的用户")
        }else {
            old = users[n].name
            users[n].name = name
            send(n, "【用户名更改】您的用户名已由【" + old + "】改为【" + users[n].name + "】")
            drrr.dm(user, "已成功将【" + old + "】的用户名改为【" + users[n].name + "】")
        }
    }
}

event[msg, me, dm](user, cont: "^/更改tc\\s+\\d+\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        tc = twokey("/更改tc", cont)[1]
        uid = parseInt(twokey("/更改tc", cont)[0])
        n = users.findIndex(x => x.uid == uid)
        if n< 0 then {
            drrr.dm(user, "未找到UID为【" + uid + "】的用户")
        }else {
            old = users[n].tc
            users[n].tc = tc
            send(n, "【tc更改】您的tc已由【" + old + "】改为【" + users[n].tc + "】")
            drrr.dm(user, "已成功将【" + users[n].name + "】的tc由【" + old + "】改为【" + users[n].tc + "】")
        }
    }
}
//查找用户
event[msg, me, dm](user, cont: "^/查找\\s+\\S") => {
    tg = checka(onekey("/查找", cont))
    arr = []
    reg = new RegExp(tg)
    for x of users { if reg.test(x.name) then arr.push(x) }
    if arr.length > 0 then{
        drrr.dm(user, arr.map((x, y) => (y + 1) + ".用户名：" + x.name + " ,tc：" + x.tc + " ,UID：" + x.uid + " ,资产：" + x.coin + " DRB，不活跃：" + x.live + "天").join("\n"))
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
        drrr.dm(user, arr.map((x, y) => (y + 1) + ".用户名：" + x.name + " ,tc：" + x.tc + " ,UID：" + x.uid + " ,资产：" + x.coin + " DRB，不活跃：" + x.live + "天").join("\n"))
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
