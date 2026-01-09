import { Download, FileText, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface DownloadFile {
  name: string;
  filename: string;
  description?: string;
}

const Downloads = () => {
  // Lista plików do pobrania
  const files: DownloadFile[] = [
    {
      name: "Test - Materiał 1",
      filename: "test.pdf",
      description: "Darmowy materiał edukacyjny o zdrowym odżywianiu",
    },
    {
      name: "Test - Materiał 2",
      filename: "test copy.pdf",
      description: "Przewodnik po zbilansowanej diecie",
    },
    {
      name: "Test - Materiał 3",
      filename: "test copy 2.pdf",
      description: "Poradnik dotyczący planowania posiłków",
    },
  ];

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    // Encode filename for URL (handles spaces and special characters)
    const encodedFilename = encodeURIComponent(filename);
    link.href = `/dopobrania/${encodedFilename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wellness-sage-light via-wellness-cream to-wellness-peach opacity-30" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Gift className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Do pobrania
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                Odkryj moje darmowe materiały edukacyjne
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Na tej stronie znajdziesz bezpłatne materiały, które pomogą Ci w
                drodze do zdrowszego stylu życia. Wszystkie pliki są dostępne do
                pobrania za darmo i zawierają wartościowe informacje o
                odżywianiu, planowaniu posiłków i zdrowym stylu życia.
              </p>
            </div>
          </div>
        </section>

        {/* Files Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Dostępne materiały
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wybierz materiał, który Cię interesuje i pobierz go bezpłatnie
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {files.map((file, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover-lift bg-card transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl mb-2">{file.name}</CardTitle>
                    {file.description && (
                      <CardDescription className="text-base">
                        {file.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleDownload(file.filename)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      size="lg"
                    >
                      <Download className="mr-2" size={20} />
                      Pobierz plik
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 lg:py-24 bg-wellness-beige">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-lg bg-card">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wellness-sage-light rounded-full mx-auto mb-4">
                    <Sparkles className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-4">
                    Więcej materiałów wkrótce
                  </CardTitle>
                  <CardDescription className="text-base">
                    Regularnie dodaję nowe, wartościowe materiały edukacyjne.
                    Wracaj tutaj, aby sprawdzić najnowsze zasoby do pobrania.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Downloads;
