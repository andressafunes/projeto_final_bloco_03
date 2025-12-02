import type Produto from "./Produto";

export default interface Cateforia{
    id: number;
    nome: string;
    produto?: Produto [] | null;
}