//递水服务
event join (user:"")  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  n = ns[Math.floor(Math.random() * ns.length)];
  later 2000 drrr.print("/me @" + user + "|递 【"+ n +"】请慢用")
  }