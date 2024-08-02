var posts=["posts/ddd791e3.html","posts/21298.html","posts/7d47d71d.html","posts/1124.html","posts/63733.html","posts/56542.html","posts/39d8ce37.html","posts/7e23aaf8.html","posts/60932.html","posts/45773.html","posts/smtpeamil.html","posts/8521.html","posts/34667.html","posts/52790c89.html","posts/aliyunsign.html","posts/f545ce0b.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"海阔蓝","link":"https://blog.hklan.top/","avatar":"https://img.hklan.top/cover/%E5%9C%86%E5%A4%B4%E5%83%8F.png","descr":"生而热忱❤️,终也欢洽","siteshot":"https://img.hklan.top/cover/202307212128410.png","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com","avatar":"https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png","descr":"分享设计与科技生活","siteshot":"https://jsd.onmicrosoft.cn/gh/SH-alaways/image@master/blog/zhheo.o3dw78lhs6o.webp","color":"vip","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","siteshot":"https://jsd.onmicrosoft.cn/gh/SH-alaways/image@master/blog/leonus2.webp","color":"vip","tag":"技术"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","siteshot":"https://bu.dusays.com/2023/07/10/64ab7a2188c8f.webp","color":"speed","tag":"生活"},{"name":"风记星辰","descr":"热爱你来过的每一份温度","link":"https://www.thyuu.com","avatar":"https://std.thyuu.com/logo.webp","siteshot":"https://bu.dusays.com/2023/08/23/64e5a3e835c70.webp","color":"speed","tag":"生活"},{"name":"图欧学习资源导航","descr":"上万款学习生活办公娱乐影视资源免费无偿分享，终身学习者的导航站","link":"https://tuostudy.upnb.top","avatar":"https://bu.dusays.com/2023/08/06/64cf1bb8261a5.png","siteshot":"https://bu.dusays.com/2023/11/02/654348bfc3cf9.webp","color":"vip","tag":"up主"},{"name":"星河城野","link":"https://blog.z-l.top","avatar":"https://thirdqq.qlogo.cn/g?b=sdk&k=yqjbmdENrko19T7mjIc3vg&s=640&t=1655292317","descr":"低调存在，无人问津，专注无用，深度浅薄。"},{"name":"湘铭呀","link":"https://xiangming.site/","avatar":"https://cdnjson.com/images/2023/03/13/srchttpinews.gtimg_.comnewsapp_bt.jpg","descr":"湘铭的秘密基地啊！"},{"name":"Echo’s blog","link":"https://www.liveout.cn/","avatar":"https://yy.liveout.cn/photo/photo2.jpg","descr":"韶华不为少年留 恨悠悠 几时休"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://s1.ax1x.com/2023/05/26/p9qChjI.jpg","descr":"有肉有猫有生活."},{"name":"Cisyam","link":"https://manamn.space/","avatar":"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307151545455.jpg","descr":"分享思想，留下痕迹"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮"},{"name":"Efu","link":"https://www.efu.me","avatar":"https://s3.qjqq.cn/47/660a7ece07609.webp!color","descr":"An Open Source worker."},{"name":"Pupper","link":"https://pupper.cn","avatar":"https://img.pupper.cn/img/202307151348675.png","descr":"记录学习、生活中的点点滴滴~"},{"name":"新白菜","link":"https://blog.n-bc.top/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=2966938704&s=640","descr":"爱听不听，爱看不看"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io/","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webp","descr":"顺其自然，持之以恒"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World！"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };