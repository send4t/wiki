---
sidebar_position: 4
---

## Polkadot Vault (korábban Parity Signer)

:::info A Parity Signer márkanévváltása Polkadot Vault-ra

A megújult Polkadot Vault applikáció iOS és Android eszközökön is elérhető. Az összes verzió forráskódja letölthető az alábbi weboldalról: [GitHub repo](https://github.com/paritytech/parity-signer/releases).

A Polkadot Vault alkalmazás egy air-gapped, azaz hideg tárolási (cold storage) megoldás minden felhasználó számára, beleértve a fejlesztőket is. Lásd a Ledger eszközök.
:::
:::caution Okostelefon kompatibilitás a Polkadot Vault-tal

Ne feledd, hogy bár a Vault alkalmazás elérhető a régi okostelefonokhoz, a telefon hardware-ének megfelelően különböző verziók kerülnek telepítésre. Például az olyan okostelefonokra, mint az iPhone 6, a Parity Signer *(a Vault alkalmazás régi márkaneve)* korlátozott képességekkel fog települni. Nem lesz elérhető a napló vagy nem lesz figyelmeztetés, ha a telefon csatlakozott az internethez, miközben nem használod az alkalmazást. Továbbá nem lehetséges a metaadat-frissítés, és nincs lehetőség új hálózatok hozzáadására sem. Ez nem lenne olyan biztonságos, mint az alkalmazás legújabb verziója. Javasoljuk, hogy a legújabb Polkadot Vault alkalmazással kompatibilis okostelefonokat használj.
:::

A [Polkadot Vault](https://www.parity.io/technologies/signer) *(korábban Parity Signer)* egy cold storage megoldás, amely lehetővé teszi, hogy egy telefont repülőgépes üzemmódban air-gapped walletként használj. A Vault alkalmazás technikailag nem wallet, mivel nem teszi lehetővé az átutalást. Ez sokkal inkább egy key-chain eszköz, amely lehetővé teszi a fiókok létrehozását, kezelését és visszaállítását.

A Vault alkalmazás gyárilag tartalmazza a Polkadot, Kusama és Westend hálózat lánc-specifikációit. A metaadatok frissítése [QR kód](https://metadata.parity.io/#/polkadot)on keresztül lehetséges. Lehetőség van [más Substrate-alapú láncok hozzáadására is, és azok metaadat-frissítésére is](https://wiki.polkadot.network/docs/polkadot-vault#add-chains), továbbá az alkalmazás lehetővé teszi, hogy QR-kódokon keresztül biztonságosan aláírd az [extrinsiceket](https://wiki.polkadot.network/docs/learn-transactions) anélkül, hogy a privát kulcsokat kitennéd az internetre.

### **Vault Vs Ledger**

A Polkadot Vault és a [Ledger](https://wiki.polkadot.network/docs/ledger) cold storage *(hideg tárolási)* megoldások, mivel a Vault alkalmazásban vagy a Ledger eszközön létrehozott fiókok privát kulcsai nem a Te számítógépeden, vagy úgy általában internetkapcsolattal rendelkező eszközön tárolódnak. A két megoldás azonban különbözik egymástól, és javasoljuk, hogy használatukról a saját igényeid alapján hozd meg a végső döntést.

| **Ledger**                                                                                                                                                                                                                                                                                                              | **Polkadot Vault**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Offline használatra és biztonságra tervezett hardware. A francia kiberbiztonsági ügynökség, az [ANSSI](https://www.ssi.gouv.fr/en/cybersecurity-in-france/the-national-cybersecurity-agency-of-france/) által tanúsítva.                                                                                                | A hardwaret nem arra tervezték, hogy offline maradjon. A felhasználóknak ki kell kapcsolnia minden bejövő és kimenő kapcsolatot (hálózat, WiFi, Bluetooth).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| A hardware ellenáll a side-channel támadásoknak a [Secure Element](https://www.ledger.com/academy/security/the-secure-element-whistanding-security-attacks/)en keresztül. A biztonsági elem feltörés esetén megsemmisíti magát.                                                                                         | Bár nincs vezetékes kapcsolat, a külső támadások lehetségesek. Biztonsági elem nélkül a telefon feltörhető és a kulcsok hozzáférhetővé válnak a telefon memóriájában.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Egyetlen mnemonic seed phrase-ből származtatott accountok.                                                                                                                                                                                                                                                              | Egy mnemonic *(emlékeztető)* minden egyes accounthoz vagy egy mnemonic több accounthoz-[account származtatással](https://wiki.polkadot.network/docs/learn-account-advanced#derivation-paths) vagy az alapértelmezett [Substrate címformátumon keresztül](https://wiki.polkadot.network/docs/learn-account-advanced#address-format). [Ebben a cikkben kaphatsz segítséget](https://support.polkadot.network/support/solutions/articles/65000103707-can-i-use-the-same-account-on-polkadot-kusama-and-parachains-#Should-I-use-the-same-account-across-different-chains?) ahhoz, hogy igényeid alapján ugyanazt a fiókot, vagy különböző fiókokat lenne érdemesebb használnod. |
| Egyszerű firmware- és alkalmazásfrissítés a Ledger Live alkalmazáson keresztül                                                                                                                                                                                                                                          | Az alkalmazásnak a telepítés után nem szabad az internethez csatlakoznod, így a telefonra telepített verziót nem szabad közvetlenül frissíteni. [Az alkalmazás frissítéséhez](https://wiki.polkadot.network/docs/polkadot-vault#update-the-vault-app) a felhasználóknak vissza kell állítaniuk a telefon gyári állapotát, és az összes fiókot vissza kell állítaniuk a seed phrase-ken keresztül. Az egyes láncok metaadatainak frissítését a QR-kódos forráson keresztül kell elvégezni.                                                                                                                                                                                    |
| Jelenleg nem minden parachain támogatott                                                                                                                                                                                                                                                                                | A felhasználók az összes parachaint hozzáadhatják egy harmadik féltől származó szolgáltatón keresztül, vagy ha rendelkeznek a wss végponttal, és tudják [hogyan kell kinyerni a lánc specifikációit és metaadatait.](https://wiki.polkadot.network/docs/polkadot-vault#add-chains)                                                                                                                                                                                                                                                                                                                                                                                           |
| A Ledger Live alkalmazás frissítései néha elmaradnak a lánc frissítéseitől, ami azt eredményezi, hogy a felhasználók csak akkor tudnak tranzakciókat végrehajtani, ha [fejlesztői verziókat telepítenek](https://wiki.polkadot.network/docs/ledger#install-the-developer-release) *(csak haladó felhasználók számára).* | A metaadat-frissítések mindig telepíthetők, amint megjelentek, akár a harmadik fél szolgáltatón keresztül, akár manuálisan. Ebben az esetben a telepítési folyamat a parancssorral való munkavégzés ismeretét igényli.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### **Fiók létrehozása és importálása**

Új fiókot közvetlenül a Vault alkalmazásban hozhatsz létre *(Add Key Set-> Add new Key Set)*. Ezáltal egy új mnemonic seed phrase-t hozol létre az alkalmazásban. Alternatívaként új fiókot is importálhatsz az alkalmazásban egy kompatibilis fiókgenerálási sémával máshol generált seed phrase-el. Például rendelkezhetsz egy air-gapped laptoppal, amelyen telepítve van a Subkey eszköz, és ott létrehozhatsz egy új fiókot. Ennek a fióknak a seed phrase-e importálható a Vault alkalmazásba *(Add Key Set-> Recover Key Set)*.

A Polkadot Vault használatával történő fiók létrehozásra vonatkozó útmutatásért tekintsd meg [ezt a tutorialt](https://youtu.be/hgv1R9mPEXw?t=120), és [látogass el erre a cikkre](https://support.polkadot.network/support/solutions/articles/65000180512-how-to-create-an-account-in-parity-signer).

:::info Info  
Egy fiók importálása egy kiterjesztésbe nem importálja annak privát kulcsát. Csak a nyilvános kulcs *(public key)* kerül importálásra, és a privát kulcsot birtokló, air-gapped telefonnal kell aláírnod
:::

### **Fiók visszaállítása a Polkadot Vault-on**

A Polkadot Vault alkalmazásban lévő fiók visszaállításának módját [ezen a videós oktatóvideón](https://youtu.be/hgv1R9mPEXw?t=407) és [ezen a support oldalon találod](https://support.polkadot.network/support/solutions/articles/65000167901-how-to-restore-an-account-in-parity-signer).

### **Extrinsics aláírása**

:::caution
Mindig ellenőrizd a metaadatok frissítését!
:::

Mielőtt a Polkadot Vault alkalmazással aláírod az extrinsiceket, mindig ellenőrizd a metaadatok frissítését. Ez a videó bemutató elmagyarázza, hogyan kell ezt megtenni.

Ne feledd a tranzakciók aláírása előtt mindig ellenőrizni a metaadatok frissítését. A tranzakciók aláírásának módját [ebben a cikkben](https://github.com/w3f/polkadot-wiki/pull/4600/files#diff-5d4d0a286cdc7b1d016ee155f9694dbcddc13f5264490fc1a960c38000baca4d), az új láncok egyszerű hozzáadásáról és a metaadatok frissítéséről pedig [ebben a cikkben olvashatsz](https://support.polkadot.network/support/solutions/articles/65000184128-polkadot-vault-how-to-add-a-new-chain-and-update-the-metadata) a Vault alkalmazás segítségével.

A tranzakciók aláírása a Vault alkalmazással a következőképpen történik:

* A wallet vagy a böngészőbővítmény egy QR-kódot fog mutatni, amely kódolja az aláírandó információ adatait.
* Miután a QR-kódot beolvastad a Vault alkalmazással, dekódolt információkat kapsz arról, hogy mit fogsz aláírni. Győződj meg róla, hogy az információ megegyezik azzal, amit eredetileg alá akartál írni. Ha valami nem tűnik helyesnek, ne írd alá! További információkért [nézd meg ezt az oldalt](https://wiki.polkadot.network/docs/transaction-attacks#corrupted-qr-code-parity-signer), és [lépj kapcsolatba a Polkadot supporttal](https://support.polkadot.network/support/home).
* Ha a Vault alkalmazás által mutatott adatok helyesek, akkor a QR-kódot (aláírást) a laptop kamerája elé mutatva aláírhatod a tranzakciót.

:::info A QR kódok aláírás specifikusak

Vedd figyelembe, hogy a QR-kódok aláírás-specifikusak. Ha valaki véletlenül hozzáfér az egyik tranzakciód QR-kódos aláírásához, a jövőbeli tranzakciókat nem lehet ugyanazzal a QR-kóddal aláírni, és nem lehet csak ezzel a QR-kóddal megtudni a fiók privát kulcsát.
:::
### **A Vault alkalmazás frissítése**

:::caution Fontos!
A mnemonic seed phrase-edet tartsd mindig biztonságban és elérhető helyen!
:::

A Polkadot Vault alkalmazás biztonságos frissítéséhez kövesd az itt található utasításokat.  
Röviden:

* Készíts biztonsági másolatot a fiókjaidról *(Backup key Set-> írd le a mnemonic seed phrase-t)*
* A Vault alkalmazás állítsd gyári alaphelyzetbe *(Beállítások-> Összes adat törlése)*
* A telefont állítsd gyári alaphelyzetbe
* Telepítsd újra a Vault alkalmazást
* Kapcsolj offline üzemmódba *(repülőgép üzemmód, nincs WiFi)*
* Állítsd helyre a fiókokat *(Add Key Set-> Recover Key Set)*

### **Biztonsági megjegyzések**

:::info Távolítsd el a SIM-kártyádat és felejtsd el a hálózatokat

A telefon nem kívánt internetkapcsolatának elkerülése érdekében távolítsd el a SIM-kártyát, állítsd vissza az eSIM-beállításokat, és felejtsd el a hozzáadott WiFi-hálózatokat. Így a nem kívánt internetkapcsolat egyetlen lehetősége vagy a mobilhálózaton, vagy a WiFi-kapcsolaton keresztül valósulhat meg.
:::

A Vault alkalmazás rendelkezik egy Naplóval, amely az összes elvégzett tevékenységről tájékoztat téged. Fontos, hogy jelöld meg az utolsó műveletet, amit elvégzett, hogy a következő alkalommal, amikor az alkalmazást használod, végigmehessen egy biztonsági ellenőrzés.

Emellett a Vault alkalmazás mindig megmondja, ha a telefon (még akkor is, ha rövid ideig) csatlakozott az internethez. Nem felismert kapcsolat esetén ajánlott:

* Legyen biztonsági másolatod a fiókokról (azaz győződj meg róla, hogy megvannak a mnemonic seed phrase-k)
* Kövesd a lépéseket a [Vault alkalmazás frissítéséhez](https://wiki.polkadot.network/docs/polkadot-vault#update-the-vault-app)
* Ha már offline vagy, hozz létre egy új fiókot a Vault alkalmazásban
* Importáld a kompromittálódott fiókokat, és utald át az eszközeidet az új, nem kompromittált fiókra

:::caution A Vault app-ban lehetőség van a privát kulcsok exportálására

Ha egy fiók privát kulcsa exportálásra kerül a Vault alkalmazásból, a nyilvános kulcs „hot”-nak lesz jelölve, és a következő üzenet jelenik meg *This key is marked hot because its root private key has been exported.*
:::

Fontold meg a privát kulcs exportálását, ha air-gapped telefont váltasz. Ha a privát kulcs exportálása mellett döntesz, kerüld el a következőket:

* Ne exportáld a privát kulcsot olyan eszközre, amely csatlakozik az internethez, mivel a kulcs már nem lesz „hideg”.
* Ne nyomtass privát kulcsot QR-kódokat internetkapcsolaton keresztül.

### **Láncok hozzáadása**

A Vault alkalmazás tartalmazza a Polkadot, Kusama és Westend láncok alapértelmezett specifikációit. Lehetőség van QR-kódon keresztül további láncok hozzáadására is, és a metaadataik frissítésére saját QR-kódok generálásával a [Parity által aláírt](https://metadata.parity.io/#/polkadot) metaadatportálhoz hasonló metaadatportálon.

Alternatívaként egy harmadik féltől származó szolgáltatót is használhatsz láncok és metaadataik hozzáadásához.

A részletes lépéseket [ebben a cikkben találod](https://support.polkadot.network/support/solutions/articles/65000184128-polkadot-vault-how-to-add-a-new-chain-and-update-the-metadata). Ha ezt a megközelítést választod, olyan szolgáltatót válassz, amelyben megbízol.

