import { Info } from "@/app/components/info/info";
import { Notify } from "@/app/components/notify/notify";

export default function AboutPage() {
  return (
    <Info title="About">
      <p>
        Seasons is a literary calendar. Each day carries a passage from a
        novel, a diary or a poem that names that date, set in the season it
        belongs to.
      </p>
      <p>
        Browse the year to see which days have a passage, open a month to
        read its days, or swipe from one quote to the next.
      </p>
      <p>
        The calendar grows as we read. A day without a passage is a day we
        have not found one for yet.
      </p>

      <h2 id="notifications">Notifications</h2>
      <p>
        Every morning, Seasons can send you the day&apos;s passage as a
        notification. Tap it to open the quote.
      </p>
      <p>Days without a passage stay quiet.</p>
      <Notify />
    </Info>
  );
}
