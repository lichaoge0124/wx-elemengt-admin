<template>
    <div class="page">
        <header>
            <div class="el-input">
                <input class="input_inner" type="text" placeholder="请输入商品编号" />
            </div>
            <div class="el-input">
                <input class="input_inner" type="text" placeholder="请输入商品名称" />
            </div>
            <button class="el_btuuon">
                <i class="el-icon-search"></i>
                <span>
                    查找
                </span>
            </button>
            <button class="el_btuuon">
                <i class="el-icon-edit"></i>
                <span>添加</span>
            </button>
            <button class="el_btuuon">
                <i class="el-icon-download"></i>
                <span>导出</span>
            </button>

        </header>
        <el-table :data="goodsList" border style="{width: 100%}">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="宣传画廊">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="商品介绍">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="商品单位">
                            <img src={{ props.row.picUrl }} alt="">
                        </el-form-item>
                        <el-form-item label="关键字">
                            <img src={{ props.row.shareUrl }} alt="">
                        </el-form-item>
                        <el-form-item label="类目ID">
                            <button>查看</button>
                        </el-form-item>
                        <el-form-item label="品牌商ID">
                            <span>{{ props.row.counterPrice }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="商品编号" align="center">
            </el-table-column>
            <el-table-column prop="name" label="名称" align="center">
            </el-table-column>
            <el-table-column prop="picUrl" label="图片" align="center">         
                    <img :src="picUrl" style="width:50px;height:50px" alt="">
            </el-table-column>
            <el-table-column prop="shareUrl" label="分享图" align="center">
            </el-table-column>
            <el-table-column prop="shareUrl" label="详情" align="center">
            </el-table-column>
            <el-table-column prop="counterPrice" label="专柜价格" align="center">
            </el-table-column>
            <el-table-column prop="retailPrice" label="当前价格" align="center">
            </el-table-column>
            <el-table-column label="是否新品" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.isNew === true ? 'success' : 'primary'" disable-transitions>{{
                        scope.row.isNew === true ? '新品' : '非新品'
                    }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="是否热品" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.isHot === true ? 'success' : 'primary'" disable-transitions>{{
                        scope.row.isNew === true ? '热品' : '非热品'
                    }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="是否在售" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.isOnSale == true ? 'success' : 'primary'"
                        disable-transitions>{{
    scope.row.isOnSale == true ? '在售' : '非在售'
                        }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getgoodslist } from "@/api/http"
export default {
    name: "App",
    data() {
        return {
            pageInfo: {
                page: 1,//页数
                limit: 20,//数据条数
                sort: 'add_time',
                order: 'desc',
            },
            goodsList: [],//商品列表
        }
    },
    methods: {
        filterTag() {

        }
    },
    created() {
        getgoodslist(this.pageInfo).then(res => {
            console.log("res===>", res);
            if (res.errno === 0) {
                this.goodsList = res.data.items
                console.log(" this.goodsList==>", this.goodsList);
            }
        })
    },

}
</script>

<style scoped>
.page {
    width: 100%;
    height: 100%;
    padding: 20px;
}

header {
    width: 100%;
    display: flex;
    justify-items: center;
    padding-bottom: 10px;
}

.el-input {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
    width: 200px;
    margin-right: 5px;
}

.input_inner {
    font-size: 14px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    width: 100%;
}


.input_inner:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    font-size: 14px;
    color: #606266;
    ;
}


.table_center {
    width: 100%;
}

.el_btuuon {
    border: none;
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    transition: .1s;
}

.el-icon {
    margin-right: 3px;
    font-family: element-icons !important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
}
</style>
