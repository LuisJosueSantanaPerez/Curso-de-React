import {shallow} from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
// esto va a simular o responder la informacion
jest.mock("../../hooks/useFetchGifs");

describe('Probando en el <GifGrid/>', ()=> {

    const category = "One Punch";

    test('debe de mostrar el componente', ()=>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', ()=>{

        const gifs = [{
            id: "23",
            url: "https://localhost:8080/cualquiercosa.jpg",
            title: "Cualquier cosa"
        },
            {
                id: "24",
                url: "https://localhost:8080/cualquiercosa.jpg",
                title: "Cualquier cosa"
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find("p").exists() ).toBe(false)
        expect( wrapper.find("GifGridItem").length ).toBe(gifs.length)
    });
});
