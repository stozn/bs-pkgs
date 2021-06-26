//帮助
event [me,msg] (user: "", content:"/帮助", url, tripcode, req)  => {
  drrr.dm(user,"指令列表：（大字or小字-简体）\n饮品指令：【/来杯饮品】\n查看帮助：【/帮助】\n抽奖指令：【/抽奖d】【/抽奖】【/概率】【/中奖历史】\n※适当抽奖，请勿影响大家的聊天体验" );
}