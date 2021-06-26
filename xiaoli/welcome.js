//【欢迎
event join (user) => {
  ns =["||祝你好运","||今天也请多多喝水","||你也来喝水啦w"]
  n = ns[Math.floor(Math.random() * ns.length)];
  m = [如果你需要帮助请输入：【/帮助】 ]
  drrr.print("/me 欢迎光临"+name+ "@" + user + n)
  drrr.dm(user,m);
}