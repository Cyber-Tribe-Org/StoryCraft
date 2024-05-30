import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import plotPointIcon from "../../assets/plotPointIcon.png";
import { PlotPointProps } from "../../entities/StoryboardInterfaces";
import "./PlotPoint.css"; // Import CSS file for custom styles

const PlotPoint = ({ text, name, order, header, number }: PlotPointProps) => {
    return (
        <Card>
            <Card.Header style={{ background: "black" }}>
                <Stack className="align-items-center justify-content-center">
                    <Stack direction="horizontal" gap={2}>
                        <h2 className="number-plot-point">{number}</h2>
                        <p className="landmark-text ms-auto">{header}</p>
                    </Stack>
                    <img
                        src={plotPointIcon}
                        className="circle-image"
                        alt="Thematic image"
                    ></img>
                    <h5 className="title-plot-point">{name}</h5>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            value={text}
                            aria-label="With textarea"
                            className="text-field"
                        />
                    </InputGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlotPoint;
