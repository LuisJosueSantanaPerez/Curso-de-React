import {render} from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {  shallow  } from 'enzyme';

describe('Pruebas en <PrimeraApp />', ()=> {
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', ()=>{
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)
    //     expect( getByText( saludo + '!!!' ) ).toBeInTheDocument();
    // });

    test('debe de mostrar <PrimeraApp /> correctamente', ()=>{
        const saludo = "Hola, Soy goku";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>); // es igual que el render de jest

        expect(wrapper).toMatchSnapshot();
    });
});
