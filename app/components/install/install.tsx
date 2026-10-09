"use client";

import { type ReactNode, useSyncExternalStore } from "react";
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

const Invite = ({ children }: { children: ReactNode }) => (
  <>
    <hr />
    <p>Add Seasons to your home screen to use it like an app.</p>
    {children}
  </>
);

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
      return (
        <>
          <hr />
          <p>Seasons is on your home screen.</p>
        </>
      );
    case "ready":
      return (
        <Invite>
          <button
            type="button"
            className={template.button}
            onClick={promptInstall}
          >
            Add to home screen
          </button>
        </Invite>
      );
    case "iphone":
      return (
        <Invite>
          <p>On iPhone, tap Share, then Add to Home Screen.</p>
        </Invite>
      );
    case "menu":
      return (
        <Invite>
          <p>
            Look for Add to Home Screen or Install in your browser&apos;s menu.
          </p>
        </Invite>
      );
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
};
