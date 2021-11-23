import PropTypes from "prop-types";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {Col, Row, Spinner} from "react-bootstrap";

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {  loading && <Spinner animation="grow" variant="dark" />  }

            <Row>
                {
                    images.map(  ({id, title, url }) => (
                        <Col sm={3}>
                            <GifGridItem key={id} title={title} url={url}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


