import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Weight Loss Client",
      initials: "EJ",
      rating: 5,
      text: "Working with Sarah has been life-changing. She helped me lose 30 pounds without feeling deprived or restricted. Her personalized meal plans fit perfectly into my busy schedule, and I've learned so much about nutrition. I finally have a healthy relationship with food!",
    },
    {
      name: "Michael Chen",
      role: "Athletic Performance",
      initials: "MC",
      rating: 5,
      text: "As a competitive runner, I needed expert guidance on fueling my training. Sarah's sports nutrition expertise helped me improve my performance and recovery. My race times have improved, and I feel stronger than ever. Highly recommend!",
    },
    {
      name: "Lisa Martinez",
      role: "Diabetes Management",
      initials: "LM",
      rating: 5,
      text: "Sarah's knowledge of diabetes management is outstanding. She helped me understand how different foods affect my blood sugar and created meal plans that are both delicious and effective. My A1C has improved significantly, and I feel more in control of my health.",
    },
    {
      name: "David Thompson",
      role: "Overall Wellness",
      initials: "DT",
      rating: 5,
      text: "I came to Sarah feeling overwhelmed by all the conflicting nutrition advice out there. She cut through the noise and gave me practical, science-based recommendations. My energy levels have skyrocketed, and I've never felt better. She truly cares about her clients' success.",
    },
    {
      name: "Jennifer Williams",
      role: "Prenatal Nutrition",
      initials: "JW",
      rating: 5,
      text: "Sarah supported me through my pregnancy with expert nutrition guidance. She addressed all my concerns and helped me maintain a healthy diet for both me and my baby. I felt confident and well-nourished throughout my pregnancy. Thank you, Sarah!",
    },
    {
      name: "Robert Anderson",
      role: "Heart Health",
      initials: "RA",
      rating: 5,
      text: "After my heart health scare, Sarah helped me completely transform my diet. Her meal plans are delicious and heart-healthy. My cholesterol levels have improved dramatically, and I've lost weight without feeling hungry. She's amazing at what she does!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results from real people who transformed their health through personalized nutrition
            </p>
          </div>

          <div className="mb-16 bg-wellness-beige rounded-3xl p-8 lg:p-12 text-center">
            <Quote className="text-primary mx-auto mb-6" size={48} />
            <blockquote className="text-2xl sm:text-3xl font-bold mb-4 text-balance max-w-3xl mx-auto">
              "Sarah's approach to nutrition is refreshing, practical, and truly effective. She doesn't just tell you what to eat—she empowers you to make lasting changes."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              — Over 500+ clients transformed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover-lift bg-card"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4 bg-wellness-sage-light">
                      <AvatarFallback className="text-primary font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-500 fill-yellow-500"
                        size={20}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg bg-wellness-sage-light text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Clients Served</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-wellness-peach text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-foreground mb-2">95%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-wellness-sage-light text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their health with personalized nutrition guidance
            </p>
          </div>
        </div>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Testimonials;
