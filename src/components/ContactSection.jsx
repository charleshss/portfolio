import {
    Linkedin,
    Mail,
    MapPin,
    Github,
} from "lucide-react";

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or require an aspiring software developer?
                    Feel free to reach out and send me a message.
                </p>

                <div className="flex flex-col items-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:charlie.suddens-spiers@live.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        charlie.suddens-spiers@live.com
                                    </a>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+11234567890"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </div> */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        London, United Kingdom
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/charles-suddens-spiers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://github.com/charleshss"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};