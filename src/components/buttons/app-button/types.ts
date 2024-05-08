export type TButton = {
    text:string;
    type?:'catalog' | 'card' | 'saved' | 'favorite';
    isDisabled?:boolean;
    onClick:() => void
}