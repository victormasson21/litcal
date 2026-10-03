"use client";

import { useSyncExternalStore } from "react";
import { isInstalled, isIphone } from "@/app/lib/device";
import {
  promptInstall,
  readInstall,
  subscribeToInstall,
} from "@/app/lib/install";
import template from "../template.module.css";

type Status = "loading" | "installed" | "ready" | "iphone" | "menu";

const readStatus = (): Status => {
  const install = readInstall();
  if (isInstalled() || install === "installed") {
    return "installed";
  }
  if (install === "ready") {
    return "ready";
  }
  return isIphone() ? "iphone" : "menu";
};

const serverStatus = (): Status => "loading";

export const Install = () => {
  const status = useSyncExternalStore(
    subscribeToInstall,
    readStatus,
    serverStatus,
  );

  switch (status) {
    case "loading":
      return null;
    case "installed":
      return <p>Seasons is on your home screen.</p>;
    case "ready":
      return (
        <button
          type="button"
          className={template.button}
          onClick={promptInstall}
        >
          Add to home screen
        </button>
      );
    case "iphone":
      return <p>On iPhone, tap Share, then Add to Home Screen.</p>;
    case "menu":
      return (
        <p>
          Look for Add to Home Screen or Install in your browser&apos;s menu.
        </p>
      );
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
};
