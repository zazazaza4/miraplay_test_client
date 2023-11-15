const breakpoints = {
  mobile: 600,
  tablet: 1100,
};

export const getScreenWidth = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const isNotDesktop = screenWidth < breakpoints.tablet;
  const isMobile = screenWidth < breakpoints.tablet;
  const isTablet =
    screenWidth >= breakpoints.mobile && screenWidth < breakpoints.tablet;

  return { isMobile, isTablet, screenWidth, isNotDesktop };
};
