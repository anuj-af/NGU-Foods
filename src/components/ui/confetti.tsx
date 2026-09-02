import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";

export default function Confetti() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasFiredRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasFiredRef.current) {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                    hasFiredRef.current = true; // Ensure it fires only once
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <>
            <PartyPopper className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-normal mb-4 z-30">
                Snack Time Fun Fact
            </h2>
        </>
    );
}
