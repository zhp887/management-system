<template>
  <div class="aside">
    <h5>
      <img
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2531384262,3699915741&fm=26&gp=0.jpg"
      />
    </h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#444444"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-openeds="['3']"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-platform"></i>概况
        </template>
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
        <template slot="title">
          <i class="el-icon-s-shop"></i>店铺
        </template>
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
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品</span>
        </template>
        <el-submenu index="3-1">
          <template slot="title">商品管理</template>
          <el-menu-item index="3-1-1">
            <router-link to="/home" tag="span">商品管理</router-link>
            </el-menu-item>
          <el-menu-item index="3-1-2">
            <router-link to="/additem" tag="span">商品添加</router-link>
          </el-menu-item>
          <el-menu-item index="3-1-3">
            <router-link to="/good" tag="span">商品获取</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3-2">
          <template slot="title">商品工具</template>
          <el-menu-item index="3-2-1">批量改价</el-menu-item>
          <el-menu-item index="3-2-2">商品导入</el-menu-item>
          <el-menu-item index="3-2-3">素材导入</el-menu-item>
        </el-submenu>
        <el-submenu index="3-3">
          <template slot="title">我要分销</template>
          <el-menu-item index="3-3-1">市场选货</el-menu-item>
        </el-submenu>
        <el-menu-item index="3-4">商品设置</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-order"></i>订单
        </template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-custom"></i>客户
        </template>
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
        <template slot="title">
          <i class="el-icon-s-data"></i>数据
        </template>
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
        <template slot="title">
          <i class="el-icon-circle-plus"></i>资产
        </template>
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
        <template slot="title">
          <i class="el-icon-s-grid"></i>应用
        </template>
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
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-s-tools"></i>设置
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="9-1">选项1</el-menu-item>
          <el-menu-item index="9-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="9-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="9-4">
          <template slot="title">选项4</template>
          <el-menu-item index="9-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  // data(){
  //   return{
  //    navs: [
  //       { id: 1, path: '/home', title: '首页管理', icon: '', children: []},
  //       { id: 2, path: '/home', title: '首页管理', icon: '', children: []},
  //       { id: 3, path: '/home', title: '首页管理', icon: '', children: []},
  //       { id: 4, path: '/good', title: '商品管理', icon: ''}
  //     ]
  //   }
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside {
  background: #444444;
  & > h5 {
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 50%;
    margin: 10px auto 20px;
    overflow: hidden;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .el-menu {
    overflow: hidden;
  }
}
</style>