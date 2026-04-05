import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container contact-wrapper">
        
       
        <div className="contact-info-column">
          <div className="about-badge">
            <Mail size={14} className="badge-icon" />
            <span>Get in Touch</span>
          </div>
          <h2 className="contact-title">Let's Work <span className="purple-text">Together</span></h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life. 
            I'm always open to new opportunities and collaborations.
          </p>

          <div className="contact-cards-list">
            <div className="contact-info-card">
              <div className="contact-icon-box"><Mail size={20} /></div>
              <div className="contact-text">
                <label>Email</label>
                <p>syailendraanggoro@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon-box"><Phone size={20} /></div>
              <div className="contact-text">
                <label>Phone</label>
                <p>+62 823-1345-9758</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon-box"><MapPin size={20} /></div>
              <div className="contact-text">
                <label>Location</label>
                <p>Bogor, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="contact-form-column">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            
            <input type="hidden" name="access_key" value="ea603269-03fc-4ac3-9d30-01775b385101" />
            
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@gmail.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="+62 xxx-xxxx-xxxx" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your offer..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;