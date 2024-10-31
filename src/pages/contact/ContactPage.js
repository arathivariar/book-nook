import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Contact.module.css";
import btnStyles from "../../styles/Button.module.css";

function ContactPage() {
	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
	const { name, email, message } = contactData;

	// Validation patterns
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleChange = (event) => {
		setContactData({
			...contactData,
			[event.target.name]: event.target.value,
		});
		setErrors({
			...errors,
			[event.target.name]: '' // Reset error message on input change
		});
	};

	const validateForm = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = "Name is required";
		if (!email.trim() || !emailRegex.test(email)) newErrors.email = "Valid email is required";
		if (!message.trim()) newErrors.message = "Message cannot be empty";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateForm()) {
			window.alert('Thank you for your message');
			setContactData({ name: '', email: '', message: '' });
		}
	};

	return (
		<div className={`${styles.ContactPage} mx-auto card p-3 p-sm-5`}>
			<div className="text-center">
				<h2>Get in touch!</h2>
				<hr />
				<p>If you have any suggestions, do not hesitate to get in touch with us!</p>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleChange}
						isInvalid={!!errors.name}
					/>
					{errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={email}
						placeholder="Enter email"
						onChange={handleChange}
						isInvalid={!!errors.email}
					/>
					{errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						name="message"
						value={message}
						placeholder="Your message..."
						onChange={handleChange}
						isInvalid={!!errors.message}
					/>
					{errors.message && <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>}
				</Form.Group>
				<div className="text-center">
					<Button
						className={`${btnStyles.Button}`}
						disabled={!email || !message}
						type="submit"
					>
						Send
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default ContactPage;
