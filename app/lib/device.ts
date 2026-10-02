export const isIphone = (): boolean =>
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isInstalled = (): boolean =>
  window.matchMedia("(display-mode: standalone)").matches;
