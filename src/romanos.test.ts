
describe('romanos', () => {

    it('deveria converter 1 para "I"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1); 
        //expectation
        expect (numeroRomanos).toEqual("I");
    });

})