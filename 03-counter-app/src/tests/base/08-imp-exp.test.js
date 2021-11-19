import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba en funcione de heroes', () => {
    test('debe de retornar un heroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById( id );

        const data = heroes.find( h => h.id === id);

        expect(heroe).toEqual(data);

    });

    test('debe de retornar un undefined si Heroe no existe', ()=>{

        const id = 10;
        const heroe = getHeroeById( id );
        expect(heroe).toBe(undefined);

    });

    test('debe de retornar un arreglo con los Heroe de DC', ()=>{

        const owner = "DC";
        const heroe = getHeroesByOwner( owner );
        const data = heroes.filter((h) => h.owner === owner);
        expect(heroe).toEqual(data);

    });

    test('debe de retornar un arreglo con los hereoes de marvel', ()=>{

        const owner = "Marvel";
        const heroe = getHeroesByOwner( owner );
        const data = heroes.filter((h) => h.owner === owner);
        expect(heroe.length).toBe(data.length);

    });
})
