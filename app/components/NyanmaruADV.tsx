// app/components/NyanmaruADV.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const dialogues = [
  "やっほー！にゃんまちゃんやで！にゃんまるコインのせつめいを したるから、ちゃんと きいてや〜！にしし！",
  "にゃんまるコイン（$NYAN）は、GFAがサポートする、Web3時代のカワイイトークンやで！💰",
  "おもしろいのは、ただのネタコインやなくて、ほんまに実用性もあるってこと！いろんなプロジェクトやコミュニティで使われてるんやで！",
  "にゃんまるコインは、みんなでわいわいもりあがるのにピッタリ！でも、投資は自己責任やで〜！",
  "さあ、これで にゃんまるコインのこと、ちょっとは わかったかな？にしし！これからもおうえん よろしくやで！💖"
];

export default function NyanmaruADV() {
  const [index, setIndex] = useState(0);

  const nextDialogue = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-2xl text-center">
        <img src="/nyanmaru.png" alt="にゃんまちゃん" className="w-1/2 mx-auto mb-4" />
        <p className="text-xl font-bold text-gray-800 mb-4">{dialogues[index]}</p>
        <Button onClick={nextDialogue} className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
          つぎへ ➡️
        </Button>
      </div>
    </div>
  );
}
