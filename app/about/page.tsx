import { Info } from "@/app/components/info/info";
import { Install } from "@/app/components/install/install";
import { Notify } from "@/app/components/notify/notify";
import { SHOW_NOTIFICATIONS } from "@/app/lib/flags";

export default function AboutPage() {
  return (
    <Info title="About">
      <p>
        Seasons is an elusive mission to build a calendar entirely from book
        fragments.
      </p>
      <p>
        Each day holds a passage from a novel that mentions that specific date.
        Some relate to actual events and bring us back in time. Others are
        purely fictional and leave us wondering why the author chose to use this
        particular date. There is some way to go, if you spot a date we are
        missing please share it with us.
      </p>

      <Install />

      {SHOW_NOTIFICATIONS && (
        <>
          <h2 id="notifications">Notifications</h2>
          <p>
            Every morning, Seasons can send you the day&apos;s passage as a
            notification. Tap it to open the quote.
          </p>
          <p>Days without a passage stay quiet.</p>
          <Notify />
        </>
      )}
    </Info>
  );
}
