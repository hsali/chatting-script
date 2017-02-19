'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Messenger = function () {
  function Messenger() {
    _classCallCheck(this, Messenger);

    this.messageList = [];
    this.deletedList = [];

    this.me = 1; // completely arbitrary id
    this.them = 5; // and another one

    this.onRecieve = function (message) {
      return console.log('Recieved: ' + message.text);
    };
    this.onSend = function (message) {
      return console.log('Sent: ' + message.text);
    };
    this.onDelete = function (message) {
      return console.log('Deleted: ' + message.text);
    };
  }

  _createClass(Messenger, [{
    key: 'send',
    value: function send() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      text = this.filter(text);

      if (this.validate(text)) {
        var message = {
          user: this.me,
          text: text,
          time: new Date().getTime()
        };

        this.messageList.push(message);

        this.onSend(message);
      }
    }
  }, {
    key: 'recieve',
    value: function recieve() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      text = this.filter(text);

      if (this.validate(text)) {
        var message = {
          user: this.them,
          text: text,
          time: new Date().getTime()
        };

        this.messageList.push(message);

        this.onRecieve(message);
      }
    }
  }, {
    key: 'delete',
    value: function _delete(index) {
      index = index || this.messageLength - 1;

      var deleted = this.messageLength.pop();

      this.deletedList.push(deleted);
      this.onDelete(deleted);
    }
  }, {
    key: 'filter',
    value: function filter(input) {
      var output = input.replace('bad input', 'good output'); // such amazing filter there right?
      return output;
    }
  }, {
    key: 'validate',
    value: function validate(input) {
      return !!input.length; // an amazing example of validation I swear.
    }
  }]);

  return Messenger;
}();

var BuildHTML = function () {
  function BuildHTML() {
    _classCallCheck(this, BuildHTML);

    this.messageWrapper = 'mmc-message-wrapper';
    this.circleWrapper = 'mmc-circle-wrapper';
    this.textWrapper = 'mmc-text-wrapper';

    this.meClass = 'mmc-me';
    this.themClass = 'mmc-them';
  }

  _createClass(BuildHTML, [{
    key: '_build',
    value: function _build(text, who) {
      return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated bounceIn"></div>\n              <div class="' + this.textWrapper + '">...</div>\n            </div>';
    }
  }, {
    key: 'me',
    value: function me(text) {
      return this._build(text, 'me');
    }
  }, {
    key: 'them',
    value: function them(text) {
      return this._build(text, 'them');
    }
  }]);

  return BuildHTML;
}();

