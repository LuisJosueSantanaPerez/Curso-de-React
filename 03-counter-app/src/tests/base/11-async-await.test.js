import {getImagen} from "../../base/11-async-await";

describe('Pruebas con async-await y Fetch', () => {
    test('debe de retornar el url de la imagen', async () => {

        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

    test('debe de obtener un error si la url no existe', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});
