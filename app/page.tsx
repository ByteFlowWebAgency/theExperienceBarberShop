import Home from "app/components/home";
import Head from "next/head";
import Script from "next/script";

const Page = () => {
  return (
    <>
      <Head>
        <title>The Experience Barber Shop | Best Haircuts & Grooming</title>
        <meta name="description" content="Visit The Experience Barber Shop for high-quality haircuts, beard trims, and grooming services." />
        <meta name="keywords" content="barber, haircut, beard trim, grooming, barbershop, men's salon, black hair," />
        <meta name="robots" content="index, follow" />
      </Head>
      <Script
        id="barbershop-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "The Experience Barber Shop",
            "image": "https://www.theexpshop.com/images/theExperienceBarberShopAndSalon1.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "88 E Mill St",
              "addressLocality": "Akron",
              "addressRegion": "OH",
              "postalCode": "44308",
              "addressCountry": "US"
            },
            "email": "theexperiencebarbershopandsalon@gmail.com",
            "telephone": "330-475-2552",
            "openingHours": "Mon: Appointments only, Tue-Sa 10:00AM-6:00PM"
          })
        }}
      />
      <Home />
    </>
  );
};

export default Page;
