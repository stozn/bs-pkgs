//进入房间【欢迎
event join (user) => {
  ns =["|进来了就是美少女","|今天也请多多喝水","|你也来喝水啦w"]
  n = ns[Math.floor(Math.random() * ns.length)];
  m = ["悄悄话功能火热公测中，私信发送悄悄话指令，如果对方在线小粒会匿名帮你发送消息，如果对方不在房间则会变成留言等对方下次进入房间再发送给他哦w留言最多保留3天。\n如需帮助请输入：【/帮助】" ]
  drrr.print("/me 欢迎光临@" + user + n)
  drrr.dm(user,m);
}