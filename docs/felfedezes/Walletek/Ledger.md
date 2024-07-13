---
sidebar_position: 3
---
import Footer from '../../../components/footerMildzsu';

## A Polkadot Ledger alkalmazások használata

A Polkadot [Ledger](https://www.ledger.com/) alkalmazás kompatibilis a Ledger Nano S, Nano S Plus és a Nano X készülékekkel. A Ledger eszközök olyan hardware walletek, amelyek a privát kulcsot egy fizikai eszközön tartják biztonságban. A privát kulcsok akkor sem szivárognak ki, ha USB-n keresztül csatlakoztatod a Ledgert a számítógéphez.

A Ledger eszközök egyben hierarchikus determinisztikus tárcák (HD walletek) is:

* *A determinisztikus azt jelenti, hogy csak egy seed phrase generálja a különböző blokklánchálózatok összes accountját.*
* *A hierarchikus azt jelenti, hogy a számlák különböző célokra szolgáló, fa-szerű struktúrában vannak létrehozva.*

A Ledger eszközöket blokklánc-specifikus alkalmazásokkal lehet megtámogatni. Harmadik fél szolgáltatók általában készítenek olyan alkalmazásokat, amelyek lehetővé teszik a felhasználó számára, hogy biztonságosan tranzakciókat bonyolítson a blokklánc-hálózaton.

A Polkadot Ledger alkalmazás lehetővé teszi a Polkadot natív tokenjének, a DOT-nak a kezelését. Támogatja a hálózat legtöbb tranzakciótípusát, beleértve tömeges tranzakciókat is a Utility palettáról.

### **A Ledger alkalmazások nem feltétlenül támogatják az összes tranzakciót**

A támogatott tranzakciók listáját a Ledger Polkadot App specifikációiban találod. Egyes tranzakciók csak egy adott alkalmazásverzióban támogatottak, mások pedig egyik verzióban sem.

| **Eszköz**  | **Platform**        | **Akkumulátor** | **Appok**      | **Biztonság**                         | **Státusz** |
| ----------- | ------------------- | --------------- | -------------- | ------------------------------------- | ----------- |
| Nano S      | PC                  | Nem             | lite, XL       | Certified Secure Element *(CC EAL5+)* | Kifutott    |
| Nano S Plus | PC                  | Nem             | lite, XL, plus | Certified Secure Element *(CC EAL6+)* | Rendelhető  |
| Nano X      | PC, Mobil-Bluetooth | Igen            | lite, XL, plus | Certified Secure Element *(CC EAL5+)* | Rendelhető  |
| Stax        | PC, Mobil-Bluetooth | Igen            | Dedikált       | Certified Secure Element *(CC EAL6+)* | Rendelhető  |

### **Követelmények**

**Csak Ledger Nano S felhasználók számára**

A Polkadot Ledger App lite verziója, amely gyárilag elérhető a Nano S készülékre, korlátozott funkcionalitással rendelkezik. A Ledger Nano S-t már nem gyártják, és korlátozott memóriával rendelkezik, amely éppen megfelelő a Polkadot Ledger App XL verziójának befogadására, amely több funkcionalitást biztosít a felhasználóinak.

**Ha egy Nano S-t használsz az XL verzióval, akkor nem fogsz tudni:**

* Telepíteni bármely más Ledger alkalmazást az eszközre
* Polkadot-fiókot hozzáadni a Ledger Live alkalmazáshoz,

viszont hozzáadhatod őket a Ledger eszközöket támogató [walletekhez és bővítményekhez.](https://wiki.polkadot.network/docs/wallets-and-extensions)

Bővebb információkat a Ledger eszközök összehasonlításáról, [itt](https://shop.ledger.com/pages/hardware-wallets-comparison) találsz.

**Íme egy lista arról, hogy mire lesz szükséged a Polkadot és a Ledger használata előtt:**

* Ledger Nano X vagy Nano S Plus *(ez utóbbi ajánlott a Polkadot Ledger app helyigénye és funkciói miatt)*
* *A* [*Ledger Live*](https://www.ledger.com/ledger-live) *telepített és naprakész.*
* A Polkadot Ledger App legújabb firmware-je telepítve *(mindig ellenőrizd a frissítéseket a Ledger Live-ban a „Manager” fül alatt, és engedélyezned kell a hozzáférést az eszközzel).*
* Chromium-alapú webböngésző, ha böngészőbővítményt használsz.

## **Polkadot Ledger App**

A Ledger-eszközök blokklánc-specifikus alkalmazásokkal is felszerelhetők. Harmadik felek általában ilyen alkalmazásokat fejlesztenek, amelyek lehetővé teszik a felhasználók számára, hogy biztonságosan tranzakciókat bonyolítsanak le a blokklánc hálózaton. A Polkadot Ledger alkalmazásokat a [Zondax](https://zondax.ch/) fejleszti, és [itt](https://github.com/Zondax/ledger-polkadot) érhetőek el. A Polkadot Ledger alkalmazások lehetővé teszik a Polkadot natív tokenjének, a DOT-nak és az alkalmazás verziójától függően több másnak a kezelését.

:::info Info  
A Ledger alkalmazások nem feltétlenül támogatják az összes tranzakciót
:::

A támogatott tranzakciók listáját a Ledger Polkadot App specifikációjában találja. Egyes tranzakciók csak egy adott alkalmazásverzióban támogatottak, mások pedig egyik verzióban sem támogatottak. Például a jelölési poolhoz való csatlakozás csak az **XL** verzióval lehetséges, a **lite** **verzióval** nem.

A Polkadot Ledger alkalmazásnak jelenleg három verziója létezik, amelyeket az alábbiakban ismertetünk.

| Alkalmazás verzió | Support    |
| ----------------- | ---------- |
| Lite              | Folyamatos |
| XL                | Folyamatos |
| Nano SP/X - Stax  | Folyamatos |

Ezeket a Ledger alkalmazásokat minden futásidejű frissítéskor frissíteni kell.

## Polkadot Ledger Generic App

:::info FEJLESZTÉS ALATT:
 frissítésekért és információkért ellenőrizd [ezt](https://substrate.beryx.io/new%5Fpolkadot%5Fledger%5Fapp) a weboldalt.
:::

A Polkadot Ledger Generic App lehetővé teszi, hogy a Ledger eszközt a Relay Chain-en és a parachainen használd anélkül, hogy a runtime frissítései befolyásolnák. A cél az, hogy egyetlen alkalmazást biztosítsunk a teljes Polkadot ökoszisztéma számára a biztonság veszélyeztetése nélkül. Ez az új alkalmazás a Clear Signinggel is számolni fog, lehetővé téve, hogy egy megbízható kijelzőn láthasd, amit aláírsz. Így elkerülhető a hamis tranzakciók aláírása. [Nézd meg ezt az oldalt](https://wiki.polkadot.network/docs/transaction-attacks), hogy megértsd a tranzakciók aláírása előtti ellenőrzésének fontosságát.

### **A Polkadot Ledger Generic alkalmazás a következő előnyökkel jár:**

* Az innováció felgyorsítása: Lehetővé teszi a csapatok számára az innovációt és az új funkciók fejlesztését a Relay Chainek, a parachainek és a jelenlegi/jövőbeli felhasználók számára.
* Hálózati elfogadás: A Polkadot ökoszisztéma zökkenőmentesebb és felhasználóbarátabb elfogadásának elősegítése.
* Innováció a biztonság veszélyeztetése nélkül: Az új Polkadot alkalmazás a legmagasabb biztonsági szabványokkal rendelkezik, hogy a felhasználók biztonságban tudhassák eszközeiket.
* Fejlesztési hatékonyság: Az alkalmazás segít a fejlesztőcsapatoknak költségmegtakarítást elérni az alkalmazás birtoklásával és karbantartásával.

A Polkadot Ledger Generic alkalmazást támogatni fogja a Ledger Live, a [Nova Wallet](https://novawallet.io/), a [Talisman](https://www.talisman.xyz/) és a [Subwallet](https://www.subwallet.app/).

A Polkadot Generic Appról további információkat a [Ledger GYIK](https://support.ledger.com/hc/en-us/articles/17550211746845-New-Polkadot-app-FAQ?docs=true%20:dot) és a [Zondax beryx oldalán találsz](https://substrate.beryx.io/new%5Fpolkadot%5Fledger%5Fapp).

**Ledger Live használata**

A Polkadot és a Ledger Live használatának módját [ebben a cikkben találod](https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live).

**Ledger Fejlesztői kiadás**
:::caution Figyelem
Ez a rész csak a fejlesztők számára készült. Javasoljuk, hogy az alkalmazást a Ledger Live-ból telepítsd!
:::

**Miért lehet szükséged a fejlesztői kiadásra?**

A Polkadot ökoszisztémához a Ledger alkalmazásokat a [Zondax](https://zondax.ch/) fejleszti. Amikor a Ledger-alkalmazások új funkciókkal bővülnek, azokat tesztelési célokra ún. fejlesztői kiadásban teszik elérhetővé. A sikeres ellenőrzés és felülvizsgálat után az alkalmazások a [Ledger Live](https://www.ledger.com/ledger-live) segítségével letölthetők és telepíthetők. Mivel a Ledger számára időbe telik a kiadás auditálása és felülvizsgálata, előfordulhat, hogy az alkalmazásfrissítési lehetőség nem lesz elérhető a Ledger Live-on, amikor az új runtime-ot a hálózatra telepítik. Ha ez megtörténik, a felhasználók nem használhatják a Ledger eszközöket tranzakciók aláírására. Amennyiben nincs lehetőséged várni néhány napot, amíg az alkalmazás átmegy a Ledger ellenőrzésén, akkor a fejlesztői kiadást a [Zondax GitHub-repoban](https://github.com/Zondax/ledger-polkadot/releases) közzétett legújabb verzióval telepítheted.

**Telepítsd a fejlesztői kiadást**

:::info Info  
*Tekin*tsd meg [ezt tutorialt](https://youtu.be/4SyVQrlXZ%5FQ) a fejlesztői kiadás telepítésének megismeréséhez.
:::

Jelenleg a fejlesztői kiadás csak a Nano S és S plus készülékekre telepíthető, Nano X-re nem.

* A fejlesztői verzió telepítéséhez győződj meg róla, hogy a legújabb pip verziót használod, és kövesd az alábbi lépéseket:
* Telepítsd a *ledgerblue*\-t a python3 -m pip install ledgerblue paranccsal.
* Töltsd le a fejlesztői kiadást a Zondax GitHub oldaláról. A fájl neve installer\_nanos\_[plus.sh](http://plus.sh) vagy hasonló lesz, a Ledger eszközödtől függően.
* Keresd meg a letöltött shell scriptet, és tedd futtathatóvá a installer\_nanos\_[plus.sh](http://plus.sh) parancs beírásával.
* Most már használhatod a ./installer\_nanos\_[plus.sh](http://plus.sh) \--help parancsot a rendelkezésre álló opciók megjelenítéséhez *(kép)*

![](https://lh7-us.googleusercontent.com/Lt8YuPZOvrJNfOMT-e5AoSujhDh7yZ0mp3n8DE5boJmIZhilEWhGVkcBdYByBuvkmA96GY8L7mGPG4bZDw0fD3VcFF5oPgN-wPdM8bn247O8SLpoy5mX29gv9yTbK1bv6uT7A7tbKVIRp3PsmXe7_PQ)

* Csatlakoztasd a Ledger Nano-t (ebben az esetben a Nano S Plus-t) a számítógéphez, add meg a PIN-kódot, és futtasd a ./installer\_nanos\_[plus.sh](http://plus.sh) load parancsot. Görgess a jobb gombbal, amíg meg nem jelenik a „Allow unsafe manager”, bal és jobb gombbal adj megerősítést a Ledgeren. A rendszer kérni fogja, hogy erősítsd meg az alkalmazás eltávolításának és ezt követően az újabb verzió telepítésének műveletét. Miután mindkét műveletet megerősítetted, a shell script telepíti a verziót a készülékre. A telepítés után a PIN-kódot be kell írnod a készülék használatához.
* Ha vissza szeretnéd állítani a verziót a stabil verzióra, menj a Ledger Live-ra. Az alkalmazás automatikusan felismeri a fejlesztői kiadást, és lehetőséget ad a korábbi stabil verzió telepítésére.

<Footer />