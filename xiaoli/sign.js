//用户数据
users = JSON.parse(localStorage["users"])
input = []
seq = 1
API = "https://v1.hitokoto.cn/?encode=json?c=a&c=b&c=d&c=i&c=k"
//干杯
ckd = false
drd = 0
tcn = 0
drk = []
//商店
goods = [{ name: "MG-红包", price: 5 }, { name: "MG-精灵球", price: 30 }, { name: "MG-大师球", price: 150 }, { name: "MG-超级球", price: 60 },
{ name: "MG-召唤球", price: 40 }, { name: "MG-宠物干粮", price: 100 }, { name: "MG-挑战卡", price: 30 }, { name: "MG-树苗", price: 100 },
{ name: "MG-一本满足", price: 10000 }, { name: "MG-水", price: 10 }, { name: "MG-刮刮乐", price: 10 }, { name: "MG-奖券", price: 10 }]
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
pets = [{ name: "白泽CN", type: "基", weakness: "无", status: 1, stage: 1, exp: 66, bao: 66, life: 666, att: 100 },
{ name: "烛龙CN", type: "龙", weakness: "无", status: 1, stage: 1, exp: 30, bao: 70, life: 590, att: 160 },

{ name: "水箭龟波加曼TT", type: "水", weakness: "草", status: 1, stage: 1, exp: 40, bao: 90, life: 270, att: 150 },
{ name: "鲤鱼王吼鲸王TT", type: "水", weakness: "草", status: 1, stage: 1, exp: 20, bao: 50, life: 300, att: 180 },
{ name: "呆呆兽可达鸭TT", type: "水", weakness: "草", status: 1, stage: 1, exp: 20, bao: 70, life: 250, att: 210 },
{ name: "盖欧卡", type: "水", weakness: "草", status: 1, stage: 1, exp: 20, bao: 20, life: 140, att: 120 },
{ name: "急冻鸟GX", type: "水", weakness: "钢", status: 1, stage: 1, exp: 50, bao: 50, life: 170, att: 130 },
{ name: "墨海马", type: "水", weakness: "草", status: 1, stage: 2, exp: 80, bao: 20, life: 100, att: 50, pname: "海刺龙", plife: 150, patt: 100 },
{ name: "阿罗拉穿山鼠", type: "水", weakness: "钢", status: 1, stage: 2, exp: 100, bao: 50, life: 60, att: 40, pname: "阿罗拉穿山王", plife: 110, patt: 90 },
{ name: "呆呆兽", type: "水", weakness: "草", status: 1, stage: 2, exp: 90, bao: 50, life: 70, att: 40, pname: "呆呆王", plife: 120, patt: 90 },
{ name: "鲤鱼王", type: "水", weakness: "电", status: 1, stage: 2, exp: 0, bao: 30, life: 200, att: 20, pname: "暴鲤龙", plife: 200, patt: 120 },
{ name: "呱呱泡蛙", type: "水", weakness: "草", status: 1, stage: 3, exp: 100, bao: 20, life: 100, att: 30, pname: "呱头蛙", plife: 120, patt: 60, ppname: "甲贺忍蛙GX", pplife: 300, ppatt: 210 },

{ name: "双雷丘TT", type: "电", weakness: "斗", status: 1, stage: 1, exp: 40, bao: 90, life: 260, att: 150 },
{ name: "皮卡丘捷克罗姆TT", type: "电", weakness: "斗", status: 1, stage: 1, exp: 80, bao: 90, life: 240, att: 150 },
{ name: "闪电鸟", type: "电", weakness: "电", status: 1, stage: 1, exp: 50, bao: 60, life: 110, att: 80 },
{ name: "雷公", type: "电", weakness: "电", status: 1, stage: 1, exp: 20, bao: 50, life: 150, att: 80 },
{ name: "帕奇利兹", type: "电", weakness: "斗", status: 1, stage: 1, exp: 100, bao: 40, life: 110, att: 40 },
{ name: "电飞鼠", type: "电", weakness: "电", status: 1, stage: 1, exp: 40, bao: 90, life: 100, att: 70 },
{ name: "皮卡丘", type: "电", weakness: "斗", status: 1, stage: 2, exp: 100, bao: 30, life: 100, att: 50, pname: "雷丘", plife: 100, patt: 150 },
{ name: "咩利羊", type: "电", weakness: "斗", status: 1, stage: 3, exp: 80, bao: 20, life: 100, att: 50, pname: "茸茸羊", plife: 150, patt: 50, ppname: "电龙", pplife: 200, ppatt: 200 },
{ name: "霹雳电球", type: "电", weakness: "斗", status: 1, stage: 2, exp: 100, bao: 90, life: 10, att: 50, pname: "顽皮雷弹", plife: 10, patt: 150 },
{ name: "阿罗拉小拳石", type: "电", weakness: "斗", status: 1, stage: 3, exp: 100, bao: 70, life: 60, att: 20, pname: "阿罗拉隆隆石", plife: 100, patt: 30, ppname: "阿罗拉隆隆岩", pplife: 160, ppatt: 170 },
{ name: "强颚鸡母虫", type: "电", weakness: "斗", status: 1, stage: 3, exp: 100, bao: 10, life: 100, att: 40, pname: "虫电宝", plife: 100, patt: 90, ppname: "锹农炮虫GX", pplife: 200, ppatt: 190 },

{ name: "索&露TT", type: "超", weakness: "超", status: 1, stage: 1, exp: 0, bao: 50, life: 270, att: 230 },
{ name: "超梦梦幻TT", type: "超", weakness: "超", status: 1, stage: 1, exp: 10, bao: 70, life: 270, att: 200 },
{ name: "日伊布&代TT", type: "超", weakness: "超", status: 1, stage: 1, exp: 40, bao: 60, life: 260, att: 190 },
{ name: "双臭臭泥TT", type: "超", weakness: "超", status: 1, stage: 1, exp: 70, bao: 90, life: 270, att: 120 },
{ name: "朽木妖黑夜魔灵TT", type: "超", weakness: "恶", status: 1, stage: 1, exp: 50, bao: 80, life: 270, att: 150 },
{ name: "阿罗拉臭泥", type: "超", weakness: "超", status: 1, stage: 2, exp: 80, bao: 20, life: 100, att: 50, pname: "阿罗拉臭臭泥", plife: 120, patt: 130 },
{ name: "耿鬼秘拟丘TT", type: "超", weakness: "超", status: 1, stage: 1, exp: 50, bao: 80, life: 180, att: 240 },
{ name: "骑拉蒂纳", type: "超", weakness: "恶", status: 1, stage: 1, exp: 30, bao: 30, life: 130, att: 130 },
{ name: "迷拟丘", type: "超", weakness: "无", status: 1, stage: 1, exp: 70, bao: 40, life: 100, att: 90 },
{ name: "卡噗·蝶蝶", type: "超", weakness: "超", status: 1, stage: 1, exp: 70, bao: 50, life: 110, att: 70 },
{ name: "超梦GX", type: "超", weakness: "超", status: 1, stage: 1, exp: 40, bao: 30, life: 140, att: 200 },
{ name: "好坏星", type: "超", weakness: "超", status: 1, stage: 2, exp: 60, bao: 90, life: 40, att: 60, pname: "超坏星GX", plife: 160, patt: 140 },

{ name: "玛夏多怪力TT", type: "斗", weakness: "超", status: 1, stage: 1, exp: 40, bao: 80, life: 270, att: 160 },
{ name: "小小象", type: "斗", weakness: "草", status: 1, stage: 2, exp: 100, bao: 40, life: 70, att: 40, pname: "顿甲", plife: 130, patt: 90 },
{ name: "岩狗狗", type: "斗", weakness: "草", status: 1, stage: 2, exp: 90, bao: 10, life: 100, att: 50, pname: "鬃岩狼人GX", plife: 200, patt: 150 },
{ name: "投掷猴", type: "斗", weakness: "超", status: 1, stage: 1, exp: 80, bao: 0, life: 110, att: 110 },
{ name: "圆陆鲨", type: "斗", weakness: "草", status: 1, stage: 3, exp: 100, bao: 30, life: 50, att: 70, pname: "尖牙陆鲨", plife: 80, patt: 90, ppname: "烈咬陆鲨", pplife: 150, ppatt: 220 },
{ name: "利欧路", type: "斗", weakness: "草", status: 1, stage: 3, exp: 0, bao: 80, life: 100, att: 70, pname: "路卡利欧", plife: 110, patt: 110, ppname: "路卡利欧GX", pplife: 210, ppatt: 210 },
{ name: "爆肌蚊", type: "斗", weakness: "超", status: 1, stage: 1, exp: 80, bao: 20, life: 120, att: 80 },
{ name: "爆肌蚊GX", type: "斗", weakness: "超", status: 1, stage: 1, exp: 60, bao: 10, life: 170, att: 150 },
{ name: "固拉多", type: "斗", weakness: "草", status: 1, stage: 1, exp: 20, bao: 30, life: 130, att: 130 },
{ name: "卡拉卡拉", type: "斗", weakness: "草", status: 1, stage: 1, exp: 70, bao: 30, life: 90, att: 60 },

{ name: "月伊布&达TT", type: "恶", weakness: "超", status: 1, stage: 1, exp: 60, bao: 70, life: 270, att: 150 },
{ name: "Mega勾魂眼&班TT", type: "恶", weakness: "斗", status: 1, stage: 1, exp: 40, bao: 20, life: 280, att: 210 },
{ name: "甲贺忍蛙索罗亚克TT", type: "恶", weakness: "斗", status: 1, stage: 1, exp: 50, bao: 50, life: 250, att: 200 },
{ name: "达克莱伊", type: "恶", weakness: "斗", status: 1, stage: 1, exp: 20, bao: 20, life: 160, att: 120 },
{ name: "阿罗拉臭泥", type: "恶", weakness: "斗", status: 1, stage: 3, exp: 100, bao: 60, life: 70, att: 20, pname: "阿罗拉臭臭泥", plife: 70, patt: 70, ppname: "阿罗拉臭臭泥GX", pplife: 220, ppatt: 220 },
{ name: "阿罗拉喵喵", type: "恶", weakness: "斗", status: 1, stage: 2, exp: 70, bao: 50, life: 60, att: 70, pname: "阿罗拉猫老大", plife: 90, patt: 140 },
{ name: "阿罗拉小拉达", type: "恶", weakness: "斗", status: 1, stage: 3, exp: 100, bao: 20, life: 110, att: 20, pname: "阿罗拉拉达", plife: 120, patt: 60, ppname: "阿罗拉拉达GX", pplife: 250, ppatt: 230 },
{ name: "扭拉", type: "恶", weakness: "斗", status: 1, stage: 2, exp: 70, bao: 30, life: 120, att: 30, pname: "玛扭拉", plife: 120, patt: 130 },
{ name: "阿伯梭鲁", type: "恶", weakness: "斗", status: 1, stage: 1, exp: 80, bao: 20, life: 100, att: 100 },
{ name: "胡帕", type: "恶", weakness: "斗", status: 2, stage: 1, exp: 60, bao: 20, life: 120, att: 50, pname: "胡帕GX", plife: 210, patt: 160 },
{ name: "索罗亚", type: "恶", weakness: "斗", status: 1, stage: 2, exp: 70, bao: 50, life: 70, att: 60, pname: "索罗亚克GX", plife: 210, patt: 130 },

{ name: "喷火龙长尾火狐TT", type: "火", weakness: "水", status: 1, stage: 1, exp: 20, bao: 80, life: 270, att: 180 },
{ name: "莱希拉姆喷火龙TT", type: "火", weakness: "水", status: 1, stage: 1, exp: 30, bao: 20, life: 270, att: 230 },
{ name: "火焰鸟", type: "火", weakness: "水", status: 1, stage: 1, exp: 30, bao: 20, life: 120, att: 130 },
{ name: "火斑喵", type: "火", weakness: "水", status: 1, stage: 3, exp: 60, bao: 10, life: 130, att: 50, pname: "炎热喵", plife: 150, patt: 80, ppname: "炽焰咆哮虎GX", pplife: 250, ppatt: 280 },
{ name: "小火龙", type: "火", weakness: "水", status: 1, stage: 3, exp: 50, bao: 50, life: 70, att: 40, pname: "火恐龙", plife: 80, patt: 80, ppname: "喷火龙GX", pplife: 250, ppatt: 300 },
{ name: "火稚鸡", type: "火", weakness: "水", status: 1, stage: 3, exp: 100, bao: 50, life: 50, att: 50, pname: "力壮鸡", plife: 80, patt: 70, ppname: "烈焰鸡GX", pplife: 200, ppatt: 250 },
{ name: "火球鼠", type: "火", weakness: "水", status: 1, stage: 3, exp: 100, bao: 30, life: 110, att: 10, pname: "火岩鼠", plife: 110, patt: 60, ppname: "火爆兽", pplife: 160, ppatt: 210 },
{ name: "小火焰猴", type: "火", weakness: "水", status: 1, stage: 3, exp: 100, bao: 80, life: 50, att: 20, pname: "猛火猴", plife: 80, patt: 40, ppname: "烈焰猴", pplife: 130, ppatt: 190 },
{ name: "火狐狸", type: "火", weakness: "水", status: 1, stage: 3, exp: 100, bao: 20, life: 60, att: 70, pname: "长尾火狐", plife: 110, patt: 70, ppname: "妖火红狐", pplife: 150, ppatt: 230 },
{ name: "阿罗拉嘎啦嘎啦", type: "火", weakness: "水", status: 1, stage: 1, exp: 50, bao: 30, life: 120, att: 100 },
{ name: "比克提尼", type: "火", weakness: "水", status: 1, stage: 1, exp: 100, bao: 30, life: 130, att: 60 },
{ name: "莱希拉姆GX", type: "火", weakness: "水", status: 1, stage: 1, exp: 50, bao: 20, life: 180, att: 150 },
{ name: "熔岩虫", type: "火", weakness: "水", status: 1, stage: 2, exp: 60, bao: 30, life: 90, att: 70, pname: "熔岩蜗牛", plife: 100, patt: 160 },

{ name: "路卡利欧美录梅塔TT", type: "钢", weakness: "火", status: 1, stage: 1, exp: 60, bao: 80, life: 260, att: 150 },
{ name: "帝牙卢卡GX", type: "钢", weakness: "火", status: 1, stage: 1, exp: 70, bao: 30, life: 180, att: 150 },
{ name: "科斯莫古", type: "钢", weakness: "火", status: 1, stage: 3, exp: 100, bao: 50, life: 60, att: 40, pname: "科斯莫姆", plife: 90, patt: 60, ppname: "索尔迦雷欧GX", pplife: 200, ppatt: 270 },
{ name: "阿罗拉地鼠", type: "钢", weakness: "火", status: 1, stage: 2, exp: 60, bao: 50, life: 50, att: 90, pname: "阿罗拉三地鼠", plife: 100, patt: 140 },
{ name: "小磁怪", type: "钢", weakness: "火", status: 1, stage: 3, exp: 60, bao: 50, life: 80, att: 60, pname: "三合一磁怪", plife: 90, patt: 100, ppname: "自爆磁怪", pplife: 150, ppatt: 240 },
{ name: "盔甲鸟", type: "钢", weakness: "电", status: 1, stage: 1, exp: 80, bao: 20, life: 110, att: 90 },
{ name: "铁哑铃", type: "钢", weakness: "火", status: 1, stage: 3, exp: 60, bao: 40, life: 60, att: 90, pname: "金属怪", plife: 90, patt: 110, ppname: "巨金怪", pplife: 300, ppatt: 110 },
{ name: "基拉祈", type: "钢", weakness: "火", status: 1, stage: 1, exp: 77, bao: 77, life: 177, att: 77 },


{ name: "Mega长耳兔胖丁TT", type: "基", weakness: "斗", status: 1, stage: 1, exp: 60, bao: 50, life: 240, att: 200 },
{ name: "火&电&冰鸟TT", type: "基", weakness: "电", status: 1, stage: 1, exp: 0, bao: 30, life: 310, att: 210 },
{ name: "伊布卡比兽TT", type: "基", weakness: "斗", status: 1, stage: 1, exp: 50, bao: 20, life: 270, att: 210 },
{ name: "洛奇亚GX", type: "基", weakness: "电", status: 1, stage: 1, exp: 80, bao: 20, life: 180, att: 170 },
{ name: "凤王", type: "基", weakness: "电", status: 1, stage: 1, exp: 100, bao: 30, life: 130, att: 90 },
{ name: "卡比兽GX", type: "基", weakness: "斗", status: 1, stage: 1, exp: 0, bao: 0, life: 190, att: 210 },
{ name: "吉利蛋", type: "基", weakness: "斗", status: 1, stage: 2, exp: 100, bao: 40, life: 110, att: 40, pname: "幸福蛋", plife: 200, patt: 150 },
{ name: "多边兽", type: "基", weakness: "斗", status: 1, stage: 3, exp: 60, bao: 50, life: 80, att: 60, pname: "多边兽2型", plife: 80, patt: 110, ppname: "多边兽乙型", pplife: 130, ppatt: 270 },
{ name: "小箭雀", type: "基", weakness: "电", status: 1, stage: 3, exp: 90, bao: 50, life: 50, att: 60, pname: "火箭雀", plife: 70, patt: 90, ppname: "烈箭雀", pplife: 170, ppatt: 190 },

{ name: "妙蛙花藤藤蛇TT", type: "草", weakness: "火", status: 1, stage: 1, exp: 80, bao: 40, life: 270, att: 160 },
{ name: "木木枭&椰蛋树TT", type: "草", weakness: "火", status: 1, stage: 1, exp: 40, bao: 40, life: 270, att: 200 },
{ name: "费洛美螂爆肌蚊TT", type: "草", weakness: "火", status: 1, stage: 1, exp: 40, bao: 60, life: 260, att: 190 },
{ name: "时拉比妙蛙花TT", type: "草", weakness: "火", status: 1, stage: 1, exp: 50, bao: 80, life: 270, att: 150 },
{ name: "飞天螳螂", type: "草", weakness: "火", status: 1, stage: 2, exp: 80, bao: 0, life: 70, att: 80, pname: "巨钳螳螂GX", plife: 180, patt: 220 },
{ name: "走路草", type: "草", weakness: "火", status: 1, stage: 3, exp: 100, bao: 70, life: 50, att: 30, pname: "臭臭花", plife: 80, patt: 50, ppname: "霸王花", pplife: 150, ppatt: 190 },
{ name: "蛋蛋", type: "草", weakness: "火", status: 1, stage: 2, exp: 100, bao: 50, life: 40, att: 10, pname: "耶蛋树", plife: 170, patt: 40 },
{ name: "毽子草", type: "草", weakness: "电", status: 1, stage: 3, exp: 100, bao: 80, life: 30, att: 40, pname: "毽子花", plife: 60, patt: 60, ppname: "毽子棉", pplife: 190, ppatt: 140 },
{ name: "木守宫", type: "草", weakness: "火", status: 1, stage: 3, exp: 40, bao: 30, life: 50, att: 130, pname: "森林蜥蜴", plife: 80, patt: 150, ppname: "蜥蜴王", pplife: 150, ppatt: 290 },
{ name: "三蜜蜂", type: "草", weakness: "火", status: 1, stage: 2, exp: 60, bao: 20, life: 80, att: 90, pname: "蜂女王", plife: 130, patt: 150 },
{ name: "樱花宝", type: "草", weakness: "火", status: 1, stage: 2, exp: 100, bao: 50, life: 100, att: 50, pname: "樱花儿", plife: 110, patt: 150 },
{ name: "菊叶草", type: "草", weakness: "火", status: 1, stage: 3, exp: 100, bao: 20, life: 70, att: 60, pname: "月桂叶", plife: 100, patt: 80, ppname: "大竺葵", pplife: 160, ppatt: 230 },

{ name: "莱希拉姆捷克罗姆TT", type: "龙", weakness: "斗", status: 1, stage: 1, exp: 40, bao: 70, life: 270, att: 170 },
{ name: "阿&帝&帕TT", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 30, bao: 90, life: 280, att: 150 },
{ name: "四颚针龙恶食大王TT", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 40, bao: 50, life: 280, att: 180 },
{ name: "烈咬陆鲨骑拉帝纳TT", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 40, bao: 80, life: 270, att: 160 },
{ name: "拉帝亚斯拉帝欧斯TT", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 50, bao: 10, life: 250, att: 240 },
{ name: "裂空座GX", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 80, bao: 40, life: 180, att: 130 },
{ name: "音波龙GX", type: "龙", weakness: "妖", status: 1, stage: 1, exp: 90, bao: 0, life: 220, att: 100 },
{ name: "宝贝龙", type: "龙", weakness: "妖", status: 1, stage: 3, exp: 60, bao: 20, life: 100, att: 70, pname: "甲壳龙", plife: 180, patt: 50, ppname: "暴飞龙", pplife: 180, ppatt: 250 },
{ name: "宝贝龙", type: "龙", weakness: "妖", status: 1, stage: 3, exp: 40, bao: 10, life: 160, att: 40, pname: "甲壳龙", plife: 180, patt: 70, ppname: "暴飞龙GX", pplife: 250, ppatt: 300 },
{ name: "粘粘宝", type: "龙", weakness: "妖", status: 1, stage: 3, exp: 80, bao: 30, life: 40, att: 100, pname: "粘美儿", plife: 70, patt: 120, ppname: "粘美龙", pplife: 160, ppatt: 230 },
{ name: "迷你龙", type: "龙", weakness: "妖", status: 1, stage: 3, exp: 60, bao: 10, life: 60, att: 120, pname: "哈克龙", plife: 120, patt: 110, ppname: "快龙GX", pplife: 200, ppatt: 330 },

{ name: "波&皮&宝TT", type: "妖", weakness: "钢", status: 1, stage: 1, exp: 91, bao: 99, life: 240, att: 120 },
{ name: "沙奈朵仙伊布TT", type: "妖", weakness: "钢", status: 1, stage: 1, exp: 50, bao: 40, life: 260, att: 200 },
{ name: "哲尔尼亚斯GX", type: "妖", weakness: "钢", status: 1, stage: 1, exp: 60, bao: 10, life: 180, att: 150 },
{ name: "迷拟丘GX", type: "妖", weakness: "无", status: 1, stage: 1, exp: 80, bao: 5, life: 170, att: 150 },
{ name: "咚咚鼠", type: "妖", weakness: "无", status: 1, stage: 1, exp: 100, bao: 90, life: 30, att: 70 },
{ name: "拉鲁拉丝", type: "妖", weakness: "钢", status: 1, stage: 3, exp: 60, bao: 40, life: 60, att: 90, pname: "奇鲁利安", plife: 80, patt: 120, ppname: "沙奈朵", pplife: 220, ppatt: 220 },
{ name: "拉鲁拉丝", type: "妖", weakness: "钢", status: 1, stage: 3, exp: 60, bao: 40, life: 60, att: 90, pname: "奇鲁利安", plife: 70, patt: 130, ppname: "沙奈朵GX", pplife: 240, ppatt: 280 },
{ name: "木棉球", type: "妖", weakness: "钢", status: 1, stage: 2, exp: 100, bao: 20, life: 100, att: 30, pname: "风妖精", plife: 100, patt: 130 },
{ name: "玛力露", type: "妖", weakness: "钢", status: 1, stage: 2, exp: 0, bao: 40, life: 70, att: 140, pname: "玛力露丽", plife: 170, patt: 140 },
]
apet = []
ybt = []
afg = 0
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
admins = ["OG0OPFxOFw", "Ancy.WWeeo", ".bLVj9fdOM", "unica/qOLU", "YtIMnsXOBE", "vJEPoEPHsA", "/G8YJRcCos"]   //设置管理员
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

