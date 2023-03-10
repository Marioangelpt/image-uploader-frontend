
export function splitUrl(str){
    if(str.length > 42){
        return str.slice(0, 42).concat("...");   
    }else{
        return str;
    }
}