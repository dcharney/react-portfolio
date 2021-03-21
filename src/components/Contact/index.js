import React, { useState } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';
import { Col } from 'react-bootstrap';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } = formState;

    const initValid = {
        nameState: '',
        emailState: '',
        messageState: '',
        submitState: 'disabled'
    }
    const [ validation, setValidation ] = useState(initValid);
    
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        switch (e.target.name) {
            case 'Email':
                const isValid = validateEmail(e.target.value);
                if (!isValid) {
                    setValidation({...validation, emailState: 'is-invalid'});
                } else {
                    setValidation({...validation, emailState: 'is-valid'});
                }
                break;
            case 'Name':
                if (e.target.value.length > 2) {
                    setValidation({...validation, nameState: 'is-valid'});
                } else {
                    setValidation({...validation, nameState: 'is-invalid'});
                }
                break;
            case 'Message':
                if (e.target.value.length > 9) {
                    setValidation({...validation, messageState: 'is-valid'});
                } else {
                    setValidation({...validation, messageState: 'is-invalid'});
                }
                break;
        }
    };

    function handleBlur(e) {
        switch (e.target.name) {
            case 'Email':
                setValidation({...validation, emailState: ''})
                break;
            case 'Name':
                setValidation({...validation, nameState: ''})
                break;
            case 'Message':
                setValidation({...validation, messageState: ''})
                break;
        }
        
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        };
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        };
    }

    return (
        <Form id="contact">
            <h1>Contact Me</h1>
            <Form.Group controlId="name" >
                <Form.Label>Name</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        aria-describedby="nameValid"
                        defaultValue={name}
                        type="text"
                        required
                        className={validation.nameState}
                        name="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                        Minimum 3 characters.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <InputGroup>
                    <Form.Control
                        placeholder="username@gmail.com"
                        aria-label="username@gmail.com"
                        aria-describedby="emailValid"
                        defaultValue={email}
                        required
                        className={validation.emailState}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="Email"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    defaultValue={message} 
                    className={validation.messageState}
                    name="Message"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    Minimum 10 characters.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
                <Col sm={3}>
                    <Button id={validation.submitState} className={validation.submitState} type="submit">
                        Submit
                    </Button>
                </Col>
                {errorMessage && (
                    <Col>
                        <p className="error-text">{errorMessage}</p>
                    </Col>
                )}
                
                
            </Form.Row>
            
        </Form>
    );
}

export default Contact;