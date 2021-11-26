export default {
	 LOADING_START (state, payload) {
       state.loading = true;
    },
    LOADING_STOP (state, payload) {
         state.loading = false;
    },
    SET_TITLE(state, payload){
        state.title = payload;
    },
    SET_LOADING(state, payload){
        state.loading_app = payload; 
    },
    SHOW_MESSAGE(state, val){
        state.content = val.content
        state.color = val.color
    },
}