<template>
  <div class="addItem">
    <h2>商品添加</h2>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-form-item label="商品照片：">
              <el-input v-model="commodity.img" placeholder="输入商品的照片地址"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-form-item label="商品名称：">
              <el-input v-model="commodity.name" placeholder="输入商品的名称"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple">
            <el-form-item label="商品描述：">
              <el-input v-model="commodity.desc" placeholder="输入商品的描述"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="商品价格：">
              <el-input v-model="commodity.price" placeholder="输入商品的价格"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="是否推荐：">
              <el-select v-model="commodity.hot" placeholder="请选择">
                <el-option label="是" value="true"></el-option>
                <el-option label="否" value="false"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="品类：">
              <el-select v-model="commodity.cate" placeholder="请选择">
                <el-option
                  v-for="item in cates"
                  :key="item.id"
                  :label="item.title"
                  :value="item.cate"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="商品ID：">
              <el-input v-model="commodity.id" placeholder="非必填，当id存在时为修改，否则为添加"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-upload
              class="upload-demo"
              action="http://10.36.147.164:9999/upload/img"
              :on-success="uploadSuccess">
              <el-button size="small" type="primary">点击上传图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button :plain="true" type="primary" @click="submitForm">添加</el-button>
        <el-button :plain="true" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commodity: {
        img: "",
        name: "",
        desc: "",
        price: "",
        hot: "",
        cate: "",
        id: ""
      },
      imgs:'',
      imgss:'',
      cates: [
        { id: 1, title: "手机数码", cate: "digital" },
        { id: 2, title: "电脑办公", cate: "office" },
        { id: 3, title: "家用电器", cate: "electrical" },
        { id: 4, title: "美妆护肤", cate: "beauty" },
        { id: 5, title: "个人清洁", cate: "clean" },
        { id: 6, title: "汽车生活", cate: "car" },
        { id: 7, title: "男装女装", cate: "clothe" },
        { id: 8, title: "母婴儿童", cate: "maternal" },
        { id: 9, title: "图书音像", cate: "book" },
        { id: 10, title: "运动户外", cate: "sport" },
        { id: 11, title: "食品生鲜", cate: "fresh" },
        { id: 12, title: "饮料酒水", cate: "drink" },
        { id: 13, title: "钟表珠宝", cate: "gem" },
        { id: 14, title: "食品生鲜", cate: "music" },
        { id: 15, title: "宠物生活", cate: "pet" }
      ]
    };
  },
  mounted() {
    console.log(this.commodity.img);
  },
  methods: {
     uploadSuccess(response) {
      console.log('res', response)
      this.imgs = response.data.url
    },
    getList() {
      if (this.commodity.img) {
         this.imgss = this.commodity.img
      } else {
        this.imgss = "http://10.36.147.164:9999" + this.imgs
      }
      let data = {
        img: this.imgss,
        name: this.commodity.name,
        desc: this.commodity.desc,
        price: this.commodity.price,
        hot: this.commodity.hot,
        cate: this.commodity.cate,
        id: this.commodity.id
      };
      console.log(data);
      this.$http.getAddGood(data).then(res => {
        console.log("添加成功", res);
        this.$message({
          showClose: true,
          message: "添加成功",
          type: "success"
        });
        this.qingkp();
      });
    },
    submitForm() {
      if (this.commodity.img == "" && this.imgs == "") {
        this.$message({
          showClose: true,
          message: "商品照片地址不能为空",
          type: "error"
        });
        return;
      } else if (this.commodity.name == "") {
        this.$message({
          showClose: true,
          message: "商品名称不能为空",
          type: "error"
        });
        return;
      } else if (this.commodity.desc == "") {
        this.$message({
          showClose: true,
          message: "商品描述不能为空",
          type: "error"
        });
        return;
      } else if (this.commodity.price == "") {
        this.$message({
          showClose: true,
          message: "商品价格不能为空",
          type: "error"
        });
        return;
      } else if (this.commodity.hot == "") {
        this.$message({
          showClose: true,
          message: "商品是否推荐不能为空",
          type: "error"
        });
        return;
      } else if (this.commodity.cate == "") {
        this.$message({
          showClose: true,
          message: "商品的品类不能为空",
          type: "error"
        });
        return;
      } else {
        this.getList();
      }
    },
    resetForm() {
      this.qingkp();
    },
    qingkp() {
      this.commodity.img = "";
      this.commodity.name = "";
      this.commodity.desc = "";
      this.commodity.price = "";
      this.commodity.hot = "";
      this.commodity.cate = "";
      this.commodity.id = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.addItem{
  .el-upload__tip{
    display: inline-block;
    margin-left: 20px;
  }
}
</style>