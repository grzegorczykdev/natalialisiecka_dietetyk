import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Heart, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/hero-image.jpg";
import healthyFood from "@/assets/healthy-food.jpg";
import mealPrep from "@/assets/meal-prep.jpg";
import consultation from "@/assets/consultation.jpg";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-16 lg:pt-20">
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach opacity-30" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="fade-in">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                  Transform Your Health Through{" "}
                                    <span className="text-primary">Personalized Nutrition</span>
                                </h1>
                                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
                  Science-based nutrition guidance tailored to your unique needs, goals, and lifestyle. Start your journey to optimal wellness today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                                    >
                                        <Link to="/contact">
                      Umów konsultację <ArrowRight className="ml-2" size={20} />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-8 border-2"
                                    >
                                        <Link to="/services">View Services</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative lg:h-[600px] h-[400px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                                <img
                                    src={heroImage}
                                    alt="Professional dietitian in wellness office"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 lg:py-24 bg-wellness-beige">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose NutriBalance?
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based nutrition counseling with a personalized approach to help you achieve lasting results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Heart className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Personalized Plans</h3>
                                    <p className="text-muted-foreground">
                    Custom nutrition strategies designed specifically for your body, goals, and lifestyle preferences.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Users className="text-foreground" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">One-on-One Support</h3>
                                    <p className="text-muted-foreground">
                    Regular check-ins and ongoing guidance to keep you motivated and on track to your wellness goals.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Leaf className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Holistic Approach</h3>
                                    <p className="text-muted-foreground">
                    Addressing not just what you eat, but how nutrition fits into your overall health and well-being.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={healthyFood}
                                    alt="Fresh healthy vegetables and fruits"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Nutrition That Works For You
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6">
                  No one-size-fits-all diets. No restrictive eating. Just sustainable, evidence-based nutrition strategies that help you feel your best.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-muted-foreground">
                      Personalized meal plans based on your preferences and dietary needs
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-muted-foreground">
                      Flexible strategies that fit into your busy lifestyle
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-muted-foreground">
                      Education and empowerment to make confident food choices
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-muted-foreground">
                      Ongoing support and accountability throughout your journey
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Expert Guidance Every Step
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience and ongoing education in nutrition science, I provide the expertise and support you need to achieve your health goals.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                                >
                                    <Link to="/about">
                    Learn More About Me <ArrowRight className="ml-2" size={20} />
                                    </Link>
                                </Button>
                            </div>

                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
                                <img
                                    src={consultation}
                                    alt="Nutrition consultation session"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 lg:py-24 bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Health?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free 15-minute discovery call today and let's discuss how personalized nutrition can help you reach your goals.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                        >
                            <Link to="/contact">
                Skontaktuj się ze mną <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />

            <ScrollToTop />
        </div>
    );
};

export default Index;
