import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Probando en el <GifExpertApp/>", ()=>{
    test("debe de mostrar el componente", ()=>{
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    })

    test("debe de mostrar una lista de categoria", ()=>{
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length + 1);
    })
})
