keys = [1, 2, 3, 4]
key = ""
words = ["加州", "机器人", "鱼雷", "羊毛", "纽约", "蜜蜂", "晚餐", "沙漏", "糖果", "镜子", "蛋糕", "日历", "诗", "奖牌", "婚礼", "市场", "餐厅", "观光", "网络", "生日", "报纸", "毒物", "锤子", "磁铁", "水", "记忆", "速度", "刺客", "口袋", "护具", "图书馆", "鸡蛋", "毛毯", "汽油", "塔", "科学", "诱饵", "法国", "楼梯间", "心理学家", "夜晚", "高尔夫", "戏院", "羽毛", "牛仔", "弓箭", "小丑", "火箭", "扑克", "大象", "媒体", "手", "正方形", "外太空", "直升机", "木偶", "瘟疫", "海洋", "棒球", "雕塑", "鼓", "驱魔", "神殿", "童年", "潜水员", "早餐", "狼", "衣服", "字典", "火山", "屠宰场", "贿赂", "能量", "周末", "歌", "马", "埃及", "骷髅", "潜水艇", "奥林匹克", "独眼怪", "厨房", "行李箱", "腿", "雪", "文艺复兴", "峡谷", "咖啡", "快乐", "古代", "地铁", "蜂蜜", "森林", "小号", "索引", "德州", "神秘", "旗帜", "降落伞", "跳舞", "蜡烛", "夏天", "屋顶", "猫", "地毯", "蟑螂", "秋天", "贵族", "企鹅", "钱", "疾病", "间谍", "男管家", "银行", "出生", "考古学", "书", "老鼠", "女人", "河", "花园", "武术", "天气", "鞋子", "鸡尾酒", "办公室", "中国", "针", "节日", "压力", "牙齿", "配方", "苹果", "手术", "红色", "房间", "史前时代", "道路", "松鼠", "传说", "怪胎", "电视", "鼻子", "蛮横", "噩梦", "巨人", "尖叫", "坠落", "卫星", "抗议", "身体", "音乐家", "金属", "中世纪", "蓝色", "皮肤", "假期", "难过", "俄罗斯", "建筑学", "星球", "斗篷", "侦探", "死亡", "车", "雨", "奶酪", "军队", "萨克斯", "警察", "枪", "锁链", "蝎子", "博物馆", "花生", "睡觉", "脚踏车", "钢琴", "女巫", "巧克力", "绵羊", "胡子", "橘子", "骗子", "吉他", "沙漠", "资本主义", "面包", "小提琴", "胃", "三明治", "棉花", "暴风雨", "井", "脚", "艺术", "医院", "公主", "饼干", "断头台", "梦想", "僵尸", "机械", "教堂", "床", "舌头", "礼物", "椅子", "游戏", "胡萝卜", "鱼", "内衣", "歌剧", "曲棍球", "窗户", "翅膀", "自然", "生物学", "帽子", "海龟", "皇冠", "恶魔", "塑料", "非洲", "墨水", "鬼", "胶水", "章鱼", "大炮", "侏儒", "鲸鱼", "飞行员", "春天", "矛", "火", "恐龙", "救护车", "愤怒", "灰尘", "铅笔", "时钟", "刀", "停车场", "紫色", "妈妈", "水果", "玻璃", "狩猎", "传统", "天空", "化学", "革命", "小妖精", "蛇", "绿洲", "地下室", "密码锁", "冰箱", "西装", "澳洲", "门", "笼子", "外星人", "蜥蜴", "边境", "复制品", "半人马", "水电工", "枫树", "裤子", "领带", "精灵", "云", "乘客", "砖块", "面具", "参议院", "头", "蘑菇", "数学", "意外", "长颈鹿", "信仰", "地下城", "轨道", "青蛙", "香水", "铃铛", "相机", "角", "漫画书", "疯狂", "音乐会", "桌子", "三角形", "手臂", "食人魔", "旅馆", "爱", "骨牌", "吸血鬼", "金字塔", "午餐", "炸弹", "脸", "香蕉", "天才", "短信", "实验室", "皮革", "罗盘", "游泳池", "钻石", "攻击", "酒精", "动物园", "出口", "爵士", "狮子", "经济学", "味道", "傍晚", "雪橇", "德国", "拼图", "国王", "灯泡", "神", "戒指", "父亲", "电影院", "龙", "飞马", "岛屿", "偷窥", "键盘", "马铃薯", "奶油", "电梯", "蜘蛛", "天堂", "水族馆", "项链", "珍珠", "小麦", "黑色", "冬天", "瓶子", "婴儿", "早晨", "显微镜", "老师", "哲学", "猫头鹰", "热", "赌场", "蝴蝶", "电脑", "树根", "男人", "烤箱", "战争", "工作", "纪念碑", "怪物", "厕所", "秘书", "血", "玩具", "盾牌", "孔雀", "耳朵", "一点点", "恐怖", "彩虹", "名人", "黑手党", "迷宫", "山", "丛林", "绿色", "白色", "船", "黄色", "稻草人", "啤酒", "披萨", "飞机", "猪", "马戏团", "洞穴", "狗", "世界末日", "海盗", "科幻", "时间", "学校", "圆圈", "尸体", "鸟", "火车头", "军营", "电线", "共产主义", "交响乐团", "剑", "药", "地球", "镭射", "语言", "独角兽", "北极", "电", "变色龙", "照片", "电话", "选举", "野餐", "墙壁", "鸟巢", "肥皂", "建筑物", "和尚", "按钮", "美人鱼", "笑", "足球", "比赛", "运动员", "魔法", "医生", "吕洞宾", "零度", "冰", "大海", "特工", "阿尔卑斯山", "美国", "天使", "澳大利亚", "亚马逊", "空气", "阿兹特克", "南极洲", "亚特兰提斯", "后背", "电池", "箱", "海滩", "浆果", "真空", "豪车", "运气", "小牛", "拇指", "苍蝇", "鲸", "电极", "希腊", "公平", "叉", "手套", "草", "黄金", "地面", "勇气", "高雅", "挂钩", "印度", "果酱", "冰淇淋", "好莱坞", "木星", "铁", "喷射", "水牛", "债券", "喇叭", "瓶", "北京", "节拍", "门栓", "轰隆", "柏林", "纽扣", "靴子", "树皮", "故障", "桥", "街区", "舞会", "酒吧", "乐队", "小孩", "番茄酱", "袋鼠", "骑士", "尼斯湖", "小精灵", "领导", "伦敦", "线", "嘴", "月亮", "律师", "膝盖", "大理石", "邮件", "水星", "皮带", "账单", "熊", "刷子", "板", "铃", "蝙蝠", "弓", "漫画", "加拿大", "吊车", "百慕大", "寒冷", "十字架", "卡牌", "改变", "棉", "中心", "支票", "鸭子", "欧洲", "约会", "日", "舞蹈", "矮人", "英格兰", "鹰", "草图", "厨师", "骰子", "滴", "俱乐部", "细胞", "稻草", "货车", "状况", "滑动", "尖刺", "邮政", "手枪", "南瓜", "水池", "英镑", "鸭嘴兽", "分数", "论文", "别针", "抛", "首都", "循环", "密码", "王冠", "碰撞", "契约", "胸", "汽车", "帽", "铜", "法院", "悬崖", "混合物", "阴谋", "报刊", "浆糊", "玩耍", "毒药", "小说", "油", "坚果", "忍者", "模特", "矿", "鼹鼠", "莫斯科", "柠檬", "大量", "披风", "土星", "锁", "光线", "薄荷", "盗贼", "尺子", "罗宾汉", "文件", "球拍", "电影", "雪人", "空间", "摇摆", "连接", "笔记", "滴答", "咒语", "头巾", "屏幕", "洗衣机", "护照", "指甲", "橄榄", "轨迹", "幽灵", "捷克", "平底锅", "大富豪", "学位", "甲板", "封面", "钻头", "蠕虫", "雄鹿", "衣着", "钥匙", "士兵", "充电", "山峰", "隼", "火车", "天平", "坑", "溪流", "醒", "公园", "网", "莎士比亚", "墨西哥", "转换", "树干", "兽医", "火炬", "平板", "科学家", "服务生", "数字", "粉丝", "领域", "瀑布", "股票", "大使馆", "战士", "打结", "走私者", "火腿", "下沉", "凤凰", "港口", "栅栏", "望远镜", "阴影", "射线", "划船", "恒星", "棍", "隧道", "墙", "声音", "华盛顿", "罗马", "根", "瞳孔", "脊椎", "导弹", "斑点", "海豹", "蟋蟀", "王后", "小鸡", "旅行", "号角", "马克杯", "长毛象", "象牙", "角色", "引擎", "眼", "塑胶", "体育场", "灵魂", "盘子", "摇滚", "手表", "投掷", "护士", "摩天楼", "伐木", "馅饼", "罢工", "风", "标签", "器官", "鲨鱼", "马蹄铁", "回合", "兔子", "奇异果", "喜马拉雅山", "匕首", "三月", "庭院", "长笛", "千斤顶", "射击", "尾巴", "鼻涕虫", "波浪", "玫瑰", "管", "鞭子", "寺庙", "超级英雄", "短袜", "商店", "奥林匹斯山", "弦", "东京", "土耳其", "鞋", "手掌", "转轮", "承办人", "职员", "生命", "水龙头", "狍子", "蛤蟆", "熊猫", "羊驼", "骆驼", "河马", "考拉", "海豚", "猩猩", "鸵鸟", "天鹅", "熊本熊", "黑寡妇", "屎壳郎", "小鲜肉", "直播", "电子竞技", "微博", "外卖", "众筹", "吃土", "狗带", "污", "滑稽", "单身狗", "屁股", "宝宝", "复读机", "萌萌哒", "米宝", "胜利点", "版图", "合作", "团灭", "一刻", "收纳", "二手", "包邮", "盒损", "桌游", "战报", "益智", "代入感", "机制", "兵马俑", "长城", "灯笼", "风筝", "皮影戏", "舞龙", "功夫", "葫芦娃", "孙悟空", "京剧", "孔子", "书法", "茶", "城管", "指南针", "雨衣", "瑜伽", "健美", "慢跑", "星座", "爆竹", "快递", "丁克", "裸婚", "健身", "素食", "打车", "八卦", "月光", "生肖", "相亲", "鱼人", "狼人", "先知", "德鲁伊", "萨满", "克苏鲁", "武士", "麻瓜", "兽人", "巫师", "狐狸精", "阎王", "狮鹫", "嘻哈", "蓝调", "古典", "流行", "民谣", "轻音乐", "朋克", "古筝", "竖琴", "架子鼓", "节奏", "痤疮", "英亩", "附录", "广告", "升", "鳄鱼", "踝关节", "冷漠", "鼓掌", "苹果酱", "应用", "考古学家", "无敌舰队", "睡着", "宇航员", "亚特兰蒂斯", "阿姨", "鳄梨", "保姆", "骨干", "袋子", "秃头", "气球", "栏杆", "踢脚板", "篮球", "沙滩", "豆茎", "臭虫", "贝多芬", "带子", "围兜", "单车", "大", "自行车", "广告牌", "咬", "铁匠", "毯子", "漂白剂", "飞艇", "开花", "蓝图", "钝", "模糊", "宝儿", "舟", "鲍勃", "阀盖", "展位", "领结", "盒子", "男孩", "头脑风暴", "牌子", "勇敢", "新娘", "西兰花", "破坏", "扫帚", "挫伤", "黑发", "泡沫", "巴迪", "巴士", "买", "小屋", "计算器", "营地", "可以 ", "糖", "海角", "纸板", "制图", "唱片", "天花板", "世纪", "记录", "冠军", "充电器", "啦啦队长", "象棋", "咀嚼", "鸡", "鸣响", "圆", "粘土", "顺时针", "线索", "教练", "煤", "过山车", "装配", "冷", "学院", "舒适", "计算机", "圆锥", "括约肌", "闭联", "回话", "烹饪", "公司", "绳索", "灯芯绒", "简易床", "咳嗽", "奶牛", "蜡笔", "脆", "批评", "乌鸦", "巡航", "面包屑", "外壳", "袖口", "窗帘", "角质层", "沙皇", "爸爸", "黎明", "白天", "深", "缺点", "齿", "牙医", "书桌", "酒窝", "脏", "拆除", "挖沟", "潜水者", "狗窝", "洋娃娃", "多米诺骨", "圆点", "排水", "抓", "梦", "裙子", "喝", "烘干机", "倾倒", "灌篮", "耳", "吃", "木制", "肘部", "电气", "榆木", "人类工程学", "扶梯", "有了", "进化", "延长", "眉毛", "幻想", "快", "宴请", "封建", "虚构", "手指", "第一", "钓鱼", "修", "兴奋", "旗杆", "法兰绒", "火光", "聚集", "废料", "花", "流感", "激动", "飘动", "雾", "衬托", "前额", "永远", "两周", "雀斑", "运送", "边缘", "蛙", "皱眉", "疾驰", "宝石", "姜", "姜饼", "女孩", "眼镜", "地精", "金", "再见", "奶奶", "葡萄", "感激", "灰", "绿", "口香糖", "橡皮", "头发", "半", "掌控", "手写", "挂", "高兴", "孵化", "头痛", "心", "基金", "边", "藏", "冰球", "作业", "喇叭声", "跳房子", "软管", "房", "游艇", "拥抱", "加湿器", "饿", "障碍", "伤害", "内爆", "调查", "内部", "引诱", "讽刺", "常青藤", "翡翠", "牛仔裤", "果冻", "喷气", "抖动", "杂志", "跳", "杀手", "公斤", "下跪", "花边", "梯子", "瓢虫", "拖延", "一圈", "洗衣店", "法", "草地", "剪草机", "泄露", "字母", "等级", "生活方式", "韧带", "光", "光剑", "石灰", "虚度", "棒棒糖", "双人沙发", "忠诚", "午餐盒", "歌词", "机器", "男子气概", "信箱", "记号", "吉祥物", "桅杆", "火柴棍", "大副", "床垫", "混乱", "仲夏", "错误", "现代", "塑造", "妈", "周一", "猴子", "监视器", "偷", "月", "擦", "蛾", "摩托车", "山脉", "鼠", "割草机", "泥巴", "音乐", "静音", "协商", "邻居", "中子", "侄女", "夜", "鼻", "桨", "天文台", "老", "威严", "不透明", "瓶撬", "组织", "外面", "外部", "欢迎", "序幕", "桶", "画", "睡衣", "宫殿", "纸", "山寨", "聚会", "糕饼", "卒", "梨子", "笔", "钟摆", "阳物", "便士", "辣椒", "个人", "哲人", "手机", "猪舍", "枕头", "勒索", "乒乓", "纸风车", "格子", "计划", "厚木板", "平", "操场", "犁田", "水管工", "点", "极点", "浮华", "冰棒", "人口", "公文包", "积极", "寄", "耽搁", "出版商", "小狗", "推", "谜题", "检疫", "皇后", "流沙", "安静", "赛", "收音机", "筏", "破布", "雨水", "区域", "回收", "红", "遗憾", "退还", "报复", "肋骨", "谜语", "溜冰场", "轮", "迂回", "横木", "发情期", "忧伤", "安全", "鲑鱼", "盐", "沙盒", "沙堡", "腰带", "恐惧", "刀疤", "卑鄙", "攀登", "磨损", "海贝", "季节", "句子", "亮片", "设置", "轴", "影子 ", "香波", "被单", "警官", "海难", "衬衫", "鞋带", "短", "喷头", "收缩", "病", "午睡", "侧影", "歌手", "滑冰", "溜冰", "划水", "扣篮", "睡", "吊索", "慢", "下降", "史密斯", "打喷嚏", "紧抱", "太空", "节约", "演讲者", "吐痰", "抹掉", "缠绕", "勺子", "春", "洒水车", "广场", "斜视", "楼梯", "长期", "星", "州", "棍子", "隔板", "红灯", "结实", "火炉", "匿身处", "蒸汽", "流线型", "条纹", "学生", "日出", "寿司", "沼泽", "群集", "毛衣", "游泳", "转速", "说", "出租车", "茶壶", "青少年", "十", "网球", "贼", "思考", "王座", "穿越", "雷", "潮水", "虎", "着色", "脚尖", "绝顶", "疲倦", "纸巾", "工具", "牙刷", "龙卷风", "锦标赛", "拖拉机", "销毁", "财宝", "树", "三角", "旅程", "卡车", "浴盆", "大号", "辅导", "鼻音", "理解", "推特", "类型", "失业", "升级", "背心", "视野", "饶舌", "西瓜", "蜡", "除草", "焊接工", "无论如何", "轮椅", "鞭打", "搅拌", "口哨", "白", "假发", "意愿", "风车", "愿望", "世界", "码尺", "磨冰机", "禅", "零", "拉链"]
word = "无"
ak = "000"
bk = "000"
as = 0
bs = 0
ts = 0
his = [[], [], [], []]
players = []
roles = [0, 1, 2]
roleName = ["队长", "队员", "间谍"]

