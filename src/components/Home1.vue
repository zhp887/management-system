<template>
    <div class="home">
        <el-container style="height: 600px; border: 1px solid #eee;">
            <el-aside width="200px" style="background-color: #444444">
                <!-- 选择哪一个打开：默认打开index=3 -->
                <div class="homeImg">
                    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531384262,3699915741&fm=26&gp=0.jpg"/>
                </div>
                <el-menu :default-openeds="['3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-s-platform"></i>概况</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-s-shop"></i>店铺</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="3" class="bgColor">
                    <template slot="title"><i class="el-icon-s-goods"></i>商品</template>
                    <el-submenu index="3-1">
                    <template slot="title">商品管理</template>
                    <el-menu-item index="3-1-1">商品管理</el-menu-item>
                    <el-menu-item index="3-1-2">商品分组</el-menu-item>
                    <el-menu-item index="3-3-3">商品模板</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-2">
                    <template slot="title">商品工具</template>
                    <el-menu-item index="3-2-1">批量改价</el-menu-item>
                    <el-menu-item index="3-2-1">商品导入</el-menu-item>
                    <el-menu-item index="3-2-1">素材导入</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-3">
                    <template slot="title">我要分销</template>
                    <el-menu-item index="3-3-1">市场选货</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3-4">商品设置</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-s-order"></i>订单</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="4-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="4-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-s-custom"></i>客户</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="5-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="5-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-s-data"></i>数据</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="6-1">选项1</el-menu-item>
                    <el-menu-item index="6-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="6-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="6-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="6-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-circle-plus"></i>资产</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="7-1">选项1</el-menu-item>
                    <el-menu-item index="7-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="7-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="7-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="7-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="8" style="margin-top:30px">
                    <template slot="title"><i class="el-icon-s-grid"></i>应用</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="8-1">选项1</el-menu-item>
                    <el-menu-item index="8-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="8-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="8-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="8-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="8-1">选项1</el-menu-item>
                    <el-menu-item index="8-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="8-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="8-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="8-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </el-aside>
            
            <el-container>
                <el-header style="font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
                </el-header>
       
                <el-main>
                   <!-- 添加表格 -->
                    <el-row type="flex" class="row-bg" justify="space-around">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <label>商品名称:</label><input placeholder="输入商品名称、编/条码"/>
                            </div>
                        </el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-light">2</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
                    </el-row>
                <el-table>
                    <!-- <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column> -->
                </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<style lang="scss" scoped>
.home{
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    } 
    .el-aside {
        color: #333;
    }
    .homeImg{
        width: 50px;
        height: 50px;
        background: #ffffff;
        border-radius: 50%;
        margin: 10px auto 20px;
        overflow: hidden;
        &>img{
            width: 100%;
            height: 100%;
        }
    }
    // .row-bg {
    //     padding: 10px 0;
    //     background-color: #f9fafc;
    // }
}
</style>

  
