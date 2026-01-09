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
                  Przekształć swoje zdrowie dzięki{" "}
                  <span className="text-primary">
                    spersonalizowanemu żywieniu
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
                  Oparte na nauce poradnictwo żywieniowe dostosowane do Twoich
                  unikalnych potrzeb, celów i stylu życia. Rozpocznij swoją
                  podróż do optymalnego zdrowia już dziś.
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
                    <Link to="/about">O mnie</Link>
                  </Button>
                </div>
              </div>

              <div className="relative lg:h-[600px] h-[400px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={heroImage}
                  alt="Profesjonalny dietetyk w gabinecie"
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
                Dlaczego warto wybrać NutriBalance?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Poradnictwo żywieniowe oparte na dowodach naukowych z
                indywidualnym podejściem, które pomoże Ci osiągnąć trwałe
                rezultaty.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Spersonalizowane plany
                  </h3>
                  <p className="text-muted-foreground">
                    Indywidualne strategie żywieniowe zaprojektowane specjalnie
                    dla Twojego ciała, celów i preferencji stylu życia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Wsparcie indywidualne
                  </h3>
                  <p className="text-muted-foreground">
                    Regularne kontrole i ciągłe wsparcie, aby utrzymać Cię
                    zmotywowanym i na drodze do osiągnięcia celów zdrowotnych.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Podejście holistyczne
                  </h3>
                  <p className="text-muted-foreground">
                    Zajmowanie się nie tylko tym, co jesz, ale także tym, jak
                    żywienie wpisuje się w Twoje ogólne zdrowie i dobre
                    samopoczucie.
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
                  alt="Świeże zdrowe warzywa i owoce"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Żywienie, które działa dla Ciebie
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Bez uniwersalnych diet. Bez restrykcyjnego jedzenia. Tylko
                  zrównoważone, oparte na dowodach strategie żywieniowe, które
                  pomagają Ci czuć się najlepiej.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-muted-foreground">
                      Spersonalizowane plany posiłków oparte na Twoich
                      preferencjach i potrzebach żywieniowych
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-muted-foreground">
                      Elastyczne strategie, które pasują do Twojego zabieganego
                      stylu życia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-muted-foreground">
                      Edukacja i wzmocnienie, aby podejmować pewne wybory
                      żywieniowe
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-muted-foreground">
                      Ciągłe wsparcie i odpowiedzialność przez całą Twoją podróż
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Eksperckie wsparcie na każdym kroku
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Z wieloletnim doświadczeniem i ciągłą edukacją w dziedzinie
                  nauki o żywieniu, zapewniam ekspertyzę i wsparcie, których
                  potrzebujesz, aby osiągnąć swoje cele zdrowotne.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  <Link to="/about">
                    Dowiedz się więcej o mnie{" "}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>

              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
                <img
                  src={consultation}
                  alt="Konsultacja żywieniowa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Gotowy na transformację swojego zdrowia?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Umów się na darmową 15-minutową rozmowę już dziś i porozmawiajmy,
              jak spersonalizowane żywienie może pomóc Ci osiągnąć Twoje cele.
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
