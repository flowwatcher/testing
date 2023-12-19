import React, { useState, useEffect } from "react";

import FooterMobile from "../FooterMobile";
import FooterPage from "../Footer";
import { isMobileHeaderFotter } from "@/functions/mobileChecker";

export default function FooterRender() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    isMobileHeaderFotter(setIsMobile, isMobile);
  }, []);

  return <>{isMobile ? <FooterMobile /> : <FooterPage />}</>;
}
