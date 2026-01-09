import {
  Award,
  BookOpen,
  Heart,
  Target,
  FileText,
  User,
  Leaf,
  HandHeart,
} from "lucide-react";
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
              Poznaj swojego dietetyka
            </h1>
            <p className="text-xl text-muted-foreground">
              Z pasją pomagam osiągnąć optymalne zdrowie poprzez
              spersonalizowane żywienie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Certyfikowany dietetyk z kwalifikacjami"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Cześć, jestem Natalia
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Jako zarejestrowany dietetyk z ponad 10-letnim doświadczeniem
                  wierzę, że żywienie nie polega na ograniczeniach—chodzi o
                  odżywianie, równowagę i znalezienie tego, co działa dla
                  Twojego unikalnego ciała i stylu życia.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Moja podróż w dziedzinie żywienia rozpoczęła się, gdy odkryłam
                  głęboki wpływ, jaki jedzenie ma na nasze fizyczne i psychiczne
                  samopoczucie. Od tego czasu poświęciłam swoją karierę
                  pomaganiu osobom w transformacji ich relacji z jedzeniem i
                  osiąganiu trwałych popraw zdrowotnych.
                </p>
                <p className="text-lg text-muted-foreground">
                  Stosuję holistyczne, oparte na dowodach podejście do
                  poradnictwa żywieniowego, łącząc najnowsze badania z
                  praktycznymi strategiami, które pasują do prawdziwego życia.
                  Niezależnie od tego, czy zarządzasz stanem zdrowia,
                  optymalizujesz wydolność sportową, czy po prostu chcesz czuć
                  się lepiej, jestem tutaj, aby wspierać Cię na każdym kroku.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Kwalifikacje i ekspertyza
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">Zarejestrowany dietetyk</h3>
                  <p className="text-sm text-muted-foreground">
                    Certyfikowany RDN z certyfikacją zarządu
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-foreground" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">Magister</h3>
                  <p className="text-sm text-muted-foreground">
                    Mgr nauk o żywieniu
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">Szkolenia specjalistyczne</h3>
                  <p className="text-sm text-muted-foreground">
                    Edukacja diabetologiczna i żywienie sportowe
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-foreground" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">10+ lat</h3>
                  <p className="text-sm text-muted-foreground">
                    Doświadczenie kliniczne i prywatna praktyka
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Moje podejście
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Holistyczne, oparte na dowodach podejście do żywienia, które
                wspiera Twoje unikalne cele zdrowotne
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="border-none shadow-lg hover-lift bg-card transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Oparte na dowodach
                  </h3>
                  <p className="text-muted-foreground">
                    Śledzę najnowsze badania żywieniowe, aby zapewnić Ci naukowo
                    uzasadnione rekomendacje poparte wiarygodnymi dowodami.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="text-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Spersonalizowane</h3>
                  <p className="text-muted-foreground">
                    Bez uniwersalnych planów. Każda rekomendacja jest
                    dostosowana do Twoich unikalnych potrzeb, preferencji, stylu
                    życia i celów zdrowotnych.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-sage-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Zrównoważone</h3>
                  <p className="text-muted-foreground">
                    Skupiam się na tworzeniu trwałych zmian w stylu życia, a nie
                    na szybkich rozwiązaniach. Razem rozwijamy nawyki, które
                    możesz utrzymać przez całe życie.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift bg-card transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-wellness-peach rounded-full flex items-center justify-center mx-auto mb-6">
                    <HandHeart className="text-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pełne współczucia</h3>
                  <p className="text-muted-foreground">
                    Zapewniam przestrzeń wolną od osądów, w której możemy razem
                    pracować nad Twoimi celami zrozumieniem, empatią i
                    wsparciem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Moja misja</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Wzmocnienie osób do podejmowania świadomych wyborów żywieniowych,
              które wspierają ich zdrowie, poprawiają jakość życia i pomagają
              rozwijać pozytywną, zrównoważoną relację z jedzeniem. Wierzę, że
              każdy zasługuje na spersonalizowaną, pełną współczucia opiekę
              żywieniową, która szanuje jego unikalną podróż.
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
