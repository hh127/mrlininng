script.
  var now = new Date()
  now = now.getTime() // 当前时间戳

  var postinfo = document.getElementsByClassName("post-meta__date-created")[0]
  var postinfo__date_created = new Date(postinfo.title.split(" ")[1].replace(/-/,"/"))
  postinfo__date_created = postinfo__date_created.getTime() // 文章发布时间戳
  //console.log("文章创建时间",postinfo__date_created)

  var datepassing = parseInt(now - postinfo__date_created)
  //console.log("过期时间",datepassing)
  // 超过31天提示：3600*24*31*1000
  if(datepassing > 2678400000){
      var timecount = document.getElementsByClassName("post-timecount")[0]
      var out = parseInt(datepassing / 86400000)
      timecount.innerHTML = "<div class=\"note info\"><p><strong>文章有效性提示 Article Validity Tips</strong><br>这是一篇创建于 " + out + " 天前的文章，其中的信息可能已经有所发展或是发生改变。<br>This is an article that was created " + out + " days ago, and the information may have evolved or changed.</p></div>"
  }