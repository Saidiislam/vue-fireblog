<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{name: 'home'}">FireBlogs</router-link>
                    <ul>
                        <li><a href="#" class="svg-icon"><youTube/></a></li>
                        <li><a href="#" class="svg-icon"><twtitter/></a></li>
                        <li><a href="#" class="svg-icon"><instagram/></a></li>
                        <li><a href="#" class="svg-icon"><linkedin/></a></li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{name: 'home'}">Home</router-link>
                        <router-link class="link" :to="{name: 'blogs'}">Blogs</router-link>
                        <router-link class="link" :to="{name: 'newpost'}">Create Post</router-link>
                        <router-link class="link" :to="{name: 'login'}">Login/Registration</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2021 All Right Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg"
import twtitter from "../assets/Icons/twitter-brands.svg"
import instagram from "../assets/Icons/instagram-brands.svg"
import linkedin from "../assets/Icons/linkedin-brands.svg"
export default {
    name: 'footer-vue',
    components:{
        youTube,
        twtitter,
        instagram,
        linkedin,
    }
    
}
</script>

<style scoped>
    footer{
        margin-top: auto;
        padding: 100px 25px;
        background-color: #303030;
    }
    footer .container{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    footer .container div{
    display: flex;
    flex: 1;
    }
    .left{
        gap: 32px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header{
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }
    ul{
        gap:16px;
        list-style: none;
        display: flex;
    }
    .col-1,
    .col-2{
        gap: 32px;
        display: flex;
        flex: 1;
    }
    .col-1{
        flex-direction: column;
    }
    .col-1 h2{
        text-align: center;
    }
    .col-1 ul{
        margin-top: auto;
    }
    .col-1 ul li{
        display: flex;
        align-items: center;
    }
    .col-1 ul li .svg-icon{
        width: 24px;
        height: auto;
        color: #fff;
    }
    .col-2 ul{
        height: 100%;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .col-2 .link{
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        text-decoration: none;
    }
    .right{
        gap:32px;
        color: #fff;
        align-items: center;
        flex-direction: column;
    }
    .right p{
        margin-top: auto;
    }
    @media (min-width: 800px) {
        footer .container{
            flex-direction: row;
            gap: 0px;
        }
        .left{
            flex-direction: row;
            align-items: initial;
            gap: 0;
        }
        .col-1,
        .col-2{
            gap: 0;
        
        }
        .col-1 h2{
            text-align: initial;
        }
        .col-2 ul{
            flex-direction: column;
        }
        .right{
            align-items: flex-end;
            gap:0;
        }
        .header{
            text-align: initial;
        }
    }
</style>