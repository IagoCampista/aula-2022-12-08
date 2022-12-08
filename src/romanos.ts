
class Romanos {
    private arabicos = [
        1,
        5,
        10
    ]
    
    private romanos = [
        'I',
        'V',
        'X'
    ]

    converte(arabico: number):string{
        const indice = this.arabicos.indexOf(arabico);
        if(indice == -1) throw new Error("arabico desconhecido");
        else return this.romanos[indice];
    } 
}

export {Romanos}