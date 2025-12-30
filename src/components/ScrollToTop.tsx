import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-out ${
                showScrollTop
                    ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                    : "opacity-0 translate-y-4 pointer-events-none scale-90"
            } hover:bg-primary/90 hover:scale-110 active:scale-95 hover:-translate-y-1`}
            aria-label="Przewiń do góry"
        >
            <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
    );
};

export default ScrollToTop;

