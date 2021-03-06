import React, {useState} from 'react';
import {sendMessage} from '../../services/apiCalls'
import './Contact.scss';

function Contact() {
    const [{email, message}] = useState('');
    const [formData, setFormData] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault()
        await sendMessage({ ...formData })
    } 

    return (
        <div className="requestForm">
            <h2>Feedback is always welcome. Reach out!</h2>
            <form onSubmit={submitHandler}>
                <input
                    name="email"
                    placeholder="What's your email?"
                    value={formData[email]}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    autoFocus
                    required
                    type="email"
                />
                <textarea
                    name="message"
                    placeholder="Type your message here..."
                    value={formData[message]}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="message"
                />
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default Contact;
