import { create } from "zustand";
const useStore=create((set)=>({
    count:0,

    // actions 
    increase:()=>set((state)=>({count:state.count+1})),
    decrease:()=>set((state)=>({count:state.count-1}))
}))
export default useStore;