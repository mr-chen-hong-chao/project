<template>
    <div>
        <van-nav-bar title="信息填写" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-form @submit="onSubmit">
            <!-- 昵称 -->
            <van-field v-model="username" name="姓名" label="姓名" placeholder="请填写昵称"
                :rules="[{ required: true, message: '请填写昵称' }]" />

            <!-- 性别 -->
            <van-field readonly clickable name="picker" :value="value_sex" label="性别" placeholder="点击性别"
                @click="showPicker_sex = true" />
            <van-popup v-model="showPicker_sex" position="bottom">
                <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
            </van-popup>

            <!-- 出生日期 -->
            <van-field readonly clickable name="datetimePicker" :value="values" label="出生日期" placeholder="点击选择时间"
                @click="showPickers = true" />

            <!-- 年级 -->
            <van-popup v-model="showPickers" position="bottom">
                <van-datetime-picker type="time" @confirm="onConfirms" @cancel="showPickers = false" />
            </van-popup>
            <!-- 学科 -->
            <van-field readonly clickable name="area" :value="valuess" label="地区选择" placeholder="点击选择省市区"
                @click="showArea = true" />

            <!-- 所在城市 -->
            <van-popup v-model="showArea" position="bottom">
                <!-- <van-area :area-list="areaList"  /> -->
                <van-area title="所在城市" :area-list="areaList" @confirm="onConfirmss" @cancel="showArea = false" />
            </van-popup>
            <!-- 年级 -->
            <van-field readonly clickable name="picker" :value="grade" label="年级" placeholder="点击选择年级"
                @click="showPicker_grade = true" />
            <van-popup v-model="showPicker_grade" position="bottom">
                <van-picker show-toolbar :columns="columns_grade" @confirm="onConfirm_grade"
                    @cancel="showPicker_grade = false" />
            </van-popup>
            <!-- 学科 -->
            <van-field readonly clickable name="picker" :value="subject" label="学科" placeholder="点击选择学科"
                @click="showPicker_subject = true" />
            <van-popup v-model="showPicker_subject" position="bottom">
                <van-picker show-toolbar :columns="columns_grade" @confirm="onConfirm_subject"
                    @cancel="showPicker_subject = false" />
            </van-popup>

            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>

        </van-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '', //姓名

                value_sex: '', //性别
                showPicker_sex: false, //性别
                columns: ['女', '男'], //性别选择

                values: '', //日期
                showPickers: false, //日期

                valuess: '', //地区选择
                showArea: false, //地区

                areaList: { //地区
                    province_list: {
                        110000: '北京市',
                        120000: '天津市'
                    },
                    city_list: {
                        110100: '北京市',
                        110200: '县',
                        120100: '天津市',
                        120200: '县'
                    },
                    county_list: {
                        110101: '东城区',
                        110102: '西城区',
                        110105: '朝阳区',
                        110106: '丰台区',
                        120101: '和平区',
                        120102: '河东区',
                        120103: '河西区',
                        120104: '南开区',
                        120105: '河北区',
                        // ....
                    }
                },
                grade: '', //年级
                columns_grade: ['一年级', '二年级'],
                showPicker_grade: false, //性别

                subject: '', //学科
                columns_subject: ['语文', '数学'],
                showPicker_subject: false, //学科


            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            //性别
            onConfirm(value_sex) {
                this.value_sex = value_sex;
                this.showPicker_sex = false;
            },
            //提交
            onSubmit(values) {
                console.log('submit', values);
            },
            //日期
            onConfirms(time) {
                this.values = time;
                this.showPickers = false;
            },
            //地区
            onConfirmss(values) {
                this.valuess = values
                    .filter((item) => !!item)
                    .map((item) => item.name)
                    .join('/');
                this.showArea = false;
            },
            //年级
            onConfirm_grade(grade) {
                this.grade = grade;
                this.showPicker_grade = false;
            },

             //学科
            onConfirm_subject(subject) {
                this.subject = subject;
                this.showPicker_subject = false;
            },


        },

    }
</script>
<style lang="scss">



</style>