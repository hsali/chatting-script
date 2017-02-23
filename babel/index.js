

    let access_Users = "";
    let last_post_id = "";
    let last_Post_time = "";
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

    $(document).ready(function () {

        let chatObj = {
            TeamId: "far4p4m9njy98mspcnh7fbqish",
            ChannelId: "7be7n47oqpb9tk41zu8encipey",
            CurrentChannel: "7be7n47oqpb9tk41zu8encipey"
        };
        let activeChatDetailobj = {
            Team: {
                id: "far4p4m9njy98mspcnh7fbqish",
                display_name: "ai",
                name: "ai",
                description: "",
                email: "shehbaz.bsee1395@gmail.com",
                type: "O",
                company_name: "",
                invite_id: "59dz6oygabfq589gc9ehh8nigy",
                allow_open_invite: false
            },
            Channels: [
                {
                    id: "drp7mzbz87b5jx4qam7kx817so",
                    create_at: 1486377235663,
                    team_id: "far4p4m9njy98mspcnh7fbqish",
                    type: "P",
                    display_name: "Bugs",
                    name: "bugs",
                    purpose: "private group chatting header",
                    last_post_at: 1486377246364,
                    creator_id: "1o46dhhacfnk9r1uayubq9mpic"
                },
                {
                    id: "7be7n47oqpb9tk41zu8encipey",
                    create_at: 1486362822638,
                    team_id: "far4p4m9njy98mspcnh7fbqish",
                    type: "O",
                    display_name: "Off-Topic",
                    name: "off-topic",
                    last_post_at: 1487841552187,
                    creator_id: ""
                }
            ],
            Users: {
                "1o46dhhacfnk9r1uayubq9mpic": {
                    id: "1o46dhhacfnk9r1uayubq9mpic",
                    create_at: 1486370521589,
                    username: "imad",
                    email: "hamadkhankhel@gmail.com",
                },
                "aqbots94s3f1dfkj77bj8s8qcw": {
                    id: "aqbots94s3f1dfkj77bj8s8qcw",
                    create_at: 1486463610070,
                    username: "mahmoodch107",
                    email: "mahmoodch107@gmail.com",
                },

            },
        };
        let userobj = {
            Teams: {
                "far4p4m9njy98mspcnh7fbqish": {
                    id: "far4p4m9njy98mspcnh7fbqish",
                    create_at: 1486362822629,
                    display_name: "ai",
                    name: "ai",
                    description: "",
                    email: "shehbaz.bsee1395@gmail.com",
                    type: "O",
                    invite_id: "59dz6oygabfq589gc9ehh8nigy",
                    allow_open_invite: false
                },
                "kgrwcfe9opdmdb6jc4b1jn4hhh": {
                    id: "kgrwcfe9opdmdb6jc4b1jn4hhh",
                    create_at: 1486464222877,
                    update_at: 1486464222877,
                    display_name: "frontend",
                    name: "frontend",
                    description: "",
                    email: "mahmoodch107@gmail.com",
                    type: "O",
                    invite_id: "tbjwwyx8f7d19b8ix98y38ca8a",
                    allow_open_invite: false
                },
            },
            Self: "",
            Channels: [
                {
                    id: "7be7n47oqpb9tk41zu8encipey",
                    create_at: 1486362822638,
                    team_id: "far4p4m9njy98mspcnh7fbqish",
                    type: "O",
                    display_name: "Off-Topic",
                    name: "off-topic",
                    last_post_at: 1487841552187,
                    creator_id: "",
                },
                {
                    id: "tohoobbjpf88pft5upfjdnjx5a",
                    create_at: 1486362822632,
                    team_i: "far4p4m9njy98mspcnh7fbqish",
                    type: "O",
                    display_name: "Town Square",
                    name: "town-square",
                    last_post_at: 1487333018071,
                    creator_id: ""
                }
            ],
        };
        let pos = new Post();
        let api = new API();
        access_Users = pos.accessUsers();
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

            setInterval(() => {
                getPosts_After_Post();
            }, 5000);

            $input.focus();
        }

        messenger.onSend = buildSent;
        messenger.onRecieve = buildRecieved;
        console.log("before calling");
        get_All_Posts();
        $input.focus();
        $send.on('click', function (e) {
            sendMessage();
        });

        $input.on('keydown', function (e) {
            let key = e.which || e.keyCode;

            if (key === 13) { // enter key
                e.preventDefault();

                sendMessage();
            }
        });

//==============Functions=========================================================================
        function get_All_Posts() {
            try {
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
                    filter(message, gid);
                    i++;
                }
                // @todo fix the last post id
                last_post_id = posts_orders[0].id;
                last_Post_time = post_items[0].create_at;
                console.log(last_post_id);
            } catch (e) {
                console.log("not calling" + e.message);
            }

        }

        //==============================================
        function filter(message, gid) {
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
        function create_Post(msg) {
            let messg = msg;
            try {
                let pos = new Post();
                pos.createPost(messg);
            } catch (e) {
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
                last_post_id = (after_orders.length).id;
                last_Post_time = (post_items.length).create_at;
                console.log(last_post_id);
            } catch (e) {
                console.log("not calling" + e.message);
            }
        }

        //==============================================

   });
    //============================-Classes-===========================================================

        class Post {
            getPosts() {
                let data = "";
                $.ajax({
                    url: api.HostUrl + '/' + api.Controller + '/getAllPosts',
                    dataType: 'json',
                    type: 'GET',
                    success: function (response) {
                        data = response;
                    }
                });
                return data;
            }

            createPost(msg) {
                let chatObj = {
                    TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
                    ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
                    Message: "Hello World"
                };
                let data = "";
                $.ajax({
                    url: api.HostUrl + '/' + api.Controller + '/createPost',
                    dataType: 'json',
                    data: JSON.stringify(chatObj),
                    type: 'POST',
                    success: function (response) {
                        data = response;
                    }
                });
                return data;
            }

            getPostsAfterPost() {
                let chatObj = {
                    TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
                    ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
                    post_id: "6cjbxemczff4bp3h68gkhc",
                };
                let data = "";
                $.ajax({
                    url: api.HostUrl + '/' + api.Controller + '/postsAfterPost',
                    dataType: 'json',
                    data: JSON.stringify(chatObj),
                    type: 'POST',
                    success: function (response) {
                        data = response;
                    }
                });
                return data;
            }

            accessUsers() {
                let data = "";
                $.ajax({
                    url: api.HostUrl + '/' + api.Controller + '/getAllPosts',
                    dataType: 'json',
                    type: 'GET',
                    success: function (response) {
                        data = response;
                    }
                });
                return data;
            }
        }

        class API{
            constructor(){
                this.HostUrl = "http://localhost:51916"
                this.Controller = "MattermostApi";
                //For Team
                this.getTeams = "getallTeams";
                this.getTeamObject = "";
                this.getTeamMembers = "";
                //For Post
                this.createPost = "messagePost";
                this.getPosts = "getAllPosts";
                this.getPost = "";
                this.getPostsSinceTime = "getPostSinceATime";
                this.getPostsAfterPost = "postsAfterPost";
                this.getReactionsToPost = "";
                //For Channel
                this.getChannels ="";
                this.getChannel = "";
                this.getChannelByName = "";
                this.creatChannel = "";
                //For User
                this.getUsers = "";
                this.searchUsers = "";
                this.getUsersInChannel= "";
            }
        }
