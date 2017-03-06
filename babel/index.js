    /**
     * 0 - test environment
     * 1 - production environment
     * @type {number}
     */

    let lastPostId = "";
    let lastPostTime = "";

    let env = 0;
    let hostURL = "http://localhost:51916/";
    let pathURL = "MattermostApi/";
    let accessURLs = {
        getTeams: hostURL + pathURL + "GetAllTeams",
        getTeam: hostURL + pathURL + "GetATeamObject",
        createPost: hostURL + pathURL + "postMessage",
        getPostsAfterPost: hostURL + pathURL + "postsAfterPost",
        getPostsSinceTime: hostURL + pathURL + "GetPostSinceATime",
        getChannels: hostURL + pathURL + "GetAllChannels",
        getChannel: hostURL + pathURL + "GetAllChannels",
        getChannelByName: hostURL + pathURL + "GetChannelByName",
        getUsersInChannel: hostURL + pathURL + "GetUsersInChannel",
        accessUsers: hostURL + pathURL + "accessUsers",
        getThumbnail: hostURL + pathURL + "getThumbnail",
    };
    let defaultDetail = {
        teamId: "far4p4m9njy98mspcnh7fbqish",
        channelId: "drp7mzbz87b5jx4qam7kx817so",
        userId: "1o46dhhacfnk9r1uayubq9mpic",
    };

    let testDetail = {
        teams: {
            "far4p4m9njy98mspcnh7fbqish": {
                "id": "far4p4m9njy98mspcnh7fbqish",
                "create_at": 1486362822629,
                "update_at": 1486362822629,
                "delete_at": 0,
                "display_name": "ai",
                "name": "ai",
                "description": "",
                "email": "shehbaz.bsee1395@gmail.com",
                "type": "O",
                "company_name": "",
                "allowed_domains": "",
                "invite_id": "59dz6oygabfq589gc9ehh8nigy",
                "allow_open_invite": false
            },
            "kgrwcfe9opdmdb6jc4b1jn4hhh": {
                "id": "kgrwcfe9opdmdb6jc4b1jn4hhh",
                "create_at": 1486464222877,
                "update_at": 1486464222877,
                "delete_at": 0,
                "display_name": "frontend",
                "name": "frontend",
                "description": "",
                "email": "mahmoodch107@gmail.com",
                "type": "O",
                "company_name": "",
                "allowed_domains": "",
                "invite_id": "tbjwwyx8f7d19b8ix98y38ca8a",
                "allow_open_invite": false
            },
            "sqeb57bc7bgajj4p4mb4a1q54o": {
                "id": "sqeb57bc7bgajj4p4mb4a1q54o",
                "create_at": 1486704506506,
                "update_at": 1486704584238,
                "delete_at": 0,
                "display_name": "ABC",
                "name": "abc",
                "description": "",
                "email": "yasir.ali5614@gmail.com",
                "type": "O",
                "company_name": "",
                "allowed_domains": "",
                "invite_id": "8yh68pchj7rupcjpce15sro3zo",
                "allow_open_invite": true
            }
        },
        channels: {
            "far4p4m9njy98mspcnh7fbqish": [
                {
                    "id": "7be7n47oqpb9tk41zu8encipey",
                    "create_at": 1486362822638,
                    "update_at": 1486362822638,
                    "delete_at": 0,
                    "team_id": "far4p4m9njy98mspcnh7fbqish",
                    "type": "O",
                    "display_name": "Off Topic-ai",
                    "name": "off-topic",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1487922820957,
                    "total_msg_count": 14,
                    "extra_update_at": 1487922820954,
                    "creator_id": ""
                },
                {
                    "id": "tohoobbjpf88pft5upfjdnjx5a",
                    "create_at": 1486362822632,
                    "update_at": 1486362822632,
                    "delete_at": 0,
                    "team_id": "far4p4m9njy98mspcnh7fbqish",
                    "type": "O",
                    "display_name": "Town Square-ai",
                    "name": "town-square",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1487922820942,
                    "total_msg_count": 2,
                    "extra_update_at": 1487922820939,
                    "creator_id": ""
                }
            ],
            "kgrwcfe9opdmdb6jc4b1jn4hhh":[
                {
                    "id": "qexhwiihsibumghidgg5uhuyzh",
                    "create_at": 1486464222886,
                    "update_at": 1486464222886,
                    "delete_at": 0,
                    "team_id": "kgrwcfe9opdmdb6jc4b1jn4hhh",
                    "type": "O",
                    "display_name": "Off Topic-frontend",
                    "name": "off-topic",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1488604071838,
                    "total_msg_count": 3,
                    "extra_update_at": 1486464222923,
                    "creator_id": ""
                },
                {
                    "id": "4st579qwa3fxzpaugqs6ibnf5a",
                    "create_at": 1486464222881,
                    "update_at": 1486464222881,
                    "delete_at": 0,
                    "team_id": "kgrwcfe9opdmdb6jc4b1jn4hhh",
                    "type": "O",
                    "display_name": "Town Square-frontend",
                    "name": "town-square",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1488278539519,
                    "total_msg_count": 2,
                    "extra_update_at": 1486464222907,
                    "creator_id": ""
                }
            ],
            "sqeb57bc7bgajj4p4mb4a1q54o": [
                {
                    "id": "n1wyjgkcjpbejktr6n7ega4g7h",
                    "create_at": 1486704506515,
                    "update_at": 1486704506515,
                    "delete_at": 0,
                    "team_id": "sqeb57bc7bgajj4p4mb4a1q54o",
                    "type": "O",
                    "display_name": "Off-Topic-ABC",
                    "name": "off-topic",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1487572336966,
                    "total_msg_count": 2,
                    "extra_update_at": 1487572336963,
                    "creator_id": ""
                },
                {
                    "id": "rincgswz1tbz8j7yhxrbjpkgsw",
                    "create_at": 1486704506510,
                    "update_at": 1486704506510,
                    "delete_at": 0,
                    "team_id": "sqeb57bc7bgajj4p4mb4a1q54o",
                    "type": "O",
                    "display_name": "Town Square-ABC",
                    "name": "town-square",
                    "header": "",
                    "purpose": "",
                    "last_post_at": 1488278484972,
                    "total_msg_count": 6,
                    "extra_update_at": 1487572336948,
                    "creator_id": ""
                }
            ]
        },
        posts: {
            "far4p4m9njy98mspcnh7fbqish": {
                "7be7n47oqpb9tk41zu8encipey":{
                    "order": [
                        "rsf7zpqq9iby5rwe4a1p5rw56h",
                        "gw4aa6ofx7dcirswto4ijfcmiw",
                        "1ik7m9p1a7ns9qapq88b4y6khh",
                        "ofpqi9sn5iggpf64kauwn3iwbh",
                        "a31jmgiqq3gr8pz4r4qy5yn6ne",
                        "pc7f3m5sz7rbix99ajn1u7bo5r",
                        "jsibifr1gfb4bk6shf5dm6qaty",
                        "55pquph5wibtdn343cpuwpdqqc",
                        "izjagsd9zty15by5cq6xh4xm8o",
                        "ymyqbg6kn3gnukndq5fqmiqbye",
                        "7j8mehz7zjdg5q9nw15y5eg89a",
                        "w4f8en4wotrciq45zf33f6sp5y",
                        "jcuy6cffb3ynpcjpebrqbnexmr",
                        "77bxx3mw8fr75k47rmstunsszr",
                        "oa7e5hzqr3gs7mw34zznp5qmfw",
                        "1egwbw3gf7dwjp5b3sm7gmq6xh",
                        "x8htzkjej3rqfmw5eqazrmjwwy",
                        "sx6kgidpabdedp18e5ezurjzro",
                        "1c6s95mxxtbq8kzrh9ps93buxh"
                    ],
                    "posts": {
                        "1c6s95mxxtbq8kzrh9ps93buxh": {
                            "id": "1c6s95mxxtbq8kzrh9ps93buxh",
                            "create_at": 1486362822674,
                            "update_at": 1486362822674,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hsali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "1egwbw3gf7dwjp5b3sm7gmq6xh": {
                            "id": "1egwbw3gf7dwjp5b3sm7gmq6xh",
                            "create_at": 1486368674211,
                            "update_at": 1486368674211,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "postman API",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "file_ids": [
                                "tgoz6efd6tnhtftbpkzxd9f9ny"
                            ],
                            "pending_post_id": ""
                        },
                        "1ik7m9p1a7ns9qapq88b4y6khh": {
                            "id": "1ik7m9p1a7ns9qapq88b4y6khh",
                            "create_at": 1487841552187,
                            "update_at": 1487841552187,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmood",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "55pquph5wibtdn343cpuwpdqqc": {
                            "id": "55pquph5wibtdn343cpuwpdqqc",
                            "create_at": 1487147269327,
                            "update_at": 1487147269327,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "okay",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "77bxx3mw8fr75k47rmstunsszr": {
                            "id": "77bxx3mw8fr75k47rmstunsszr",
                            "create_at": 1486377658934,
                            "update_at": 1486377658934,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "yasirali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "7j8mehz7zjdg5q9nw15y5eg89a": {
                            "id": "7j8mehz7zjdg5q9nw15y5eg89a",
                            "create_at": 1486645203524,
                            "update_at": 1486645203524,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "latest postman collection json file ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "file_ids": [
                                "dkik61m3d3nn3kj73gguqm8thh"
                            ],
                            "pending_post_id": ""
                        },
                        "a31jmgiqq3gr8pz4r4qy5yn6ne": {
                            "id": "a31jmgiqq3gr8pz4r4qy5yn6ne",
                            "create_at": 1487570944617,
                            "update_at": 1487570944617,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Message from post man . I am yasir. second testing ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "gw4aa6ofx7dcirswto4ijfcmiw": {
                            "id": "gw4aa6ofx7dcirswto4ijfcmiw",
                            "create_at": 1487911423887,
                            "update_at": 1487911894948,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "thisddggd",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "file_ids": [
                                "fx8qti1txpgapjq95x4wy4n1tr"
                            ],
                            "pending_post_id": ""
                        },
                        "izjagsd9zty15by5cq6xh4xm8o": {
                            "id": "izjagsd9zty15by5cq6xh4xm8o",
                            "create_at": 1487147226498,
                            "update_at": 1487147226498,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Message from post man . I am yasir. ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "jcuy6cffb3ynpcjpebrqbnexmr": {
                            "id": "jcuy6cffb3ynpcjpebrqbnexmr",
                            "create_at": 1486468353055,
                            "update_at": 1486468353055,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "jsibifr1gfb4bk6shf5dm6qaty": {
                            "id": "jsibifr1gfb4bk6shf5dm6qaty",
                            "create_at": 1487147275187,
                            "update_at": 1487147275187,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Message from post man . I am yasir. second testing ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "oa7e5hzqr3gs7mw34zznp5qmfw": {
                            "id": "oa7e5hzqr3gs7mw34zznp5qmfw",
                            "create_at": 1486370521707,
                            "update_at": 1486370521707,
                            "delete_at": 0,
                            "user_id": "1o46dhhacfnk9r1uayubq9mpic",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "imad has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "ofpqi9sn5iggpf64kauwn3iwbh": {
                            "id": "ofpqi9sn5iggpf64kauwn3iwbh",
                            "create_at": 1487572844266,
                            "update_at": 1487572844266,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Message from post man . I am yasir. second testing ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "pc7f3m5sz7rbix99ajn1u7bo5r": {
                            "id": "pc7f3m5sz7rbix99ajn1u7bo5r",
                            "create_at": 1487152184479,
                            "update_at": 1487152184479,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Message from post man . I am yasir. second testing ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "rsf7zpqq9iby5rwe4a1p5rw56h": {
                            "id": "rsf7zpqq9iby5rwe4a1p5rw56h",
                            "create_at": 1487922820957,
                            "update_at": 1487922820957,
                            "delete_at": 0,
                            "user_id": "xn5i9gr333yndkghdewzytit3r",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "zoobia has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "sx6kgidpabdedp18e5ezurjzro": {
                            "id": "sx6kgidpabdedp18e5ezurjzro",
                            "create_at": 1486368379281,
                            "update_at": 1486368379281,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hi",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "w4f8en4wotrciq45zf33f6sp5y": {
                            "id": "w4f8en4wotrciq45zf33f6sp5y",
                            "create_at": 1486469353943,
                            "update_at": 1486469353943,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "file_ids": [
                                "54yiqho6b7bnfb141kdzz3gmcc"
                            ],
                            "pending_post_id": ""
                        },
                        "x8htzkjej3rqfmw5eqazrmjwwy": {
                            "id": "x8htzkjej3rqfmw5eqazrmjwwy",
                            "create_at": 1486368381212,
                            "update_at": 1486368381212,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "how are you? ",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "ymyqbg6kn3gnukndq5fqmiqbye": {
                            "id": "ymyqbg6kn3gnukndq5fqmiqbye",
                            "create_at": 1487147089197,
                            "update_at": 1487147089197,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "7be7n47oqpb9tk41zu8encipey",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hello",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    },
                },
                "tohoobbjpf88pft5upfjdnjx5a":{
                    "order": [
                        "qpf5ny1j77rqiect4ca6rc9eby",
                        "ge9kt74rfi89zn84fbfxh5zure",
                        "746xh146otrbte5f95hg41npsh",
                        "bnx4xjd4mjbsidnta89obm7a8a",
                        "bcmb51ajn3nttkpq1mi738cmsh",
                        "u6s9igui93f5dx4ajkh1wicchy",
                        "hri39o4h8fndfknnjoz7j8fhrw"
                    ],
                    "posts": {
                        "746xh146otrbte5f95hg41npsh": {
                            "id": "746xh146otrbte5f95hg41npsh",
                            "create_at": 1486468353041,
                            "update_at": 1486468353041,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "bcmb51ajn3nttkpq1mi738cmsh": {
                            "id": "bcmb51ajn3nttkpq1mi738cmsh",
                            "create_at": 1486370521691,
                            "update_at": 1486370521691,
                            "delete_at": 0,
                            "user_id": "1o46dhhacfnk9r1uayubq9mpic",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "imad has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "bnx4xjd4mjbsidnta89obm7a8a": {
                            "id": "bnx4xjd4mjbsidnta89obm7a8a",
                            "create_at": 1486377658922,
                            "update_at": 1486377658922,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "yasirali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "ge9kt74rfi89zn84fbfxh5zure": {
                            "id": "ge9kt74rfi89zn84fbfxh5zure",
                            "create_at": 1487333018071,
                            "update_at": 1487333018071,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "file_ids": [
                                "typi15wmcpdcucwdkwztgu6rnc"
                            ],
                            "pending_post_id": ""
                        },
                        "hri39o4h8fndfknnjoz7j8fhrw": {
                            "id": "hri39o4h8fndfknnjoz7j8fhrw",
                            "create_at": 1486362822661,
                            "update_at": 1486362822661,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hsali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "qpf5ny1j77rqiect4ca6rc9eby": {
                            "id": "qpf5ny1j77rqiect4ca6rc9eby",
                            "create_at": 1487922820942,
                            "update_at": 1487922820942,
                            "delete_at": 0,
                            "user_id": "xn5i9gr333yndkghdewzytit3r",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "zoobia has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "u6s9igui93f5dx4ajkh1wicchy": {
                            "id": "u6s9igui93f5dx4ajkh1wicchy",
                            "create_at": 1486367871491,
                            "update_at": 1486367871491,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "tohoobbjpf88pft5upfjdnjx5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hi",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    },
                },
            },
            "kgrwcfe9opdmdb6jc4b1jn4hhh":{
                "qexhwiihsibumghidgg5uhuyzh":{
                    "order": [
                        "a87rbrs1cprrxcg5i87kg49oew",
                        "3iuheu9gi7f9xby5eu73x9jb8o",
                        "sgc384f19jngubzzizt96x474r"
                    ],
                    "posts": {
                        "3iuheu9gi7f9xby5eu73x9jb8o": {
                            "id": "3iuheu9gi7f9xby5eu73x9jb8o",
                            "create_at": 1488278583551,
                            "update_at": 1488278583551,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "qexhwiihsibumghidgg5uhuyzh",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "off-topic team is running",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "a87rbrs1cprrxcg5i87kg49oew": {
                            "id": "a87rbrs1cprrxcg5i87kg49oew",
                            "create_at": 1488278599082,
                            "update_at": 1488278599082,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "qexhwiihsibumghidgg5uhuyzh",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hsali has join the team",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "sgc384f19jngubzzizt96x474r": {
                            "id": "sgc384f19jngubzzizt96x474r",
                            "create_at": 1486464222926,
                            "update_at": 1486464222926,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "qexhwiihsibumghidgg5uhuyzh",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    },
                },
                "4st579qwa3fxzpaugqs6ibnf5a":{
                    "order": [
                        "wibee5z7xj898y8cbn7antk81y",
                        "8x5aryo74fyyudb46yzdz79ryo",
                        "4pc41q9o1igutkeen64h6z7ygo"
                    ],
                    "posts": {
                        "4pc41q9o1igutkeen64h6z7ygo": {
                            "id": "4pc41q9o1igutkeen64h6z7ygo",
                            "create_at": 1486464222909,
                            "update_at": 1486464222909,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "4st579qwa3fxzpaugqs6ibnf5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "8x5aryo74fyyudb46yzdz79ryo": {
                            "id": "8x5aryo74fyyudb46yzdz79ryo",
                            "create_at": 1488278527179,
                            "update_at": 1488278527179,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "4st579qwa3fxzpaugqs6ibnf5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "khan tak phunchi team",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "wibee5z7xj898y8cbn7antk81y": {
                            "id": "wibee5z7xj898y8cbn7antk81y",
                            "create_at": 1488278539519,
                            "update_at": 1488278539519,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "4st579qwa3fxzpaugqs6ibnf5a",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "abhi to bnani ha",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    }
                },
            },
            "sqeb57bc7bgajj4p4mb4a1q54o":{
                "n1wyjgkcjpbejktr6n7ega4g7h":{
                    "order": [
                        "om5scq49fpn9mjxpgxizcec89c",
                        "1j3jcefei3rjf8attr13agtg1h",
                        "r3gpi5mjqtyifm1x7sywxds73a",
                        "7urzny1fx7rz5mfw95f18ke3xo",
                        "x3s6kxtqo7byugyxrdy5mocq7c"
                    ],
                    "posts": {
                        "1j3jcefei3rjf8attr13agtg1h": {
                            "id": "1j3jcefei3rjf8attr13agtg1h",
                            "create_at": 1487139451105,
                            "update_at": 1487139451105,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "n1wyjgkcjpbejktr6n7ega4g7h",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "this is yasir ali",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "7urzny1fx7rz5mfw95f18ke3xo": {
                            "id": "7urzny1fx7rz5mfw95f18ke3xo",
                            "create_at": 1486704642658,
                            "update_at": 1486704642658,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "n1wyjgkcjpbejktr6n7ega4g7h",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hsali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "om5scq49fpn9mjxpgxizcec89c": {
                            "id": "om5scq49fpn9mjxpgxizcec89c",
                            "create_at": 1487572336966,
                            "update_at": 1487572336966,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "n1wyjgkcjpbejktr6n7ega4g7h",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "r3gpi5mjqtyifm1x7sywxds73a": {
                            "id": "r3gpi5mjqtyifm1x7sywxds73a",
                            "create_at": 1487139444817,
                            "update_at": 1487139444817,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "n1wyjgkcjpbejktr6n7ega4g7h",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hi",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "x3s6kxtqo7byugyxrdy5mocq7c": {
                            "id": "x3s6kxtqo7byugyxrdy5mocq7c",
                            "create_at": 1486704506549,
                            "update_at": 1486704506549,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "n1wyjgkcjpbejktr6n7ega4g7h",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "yasirali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    }
                },
                "rincgswz1tbz8j7yhxrbjpkgsw":{
                    "order": [
                        "j5id8un9aigrp8ig75qumutyca",
                        "qjhoyictxi8mzcbuookntan18e",
                        "dz1uumeitj8q8mp16ktfwz7cqa",
                        "t5rt7m5tc3ge8xo4gpcxom8kye",
                        "gd9tw1tjhibujqtpbr3d1xseho",
                        "c5dqxo7up7r33y4yw6w179h5kw",
                        "3wjxjmw3hpdfzk3rux8zdbe5ao",
                        "i1gzmc8j8bgjjeq7punygmufar",
                        "izfnoyyxiidfm8upffhbqfcouw"
                    ],
                    "posts": {
                        "3wjxjmw3hpdfzk3rux8zdbe5ao": {
                            "id": "3wjxjmw3hpdfzk3rux8zdbe5ao",
                            "create_at": 1487572336951,
                            "update_at": 1487572336951,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmoodch107 has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "c5dqxo7up7r33y4yw6w179h5kw": {
                            "id": "c5dqxo7up7r33y4yw6w179h5kw",
                            "create_at": 1488278430659,
                            "update_at": 1488278430659,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "Hello testing",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "dz1uumeitj8q8mp16ktfwz7cqa": {
                            "id": "dz1uumeitj8q8mp16ktfwz7cqa",
                            "create_at": 1488278469977,
                            "update_at": 1488278469977,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "khuch bi likho",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "gd9tw1tjhibujqtpbr3d1xseho": {
                            "id": "gd9tw1tjhibujqtpbr3d1xseho",
                            "create_at": 1488278447651,
                            "update_at": 1488278447651,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "How are you?",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "i1gzmc8j8bgjjeq7punygmufar": {
                            "id": "i1gzmc8j8bgjjeq7punygmufar",
                            "create_at": 1486704642647,
                            "update_at": 1486704642647,
                            "delete_at": 0,
                            "user_id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "hsali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "izfnoyyxiidfm8upffhbqfcouw": {
                            "id": "izfnoyyxiidfm8upffhbqfcouw",
                            "create_at": 1486704506533,
                            "update_at": 1486704506533,
                            "delete_at": 0,
                            "user_id": "b98pquyt47bk38ebb6qm65nqdh",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "yasirali has joined the channel.",
                            "type": "system_join_leave",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "j5id8un9aigrp8ig75qumutyca": {
                            "id": "j5id8un9aigrp8ig75qumutyca",
                            "create_at": 1488278484972,
                            "update_at": 1488278484972,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "kafi ho gia ha",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "qjhoyictxi8mzcbuookntan18e": {
                            "id": "qjhoyictxi8mzcbuookntan18e",
                            "create_at": 1488278475179,
                            "update_at": 1488278475179,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "is k ilava",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        },
                        "t5rt7m5tc3ge8xo4gpcxom8kye": {
                            "id": "t5rt7m5tc3ge8xo4gpcxom8kye",
                            "create_at": 1488278455621,
                            "update_at": 1488278455621,
                            "delete_at": 0,
                            "user_id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "channel_id": "rincgswz1tbz8j7yhxrbjpkgsw",
                            "root_id": "",
                            "parent_id": "",
                            "original_id": "",
                            "message": "mahmood ahmd",
                            "type": "",
                            "props": {},
                            "hashtags": "",
                            "pending_post_id": ""
                        }
                    }
                }
            }

        },
        users:{
            "far4p4m9njy98mspcnh7fbqish": {
                "n1wyjgkcjpbejktr6n7ega4g7h":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    },
                "rincgswz1tbz8j7yhxrbjpkgsw":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    },
            },
            "kgrwcfe9opdmdb6jc4b1jn4hhh":{
                "n1wyjgkcjpbejktr6n7ega4g7h":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    },
                "rincgswz1tbz8j7yhxrbjpkgsw":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    },
            },
            "sqeb57bc7bgajj4p4mb4a1q54o":{
                "n1wyjgkcjpbejktr6n7ega4g7h":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    },
                "rincgswz1tbz8j7yhxrbjpkgsw":
                    {
                        "aqbots94s3f1dfkj77bj8s8qcw": {
                            "id": "aqbots94s3f1dfkj77bj8s8qcw",
                            "create_at": 1486463610070,
                            "update_at": 1487650896689,
                            "delete_at": 0,
                            "username": "mahmoodch107",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "mahmoodch107@gmail.com",
                            "nickname": "Mahmood",
                            "first_name": "Mahmood",
                            "last_name": "Ahmad",
                            "position": "",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "b98pquyt47bk38ebb6qm65nqdh": {
                            "id": "b98pquyt47bk38ebb6qm65nqdh",
                            "create_at": 1486377658825,
                            "update_at": 1487933195729,
                            "delete_at": 0,
                            "username": "yasirali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "yasir.ali5614@gmail.com",
                            "nickname": "Yasir",
                            "first_name": "Yasir",
                            "last_name": "Ali",
                            "position": "Software Engineer",
                            "roles": "system_user",
                            "locale": "en"
                        },
                        "ba1jw9m6m78fzfyx96xwrdz4to": {
                            "id": "ba1jw9m6m78fzfyx96xwrdz4to",
                            "create_at": 1486362631155,
                            "update_at": 1486704642637,
                            "delete_at": 0,
                            "username": "hsali",
                            "auth_data": "",
                            "auth_service": "",
                            "email": "shehbaz.bsee1395@gmail.com",
                            "nickname": "",
                            "first_name": "",
                            "last_name": "",
                            "position": "",
                            "roles": "system_admin system_user",
                            "locale": "en"
                        }
                    }
            }
        }
    }
    // This object will save the current chat detail
    let activeChatDetail = {
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
            id: "ba1jw9m6m78fzfyx96xwrdz4to",
            create_at: 1486370521589,
            username: "imad",
            email: "hamadkhankhel@gmail.com",
        },
    };
    // current login user detail
    let tmpAllTeams = getTeams();
    function getAllChannels(tmpAllTeams) {
        let allChannels = testDetail.channels;
        for (let obj in tmpAllTeams) {
            allChannels.obj = getChannels(obj);
        }
        return allChannels;
    }
    let userDetail = {
        teams: tmpAllTeams,
        channels: getAllChannels(tmpAllTeams),
        me: {
            id: "kgrwcfe9opdmdb6jc4b1jn4hhh",
            create_at: 1486362822629,
            display_name: "mahmood",
            name: "mahmood",
            email: "shehbaz.bsee1395@gmail.com",
            type: "O",
        },
    };

    function initiate() {

        isTeamExist(defaultDetail.teamId);
        isChannelExist(defaultDetail.channelId);
        //isUserExist(defaultDetail.userId);
    }
    function isTeamExist(teamId) {
        let teams = getTeams();
        let team;
        for (team in teams) {
            if (teamId == teams[team].id) {
                break;
            }
        }
        activeChatDetail.team = teams[team];
    }
    function isChannelExist(teamId,channelId) {
        let channels = getChannels(teamId);
        let chan  = 0;
        for (chan in channels) {
            console.log(channels[chan].id);
            if (channelId ==  channels[chan].id) {
                activeChatDetail.channel = channels[chan];
            }
        }
    }
    function isUserExist(userId) {
        let users = getUsersInChannel();
        let user;
        for (user in users) {
            console.log(users[user].id);
            if (userId == users[user].id) {
                break;
            }
        }
        activeChatDetail.user = users[user];
        console.log(users[user]);
    }
    function showPosts(posts) {
        try {
            let postData = posts;
            let postOrder = postData.order;
            let revPostsOrder = postOrder.reverse();
            let postItems = postData.posts;
            let i = 0, userId,time;
            console.log("posts" + postItems);
            console.log("orders" + revPostsOrder);
            console.log("message: " + postItems[revPostsOrder[0]].message);
            while (i < revPostsOrder.length) {
                let message = postItems[revPostsOrder[i]].message;
                time = postItems[revPostsOrder[i]]
                userId = postItems[revPostsOrder[i]].user_id;
                console.log(userId);
                console.log("testing 123");
                console.log(message);
                if (userId == activeChatDetail.user.id) {
                    setTimeout(() => {
                        messenger.send(message);
                    }, (i * 500 + 0));
                }
                else {
                    setTimeout(() => {
                        messenger.recieve(message);
                    }, (i * 500 + 0));
                }
                i++;
            }
            // @todo fix the last post id
            lastPostId = postOrder[0].id;
            lastPostTime = postItems[revPostsOrder[0]].create_at;
            console.log(lastPostId);
        } catch (e) {
            console.log("not calling" + e.message);
        }
    }
    function getPostsAfterPost() {
        try {
            let after_posts = JSON.parse(data);
            let after_orders = after_posts.order;
            let rev_afterorders = after_orders.reverse();
            let postItems = after_posts.posts;
            let i = 0;
            console.log("posts" + postItems);
            console.log("orders" + rev_afterorders);
            console.log("message: " + postItems[rev_afterorders[0]].message);
            console.log("testing");
            while (i < rev_afterorders.length) {
                let message = postItems[rev_afterorders[i]].message;
                setTimeout(() => {
                    console.log(message);
                    messenger.recieve(message);
                }, (i * 500 + 1000));
                i++;
            }
            lastPostId = (after_orders.length).id;
            lastPostTime = (postItems.length).create_at;
            console.log(lastPostId);
        } catch (e) {
            console.log("not calling" + e.message);
        }
    }
    //============================ JSON functions =============================
    function getAllPosts(tmId, chId) {
        let data = new Object();
        if (env == 0) {
            let c = testDetail.posts[tmId][chId];
            data = testDetail.posts[tmId][chId];
        }
        else if (env == 1) {
            let reqParam = {
                teamId: teamId,
                channelId: channelId,
            };
            $.ajax({
                url: accessURLs.posts,
                dataType: 'JSON',
                data: JSON.stringify(reqParam),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
        }
        return data;
    }
    function createPost(teamId, channelId, message) {
        let reqParam = {
            teamId: teamId,
            channelId: channelId,
            message: message,
        };
        let data = "";
        $.ajax({
            url: accessURLs.createPost,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    function getPostsAfterPost(teamId, channelId, postId, offset=0, limit=20) {
        let reqParam = {
            teamId: teamId,
            channelId: channelId,
            postId: postId,
            offset: offset,
            limit: limit,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getPostsAfterPost,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    function getPostsSinceTime(teamId, channelId, time) {
        let reqParam = {
            teamId: teamId,
            channelId: channelId,
            time: time,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getPostsSinceTime,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    //=========Teams==================
    function getTeamObject(teamId) {
        let reqParam = {
            teamId: teamId,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getTeamObject,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    function getTeams() {
        let data = "";
        if (env == 0) {
            data = testDetail.teams;
        } else if (env == 1) {
            $.ajax({
                url: accessURLs.getTeams,
                dataType: 'json',
                type: 'GET',
                success: function (response) {
                    data = response;
                }
            });
        }

        return data;
    }
    function getTeamMembers(teamId, offset, limit) {
        let reqParam = {
            teamId: teamId,
            offset: offset,
            limit: limit,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getTeamMembers,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    //===============Channels==========================
    function getChannels(teamId) {
        let data = "";
        if (env == 0) {
            data = testDetail.channels[teamId];
        } else if (env == 1) {
            let reqParam = {
                teamId: teamId,
            };
            $.ajax({
                url: accessURLs.getChannels,
                dataType: 'JSON',
                data: JSON.stringify(reqParam),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
        }
        return data;
    }
    function getChannel(teamId, channelId) {
        let data = "";
        if (env == 0) {
            data = testDetail.channels;
        } else if (env == 1) {
            let reqParam = {
                teamId: teamId,
                channelId: channelId,
            };
            $.ajax({
                url: accessURLs.getChannel,
                dataType: 'JSON',
                data: JSON.stringify(reqParam),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
        }
        return data;
    }
    function getChannelByName(teamId, channelName) {
        let reqParam = {
            teamId: teamId,
            channelName: channelName,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getChannelByName,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    function viewChannel(teamId) {
        let reqParam = {
            teamId: teamId,
        };
        let data = "";
        $.ajax({
            url: accessURLs.viewChannel,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    function getchannelsforUser(teamId) {
        let reqParam = {
            teamId: teamId,
        };
        let data = "";
        $.ajax({
            url: accessURLs.getChannelsForuser,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    //============Users========================================
    function getUsersInChannel(teamId, channelId, offset = 0, limit = 20) {
        let data = "";
        if (env == 0) {
            data = testDetail.channels;
        } else if (env == 1) {
            let reqParam = {
                teamId: teamId,
                channelId: channelId,
                offset: offset,
                limit: limit,
            };
            $.ajax({
                url: accessURLs.getUsersInChannel,
                dataType: 'JSON',
                data: JSON.stringify(reqParam),
                type: 'POST',
                success: function (response) {
                    data = response;
                }
            });
        }
        return data;
    }
    function accessUsers() {
        let reqParam = {};
        let data = "";
        $.ajax({
            url: accessURLs.accessUsers,
            dataType: 'JSON',
            data: JSON.stringify(reqParam),
            type: 'POST',
            success: function (response) {
                data = response;
            }
        });
        return data;
    }
    /**
     * chat Behavior and classes
     */
    //================Class Massenger==========================
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
    let messenger = new Messenger();
    let buildHTML = new BuildHTML();
    //===============Document Session==========================
    $(document).ready(function () {
        initiate();
        /*let messenger = new Messenger();
         let buildHTML = new BuildHTML();*/
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
            //createPost(activeChatDetail.team.id,activeChatDetail.channel.id,text);
            $input.val('');
           /* setInterval(() => {
                getPostsAfterPost();
            }, 5000);*/
            $input.focus();
        }

        messenger.onSend = buildSent;
        messenger.onRecieve = buildRecieved;
        console.log("before calling");
        showPosts();
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
    });

    function teamSelection(selected) {
        $('#mmc-content').empty();
        console.log(selected);
        isTeamExist(selected);
        let opt = "",selectedchannel ="";
        let chs = testDetail.channels[activeChatDetail.team.id];
        console.log(chs);
        for (let ch in chs) {
            opt += "<option value='" + chs[ch].id + "'>" + chs[ch].display_name + "</option>";
            console.log(opt);
        }
        $('#channelSelection').empty();
        $("#channelSelection").append(opt);
        $(".mmc-main-nav-item-link").empty();
        $(".mmc-main-nav-item-link").append(chs[0].display_name);
        isChannelExist(activeChatDetail.team.id,activeChatDetail.channel.id);
        let posts = getAllPosts(activeChatDetail.team.id,activeChatDetail.channel.id);
        showPosts(posts);
    }
    function ChangeChannel(selectedChannel) {
        $('#mmc-content').empty();
        console.log(selectedChannel);
        isChannelExist(activeChatDetail.team.id,selectedChannel);
        let opt = "";
        let posts = getAllPosts(activeChatDetail.team.id,activeChatDetail.channel.id);
        $(".mmc-main-nav-item-link").empty();
        $(".mmc-main-nav-item-link").append(activeChatDetail.channel.display_name);
        console.log(posts);
        showPosts(posts);
    }
    (function(){
        let opt = "<option value='Select Team' selected>Select Team </option>";
        let tms = testDetail.teams;
        for (let t in tms){
            opt+="<option value='"+tms[t].id + "'>"+tms[t].display_name + "</option>";
            console.log(opt);
        }
        $("#teamSelection").append(opt);
    }());


