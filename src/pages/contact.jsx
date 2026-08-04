import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";

import contactInfo from "../data/contact";

import "../styles/contact.css";

function Contact() {

    return (

        <section
            
            className="contact section"
        >

            <div className="container">

                <Reveal>

                    <SectionTitle

                        title="Contact"

                        subTitle="Let's discuss your next project or simply say hello."

                    />

                </Reveal>

                <div className="contact-wrapper">

                    <Reveal>

                        <div className="contact-info">

                            {contactInfo.map((item) => (

                                <ContactCard

                                    key={item.id}

                                    contact={item}

                                />

                            ))}

                            <SocialLinks />

                        </div>

                    </Reveal>

                    <Reveal>

                        <ContactForm />

                    </Reveal>

                </div>

            </div>

        </section>

    );

}

export default Contact;