<template>
    <div id='Chc_bottom_nav'>
        <ul>
            <li v-for="(item,i) in nav" :key="i" @click="tab(i,item.path)"
                :style="bottomNavIndex ==i?'color:orange':'color:'">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                nav: [{
                        title: '首页',
                        icon: '/icon/home.png',
                        path: '/main'
                    },
                    {
                        title: '课程',
                        icon: '/icon/lesson.png',
                        path: '/lesson'
                    },
                    {
                        title: '约课记录',
                        icon: 'icon/history.png',
                        path: '/history'
                    },
                    {
                        title: '练习',
                        icon: 'icon/practice.png',
                        path: '/practice'
                    },
                    {
                        title: '我的',
                        icon: 'icon/user.png',
                        path: '/user'
                    },
                ],

            }
        },
        components: {
            
        },
        props: [],
        computed: {
            ...mapState(['bottomNavIndex'])
        },
        created() {

        },
        methods: {
            ...mapMutations(['tabBottomNav']),
            tab(i, path) {
                this.defaultIndex = i
                this.$router.push({
                    path: path
                })
                this.tabBottomNav(i)

            }
        },
    }
</script>

<style lang='scss' scoped>
    @mixin around {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }

    #Chc_bottom_nav {
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;

        ul {
            width: 100%;
            height: 100%;
            @include around;

            li {
                width: 18%;
                height: 85%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: center;

                img {
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }

        }
    }
</style>