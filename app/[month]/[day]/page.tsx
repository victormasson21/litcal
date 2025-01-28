"use client";

import { useParams } from "next/navigation";

export default function Month() {
  const { month, day } = useParams();
  return (
    <h1>
      the {day} of {month}
    </h1>
  );
}
