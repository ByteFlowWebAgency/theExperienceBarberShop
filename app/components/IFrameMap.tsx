import React from "react";

const IFrameMap = () => {
  return (
    <>
      <div className="h-60 md:h-52 lg:h-[500px] xl:h-[550px] mt-4 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=88%20E%20Mill%20St,%20Akron,%20OH%2044308+(The%20Experience%20Barbershop%20&amp;%20Salon)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default IFrameMap;
