//帮助
event [me,msg] (user: "", content:"/帮助", url, tripcode, req)  => {
  drrr.dm(user,"指令列表：（简体）\n测试功能【悄悄话（dm）】：【/悄悄话+对方ID（不用@）+（内容）】\n续杯指令（msg/me）：【/再来一杯】\n投喂指令（msg/me）：【/投喂】【/套餐】\n查看帮助（msg/me）：【/帮助】\n抽奖指令（msg/me）：【/抽奖】【/概率】【/中奖历史】\n※适当抽奖，请勿影响大家的聊天体验" );
}