export interface ILiteralsCardConfig {
    header: string;
    title: string;
    text: string;
    button: string;
}

export enum Secctions {
    language = "Languages",
    theming = "Theming",
    rendertype = "RenderType"
}

export enum Languages {
    spanish = "Spanish",
    english = "English",
    german = "German"
}
export enum Theming {
    dark = "Dark",
    ligh = "Light"
}
export enum RenderType {
    canvas = "Canvas",
    html = "HTML"
}