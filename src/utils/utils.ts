import {Regions} from "twisted/dist/constants";

export const getDictFromEnum = (enum_: any) => {
    let data: any = {};
    Object.keys(enum_).forEach((k,i)=>{
        const d = Object.values(enum_)[i];
        data[k] = d;
    })
    return data;
}