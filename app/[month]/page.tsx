"use client";

import { useParams } from "next/navigation";

export default function Month() {
  const { month } = useParams();
  return <h1>month of {month}</h1>;
}
