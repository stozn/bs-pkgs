// 再来一杯
event [me,msg] (user: "", content:"/再来一杯", url, tripcode, req)  => {
  ns =["酸梅汤","温水","柠檬水","葡萄糖水","鲜榨🍉汁","鲜榨🍊汁","鲜榨🍇汁","鲜榨🍓汁","鲜榨🥥汁","鲜榨🥝汁"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "|递【" + n +"~】请慢用")
}