
export class Configuration {

    private config;

    constructor(){
        this.config = {};
    }

    set(key: string, value: string): void {
        this.config[key] = value;
    }

    get(key: string): string {
        if(!this.config[key]){
            return null
        }
        return this.config[key];
    }

    has(key: string): boolean {
        if(!this.config[key]) return false;   
        return true;
    }
    
    full(){
        return this.config;
    }
}