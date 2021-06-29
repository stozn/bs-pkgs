//帮助
event [me,msg] (user: "", content:"/帮助", url, tripcode, req)  => {
  {drrr.dm(user,"指令列表2：\n测试功能【悄悄话（dm）】：【/悄悄话+对方ID+（内容）】\n该功能公测中，私信发送悄悄话指令，如果对方在线小粒会匿名帮你发送消息，如果对方不在房间则会变成留言等对方下次进入房间再发送给他哦w留言最多保留3天。")
  }
  later 1000
  {drrr.dm(user,"指令列表1：\n抽奖指令（msg/me）：【/抽奖】【/概率】【/中奖历史】\n续杯指令（msg/me）：【/再来一杯】\n投喂指令（msg/me）：【/投喂】【/套餐】\n查看帮助（msg/me）：【/帮助】\n※所有指令只适配简体字。\n适当抽奖，请勿影响大家的聊天体验" )
 } }
 //高级帮助
 event [dm] (user: "", content:"/adh", url, tripcode, req)  => {
  drrr.dm(user,"高级指令：\n 踢人：【/踢】【/kick】\n ban人：【/ban】\n ban人【/ban】\n让小粒说：【/说】\n房间主题：【/主题】")
 }
