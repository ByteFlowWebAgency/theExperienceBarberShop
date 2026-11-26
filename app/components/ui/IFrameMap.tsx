import React from "react";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, BUSINESS_NAME } from "@/lib/site";
import styles from "./IFrameMap.module.css";

// Google Maps embed query: the address plus the business name as the pin label.
const MAP_SRC = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(
  `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2} (${BUSINESS_NAME})`
)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

/** Google Maps embed that fills its (sized) parent container. */
const IFrameMap = () => {
  return (
    <iframe
      className={styles.iframe}
      allowFullScreen
      loading="lazy"
      sandbox="allow-scripts"
      src={MAP_SRC}
      referrerPolicy="no-referrer-when-downgrade"
      title={`${BUSINESS_NAME} location map`}
    ></iframe>
  );
};

export default IFrameMap;
