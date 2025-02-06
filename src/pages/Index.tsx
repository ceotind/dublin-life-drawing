import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    console.log("Homepage mounted");
  }, []);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fadeIn">
            <span className="inline-block px-4 py-1 mb-4 text-sm bg-accent rounded-full">
              Now Booking Summer Classes
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-secondary">
              Discover Your Artistic Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join our intimate drawing classes in the heart of Dublin. Learn from experienced artists and develop your unique style.
            </p>
            <Link
              to="/classes"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Explore Classes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Artwork</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg aspect-square animate-fadeIn"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <img
                  src={`https://images.unsplash.com/photo-151911011773${i}-f04bdfc1e6c`}
                  alt={`Featured artwork ${i}`}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-lg">View Artwork</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideIn">
              <span className="text-primary font-medium">Our Classes</span>
              <h2 className="text-3xl font-serif mb-6">Learn in a Creative Environment</h2>
              <p className="text-gray-600 mb-8">
                Whether you're a beginner or looking to refine your skills, our classes
                provide personalized attention in a supportive atmosphere.
              </p>
              <Link
                to="/classes"
                className="text-primary hover:text-primary/80 inline-flex items-center transition-colors duration-200"
              >
                View All Classes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Art class in session"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <span className="text-primary font-medium">Get in Touch</span>
            <h2 className="text-3xl font-serif mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions about our classes or artwork? Drop us a message and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fadeIn">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full min-h-[150px]"
              />
            </div>
            <div className="text-center">
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
