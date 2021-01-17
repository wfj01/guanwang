<template>

  <div class="">

    <!-- 选择后预览 -->

    <img v-if="imgOneUrl" :src="imgOneUrl" alt="">

    <!-- 默认图片 -->

    <img v-else src="../../assets/logo.png" alt="">

    <input type="file" name="file[]" class="file" accept="image/*" @change="upImgOne($event)">

  </div>

</template>

<script>

export default {

    data(){

      return{

        imgOne:'',

        imgOneUrl:'',

      }

    },

    methods:{

        //选取并解读照片信息

        upImgOne(e) {

            this.imgOne = e.target.files[0];

            let reads = new FileReader();

            reads.readAsDataURL(this.imgOne);

            reads.onload = () => {

                this.imgOneUrl = reads.result;

                this.upLodeImg()        //多次上传文件多次调用这个方法，需要传参0,1,2

            }

        },

        upLodeImg(){

            var formData = new FormData() // 声明一个FormData对象

            var formData = new window.FormData() 

            formData.append('file', document.querySelector('input[type=file]').files[0])

            //formData.append('file', document.querySelectorAll('input[type=file]')[index].files[0])   //每次只上传单个文件，

            $.ajax({  

                url: 'http://localhost:33527/MultiFileUpload' ,  

                type: 'POST',  

                data: formData,  

                async: false,  

                cache: false,  

                contentType: false,  

                processData: false,  

                success: function (resp) {  

                    console.log(resp);

                },  

                error: function (error) {  

                    alert(error);  

                }  

            });

        },

    },

    mounted:function(){} 

}

</script>

<style scoped>



</style>
