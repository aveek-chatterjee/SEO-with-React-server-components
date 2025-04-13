"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="text-blue-600">
      {liked ? "Unlike" : "Like"}
    </button>
  );
}