announcement = "/me尚未开始游戏"
announce = (msg) => {
    announcement = msg
    drrr.print(msg)
}
str = (s) => String(s)
pre = (s) => s.slice(0, s.search("\\s")).trim()
lst = (s) => s.slice(s.search("\\s")).trim()
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
    his = [[], [], [], []]
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
    announce("/me 【截码战】游戏开始, [+1] 加入, [-1] 退出, [/p] 玩家, [/go] 开始 [/帮助] 帮助")
}

state prelude {
    roles.sort(() => Math.random() - 0.5)
    r = players.map((name, idx) => roleName[roles[idx]] + "：" + "@" + name).join("\n")
    drrr.print("角色：\n" + r)
    later 4000 announce("/me 请队长和队友查看本次游戏密码表，想再次查看请发送【/密码】")
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
    announce("/me请队长查看三位数字口令，并在公屏发送【/线索 线索1 线索2 线索3】")
    i = roles.findIndex(x => x == 0)
    t = roles.findIndex(x => x == 2)
    key = str(keys[0]) + str(keys[1]) + str(keys[2])
    drrr.dm(players[i], "本次口令为：" + key)
    drrr.dm(players[t], his.map((x, i) => (i + 1) + ":" + x.join(" ")).join("\n"))
    event[msg, me](user:players[i], cont: "^/线索\\s+\\S+\\s+\\S+\\s+\\S$") => {
        m = cont.replace("/线索", "").trim() 
        a = [pre(m),pre(lst(m)),lst(lst(m))]
        for (j=0;j<4;j++){
          for (k=0;k<4;k++){
            if key[j]==(k+1) then his[k].push(a[j])
          }
        }
        going guess
    }
}

