import { useState } from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(event) {

        event.preventDefault();

        console.log(formData);

        alert("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    }

    return (

        <form
            className="contact-form"
            onSubmit={handleSubmit}
        >

            <input
            className="card"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
            className="card"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
            className="card"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />

            <textarea
            className="card"
                rows="7"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
            />

            <button
                type="submit"
                className="send-btn card"
            >
                Send Message
            </button>

        </form>

    );

}

export default ContactForm;