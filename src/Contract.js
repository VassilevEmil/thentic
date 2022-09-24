import { ethers } from "ethers";
import { useState } from "react";

const axios = require("axios");
const createUrl = "https://thentic.tech/api/nfts/contract";
const getUrl = "https://thentic.tech/api/contracts";
const mintUrl = "https://thentic.tech/api/nfts/mint";
const getMintedUrl = "https://thentic.tech/api";

const headers = { "Content-Type": "application/json" };

const data = {
  key: "b9eyjoeD3imdJ0YOOH83Ul91tuI3CfFM",
  chain_id: "97",
  name: "NFTS LEGENDS",
  short_name: "LGD",
};

const body = {
  key: "b9eyjoeD3imdJ0YOOH83Ul91tuI3CfFM",
  chain_id: "97",
};

const mintBody = {
  key: "b9eyjoeD3imdJ0YOOH83Ul91tuI3CfFM",
  chain_id: "97",
  contract: "0x5d96953f1b0adc44c72d504a1638c61c5743a329",
  nft_id: "1",
  nft_data: "ipfs://QmTV4AiMGdjtDVAfx7RT8gh4dgcFDzZrKTw4LzN9dksFtC",
  to: "0xE9e65bCc392293a9a89D62372C1f63bF2d097605",
};

export const createContract = async () => {
  const res = await axios.post(createUrl, data, headers);
  console.log(res);
};

export const getContract = async () => {
  const res = await axios.get(
    "https://thentic.tech/api/contracts?chain_id=97&key=b9eyjoeD3imdJ0YOOH83Ul91tuI3CfFM"
  );

  console.log(res);
};

export const mintNft = async () => {
  const res = await axios.post(mintUrl, mintBody);
  console.log(res);
};

export const getMinted = async () => {
  const res = await axios.get(
    "https://thentic.tech/api/nfts?chain_id=97&key=b9eyjoeD3imdJ0YOOH83Ul91tuI3CfFM"
  );
  console.log(res);
};
