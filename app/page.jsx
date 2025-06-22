import Pricing from "@/components/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
                Healthcare made simple</Badge>
              <h1 className="text-3xl md:text-5xl lg:w-6xl font-bold text-white leading-tight">
                connect with doctors <br /> <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, have video consultations, and manage your healthcare
                easily on one secure platform.

              </p>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href={"/onboarding"}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-emerald-700/30 hover:bg-muted/80 hover:text-emerald-600">
                  <Link href={"/doctors"}> Find Doctors </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] roundex-xl overflow-hidden">
              <Image src="/banner2.png" alt="Doctor" fill priority className="object-cover md:pt-14 rounded-xl" />
            </div>

          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes it easy to get healthcare with just a few clicks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="border-emerlard-900/20 hover:border-emerlard-800/40 transition-all duration-300">
                  <CardHeader>
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>

                </Card>
              )
            })}
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 mb-2 text-emerald-400 text-sm font-medium">
              Affordable Healthcare</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect Consultation package that fits your healthcare needs</p>
          </div>

          <div className="">
            {/* Pricing Table  */}
            <Pricing />

            <Card className="mt-12 bg-muted/20 border-emerlard-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefit }} ></p>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 mb-2 text-emerald-400 text-sm font-medium">
              Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Says</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <Card key={index} className="border-emerlard-900/20 hover:border-emerlard-800/40 transition-all duration-300">
                  <CardContent className="pt-2">
                    <div className="flex items-center mb-4 ">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                        <span className="text-emerald-400 font-bold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>


      {/* Banner Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <Card className=" bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to take control your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 ">
                  Join thousands of users who have made their healthcare
                  easier and better with our platform. Get started
                  today and see how simple healthcare can be.

                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  );
}
