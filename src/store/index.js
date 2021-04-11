import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Memes",
    memes:[],
  },
  mutations: {
    setMemes(state,payload){
      state.memes = payload;
    }
  },
  actions: {
    async getMemes({commit}, params){
     try {
       const response = await fetch("https://api.imgflip.com/get_memes");
       const result = await response.json();

       if(!params?.total){
          //console.log("todos los memes");
        
          commit("setMemes", result.data.memes);
       }else{
          const resultTemp = [];
          result.data.memes.forEach((meme, index)=>{
              if(index < params.total){
                resultTemp.push(meme);
              }
          });
          commit("setMemes", resultTemp)
          //console.log(`Cargando ${params.total} memes`)
       }
       
       console.log(params);


     } catch (error) {
       console.log(error)
     }  
    }
  },
  getters: {},
  modules: {
  }
})