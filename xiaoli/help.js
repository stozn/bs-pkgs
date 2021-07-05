//帮助
event [me,msg] (user: "", content:"/帮助")  => {
  {drrr.dm(user,"指令列表2：\n测试功能【悄悄话（dm小粒）】：【/悄悄话 对方ID 内容】\n抽签功能(抽签日限定)【/抽签】")
  }
  later 1000
  {drrr.dm(user,"指令列表1：\n抽奖指令（msg/me）：【/抽奖】【/概率】【/中奖历史】\n续杯指令（msg/me）：【/再来一杯】【/注文 饮品或食物】\n投喂指令（msg/me）：【/投喂】【/喂食】【/套餐】 \n查看帮助（msg/me）：【/帮助】\n※所有指令只适配简体字。\n适当抽奖，请勿影响大家的聊天体验" )
 } }
 //高级帮助
 event [dm] (user: "", content:"/adh")  => {
  drrr.dm(user,"高级指令：\n 踢人：【/踢】【/kick】\n ban人：【/ban】\n ban人【/ban】\n让小粒说：【/说】\n房间主题：【/主题】")
 }
