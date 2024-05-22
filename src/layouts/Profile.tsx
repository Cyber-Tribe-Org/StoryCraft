import React, { useState, ChangeEvent, useContext, useEffect } from "react";
import { UserContext } from "../App";
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Modal,
    Image,
} from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import man_pic_1 from "../assets/avatars/man_black_hair.png";
import man_pic_2 from "../assets/avatars/man_blond_blue_eyes.png";
import man_pic_3 from "../assets/avatars/man_crazy_professor.png";
import man_pic_4 from "../assets/avatars/man_mid_age.png";
import man_pic_5 from "../assets/avatars/man_with_beard.png";
import woman_pic_1 from "../assets/avatars/woman_black_hair.png";
import woman_pic_2 from "../assets/avatars/woman_blond.png";
import woman_pic_3 from "../assets/avatars/woman_brunette.png";
import woman_pic_4 from "../assets/avatars/woman_india.png";
import woman_pic_5 from "../assets/avatars/woman_with_braids.png";

interface ProfileState {
    name: string;
    age: string;
    gender: string;
    profession: string;
    country: string;
    address: string;
    picture: string;
}

const Profile: React.FC = () => {
    const { userEmail, isVerified } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState("");
    const [manPicOptions, setManPicOptions] = useState([
        man_pic_1,
        man_pic_2,
        man_pic_3,
        man_pic_4,
        man_pic_5,
    ]);
    const [womanPicOptions, setWomanPicOptions] = useState([
        woman_pic_1,
        woman_pic_2,
        woman_pic_3,
        woman_pic_4,
        woman_pic_5,
    ]);

    const [profile, setProfile] = useState<ProfileState>({
        name: "",
        age: "",
        gender: "",
        profession: "",
        country: "",
        address: "",
        picture: "",
    });

    useEffect(() => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            picture: prevProfile.gender === "Male" ? man_pic_1 : woman_pic_1,
        }));
    }, [profile.gender]);

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleSave = () => {
        // Save profile changes logic here
        console.log("Profile saved:", profile);
    };

    const handlePictureChange = (picture: string) => {
        setSelectedPicture(picture);
    };

    const handlePictureSave = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            picture: selectedPicture,
        }));
        setShowModal(false);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center position-relative">
                    <Image
                        src={profile.picture}
                        alt="Profile"
                        className="img-thumbnail"
                        width="150"
                    />
                    <FaPencilAlt
                        className="position-absolute bottom-0 end-0"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowModal(true)}
                    />
                    <h3 className="mt-3">{profile.name || "Your Name"}</h3>
                    <p className={`text-${isVerified ? "success" : "danger"}`}>
                        {userEmail}{" "}
                        {isVerified ? "(Verified)" : "(Not Verified)"}
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAge" className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                name="age"
                                value={profile.age}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGender" className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={profile.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formProfession" className="mb-3">
                            <Form.Label>Profession</Form.Label>
                            <Form.Control
                                type="text"
                                name="profession"
                                value={profile.profession}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCountry" className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                name="country"
                                value={profile.country}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress" className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Profile Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {profile.gender === "Female" ? (
                            <>
                                {womanPicOptions.map((pic) => (
                                    <Col xs={4}>
                                        <Image
                                            src={pic}
                                            thumbnail
                                            onClick={() =>
                                                handlePictureChange(pic)
                                            }
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Col>
                                ))}
                            </>
                        ) : (
                            <>
                                {manPicOptions.map((pic) => (
                                    <Col xs={4}>
                                        <Image
                                            src={pic}
                                            thumbnail
                                            onClick={() =>
                                                handlePictureChange(pic)
                                            }
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Col>
                                ))}
                            </>
                        )}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePictureSave}>
                        Select
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Profile;
