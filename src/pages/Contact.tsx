import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Just Go Taxi | Get in Touch</title>
        <meta
          name="description"
          content="Contact Just Go Taxi for bookings, inquiries, or support. Call us at 01443 123456 or fill out our contact form for a quick response."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 animate-fade-in">
              Have a question or need to book a ride? We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is available 24/7 to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-elegant transition-all">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+4407469073386" className="text-secondary hover:text-secondary/80 transition-colors">
                      07469 073386
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-elegant transition-all">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/4407469073386?text=Book%20Taxi%20Now" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-elegant transition-all">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@justgotaxi.uk" className="text-secondary hover:text-secondary/80 transition-colors">
                      info@justgotaxi.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-elegant transition-all">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Pontypridd, South Wales<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-elegant transition-all">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">
                      24 Hours a Day, 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
