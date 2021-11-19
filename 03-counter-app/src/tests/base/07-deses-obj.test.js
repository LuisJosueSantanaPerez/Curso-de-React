import {retornaArreglo} from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', () => {
    test('debe de retornar un string y un número',  () => {
        const [letras, numero] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
    });
})
