import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import './Reservations.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Reservations() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '1',
        occasion: '',
        name: '',
        email: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');


    useEffect(() => {
        // Get the current date and time
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        setCurrentDate(`${year}-${month}-${day}`);
        setCurrentTime(`${hours}:${minutes}`);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        validateForm(name, value);
    };

    const validateForm = (name, value) => {
        let errors = { ...formErrors };

        // Validate name
        if (name === 'name') {
            if (value.length < 3) {
                errors.name = 'Name must be at least 3 characters long';
            } else {
                delete errors.name;
            }
        }

        // Validate email
        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                errors.email = 'Please enter a valid email address';
            } else {
                delete errors.email;
            }
        }

        setFormErrors(errors);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        


        if (Object.keys(formErrors).length === 0 && formData.email && formData.name) {
            axios.post('http://localhost:3001/send-email', {
                to: formData.email,
                subject: 'Booking Confirmation',
                text: `Your booking has been confirmed. Details: ${JSON.stringify(formData)}`
            })
            .then(response => {
                console.log('Email sent:', response.data);
                alert("Confirmation email has been sent!");
                setFormData({
                    date: '',
                    time: '',
                    guests: '1',
                    occasion: '',
                    name: '',
                    email: ''
                });
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
        } else {
            alert('Please fix the errors in the form.');
        }


        // Validate the form
        // if (validateForm()) {
        //     // Create a transporter using SMTP transport
        //     const transporter = nodemailer.createTransport({
        //         service: 'Gmail',
        //         auth: {
        //             user: 'nidhi.rajpurohit2410@gmail.com',
        //             pass: '11111'
        //         }
        //     });

        //     // Compose the email
        //     const mailOptions = {
        //         from: 'nidhi.rajpurohit2410@gmail.com',
        //         to: formData.email, // Use the email entered in the form
        //         subject: 'Booking Confirmation',
        //         text: 'Your booking has been confirmed. Details: ...' // Plain text message
        //     };

        //     // Send the email
        //     transporter.sendMail(mailOptions, function (error, info) {
        //         if (error) {
        //             console.log(error);
        //         } else {
        //             console.log('Email sent: ' + info.response);
        //             alert("Confirmation email has been sent!");
        //         }
        //     });

        //     // Reset form fields
        //     setFormData({
        //         date: '',
        //         time: '',
        //         guests: '1',
        //         occasion: '',
        //         name: '',
        //         email: ''
        //     });
        // }
        // //emailjs -> service id, template id, public key 
        // const serviceId = 'service_d99npzl';
        // const templateId = 'template_lo98s8k';
        // const publicKey = 'ZcYVAptJ0gYsH0Cy_';

        // //create a new object that contains dynamic params
        // const templateParams = {
        //     from_email: formData.email,
        //     to_name: 'Little Lemon',
        //     message: 'booking confrimed',
        // };

        // emailjs.send(serviceId, templateId,publicKey, formData)
        // .then((response) => {
        //     console.log("email sent successfully! ", response);
        //     // setName('');
        //     setFormData({
        //         date: '',
        //         time: '',
        //         guests: '1',
        //         occasion: '',
        //         name: '',
        //         email: ''
        //     });
        //     // setMsg('');
        // })
        // .catch((error) => {
        //     console.error("error sending email", error);
        // })

        // if (validateForm()) {
        //     alert("confirmation mail is sent to you");
        //     // Reset form fields
        //     // setName("");
        //     setEmail("");
        //     // setSubject("");
        //     setMsg("");
        //     setErrors({});
        // }


        // console.log('Form Submitted', formData);
        // if (Object.keys(formErrors).length === 0) {
        //     console.log('Form Submitted', formData);
        //     // sendConfirmationEmail(formData); 
        //     setFormData({
        //         date: '',
        //         time: '',
        //         guests: '1',
        //         occasion: '',
        //         name: '',
        //         email: ''
        //     });
        // }
        // setFormData({
        //     date: '',
        //     time: '',
        //     guest: '1',
        //     occasion: '',
        //     name: '',
        //     email: ''
        // });
    };


    return (
        <>
            <Navbar />
            <div className="reserve-main">
                <div className="reserve-heading">
                    Book a Table
                </div>

                <div className="form-main">
                    <div className="form">

                        <form onSubmit={handleSubmit}>
                            {/* <div> */}
                            <div className="form-section">
                                <div className="form-section-title">
                                    Choose a Date:
                                </div>

                                <input type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="input-field"
                                    min={currentDate}
                                    required
                                />
                            </div>
                            {/* </div> */}


                            {/* <div> */}
                            <div className="form-section">
                                <div className="form-section-title">
                                    Choose time:
                                </div>

                                <input type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="input-field"
                                    min={formData.date === currentDate ? currentTime : '00:00'}
                                    required />
                            </div>
                            {/* </div> */}


                            {/* <div> */}
                            <div className="form-section">
                                <div className="form-section-title">
                                    Number of guests:
                                </div>

                                <input type="number"
                                    name="guests"
                                    value={formData.guest}
                                    onChange={handleChange}
                                    min={1}
                                    className="input-field"
                                    required />
                            </div>
                            {/* </div> */}


                            {/* <div> */}
                            <div className="form-section">
                                <div className="form-section-title">
                                    Occasion:
                                </div>

                                <select
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    className="input-field"
                                >
                                    {/* <option value="">Select an occasion</option> */}

                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            {/* </div> */}

                            {/* <div> */}
                            <div className="form-section">
                                <div className="form-section-title">
                                    Your Name:
                                </div>

                                <input type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-field"
                                    required />
                            </div>
                            {/* </div> */}

                            {/* <div> */}
                            <div className="form-section">

                                <div className="form-section-title">
                                    Email Address:
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-field"
                                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                    required
                                />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                            </div>
                            {/* </div> */}

                            <div >
                                <button className="submit-button">
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Reservations;