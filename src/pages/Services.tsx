import { Link } from "react-router-dom";
import { Check, ArrowRight, Calendar, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import mealPrep from "@/assets/meal-prep.jpg";
import wellnessLifestyle from "@/assets/wellness-lifestyle.jpg";

const Services = () => {
    const services = [
        {
            title: "Initial Consultation",
            duration: "60 minutes",
            price: "$150",
            description: "Comprehensive assessment of your health history, dietary habits, and goals.",
            features: [
                "Complete nutrition assessment",
                "Goal setting and action plan",
                "Personalized meal planning guidance",
                "Educational materials and resources",
            ],
            icon: Calendar,
        },
        {
            title: "Follow-Up Session",
            duration: "30 minutes",
            price: "$75",
            description: "Regular check-ins to monitor progress and adjust your plan as needed.",
            features: [
                "Progress review and celebration",
                "Plan adjustments and refinements",
                "Q&A and problem-solving",
                "Ongoing support and motivation",
            ],
            icon: MessageCircle,
        },
        {
            title: "Personalized Meal Plan",
            duration: "Delivered within 5 days",
            price: "$200",
            description: "Custom meal plan designed for your specific needs and preferences.",
            features: [
                "1-week detailed meal plan",
                "Recipe suggestions and shopping lists",
                "Nutritional breakdowns",
                "Substitution options for flexibility",
            ],
            icon: FileText,
        },
    ];

    const programs = [
        {
            title: "Weight Management Program",
            duration: "3 months",
            price: "$600",
            description: "Comprehensive program for sustainable weight loss or gain.",
            features: [
                "Initial 60-min consultation",
                "6 follow-up sessions",
                "Weekly check-ins via email",
                "Custom meal plans",
                "Progress tracking tools",
            ],
        },
        {
            title: "Sports Nutrition Package",
            duration: "2 months",
            price: "$500",
            description: "Optimize performance and recovery through targeted nutrition.",
            features: [
                "Performance assessment",
                "5 follow-up sessions",
                "Training-specific meal plans",
                "Supplementation guidance",
                "Race/competition preparation",
            ],
        },
        {
            title: "Wellness Reset",
            duration: "6 weeks",
            price: "$400",
            description: "Reset your relationship with food and establish healthy habits.",
            features: [
                "Initial assessment",
                "4 follow-up sessions",
                "Habit-building strategies",
                "Mindful eating guidance",
                "Recipe collection",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 lg:pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nutrition Services
                        </h1>
                        <p className="text-xl text-muted-foreground">
              Personalized nutrition counseling tailored to your unique needs and goals
                        </p>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Individual Sessions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="border-2 border-border hover:border-primary transition-colors hover-lift"
                                >
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-wellness-sage-light rounded-full flex items-center justify-center mb-4">
                                            <service.icon className="text-primary" size={24} />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-primary">
                                                {service.price}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {service.duration}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-6">{service.description}</p>
                                        <ul className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check
                                                        className="text-primary mr-2 mt-0.5 flex-shrink-0"
                                                        size={20}
                                                    />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <Button
                                            asChild
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                                        >
                                            <Link to="/contact">
                        Book Now <ArrowRight className="ml-2" size={16} />
                                            </Link>
                                        </Button> */}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-24">
                        <img
                            src={mealPrep}
                            alt="Healthy meal preparation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-wellness-dark/70 to-transparent flex items-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-lg text-white">
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                    Not sure which service is right for you?
                                    </h3>
                                    <p className="text-lg mb-6 opacity-90">
                    Book a free 15-minute discovery call to discuss your goals and find the best fit.
                                    </p>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="secondary"
                                        className="rounded-full"
                                    >
                                        <Link to="/contact">Schedule Free Call</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Comprehensive Programs
                        </h2>
                        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Multi-session packages designed to provide ongoing support and accountability for lasting results
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {programs.map((program, index) => (
                                <Card
                                    key={index}
                                    className="border-2 border-border hover:border-primary transition-colors hover-lift"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-primary">
                                                {program.price}
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {program.duration}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-6">{program.description}</p>
                                        <ul className="space-y-3 mb-6">
                                            {program.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check
                                                        className="text-primary mr-2 mt-0.5 flex-shrink-0"
                                                        size={20}
                                                    />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="w-full border-2 rounded-full"
                                        >
                                            <Link to="/contact">
                        Get Started <ArrowRight className="ml-2" size={16} />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={wellnessLifestyle}
                            alt="Wellness lifestyle"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-wellness-dark/50 flex items-center justify-center">
                            <div className="text-center text-white px-4">
                                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                                </h3>
                                <p className="text-lg mb-6 opacity-90 max-w-2xl">
                  Let's work together to create a personalized nutrition plan that fits your life
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="rounded-full px-8"
                                >
                                    <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2" size={20} />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <ScrollToTop />
        </div>
    );
};

export default Services;
