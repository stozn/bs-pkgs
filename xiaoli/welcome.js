//进入房间【欢迎
event join (user) => {
  ns =["||进来了就是美少女","||今天也请多多喝水","||你也来喝水啦w"]
  n = ns[Math.floor(Math.random() * ns.length)];
  m = ["如需帮助请输入：【/帮助】" ]
  drrr.print("/me 欢迎光临@" + user + n)
  drrr.dm(user,m);
}