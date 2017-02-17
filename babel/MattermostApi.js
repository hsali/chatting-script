
class API{
    constructor(){
        //For Team
        this.getTeams = "getallTeams";
        this.getTeamObject = "";
        this.getTeamMembers = "";
        //For Post
        this.createPost = "";
        this.getPosts = "GetAllposts";
        this.getPost = "";
        this.getPostsSinceTime = "";
        this.getPostsBeforePost = "";
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
class Teams{
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
        var api = new API();
    }
    getTeams() {

        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+api.getTeams,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
    getTeamObject(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id},
            type: 'POST',
            success: function (data) {
                $("#getTeamObject").html(data)
            }
        });
    }
    getTeamMembers(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,offset,limit},
            type: 'POST',
            success: function (data) {
                $("#getTeamMembers").html(data)
            }
        });
    }
}

class Post {
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi"
    }
   testPost(){
       alert("hello test post" +this.HostUrl + "/" + this.Controller);
       var path ="getAllPosts";
       $.ajax({
           url: this.HostUrl+ '/' +this.Controller + '/'+path,
           dataType: 'json',
           type: 'GET',
           success: function (data) {
               console.log("getAllPost succes");
               alert("getAllPost success" + data);
           }
       });
   }
    getPosts(){
        var path ="getAllPosts";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {team_id,offset,limit},
            type: 'POST',
            success: function (data) {
                alert("getposts parameters:").html(data)
            }
        });
    }

    createPost(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id},
            type: 'POST',
            success: function (data) {
                $("#creatPost").html(data)
            }
        });
    }
    getPost(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,post_id},
            type: 'POST',
            success: function (data) {
                $("#getaPost").html(data)
            }
        });
    }
    getPostsSinceTime(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,time },
            type: 'POST',
            success: function (data) {
                $("#getPostsSinceTime").html(data)
            }
        });
    }
    getPostsBeforePost(){
        var path ="";
        $.ajax({
            urlurl: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,post_id,offset,limit},
            type: 'POST',
            success: function (data) {
                $("#getPostsBeforePost").html(data)
            }
        });
    }
    getReactionsToPost(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,post_id},
            type: 'POST',
            success: function (data) {
                $("#getReactionsToPost").html(data)
            }
        });
    }
}
class Channels{
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi"
    }

    getChannels() {
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,channel_id},
            type: 'POST',
            success: function (data) {
                console.log(data);
            }
        });
    }
    getChannel() {
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,channel_id},
            type: 'POST',
            success: function (data) {
                $("#getChannel").html(data)
            }
        });
}
    creatChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#creatChannel").html(data)
            }
        });
    }
    viewChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#viewChannel").html(data)
            }
        });
    }
    getchannelsforUser(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#getchannelsforUser").html(data)
            }
        });
    }
    getChannelByName(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,channel_name},
            type: 'POST',
            success: function (data) {
                $("#getchannelsforUser").html(data)
            }
        });
    }
}
class Users{
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi"
    }

    getUsers() {
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {offset,limit},
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
    searchUsers(){
        var path ="";
        $.ajax({
            uurl: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: term,team_id,in_channel_id,not_in_channel_id,allow_inactive},
            type: 'POST',
            success: function (data) {
                $("#searchUsers").html(data)
            }
        });
    }
    getUsersInChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,offset,limit},
            type: 'POST',
            success: function (data) {
                $("#getUsersInChannel").html(data)
            }
        });
    }
}

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
    let $input = $('#mmc-input');

});