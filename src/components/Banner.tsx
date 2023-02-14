import { Spinner, Row, Col } from 'react-bootstrap';


const Loader = () => (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
)

export const Banner = (props: { sunrise: string; sunset: string; loading?: boolean }) => {
    const { sunrise, sunset, loading } = props;

    return (
        <Row className="d-flex justify-content-center align-items-center mb-3" style={{ height: "10rem", backgroundColor: "#f2f2f2" }}>
            <Col xs={3} className="text-center">
                <img src="/sunrise.svg" alt="sunrise" width="45" height="45" />
                <p>{sunrise}</p>
            </Col>
            <Col xs={6} className="text-center">
                {loading ? <Loader /> : <h3>Sunrise and Sunset</h3>}
            </Col>
            <Col xs={3} className="text-center">
                <img src="/sunset.svg" alt="sunset" width="45" height="45" />
                <p>{sunset}</p>
            </Col>
        </Row>
    );
};

export default Banner;