state guess {
    announce("/me请队员和间谍开始解密，私信我三位数字口令（由1-4中的数字组成），队员可以发送【/skip】跳过这一环节（若队员未提交将会扣一分）")
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
    if br == "√√√" then {
        bs++
        br += " +1分"
    }
    ts++
    drrr.print("结果：\n队长：" + key + "\n队友：" + ak + "  " + ar + "\n间谍：" + bk + "  " + br)
    if (as == 2 || bs == 2 || ts == 8) then {
        later 2000 drrr.print("最终分数为：\n队友：-" + as + "分\n间谍：" + bs + "分")
        later 4000 drrr.print("游戏结束,本次游戏共进行" + ts + "轮\n" + "密码表：" + word)
    }else {
        q = roles.findIndex(x => x == 0)
        p = roles.findIndex(x => x == 1)
        roles[q] = 1
        roles[p] = 0
        later 5* 1000 drrr.print("/me 队长队友互换身份，@" + players[roles.findIndex(x => x == 0)] + "成为队长")
        later 10* 1000 going hide
    }
}

event[msg, me, dm](user, cont: "^/密码$") => {
    if players.includes(user) && !(user == players[roles.findIndex(x => x == 2)]) then
    drrr.dm(user, "密码表：" + word)
    else   drrr.print("/me @" + user + " 您不是队长或队员")
}
event[msg, me, dm](user, cont: "^/分数$") => drrr.print("当前分数为：\n队友：-" + as + "分\n间谍：" + bs + "分")
event[msg, me, dm](user, cont: "^/记录$") => drrr.print(his.map((x, i) => (i + 1) + ":" + x.join(" ")).join("\n"))
event[msg, me, dm](user, cont: "^/帮助$") => {
    drrr.print("/帮助 帮助\n/密码 查看密码表\n/记录 线索记录\n/p 当前玩家\n/分数 当前分数\n/game 开始报名（如有游戏则重开）")
}
event[msg, me](user, cont: "^/game$") => going prepare
going prepare
