<template>
    <div class="login">
        <h2>登录</h2>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="success" @click="onSubmit">登录</el-button>
    </div>
</template>
<script>
export default {
    data() {
      return {
        username: '',
        password:'',
      }
    },
    methods:{
         onSubmit(){
            //提交
            let data = {
                username:this.username,
                password:this.password
            }
            console.log(data)
            this.$http.login(data).then(res=>{
                console.log('登录成功',res)
                localStorage.setItem('token',res.token)
                this.$router.replace('/home')
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    width: 300px;
    height: 300px;
    margin: 80px auto 0;
    &>h2{
        text-align: center;
    }
    .el-input{
        margin-top: 20px;
    }
    .el-button{
        width: 200px;
        margin: 10px 50px;
    }
}
</style>