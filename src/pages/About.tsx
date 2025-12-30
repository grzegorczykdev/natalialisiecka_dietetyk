import { Award, BookOpen, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import aboutImage from "@/assets/hero-image.jpg";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 lg:pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Your Dietitian
                        </h1>
                        <p className="text-xl text-muted-foreground">
              Passionate about helping you achieve optimal health through personalized nutrition
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="Certified dietitian with credentials"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Hello, I'm Sarah Mitchell
                                </h2>
                                <p className="text-lg text-muted-foreground mb-4">
                  As a Registered Dietitian Nutritionist with over 10 years of experience, I believe that nutrition is not about restriction—it's about nourishment, balance, and finding what works for your unique body and lifestyle.
                                </p>
                                <p className="text-lg text-muted-foreground mb-4">
                  My journey in nutrition began when I discovered the profound impact that food has on our physical and mental well-being. Since then, I've dedicated my career to helping individuals transform their relationship with food and achieve lasting health improvements.
                                </p>
                                <p className="text-lg text-muted-foreground">
                  I take a holistic, evidence-based approach to nutrition counseling, combining the latest research with practical strategies that fit into real life. Whether you're managing a health condition, optimizing athletic performance, or simply wanting to feel better, I'm here to support you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Qualifications & Expertise
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="text-primary" size={32} />
                                    </div>
                                    <h3 className="font-bold mb-2">Registered Dietitian</h3>
                                    <p className="text-sm text-muted-foreground">
                    Certified RDN with Board Certification
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-4">
                                        <BookOpen className="text-foreground" size={32} />
                                    </div>
                                    <h3 className="font-bold mb-2">Master's Degree</h3>
                                    <p className="text-sm text-muted-foreground">
                    M.S. in Nutrition Science
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart className="text-primary" size={32} />
                                    </div>
                                    <h3 className="font-bold mb-2">Specialized Training</h3>
                                    <p className="text-sm text-muted-foreground">
                    Diabetes Education & Sports Nutrition
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg hover-lift bg-card">
                                <CardContent className="pt-8 pb-8 text-center">
                                    <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="text-foreground" size={32} />
                                    </div>
                                    <h3 className="font-bold mb-2">10+ Years</h3>
                                    <p className="text-sm text-muted-foreground">
                    Clinical & Private Practice Experience
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              My Approach
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-8">
                            <Card className="border-none shadow-lg bg-wellness-beige">
                                <CardContent className="pt-8 pb-8">
                                    <h3 className="text-2xl font-bold mb-4">Evidence-Based</h3>
                                    <p className="text-muted-foreground">
                    I stay current with the latest nutrition research to provide you with scientifically sound recommendations that are backed by credible evidence.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-card">
                                <CardContent className="pt-8 pb-8">
                                    <h3 className="text-2xl font-bold mb-4">Personalized</h3>
                                    <p className="text-muted-foreground">
                    No cookie-cutter plans here. Every recommendation is tailored to your unique needs, preferences, lifestyle, and health goals.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-wellness-beige">
                                <CardContent className="pt-8 pb-8">
                                    <h3 className="text-2xl font-bold mb-4">Sustainable</h3>
                                    <p className="text-muted-foreground">
                    I focus on creating lasting lifestyle changes rather than quick fixes. Together, we'll develop habits that you can maintain for life.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-card">
                                <CardContent className="pt-8 pb-8">
                                    <h3 className="text-2xl font-bold mb-4">Compassionate</h3>
                                    <p className="text-muted-foreground">
                    I provide a judgement-free space where we can work together towards your goals with understanding, empathy, and support.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach rounded-3xl p-8 lg:p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My Mission
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower individuals to make informed nutrition choices that support their health, enhance their quality of life, and help them develop a positive, balanced relationship with food. I believe everyone deserves personalized, compassionate nutrition care that respects their unique journey.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />

            <ScrollToTop />
        </div>
    );
};

export default About;
