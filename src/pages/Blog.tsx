import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import healthyFood from "@/assets/healthy-food.jpg";
import mealPrep from "@/assets/meal-prep.jpg";
import wellnessLifestyle from "@/assets/wellness-lifestyle.jpg";

const Blog = () => {
    const posts = [
        {
            title: "5 Evidence-Based Tips for Sustainable Weight Loss",
            excerpt:
        "Discover the science-backed strategies that actually work for long-term weight management without restrictive dieting or deprivation.",
            category: "Weight Management",
            readTime: "5 min read",
            date: "March 15, 2024",
            image: mealPrep,
        },
        {
            title: "The Ultimate Guide to Meal Prepping for Busy Professionals",
            excerpt:
        "Learn how to save time and eat healthier with these practical meal prep strategies that fit into your hectic schedule.",
            category: "Meal Planning",
            readTime: "8 min read",
            date: "March 10, 2024",
            image: healthyFood,
        },
        {
            title: "Understanding Macronutrients: A Beginner's Guide",
            excerpt:
        "Breaking down proteins, carbohydrates, and fats—what they do, why you need them, and how to balance them in your diet.",
            category: "Nutrition Basics",
            readTime: "6 min read",
            date: "March 5, 2024",
            image: wellnessLifestyle,
        },
        {
            title: "Fueling Your Workout: Pre and Post-Exercise Nutrition",
            excerpt:
        "Optimize your athletic performance and recovery with targeted nutrition strategies before and after your workouts.",
            category: "Sports Nutrition",
            readTime: "7 min read",
            date: "February 28, 2024",
            image: mealPrep,
        },
        {
            title: "Mindful Eating: Transform Your Relationship with Food",
            excerpt:
        "Learn how mindful eating practices can help you enjoy your meals more, reduce stress around food, and improve digestion.",
            category: "Wellness",
            readTime: "5 min read",
            date: "February 20, 2024",
            image: wellnessLifestyle,
        },
        {
            title: "Debunking Common Nutrition Myths",
            excerpt:
        "Separating fact from fiction—let's bust some of the most pervasive nutrition myths with science-based evidence.",
            category: "Nutrition Science",
            readTime: "6 min read",
            date: "February 15, 2024",
            image: healthyFood,
        },
    ];

    const categories = [
        "All Posts",
        "Weight Management",
        "Meal Planning",
        "Nutrition Basics",
        "Sports Nutrition",
        "Wellness",
        "Nutrition Science",
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 lg:pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nutrition Blog
                        </h1>
                        <p className="text-xl text-muted-foreground">
              Evidence-based insights, practical tips, and the latest in nutrition science
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category, index) => (
                                <Button
                                    key={index}
                                    variant={index === 0 ? "default" : "outline"}
                                    className={
                                        index === 0
                                            ? "rounded-full bg-primary hover:bg-primary/90"
                                            : "rounded-full border-2"
                                    }
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {posts.map((post, index) => (
                            <Card
                                key={index}
                                className="border-none shadow-lg hover-lift overflow-hidden group cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <CardHeader>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                    <Button
                                        variant="ghost"
                                        className="p-0 h-auto text-primary hover:text-primary/80"
                                    >
                    Read More <ArrowRight className="ml-2" size={16} />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-wellness-beige rounded-3xl p-8 lg:p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated with Nutrition Tips
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter for weekly nutrition insights, healthy recipes, and wellness tips delivered to your inbox
                        </p>
                        <div className="max-w-md mx-auto flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full border-2 border-border focus:outline-none focus:border-primary"
                            />
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <ScrollToTop />
        </div>
    );
};

export default Blog;
