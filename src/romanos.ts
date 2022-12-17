
class Romanos {
    private arabicos = [
        1,
        4,
        5,
        9,
        10,
        40,
        50,
        90,
        100,
        400,
        500,
        900,
        1000
    ]
    
    private romanos = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M'
    ]

    converte(arabico: number):string{ 
        let result = '';
        let i=0;
        for (i=0; i<14; i++){
            if(arabico==this.arabicos[i]){
                // i=0;
                result = result +this.romanos[i]
            }
            
        }
        return result;
        // const posicao_encontrada = this.arabicos.indexOf(arabico);
        // if(posicao_encontrada >= 0){
        //     return this.romanos[posicao_encontrada]
        // } else {
        //     return 'hj nao'
        // }
        // throw new Error("arabico desconhecido");
    } 
}

export {Romanos}


/*
converte(arabico: number):string{ 
        const posicao_encontrada = this.arabicos.indexOf(arabico);
        if(posicao_encontrada >= 0){
            return this.romanos[posicao_encontrada];
        } else {
            const posicao_encontrada2 = this.arabicos.indexOf(arabico-1);
            if (posicao_encontrada2 >= 0) {
                // ok
                return this.romanos[posicao_encontrada2]+"I";
            } else {
                const posicao_encontrada3 = this.arabicos.indexOf(arabico-2);
                if (posicao_encontrada3 >= 0) {
                    // ok
                    return this.romanos[posicao_encontrada3]+"II";
                }
            }
        }
        throw new Error("arabico desconhecido");
    } 
*/