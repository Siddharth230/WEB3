import { EthereumWallet } from "@/components/EthereumWallet";
import { SolanaWallet } from "@/components/SolanaWallet";
import WalletGenerator from "@/components/WalletGenerator";

export default function Home() {
  return (
    <div>
      <WalletGenerator />
      <SolanaWallet />
      <EthereumWallet />
    </div>
  );
}
