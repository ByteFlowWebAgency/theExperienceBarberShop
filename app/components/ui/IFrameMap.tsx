import React from "react";
import styles from "./IFrameMap.module.css";

/** Google Maps embed that fills its (sized) parent container. */
const IFrameMap = () => {
  return (
    <iframe
      className={styles.iframe}
      allowFullScreen
      loading="lazy"
      sandbox="allow-scripts"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=88%20E%20Mill%20St,%20Akron,%20OH%2044308+(The%20Experience%20Barbershop%20&amp;%20Salon)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      referrerPolicy="no-referrer-when-downgrade"
      title="The Experience Barbershop & Salon location map"
    ></iframe>
  );
};

export default IFrameMap;
