# BotScript Packages for drrr.com


Fetch hitoko.js every 30 secs to change room description:
```javascript
timer 30000 fetch("https://v1.hitokoto.cn")
  .then(response => response.json())
	.then(result => {
	drrr.descr(result.hitokoto);
});
```
