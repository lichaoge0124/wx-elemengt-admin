<template>
    <div class="page">
        <el-row :gutter="12" style="padding-left: 20px;padding-right: 20px;margin-bottom: 32px;">
            <el-col :span="6" body-style={padding:0}>
                <el-card class="card-panel">
                    <div class="card-panel-icon-wrapper ">
                        <svg-icon icon-class="peoples" class="icon-people card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            用户数量
                        </div>
                        <div class="card-panel-num">
                            {{ dashboardInfo.userTotal }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12" style="padding-left: 20px;padding-right: 20px;margin-bottom: 32px;">
            <el-col :span="6" body-style={padding:0}>
                <el-card class="card-panel">
                    <div class="card-panel-icon-wrapper ">
                        <svg-icon icon-class="message" class="icon-message card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            商品数量
                        </div>
                        <div class="card-panel-num">
                            {{ dashboardInfo.goodsTotal }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12" style="padding-left: 20px;padding-right: 20px;margin-bottom: 32px;">
            <el-col :span="6" body-style={padding:0}>
                <el-card class="card-panel">
                    <div class="card-panel-icon-wrapper ">
                        <svg-icon icon-class="message" class="icon-shopping card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            货品数量
                        </div>
                        <div class="card-panel-num">
                            {{ dashboardInfo.productTotal }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12" style="padding-left: 20px;padding-right: 20px;margin-bottom: 32px;">
            <el-col :span="6" body-style={padding:0}>
                <el-card class="card-panel">
                    <div class="card-panel-icon-wrapper ">
                        <svg-icon icon-class="money" class="icon-money card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            订单数量
                        </div>
                        <div class="card-panel-num">
                            {{ dashboardInfo.orderTotal }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getDashboard } from "../../api/http"
export default {
    name: "App",
    data() {
        return {
            dashboardInfo: []//首页大屏数据
        }
    },
    methods: {

    },
    created() {
        getDashboard().then(res => {
            console.log("res=====>", res);
            this.dashboardInfo = res.data
        })
    },

}
</script>

<style >
.page {
    padding: 32px;
    background-color: #f0f2f5;
}

.card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
    box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
    border-color: rgba(0, 0, 0, .05);
}

.el-row {
    display: inline-block;
    margin: 0;
}

.el-col-6 {
    width: 100%;
}

.el-col {
    padding: 0;
}

.el-card__body {
    padding: 0px;
}

.card-panel-icon {
    float: left;
    font-size: 48px;
}

.icon-people {
    color: #40c9c6;
}

.card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    -webkit-transition: all .38s ease-out;
    transition: all .38s ease-out;
    border-radius: 6px;
}

.card-panel-description {
    float: right;
    font-weight: 700;
    margin: 26px 26px 26px 0;
}

.card-panel-text {
    line-height: 18px;
    color: rgba(0, 0, 0, .45);
    font-size: 16px;
    margin-bottom: 12px;
}

.card-panel-num {
    font-size: 20px;
}

.icon-money {
    color: #34bfa3;
}

.icon-shopping {
    color: #f4516c;
}

.icon-message {
    color: #36a3f7;
}
</style>
