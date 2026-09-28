import { Info } from "@/app/components/info/info";
import { Notify } from "@/app/components/notify/notify";

export default function NotifyPage() {
  return (
    <Info title="Notifications">
      <p>
        Every morning, Seasons can send you the day&apos;s passage as a
        notification. Tap it to open the quote.
      </p>
      <p>Days without a passage stay quiet.</p>
      <Notify />
    </Info>
  );
}
