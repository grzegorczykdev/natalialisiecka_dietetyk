import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Klientka - redukcja wagi",
      initials: "AK",
      rating: 5,
      text: "Praca z Natalią zmieniła moje życie. Pomogła mi schudnąć 15 kg bez poczucia pozbawienia czy ograniczeń. Jej spersonalizowane plany posiłków idealnie pasują do mojego zabieganego harmonogramu, a ja nauczyłam się tak wiele o żywieniu. Wreszcie mam zdrową relację z jedzeniem!",
    },
    {
      name: "Michał Nowak",
      role: "Wydolność sportowa",
      initials: "MN",
      rating: 5,
      text: "Jako biegacz wyczynowy potrzebowałem eksperckiego wsparcia w zakresie żywienia treningowego. Ekspertyza Natalii w zakresie żywienia sportowego pomogła mi poprawić wydolność i regenerację. Moje czasy w zawodach się poprawiły i czuję się silniejszy niż kiedykolwiek. Gorąco polecam!",
    },
    {
      name: "Magdalena Wiśniewska",
      role: "Zarządzanie cukrzycą",
      initials: "MW",
      rating: 5,
      text: "Wiedza Natalii na temat zarządzania cukrzycą jest wybitna. Pomogła mi zrozumieć, jak różne pokarmy wpływają na poziom cukru we krwi i stworzyła plany posiłków, które są zarówno smaczne, jak i skuteczne. Mój poziom HbA1c znacznie się poprawił i czuję się bardziej kontrolować swoje zdrowie.",
    },
    {
      name: "Tomasz Zieliński",
      role: "Ogólne zdrowie",
      initials: "TZ",
      rating: 5,
      text: "Przyszedłem do Natalii przytłoczony wszystkimi sprzecznymi poradami żywieniowymi. Przecięła przez ten szum i dała mi praktyczne, oparte na nauce rekomendacje. Moje poziomy energii wzrosły, a ja nigdy nie czułem się lepiej. Naprawdę troszczy się o sukces swoich klientów.",
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Żywienie prenatalne",
      initials: "KL",
      rating: 5,
      text: "Natalia wspierała mnie przez moją ciążę eksperckim poradnictwem żywieniowym. Odpowiedziała na wszystkie moje obawy i pomogła mi utrzymać zdrową dietę zarówno dla mnie, jak i mojego dziecka. Czułam się pewnie i dobrze odżywiona przez całą ciążę. Dziękuję, Natalio!",
    },
    {
      name: "Piotr Szymański",
      role: "Zdrowie serca",
      initials: "PS",
      rating: 5,
      text: "Po moim problemie z sercem Natalia pomogła mi całkowicie przekształcić moją dietę. Jej plany posiłków są smaczne i zdrowe dla serca. Moje poziomy cholesterolu poprawiły się dramatycznie i schudłem bez poczucia głodu. Jest niesamowita w tym, co robi!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Historie sukcesu klientów
            </h1>
            <p className="text-xl text-muted-foreground">
              Prawdziwe rezultaty od prawdziwych ludzi, którzy przekształcili swoje zdrowie dzięki spersonalizowanemu żywieniu
            </p>
          </div>

          <div className="mb-16 bg-wellness-beige rounded-3xl p-8 lg:p-12 text-center">
            <Quote className="text-primary mx-auto mb-6" size={48} />
            <blockquote className="text-2xl sm:text-3xl font-bold mb-4 text-balance max-w-3xl mx-auto">
              "Podejście Natalii do żywienia jest odświeżające, praktyczne i naprawdę skuteczne. Nie mówi Ci tylko, co jeść—wzmacnia Cię, aby wprowadzić trwałe zmiany."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              — Ponad 500+ przekształconych klientów
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
                <p className="text-muted-foreground">Obsłużonych klientów</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-wellness-peach text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-foreground mb-2">95%</div>
                <p className="text-muted-foreground">Satysfakcja klientów</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-wellness-sage-light text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Lat doświadczenia</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Gotowy napisać swoją historię sukcesu?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dołącz do setek zadowolonych klientów, którzy przekształcili swoje zdrowie dzięki spersonalizowanemu poradnictwu żywieniowemu
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
