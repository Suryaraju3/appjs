
import {create} from "zustand";
const useCountStore = create((set)=>({
    count:0,
    increase: ()=>set((state)=> ({count:state.count+1})),
    decrease: ()=>set((state)=>({count:state.count-1})) 
}
))

export default useCountStore;