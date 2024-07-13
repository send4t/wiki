---
sidebar_position: 1
---

import PolkadotInfo from '../../components/polkadotInfo';
import Footer from '../../components/footerMildzsu';

# Kezdő lépések
---

:::info Üdvözlünk a Polkadot Wikiben!

A Polkadot Wiki a Polkadot központi tudástára. A Web3 Foundation által vezetett, közösségre összpontosító kezdeményezés célja, hogy a tanulással, fejlesztéssel, karbantartással kapcsolatos információkat naprakészen tartsa a Polkadot iránt érdeklődők számára.

A Wiki három fő részből áll:

- [**Tanulás**](../hamarosan/forditas-alatt.md)  (akik tanulni szeretnének a Polkadot-ról)
- [**Fejlesztése**](../hamarosan/forditas-alatt.md)  (akik feljeszteni szeretnének a Polkadot-on)
- [**Karbantartás**](../hamarosan/forditas-alatt.md) (akik karbantartásban vennének részt)

:::

## **Ki Gavin Wood?**

Amikor a Bitcoin 2009-ben indult,[ **Dr. Gavin James Wood**](https://www.gavwood.com/), a Bitcoin legnagyobb riválisának, az Ethereumnak a társalapítója, éppen a zene számítógépes vizualizációjában merült el, és egyáltalán nem volt érdeklődése a kriptovaluta körüli felhajtás iránt.

2013 végére már 15 évnyi[ nyílt forráskódú](https://assets.fireside.fm/file/fireside-images/podcasts/transcripts/d/d5b060aa-e9bf-4a5c-88ac-ccda4382716a/episodes/0/04f58c7d-7cf1-4fa3-b39f-79a530a627cf/transcript.txt) programozási tapasztalata volt *(és 33 éves korából 25 évet töltött kódolással)*, és találkozott[ **Jonny Bitcoin**](https://epicenter.tv/episodes/259/)nal és[ **Vitalik Buterin**](https://en.wikipedia.org/wiki/Vitalik%5FButerin)nal.

Jonny reménykedett abban, hogy Wood programozási tapasztalata segíti Buterint abban, hogy az Ethereumot egy white paper-ből egy teljesen működőképes blokklánccá alakítsa. Reménye beigazolódott, és néhány héten belül Wood csatlakozott Buterinhez, hogy Miamiban megírják az Ethereum PoC-1 verzióját, és bemutassák azt a[ 2014](https://fortune.com/2014/01/28/cash-menagerie-inside-the-bitcoin-confab/) januári Észak-Amerikai Bitcoin Konferencián.

A konferencia után hat hónappal a társalapítók[ Zugban, Svájcban](https://www.bloomberg.com/profile/company/1482193D:SW) találkoztak, hogy hivatalosan megalapítsák az Ethereumot. Ebben az időszakban Dr. Wood elfoglalt volt azon, hogy kidolgozza és lefektesse az alapokat a smart contract nyelv, a[ Solidity](https://en.wikipedia.org/wiki/Solidity), az első formális specifikációja bármelyik blokklánc protokollnak, a[ Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) írása és más hasonló blokkláncon alapuló infrastruktúrák formálása.

Két évvel az Ethereum vezette technológiai igazgatója szerepébe való belépése után Dr. Wood és az Ethereum korábbi munkatársa,[ **Dr. Jutta Steiner**](https://www.linkedin.com/in/jutta-steiner/), megalapították a **Parity Technologies** vállalatot, hogy fejlesszék az Ethereumhoz és más Web 3.0 hálózatokhoz a magja[ blokklánc infrastruktúráját](https://medium.com/paritytech). Wood víziója messze túlmutatott az átlagos kriptovalutákon, és a blokklánc infrastruktúrára támaszkodott a web decentralizálására, ami egy új technológiai fejlődés hullámát indította el. Így természetesen valaki, aki ifjúkorában saját[ bonyolult társasjátékok](https://boardgamegeek.com/boardgame/99385/milton-keynes)at tervezett, örömmel vetette bele magát a jelenlegi központosított node-alapú szoftveralkalmazás helyzet felforgatásába a[ **Parity Technologies**](https://github.com/paritytech/)és a[ **Web3 Foundation**](https://web3.foundation/) indításával.

## **Hogyan kezdődött a Polkadot Protokoll?**

A **Parity** eredeti neve "[EthCore](https://www.nasdaq.com/articles/ethcore-raises-financing-round-first-venture-capital-funded-ethereum-startup-2016-04-22)" volt, amely az Ethereum blokklánc ökoszisztémájának maginfrastruktúrájának fejlesztésére összpontosított, és olyan problémákat kezeltek, mint a használhatóság, teljesítmény és adatvédelem. Az EthCore-nak sikerült előbefektetési finanszírozást szereznie, és elkezdte fejleszteni a[ Parity Ethereum](https://www.parity.io/ethereum/)ot, egy ingyenes, nyílt forráskódú szoftvermegoldást, amely lehetővé teszi egyének számára, hogy egy node-ot futtassanak a nyilvános Ethereum hálózaton és bányásszanak Ethert.

Miközben ezen dolgozott, és várta az új Ethereum specifikáció kiadását, amely tartalmazta volna a[ sharding](https://www.parity.io/a-brief-summary-of-everything-substrate-polkadot/)ot, Dr. Wood elkezdett gondolkodni a sharding kihívásairól, amivel egy blokklánc szembekerülne. Attól a könnyed elmélkedéstől egy[ white paper](https://github.com/polkadot-io/polkadot-white-paper)\-ig, körülbelül négy hónapig tartott, hogy kialakítson egy víziót egy heterogén többláncú keretrendszerre, a[ Polkadot protokol](https://polkadot.network/whitepaper/)lra.

A protokoll[ 2017](https://www.youtube.com/watch?v=lIghiCmHz0U)\-ben került bemutatásra a Parity Technologies és a[ Web3 Foundation](https://polkadot.network/whitepaper/) koncentrált erőfeszítései után. A Polkadotot körülvevő technológia segíteni fogja a web decentralizációját, egy gondosan radikális ideológiát, amit Dr. Wood vezetett be, és nevezett el "Web 3.0"-nak. A Polkadotot követő további innovációk a[ Substrate](https://medium.com/polkadot-network/a-brief-summary-of-everything-substrate-and-polkadot-f1f21071499d), egy keretrendszer az egyéni blokkláncok hatékony építéséhez; és a "canary" hálózat, a[ Kusama](https://twitter.com/ParityTech/status/1202254433796677632), amely független a Polkadottól, de ugyanazon a szoftveren fut, mint egy tesztpálya a legkorszerűbb technológiáknak.

A Polkadot, a Parity, a Web 3.0, és a bonyolult világ a blokkláncban - Dr. Wood célja, hogy mindezeket összekapcsolja és megvalósítsa a "[konszenzuális Internet](https://blocking.net/17114/gavin-wood-cosmos-is-not-enough-to-trust-not-enough-to-expand/)" világának vízióját. Tekintve a Facebook és a Google uralmát a privát adataink felett, egy ilyen internetes fejlődés ésszerű célnak tűnik.

## **Alapítók**

### ![](https://lh7-us.googleusercontent.com/SYQXI-SMxUKU4S4NzQ5GRcnW3zfereLO0WFpjvN4oWCjgakBqTlqgZCGSBeq6yDLvu97uLIRFOKCSPpMYg-bQugU4LLyW9oTdcGNeBm5C1TWtsNRTAv-fVbacpo6Ck4gOCWojVZfLnv4Nfa05WaN6iI)

**Robert Habermeier**

### **Robert Habermeier** 
a Thiel Fellow tagja, kutatási és fejlesztési háttérrel a blokkláncok, elosztott rendszerek és kriptográfiában. Régóta tagja a Rust közösségnek, és azon dolgozott, hogy kihasználja a nyelv funkcióit, és nagyon párhuzamos és hatékony megoldásokat építsen.

### **Gavin Wood**

**Gavin Wood** az Ethereum társalapítója és technológiai igazgatója volt, ahol eredeti blokklánc technológiát kezdett kifejleszteni. Ő találta ki a blokklánc ipar alapvető komponenseit, beleértve a Solidity-t, a Proof-of-Authority konszenzust és a Whisper-t. A Parity-nél Gavin jelenleg az innovációt vezeti a Substrate és a Polkadot területén. Ő alkotta meg a Web 3.0 kifejezést 2014-ben, és jelenleg a Web3 Foundation elnökeként szolgál.

### **Peter Czaban**

**Peter Czaban** a Web3 Foundation technológiai igazgatója, ahol az elosztott technológiák következő generációjának fejlesztését támogatja. Mérnöki mesterdiplomát szerzett az Oxford Egyetemen, ahol mérnöki tudományt tanult, és a Bayesi gépi tanulásra összpontosított. Dolgozott védelmi, pénzügyi és adatelemző iparágakban, dolgozott hálózatokon, elosztott tudásbázisokon, kvantitatív árazási modelleken, gépi tanuláson és üzletfejlesztésen.

## **Mi is az a Polkadot?**

A Polkadot az első olyan Layer 0 *(L0)* blokklánc, amely megosztott biztonságot és biztonságos interoperabilitást nyújt a Layer 1 *(L1)* blokkláncok számára. Azokat a L1 blokkláncokat, amelyek a Polkadothoz kapcsolódnak, parachaineknek is nevezik, mivel tranzakcióikat a Polkadot párhuzamosan dolgozza fel.

A Polkadot kormányzása *(más néven Polkadot OpenGov) a* nyílt láncon belüli a döntések összehangolására szolgál, beleértve a treasury-ből *(kincstárból)* származó pénzeszközök elérését is.

A DOT token lehetővé teszi a Polkadot OpenGovban, a stake-elésben és a parachain crowdloansban való részvételt is.

A Polkadot absztrakciós és általános alkalmazási szintje lehetővé teszi, hogy a felhasználási esetekre specifikus alkalmazásokat építsünk, és ezek az alkalmazások biztonságosan kommunikáljanak egymással, kihasználva egymás értékeit, tulajdonságait. A web3-as jövő felépítéséhez a Polkadot az alkalmazások közötti bizalom nélküli együttműködés révén válik ideális ökoszisztémává.

## **Mihez kezdhetek a DOT-ommal?**

A DOT a Polkadot Network natív tokenje, és tranzakciós díjakra, stakelésre, kormányzásra, parachain slot megszerzésére, illetve a Polkadot számos kulcsfontosságú funkciójának engedélyezésére használható.

# Polkadot Requirements
<PolkadotInfo />


A DOT egy utility token a Polkadot OpenGov-ban. A DOT bonding *(lekötés)* az indítványok létrehozásának, támogatásának és a népszavazáson való szavazásnak a feltétele.

A DOT révén az olyan programokban való részvétel is lehetségessé válik, mint a **Thousand Validators Program**, erről egy későbbi cikkben lesz szó.

<Footer />

