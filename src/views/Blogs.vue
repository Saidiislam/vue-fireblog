<template>
  <div class="blog-card-wrap">
      <div class="blog-cards container">
          <div class="toggle-edit">
              <span>Toggle Editing Post</span>
              <input type="checkbox" name="" v-model="editPost" id="">       
          </div>
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
      </div>
  </div>
</template>

<script>
import BlogCards from "../components/BlogCard.vue"
export default {
    name: "Blogs",
    components:{
        BlogCards,
    },
    computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards
    },
    editPost:{
        get(){
            return this.$store.state.editPost
        },
        set(payload){
            this.$store.commit("toggleEditPost", payload)
        }
    }
  }
}
</script>

<style lang="scss" scoped>
    .blog-cards{
        position: relative;
        .toggle-edit{
            display: flex;
            align-items: center;
            position: absolute;
            top: -70px;
            right: 0;
            span{
                margin-right: 16px;
            }
        }
    }
    input[type="checkbox"]{
        position: relative;
        border: none;
        -webkit-appearance: none;
        background: #fff;
        outline: none;
        width: 80px;
        height: 30px;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    input[type="checkbox"]::before{
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: #303030;
        transform: scale(1.1);
        transition: 750ms ease all;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    input:checked[type="checkbox"]::before{
        background: #fff;
        left: 52px;
    }
</style>