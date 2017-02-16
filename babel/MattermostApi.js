
class API{
    constructor(){
        //For Team
        this.getAllTeams = "";
        this.getTeamObject = "";
        this.getTeamMembers = "";
        //For Post
        this.createPost = "";
        this.getPosts = "";
        this.getPost = "";
        this.getPostSinceTime = "";
        this.getPostBeforePost = "";
        this.getReactToPost = "";
        //For Channels
        this.getChannels ="";
        this.getChannel = "";
        this.getChannelByName = "";
        this.creatChannel = "";
        //For Users
        this.getUsers = "";
        this.getUsersInTeam = "";
        this.searchUsers = "";
        this.getUserInChannel = "";
    }
}
class Teams{
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi"
    }

    getAllteams() {
        var path = "getAllteams";
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '/'+path,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
    getTeamObject(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id},
            type: 'POST',
            success: function (data) {
                $("#getTeamObject").html(data)
            }
        });
    }

    getTeamMembers(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
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
        alert("hello test post");
    }
    getPosts(){
        var path ="getPosts"
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

    createPost(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: channel_id,message},
            type: 'POST',
            success: function (data) {
                $("#creatPost").html(data)
            }
        });
    }
    getPost(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id,channel_id,post_id},
            type: 'POST',
            success: function (data) {
                $("#getaPost").html(data)
            }
        });
    }
    getPostSinceTime(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id,channel_id,time },
            type: 'POST',
            success: function (data) {
                $("#getPostsinceTime").html(data)
            }
        });
    }
    getPostBeforePost(){
        $.ajax({
            urlurl: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id,channel_id,post_id,offset,limit},
            type: 'POST',
            success: function (data) {
                $("#getPostBeforePost").html(data)
            }
        });
    }
    getReactToPost(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id,channel_id,post_id},
            type: 'POST',
            success: function (data) {
                $("#getReactToPost").html(data)
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
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
    getChannel() {
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id:team_id,channel_id},
            type: 'POST',
            success: function (data) {
                $("#getChannel").html(data)
            }
        });
}
    creatChannel(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#creatChannel").html(data)
            }
        });
    }
    viewChannel(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#viewChannel").html(data)
            }
        });
    }
    getchannelsforUser(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id:team_id},
            type: 'POST',
            success: function (data) {
                $("#getchannelsforUser").html(data)
            }
        });
    }
    getChannelByName(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
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
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
    searchUsers(){
        $.ajax({
            uurl: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: term,team_id,in_channel_id,not_in_channel_id,allow_inactive},
            type: 'POST',
            success: function (data) {
                $("#searchUsers").html(data)
            }
        });
    }
    getUserInChannel(){
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            data: {id: team_id,channel_id,offset,limit},
            type: 'POST',
            success: function (data) {
                $("#getUserInChannel").html(data)
            }
        });
    }
}