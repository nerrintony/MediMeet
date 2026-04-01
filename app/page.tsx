import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { creditBenefits, features, testimonials } from '@/lib/data';
import { ArrowRight, Check, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium p-5 rounded"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-md md:text-xl max-w-md">
                Our telemedicine platform offers seamless access to healthcare professionals, allowing you to consult
                with doctors from the comfort of your home. With secure video calls and instant messaging, you can
                receive medical advice, prescriptions, and follow-up care without the need for in-person visits.
                Experience the future of healthcare with our user-friendly and reliable telemedicine services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size={'lg'} className="rounded bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href={'/onboarding'}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size={'lg'}
                  variant={'outline'}
                  className="bg-emerald-700/30 text-white hover:bg-muted/80"
                >
                  <Link href={'/doctors'}>Find Doctors</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-150 rounded-xl overflow-hidden">
              <Image
                src={'/banner2.png'}
                alt="Doctor consultation"
                fill
                priority
                className="object-cover md:pt-14 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes it easy to connect with healthcare professionals from the comfort of your home.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Render the features from lib/data.tsx */}
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex items-start gap-4 mb-8 border p-5 rounded-lg">
                  <div className="shrink-0 border-emerald-900">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium p-3 rounded"
            >
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our flexible consultation packages designed to fit your healthcare needs and budget. Whether
              you need a one-time consultation or ongoing care, we have options that provide value and convenience.
            </p>
          </div>

          <div>
            {/* Pricing Table */}
            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {creditBenefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mr-3 bg-emerald-900/20 p-1 rounded-full">
                        <Check className="h-4 w-4 mt-1 text-emerald-400" />
                      </div>
                      <p className="text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: benefit }} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-2">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 text-emerald-400 rounded-sm p-3">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our satisfied patients and doctors who have experienced the benefits of our telemedicine
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Render the features from lib/data.tsx */}
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="rounded-2xl border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
                >
                  <CardContent className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                        <span className="text-emerald-400 font-bold">{testimonial.initials}</span>
                      </div>
                      <div className="font-semibold text-white">
                        <h4 className="text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg">&quot;{testimonial.quote}&quot;</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-linear-to-r from-emerald-900/20 to-teal-950/20 border-emerald-800/20 rounded-xl">
            <CardContent className="p-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-whitemb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Join thousands of satisfied users who have transformed their healthcare experience with our platform.
                </p>

                <div className="flex flex-col sm:flex-row">
                  <Button asChild size={'lg'} className="rounded bg-emerald-600 text-white hover:bg-emerald-700 mt-4">
                    <Link href={'/sign-up'}>Get Started</Link>
                  </Button>
                  <Button
                    asChild
                    size={'lg'}
                    variant={'outline'}
                    className="bg-emerald-700/30 text-white hover:bg-muted/80 mt-4 sm:ml-4"
                  >
                    <Link href={'/pricing'}>View Pricing</Link>
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
