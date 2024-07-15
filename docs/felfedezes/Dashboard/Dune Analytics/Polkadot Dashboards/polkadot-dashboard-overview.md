---
sidebar_position: 1
---
import Footer from '../../../../../components/footerMildzsu';

# Áttekintés
# Polkadot Dashboardok áttekintése 

A Polkadot a Web3 Foundation zászlóshajó projektje, amelynek célja, hogy egy teljesen decentralizált webet tegyen lehetővé, ahol a felhasználók irányítanak. Ez egy sharded multichain hálózat, ami azt jelenti, hogy sok tranzakciót képes párhuzamosan feldolgozni több láncon, javítva a skálázhatóságot.


## Kiemelt Dashboardok a Dune-on

Itt számos olyan dashboardot találsz, amelyek segítenek a Polkadot-hálózat adatainak megjelenítésében:

### Governance
Fedezd fel a Polkadot kormányzását a javaslatok benyújtását, a népszavazások eredményeit és a szavazási szokásokat részletező dashboardokon keresztül. Ezek az eszközök rávilágítanak a decentralizált döntéshozatali folyamatra és annak hatékonyságára.

- [Polkadot Governance Dashboard](https://dune.com/substrate/polkadot-gov): A Polkadot Governance Dashboard ("kormányzási dashboard") világos és tömör ábrázolást nyújt a hálózat kormányzási tevékenységeiről. Hasznos eszközként szolgál a közösség tagjai számára a treasury menedzsment, a népszavazási eredmények és a szavazási szokások megfigyeléséhez. A dashboard célja a közösségi szerepvállalás fokozása azáltal, hogy egyszerűsíti a kormányzati információkhoz való hozzáférést és elősegíti az átlátható döntéshozatali környezetet.
- Polkadot OpenGov népszavazások - Főoldal: Ez a dashboard a szavazni vágyók számára készült, lehetővé téve számukra, hogy gyorsan megértsék a Polkadot OpenGov aktuális tendenciáit, és folytassák a szavazást a Polkassembly-n. Ha további részleteket szeretnél látni az egyes népszavazásokról, kérjük, tekintsd meg a 
[Polkadot Opengov - Népszavazási szavazások elemzése](https://dune.com/substrate/polkadot-referendum) című részt.
- [Polkadot Opengov - Népszavazási szavazási elemzés](https://dune.com/substrate/polkadot-referendum):
: Részletes betekintés a népszavazás folyamatába és eredményeibe.

### Staking

Merülj el a staking ökoszisztémában a validátorok teljesítményét, a nominátorok hozzájárulásait és a staking megoszlását elemző dashboardok segítségével. A Polkadot staking mechanizmusának mélyebb megértéséhez és a staking stratégiák optimalizálásához látogass el a staking mechanizmus hivatalos dokumentációjába és a staking webes alkalmazás dokumentációjába.

- [Polkadot Staking Dashboard](https://dune.com/substrate/polkadot-staking): A staking dinamika és a hálózaton belüli eloszlás áttekintése.
- [Polkadot Staking Dashboard (Validátorok) ](https://dune.com/substrate/polkadot-staking-validators): A validátorok teljesítményének és statisztikáinak elemzése.
- Polkadot Staking Dashboard (Nominátorok): Betekintés a nominátorok teljesítményébe és jutalmazásába.
- Polkadot Staking Dashboard (Pool Member): Adatok a staking poolokról és az egyéni tagok tevékenységéről.
- Polkadot Staking Dashboard (Nomination Pool): A nomination poolok és teljesítményük részletes áttekintése.

### Egyéb részletek
Fedezd fel a Polkadot különböző aspektusait a Miscellaneous dashboardok segítségével, amelyek betekintést nyújtanak a DOT ordináriumokba és más egyedi hálózati tevékenységekbe. Ideális a szélesebb ökoszisztémában tapasztalható trendek feltárásához.
DOT ordináriumok: A DOT ordinális mérőszámok és trendek vizsgálata.

### Kulcsfontosságú táblázatok
A Polkadot-hálózat adatai több fontos táblázatba vannak rendezve:

- polkadot.balances
- polkadot.blocks
- polkadot.calls
- polkadot.events
- polkadot.extrinsics
- polkadot.transfers
- polkadot.traces
- polkadot.stakings

Itt kezdheted el a saját lekérdezéseid a Dune egyedi adatainak felhasználásával.

### Hasznos lekérdezések
Az alábbiakban olyan materializált lekérdezések találhatók a Polkadot számára, amelyek hasznosak lehetnek a saját grafikonok készítéséhez:

- Polkadot Referenda Total Voting Power (dune.substrate.result_polkadot_referenda_total_voting_power)
- Polkadot Staking Nomination Total (dune.substrate.result_polkadot_staking_nomination_total)
- Polkadot OpenGov Delegation (dune.substrate.result_polkadot_open_gov_delegation)
- Polkadot Vote Record (dune.substrate.result_polkadot_vote_record)
- Polkadot Proposals proposed (dune.substrate.result_polkadot_proposals_proposed)
- Polkadot Referenda Direct Vote (dune.substrate.result_polkadot_referenda_direct_vote)
- Polkadot Each Vote Record(dune.substrate.result_polkadot_each_vote_record)
- Polkdaot Referenda Origin Map(dune.substrate.result_polkdaot_referenda_origin_map)
- Polkadot Failed calls in batch(dune.substrate.result_polkadot_failed_calls_in_batch)
- polkadot_validator (dune.substrate.result_polkadot_validators)
- polkadot_nominationpools (dune.substrate.result_polkadot_nominationpools)
- polkadot_nominators (dune.substrate.result_polkadot_nominators)
- polkadot_poolmembers (dune.substrate.result_polkadot_poolmembers)
- polkadot_identity (dune.substrate.result_polkadot_identity)


### Kezdő lépések a lekérdezésekkel
Az Unique-ból származó adatok lekérdezésének megkezdéséhez használd az említett materializált lekérdezéseket. A következő DuneSQL-lekérdezéseket használhatod példaként:

```sql title="Polkadot Staking APR (Normalized)" showLineNumbers
SELECT
  AVG(validator_normalized_staking_apr) AS staking_apr,
  era,
  DATE_FORMAT(ts, '%Y-%m-%d') AS era_ts
FROM
  dune.substrate.result_polkadot_validators
WHERE
  validator_is_active = TRUE
  AND validator_commission <> 1
GROUP BY
  era,
  ts
HAVING
  AVG(validator_normalized_staking_apr) > 0
ORDER BY
  era DESC;
```


A lekérdezés eredménye:

<iframe src="https://dune.com/embeds/3303109/5531719/" height="350" width="100%"></iframe>


Vizualizált eredmény:

<iframe src="https://dune.com/embeds/3303109/5531727/" height="350" width="100%"></iframe>



:::info DUNESQL HIVATKOZÁS
A DuneSQL-ről további információkat a DuneSQL Cheatsheet és a [DuneSQL hivatalos dokumentációja](https://docs.dune.com/query-engine/Functions-and-operators/index) tartalmaz.
:::


<Footer />