$(document).ready(function () {
  var messenger = new Messenger();
  var buildHTML = new BuildHTML();

  var $input = $('#mmc-input');
  var $send = $('#mmc-send');
  var $content = $('#mmc-content');
  var $inner = $('#mmc-inner');

  function safeText(text) {
    $content.find('.mmc-message-wrapper').last().find('.mmc-text-wrapper').text(text);
  }

  function animateText() {
    setTimeout(function () {
      $content.find('.mmc-message-wrapper').last().find('.mmc-text-wrapper').addClass('animated fadeIn');
    }, 350);
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
    var text = $input.val();
    messenger.send(text);
    $input.val('');
    $input.focus();
  }

  messenger.onSend = buildSent;
  messenger.onRecieve = buildRecieved;

  // let pos = new Post({HostUrl:"http://localhost:51916"});
  // let posts_data = pos.testPost();
  var posts_response = '{"order":["pc7f3m5sz7rbix99ajn1u7bo5r","jsibifr1gfb4bk6shf5dm6qaty","55pquph5wibtdn343cpuwpdqqc","izjagsd9zty15by5cq6xh4xm8o","ymyqbg6kn3gnukndq5fqmiqbye","7j8mehz7zjdg5q9nw15y5eg89a","w4f8en4wotrciq45zf33f6sp5y","jcuy6cffb3ynpcjpebrqbnexmr","77bxx3mw8fr75k47rmstunsszr","oa7e5hzqr3gs7mw34zznp5qmfw","1egwbw3gf7dwjp5b3sm7gmq6xh","x8htzkjej3rqfmw5eqazrmjwwy","sx6kgidpabdedp18e5ezurjzro","1c6s95mxxtbq8kzrh9ps93buxh"],"posts":{"1c6s95mxxtbq8kzrh9ps93buxh":{"id":"1c6s95mxxtbq8kzrh9ps93buxh","create_at":1486362822674,"update_at":1486362822674,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hsali has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"1egwbw3gf7dwjp5b3sm7gmq6xh":{"id":"1egwbw3gf7dwjp5b3sm7gmq6xh","create_at":1486368674211,"update_at":1486368674211,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"postman API","type":"","props":{},"hashtags":"","file_ids":["tgoz6efd6tnhtftbpkzxd9f9ny"],"pending_post_id":""},"55pquph5wibtdn343cpuwpdqqc":{"id":"55pquph5wibtdn343cpuwpdqqc","create_at":1487147269327,"update_at":1487147269327,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"okay","type":"","props":{},"hashtags":"","pending_post_id":""},"77bxx3mw8fr75k47rmstunsszr":{"id":"77bxx3mw8fr75k47rmstunsszr","create_at":1486377658934,"update_at":1486377658934,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"yasirali has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"7j8mehz7zjdg5q9nw15y5eg89a":{"id":"7j8mehz7zjdg5q9nw15y5eg89a","create_at":1486645203524,"update_at":1486645203524,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"latest postman collection json file ","type":"","props":{},"hashtags":"","file_ids":["dkik61m3d3nn3kj73gguqm8thh"],"pending_post_id":""},"izjagsd9zty15by5cq6xh4xm8o":{"id":"izjagsd9zty15by5cq6xh4xm8o","create_at":1487147226498,"update_at":1487147226498,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. ","type":"","props":{},"hashtags":"","pending_post_id":""},"jcuy6cffb3ynpcjpebrqbnexmr":{"id":"jcuy6cffb3ynpcjpebrqbnexmr","create_at":1486468353055,"update_at":1486468353055,"delete_at":0,"user_id":"aqbots94s3f1dfkj77bj8s8qcw","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"mahmoodch107 has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"jsibifr1gfb4bk6shf5dm6qaty":{"id":"jsibifr1gfb4bk6shf5dm6qaty","create_at":1487147275187,"update_at":1487147275187,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. second testing ","type":"","props":{},"hashtags":"","pending_post_id":""},"oa7e5hzqr3gs7mw34zznp5qmfw":{"id":"oa7e5hzqr3gs7mw34zznp5qmfw","create_at":1486370521707,"update_at":1486370521707,"delete_at":0,"user_id":"1o46dhhacfnk9r1uayubq9mpic","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"imad has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"pc7f3m5sz7rbix99ajn1u7bo5r":{"id":"pc7f3m5sz7rbix99ajn1u7bo5r","create_at":1487152184479,"update_at":1487152184479,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. second testing ","type":"","props":{},"hashtags":"","pending_post_id":""},"sx6kgidpabdedp18e5ezurjzro":{"id":"sx6kgidpabdedp18e5ezurjzro","create_at":1486368379281,"update_at":1486368379281,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hi","type":"","props":{},"hashtags":"","pending_post_id":""},"w4f8en4wotrciq45zf33f6sp5y":{"id":"w4f8en4wotrciq45zf33f6sp5y","create_at":1486469353943,"update_at":1486469353943,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"","type":"","props":{},"hashtags":"","file_ids":["54yiqho6b7bnfb141kdzz3gmcc"],"pending_post_id":""},"x8htzkjej3rqfmw5eqazrmjwwy":{"id":"x8htzkjej3rqfmw5eqazrmjwwy","create_at":1486368381212,"update_at":1486368381212,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"how are you? ","type":"","props":{},"hashtags":"","pending_post_id":""},"ymyqbg6kn3gnukndq5fqmiqbye":{"id":"ymyqbg6kn3gnukndq5fqmiqbye","create_at":1487147089197,"update_at":1487147089197,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hello","type":"","props":{},"hashtags":"","pending_post_id":""}}}';

  var posts_data = JSON.parse(posts_response);
  var posts_orders = posts_data.order;
  var rev_posts_orders = posts_orders.reverse();
  var post_items = posts_data.posts;
  var i = 0;
  console.log("posts" + post_items);
  console.log("orders" + posts_orders);
  console.log("message: " + post_items[posts_orders[0]].message);

  var _loop = function _loop() {
    var message = post_items[rev_posts_orders[i]].message;
    setTimeout(function () {
      console.log(message);
      messenger.recieve(message);
    }, i * 500 + 1);
    i++;
  };

  while (i < rev_posts_orders.length) {
    _loop();
  }

  /* setTimeout(() => {
     messenger.recieve('Do you like this? If so check out more on my page...');
   }, 5000);
   
   setTimeout(() => {
     messenger.recieve('Or maybe just give it a like!');
   }, 7500);*/

  $input.focus();

  $send.on('click', function (e) {
    sendMessage();
  });

  $input.on('keydown', function (e) {
    var key = e.which || e.keyCode;

    if (key === 13) {
      // enter key
      e.preventDefault();

      sendMessage();
    }
  });
});