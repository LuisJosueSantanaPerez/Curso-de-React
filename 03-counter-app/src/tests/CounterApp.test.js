import {shallow} from "enzyme";
import CounterApp from "../CounterApp";

describe('Prueba <CounterApp/>', ()=>{
    test('debe de mostrar <CounterApp /> correctamente', ()=>{
        const wrapper = shallow(
            <CounterApp />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', ()=>{
        const wrapper = shallow(
            <CounterApp value={100} />
        );
        const valorpordefecto = wrapper.find('h2').text().trim();
        expect(valorpordefecto).toBe("100");
    });
});
