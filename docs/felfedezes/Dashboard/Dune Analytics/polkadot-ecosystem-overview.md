---
sidebar_position: 1
---
import Footer from '../../../../components/footerMildzsu';

# Polkadot ökoszisztéma áttekintése
A Polkadot ökoszisztéma egy dinamikus és fejlődő hálózat, amelynek célja, hogy lehetővé tegye a különböző parachainek számára az üzenetek és értékek bizalommentes átvitelét; egyedi jellemzőik megosztását, miközben biztonságukat egyesítik.

Ebben az áttekintésben betekintést nyújtunk a Polkadot ökoszisztéma dinamizmusába és fejlődésébe. Konkrétan kiemeljük az aktív fiókokra, extrinsikekre, eseményekre és XCM-ekre vonatkozó adatokat.

**Áttekintés a Dune-on**: [Polkadot és Parachainek ökoszisztéma mérőszámai](https://dune.com/substrate/polkadot)

:::info
Ez az oldal csak egy magas szintű áttekintést ad az ökoszisztéma metrikáiról. A mélyreható elemzésért kérjük, látogass el a [Polkadot Dashboards](LINK) és a [Parachain Dashboards](LINK) kategóriákba.

A következő témák például érdekelhetik:

A stabilcoinok esetében látogass el az [Asset Hub Dashboards](dune-analytics/parachain-dashboards/assethub-dashboards) oldalra.
A Polkadot relay-chain treasury esetében látogass el a [Polkadot Dashboards Governance](dune-analytics/polkadot-dashboards/polkadot-dashboards-governance) oldalra.
A Polkadot tétgyűjtéshez látogass el a [Polkadot Dashboards Staking](dune-analytics/polkadot-dashboards/polkadot-dashboards-staking) oldalra.
NFT-k esetében látogass el az [Unique Dashboards](dune-analytics/parachain-dashboards/unique-dashboards) oldalra.
:::

### Aktivitás metrikák
Aktív számlák Polkadot Ecosystem Metrikák
Az egyes substrate chainek (láncok) szerint nyilvántartott napi aktív fiókok. (Az aktív definíciója: a fiók aláírt bármilyen extrinsic-et vagy létrehozott bármilyen napi aktív fiókot, amelyet minden egyes substrate láncban rögzítettek.) (Az aktív definíciója: a számla aláírt bármilyen extrinsic-et vagy előállított bármilyen blokkot, Az EVM esetében a számlaszámot az 'ethereum:Executed' alapján számolják ki.)

<iframe src="https://dune.com/embeds/3547412/5969453/" height="850" width="100%"></iframe>


Extrinsics Polkadot Ecosystem Metrikák
Napi extrinsic-értékek substrate chainenként rögzítve
<iframe src="https://dune.com/embeds/3547412/6413909/" height="850" width="100%"></iframe>


Események Polkadot Ecosystem Metrikák
Az egyes substrate chainekre vonatkozóan rögzített napi események.
<iframe src="https://dune.com/embeds/3547412/5969455/" height="850" width="100%"></iframe>


Transzferek Polkadot Ecosystem Metrikák
napi (egyenleg, token, eszköz) átutalások, amelyeket minden egyes substrate chainben rögzítettek.
<iframe src="https://dune.com/embeds/3547412/5969231/" height="850" width="100%"></iframe>
Polkadot Treasury Adatok
<iframe src="https://dune.com/embeds/3386769/5684359/" height="350" width="100%"></iframe>

### Polkadot Hálózat & Biztonság

Polkadot - Network Staking Rate Polkadot hálózati számok
<iframe src="https://dune.com/embeds/3334817/5587364/" height="350" width="100%"></iframe>

Polkadot - Nominátorok & Validátorok & Poolok Polkadot hálózati számok
<iframe src="https://dune.com/embeds/3334817/5603258/" height="350" width="100%"></iframe>

### XCM Metrikák

Polkadot XCM: Parachainek -> RelayChain  Polkadot UMP (felfelé irányuló üzenetátvitel) Napi felfelé irányuló xcmmsg megfigyelés parachainektől a Polkadot Relaychain felé.
<iframe src="https://dune.com/embeds/3505658/5895044/" height="450" width="100%"></iframe>

Polkadot XCM: Relaychain -> Parachainek  Polkadot DMP (lefelé irányuló üzenetátvitel) Lefelé irányuló xcmmsg megfigyelés a Polkadot Relaychain-től a parachainek felé.
<iframe src="https://dune.com/embeds/3505637/5895025/" height="450" width="100%"></iframe>


Polkadot XCM: Parachainek -> Parachainek Polkadot HRMP (horizontális üzenetátvitel) Napi horizontális xcmmsg megfigyelés parachains-ről parachainekre (hrmp küldő által)
<iframe src="https://dune.com/embeds/3839467/6457352/" height="450" width="100%"></iframe>

[Normalizált] Polkadot XCM: Parachainek -> RelayChain. Polkadot UMP (Felfelé irányuló üzenetátvitel)Napi felfelé irányuló xcmmsg megfigyelés parachainektől Polkadot Relaychain felé.
<iframe src="https://dune.com/embeds/3505658/6437879/" height="450" width="100%"></iframe>


[Normalizált] Polkadot XCM: RelayChain -> Parachainek Polkadot DMP (lefelé irányuló üzenetátvitel)Lefelé irányuló xcmmsg megfigyelés a Polkadot Relaychain-től a parachainek felé.
<iframe src="https://dune.com/embeds/3505637/6437895/" height="450" width="100%"></iframe>

[Normalizált] Polkadot XCM: Parachainek -> Parachainek Polkadot HRMP (horizontális üzenetátvitel) Napi horizontális xcmmsg megfigyelés parachains-ről parachainekre (hrmp küldő által)
<iframe src="https://dune.com/embeds/3839467/6459749/" height="450" width="100%"></iframe>

Kusama XCM: RelayChain -> Parachainek Kusama DMP (lefelé irányuló üzenetátvitel) Kusama Relaychain és parachainek között megfigyelt lefelé irányuló xcmmsg
<iframe src="https://dune.com/embeds/3507786/5898797/" height="450" width="100%"></iframe>


Kusama XCM: Parachainek -> RelayChain Kusama UMP (Upward Message Passing) Napi felfelé irányuló xcmmsg megfigyelés parachainektől Kusama Relaychain felé
<iframe src="https://dune.com/embeds/3507755/5898758/" height="450" width="100%"></iframe>

[Normalizált] Kusama XCM: Relaychain -> Parachainek Kusama DMP (lefelé irányuló üzenetátvitel) Kusama Relaychain és parachainek között megfigyelt lefelé irányuló xcmmsg
<iframe src="https://dune.com/embeds/3507786/6437902/" height="450" width="100%"></iframe>

[Normalizált] Kusama XCM: Parachainek -> RelayChain Kusama UMP (Upward Message Passing) Napi felfelé irányuló xcmmsg megfigyelés parachainektől Kusama Relaychain felé
<iframe src="https://dune.com/embeds/3507755/6437907/" height="450" width="100%"></iframe>


<Footer />