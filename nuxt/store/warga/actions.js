export default {
    async get ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$get('warga', {
                params : payload
            })

            commit('SET_DATA_WARGA', req)

            return {
                status: true,
                data:req.data,
                message: 'Data berhasil didapat'
            }
        } catch (e) {
            if (e.message.toLowerCase().includes('network')) {
               this.$notifier.showMessage({ content: 'Koneksi bermasalah, silakan cek koneksi internet.', color: 'error' });
            } else {
                const {
                    errors,
                    message
                } = e.response.data
                this.$notifier.showMessage({ content: 'Ada Kesalahan server', color: 'error' });
            }
        }
    },
    async simpan({
        commit
    }, payload){
        try{
            const res = await this.$axios.$post('warga', payload);

            this.$notifier.showMessage({ content: 'Berhasil di simpan', color: 'success' });
        }
        catch (e) {
            if (e.message.toLowerCase().includes('network')) {
               this.$notifier.showMessage({ content: 'Koneksi bermasalah, silakan cek koneksi internet.', color: 'error' });
            } else {
                const {
                    errors,
                    message
                } = e.response.data
                this.$notifier.showMessage({ content: 'Ada Kesalahan server', color: 'error' });
            }
        }
    },
    async update({
        commit
    }, payload){
        try{
            const res = await this.$axios.$post(`warga/${payload.id}`, payload.params);

            this.$notifier.showMessage({ content: 'Berhasil di simpan', color: 'success' });
        }
        catch (e) {
            if (e.message.toLowerCase().includes('network')) {
               this.$notifier.showMessage({ content: 'Koneksi bermasalah, silakan cek koneksi internet.', color: 'error' });
            } else {
                const {
                    errors,
                    message
                } = e.response.data
                this.$notifier.showMessage({ content: 'Ada Kesalahan server', color: 'error' });
            }
        }
    },
     async hapus({
        commit
    }, payload){
        try{
            const res = await this.$axios.$delete(`warga/${payload.id}`);

            this.$notifier.showMessage({ content: 'Berhasil di hapus', color: 'success' });
        }
        catch (e) {
            if (e.message.toLowerCase().includes('network')) {
               this.$notifier.showMessage({ content: 'Koneksi bermasalah, silakan cek koneksi internet.', color: 'error' });
            } else {
                const {
                    errors,
                    message
                } = e.response.data
                this.$notifier.showMessage({ content: 'Ada Kesalahan server', color: 'error' });
            }
        }
    },
}