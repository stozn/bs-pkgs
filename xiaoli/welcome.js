admins = ["OG0OPFxOFw", "Ancy.WWeeo", ".bLVj9fdOM", "unica/qOLU", "YtIMnsXOBE", "vJEPoEPHsA"]   //设置管理员
notices = JSON.parse(localStorage["notices"])
msgs = JSON.parse(localStorage["msgs"])
emoji = JSON.parse(localStorage["emoji"])
blacklist = JSON.parse(localStorage["blacklist"])
bmd = 0 //白名单功能默认关闭
whitelist = JSON.parse(localStorage["whitelist"])
amax = (array) => array.findIndex(x => x == Math.max.apply(Math, array))
amin = (array) => array.findIndex(x => x == Math.min.apply(Math, array))
curl = (url) => {
    reg = new RegExp("^http(s)?://(([A-z]|[0-9]|-)+.)?([A-z]|[0-9]|-)+.[A-z]+/([A-z]|[0-9]|[_~:/?#@!$%&'*+-,;=.])+$")
    return reg.test(url)
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
latter = (f, t) => setTimeout(f, t * 1000)

tNow = () => {
    now = new Date()
    String(now.getHours()).padStart(2, "0")
        + ":" + String(now.getMinutes()).padStart(2, "0")
}

sample = array => array[Math.floor(Math.random() * array.length)]

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

onTimeDo(0, 0, 0, () => {
    mydate = new Date()
    M = mydate.getMonth() + 1
    N = mydate.getDate()
    ywz = ["ヾ(≧▽≦*)o", "φ(*￣0￣)", "q(≧▽≦q)", "ψ(｀∇´)ψ", "φ(゜▽゜*)♪"]
    bmd = 0
    drrr.title("多喝温水")
    if [1, 10, 15, 20, 25, 30].includes(N) then {
        drrr.descr(sample(ywz) + "“黩翋砬柆”祭(durarara祭)到啦！开放抽签|献礼功能24小时w  今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night")
        later 1000 drrr.print("🔔🔔🔔 12点的钟声已经响起，一天悄无声息的过去变为昨日，欢迎来到" + M + "月" + N + "日！");
        later 2000 drrr.print("“黩翋砬柆(durarara祭)”开始啦！开放抽签|献礼功能24小时w")
    }
  else  {
        drrr.descr(sample(ywz) + "今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night")
        later 1000 drrr.print("🔔🔔🔔 12点的钟声已经响起，一天悄无声息的过去变为昨日，欢迎来到" + M + "月" + N + "日！")
    }
})

onTimeDo(-1, 0, 0, () => {
    mydate = new Date()
    N = mydate.getDate()
    if [1, 10, 15, 20, 25, 30].includes(N)  then { 
        drrr.print("/me 整点报时：现在是【" + tNow() + "】抽签|献礼 请往里走，如果抽到【凶】只要系在绑签绳上就可以逢凶化吉了哦【可以重新抽签】|别忘了领取整点奖励哦")
    }else {
        drrr.print("/me 整点报时：现在是【" + tNow() + "】，可以领取整点奖励啦")
    }
})



onTimeDo(-1, 15, 0, () => {
    now = new Date()
    N = now.getDate()
    if [1, 10, 15, 20, 25, 30].includes(N)  then {
        cds = ["祈祷中...", "打扫庭院中...", "舞蹈中...", "整理仪表中...", "贩卖温水中...", "整理货物中...", "招呼来客中...", "休息中..."]
        cdm = ["少女", "机巧少女", "魔法少女", "轻音少女", "轻音少女", "麻将少女", "电竞少女", "美少女"]
        drrr.print("/me " + sample(cdm) + "正在" + sample(cds))
    }else {
        ds = ["打扫卫生中...", "摸鱼中...", "整理中...", "外面看天空...", "窗边看书...", "戴着耳机听音乐...", "发呆...", "纠结喝什么饮料...", "喝水...", "吃零食..."]
        ns = ["迷迷糊糊的爬起来，给盖好被子避免着凉", "现在睡得正香", "睡梦中转了个身", "嘴里嘟囔着，好像梦到什么吃的了w"]
        drrr.print("/me 小粒正在" + sample(((now.getHours() > 6 && now.getHours() < 23) && ds) || (1 && ns)))
    }
})

onTimeDo(-1, 5, 0, () => {
    mydate = new Date()
    N = mydate.getDate()
    bs = ["(:3[___]", "(:[___]", "([___]", "(:3[」_]", "(:3[」＿]=:", "|[__]∠)_", "_(:з」∠)_"]
    if !bmd then{
        if [1, 10, 15, 20, 25, 30].includes(N)  then {
            drrr.title("喝水|抽签|献礼" + sample(bs))
        }else {
            drrr.title("多喝温水" + sample(bs))
        }
    }
})

timer 14* 60 * 1000{
    localStorage["notices"] = JSON.stringify(notices)
    localStorage["msgs"] = JSON.stringify(msgs)
    localStorage["emoji"] = JSON.stringify(emoji)
    localStorage["blacklist"] = JSON.stringify(blacklist)
    localStorage["whitelist"] = JSON.stringify(whitelist)
}
event[msg, me, dm](user, cont: "^/留言\\s+\\S", url, tc) => {
    msg = cont.replace("/留言", "").trim()
    msgs.unshift("@" + user + "：" + msg)
    drrr.dm(user, "成功留言：" + msg)
}
event[msg, me, dm](user, cont: "^/帮助") => {
    drrr.dm(user, "小粒帮助页面：\nhttps://docs.qq.com/sheet/DVkVCWFFueUVFcXNB", "https://docs.qq.com/sheet/DVkVCWFFueUVFcXNB")
}
event[msg, me, dm](user, cont: "^/暗号") => {
    drrr.dm(user, "小粒最可爱")
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
event[msg, me, dm](user, cont: "^/白名单", url, tc) => {
    if admins.some(a => a == tc) then{
        if bmd then{
            bmd = 0
            drrr.print("白名单模式已关闭")
            drrr.title("多喝温水")
            mydate = new Date()
            ywz = ["ヾ(≧▽≦*)o", "φ(*￣0￣)", "q(≧▽≦q)", "ψ(｀∇´)ψ", "φ(゜▽゜*)♪"]
            if [1, 10, 15, 20, 25, 30].includes(N) then 
            drrr.descr(sample(ywz) + "“黩翋砬柆”祭(durarara祭)到啦！开放抽签|献礼功能24小时w  今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night")
            else drrr.descr(sample(ywz) + "今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night")
        }else{
            bmd = 1
            drrr.print("白名单模式已开启")
            drrr.title("多喝温水-【白名单】")
            drrr.descr("本房间暂时进入白名单模式，无tc的用户及tc不在白名单内的用户均无法进入本房间。非白名单用户请在非白名单模式下进入本房间，并尽快获取加群方式申请加入白名单即可.night")
        }
    }
}
event[msg, me, dm](user, cont: "^/说\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then drrr.print(cont.replace("/说", "").trim())
}
event[msg, me, dm](user, cont: "^/通知$") => {
    nt = notices.map((x, i) => i + 1 + ". " + x)
    drrr.print("通知：\n" + nt.join("\n"))
}
event[msg, me, dm](user, cont: "^/导出", url, tc) => {
    if admins.some(a => a == tc) then {
        pprint(msgs)
    }
}

//乖嘛
event[me, msg](user, cont:"小粒今天乖嘛")=> {
    if (user == "黯泣") then {
        drrr.print("我今天超乖的！")
        drrr.print("/me 【<(ˉ^ˉ)>")
    }
else {
        drrr.print("才不告诉你呢！")
        drrr.print("/me 【<(ˉ^ˉ)>")
    }
}
//表情包系统
event[msg, me, dm](user, cont: "^/上传表情\\s+\\S+\\s+\\S") => {
    nm = twokey("/上传表情", cont)[0]
    url = twokey("/上传表情", cont)[1]
    if !curl(url) then {
        drrr.print("/me @" + user + " 您的URL可能有问题，请检查")
    } else if emoji.some(x => x.name == nm) then {
        drrr.print("/me @" + user + " 您设置的表情名字【" + nm + "】已存在，请修改")
    }else if nm.length > 5 then {
        drrr.print("/me @" + user + " 您设置的表情名字【" + nm + "】长度大于5个字，请修改")
    } else {
        emoji.push({ name: nm, url: url })
        drrr.dm(user, " 您已成功上传表情【" + nm + "】：", url)
    }
}

event[msg, me, dm](user, cont: "^/表情\\s+\\S") => {
    tg = onekey("/表情", cont)
    nm
    url
    res = []
    reg = new RegExp(tg)
    emoji.forEach(x => if reg.test(x.name) then res.push({ name: x.name, url: x.url }) )  
    if res.length > 0 then{
        if res.length == 1 then{
            url = res[0].url
            nm = res[0].name
        }else{
            i = amin(res.map(x => x.name.length - tg.name))
            url = res[i].url
            nm = res[i].name
        }
        drrr.print(nm + ":", url)
    } else drrr.print("/me @" + user + " 未找到表情【" + tg + "】")
}
event[msg, me, dm](user, cont: "^/查找表情\\s+\\S") => {
    tg = onekey("/查找表情", cont)
    arr = []
    reg = new RegExp(tg)
    for x of emoji { if reg.test(x.name) then arr.push(x) }
    if arr.length > 0 then{
        drrr.dm(user, arr.map((x, y) => (y + 1) + ".【" + x.name + "】").join("\n"))
    } else {
        drrr.print("/me @" + user + " 未找到表情【" + tg + "】")
    }
}
event[msg, me, dm](user, cont: "^/表情$") => {
    good = mess(emoji)
    if good.length > 7 then good= good.slice(0, 7)
    gds = good.map((x, i) => i + 1 + ".【 " + x.name + "】")
    drrr.print("表情大全\n" + gds.join("\n"))
}
event[msg, me, dm](user, cont: "^/删除表情\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        del = cont.replace("/删除表情", "").trim()
        n = emoji.findIndex(u => u.name == del)
        if (n == (-1)) then {
            drrr.dm(user, "表情【" + del + "】不存在")
        } else {
            emoji.splice(n, 1)
            drrr.dm(user, "成功删除表情【" + del + "】")
        }
    }
}

event[me, msg](user: "", content:"^/再来一杯")  => {
    ns = ["酸梅汤", "温水", "柠檬水", "葡萄糖水", "鲜榨🍉汁", "鲜榨🍊汁", "鲜榨🍇汁", "鲜榨🍓汁", "鲜榨🥥汁", "鲜榨🥝汁"]
    n = ns[Math.floor(Math.random() * ns.length)];
    drrr.print("/me @" + user + "|递【" + n + "~】请慢用")
}
event join (user) => {
    tc = "无"
    i = drrr.users.findIndex(u => u.name == user)
    if drrr.users[i].tripcode then tc = drrr.users[i].tripcode
    if blacklist.some(x => {
        reg = new RegExp(x)
        reg.test(user)
    }) then {
        drrr.ban(user)
    }else if !whitelist.some(x => x == tc) && bmd then{
        drrr.kick(user)
    }else{
        ns = ["|进来了就是美少女", "|今天也请多多喝水", "|你也来喝水啦w"]
        ds = ["酸梅汤", "温水", "柠檬水", "葡萄糖水", "鲜榨🍉汁", "鲜榨🍊汁", "鲜榨🍇汁", "鲜榨🍓汁", "鲜榨🥥汁", "鲜榨🥝汁"]
        ts = [
            "【/签到】每日签到获取DRB，早起（6:00-7:00）签到奖励翻倍,。每连续签到1天，获得的DRB+1"
            , "连续签到5天后，不再随天数增加而增加奖励。签到中断，连续签到天数将会清零"
            , "【/签到榜】【/早起榜】【/资产榜】【/干杯榜】每个排行榜均只显示前7名用户（DRRR字数限制）"
            , "【/个人】【/展示个人】查看用户名、tc、UID、资产、连续签到天数等信息"
            , "【/转账 对方用户名 金额】*例如/转账 黯泣 100 or /转账 @黯泣 100 转账给其他用户"
            , "最低转账金额为20 DRB，且每次转账将收取转账金额5%手续费（四舍五入）"
            , "【/彩票】查看今日彩票购买情况。【/开奖结果】查看上一期彩票开奖结果"
            , "【/买彩票 购买金额】 *例如：/买彩票 20  每人每天只能买1张彩票，购买金额最少为5 DRB"
            , "【/抽奖】抽奖机，6种水果，抽3个，3个全相同即中奖，奖金为100 DRB"
            , "【/刮刮乐】直接刮开一张奖券，随机获得1-100之间的一个数，10 DRB一次"
            , "刮刮乐奖金设置：【100】+100 DRB【90-99】+20 DRB【75-89】+5 DRB"
            , "【/商店】查看商店中售卖的物品。可在【/背包】查看购买的物品"
            , "【/买 商品编号】*例如：/买 1 【/买 商品编号 数量】*例如：/买 1 5 购买商店中的物"
            , "【/集市】查看集市中售卖的物品。购买命令和商店一样【/买 商品编号】*例如：/买 101"
            , "【/卖 物品编号 价格】*例如：/卖 1 5 用户可以将自己的物品以任意价格在集市摆卖"
            , "【/红包】查看当前红包情况。【/抢】抢红包。【/发红包 红包个数 红包金额】*例如：/发红包 5 100"
            , "只能同时存在一个红包，当一个红包被抢光或超过10分钟，将会结束这个红包，然后可以发出新红包"
            , "【/背包】【/展示背包】查看背包中的物品。"
            , "【/赠送 对方用户名 物品编号】*例如：/赠送 黯泣 1 or /赠送 @黯泣 1 赠送个人物品给其他用户"
            , "【/宠物】【/展示宠物】查看所拥有的宠物。用户最多拥有6只宠物。【/捕捉】捕捉现在出没的宠物"
            , "【/宠物 宠物编号】【/展示宠物 宠物编号】查看单只宠物详细战斗数据"
            , "【/投喂 宠物编号】*例如：/投喂 1 投喂宠物干粮，增加宠物亲密度【/观察】观察现在出没的宠物"
            , "【/一本满足 宠物编号】*例如：/一本满足 1 使用一本满足快速增加宠物亲密度"
            , "【/出战 宠物编号】更改出战的宠物（默认编号1的宠物出战）【/挑战者】查看拥有宠物的用户"
            , "【/挑战 对方用户名】每天有免费的一次挑战机会，当日再次挑战将消耗挑战卡"
            , "【/挑战者】查找拥有宠物的挑战者，系统NPC有@Lulu和@管理员，可以尝试挑战一下哦"
            , "【/战报】显示最近5条战报，左边为挑战发起者，右边为挑战接受者"
            , "投喂和战斗后宠物获得经验，不会自动升级，请手动升级"
            , "【/放生 宠物编号】 *例如： /放生 1 放生宠物，可以腾出位置捕捉其他宠物，还可获得80-120 DRB奖励"
            , "【/信箱】查看信箱中的所有信件【/查阅 信件编号】全文查阅信箱中的一封信件"
            , "【/删除信件 信件编号】删除信箱中的一封信件。【/清空信箱】清空信箱中的所有信件"
            , "【/写信 对方用户名 内容】*例如：/写信 黯泣 你好　or　/写信 @黯泣 你好"
            , "【/查找 用户名】*例如： /查找 黯　or　/查找 @黯泣"
            , "【/查找tc tc】*例如： /查找tc Ancy　or　/查找 Ancy.WWeeo"
            , "查找其他用户，机制为部分匹配。如查找【黯泣】，将会找到用户名为【黯泣】【我是黯泣】等用户，但无法找到【黯-泣】，查找tc规则类似。"
            , "小粒网站：http://xiaoli.22web.org/  小粒Q群：167575329（群内不定期发放丰富奖励）"
            , "【/留言板】查看留言板【/留言 内容】在留言板上留言，可以反馈bug或提供建议，采纳后将有奖励"
            , "【/搜索 音乐名】搜索歌曲（来源网易云音乐）【/播放 数字编号】播放搜索结果中的歌曲"
            , "【/播放 歌曲名 外链】播放自己提供的外链【/下载 数字编号】获得搜索结果中的歌曲下载链接"
            , "商店中的物品价格每天会有最大20%的起伏，可以在低价时买入，高价时卖出赚取差价"
            , "【/树】查看树木状态，累计早起5天（不用连续）可获得树苗，也可以【/种树】使用【MG-树苗】种下一棵树"
            , "【/浇水】增加树木湿润度【/摘果】收获果子，果子数与树木等级一致，树木3级后每天会结果"
            , "树木一天未浇水将会减少4湿润度，记得每天浇水哦（每天可重复浇水）"
            , "【/献礼】集齐10个一样的果子可兑换 80-120 DRB，大家可以在集市买卖各自需要的果子"
            , "【/干杯】小粒提醒喝水时，喝完水2分钟内回复可获得DRB奖励（15%概率获得【MG-水】）"
            , "【/商店】【/集市】【/背包】都是会随机抽取7个物品显示，找不到所需物品可以多试几次"
            , "连续30天未进入房间的用户，将会被删除"
            , "礼品码将会在Q群不定期发放，回复【/兑换 礼品码】领取奖励，同一礼品码最多供10人领取"
            , "【/表情】查看所有表情名【/表情 表情名】让lulu发送表情【/查找表情 表情名】查找表情名"
            , "【/上传表情 表情名 URL】上传表情，请尽量上传200*200及以下大小的表情，以防刷屏"
            , "每天签到获得的额外奖励：  第一名 30 DRB  第二名 20 DRB 第三名 10 DRB"
            , "【/注文 饮料】注文你想喝的饮料，稍等片刻即可享用"
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""       ←这些先别删，以后加的时候方便些
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
            // ,""
        ]
        n = ns[Math.floor(Math.random() * ns.length)]
        d = ds[Math.floor(Math.random() * ds.length)]
        t = ts[Math.floor(Math.random() * ts.length)]
        l = Math.floor(Math.random() * notices.length)
        drrr.print("/me 欢迎光临@" + user + n + "|递【" + d + "~】请慢用  *如需帮助请回复 /帮助")
        drrr.print("/me 小贴士：" + t)
        if notices.length > 0 then {
            drrr.dm(user, "通知:" + notices[l])
        }
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
timer 10* 60 * 1000 {
    drrr.dm(drrr.users[0].name, "求求把房主给lulu吧")
}
event[msg, me, dm](user, cont:"^/房主", url, tc) => {
    if admins.some(a => a == tc) then {
        drrr.chown(user)
    }
}
event[msg, me, dm](user, cont: "^/拉黑\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        u = cont.replace("/拉黑", "").trim()
        if (u.slice(0, 1) == "@") then {u = u.slice(1) }
        blacklist.push(u)
        drrr.ban(u)
        drrr.dm(user, "成功将@" + u + "拉黑")
    }
}
event[msg, me, dm](user, cont: "^/拉白\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        tc = cont.replace("/拉白", "").trim()
        whitelist.push(tc)
        drrr.dm(user, "成功将tc [" + tc + "] 拉白")
    }
}
event[msg, me, dm](user, cont: "^/黑名单", url, tc) => {
    if admins.some(a => a == tc) then {
        bl = mess(blacklist)
        if bl.length > 7 then bl= bl.slice(0, 7)
        drrr.dm(user, "黑名单\n" + bl.join("\n"))
    }
}
event[msg, me, dm](user, cont: "^/解封\\s+\\S", url, tc) => {
    if admins.some(a => a == tc) then {
        u = cont.replace("/解封", "").trim()
        if (u.slice(0, 1) == "@") then {u = u.slice(1) }
        n = blacklist.findIndex(x => x == u)
        if (n == (-1)) then {
            drrr.dm(user, "未找到该用户")
        } else {
            blacklist.splice(n, 1)
            drrr.dm(user, "成功解封用户@" + u)
        }
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
