export function isMobileChecker(seter, state) {
  let isSetter = state;
  function handleResize() {
    seter(window.innerWidth <= 699);
  }

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}

export function isMobileHeaderFotter(seter, state) {
  let isSetter = state;
  function handleResize() {
    seter(window.innerWidth <= 991);
  }

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}

export function deviceMobileProdChecker(seter, state) {
  let isSetter = state;
  function handleResize() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 992) {
        seter("desktop");
      } else if (window.innerWidth >= 499) {
        seter("tablet");
      } else {
        seter("mobile");
      }
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}
export function getActiveItemsCountCustom(breakTablet, breakMobile) {
  if (typeof window !== "undefined") {
    const screenWidth = window.innerWidth;
    if (screenWidth >= breakTablet) {
      return 3;
    } else if (screenWidth >= breakMobile) {
      return 2;
    }
    return 1;
  }
}

export function deviceMobileCheckerCustom(breakMax, breakMid, setter) {
  function handleResizerDevice() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= breakMax) {
        setter("tablet");
      } else if (window.innerWidth >= breakMid) {
        setter("mobile");
      } else {
        setter("mobileSm");
      }
    }
  }
  window.addEventListener("resize", handleResizerDevice);
  return () => {
    window.removeEventListener("resize", handleResizerDevice);
  };
}
