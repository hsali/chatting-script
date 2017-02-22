
class Messenger {
  constructor() {
    this.messageList = [];
    this.deletedList = [];
    
    this.me = 1; // completely arbitrary id
    this.them = 5; // and another one
    
    this.onRecieve = (message) => console.log('Recieved: ' + message.text);
    this.onSend = (message) => console.log('Sent: ' + message.text);
    this.onDelete = (message) => console.log('Deleted: ' + message.text);
  }
  
  send(text = '') {
    text = this.filter(text);
    
    if (this.validate(text)) {
      let message = {
        user: this.me,
        text: text,
        time: new Date().getTime()
      };
      
      this.messageList.push(message);
      
      this.onSend(message);
    }
  }
  
  recieve(text = '') {
    text = this.filter(text);
    
    if (this.validate(text)) {
      let message = {
        user: this.them,
        text: text,
        time: new Date().getTime()
      };
      
      this.messageList.push(message);
      
      this.onRecieve(message);
    }
  }
  
  delete(index) {
    index = index || (this.messageLength - 1);
    
    let deleted = this.messageLength.pop();
    
    this.deletedList.push(deleted);
    this.onDelete(deleted);
  }
  
  filter(input) {
    let output = input.replace('bad input', 'good output'); // such amazing filter there right?
    return output;
  }
  
  validate(input) {
    return !!input.length; // an amazing example of validation I swear.
  }
}

class BuildHTML {
  constructor() {
    this.messageWrapper = 'mmc-message-wrapper';
    this.circleWrapper = 'mmc-circle-wrapper';
    this.textWrapper = 'mmc-text-wrapper';
    
    this.meClass = 'mmc-me';
    this.themClass = 'mmc-them';
  }
  
  _build(text, who) {
    return `<div class="${this.messageWrapper} ${this[who + 'Class']}">
              <div class="${this.circleWrapper} animated bounceIn"></div>
              <div class="${this.textWrapper}">...</div>
            </div>`;
  }

  me(text) {
    return this._build(text, 'me');
  }

  them(text) {
    return this._build(text, 'them');
  }
}

$(document).ready(function() {
    let HostUrl = "http://localhost:51916";
    let last_post_id = "";
    let last_Post_time = "";
  //let c_user = new c_etuser();
  let current_user_id = "izjagsd9zty15by5cq6xh4xm8o";
  let messenger = new Messenger();
  let buildHTML = new BuildHTML();

  let $input = $('#mmc-input');
  let $send = $('#mmc-send');
  let $content = $('#mmc-content');
  let $inner = $('#mmc-inner');

  function safeText(text) {
    $content.find('.mmc-message-wrapper').last().find('.mmc-text-wrapper').text(text);
  }

  function animateText() {
    setTimeout(() => {
      $content.find('.mmc-message-wrapper').last().find('.mmc-text-wrapper').addClass('animated fadeIn');
    }, 350)
  }

  function scrollBottom() {
    $($inner).animate({
      scrollTop: $($content).outerHeight(true)
    }, {
      queue: false,
      duration: 'ease'
    });
  }

  function buildSent(message) {
    console.log('sending: ', message.text);

    $content.append(buildHTML.me(message.text));
    safeText(message.text);
    animateText();

    scrollBottom();
  }

  function buildRecieved(message) {
    console.log('recieving: ', message.text);

    $content.append(buildHTML.them(message.text));
    safeText(message.text);
    animateText();

    scrollBottom();
  }

  function sendMessage() {
      /*posts since time
       let d = new data();
       let time = d.getTime();
       getPostsSinceTime(time);*/
      let text = $input.val();
      messenger.send(text);
      create_Post(text);
      $input.val('');
      getPosts_After_Post();
      $input.focus();
  }
  messenger.onSend = buildSent;
  messenger.onRecieve = buildRecieved;
    console.log("before calling");
    get_All_Posts();
  $input.focus();
  $send.on('click', function(e) {
    sendMessage();
  });

  $input.on('keydown', function(e) {
    let key = e.which || e.keyCode;

    if (key === 13) { // enter key
      e.preventDefault();

      sendMessage();
    }
  });

//==============Functions=========================================================================
   function get_All_Posts () {
       try{
           let pos = new Post();
           let getallposts = pos.getPosts();
           let posts_data = JSON.parse(getallposts);
           let posts_orders = posts_data.order;
           let rev_posts_orders = posts_orders.reverse();
           let post_items = posts_data.posts;
           let i = 0, gid = "";
           console.log("posts" + post_items);
           console.log("orders" + rev_posts_orders);
           console.log("message: " + post_items[rev_posts_orders[0]].message);
           while (i < rev_posts_orders.length) {
               let message = post_items[rev_posts_orders[i]].message;
               gid = post_items[rev_posts_orders[i]].id;
               console.log(gid);
               filter(message,gid);
               i++;
           }
           // @todo fix the last post id
           last_post_id = posts_orders[0].id;
           console.log(last_post_id);
       }catch (e){
           console.log("not calling" +e.message);
       }

   }
        //==============================================
    function filter(message,gid) {
        if (gid == current_user_id) {
            setTimeout(() => {
                console.log(message);
                messenger.send(message);
            }, (i * 500 + 500));
        }
        else {
            setTimeout(() => {
                console.log(message);
                messenger.recieve(message);
            }, (i * 500 + 500));
        }
        
    }
        //==============================================
    function create_Post(msg){
       let msg = msg;
        try {
            let pos = new Post();
            pos.createPost(msg);
        }catch (e){
            console.log("message not created" + e.message);
        }
        
    }
        //==============================================
    function getPosts_After_Post() {
        try {
            let pos = new Post();
            let afterpost = pos.getPostsAfterPost();
            let after_posts = JSON.parse(afterpost);
            let after_orders = after_posts.order;
            let rev_afterorders = after_orders.reverse();
            let post_items = after_posts.posts;
            let i = 0;
            console.log("posts" + post_items);
            console.log("orders" + rev_afterorders);
            console.log("message: " + post_items[rev_afterorders[0]].message);
            console.log("testing");
            while (i < rev_afterorders.length) {
                let message = post_items[rev_afterorders[i]].message;
                setTimeout(() => {
                    console.log(message);
                    messenger.recieve(message);
                }, (i * 500 + 1000));
                i++;
            }
            last_post_id = after_orders[length].id;
            console.log(last_post_id);
        } catch (e) {
            console.log("not calling" + e.message);
        }
    }
        //==============================================

//==============Classes===========================================================================
    class Post {
        getPosts() {
            let data = "";
            $.ajax({
                url: HostUrl+'/MattermostApi/getAllPosts',
                dataType: 'json',
                type: 'GET',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        createPost(msg){
            var chatObj = {
                TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
                ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
                Message: "Hello World"
            };
            let data="";
            $.ajax({
                url:HostUrl+'/MattermostApi/createPost',
                dataType: 'json',
                data: JSON.stringify(chatObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        getPostsAfterPost(){
            var chatObj = {
                TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
                ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
                post_id: "6cjbxemczff4bp3h68gkhc",
            };
            let data="";
            $.ajax({
                url: HostUrl+'/MattermostApi/postsAfterPost',
                dataType: 'json',
                data: JSON.stringify(chatObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }
    }

});


