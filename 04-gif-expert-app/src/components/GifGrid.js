import PropTypes from "prop-types";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {Spinner, Stack} from "react-bootstrap";

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {  loading && <Spinner animation="grow" variant="dark" />  }

            <Stack direction="horizontal" gap={3}>
                    {
                        images.map(  ({id, title, url }) => (
                            <GifGridItem key={id} title={title} url={url}/>
                        ))
                    }
            </Stack>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


