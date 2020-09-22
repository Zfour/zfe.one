
setTimeout(function(){	 
	 var newArr = musiclist.filter(function(p){
 
  return p.name === $(".aplayer-title").text();
});
infomation = newArr['0'];
musicnowurl = infomation['url'];
 console.log(newArr);

console.log(musicnowurl)},1000);

