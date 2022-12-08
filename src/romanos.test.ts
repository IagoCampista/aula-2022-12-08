import { Romanos } from "./romanos";


describe('romanos', () => {

    it('deveria converter 1 para "I"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1); 
        //expectation
        expect (numeroRomanos).toEqual("I");
    });

    it('deveria converter 10 para "X"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(10); 
        //expectation
        expect (numeroRomanos).toEqual("X");
    });

    it('deveria converter 5 para "V"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(5); 
        //expectation
        expect (numeroRomanos).toEqual("V");
    });

})