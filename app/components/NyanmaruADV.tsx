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
    <div className="min-h-screen flex flex-col items-center justify-end p-4 bg-cover bg-center" style={{ backgroundImage: "url('/background.png')", backgroundSize: "cover" }}>
      <img src="/nyanmaru.png" alt="にゃんまちゃん" className="w-2/3 max-w-sm mb-4" />
      <div className="bg-white text-gray-900 w-full max-w-2xl p-4 rounded-2xl shadow-md mb-4 border-2 border-gray-300">
        <p className="text-lg font-bold leading-relaxed">{dialogues[index]}</p>
      </div>
      <Button onClick={nextDialogue} className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mb-4">つぎへ ➡️</Button>
    </div>
  );
}