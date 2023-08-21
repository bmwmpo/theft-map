import { create } from "zustand";
import Case from "../class/Case";

const useStore = create((set) => ({

    // fn:"2",
    // updateF:(fnf)=>set(() => ({fn:fnf}))

    case_list:[new Case(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,"{\"type\": \"Point\", \"coordinates\": [-79.442323077, 43.6390010060001]}")],

    setCaseList:(caseList)=>
    set((state)=>({
        casue_list:{caseList}
    })),
}));


export default useStore