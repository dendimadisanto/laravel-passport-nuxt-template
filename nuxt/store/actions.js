export default {
	set_title({ commit }, payload){
		commit('SET_TITLE', payload);
	},
	set_loading({ commit }, payload){
		commit('SET_LOADING', payload);
	}
}