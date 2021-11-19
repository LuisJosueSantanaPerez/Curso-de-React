import {shallow} from "enzyme";
import CounterApp from "../CounterApp";

describe('Prueba <CounterApp/>', ()=>{
    let wrapper = shallow(
        <CounterApp />
    );
    // ciclo de vida
    beforeEach(()=>{
        wrapper = shallow(
            <CounterApp />
        );
    });

    test('debe de mostrar <CounterApp /> correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', ()=>{
        const wrapper = shallow(
            <CounterApp value={100} />
        );
        const valorpordefecto = wrapper.find('h2').text().trim();
        expect(valorpordefecto).toBe("100");
    });


    test('debe de incrementar con el boton +1', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const valorIncrementado = wrapper.find('h2').text().trim();
        expect(valorIncrementado).toBe("11");
    });

    test('debe de descrementar con el boton -1', ()=>{
        wrapper.find('button').at(2).simulate('click');
        const valorDescrementado = wrapper.find('h2').text().trim();
        expect(valorDescrementado).toBe("9");
    });

    test('debe de restablecer el valor por defecto', ()=>{
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valorPorDefecto = wrapper.find('h2').text().trim();
        expect(valorPorDefecto).toBe("10");
    });
});
