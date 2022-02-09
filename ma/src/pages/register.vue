<template>
    <div>
register
  <!-- <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button> -->
  <el-button type="success">成功按钮</el-button>
  <!-- <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button> -->
    </div>
</template>
<script>
// import { Button } from 'element-ui'; 
export default{
name:'register',
// components:{
// "el-button":Button,
// },
mounted(){
this.init()
},
methods:{
     init(){
        this.axios.get('/products',{
          params:{
            categoryId:100012,
            pageSize:14
          }
        }).then((res)=>{
          console.log(res)
          // res.list = res.list.slice(6,14);
          // this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]; //[[0,0,0,0],[0,0,0,0]]
        })
      },
}
}
</script>
<style>

</style>