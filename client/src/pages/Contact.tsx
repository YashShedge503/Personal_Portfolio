import { useState } from "react";
import { MapPin, Mail, Phone, Send, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement EmailJS or Netlify Forms integration
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Chinchwad, Pune, Maharashtra",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "yashshedge503@gmail.com",
      href: "mailto:yashshedge503@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+91-9370251431",
      href: "tel:+919370251431",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-shedge/",
      color: "text-primary hover:bg-primary"
    },
    {
      icon: Github,
      href: "https://github.com/YashShedge503",
      color: "text-secondary hover:bg-secondary"
    },
    {
      icon: Instagram,
      href: "#",
      color: "text-accent hover:bg-accent"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-surface to-dark py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's connect and discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.content}</p>
                );

                return (
                  <Card key={index} className="bg-surface/50 backdrop-blur-sm border-surface-light">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className={`h-6 w-6 ${info.color} mr-4`} />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                          {content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Links */}
              <Card className="bg-surface/50 backdrop-blur-sm border-surface-light">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-12 h-12 bg-primary/20 ${social.color} hover:text-white rounded-lg transition-all duration-200`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-surface/50 backdrop-blur-sm border-surface-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-dark border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-dark border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-dark border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
