export default {
    async getRw ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$get('rw', {
                params : payload
            })

            commit('SET_DATA_RW', req)

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
    async updateRw({
        commit
    }, payload){
        try{
            const res = await this.$axios.$post(`rw/${payload.rw_id}`, payload);

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
    async hapusRw({
        commit
    }, payload){
        try{
            const res = await this.$axios.$delete(`rw/${payload}`);

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
    async getAgama ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$get('master/get-agama', {
                params : payload
            })

            commit('SET_DATA_AGAMA', req.data)

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
    async getProvinsi ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$get('master/get-provinsi', {
                params : payload
            })

            commit('SET_DATA_PROVINSI', req.data)

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
    async getKabupaten ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$post('master/get-kabupaten', {
               provinsi_id : payload
            })

            commit('SET_DATA_KABUPATEN', req.data)

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
    async getDesa ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$post('master/get-desa', payload)

            commit('SET_DATA_DESA', req.data)

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
    async simpanRw ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$post('rw', payload)
            return {
                status: true,
                data:req.data,
                message: 'Data berhasil di simpan'
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
    async getKecamatan ({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$post('master/get-kecamatan', payload)

            commit('SET_DATA_KECAMATAN', req.data)

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
     async getHubungan({
        commit
    }, payload) {
        try {
            const req = await this.$axios.$get('master/get-hubungan', {
                params : payload
            })

            commit('SET_DATA_HUBUNGAN', req.data)

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
}