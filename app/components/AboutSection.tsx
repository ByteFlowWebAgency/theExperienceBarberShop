import { Card, CardContent } from "./card";
import Image from "next/image";
import barberImage from "../../public/assets/images/theExperienceBarberShopAndSalon1.jpg";

export default function AboutSection() {
  return (
    <section className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 ">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          ABOUT THE EXPERIENCE BARBER
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
          AND BEAUTY SHOP
        </h2>
        <div className="h-1 w-24 sm:w-32 bg-blue-600 mx-auto" />
      </div>

      {/* Content */}
      <Card className="border-none shadow-none">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-0">
          {/* Image Container */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 w-full h-full border-2 sm:border-4 border-blue-600" />
            <Image
              src={barberImage}
              alt="The Experience Barber"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold">
              The Barber behind it all...
            </h3>

            <p className="text-base sm:text-lg text-muted-foreground">
              The Experience Barber & Beauty Shop provides a relaxing
              atmosphere, professional service, competitive prices and quality.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xl sm:text-2xl font-bold">Hours:</h4>
              <div className="space-y-2">
                <p className="text-base sm:text-lg">
                  Monday to Saturday:{" "}
                  <span className="font-semibold">10AM-6PM</span>
                </p>
                <p className="text-base sm:text-lg">
                  Sunday: <span className="font-semibold">CLOSED</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
