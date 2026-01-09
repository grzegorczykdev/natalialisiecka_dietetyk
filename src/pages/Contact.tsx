import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import contactImage from "@/assets/contact-stock1.jpeg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Skontaktuj się
            </h1>
            <p className="text-xl text-muted-foreground">
              Gotowy na rozpoczęcie swojej podróży z żywieniem? Skontaktujmy się
              i omówmy, jak mogę pomóc Ci osiągnąć Twoje cele zdrowotne.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Card className="border-none shadow-lg bg-card mb-8">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Informacje kontaktowe
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wellness-sage-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <a
                          href="mailto:hello@nutribalance.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@nutribalance.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wellness-peach rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="text-foreground" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefon</h3>
                        <a
                          href="tel:+1234567890"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wellness-sage-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Lokalizacja</h3>
                        <p className="text-muted-foreground">
                          123 Wellness Street
                          <br />
                          Health City, HC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wellness-peach rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Calendar className="text-foreground" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Godziny przyjęć</h3>
                        <p className="text-muted-foreground">
                          Poniedziałek - Piątek: 9:00 - 18:00
                          <br />
                          Sobota: 10:00 - 14:00
                          <br />
                          Niedziela: Zamknięte
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={contactImage}
                alt="Certyfikowany dietetyk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Contact;
