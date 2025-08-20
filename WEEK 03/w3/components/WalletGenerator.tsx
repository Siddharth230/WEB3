"use client";
import { generateMnemonic } from "bip39";
import { useState } from "react";

export default function WalletGenerator() {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <div>
      <button
        onClick={async function () {
          const mn = await generateMnemonic();
          setMnemonic(mn);
        }}>
        Create Seed Phrase
      </button>
      <input className="flex w-200 h-40" type="text" value={mnemonic}></input>
    </div>
  );
}
