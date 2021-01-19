<template>
    <div>
        <div class="third">
            <van-divider>第三方登录</van-divider>
            <div class="fen">
                <div class="deng" style="">
                    <div class="weixin">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weixin1"></use>
                        </svg>
                    </div>
                    <p>微信登录</p>
                </div>
                <div class="deng" style="">
                    <div class="qq">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-qq"></use>
                        </svg>
                    </div>
                    <p>QQ登录</p>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .third {
        width: 100%;
        height: 3.5rem;
        
        .fen {
            display: flex;
            width: 80%;
            // background-color: rgb(250, 212, 212);
            margin: 0 10%;

            .deng {
                color: #A8A8A8;
                font-size: 0.2rem;
                flex: 1;
                text-align: center;
                width: 100%;
                height: 100%;


                .qq,
                .weixin {
                    width: 0.9rem;
                    height: 0.9rem;
                    border: 0.01rem solid #D0D0D0;
                    border-radius: 20rem;
                    text-align: center;
                    line-height: 1.1rem;
                    text-align: center;
                    // margin-left: 1rem;
                    margin: 0.2rem 1rem;


                    .icon {
                        width: 0.5rem;
                        height: 0.5rem;
                        vertical-align: -0.15em;
                        fill: currentColor;
                        overflow: hidden;
                        // font-size: 0.5rem;
                        // margin: 0 auto;
                        color: #BBBBBB;
                    }

                    p {
                        margin-top: 0.2rem;
                    }
                }
            }
        }


    }
</style>