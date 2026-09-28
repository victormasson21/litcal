"use client";

import { useSyncExternalStore } from "react";
import styles from "./notify.module.css";

type Status =
  | "loading"
  | "unsupported"
  | "install"
  | "denied"
  | "default"
  | "granted";

const isIphone = (): boolean => /iPad|iPhone|iPod/.test(navigator.userAgent);

const isInstalled = (): boolean =>
  window.matchMedia("(display-mode: standalone)").matches;

const readStatus = (): Status => {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    return Notification.permission;
  }
  return isIphone() && !isInstalled() ? "install" : "unsupported";
};

const serverStatus = (): Status => "loading";

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const request = async () => {
  await Notification.requestPermission();
  listeners.forEach((listener) => listener());
};

export const Notify = () => {
  const status = useSyncExternalStore(subscribe, readStatus, serverStatus);

  switch (status) {
    case "loading":
      return null;
    case "unsupported":
      return <p>This browser cannot receive notifications.</p>;
    case "install":
      return (
        <p>
          On iPhone, notifications work from the home screen app. Tap Share,
          then Add to Home Screen, and open Seasons from there.
        </p>
      );
    case "denied":
      return (
        <p>
          Notifications are blocked for Seasons. Allow them in your browser
          settings to turn them on.
        </p>
      );
    case "default":
      return (
        <button type="button" className={styles.button} onClick={request}>
          Turn on notifications
        </button>
      );
    case "granted":
      return <p>Notifications are on.</p>;
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
};
