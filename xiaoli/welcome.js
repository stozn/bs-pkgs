 admins = ["OG0OPFxOFw", "Ancy.WWeeo", "Robot/23Cc", "unica/qOLU", "YtIMnsXOBE"]   //设置管理员
 notices = []
 msgs = []
timer 14* 60 * 1000{
      localStorage["msgs"] = JSON.stringify(msgs)
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
ts = [
 "【/签到】每日签到获取DRB，早起（6:00-6:30）签到奖励翻倍,。每连续签到1天，获得的DRB+1"
,"连续签到5天后，不再随天数增加而增加奖励。签到中断，连续签到天数将会清零"
,"【/签到榜】【/早起榜】【/资产榜】【/喝水榜】每个排行榜均只显示前7名用户（DRRR字数限制）"
,"【/个人】【/展示个人】查看用户名、tc、UID、资产、连续签到天数等信息"
,"【/转账 对方用户名 金额】*例如/转账 黯泣 100 or /转账 @黯泣 100 转账给其他用户"
,"最低转账金额为20 DRB，且每次转账将收取转账金额5%手续费（四舍五入）"
,"【/彩票】查看今日彩票购买情况。【/开奖结果】查看上一期彩票开奖结果"
,"【/买彩票 购买金额】 *例如：/买彩票 20  每人每天只能买1张彩票，购买金额最少为5 DRB"
,"【/抽奖】抽奖机，5 DRB一次。6种水果，抽3个，3个全相同即中奖，奖金为100 DRB"
,"【/刮刮乐】直接刮开一张奖券，随机获得1-100之间的一个数，10 DRB一次"
,"刮刮乐奖金设置：【100】+100 DRB【90-99】+20 DRB【75-89】+5 DRB"
,"【/商店】查看商店中售卖的物品。可在【/背包】查看购买的物品"
,"【/买 商品编号】*例如：/买 1 【/买 商品编号 数量】*例如：/买 1 5 购买商店中的物"
,"【/集市】查看集市中售卖的物品。购买命令和商店一样【/买 商品编号】*例如：/买 101"
,"【/卖 物品编号 价格】*例如：/卖 1 5 用户可以将自己的物品以任意价格在集市摆卖"
,"【/红包】查看当前红包情况。【/抢】抢红包。【/发红包 红包个数 红包金额】*例如：/发红包 5 100"
,"只能同时存在一个红包，当一个红包被抢光或超过10分钟，将会结束这个红包，然后可以发出新红包"
,"【/背包】【/展示背包】查看背包中的物品。"
,"【/赠送 对方用户名 物品编号】*例如：/赠送 黯泣 1 or /赠送 @黯泣 1 赠送个人物品给其他用户"
,"【/宠物】【/展示宠物】查看所拥有的宠物。用户最多拥有5只宠物。【/捕捉】捕捉现在出没的宠物"
,"【/全部宠物】查看可能出没的全部宠物，已灭绝的宠物不再显示。【/观察】观察现在出没的宠物"
,"【/投喂 宠物编号】*例如：/投喂 1 投喂宠物干粮，增加宠物经验值，使宠物升级"
,"【/一本满足 宠物编号】*例如：/一本满足 1 使用一本满足快速增加宠物经验值，使宠物升级"
,"【/更改宠物名 宠物编号 新名字】*例如：/更改宠物名 1 黯泣的　▲错误示例：/更改宠物名 1 黯泣的-九尾狐"
,"更改宠物的名字，宠物等级需要达到3级或以上。宠物的名字将会被更改为【新名字-宠物品种】，如【黯泣的-九尾狐】"
,"【/放生 宠物编号】 *例如： /放生 1 放生宠物，可以腾出位置捕捉其他宠物"
,"【/信箱】查看信箱中的所有信件【/查阅 信件编号】全文查阅信箱中的一封信件"
,"【/删除信件 信件编号】删除信箱中的一封信件。【/清空信箱】清空信箱中的所有信件"
,"【/写信 对方用户名 内容】*例如：/写信 黯泣 你好　or　/写信 @黯泣 你好"
,"【/查找 用户名】*例如： /查找 黯　or　/查找 @黯泣"
,"【/查找tc tc】*例如： /查找tc Ancy　or　/查找 Ancy.WWeeo"
,"查找其他用户，机制为部分匹配。如查找【黯泣】，将会找到用户名为【黯泣】【我是黯泣】等用户，但无法找到【黯-泣】，查找tc规则类似。"
,"小粒网站：http://xiaoli.22web.org/  小粒Q群：167575329（群内不定期发放丰富奖励）"
,"【/留言板】查看留言板【/留言 内容】在留言板上留言，可以反馈bug或提供建议，采纳后将有奖励"
,"【/搜索 音乐名】搜索歌曲（来源网易云音乐）【/播放 数字编号】播放搜索结果中的歌曲"
,"【/播放 歌曲名 外链】播放自己提供的外链【/下载 数字编号】获得搜索结果中的歌曲下载链接"
,"商店中的物品价格每天会有最大20%的起伏，可以在低价时买入，高价时卖出赚取差价"
,"商店和集市每次都会刷新物品(只显示7个,DRRR字数限制),找不到所需商品可以多试几次"
,"【/树】查看树木状态，连续早起10天可获得树苗【/浇水】增加树木经验值"
,"【/摘果】收获果子，果子数与树木等级一致，树木3级后每天会结果"
,"树木一天未浇水将会枯萎死去，记得每天浇水哦（每天可重复浇水）"
,"【/献礼】集齐10个一样的果子可兑换100 DRB，大家可以在集市买卖各自需要的果子"
,"【/喝完了】小粒提醒喝水时，喝完水2分钟内回复可获得DRB奖励（15%概率获得【MG-水】）"
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