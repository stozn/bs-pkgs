tNow = () => {
    now = new Date()
    String(now.getHours()).padStart(2, "0")
        + ":" + String(now.getMinutes()).padStart(2, "0")
}

sample = array => array[Math.floor(Math.random() * array.length)]

onTimeDo = (h, m, s, callback) => {
  interval =  (h >= 0 && (24 * 3600)) || (m >= 0 && 3600) || (s >= 0 && 60)
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
    if [1, 10, 15, 20, 25, 30].includes(N) then {   
        drrr.descr(sample(ywz) + "“黩翋砬柆”祭(durarara祭)到啦！开放抽签|献礼功能24小时w  今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night");
        later 1000 drrr.print("🔔🔔🔔 12点的钟声已经响起，一天悄无声息的过去变为昨日，欢迎来到" + M + "月" + N + "日！");
        later 2000 drrr.print("“黩翋砬柆(durarara祭)”开始啦！开放抽签|献礼功能24小时w")
    }
  else  {
        drrr.descr(sample(ywz) + "今天" + ["周日！", "周一", "周二", "周三", "周四", "周五", "周六"][mydate.getDay()] + ".night");
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
    if [1, 10, 15, 20, 25, 30].includes(N)  then {
        drrr.title("喝水|抽签|献礼" + sample(bs))
    }else {
        drrr.title("多喝温水" + sample(bs))
    }
})
//聊天机器人
// http://api.qingyunke.com
chrome.permissions.request({
  origins: ['*'],
}, (ok) => drrr.log("request: " + ok));

chunkString = (size, str) => {
  pos = 0; chunks = []
  while pos < str.length {
    chunks.push(str.substr(pos, size))
    pos += size
  }
  chunks
}

batch_print = msg => {
  buffer = ""; msgs = []
  msg.split("。").forEach(ctx => {
    if ctx.length then
      chunkString(120, ctx + "。").forEach(chk => {
        if (buffer.length + chk.length) > 120
        then { msgs.push(buffer); buffer = chk }
        else { buffer = buffer + chk; }
      })
  })
  if(buffer.length) then msgs.push(buffer)
  msgs.reverse();
  msgs.forEach(m => drrr.print("/me" + m))
}

event [msg,me] (user, cont:'^#') => {
  msg = cont.substr(1)
  url='http://api.qingyunke.com/api.php?key=free&appid=0&msg='
     + encodeURI(msg)
  fetch(url)
    .then(r=>r.json())
    .then(r=>batch_print(("@" + user + " " + r.content).replaceAll('{br}', '\n').replace('菲菲','小粒').replace('傻逼','小可爱')));
}
