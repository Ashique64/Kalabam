import React from "react";
import "./Contact.scss";

const Contact = () => {
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
                            <form>
                                <div className="form-group">
                                    <input type="text" required placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email(Optional)" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <textarea rows={3} placeholder="Message(Optional)"></textarea>
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
