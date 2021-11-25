import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jpg"
    const wrapper = shallow(<GifGridItem  title={title} url={url}/>) ;

    test("debe de mostrar el componente correctamente", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de tener un parrafo con el titulo", () =>{
        const p = wrapper.find("CardText");
        expect(p.text().trim()).toBe(title);
    });

    test("debe de tener la imagen igual al url y alt de los props", ()=>{
        const img = wrapper.find("CardImg");
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })


    test("debe de tener animate__fadeIn", ()=>{
        const card = wrapper.find("Card");
        const classNames = card.prop("className");
        expect(classNames.includes("animate__fadeIn")).toBe(true);
        //expect(img.prop('class')).toBe();
        //expect(img.prop('alt')).toBe(title);
    })
});