onTimeDo(6, 1, 0, () => {
    for x of goods {
        if Math.random() < 0.5 then  x.price = Math.round(x.price * (0.8 + Math.random() * 0.2))
          else x.price = Math.round(x.price / (0.8 + Math.random() * 0.2))
    }
    for  x of users {
        if x.check == true then  x.day = 0
        if x.live > 0 then x.live++
        else if !(x.live == -1) then x.live = 1
        if (x.trc == true) then {
            x.tree.water -= 4
            if x.tree.water < 0 then x.tree.water = 0
            x.tree.level = chcke(x.tree.water)[0]
        }else if (x.tree.level > 2) then x.tree.fruit = x.tree.level
        x.check = true
        x.checkb = true
        x.trc == true
    }
    seq = 1
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
    drrr.dm(user, "如需详细指引，请查看小粒帮助文档\n https://docs.qq.com/sheet/DVkVCWFFueUVFcXNB \n小粒Q群：167575329", "https://docs.qq.com/sheet/DVkVCWFFueUVFcXNB")
    users.sort((a, b) => a.uid - b.uid)
    duid = users[users.length - 1].uid + 1
    users.push({ uid: duid, name: user, tc: tc, live: 1, coin: 0, check: true, day: 0, dayz: 0, drink: 0, tree: 0, trc: true, bag: [], pet: [], checkb: true, win: 0, letters: [], newl: false })
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
else if cont== "/干杯榜" then drrr.print("干杯榜" + sort("drink"))
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
        if seq == 1 then yb+= 30
        if seq == 2 then yb+= 20
        if seq == 3 then yb+= 10
        users[n].coin += yb
        dh = "/me @" + users[n].name + " 签到成功，DRB+" + yb + "，现在共有" + users[n].coin + " DRB，今天您是第" + seq + "个签到的，已连续签到" + users[n].day + "天"
        dt = new Date()
        if (dt.getHours() == 6) then {  //6:00-7:00
            users[n].coin += yb
            users[n].dayz++
            dh = "/me @" + users[n].name + " 早起成功，DRB+" + yb + "×2，现在共有" + users[n].coin + " DRB，今天您是第" + seq + "个签到的，已连续签到" + users[n].day + "天，共已早起" + users[n].dayz + "天"
            if (users[n].dayz == 5 && users[n].tree == 0) then {
                dh += "，恭喜您获得一棵树苗！"
                users[n].tree = { level: 1, water: 0, fruit: 0 }
            }
        }
        seq++
        drrr.print(dh)
        $.get(API, d => {
            hitokoto = d.hitokoto
            from = d.from
            drrr.print("一言:" + hitokoto + "  ——" + from)
        })
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
  else                  { [5, 0] }         //5级 30-∞
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
        p = " 您的树:\n等级：" + users[n].tree.level + "级\t湿润度：" + users[n].tree.water + "\t果子：" + users[n].tree.fruit + "个"
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
        drrr.print("/me @" + users[n].name + " 当前您的树上没果子，无法摘果。")
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
        drrr.print("/me @" + users[n].name + " 您成功摘下" + nm + "个果子，分别是【" + ft + "】请浇水保持等级，明天再来摘果")

    }
}
event[msg, me, dm](user, cont: "^/献礼") => {
    n = checku(user)
    mydate = new Date()
    N = mydate.getDate()
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    }else if (N == 1 || N == 5 || N == 15 || N == 10 || N == 20 || N == 25 || N == 30) then {  
        gd = users[n].bag.findIndex(x => fruits.some(y => y == x.name) && x.amount > 9)
        if gd>= 0 then {
            gift = users[n].bag[gd].name
            if users[n].bag[gd].amount == 10 then users[n].bag.splice(gd, 1)
            else users[n].bag[gd].amount -= 10
            c = rand(80, 120)
            users[n].coin += c
            drrr.print("/me @" + user + " 成功给黩翋砬柆神献礼10个【" + gift + "】，神赐给你" + c + " DRB，目前共有" + users[n].coin + " DRB")
        }else drrr.print("/me @" + user + " 您的背包中没有集齐10个相同的果子，无法献礼")
    }else drrr.print("@" + user + " 灰常抱歉。今天献礼功能不开放哦 \n※【黩翋砬柆神社】开放时间为：\n每月1、5、10、15、20、25、30开放")
}
//整点奖励
event[msg, me, dm](user, cont: "^/领取奖励") => {
    yb = rand(8, 12)
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
        pprint(k)
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
sample = array => array[Math.floor(Math.random() * array.length)]
cpet = () => {
    pet = JSON.parse(JSON.stringify(sample(pets)))
    apet.push(pet)
    drrr.print("/me 发现一只【" + pet.type + "】属性宝可梦，快来捕捉吧")
    later 15* 60 * 1000 {
        n = apet.findIndex(x => x.name == pet.name)
        if n>= 0 then apet.splice(n, 1)
    }
}
timer 20* 60 * 1000{
    t = Math.random()
    if t < 0.1 then {
        cpet()
        cpet()
        cpet()
    }else if t < 0.3 then {
        cpet()
        cpet()
    }else if t < 0.6 then {
        cpet()
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
    } else if users[n].pet.length == 6 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您已拥有6只宠物，已达容量上限，可放生宠物继续捕捉")
    } else if !users[n].bag.some(x => x.name == "MG-精灵球") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有精灵球，请前往商店购买")
    }else {
        use(n, "MG-精灵球")
        i = rand(0, apet.length - 1)
        drrr.print("/me @" + users[n].name + " 正在努力捕捉中...")
        k = Math.random() < 0.5  //成功概率0.5
        if !k || (apet.length - 1) < i then {
            later 5* 1000 drrr.print("/me @" + users[n].name + " 哎呀，失手了")
        }else {
            m = apet[i].name
            if users[n].pet.some(a => a.name == m) then{
                add(n, "MG-召唤球", 1)
                later 5* 1000 drrr.print("/me @" + users[n].name + " 又捕获一只【" + m + "】，将它放生了，获得一个召唤球")
            }else{
                users[n].pet.push(apet[i])
                later 5* 1000 drrr.print("/me @" + users[n].name + " 成功捕获一只【" + m + "】")
            }
            apet.splice(i, 1)
        }
    }
}
event[msg, me, dm](user, cont: "^/大师捕捉\\s+\\d") => {
    i = parseInt(onekey("/大师捕捉", cont)) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if apet.length == 0 then {
        drrr.print("/me @" + users[n].name + " 现在还没有宠物出没哦")
    } else if users[n].pet.length == 6 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您已拥有6只宠物，已达容量上限，可放生宠物继续捕捉")
    } else if !users[n].bag.some(x => x.name == "MG-大师球") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有大师球，请前往商店购买")
    }  else if i> (apet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        use(n, "MG-大师球")
        drrr.print("/me @" + users[n].name + " 正在努力捕捉中...")
        k = Math.random() < 1  //成功概率1
        if !k || (apet.length - 1) < i then {
            later 5* 1000 drrr.print("/me @" + users[n].name + " 哎呀，失手了")
        }else {
            m = apet[i].name
            if users[n].pet.some(a => a.name == m) then{
                add(n, "MG-召唤球", 1)
                later 5* 1000 drrr.print("/me @" + users[n].name + " 又捕获一只【" + m + "】，将它放生了，获得一个召唤球")
            }else{
                users[n].pet.push(apet[i])
                later 5* 1000 drrr.print("/me @" + users[n].name + " 成功捕获一只【" + m + "】")
            }
            apet.splice(i, 1)
        }
    }
}
event[msg, me, dm](user, cont: "^/超级捕捉\\s+\\d") => {
    i = parseInt(onekey("/超级捕捉", cont)) - 1
    n = checku(user)
    if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if apet.length == 0 then {
        drrr.print("/me @" + users[n].name + " 现在还没有宠物出没哦")
    } else if users[n].pet.length == 6 then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您已拥有6只宠物，已达容量上限，可放生宠物继续捕捉")
    } else if !users[n].bag.some(x => x.name == "MG-超级球") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有超级球，请前往商店购买")
    }  else if i> (apet.length - 1) then {
        drrr.print("/me @" + users[n].name + " 输入的序号不存在")
    } else {
        use(n, "MG-超级球")
        drrr.print("/me @" + users[n].name + " 正在努力捕捉中...")
        k = Math.random() < 0.8  //成功概率0.8
        if !k || (apet.length - 1) < i then {
            later 5* 1000 drrr.print("/me @" + users[n].name + " 哎呀，失手了")
        }else {
            m = apet[i].name
            if users[n].pet.some(a => a.name == m) then{
                add(n, "MG-召唤球", 1)
                later 5* 1000 drrr.print("/me @" + users[n].name + " 又捕获一只【" + m + "】，将它放生了，获得一个召唤球")
            }else{
                users[n].pet.push(apet[i])
                later 5* 1000 drrr.print("/me @" + users[n].name + " 成功捕获一只【" + m + "】")
            }
            apet.splice(i, 1)
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
        users[n].pet[p].exp += 10
        drrr.print("/me @" + users[n].name + " 您已投喂了【" + name + "】一份宠物干粮，【" + name + "】增加10亲密度")
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
        drrr.print("/me @" + users[n].name + " 您投喂了【" + name + "】一本满足，【" + name + "】增加100亲密度")
    }
}
event[msg, me, dm](user, cont: "^/观察") => {
    if apet.length == 0 then {
        drrr.print("/me 现在没有宠物出没")
    }else{
        p = apet.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + ".【" + x.type + "】属性宝可梦"
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
            a = a + "\n" + (y + 1) + ".【" + x.name + "】\t属性：" + x.type + "\t亲密度：" + x.exp
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
        p = "的宠物：\nNO." + c[1] + " " + users[n].pet[i].name + "\n属性：" + users[n].pet[i].type + "\n弱点：" + users[n].pet[i].weakness
            + "\n亲密度：" + users[n].pet[i].exp + "\n暴击率：" + users[n].pet[i].bao + "\n【1】" + users[n].pet[i].name + " 生命：" + users[n].pet[i].life + "\t攻击：" + users[n].pet[i].att
        if (users[n].pet[i].stage > 1) then p += "\n【2】" + users[n].pet[i].pname + " 生命：" + users[n].pet[i].plife + " 攻击：" + users[n].pet[i].patt
        if (users[n].pet[i].stage > 2) then p += "\n【3】" + users[n].pet[i].ppname + " 生命：" + users[n].pet[i].pplife + " 攻击：" + users[n].pet[i].ppatt
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
    } else if afg then {
        drrr.print("/me @" + users[n].name + " 一场挑战正在进行中，请等待其结束")
    } else if (m == (-1)) then {
        drrr.dm(user, "@" + users[n].name + " 您挑战的用户【" + tou + "】不存在，请检查输入是否为对方【用户名】（可使用查找功能）")
    } else if (users[m].pet.length == 0) then {
        drrr.dm(user, "@" + users[n].name + " 您挑战的用户【" + tou + "】还没有宠物，无法挑战")
    } else if (users[n].pet.length == 0) then {
        drrr.dm(user, "@" + users[n].name + " 您还没有宠物，无法挑战")
    }else if (users[n].checkb || users[n].bag.some(x => x.name == "MG-挑战卡")) then {
        if (!users[n].checkb) then {
            use(n, "MG-挑战卡")
            drrr.print("/me @" + users[n].name + " 您已使用了一张挑战卡")
        }
        fen = 6 //****抢6分*****
        afg = 1
        users[n].checkb = false
        ad = rand(12, 18)
        ae = rand(1, 3)
        zdm = []
        f = rand(1, 2)     //先手随机
        xsc = 0
        ysc = 0
        xps = users[n].pet.length
        yps = users[m].pet.length
        xd = []
        yd = []
        xf = 1
        yf = 1
        if xps> 1 then xd = Array.from({ length: xps - 1 }, (v, k) => k + 1)
        if yps> 1 then yd = Array.from({ length: yps - 1 }, (v, k) => k + 1)
        x = 0
        y = 0
        xn = users[n].name                             //攻方
        yn = users[m].name                             //守方
        drrr.print("/me @" + xn + " 对 @" + yn + " 的挑战开始。")
        j = 1
        xl = users[n].pet[x].life                      //攻方生命值
        yl = users[m].pet[y].life                      //守方生命值
        while (xf && yf && xsc < fen && ysc < fen) {
            flag = 1
            xt = users[n].pet[x].type                     //属性
            yt = users[m].pet[y].type
            xw = users[n].pet[x].weakness                    //属性
            yw = users[m].pet[y].weakness
            xp = users[n].pet[x].name         //攻方宠物名
            yp = users[m].pet[y].name         //守方宠物名
            xa = users[n].pet[x].att                       //攻方攻击力
            ya = users[m].pet[y].att                       //守方攻击力
            xe = users[n].pet[x].exp                       //亲密度
            ye = users[m].pet[y].exp

            if users[n].pet[x].status == 2 then{
                xp = users[n].pet[x].pname
                xa = users[n].pet[x].patt
            }else if users[n].pet[x].status == 3 then{
                xp = users[n].pet[x].ppname
                xa = users[n].pet[x].ppatt
            }

            if users[m].pet[y].status == 2 then{
                yp = users[m].pet[y].pname
                ya = users[m].pet[y].patt
            }else if users[m].pet[y].status == 3 then{
                yp = users[m].pet[y].ppname
                ya = users[m].pet[y].ppatt
            }
            xb = users[n].pet[x].bao
            yb = users[m].pet[y].bao
            zdm.push("第" + j + "轮\n@" + xn + "\t派出了【" + xp + "】（" + xt + "）\n@" + yn + "\t派出了【" + yp + "】（" + yt + "）")
            i = 1
            v = 0
            ans = ""

            while (v < 4) {
                e = m
                nm = yn
                q = rand(0, yd.length - 1)
                p = y
                if v < 2 then {
                    e = n
                    nm = xn
                    q = rand(0, xd.length - 1)
                    p = x
                }

                if q== 0 then{
                    if users[e].pet[p].stage == users[e].pet[p].status then{
                        name = users[e].pet[p].name
                        if users[e].pet[p].stage == 2 then name = users[e].pet[p].pname
                        if users[e].pet[p].stage == 3 then name = users[e].pet[p].ppname
                        ans += "@" + nm + " 的【" + name + "】无法进化\n"
                    }else{
                        if e == n then{
                            xp = users[e].pet[x].pname
                            xl = users[e].pet[x].plife + xl - users[e].pet[x].life
                            xa = users[e].pet[x].patt
                            if users[e].pet[x].status == 2 then {
                                xp = users[e].pet[x].ppname
                                xl = users[e].pet[x].pplife + xl - users[e].pet[x].plife
                                xa = users[e].pet[x].ppatt
                                ans += "@" + nm + " 的【" + users[e].pet[x].pname + "】进化成【" + xp + "】\n"
                            }else{
                                ans += "@" + nm + " 的【" + users[e].pet[x].name + "】进化成【" + xp + "】\n"
                            }
                            users[e].pet[x].status++
                        }else{
                            yp = users[e].pet[y].pname
                            yl = users[e].pet[y].plife + yl - users[e].pet[y].life
                            ya = users[e].pet[y].patt
                            if users[e].pet[y].status == 2 then {
                                yp = users[e].pet[y].ppname
                                yl = users[e].pet[y].pplife + yl - users[e].pet[y].plife
                                ya = users[e].pet[y].ppatt
                                ans += "@" + nm + " 的【" + users[e].pet[y].pname + "】进化成【" + yp + "】\n"
                            }else{
                                ans += "@" + nm + " 的【" + users[e].pet[y].name + "】进化成【" + yp + "】\n"
                            }
                            users[e].pet[y].status++
                        }
                    }
                }else{
                    if e == n then q= xd[q--]
                  else q = yd[q - 1]
                    if users[e].pet[q].stage == users[e].pet[q].status then{
                        name = users[e].pet[q].name
                        if users[e].pet[q].stage == 2 then name = users[e].pet[q].pname
                        if users[e].pet[q].stage == 3 then name = users[e].pet[q].ppname
                        ans += "@" + nm + " 的【" + name + "】无法进化\n"
                    }else{
                        users[e].pet[q].status++
                        if users[e].pet[q].status == 3 then {
                            ans += "@" + nm + " 的【" + users[e].pet[q].pname + "】进化成【" + users[e].pet[q].ppname + "】\n"
                        }else{
                            ans += "@" + nm + " 的【" + users[e].pet[q].name + "】进化成【" + users[e].pet[q].pname + "】\n"
                        }
                    }
                }

                v++
            }
            zdm.push(ans)
            if xt == false then{
                xl /= 10
                xa /= 10
            }
            if yt == false then{
                yl /= 10
                ya /= 10
            }
            while (flag) {
                xs = xa
                ys = ya
                xr = " ⇓"
                yr = " ⇑"
                if (rand(0, 99) < xb) then {
                    xs *= 2
                    xr += "⇓"
                }
                if (rand(0, 99) < yb) then {
                    ys *= 2
                    yr += "⇑"
                }
                if (yw == xt) then {
                    xs *= 2
                    xr += "⇓"
                }
                if (xw == yt) then {
                    ys *= 2
                    yr += "⇑"
                }

                if f== 1 then{
                    if xe< 100 && rand(1, 100) > 80 then{
                        zdm.push("第" + j + "轮 回合" + i + "\n" + xp + "\t" + xl + "\n　　===\n" + yp + "\t" + yl)
                    }else{
                        yl -= xs
                        zdm.push("第" + j + "轮 回合" + i + "\n" + xp + "\t" + xl + "\n　　" + xr + "\n" + yp + "\t" + yl + "(-" + xs + ")")
                    }
                    if yl<= 0 then{
                        flag = 0
                        sc = 1
                        if yp.endsWith("GX") then sc = 2
                        else if yp.endsWith("CN") || yp.endsWith("TT") then sc = 3
                        xsc += sc
                        tt = ""
                        if xp.endsWith("TT") then {
                            xl += 100
                            tt = "\n【" + xp + "】恢复100点生命"
                        }
                        zdm.push("【" + yp + "】倒下了" + tt + "\n@" + xn + " 获得" + sc + "分\n目前比分" + xsc + " : " + ysc)
                        if yd.length == 0 then yf= 0
                        mess(yd)
                        y = yd.pop()
                        yl = users[m].pet[y].life
                        if users[m].pet[y].status == 2 then{
                            yl = users[m].pet[y].plife
                        }else if users[m].pet[y].status == 3 then{
                            yl = users[m].pet[y].pplife
                        }
                        f = 2
                    }else{
                        if ye< 100 && rand(1, 100) > 80 then{
                            zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　===\n" + yp + "\t" + yl)
                        }else{
                            xl -= ys
                            zdm.push("　－回合" + i + "－\n " + xp + "\t" + xl + "(-" + ys + ")" + "\n　　" + yr + "\n" + yp + "\t" + yl)
                        }
                        if xl<= 0 then{
                            flag = 0
                            sc = 1
                            if xp.endsWith("GX") then sc = 2
                            else if xp.endsWith("CN") || xp.endsWith("TT") then sc = 3
                            ysc += sc
                            tt = ""
                            if yp.endsWith("TT") then {
                                yl += 100
                                tt = "\n【" + yp + "】恢复100点生命"
                            }
                            zdm.push("【" + xp + "】倒下了" + tt + "\n@" + yn + " 获得" + sc + "分\n目前比分" + xsc + " : " + ysc)
                            if xd.length == 0 then xf= 0
                            mess(xd)
                            x = xd.pop()
                            xl = users[n].pet[x].life
                            if users[n].pet[x].status == 2 then{
                                xl = users[n].pet[x].plife
                            }else if users[n].pet[x].status == 3 then{
                                xl = users[n].pet[x].pplife
                            }
                            f = 1
                        }
                    }
                }else {
                    if ye< 100 && rand(1, 100) > 80 then{
                        zdm.push("第" + j + "轮 回合" + i + "\n" + xp + "\t" + xl + "\n　　===\n" + yp + "\t" + yl)
                    }else{
                        xl -= ys
                        zdm.push("第" + j + "轮 回合" + i + "\n" + xp + "\t" + xl + "(-" + ys + ")" + "\n　　" + yr + "\n" + yp + "\t" + yl)
                    }
                    if xl<= 0 then{
                        flag = 0
                        sc = 1
                        if xp.endsWith("GX") then sc = 2
                        else if xp.endsWith("CN") || xp.endsWith("TT") then sc = 3
                        ysc += sc
                        tt = ""
                        if yp.endsWith("TT") then {
                            yl += 100
                            tt = "\n【" + yp + "】恢复100点生命"
                        }
                        zdm.push("【" + xp + "】倒下了" + tt + "\n@" + yn + " 获得" + sc + "分\n目前比分" + xsc + " : " + ysc)
                        if xd.length == 0 then xf= 0
                        mess(xd)
                        x = xd.pop()
                        xl = users[n].pet[x].life
                        if users[n].pet[x].status == 2 then{
                            xl = users[n].pet[x].plife
                        }else if users[n].pet[x].status == 3 then{
                            xl = users[n].pet[x].pplife
                        }
                        f = 1
                    }else {
                        if xe< 100 && rand(1, 100) > 80 then{
                            zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　===\n" + yp + "\t" + yl)
                        }else{
                            yl -= xs
                            zdm.push("　－回合" + i + "－\n" + xp + "\t" + xl + "\n　　" + xr + "\n" + yp + "\t" + yl + "(-" + xs + ")")
                        }
                        if yl<= 0 then{
                            flag = 0
                            sc = 1
                            if yp.endsWith("GX") then sc = 2
                            else if yp.endsWith("CN") || yp.endsWith("TT") then sc = 3
                            xsc += sc
                            tt = ""
                            if xp.endsWith("TT") then {
                                xl += 100
                                tt = "\n【" + xp + "】恢复100点生命"
                            }
                            zdm.push("【" + yp + "】 倒下了" + tt + "\n@" + xn + " 获得" + sc + "分\n目前比分" + xsc + " : " + ysc)
                            if yd.length == 0 then yf= 0
                            mess(yd)
                            y = yd.pop()
                            yl = users[m].pet[y].life
                            if users[m].pet[y].status == 2 then{
                                yl = users[m].pet[y].plife
                            }else if users[m].pet[y].status == 3 then{
                                yl = users[m].pet[y].pplife
                            }
                            f = 2
                        }
                    }

                }
                i++
            }
            j++
        }
        t = 0
        while (t < zdm.length) {
            msg = zdm[t]
            later(t + 1) * 4000 drrr.dm(user, msg)
            t++
        }
        later 4* t * 1000 + 5000{
            if (xf == 0 || ysc >= fen) then{
                users[m].win++
                users[m].coin += ad
                users[m].pet.forEach(x => x.exp += ae)
                drrr.print("/me 恭喜@" + yn + " 取得胜利\t奖励【💰️+" + ad + "|💗+" + ae + "|🏆+1】\t共有 " + users[m].win + "🏆")
                ybt.unshift(xn + "➨" + yn + "\t" + xsc + " : " + ysc + "\t败")
                if ybt.length == 7 then ybt.splice(6, 1)
            }else{
                users[n].win++
                users[n].coin += ad
                users[n].pet.forEach(x => x.exp += ae)
                drrr.print("/me 恭喜@" + xn + " 取得胜利\t奖励【💰️+" + ad + "|💗+" + ae + "|🏆+1】\t共有 " + users[n].win + "🏆")
                ybt.unshift(xn + "➨" + yn + "\t" + xsc + " : " + ysc + "\t胜")
                if ybt.length == 7 then ybt.splice(6, 1)
            }
            users[n].pet.forEach(x => x.status = 1)
            users[m].pet.forEach(x => x.status = 1)
            afg = 0
        }
    } else{
        drrr.print("/me @" + users[n].name + " 很抱歉，您今天已经挑战过一次了，并且您的背包中没有挑战卡，无法再次挑战，请前往商店购买，或明天再来挑战")
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
        pet = users[n].pet[p]
        users[n].pet.splice(p, 1)
        yb = 30
        add(n, "MG-召唤球", 1)
        users[n].coin += yb
        drrr.print("/me @" + users[n].name + " 您已成功放生【" + pet.name + "】，获得了" + yb + " DRB，获得一个召唤球，现在您有" + users[n].coin + "DRB")
    }
}
event[msg, me, dm](user, cont: "^/召唤", url, tc) => {
    n = checku(user)
    if admins.some(a => a == tc) then {
        cpet()
    }else if (n == (-1)) then {
        drrr.print("/me @" + user + " 您的tc与已有的用户不匹配")
    } else if !users[n].bag.some(x => x.name == "MG-召唤球") then {
        drrr.print("/me @" + users[n].name + " 很抱歉，您的背包中没有召唤球，请前往商店购买")
    } else {
        use(n, "MG-召唤球")
        drrr.print("/me @" + users[n].name + " 使用了一个召唤球，请留意宝可梦的出现")
        later 2000 cpet()
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
event[msg, me, dm](user, cont: "^/活跃", url, tc) => {
    if admins.some(a => a == tc) then {
        usr = users
        usr.sort((a, b) => b["live"] - a["live"])
        if usr.length > 7 then usr= usr.slice(0, 7)
        p = usr.reduce((a, x, y) => {
            a = a + "\n" + (y + 1) + "." + x.name + "\t" + x.live + "天"
            a
        }, "不活跃用户：")
        drrr.dm(user, p)
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
            pprint(users[n])
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
        pprint(users)
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
            pprint([users[n]])
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
            pprint([users[n]])
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
                }else if users.some(m => m.uid == x.uid) then {
                    n = users.findIndex(i => i.uid == x.uid)
                    drrr.dm(user, "已删除" + users[n].name)
                    users.splice(n, 1, x)
                    c.push(x)
                }else{
                    a.push(x)
                }
            }
            users = users.concat(a)

            input = []
            if b.length > 0 then {
                pprint("未成功导入：")
                pprint(b)
            }
            drrr.dm(user, "已导入" + a.length + "名新用户，更改了" + c.length + "名旧用户，有" + b.length + "名用户冲突")
        }
    }
}
event[msg, me, dm](user, cont:"^/房主", url, tc) => {
    if admins.some(a => a == tc) then  drrr.chown(user)
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
            users[n].coin += 130
            drrr.print("@" + users[n].name + "抽到的是【" + a + b + c + "】🎉🎉🎉🎊🎊🎰恭喜中奖： + 130 DRB")
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
            users[n].coin += 120
            drrr.print("@" + users[n].name + " |是 " + g + " 🎉🎊恭喜中奖： + 120 DRB")
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
