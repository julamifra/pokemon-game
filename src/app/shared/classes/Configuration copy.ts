import { Secctions } from "src/app/views/configuration/configuration.interface";

export class Cache {

    config;
    // language: Secctions.Languages;
    // theming: Secctions.Theming;
    // renderType: Secctions.RenderType;

    constructor(){}

    set(key,value){
        localStorage.setItem(key,value);
    }

    get(key){
        if(!localStorage.getItem[key]){
            return null;
        }
        return localStorage.getItem(key);
    }

    has(key){
        if(!localStorage.get(key)) return false;   
        return true;
    }

}