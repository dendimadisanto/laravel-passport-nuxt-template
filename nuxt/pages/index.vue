<template>
  <div>
  	<v-text-field
            v-model="form.username"
          ></v-text-field>
    <v-text-field
            v-model="form.password"
          ></v-text-field>
          <button @click="simpan">Simpan</button>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				form:{
					username:null,
					password:null,
					client_id:6,
					client_secret:'hmEHcXCknnXZda5TTTqzZcfHfdcDIHwlRmsqAHlI',
					grant_type:'password',
					scope:''
				}
			}
		},
		middleware: 'auth',
		methods:{
			simpan(){
				// this.$auth.loginWith('local', {data:this.form}).then(res=>{
				// 	console.log(res,this.$auth)
				// })

				console.log(this.$auth)
			}
		}
	}
</script>