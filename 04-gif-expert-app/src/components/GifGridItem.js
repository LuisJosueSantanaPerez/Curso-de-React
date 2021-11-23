import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

export const GifGridItem = ({ title, url }) => {
    return (
        <Card className="card animate__animated animate__fadeIn" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ url } />
            <Card.Body>
                <Card.Text> {
                    title
                }</Card.Text>
            </Card.Body>
        </Card>
    );
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url:  PropTypes.string.isRequired
}
