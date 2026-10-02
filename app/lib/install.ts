type InstallPrompt = Event & { prompt: () => Promise<void> };

declare global {
  interface WindowEventMap {
    beforeinstallprompt: InstallPrompt;
  }
}

export type InstallState = "waiting" | "ready" | "installed";

let installPrompt: InstallPrompt | undefined;
let installed = false;

const listeners = new Set<() => void>();

const notify = () => listeners.forEach((listener) => listener());

export const listenForInstall = (): void => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    installPrompt = undefined;
    installed = true;
    notify();
  });
};

export const subscribeToInstall = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const readInstall = (): InstallState => {
  if (installed) {
    return "installed";
  }
  return installPrompt ? "ready" : "waiting";
};

export const promptInstall = async (): Promise<void> => {
  const prompt = installPrompt;
  installPrompt = undefined;
  notify();
  await prompt?.prompt();
};
