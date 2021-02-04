<template>
  <div id='#app'></div>
</template>

<script>
import api from '@/api'
export default {
created(){
  api.v(this)
  api.login.loginIn({data:{name:'zs'},success:()=>{
    console.log(this.loginIn,111);
  }})
  api.login.loginOut({data:{name:'zs'},success:()=>{
    console.log(this.loginIn,2222);
  }})

}
}
</script>

<style>

</style>