import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { HumanReadable } from './utilities/filters'; 

const PolkadotInfo = () => {
  const [data, setData] = useState({
    existentialDeposit: 'Loading...',
    minJoinBond: 'Loading...',
    minContribution: 'Loading...',
    basicDeposit: 'Loading...',
    proxyDepositBase: 'Loading...',
    minNominatorBond: 'Loading...',
    minimumActiveStake: 'Loading...',
    minCreateBond: 'Loading...'
  });

  useEffect(() => {
    const fetchData = async () => {
      const wsProvider = new WsProvider('wss://rpc.polkadot.io');
      const api = await ApiPromise.create({ provider: wsProvider });

      const formatValue = (value, setter) => {
        HumanReadable(value, 'polkadot', (formattedValue) => {
          setter(formattedValue);
        });
      };

      const existentialDeposit = api.consts.balances.existentialDeposit.toString();
      const minJoinBond = (await api.query.nominationPools.minJoinBond()).toString();
      const minContribution = api.consts.crowdloan.minContribution.toString();
      const basicDeposit = api.consts.identity.basicDeposit.toString();
      const proxyDepositBase = api.consts.proxy.proxyDepositBase.toString();
      const minNominatorBond = (await api.query.staking.minNominatorBond()).toString();
      const minimumActiveStake = (await api.query.staking.minimumActiveStake()).toString();
      const minCreateBond = (await api.query.nominationPools.minCreateBond()).toString();

      formatValue(existentialDeposit, (value) => setData((prevState) => ({ ...prevState, existentialDeposit: value })));
      formatValue(minJoinBond, (value) => setData((prevState) => ({ ...prevState, minJoinBond: value })));
      formatValue(minContribution, (value) => setData((prevState) => ({ ...prevState, minContribution: value })));
      formatValue(basicDeposit, (value) => setData((prevState) => ({ ...prevState, basicDeposit: value })));
      formatValue(proxyDepositBase, (value) => setData((prevState) => ({ ...prevState, proxyDepositBase: value })));
      formatValue(minNominatorBond, (value) => setData((prevState) => ({ ...prevState, minNominatorBond: value })));
      formatValue(minimumActiveStake, (value) => setData((prevState) => ({ ...prevState, minimumActiveStake: value })));
      formatValue(minCreateBond, (value) => setData((prevState) => ({ ...prevState, minCreateBond: value })));
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li><strong>{data.existentialDeposit}</strong>: A Polkadot Networkön az aktív accounthoz szükséges minimális egyenleg. Ha az egyenleg a minimum alá csökken, az account megszűnik.</li>
        <li><strong>{data.minJoinBond}</strong>: a minimálisan szükséges hozzájárulás ahhoz, hogy csatlakozhass egy nomination poolhoz, és a hálózat biztonságához való hozzájárulásért staking rewardokat kapj.</li>
        <li><strong>{data.minContribution}</strong>: a minimálisan szükséges hozzájárulás a crowdloans parachain slot aukciókon való részvételhez.</li>
        <li><strong>{data.basicDeposit}</strong>: on-chain identitás regisztrálása</li>
        <li><strong>{data.proxyDepositBase}</strong>: proxy fiók létrehozása</li>
        <li><strong>{data.minNominatorBond}</strong>: a validátorok közvetlen jelölésére irányuló szándék benyújtásához szükséges minimális stake.</li>
        <li><strong>{data.minimumActiveStake}</strong> : a minimális DOT mennyiség, ami az aktív nominátorrá váláshoz és a rewardok megszerzéséhez szükséges, azaz ez a minimális aktív stake mennyiség. A stake rewardok megszerzésének esélye növekszik, ha a stake mennyisége nem kevesebb, mint az aktív nominátorok közötti a minimális stake mennyiség, ami egy dinamikus küszöbérték. Ha a minimális aktív nominátoroknál kevesebb DOT-tal rendelkezel, fontold meg, hogy egy nomination poolhoz csatlakozz.</li>
        <li><strong>{data.minCreateBond}</strong>: a saját nomination pool létrehozásának díja.</li>
      </ul>
    </div>
  );
};

export default PolkadotInfo;
