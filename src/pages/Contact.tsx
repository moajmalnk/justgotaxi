import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Star, Award } from "lucide-react";
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
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-secondary/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-32 h-32 border border-secondary/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-secondary/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <div className="w-32 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-fade-in leading-relaxed text-slate-300">
            Have a question or need to book a ride? We're here to help 24/7 with professional service and instant support.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                    Contact Information
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Reach <span className="text-secondary">Out</span> to Us
                </h2>
                <div className="w-32 h-1 bg-secondary rounded-full mb-8 mx-auto lg:mx-0"></div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Reach out to us through any of the following channels. Our team is available 24/7 to assist you with professional service and instant support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Phone</h3>
                    <a href="tel:+4407469073386" className="text-lg text-secondary hover:text-secondary/80 transition-colors font-semibold">
                      07469 073386
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call us anytime for immediate assistance</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
                    <a href="mailto:info@justgotaxi.uk" className="text-lg text-secondary hover:text-secondary/80 transition-colors font-semibold">
                      info@justgotaxi.uk
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Send us detailed inquiries</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Address</h3>
                    <p className="text-lg text-muted-foreground">
                      Pontypridd, South Wales<br />
                      United Kingdom
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Serving all of South Wales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                    Send Message
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Send Us a <span className="text-secondary">Message</span>
                </h2>
                <div className="w-32 h-1 bg-secondary rounded-full mb-8 mx-auto lg:mx-0"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 border-0 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/10 px-6 py-3 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                  Why Trust Us
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Professional <span className="text-secondary">Service</span> Guaranteed
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Licensed & Insured</h4>
                <p className="text-muted-foreground">Fully licensed drivers with comprehensive insurance coverage for your peace of mind.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">5-Star Rated</h4>
                <p className="text-muted-foreground">Consistently rated 5 stars by our customers for reliable and professional service.</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">24/7 Support</h4>
                <p className="text-muted-foreground">Round-the-clock availability to serve your transportation needs whenever you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
