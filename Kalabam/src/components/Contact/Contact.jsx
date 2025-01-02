import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;


        const whatsappMessage = `Hello, I am ${name}.\n\nHere are my details:\n\n- Phone: ${phone}\n${
            email ? `- Email: ${email}\n` : ""
        }${message ? `- Message: ${message}` : ""}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const phoneNumber = "918089682533";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row contact_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="title_section">
                            <h3>
                                <i className="bx bx-envelope"></i>Contact Us
                            </h3>
                            <h4>We’re Here to Guide You on Your Spiritual Journey</h4>
                            <p>
                                Have questions, need assistance, or want to know more about our temple services and events?
                                Feel free to reach out to us. Whether you’re seeking guidance, looking to participate in
                                rituals, or just want to stay connected, we are always here to help. Your spiritual
                                well-being is our priority.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="form_section">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email (Optional)"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message (Optional)"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Get In Touch</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
