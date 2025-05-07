import Image from "next/image";
import { useState } from "react";

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
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }} onClick={nextDialogue}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-xs">
        <Image src="/nyanmaru.png" alt="にゃんまちゃん" width={400} height={400} className="w-full h-auto" />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-xl bg-black bg-opacity-75 rounded-xl p-4 text-white text-lg">
        <p>{dialogues[index]}</p>
      </div>
    </div>
  );
}
