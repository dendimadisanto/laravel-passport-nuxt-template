<template>
	<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
         <v-icon
          large
          color="yellow darken-2"
        >
          mdi-alert
        </v-icon> Informasi
        </v-card-title>
        <v-card-text>Yakin data akan di hapus ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('update:dialog',false)"
          >
            Batal
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="onDelete"
          >
            Hapus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script >
	export default{
		props:{
			dialog:{
				default:false,
				type:Boolean
			}
		},
		methods:{
			onDelete(){
				this.$emit('onDelete')
			}
		}
	}
</script>