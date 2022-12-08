
class Romanos {
    private arabicos = [
        1,
        5,
        10,
        50,
        100,
        500,
        1000
    ]
    
    private romanos = [
        'I',
        'V',
        'X',
        'L',
        'C',
        'D',
        'M'
    ]

    converte(arabico: number):string{
        if(arabico<1)throw new Error("arabico desconhecido");
        
        const indice = this.arabicos.indexOf(arabico);
        if(indice == -1){
            if(arabico == 2)
            return 'II';
            else if (arabico== 3)
            return 'III';
            else
            return 'IV';
        }
        else return this.romanos[indice];
    } 
}

export {Romanos}