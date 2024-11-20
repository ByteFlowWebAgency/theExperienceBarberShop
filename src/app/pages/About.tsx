import { Card, CardContent } from "../../components/card";
import Image from "next/image";
import Image1 from "../../../public/images/theExperienceBarberShopAndSalon1.jpg";

export default function About() {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight">
          ABOUT THE EXPERIENCE BARBER
        </h2>
        <h2 className="text-4xl font-bold tracking-tight mb-2">
          AND BEAUTY SHOP
        </h2>
        <div className="h-1 w-32 bg-blue-600 mx-auto" />
      </div>

      {/* Content */}
      <Card className="border-none shadow-none">
        <CardContent className="grid md:grid-cols-2 gap-12 items-center p-0">
          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-6 -left-4 w-full h-full border-4 border-blue-600" />
            <Image
              src={Image1}
              alt="The Experience Barber"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative object-cover w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">The Barber behind it all...</h3>

            <p className="text-lg text-muted-foreground">
              The Experience Barber & Beauty Shop provides a relaxing
              atmosphere, professional service, competitive prices and quality.
            </p>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Hours:</h4>
              <div className="space-y-2">
                <p className="text-lg">
                  Monday to Saturday:{" "}
                  <span className="font-semibold">10AM-6PM</span>
                </p>
                <p className="text-lg">
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
