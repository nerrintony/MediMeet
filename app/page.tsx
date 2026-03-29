import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { features } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
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
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
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
          <div>
            {/* Render the features from lib/data.tsx */}
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0">{feature.icon}</div>
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
    </div>
  );
}
