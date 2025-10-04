// EmailJS configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and set up a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below or set them as environment variables

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dzsvfjk',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_8ki63gb',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '31FK0fjMoyGTCu6Mk',
  toEmail: 'justgotaxi.com@gmail.com',
};
