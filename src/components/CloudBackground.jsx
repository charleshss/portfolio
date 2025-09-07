import { useEffect, useState } from "react";

// cloud -> id, size, x, y, opacity, animationDuration, shape, fadeDelay

export const CloudBackground = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        generateClouds();

        const handleResize = () => {
            generateClouds();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateClouds = () => {
        const numberOfClouds = Math.floor(
            (window.innerWidth * window.innerHeight) / 50000
        );

        const newClouds = [];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 80 + 40,
                x: Math.random() * 100,
                y: Math.random() * 100,
                baseOpacity: Math.random() * 0.06 + 0.02,
                animationDuration: Math.random() * 30 + 20,
                fadeDelay: Math.random() * 15,
                shape: Math.floor(Math.random() * 3),
            });
        }

        setClouds(newClouds);
    };

    // Function to generate cloud shape based on shape type
    const getCloudPath = (shape, size) => {
        const baseSize = size;
        switch (shape) {
            case 0: // Fluffy cloud
                return (
                    <g>
                        <circle cx="0" cy="0" r={baseSize * 0.3} />
                        <circle cx={baseSize * 0.3} cy={baseSize * -0.1} r={baseSize * 0.25} />
                        <circle cx={baseSize * -0.3} cy={baseSize * -0.1} r={baseSize * 0.25} />
                        <circle cx={baseSize * 0.15} cy={baseSize * -0.3} r={baseSize * 0.2} />
                        <circle cx={baseSize * -0.15} cy={baseSize * -0.3} r={baseSize * 0.2} />
                    </g>
                );
            case 1: // Wispy cloud
                return (
                    <g>
                        <ellipse cx="0" cy="0" rx={baseSize * 0.4} ry={baseSize * 0.15} />
                        <ellipse cx={baseSize * 0.2} cy={baseSize * -0.1} rx={baseSize * 0.3} ry={baseSize * 0.1} />
                        <ellipse cx={baseSize * -0.2} cy={baseSize * 0.1} rx={baseSize * 0.25} ry={baseSize * 0.08} />
                    </g>
                );
            case 2: // Cumulus cloud
                return (
                    <g>
                        <circle cx="0" cy="0" r={baseSize * 0.25} />
                        <circle cx={baseSize * 0.35} cy={baseSize * 0.05} r={baseSize * 0.3} />
                        <circle cx={baseSize * -0.25} cy={baseSize * 0.1} r={baseSize * 0.2} />
                        <circle cx={baseSize * 0.1} cy={baseSize * -0.25} r={baseSize * 0.18} />
                    </g>
                );
            default:
                return <circle cx="0" cy="0" r={baseSize * 0.3} />;
        }
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {clouds.map((cloud) => (
                    <g
                        key={cloud.id}
                        className="cloud-group animate-cloud-drift"
                        style={{
                            transformOrigin: `${cloud.x}% ${cloud.y}%`,
                            animationDuration: cloud.animationDuration + "s",
                            animationDelay: `${Math.random() * 10}s`
                        }}
                    >
                        <g
                            transform={`translate(${(cloud.x / 100) * window.innerWidth}, ${(cloud.y / 100) * window.innerHeight})`}
                            fill="currentColor"
                            className="text-foreground animate-cloud-fade"
                            style={{
                                opacity: cloud.baseOpacity,
                                animationDuration: "8s",
                                animationDelay: `${cloud.fadeDelay}s`
                            }}
                        >
                            {getCloudPath(cloud.shape, cloud.size)}
                        </g>
                    </g>
                ))}
            </svg>
        </div>
    );
};