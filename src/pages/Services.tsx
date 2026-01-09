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
            title: "Konsultacja wstępna",
            duration: "60 minut",
            price: "600 zł",
            description: "Kompleksowa ocena Twojej historii zdrowotnej, nawyków żywieniowych i celów.",
            features: [
                "Kompleksowa ocena żywieniowa",
                "Ustalenie celów i plan działania",
                "Spersonalizowane wskazówki dotyczące planowania posiłków",
                "Materiały edukacyjne i zasoby",
            ],
            icon: Calendar,
        },
        {
            title: "Sesja kontrolna",
            duration: "30 minut",
            price: "300 zł",
            description: "Regularne kontrole w celu monitorowania postępów i dostosowania planu w razie potrzeby.",
            features: [
                "Przegląd postępów i świętowanie",
                "Dostosowania i ulepszenia planu",
                "Pytania i odpowiedzi oraz rozwiązywanie problemów",
                "Ciągłe wsparcie i motywacja",
            ],
            icon: MessageCircle,
        },
        {
            title: "Spersonalizowany plan posiłków",
            duration: "Dostarczany w ciągu 5 dni",
            price: "800 zł",
            description: "Indywidualny plan posiłków zaprojektowany dla Twoich konkretnych potrzeb i preferencji.",
            features: [
                "Szczegółowy plan posiłków na 1 tydzień",
                "Sugestie przepisów i listy zakupów",
                "Rozkład wartości odżywczych",
                "Opcje zamienników dla elastyczności",
            ],
            icon: FileText,
        },
    ];

    const programs = [
        {
            title: "Program zarządzania wagą",
            duration: "3 miesiące",
            price: "2400 zł",
            description: "Kompleksowy program dla zrównoważonej utraty lub przyrostu wagi.",
            features: [
                "Konsultacja wstępna 60-min",
                "6 sesji kontrolnych",
                "Cotygodniowe kontrole przez e-mail",
                "Indywidualne plany posiłków",
                "Narzędzia do śledzenia postępów",
            ],
        },
        {
            title: "Pakiet żywienia sportowego",
            duration: "2 miesiące",
            price: "2000 zł",
            description: "Optymalizuj wydolność i regenerację poprzez ukierunkowane żywienie.",
            features: [
                "Ocena wydolności",
                "5 sesji kontrolnych",
                "Plany posiłków dostosowane do treningu",
                "Wskazówki dotyczące suplementacji",
                "Przygotowanie do zawodów/konkurencji",
            ],
        },
        {
            title: "Reset zdrowia",
            duration: "6 tygodni",
            price: "1600 zł",
            description: "Zresetuj swoją relację z jedzeniem i wprowadź zdrowe nawyki.",
            features: [
                "Ocena wstępna",
                "4 sesje kontrolne",
                "Strategie budowania nawyków",
                "Wskazówki dotyczące uważnego jedzenia",
                "Kolekcja przepisów",
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
              Usługi żywieniowe
                        </h1>
                        <p className="text-xl text-muted-foreground">
              Spersonalizowane poradnictwo żywieniowe dostosowane do Twoich unikalnych potrzeb i celów
                        </p>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Sesje indywidualne
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
                            alt="Przygotowanie zdrowego posiłku"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-wellness-dark/70 to-transparent flex items-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-lg text-white">
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                    Nie jesteś pewien, która usługa jest dla Ciebie odpowiednia?
                                    </h3>
                                    <p className="text-lg mb-6 opacity-90">
                    Umów się na darmową 15-minutową rozmowę, aby omówić swoje cele i znaleźć najlepsze dopasowanie.
                                    </p>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="secondary"
                                        className="rounded-full"
                                    >
                                        <Link to="/contact">Umów darmową rozmowę</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Kompleksowe programy
                        </h2>
                        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pakiety wielosesyjne zaprojektowane, aby zapewnić ciągłe wsparcie i odpowiedzialność dla trwałych rezultatów
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
                        Zacznij <ArrowRight className="ml-2" size={16} />
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
                            alt="Zdrowy styl życia"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-wellness-dark/50 flex items-center justify-center">
                            <div className="text-center text-white px-4">
                                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Gotowy na rozpoczęcie swojej podróży?
                                </h3>
                                <p className="text-lg mb-6 opacity-90 max-w-2xl">
                  Pracujmy razem, aby stworzyć spersonalizowany plan żywieniowy, który pasuje do Twojego życia
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="rounded-full px-8"
                                >
                                    <Link to="/contact">
                    Skontaktuj się ze mną <ArrowRight className="ml-2" size={20} />
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
