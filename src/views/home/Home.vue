<template>
  <div class="home">
    <!-- <h1>首页</h1> -->
    <el-form label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="商品名称：">
              <el-input v-model="commodity.name" placeholder="输入商品名称、编/条码"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="商品分组：">
              <el-select v-model="commodity.grouping" placeholder="全部">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="商品类型：">
              <el-select v-model="commodity.type" placeholder="全部">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="销量：">
              <el-col :span="10">
                <el-form-item>
                  <el-input v-model="salesVolume1"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="10">
                <el-form-item>
                  <el-input v-model="salesVolume2"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="价格：">
              <el-col :span="8">
                <el-form-item>
                  <el-input v-model="price1"></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-input v-model="price2"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-form-item label="扣减方式：">
              <el-select v-model="deduction" placeholder="全部">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">筛选</el-button>
        <el-button @click="resetForm('ruleForm')">导出</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="商品名" width="180"></el-table-column>
        <el-table-column prop="price" label="价格(元)"></el-table-column>
        <el-table-column prop="visits" label="访问量"></el-table-column>
        <el-table-column prop="stock" sortable label="库存"></el-table-column>
        <el-table-column prop="salesVolume" sortable label="销量"></el-table-column>
        <el-table-column prop="no" sortable label="序号"></el-table-column>
        <el-table-column prop="creationTime" label="创建时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">会员价</el-button>
            <el-button type="text" size="small">推广</el-button>
            <el-button type="text" size="small">复制</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commodity: {
        name: "",
        grouping: "",
        type: []
      },
      salesVolume1:'',
      salesVolume2:'',
      price1:'',
      price2:'',
      deduction:'',
      tableData: [
        {
          name: "lis",
          price: 20,
          visits: 2,
          stock: 3,
          salesVolume: 7,
          no: 10,
          creationTime: 11
        }
      ],
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .el-form-item {
    .el-form-item__label {
      padding: 0 2px 0 0;
    }
  }
}
</style>