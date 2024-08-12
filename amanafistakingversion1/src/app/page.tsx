import { client } from "./client";
import { chain } from "./chain";
import { ConnectEmbed, ConnectButton } from "@/app/thirdweb";
export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundImage: "url('/workspace/AmanaFi-Staking-Version1/amanafistakingversion1/public/assets/amanafi-background-green.png')",
      backgroundSize: "cover !important", 
      backgroundPosition: "center !important" 
    }}>
      <div style={{ textAlign: "center" }}>
      <ConnectEmbed
          client={client}
          chain={chain}
        />
        <ConnectButton
        client={client}
        chain={chain}
        />
      </div>
    </div>
  );
}
