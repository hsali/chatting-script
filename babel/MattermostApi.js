
class API{
    constructor(){
        this.getAllTeams = "";
        this.getAllChannels ="";
        this.getAllPosts = "";
        this.createPost = "";
        this.getTeamObject = "";
    }
}
class Post {
    constructor(options) {
        this.HostUrl = options.HostUrl;
        this.Controller = "MattermostApi"
    }

    getAllTeams() {
        $.ajax({
            url: this.HostUrl+ '/' +this.Controller + '',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }

    createPost(){
        $.ajax({
            url: this.HostUrl+Controller,
            dataType: 'json',
            data: {id: id},
            type: 'POST',
            success: function (data) {
                $("#teamPopup").html(data)
            }
        });
    }

}