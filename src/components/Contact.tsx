import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sowmikaarruri@gmail.com",
    color: "hover:bg-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sowmikaarruri",
    color: "hover:bg-gray-900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sowmika-arruri",
    color: "hover:bg-blue-600",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("2hlwJdxZcAiwuSybR");

      // Send email using your template
      await emailjs.send(
        "service_cxbipza", // Service ID
        "template_h1tsy9p", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sowmika",
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Social Links */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-lg ${link.color} hover:text-white`}
              >
                <link.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10">
            <h3 className="text-3xl font-bold mb-3">Let's Connect</h3>
            <p className="text-foreground/70 mb-8">
              Feel free to reach out for collaborations or just a friendly chat
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-xl border-2 border-input focus:border-primary transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-xl border-2 border-input focus:border-primary transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-xl border-2 border-input focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg font-semibold gap-2 transition-all"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 text-foreground/60">
            <p>© 2025 Sowmika Arruri | Designed with 💙 and Code</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
