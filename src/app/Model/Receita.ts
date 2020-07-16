import { Usuario } from './Usuario';
import { Categoria } from './Categoria';


export class Receita {
    public id: number;
    public nome: string;
    public ingredientes: string;
    public modoPreparo: string;
    public img1: string;
    public img2: string;
    public img3: string;
    public idUsuario: Usuario;
    public idCategoria: Categoria;
    public data: Date;
    public ativo: boolean;
}