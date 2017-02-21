$(document).ready(function(){

    var lastPostTime=0;

    function  createPost(){
        var chatObj = {
            TeamId: "c9fshi7c5brn7fq5saqf35xtsy",
            ChannelId: "6cjbxemczff4bp3h68gkhcmwty",
            Message: "Hello World"
        };

        $.ajax({
            url: '/MattermostApi/messagePost',
            type: "POST",
            data: JSON.stringify(chatObj),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (result) {

            },

            error: function () {

            }
        });
    }

   /* function getAllPosts(){
        var posts_response = '{"order":["pc7f3m5sz7rbix99ajn1u7bo5r","jsibifr1gfb4bk6shf5dm6qaty","55pquph5wibtdn343cpuwpdqqc","izjagsd9zty15by5cq6xh4xm8o","ymyqbg6kn3gnukndq5fqmiqbye","7j8mehz7zjdg5q9nw15y5eg89a","w4f8en4wotrciq45zf33f6sp5y","jcuy6cffb3ynpcjpebrqbnexmr","77bxx3mw8fr75k47rmstunsszr","oa7e5hzqr3gs7mw34zznp5qmfw","1egwbw3gf7dwjp5b3sm7gmq6xh","x8htzkjej3rqfmw5eqazrmjwwy","sx6kgidpabdedp18e5ezurjzro","1c6s95mxxtbq8kzrh9ps93buxh"],"posts":{"1c6s95mxxtbq8kzrh9ps93buxh":{"id":"1c6s95mxxtbq8kzrh9ps93buxh","create_at":1486362822674,"update_at":1486362822674,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hsali has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"1egwbw3gf7dwjp5b3sm7gmq6xh":{"id":"1egwbw3gf7dwjp5b3sm7gmq6xh","create_at":1486368674211,"update_at":1486368674211,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"postman API","type":"","props":{},"hashtags":"","file_ids":["tgoz6efd6tnhtftbpkzxd9f9ny"],"pending_post_id":""},"55pquph5wibtdn343cpuwpdqqc":{"id":"55pquph5wibtdn343cpuwpdqqc","create_at":1487147269327,"update_at":1487147269327,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"okay","type":"","props":{},"hashtags":"","pending_post_id":""},"77bxx3mw8fr75k47rmstunsszr":{"id":"77bxx3mw8fr75k47rmstunsszr","create_at":1486377658934,"update_at":1486377658934,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"yasirali has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"7j8mehz7zjdg5q9nw15y5eg89a":{"id":"7j8mehz7zjdg5q9nw15y5eg89a","create_at":1486645203524,"update_at":1486645203524,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"latest postman collection json file ","type":"","props":{},"hashtags":"","file_ids":["dkik61m3d3nn3kj73gguqm8thh"],"pending_post_id":""},"izjagsd9zty15by5cq6xh4xm8o":{"id":"izjagsd9zty15by5cq6xh4xm8o","create_at":1487147226498,"update_at":1487147226498,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. ","type":"","props":{},"hashtags":"","pending_post_id":""},"jcuy6cffb3ynpcjpebrqbnexmr":{"id":"jcuy6cffb3ynpcjpebrqbnexmr","create_at":1486468353055,"update_at":1486468353055,"delete_at":0,"user_id":"aqbots94s3f1dfkj77bj8s8qcw","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"mahmoodch107 has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"jsibifr1gfb4bk6shf5dm6qaty":{"id":"jsibifr1gfb4bk6shf5dm6qaty","create_at":1487147275187,"update_at":1487147275187,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. second testing ","type":"","props":{},"hashtags":"","pending_post_id":""},"oa7e5hzqr3gs7mw34zznp5qmfw":{"id":"oa7e5hzqr3gs7mw34zznp5qmfw","create_at":1486370521707,"update_at":1486370521707,"delete_at":0,"user_id":"1o46dhhacfnk9r1uayubq9mpic","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"imad has joined the channel.","type":"system_join_leave","props":{},"hashtags":"","pending_post_id":""},"pc7f3m5sz7rbix99ajn1u7bo5r":{"id":"pc7f3m5sz7rbix99ajn1u7bo5r","create_at":1487152184479,"update_at":1487152184479,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"Message from post man . I am yasir. second testing ","type":"","props":{},"hashtags":"","pending_post_id":""},"sx6kgidpabdedp18e5ezurjzro":{"id":"sx6kgidpabdedp18e5ezurjzro","create_at":1486368379281,"update_at":1486368379281,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hi","type":"","props":{},"hashtags":"","pending_post_id":""},"w4f8en4wotrciq45zf33f6sp5y":{"id":"w4f8en4wotrciq45zf33f6sp5y","create_at":1486469353943,"update_at":1486469353943,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"","type":"","props":{},"hashtags":"","file_ids":["54yiqho6b7bnfb141kdzz3gmcc"],"pending_post_id":""},"x8htzkjej3rqfmw5eqazrmjwwy":{"id":"x8htzkjej3rqfmw5eqazrmjwwy","create_at":1486368381212,"update_at":1486368381212,"delete_at":0,"user_id":"ba1jw9m6m78fzfyx96xwrdz4to","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"how are you? ","type":"","props":{},"hashtags":"","pending_post_id":""},"ymyqbg6kn3gnukndq5fqmiqbye":{"id":"ymyqbg6kn3gnukndq5fqmiqbye","create_at":1487147089197,"update_at":1487147089197,"delete_at":0,"user_id":"b98pquyt47bk38ebb6qm65nqdh","channel_id":"7be7n47oqpb9tk41zu8encipey","root_id":"","parent_id":"","original_id":"","message":"hello","type":"","props":{},"hashtags":"","pending_post_id":""}}}';

        var posts_data = JSON.parse(posts_response);
        var posts_orders= posts_data.order;
        var rev_posts_orders = posts_orders.reverse();
        var post_items = posts_data.posts;
        var i=0;
        console.log("posts" + post_items);
        console.log("orders" +rev_posts_orders);
        console.log("message: " + post_items[rev_posts_orders[0]].message);
        while(i<rev_posts_orders.length){
            var message = post_items[rev_posts_orders[i]].message;
            setTimeout(() => {
                console.log(message);
                messenger.recieve(message);
            }, (i*500+1));
            i++;
        }

    }*/

    function renderAllPosts(){

    }

    function filterAllPosts(){

    }
});

function ttest(){
    console.log("is it working?");
    alert("alert");
}