import { create } from "zustand";
import Case from "../class/Case";

const useStore = create((set) => ({

    // fn:"2",
    // updateF:(fnf)=>set(() => ({fn:fnf}))

    case_list:[new Case(
        -1,
        "DEFAULT_IDa",
        "DEFAULT_OFFENCE",
        "DEFAULT_DATE",
        -1,
        "DEFAULT_MONTH",
        "DEFAULT_DOW",//day of week
        -1,
        -1,//day of year
        -1,
        "DEFAULT_DATE",
        -1,
        "DEFAULT_MONTH",
        "DEFAULT_DOW",//day of week
        -1,
        -1,//day of year
        -1 ,
        "DEFAULT_DIV",//police stat div
        "DEFAULT_LOCATION",
        "DEFAULT_PREMISES",
        "DEFAULT_MAKE",
        "DEFAULT_MODEL",
        "DEFAULT_TYPE",
        -1,
        "DEFAULT_COLOUR",
        -1,
        "DEFAULT_STATUS",
        "{\"type\": \"Point\", \"coordinates\": [-79.442323077, 43.6390010060001]}")],

    setCaseList:(caseList)=>
    set((state)=>({
        casue_list:{caseList}
    })),
}));


export default useStore