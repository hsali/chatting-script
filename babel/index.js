

    let HostUrl = "http://localhost:51916"
    let Controller = "MattermostApi";
    //For Team
    let getTeams = "getallTeams";
    let getTeamObject = "";
    let getTeamMembers = "";
    //For Post
    let createPost = "messagePost";
    let getPosts = "getAllPosts";
    let getPost = "";
    let getPostsAfterPost = "postsAfterPost";
    let getReactionsToPost = "";
    //For Channel
    let getChannels = "";
    let getChannel = "";
    let getChannelByName = "";
    let creatChannel = "";
    //For User
    let getUsers = "";
    let searchUsers = "";
    let getUsersInChannel = "";
    let access_Users = "";
    let last_post_id = "";
    let last_Post_time = "";
//============================================================================================
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
    function initiate() {
        defaultTeamId = "far4p4m9njy98mspcnh7fbqish";
            isTeamExist(defaultTeamId);
        /*let arr = [];
        for (let tem in teams) {
            arr.push(teams[tem]);
        }
        activeChatDetailObj = arr;*/
            let activeChatDetailObj = {
                team: {
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
                channel: {
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

                user: {
                    id: "1o46dhhacfnk9r1uayubq9mpic",
                    create_at: 1486370521589,
                    username: "imad",
                    email: "hamadkhankhel@gmail.com",
                },
            };
        let userDetailObj = {
            team: {
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
            channel: {
                id: "7be7n47oqpb9tk41zu8encipey",
                create_at: 1486362822638,
                team_id: "far4p4m9njy98mspcnh7fbqish",
                type: "O",
                display_name: "Off-Topic",
                name: "off-topic",
                last_post_at: 1487841552187,
                creator_id: "",
            },
            self: {
                id: "kgrwcfe9opdmdb6jc4b1jn4hhh",
                create_at: 1486362822629,
                display_name: "mahmood",
                name: "mahmood",
                email: "shehbaz.bsee1395@gmail.com",
                type: "O",
            },
        };
    }

    $(document).ready(function () {

        //let c_user = new c_etuser();
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

//==============Functions===========================================================================
        function isTeamExist(defaultT_Id){
            teams = getTeams();
            let tem;
            for (tem in teams) {
                if (defaultT_Id == teams[tem]) {
                    break;
                }
            }
            activeChatDetailObj.team = teams[tem];
        }
        function get_All_Posts() {
            try {
                let posts_data = JSON.parse(getPosts());
                let posts_orders = posts_data.order;
                let rev_posts_orders = posts_orders.reverse();
                let post_items = posts_data.posts;
                let i = 0, getpost_id = "";
                console.log("posts" + post_items);
                console.log("orders" + rev_posts_orders);
                console.log("message: " + post_items[rev_posts_orders[0]].message);
                while (i < rev_posts_orders.length) {
                    let message = post_items[rev_posts_orders[i]].message;
                    getpost_id = post_items[rev_posts_orders[i]].id;
                    console.log(getpost_id);
                    filter(message, getpost_id);
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
        function filter(message, getpost_id) {
            if (getpost_id == userobj.Self.id) {
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
                createPost(messg);
            } catch (e) {
                console.log("message not created" + e.message);
            }

        }

        //==============================================
        function getPosts_After_Post() {
            try {
                let after_posts = JSON.parse(getPostsAfterPost());
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

//============================-Classes-===========================================================
        function getAllPosts() {
            let getAllPostsObj = {
                teamId: initiate(activeChatDetailObj.team.id),
                channelId: initiate(activeChatDetailObj.channel.id),
            };
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/createPost',
                dataType: 'JSON',
                data: JSON.stringify(getAllPostsObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        function createPost(msg) {
            let createPostObj = {
                teamId: activeChatDetailObj.team.id,
                thannelId: activeChatDetailObj.channel.id,
                message: msg,
            };
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/createPost',
                dataType: 'JSON',
                data: JSON.stringify(createPostObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        function getPostsAfterPost() {
            let getPostsAfterPostObj = {
                teamId: activeChatDetailObj.team.id,
                channelId:activeChatDetailObj.channel.id,
                post_id: last_post_id,
                offset:0,
                limit:10,
            };
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/postsAfterPost',
                dataType: 'JSON',
                data: JSON.stringify(getPostsAfterPostObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        function getPostsSinceTime(){
            let getPostsSinceTimeObj = {
                teamId: activeChatDetailObj.team.id,
                channelId:activeChatDetailObj.channel.id,
            };
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/getpostssincetime',
                dataType: 'JSON',
                data: JSON.stringify(getPostsSinceTimeObj),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }
        //=========Teams==================
        function getTeams() {
                $data = "";
                $.ajax({
                    url: HostUrl+ '/' +Controller+ '/getallTeams',
                    dataType: 'json',
                    type: 'GET',
                    success: function (response) {
                        data = response;
                    }
                });
                return data;
            }

        function getTeamMembers(){
            let getTeamMembersObj = {
                TeamId: userobj.Teams.id,
                Offset:0,
                Limit:10,
            };
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/getteammembers',
                dataType: 'JSON',
                data: JSON.stringify(getTeamMembers),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }



        function accessUsers() {
            let data = "";
            $.ajax({
                url: HostUrl + '/' + Controller + '/getAllPosts',
                dataType: 'JSON',
                type: 'GET',
                success: function (response) {
                    data = response;
                }
            });
            return data;
        }

        console.log("Inside the function "+userobj)

    });
    console.log("Outside the function "+userobj)




