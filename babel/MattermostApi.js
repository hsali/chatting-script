
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
let data = "";
class Teams{
   /* constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi";
        var api = new API();
    }*/
    getTeams() {

        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getTeams,
            dataType: 'json',
            type: 'GET',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getTeamObject(){
        var path ="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getTeamObject,
            dataType: 'json',
            data: {id: team_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getTeamMembers(){
        var path ="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getTeamObject,
            dataType: 'json',
            data: {id:team_id,offset,limit},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
}

class Post {
    constructor() {
        let api = new API();
    }
   testPost(){
       alert("Hello");
   }
    getPosts(){
       let data="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getPosts,
            dataType: 'json',
            type: 'GET',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }

    createPost(msg){
        let data="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.createPost,
            dataType: 'json',
            data: {TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
            ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
            Message: "Hello World"},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getPost(){
        let data="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getPost,
            dataType: 'json',
            data: {team_id:"c9fshi7c5brn7fq5saqf35xtsy",channel_id,post_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getPostsSinceTime(){
        let data="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getPostsSinceTime,
            dataType: 'json',
            data: {team_id:"c9fshi7c5brn7fq5saqf35xtsy",channel_id:"6cjbxemczff4bp3h68gkhcmwty",time:"1487570944617" },
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getPostsAfterPost(){
        let data="";
        $.ajax({
            url: api.HostUrl+ '/' +api.Controller+ '/'+api.getPostsAfterPost,
            dataType: 'json',
            data: {team_id:"c9fshi7c5brn7fq5saqf35xtsy",channel_id:"6cjbxemczff4bp3h68gkhcmwty",post_id:"12345",offset:"slkjsdf",limit},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getReactionsToPost(){
        let data="";
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,post_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
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
            ssuccess: function (response) {
                data = response;
            }
        });
        return data;
    }
    getChannel() {
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,channel_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
}
    creatChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    viewChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getchannelsforUser(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getChannelByName(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id:team_id,channel_name},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
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
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    searchUsers(){
        var path ="";
        $.ajax({
            uurl: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: term,team_id,in_channel_id,not_in_channel_id,allow_inactive},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    getUsersInChannel(){
        var path ="";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            data: {id: team_id,channel_id,offset,limit},
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
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