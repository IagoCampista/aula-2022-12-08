
class Romanos {
    private arabicos = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1             
    ]
    
    private romanos = [
        'M',
        'CM',
        'D',
        'CD', 
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I'        
    ]

    converte(arabico: number):string{ 
        let num = arabico;
        let result = '';
        let i=0;
        for (i=0; i<this.arabicos.length; i++){
            if(num>=this.arabicos[i]){
                num = num - this.arabicos[i];
                result = result +this.romanos[i];
                i=0;
            }
            
        }
        return result;
    } 
}

export {Romanos}

//Link para o repositorio: https://github.com/IagoCampista/aula-2022-12-08.git

