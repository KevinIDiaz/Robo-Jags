import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

export function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (form.current === null) return;
        emailjs.sendForm(
            'service_56s47me',     // Replace with your actual service ID
            'template_mz4me8l',    // Replace with your actual template ID
            form.current,
            '0xYO7NrMcK8x6-YPq'      // Replace with your actual public key
        ).then((result) => {
            alert("Message sent successfully!");
            console.log(result.text);
            const formElement = e.target as HTMLFormElement;
            formElement.reset();
            form.current?.reset(); // ✅ Safely call reset on the form
        }, (error) => {
            alert("Oops! Something went wrong.");
            console.log(error.text);
        });

    };

    return (
        <div className="contact-page">
            < h2 id='contact'>Contact Us</h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p><strong>Email:</strong> <a href="mailto:jhvalentin@aldineisd.org">jhvalentin@aldineisd.org</a></p>
                    <p><strong>Phone:</strong> <a href='tel: +12814369391'>281-436-9391</a> </p>
                    <p><strong>Location:</strong> <a href='https://maps.app.goo.gl/K5K2StucYECrEeFt7'>Blanson CTE High School, Houston, TX</a></p>

                    <div className="social-links">
                        <a href="https://www.instagram.com/blansonrobotics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://x.com/BlansonRobotics" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" required />

                <label>Email</label>
                <input type="email" name="user_email" required />

                <label>Message</label>
                <textarea name="message" rows={6} required />

                <button type="submit" className="button">Send Message</button>
            </form>
                </div>
            </div>
            <iframe 
    title="Blanson Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.738355511079!2d-95.42092548171776!3d29.913911247090542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c9b22d69006b%3A0x8461d46c156bbed2!2sBlanson%20CTE%20Senior%20High%20School!5e0!3m2!1sen!2sus!4v1744904056983!5m2!1sen!2sus"
    width="100%" 
    height="300" 
    style={{ border: 0, marginTop: '2rem', borderRadius: '8px' }}
    allowFullScreen={true} 
    loading="lazy"
></iframe>

        </div>
    );
}
