import { Romanos } from "./romanos";


describe('romanos', () => {
it('so pra testar o config', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1); 
        //expectation
        expect (numeroRomanos).toEqual("I");
    });
    
})

it('deveria converter 10 para "X"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(10);
        //expectation
        expect (numeroRomanos).toEqual("X");
    });

it('deveria converter 11 para "XI"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(11);
        //expectation
        expect (numeroRomanos).toEqual("XI");
    });

    it('deveria converter 20 para "XX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(20);
        //expectation
        expect (numeroRomanos).toEqual("XX");
    });

    it('deveria converter 430 para "CDXXX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(430);
        //expectation
        expect (numeroRomanos).toEqual("CDXXX");
    });

    it('deveria converter 432 para "CDXXXII"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(432);
        //expectation
        expect (numeroRomanos).toEqual("CDXXXII");
    });
    it('deveria converter 1967 para "MCMLXVII"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1967);
        //expectation
        expect (numeroRomanos).toEqual("MCMLXVII");
    });
