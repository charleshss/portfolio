import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CardSwap = ({
  cards = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with modern React, TypeScript, and Tailwind CSS",
      icon: "🎨",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Creating robust APIs and microservices with Python, Django, and cloud technologies",
      icon: "⚙️",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 3,
      title: "Problem Solving",
      description: "Analytical thinking and systematic approach to breaking down complex challenges",
      icon: "🧩",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ],
  autoSwap = true,
  swapInterval = 9000,
  className = "",
  style = {},
  fullWidth = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoSwap) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        setIsTransitioning(false);
      }, 150);
    }, swapInterval);

    return () => clearInterval(interval);
  }, [autoSwap, swapInterval, cards.length]);

  const handleCardClick = (index) => {
    if (index === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const currentCard = cards[currentIndex];

  const containerClasses = cn(
    fullWidth ? "w-full mx-auto" : "w-full max-w-md mx-auto",
    "group",
    className
  );

  return (
    <div className={containerClasses} style={style}>
      {/* Main Card Container */}
      <div className="relative">
        <div className={cn(
          "relative overflow-hidden rounded-2xl p-8",
          "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm",
          "border transition-all duration-300",
          currentCard.borderColor,
          currentCard.gradient,
          "hover:shadow-xl hover:-translate-y-1"
        )}>

          {/* Card Content */}
          <div className={cn(
            "transition-all duration-300 ease-in-out",
            isTransitioning ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
          )}>

            <div className="mb-4 flex items-center gap-3 text-left">
              <div className="text-3xl">{currentCard.icon}</div>
              <h3 className="text-xl font-bold text-foreground">{currentCard.title}</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed text-left">
              {currentCard.description}
            </p>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className={cn(
              "w-full h-full rounded-full",
              currentCard.gradient,
              "animate-pulse"
            )} />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                "hover:scale-125",
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`View card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSwap;
