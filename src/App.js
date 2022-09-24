import Button from "react-bootstrap/Button";
import { ethers } from "ethers";
import { useState } from "react";
const Contract = require("./Contract");

// func to connect to wallet

function App(props) {
  const [account, setAccount] = useState("");
  const [walletAddress, setWalletAddress] = useState();

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    setWalletAddress(provider[0]);
    console.log("wallet address: ", res);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form
            class="gradient col-lg-5 mt-5"
            style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #000000" }}
          >
            <h4>Mint Portal</h4>
            <h5>Please connect your wallet</h5>
            <Button
              onClick={connect}
              style={{ marginBottom: "5px", color: "#FFA500" }}
            >
              Connect Wallet
            </Button>
            <div className="accountDisplay">
              <h3>Address: {} </h3>
            </div>
            <Button
              onClick={Contract.createContract}
              style={{ marginBottom: "5px", color: "#FFA500" }}
            >
              Create Contract
            </Button>
            <div className="accountDisplay">
              <h3>Address: {} </h3>
            </div>

            <div
              className="card"
              style={{ marginTop: "3px", boxShadow: "1px 1px 4px #000000" }}
            >
              <h4>Mint NFTs</h4>
              <input
                type="number"
                name="amount"
                defaultValue="1"
                min="1"
                max="5"
              />
              <br></br>
              <label>Please select the amount of NFTs to mint.</label>
              <Button onClick={Contract.mintNft}>Buy/Mint!</Button>
            </div>
            <label style={{ color: "#FFA500" }}>
              Price 0.05 ETH each mint.
            </label>

            <Button onClick={Contract.getMinted}>Show minted</Button>
            <h2> Tokens Minted so far= {Contract.getMinted}</h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
