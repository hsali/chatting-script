"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function API() {
    _classCallCheck(this, API);

    this.getAllTeams = "";
    this.getAllChannels = "";
    this.getAllPosts = "";
    this.createPost = "";
    this.getTeamObject = "";
};

var Post = function () {
    function Post(options) {
        _classCallCheck(this, Post);

        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
    }

    _createClass(Post, [{
        key: "getAllTeams",
        value: function getAllTeams() {
            $.ajax({
                url: this.HostUrl + '/' + this.Controller + '',
                dataType: 'json',
                type: 'GET',
                success: function success(data) {
                    console.log(data);
                }
            });
        }
    }, {
        key: "createPost",
        value: function createPost() {
            $.ajax({
                url: this.HostUrl + Controller,
                dataType: 'json',
                data: { id: id },
                type: 'POST',
                success: function success(data) {
                    $("#teamPopup").html(data);
                }
            });
        }
    }]);

    return Post;
}();