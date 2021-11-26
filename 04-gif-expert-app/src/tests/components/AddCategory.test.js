import { shallow } from "enzyme";
import {AddCategory} from "../../components/AddCategory";

describe("Probando el <AddCategory />", ()=>{

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(()=>{
       jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test("debe de mostrar el componente",()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de cambiar la caja de texto",()=>{
        const input = wrapper.find('FormControl');
        const value = "Hola Mundo";
        input.simulate('change', { target: { value } });
        // expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test("No debe de postear la informacion con el submit",()=>{
        wrapper.find("Form").simulate('submit', { preventDefault: () => {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test("debe de llamar el setCategories y limpiar la caja de texto", ()=>{
        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. El valor del input debe de estar ''

        const value = "Hola Mundo";
        const input = wrapper.find("FormControl");
        // 1. Simular el inputChange
        input.simulate('change', { target: { value } });

        // 2. Simular el submit setCategories se debe de haber llamado
        wrapper.find("Form").simulate('submit', { preventDefault: () => {} });

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. El valor del input debe de estar ''
        expect( wrapper.find("FormControl").prop("value") ).toBe("");
    });

});
