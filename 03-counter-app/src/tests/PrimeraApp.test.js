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

    test('debe de mostrar el subtitulo por props', ()=>{
        const saludo = "Hola, Soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        ); // es igual que el render de jest

        const textoParafo = wrapper.find('p').text();

        expect(textoParafo).toBe( subtitulo );

    });
});
