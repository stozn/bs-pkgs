//递水服务
event join (user:"")  => {
  ns =["可口可乐🥤","七喜🥤","雪碧🥤","百事可乐🥤","果汁🧃","鲜椰子水🧉","清酒🍶","啤酒🍺","红酒🍷","夏日饮品🍹","鸡尾酒🍸"]
  n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "|你好，这是为你准备的【"+ n +"】请慢用")}