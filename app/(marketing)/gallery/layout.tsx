export const metadata = {
    title: "Gallery - The Experience Barbering Franchise",
    description:
      "Explore our gallery showcasing the art of barbering at The Experience. View images of our top-notch services, customer experiences, and professional styling.",
    keywords:
      "barbering gallery, haircut styles, barber shop images, professional barbering, franchise barbering",
    openGraph: {
      title: "Gallery - The Experience Barbering Franchise",
      description:
        "Explore our gallery showcasing the art of barbering at The Experience. View images of our top-notch services, customer experiences, and professional styling.",
      images: [
        {
          url: "/assets/images/IMG_0165.jpg",
          width: 800,
          height: 600,
          alt: "Barber shop experience",
        },
      ],
      type: "website",
    },
  };
  
  export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  