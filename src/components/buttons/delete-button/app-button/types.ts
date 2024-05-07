export type TButton = {
    text:string;
    type?:'catalog' | 'card' | 'saved' | 'favorites';
    isDisabled?:boolean;
    onClick:() => void
}