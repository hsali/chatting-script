"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function API() {
    _classCallCheck(this, API);

    //For Team
    this.getTeams = "getallTeams";
    this.getTeamObject = "";
    this.getTeamMembers = "";
    //For Post
    this.createPost = "";
    this.getPosts = "getAllposts";
    this.getPost = "";
    this.getPostsSinceTime = "";
    this.getPostsBeforePost = "";
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
    function Teams(options) {
        _classCallCheck(this, Teams);

        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
        var api = new API();
    }

    _createClass(Teams, [{
        key: "getTeams",
        value: function getTeams() {

            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + api.getTeams,
                dataType: 'json',
                type: 'GET',
                success: function success(data) {
                    console.log(data);
                }
            });
        }
    }, {
        key: "getTeamObject",
        value: function getTeamObject() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id },
                type: 'POST',
                success: function success(data) {
                    $("#getTeamObject").html(data);
                }
            });
        }
    }, {
        key: "getTeamMembers",
        value: function getTeamMembers() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, offset: offset, limit: limit },
                type: 'POST',
                success: function success(data) {
                    $("#getTeamMembers").html(data);
                }
            });
        }
    }]);

    return Teams;
}();

var Post = function () {
    function Post(options) {
        _classCallCheck(this, Post);

        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
    }

    _createClass(Post, [{
        key: "testPost",
        value: function testPost() {
            alert("hello test post" + this.HostUrl + "/" + this.Controller);
            var path = "getAllPosts";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                type: 'GET',
                success: function success(data) {
                    console.log("getAllPost success");
                    alert("getAllPost success" + data);
                }
            });
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            var path = "getAllPosts";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { team_id: team_id, offset: offset, limit: limit },
                type: 'POST',
                success: function success(data) {
                    alert("getposts parameters:").html(data);
                }
            });
        }
    }, {
        key: "createPost",
        value: function createPost() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id },
                type: 'POST',
                success: function success(data) {
                    $("#creatPost").html(data);
                }
            });
        }
    }, {
        key: "getPost",
        value: function getPost() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, post_id: post_id },
                type: 'POST',
                success: function success(data) {
                    $("#getaPost").html(data);
                }
            });
        }
    }, {
        key: "getPostsSinceTime",
        value: function getPostsSinceTime() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, time: time },
                type: 'POST',
                success: function success(data) {
                    $("#getPostsSinceTime").html(data);
                }
            });
        }
    }, {
        key: "getPostsBeforePost",
        value: function getPostsBeforePost() {
            var path = "";
            $.ajax({
                urlurl: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, post_id: post_id, offset: offset, limit: limit },
                type: 'POST',
                success: function success(data) {
                    $("#getPostsBeforePost").html(data);
                }
            });
        }
    }, {
        key: "getReactionsToPost",
        value: function getReactionsToPost() {
            var path = "";
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '/' + path,
                dataType: 'json',
                data: { id: team_id, channel_id: channel_id, post_id: post_id },
                type: 'POST',
                success: function success(data) {
                    $("#getReactionsToPost").html(data);
                }
            });
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
                success: function success(data) {
                    console.log(data);
                }
            });
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
                success: function success(data) {
                    $("#getChannel").html(data);
                }
            });
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
                success: function success(data) {
                    $("#creatChannel").html(data);
                }
            });
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
                success: function success(data) {
                    $("#viewChannel").html(data);
                }
            });
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
                success: function success(data) {
                    $("#getchannelsforUser").html(data);
                }
            });
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
                success: function success(data) {
                    $("#getchannelsforUser").html(data);
                }
            });
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
                success: function success(data) {
                    console.log(data);
                }
            });
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
                success: function success(data) {
                    $("#searchUsers").html(data);
                }
            });
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
                success: function success(data) {
                    $("#getUsersInChannel").html(data);
                }
            });
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