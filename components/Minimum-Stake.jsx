import { useState, useEffect } from "react";
import React from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { HumanReadable } from "./utilities/filters";

const cache = {
  minNominatorBond: null,
  minimumActiveStake: null,
  lastFetch: null,
};

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

function MinimumStake({ network, defaultValue }) {
  const [minNominatorBond, setMinNominatorBond] = useState('');
  const [minimumActiveStake, setMinimumActiveStake] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let wsUrl;
        if (network === "polkadot") {
          wsUrl = "wss://rpc.polkadot.io";
        } else if (network === "kusama") {
          wsUrl = "wss://kusama-rpc.polkadot.io/";
        } else {
          return;
        }

        console.log(`Using network: ${network}`);
        console.log(`WebSocket URL: ${wsUrl}`);
        setDebugInfo(prev => `${prev}\nUsing network: ${network}\nWebSocket URL: ${wsUrl}`);

        const currentTime = new Date().getTime();

        if (cache.lastFetch && (currentTime - cache.lastFetch) < CACHE_DURATION) {
          setMinNominatorBond(cache.minNominatorBond);
          setMinimumActiveStake(cache.minimumActiveStake);
          console.log("Using cached values");
          setDebugInfo(prev => `${prev}\nUsing cached values`);
        } else {
          HumanReadable(defaultValue, network, setMinNominatorBond);

          await fetchMinimumBondAndStake(network, wsUrl, setMinNominatorBond, setMinimumActiveStake, setDebugInfo);

          cache.lastFetch = currentTime;
          cache.minNominatorBond = minNominatorBond;
          cache.minimumActiveStake = minimumActiveStake;
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
        setDebugInfo(prev => `${prev}\nError in fetchData: ${error.message}`);
      }
    };

    fetchData();
  }, [network, defaultValue]);

  return (
    <div>
      <div>Minimum Nominator Bond: {minNominatorBond}</div>
      <div>Minimum Active Stake: {minimumActiveStake}</div>
      <pre>{debugInfo}</pre>
    </div>
  );
}

async function fetchMinimumBondAndStake(network, wsUrl, setMinNominatorBond, setMinimumActiveStake, setDebugInfo) {
  try {
    const wsProvider = new WsProvider(wsUrl);
    const api = await ApiPromise.create({ provider: wsProvider });

    // Fetching minimum nominator bond
    const minNominatorBond = await api.query.staking.minNominatorBond();
    console.log("Minimum Nominator Bond:", minNominatorBond.toString());
    setDebugInfo(prev => `${prev}\nMinimum Nominator Bond: ${minNominatorBond.toString()}`);
    HumanReadable(minNominatorBond.toString(), network, setMinNominatorBond);

    // Fetching minimum active stake
    const minimumActiveStake = await api.query.staking.minimumActiveStake();
    console.log("Minimum Active Stake:", minimumActiveStake.toString());
    setDebugInfo(prev => `${prev}\nMinimum Active Stake: ${minimumActiveStake.toString()}`);
    HumanReadable(minimumActiveStake.toString(), network, setMinimumActiveStake);

  } catch (error) {
    console.error("Error in fetchMinimumBondAndStake:", error);
    setDebugInfo(prev => `${prev}\nError in fetchMinimumBondAndStake: ${error.message}`);
  }
}

export default MinimumStake;
