//让小粒说
event dm (user: "黯泣", cont:"^/说")  => {  
    drrr.print(cont.replace("/说", "").trim());
}
