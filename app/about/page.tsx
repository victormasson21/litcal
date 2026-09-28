import { Info } from "@/app/components/info/info";

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
    </Info>
  );
}
