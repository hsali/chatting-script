"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function API() {
    _classCallCheck(this, API);

    this.HostUrl = "http://localhost:51916";
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
    this.getChannels = "";
    this.getChannel = "";
    this.getChannelByName = "";
    this.creatChannel = "";
    //For User
    this.getUsers = "";
    this.searchUsers = "";
    this.getUsersInChannel = "";
};

var Teams = function () {
    function Teams() {
        _classCallCheck(this, Teams);
    }

    _createClass(Teams, [{
        key: "getTeams",

        /* constructor(options) {
             this.HostUrl = options.HostUrl;
             this.Controller = "MattermostApi";
             var api = new API();
         }*/
        value: function getTeams() {

            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getTeams,
                dataType: 'json',
                type: 'GET',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getTeamObject",
        value: function getTeamObject() {
            var path = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getTeamObject,
                dataType: 'json',
                data: { id: team_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getTeamMembers",
        value: function getTeamMembers() {
            var path = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getTeamObject,
                dataType: 'json',
                data: { id: team_id, offset: offset, limit: limit },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }]);

    return Teams;
}();

var Post = function () {
    function Post() {
        _classCallCheck(this, Post);

        var api = new API();
    }

    _createClass(Post, [{
        key: "testPost",
        value: function testPost() {
            alert("Hello");
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            var data = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getPosts,
                dataType: 'json',
                type: 'GET',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "createPost",
        value: function createPost(msg) {
            var data = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.createPost,
                dataType: 'json',
                data: { TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
                    ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
                    Message: "Hello World" },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getPost",
        value: function getPost() {
            var data = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getPost,
                dataType: 'json',
                data: { team_id: "c9fshi7c5brn7fq5saqf35xtsy", channel_id: channel_id, post_id: post_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getPostsSinceTime",
        value: function getPostsSinceTime() {
            var data = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getPostsSinceTime,
                dataType: 'json',
                data: { team_id: "c9fshi7c5brn7fq5saqf35xtsy", channel_id: "6cjbxemczff4bp3h68gkhcmwty", time: "1487570944617" },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getPostsAfterPost",
        value: function getPostsAfterPost() {
            var data = "";
            $.ajax({
                url: api.HostUrl + '/' + api.Controller + '/' + api.getPostsAfterPost,
                dataType: 'json',
                data: { team_id: "c9fshi7c5brn7fq5saqf35xtsy", channel_id: "6cjbxemczff4bp3h68gkhcmwty", post_id: "12345", offset: "slkjsdf", limit: limit },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getReactionsToPost",
        value: function getReactionsToPost() {
            var data = "";
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, post_id: post_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }]);

    return Post;
}();

var Channels = function () {
    function Channels(options) {
        _classCallCheck(this, Channels);

        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
    }

    _createClass(Channels, [{
        key: "getChannels",
        value: function getChannels() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id },
                type: 'POST',
                ssuccess: function ssuccess(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getChannel",
        value: function getChannel() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "creatChannel",
        value: function creatChannel() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "viewChannel",
        value: function viewChannel() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getchannelsforUser",
        value: function getchannelsforUser() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getChannelByName",
        value: function getChannelByName() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_name: channel_name },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }]);

    return Channels;
}();

var Users = function () {
    function Users(options) {
        _classCallCheck(this, Users);

        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
    }

    _createClass(Users, [{
        key: "getUsers",
        value: function getUsers() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { offset: offset, limit: limit },
                type: 'GET',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "searchUsers",
        value: function searchUsers() {
            var path = "";
            $.ajax({
                uurl: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: term, team_id: team_id, in_channel_id: in_channel_id, not_in_channel_id: not_in_channel_id, allow_inactive: allow_inactive },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }, {
        key: "getUsersInChannel",
        value: function getUsersInChannel() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, offset: offset, limit: limit },
                type: 'POST',
                success: function success(response) {
                    data = response;
                }
            });
            return data;
        }
    }]);

    return Users;
}();

/*(function () {
    alert("hello auto");
    var obj = new API();
    alert("Team url" + obj.getTeams);

    $("#mmc-onoffbutton").click(function(){
        let pos = new Post({HostUrl:"http://service.net.class"});
        pos.testPost()
    });
}());*/

$(document).ready(function () {
    var $input = $('#mmc-input');
});