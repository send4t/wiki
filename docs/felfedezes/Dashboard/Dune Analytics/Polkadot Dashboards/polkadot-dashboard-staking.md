---
sidebar_position: 3
---
import Footer from '../../../../../components/footerMildzsu';

# Staking
# Polkadot Dashboardok stake-elésről

## Áttekintés
Ez a dokumentum bemutatta a Polkadot különböző staking dashboardjait, amelyek betekintést nyújtanak a staking jutalmakba, a validáló és nomináló mérőszámokba, a nomination poolokba és a pooltagok tevékenységeibe. Ezek a dashboardok átfogó képet kívánnak nyújtani a Polkadot-hálózaton belüli staking dinamikáról.

## Polkadot Staking Dashboard

### Befejezett éra
A befejezett éra legfeljebb 2 napos késéssel válhat elérhetővé a staking rewardok és az APY kiszámítása előtt. A Staking Kezdőlapon a legutóbb befejezett éra látható.

### Jutalmazási arány matematikája

- **Jutalmazási arány (Reward Rate)**: (validator_erasRewardPoints / erasRewardPoints_total) * ErasValidatorReward / validator_total_stake.

- **Tényleges jutalmazási arány (Effective Reward Rate)**: (1 - validator_commission) * Reward Rate.

- **Normalizált jutalmazási arány (Normalized Reward Rate)**: total_era_rewards / number_of_validators * (1 - commission) / validator_total_stake.

Forrás táblázat: **polkadot.stakings**, 
MaterializedView:
[**dune.substrate.result_polkadot_validators**](https://dune.com/queries/3302709),
[**dune.substrate.result_polkadot_nominators**](https://dune.com/queries/3326829),
[**dune.substrate.result_polkadot_nominationpools**](https://dune.com/queries/3327350),
[**dune.substrate.result_polkadot_poolmembers**](https://dune.com/queries/3327479),
[**dune.substrate.result_polkadot_identity**](https://dune.com/queries/3420617)

Github repo: [_**substrate-etl**_](https://github.com/colorfulnotion/substrate-etl)

### Staking Összesítés

<iframe src="https://dune.com/embeds/3335920/5589273/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3338274/5593554/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3345583/5606404/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3338274/5817115/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3334573/5586661/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459220/5813496/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3302959/5531365/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3303032/5531577/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459195/5813464/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3414552/5732594/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3334817/5603258/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3334817/5587364/" height="350" width="100%"></iframe>


## Polkadot Staking Dashboard (Validátorok) 

Nézd meg a Dune-on: [Polkadot Staking Dashboard (Validátorok) ](https://dune.com/substrate/polkadot-staking-validators)

### Polkadot Staking rewardok:

- **Jutalmazási arány (Reward Rate)**: (validator_erasRewardPoints / erasRewardPoints_total) * ErasValidatorReward / validator_total_stake.
- **Tényleges jutalmazási arány (Effective Reward Rate)**: (1 - validator_commission) * Reward Rate.
- **Normalizált jutalmazási arány (Normalized Reward Rate)**: total_era_rewards / number_of_validators * (1 - commission) / validator_total_stake.

Forrás Táblázat: polkadot.stakings, MaterializedView: 
[**dune.substrate.result_polkadot_validators**](https://dune.com/queries/3302709)


<iframe src="https://dune.com/embeds/3459458/5813993/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814228/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814232/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814240/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814241/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814242/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814243/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459458/5814244/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459613/5814194/" height="350" width="100%"></iframe>

## Polkadot Staking Dashboard (Nominátorok)

Nézd meg a Dune-on: [Polkadot Staking Dashboard (Nominátorok)](https://dune.com/substrate/polkadot-staking-nominators)

Egy adott nominátor esetében a dashboard ezt mutatja:
- Nominator Staking Rewardok
- Nominator Részesedése
- Delegált Összeg
- Nominator Staking Rewardok Nyers adatai


Forrás Táblázat: polkadot.stakings, MaterializedView: 
[**dune.substrate.result_polkadot_nominators**](https://dune.com/queries/3326829)

:::info TIPP
Az **alapértelmezett paramétereket** ezen a Wikioldalon minden paraméterezett diagramra alkalmazzuk, szemléltetésképpen. Látogass el a Dune dashboardra a `nominator_ss58` paraméter használatához a részletesebb elemzéshez. További információkért látogass el a 
[Dune dokumentációba a paraméterekről](https://docs.dune.com/web-app/query-editor/parameters).
:::

<iframe src="https://dune.com/embeds/3343697/5602826/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343697/5817852/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3459410/5813864/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343697/5817857/" height="350" width="100%"></iframe>

## Polkadot Staking Dashboard (Pool Tag)

Nézd meg a Dune-on: [Polkadot Staking Dashboard (Pool Member)](https://dune.com/substrate/polkadot-staking-nomination-pool)

Ez a dashboard egy adott nomination pool tag esetében a csoporton belüli tagok tevékenységének nyers adatait mutatja.

Tagok pool díja: 365 * member_staking_rewards / member_bonded

Forrás Táblázat: polkadot.stakings, MaterializedView:
[**dune.substrate.result_polkadot_nominationpools**](https://dune.com/queries/3327350)

:::info TIPP
Az alapértelmezett paramétereket ezen a Wikioldalon minden paraméterezett diagramra alkalmazzuk, szemléltetésképpen. Látogass el a Dune dashboardunkra a user_ss58 paraméter használatához a mélyebb elemzéshez. További információkért látogass el a 
[Dune dokumentációba a paraméterekről](https://docs.dune.com/web-app/query-editor/parameters).
:::

<iframe src="https://dune.com/embeds/3343291/5817752/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3341534/5599076/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5817681/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5817723/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5602160/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5817736/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5817692/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3343291/5817706/" height="350" width="100%"></iframe>

<iframe src="https://dune.com/embeds/3341597/5599169/" height="350" width="100%"></iframe>




<Footer />