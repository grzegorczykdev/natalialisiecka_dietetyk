import { useState } from "react";
import {
  Calculator,
  Scale,
  Ruler,
  User,
  Calendar,
  Activity,
  Zap,
  TrendingUp,
  TrendingDown,
  Info,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Calculators = () => {
  const [bmiData, setBmiData] = useState({
    weight: "",
    height: "",
  });
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");
  const [bmiErrors, setBmiErrors] = useState<{
    weight?: string;
    height?: string;
  }>({});

  // TDEE/BMR Calculator State
  const [tdeeData, setTdeeData] = useState({
    gender: "male",
    weight: "",
    height: "",
    age: "",
    activityLevel: "",
  });
  const [tdeeResults, setTdeeResults] = useState<{
    bmr: number | null;
    tdee: number | null;
  }>({ bmr: null, tdee: null });
  const [tdeeErrors, setTdeeErrors] = useState<{
    weight?: string;
    height?: string;
    age?: string;
    activityLevel?: string;
  }>({});

  const validateBMI = (): boolean => {
    const errors: { weight?: string; height?: string } = {};

    if (!bmiData.weight || bmiData.weight.trim() === "") {
      errors.weight = "Proszę podać wagę";
    } else {
      const weight = parseFloat(bmiData.weight);
      if (isNaN(weight) || weight <= 0) {
        errors.weight = "Waga musi być liczbą większą od zera";
      } else if (weight > 500) {
        errors.weight = "Waga wydaje się nieprawidłowa";
      }
    }

    if (!bmiData.height || bmiData.height.trim() === "") {
      errors.height = "Proszę podać wzrost";
    } else {
      const height = parseFloat(bmiData.height);
      if (isNaN(height) || height <= 0) {
        errors.height = "Wzrost musi być liczbą większą od zera";
      } else if (height > 300) {
        errors.height = "Wzrost wydaje się nieprawidłowy";
      }
    }

    setBmiErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateBMI()) {
      return;
    }

    const weight = parseFloat(bmiData.weight);
    const height = parseFloat(bmiData.height) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      setBmiResult(parseFloat(bmi.toFixed(1)));

      // Determine BMI category
      if (bmi < 18.5) {
        setBmiCategory("Niedowaga");
      } else if (bmi < 25) {
        setBmiCategory("Prawidłowa masa ciała");
      } else if (bmi < 30) {
        setBmiCategory("Nadwaga");
      } else {
        setBmiCategory("Otyłość");
      }
    }
  };

  const handleBmiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBmiData({
      ...bmiData,
      [e.target.name]: value,
    });

    // Clear error for this field when user starts typing
    if (bmiErrors[e.target.name as keyof typeof bmiErrors]) {
      setBmiErrors({
        ...bmiErrors,
        [e.target.name]: undefined,
      });
    }

    // Reset result when input changes
    if (bmiResult !== null) {
      setBmiResult(null);
      setBmiCategory("");
    }
  };

  const getBmiColor = () => {
    if (!bmiResult) return "";
    if (bmiResult < 18.5) return "text-blue-600";
    if (bmiResult < 25) return "text-green-600";
    if (bmiResult < 30) return "text-yellow-600";
    return "text-red-600";
  };

  // Activity multipliers
  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    "lightly-active": 1.375,
    "moderately-active": 1.55,
    "very-active": 1.725,
    "extra-active": 1.9,
  };

  const activityLabels: Record<string, string> = {
    sedentary: "Siedzący tryb życia",
    "lightly-active": "Lekka aktywność",
    "moderately-active": "Umiarkowana aktywność",
    "very-active": "Bardzo aktywny",
    "extra-active": "Ekstremalnie aktywny",
  };

  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = (
    weight: number,
    height: number,
    age: number,
    gender: string
  ): number => {
    // Mifflin-St Jeor Equation:
    // Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
    // Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
    const baseBMR = 10 * weight + 6.25 * height - 5 * age;
    return gender === "male" ? baseBMR + 5 : baseBMR - 161;
  };

  const validateTDEE = (): boolean => {
    const errors: {
      weight?: string;
      height?: string;
      age?: string;
      activityLevel?: string;
    } = {};

    if (!tdeeData.weight || tdeeData.weight.trim() === "") {
      errors.weight = "Proszę podać wagę";
    } else {
      const weight = parseFloat(tdeeData.weight);
      if (isNaN(weight) || weight <= 0) {
        errors.weight = "Waga musi być liczbą większą od zera";
      } else if (weight > 500) {
        errors.weight = "Waga wydaje się nieprawidłowa";
      }
    }

    if (!tdeeData.height || tdeeData.height.trim() === "") {
      errors.height = "Proszę podać wzrost";
    } else {
      const height = parseFloat(tdeeData.height);
      if (isNaN(height) || height <= 0) {
        errors.height = "Wzrost musi być liczbą większą od zera";
      } else if (height > 300) {
        errors.height = "Wzrost wydaje się nieprawidłowy";
      }
    }

    if (!tdeeData.age || tdeeData.age.trim() === "") {
      errors.age = "Proszę podać wiek";
    } else {
      const age = parseFloat(tdeeData.age);
      if (isNaN(age) || age <= 0) {
        errors.age = "Wiek musi być liczbą większą od zera";
      } else if (age < 1 || age > 120) {
        errors.age = "Wiek musi być między 1 a 120 lat";
      }
    }

    if (!tdeeData.activityLevel) {
      errors.activityLevel = "Proszę wybrać poziom aktywności";
    }

    setTdeeErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateTDEE = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateTDEE()) {
      return;
    }

    const weight = parseFloat(tdeeData.weight);
    const height = parseFloat(tdeeData.height);
    const age = parseFloat(tdeeData.age);
    const activityLevel = tdeeData.activityLevel;

    if (weight > 0 && height > 0 && age > 0 && activityLevel) {
      const bmr = calculateBMR(weight, height, age, tdeeData.gender);
      const multiplier = activityMultipliers[activityLevel];
      const tdee = bmr * multiplier;

      setTdeeResults({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
      });
    }
  };

  const handleTdeeChange = (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string }
  ) => {
    const name = "name" in e ? e.name : e.target.name;
    const value = "value" in e ? e.value : e.target.value;

    setTdeeData({
      ...tdeeData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (tdeeErrors[name as keyof typeof tdeeErrors]) {
      setTdeeErrors({
        ...tdeeErrors,
        [name]: undefined,
      });
    }

    // Reset results when input changes
    if (tdeeResults.bmr !== null || tdeeResults.tdee !== null) {
      setTdeeResults({ bmr: null, tdee: null });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Kalkulatory
            </h1>
            <p className="text-xl text-muted-foreground">
              Narzędzia do obliczania wskaźników zdrowotnych
            </p>
          </div>

          {/* Calculators Grid - Side by Side */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-16 items-start">
            {/* BMI Calculator */}
            <Card className="border-none shadow-lg hover-lift bg-card/95 backdrop-blur-sm transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Calculator className="text-primary" size={24} />
                  </div>
                  Kalkulator BMI
                </CardTitle>
                <CardDescription>
                  Oblicz swój wskaźnik masy ciała
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={calculateBMI} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="weight"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Scale className="text-muted-foreground" size={16} />
                      Waga (kg)
                    </Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="np. 70"
                      value={bmiData.weight}
                      onChange={handleBmiChange}
                      className={`h-11 ${
                        bmiErrors.weight
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }`}
                    />
                    {bmiErrors.weight && (
                      <div className="flex items-center gap-1.5 text-xs text-destructive mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{bmiErrors.weight}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="height"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Ruler className="text-muted-foreground" size={16} />
                      Wzrost (cm)
                    </Label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="np. 175"
                      value={bmiData.height}
                      onChange={handleBmiChange}
                      className={`h-11 ${
                        bmiErrors.height
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }`}
                    />
                    {bmiErrors.height && (
                      <div className="flex items-center gap-1.5 text-xs text-destructive mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{bmiErrors.height}</span>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Oblicz BMI
                  </Button>
                </form>

                {bmiResult !== null && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-wellness-sage-light/80 via-wellness-cream/80 to-wellness-peach/80 backdrop-blur-sm rounded-2xl text-center border border-primary/10">
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                        Twój wskaźnik BMI
                      </p>
                      <p className={`text-5xl font-bold ${getBmiColor()}`}>
                        {bmiResult}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-base font-semibold text-foreground">
                        {bmiCategory}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">
                          Zakresy BMI:
                        </strong>
                        <br />
                        Niedowaga: &lt; 18.5 • Prawidłowa: 18.5-24.9
                        <br />
                        Nadwaga: 25-29.9 • Otyłość: ≥ 30
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* TDEE/BMR Calculator */}
            <Card className="border-none shadow-lg hover-lift bg-card/95 backdrop-blur-sm transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Zap className="text-primary" size={24} />
                      </div>
                      Kalkulator zapotrzebowania energetycznego (CPM/TDEE/TMR)
                    </CardTitle>
                    <CardDescription>
                      Oblicz zapotrzebowanie energetyczne
                    </CardDescription>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label="Jak to działa?"
                      >
                        <Info className="h-5 w-5 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4" align="end">
                      <div className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Równanie Mifflin-St Jeor
                          </h4>
                          <p className="text-muted-foreground mb-2 text-xs">
                            Najdokładniejsze równanie do obliczania BMR:
                          </p>
                          <div className="bg-muted rounded p-2 text-xs font-mono">
                            <p className="mb-1">
                              <strong>M:</strong> BMR = 10×waga + 6.25×wzrost -
                              5×wiek + 5
                            </p>
                            <p>
                              <strong>K:</strong> BMR = 10×waga + 6.25×wzrost -
                              5×wiek - 161
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <Activity className="h-4 w-4 text-primary" />
                            Poziomy aktywności
                          </h4>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span>Siedzący</span>
                              <span className="text-muted-foreground">
                                ×1.2
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Lekka</span>
                              <span className="text-muted-foreground">
                                ×1.375
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Umiarkowana</span>
                              <span className="text-muted-foreground">
                                ×1.55
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Bardzo aktywny</span>
                              <span className="text-muted-foreground">
                                ×1.725
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Ekstremalnie</span>
                              <span className="text-muted-foreground">
                                ×1.9
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            <strong>TDEE = BMR × Współczynnik</strong>
                          </p>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            <strong>Uwaga:</strong> Obliczenia są szacunkowe.
                            Dla dokładniejszej oceny zalecamy konsultację z
                            dietetykiem.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={calculateTDEE} className="space-y-5">
                  {/* Gender Selection */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <User className="text-muted-foreground" size={16} />
                      Płeć
                    </Label>
                    <ToggleGroup
                      type="single"
                      value={tdeeData.gender}
                      onValueChange={(value) => {
                        if (value) handleTdeeChange({ name: "gender", value });
                      }}
                      className="justify-start gap-2"
                    >
                      <ToggleGroupItem
                        value="male"
                        aria-label="Mężczyzna"
                        className="px-5"
                      >
                        Mężczyzna
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="female"
                        aria-label="Kobieta"
                        className="px-5"
                      >
                        Kobieta
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  {/* Weight, Height, Age Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <Label
                        htmlFor="tdee-weight"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <Scale className="text-muted-foreground" size={14} />
                        Waga
                      </Label>
                      <Input
                        id="tdee-weight"
                        name="weight"
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="70"
                        value={tdeeData.weight}
                        onChange={handleTdeeChange}
                        className={`h-11 text-sm ${
                          tdeeErrors.weight
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">kg</span>
                      {tdeeErrors.weight && (
                        <div className="flex items-center gap-1.5 text-xs text-destructive mt-0.5">
                          <AlertCircle className="h-3 w-3" />
                          <span>{tdeeErrors.weight}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="tdee-height"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <Ruler className="text-muted-foreground" size={14} />
                        Wzrost
                      </Label>
                      <Input
                        id="tdee-height"
                        name="height"
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="175"
                        value={tdeeData.height}
                        onChange={handleTdeeChange}
                        className={`h-11 text-sm ${
                          tdeeErrors.height
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">cm</span>
                      {tdeeErrors.height && (
                        <div className="flex items-center gap-1.5 text-xs text-destructive mt-0.5">
                          <AlertCircle className="h-3 w-3" />
                          <span>{tdeeErrors.height}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="tdee-age"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <Calendar className="text-muted-foreground" size={14} />
                        Wiek
                      </Label>
                      <Input
                        id="tdee-age"
                        name="age"
                        type="number"
                        step="1"
                        min="1"
                        max="120"
                        placeholder="30"
                        value={tdeeData.age}
                        onChange={handleTdeeChange}
                        className={`h-11 text-sm ${
                          tdeeErrors.age
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">lat</span>
                      {tdeeErrors.age && (
                        <div className="flex items-center gap-1.5 text-xs text-destructive mt-0.5">
                          <AlertCircle className="h-3 w-3" />
                          <span>{tdeeErrors.age}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Activity Level */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="activity-level"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Activity className="text-muted-foreground" size={16} />
                      Poziom aktywności (PAL)
                    </Label>
                    <Select
                      value={tdeeData.activityLevel}
                      onValueChange={(value) =>
                        handleTdeeChange({ name: "activityLevel", value })
                      }
                    >
                      <SelectTrigger
                        id="activity-level"
                        className={`h-11 ${
                          tdeeErrors.activityLevel
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }`}
                      >
                        <SelectValue placeholder="Wybierz poziom" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">
                          Siedzący tryb życia
                        </SelectItem>
                        <SelectItem value="lightly-active">
                          Lekka aktywność (1-3 dni/tydzień)
                        </SelectItem>
                        <SelectItem value="moderately-active">
                          Umiarkowana (3-5 dni/tydzień)
                        </SelectItem>
                        <SelectItem value="very-active">
                          Bardzo aktywny (6-7 dni/tydzień)
                        </SelectItem>
                        <SelectItem value="extra-active">
                          Ekstremalnie aktywny
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {tdeeErrors.activityLevel && (
                      <div className="flex items-center gap-1.5 text-xs text-destructive mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{tdeeErrors.activityLevel}</span>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Oblicz TDEE/BMR
                  </Button>
                </form>

                {/* Results Display */}
                {tdeeResults.bmr !== null && tdeeResults.tdee !== null && (
                  <div className="mt-6 space-y-4">
                    {/* BMR and TDEE Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50">
                        <div className="text-center">
                          <p className="text-xs text-slate-600 mb-1 font-medium uppercase tracking-wide">
                            BMR
                          </p>
                          <p className="text-3xl font-bold text-slate-900 mb-1">
                            {tdeeResults.bmr}
                          </p>
                          <p className="text-xs text-slate-500">kcal/dzień</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/50">
                        <div className="text-center">
                          <p className="text-xs text-indigo-600 mb-1 font-medium uppercase tracking-wide">
                            TDEE
                          </p>
                          <p className="text-3xl font-bold text-indigo-900 mb-1">
                            {tdeeResults.tdee}
                          </p>
                          <p className="text-xs text-indigo-500">kcal/dzień</p>
                        </div>
                      </div>
                    </div>

                    {/* Cutting and Bulking Recommendations */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/50">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown
                            className="text-emerald-600"
                            size={16}
                          />
                          <h3 className="font-bold text-emerald-900 text-sm">
                            Redukcja
                          </h3>
                        </div>
                        <p className="text-2xl font-bold text-emerald-900 mb-1">
                          {Math.round(tdeeResults.tdee * 0.85)}
                        </p>
                        <p className="text-xs text-emerald-600">-15% kcal</p>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="text-blue-600" size={16} />
                          <h3 className="font-bold text-blue-900 text-sm">
                            Przyrost
                          </h3>
                        </div>
                        <p className="text-2xl font-bold text-blue-900 mb-1">
                          {Math.round(tdeeResults.tdee * 1.15)}
                        </p>
                        <p className="text-xs text-blue-600">+15% kcal</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Calculators;
