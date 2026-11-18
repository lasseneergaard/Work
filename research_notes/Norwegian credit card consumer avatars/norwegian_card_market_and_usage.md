# Norwegian credit card market: ownership, use and revolving debt (official/institutional data, 2019–Nov 2026)

Research date: 2026-11-18. Scope: Norway only.

How sources were read (important for the report writer): WebFetch could not resolve any host in this session (DNS failure on every allowlisted domain, retried once). All sources marked **VERIFIED** were downloaded in full with curl through the session proxy and read in the original (HTML/PDF text, including data embedded in the page). Sources marked **SNIPPET-ONLY** were seen only in search-result summaries and were not read in the original. These files were blocked by the proxy and NOT read: the Gjeldsregisteret historical key-figures XLSX (media.gjeldsregisteret.com), Forbrukerrådet's Bytteundersøkelsen PDFs (storage02.forbrukerradet.no), SIFO reports on oda.oslomet.no, and the current Finanstilsynet circular PDF (404 on the www host, 403 on the bare host). Derived ratios marked "(researcher calculation)" are plain arithmetic on the cited verified figures, not estimates.

Outcome labels used throughout: **[OWN]** ownership/access (holding a card/limit), **[USE]** transaction use, **[REV]** revolving/interest-bearing borrowing, **[ACQ]** comparing/acquiring new cards. Scope labels: **CC** = credit-card specific (in the register "rammekreditt" = credit cards plus other unsecured revolving credit), **UNSEC** = all unsecured/consumer credit, **HH** = broader household finance.

## Q1. Gjeldsregisteret register totals: limits, utilised credit, interest-bearing vs non-interest-bearing, persons, trend since 2019

### Takeaway
On 18 Nov 2026 Gjeldsregisteret showed NOK 288.4 bn in total credit card limits, of which NOK 79.4 bn was used. NOK 42.3 bn of that was interest-bearing and NOK 37.0 bn non-interest-bearing, so about 53% of card balances were interest-bearing. That share was 74% in Dec 2019. Since 2019, interest-bearing card debt has fallen by roughly a third in nominal terms (NOK 59.9 bn → about 42–44 bn), while non-interest-bearing card balances have grown by roughly 80% (NOK 20.7 bn → 37.0–37.2 bn). In other words, more people pay with credit cards but fewer people revolve. Totals are free to view; breakdowns by gender, age and county are only sold as subscription products.

### Cited Findings
**Live register counters (S1).** Gjeldsregisteret AS, homepage key figures. [VERIFIED; register, near-full coverage of the 150 reporting lenders; data timestamp `registeredDateAndTime` 2026-11-18T10:55:32Z, read 2026-11-18; CC unless stated]. Source: [Gjeldsregisteret – forside](https://www.gjeldsregisteret.com/)
- Total credit card limits ("Ramme kredittkort"): NOK 288 409 252 497 [OWN, CC]
- Used credit card limit ("Benyttet ramme kredittkort"): NOK 79 384 121 459 [USE+REV, CC]
- Interest-bearing ("Rentebærende"): NOK 42 336 614 755 [REV, CC]
- Non-interest-bearing ("Ikke rentebærende"): NOK 37 047 506 704 [USE, CC]
- The two balances add up exactly to the used limit, which confirms both are card figures.
- Total interest-bearing unsecured debt ("Samlet usikret gjeld"): NOK 179 325 952 602 [REV, UNSEC]
- Persons ("Antall personer"): 3 534 092 [OWN, UNSEC]
- Reporting lenders ("Finansforetak"): 150
- The displayed values are the page data's "NoCoBorrower" fields, i.e. a debt shared by co-borrowers is not counted twice.
- The page data also holds unadjusted values: limits NOK 291 100 620 974; used NOK 81 238 704 253; interest-bearing card balance NOK 43 996 980 507; non-interest-bearing NOK 37 241 723 746; total interest-bearing unsecured NOK 189 860 900 174; persons 3 537 364.
- Limitation: the "Antall personer" count covers everyone with any registered unsecured debt or credit (loans and cards, including unused limits). It is NOT a count of credit card holders. The site's disclaimer adds that loans secured through a third party (e.g. guarantees) are included.

**Researcher calculations on S1 (adjusted / unadjusted):**
- Interest-bearing share of card balances: 53.3% / 54.2% [REV, CC]
- Share of total card limits in use: 27.5% / 27.9% [USE, CC]
- Unused card limits: NOK 209.0 bn / 209.9 bn, i.e. about 72.5% of limits unused [OWN, CC]
- Interest-bearing card debt as a share of all interest-bearing unsecured debt: 23.6% / 23.2% [REV]

**Year-end trend 2019–2022 (S2).** Official monthly key figures, Sept 2019–Jan 2023. [VERIFIED; register; values rounded to NOK 0.1 bn; unadjusted for co-borrowers, so compare with the unadjusted 2026 values.] Source: [Gjeldsregisteret – Nøkkeltall](https://www.gjeldsregisteret.com/nokkeltall)
- Note on the archive: some block headers in it are mislabelled. Only values that agree across the Nov→Dec and Dec→Jan blocks are used below.

| Year-end | Card limits (NOK bn) | Interest-bearing (NOK bn) | Non-interest-bearing (NOK bn) | Persons registered | Persons with interest-bearing balance (any unsecured type) |
|---|---|---|---|---|---|
| Dec 2019 | 263.7 | 59.9 | 20.7 | 3 231 694 | 1 267 055 |
| Dec 2020 | 244.3 | 54.2 | 18.9 | 3 193 885 | 1 177 954 |
| Dec 2021 | 231.8 | 49.6 | 20.8 | 3 193 631 | 1 136 476 |
| Dec 2022 | 231.9 | 46.8 | 23.5 | 3 189 012 | 1 095 661 |
| 18 Nov 2026 (S1) | 291.1 | 44.0 | 37.2 | 3 537 364 | n/a |

- Co-borrower-adjusted equivalents: Dec 2019 limits 260.8, interest-bearing 58.3, non-interest-bearing 20.5, persons 3 152 796, persons with interest-bearing balance 1 210 496. Dec 2022: 227.7, 44.2, 23.3, 3 181 395 and 1 083 264. [S2]
- The earliest month in the archive, Sept 2019, shows card limits of NOK 270.0 bn, interest-bearing NOK 58.9 bn and non-interest-bearing NOK 22.7 bn (unadjusted). [S2](https://www.gjeldsregisteret.com/nokkeltall)
- Interest-bearing share of card balances (researcher calculation on the table): 74.3% (2019), 74.1% (2020), 70.5% (2021), 66.6% (2022), 54.2% (Nov 2026, unadjusted). Share of limits in use: 30.6%, 29.9%, 30.4%, 30.3% and 27.9%. [REV/USE, CC]
- Nominal rate on "Rammekreditt" (register): Dec 2019 average 18.12%, median 19.80%; Dec 2022 average 19.62%, median 20.49%. [S2](https://www.gjeldsregisteret.com/nokkeltall) [REV, CC]
- Count of all unsecured loans and credits in the register: 8 895 102 (Dec 2019) and 7 322 796 (Dec 2022). These are agreements of every type, not cards. [S2](https://www.gjeldsregisteret.com/nokkeltall)

**Finanstilsynet, "Rapport om utviklingen i forbruksgjeld, april 2025" (S11).** Published 5 May 2025; data per 31 Mar 2025 from Gjeldsregisteret AS; 156 reporting firms. [VERIFIED; register] Source: [Finanstilsynet PDF](https://www.finanstilsynet.no/4990ef/contentassets/aaf5f43e56c8450b97ba4a50190679eb/rapport-om-utviklingen-i-forbruksgjeld-april-2025.pdf)
- Total used unsecured credit was NOK 172.7 bn, up 6.8% y/y. [UNSEC]
- Rammekreditter (credit cards and other unsecured revolving credit) grew 4.9% y/y. [CC]
- Non-interest-bearing debt grew 13.6% y/y. Finanstilsynet says this consists "i hovedsak av kredittkortgjeld som ikke har forfalt" (mainly credit card debt not yet due). [USE]
- 80.4% of total used unsecured credit was interest-bearing. [UNSEC]

**Norges Bank, Bankplassen (S5): "Dyrtid og høye renter har ikke ført til større forbrukslån"**, Vatne & Solheim, 27 Feb 2026. [VERIFIED; Gjeldsregisteret micro-data; data to end-2025] Source: [Norges Bank Bankplassen 2026](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- The volume of interest-bearing rammelån ("vanligvis kredittkortgjeld") has been stable despite more credit card use. [REV, CC]
- Non-interest-bearing rammelån, i.e. typical card spending before the due date, has risen steadily. [USE, CC]

**Norges Bank, Finansiell stabilitet 2026/2 (S8).** Web report with data to 6 Nov 2026; exact publication date not captured. [VERIFIED] Source: [Norges Bank FS 2026/2](https://www.norges-bank.no/aktuelt/publikasjoner/Finansiell-stabilitet---rapport/2026-2-finansiell-stabilitet/nettrapport-2026-2-finansiell-stabilitet/)
- Interest-bearing credit card debt has been falling since 2022 despite more card use. [REV, CC]
- Consumer debt is just under 4% of total household debt. [UNSEC]

**Norges Bank, Bankplassen (S6): "Ny vekst i forbruksgjelden"**, Solheim & Vatne, 11 Mar 2024. [VERIFIED; definition used: unsecured loans with a rate above 8%] Source: [Norges Bank Bankplassen 2024](https://www.norges-bank.no/bankplassen/arkiv/2024/ny-vekst-i-forbruksgjelden/)
- In 2023, rammelån fell 3.3%, while non-interest-bearing rammelån grew 22.8%. [CC]

**Finans Norge (S18): "Sunnere kredittkortbruk i 2022"**, 16 Jan 2023. [VERIFIED; data from Norsk Gjeldsinformasjon, the second debt register] Source: [Finans Norge 2023](https://www.finansnorge.no/artikler/2023/q1/sunnere-kredittkortbruk-i-2022)
- Credit card debt (rammekreditt) rose NOK 1.8 bn (2.7%) during 2022.
- Norsk Gjeldsinformasjon says people have become better at paying off card debt before interest starts.

**Snippet-only items:**
- **N1.** An NTB press release (Norsk Gjeldsinformasjon) reportedly says interest-bearing card debt rose NOK 1.2 bn in August 2026. [SNIPPET-ONLY: [NTB](https://kommunikasjon.ntb.no/pressemelding/19123004/forbruksgjelden-okte-med-07-mrd-i-oktober?lang=no); the title refers to October, date not verified]
- **N6.** Finanstilsynet's inkasso report of 30 Jun 2025 reportedly states that the half-yearly "Utviklingen i forbruksgjeld" report is no longer produced. [SNIPPET-ONLY: [Finanstilsynet inkasso 30.06.2025](https://www.finanstilsynet.no/contentassets/c471d92e7bfe480486c2a01b5aabe19a/rapport-om-inkassotall-30-06-2025.pdf)] No 2026 edition was found.

### Inferences
- The structural shift is clear. Card balances in use (about NOK 80 bn) are now almost evenly split between interest-bearing and not-yet-due amounts. In 2019 the split was roughly three to one. Using credit cards to pay and using them to borrow are diverging.
- Total card limits, NOK 288–291 bn, are at or above their Sept 2019 level (NOK 270 bn). This comes after a trough of about NOK 232 bn in 2021–2022. Access to card credit has re-expanded, but about 72% of it is unused.
- The jump in persons registered, from about 3.19 m (2022) to 3.53 m (Nov 2026), cannot be broken down from public data. It may reflect new card or loan holders, BNPL-type rammekreditt, or reporting changes. SSB notes that rammekreditt includes Klarna-type instalment products ([SSB 2026](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/4-av-10-har-rentebaerende-forbruksgjeld)), so "rammekreditt" is broader than bank credit cards.

### Gaps
- Gjeldsregisteret's public figures do not include the number of persons holding a credit card, the number of card agreements, average or median card balances, or breakdowns by age, gender, county or municipality. Those breakdowns are subscription products ("Landsoversikt", "Nasjonal Gjeldsdemografi"). [S3: [Landsoversikt](https://www.gjeldsregisteret.com/landsoversikt), [Nasjonal Gjeldsdemografi](https://www.gjeldsregisteret.com/nasjonal-gjeldsdemografi)]
- Monthly figures from Feb 2023 to Oct 2026 are in the historical XLSX, which the proxy blocked. Year-end 2023, 2024 and 2025 register values for card limits and balances were therefore not obtained from the register itself.
- Norsk Gjeldsinformasjon's own statistics (norskgjeld.no) were not reachable.

## Q2. Ownership/access [OWN]: who holds cards or limits, by age, gender, income, household type, region

### Takeaway
No official source publishes the share of Norwegians who hold a credit card, broken down by demographics. The closest official proxies are the following:
- Norges Bank counts 4.459 million international credit cards issued in Norway at end-2025. The number has been falling every year.
- Gjeldsregisteret counts about 3.53 million persons with any registered unsecured credit or loan.
- Norges Bank's register micro-data on the share of persons over 15 holding a card balance by age is a lower bound on holding, since card holders with a zero balance are not counted.

### Cited Findings
**Norges Bank, "Kunderetta betalingsformidling 2025" (S7).** Statistics compiled by SSB for Norges Bank; data per 31 Dec; publication date in 2026 not captured. [VERIFIED; card counts, not persons; CC] Source: [Norges Bank PDF](https://www.norges-bank.no/contentassets/37aa558585244e9cb45aea0d062fc52d/betalingsformidling_2025.pdf)
- International credit cards (thousands): 4 861 (2022), 4 666 (2023), 4 605 (2024), 4 459 (2025). Credit cards were 36% of all 12.4 m Norwegian payment cards at end-2025.
- Card functions with credit (thousands): 6 344 (2019), 5 296 (2020), 5 061 (2021), 4 865 (2022), 4 680 (2023), 4 618 (2024), 4 470 (2025).
  - The 2019 figure includes 529 thousand national (domestic-scheme) credit cards, which had all but disappeared by 2022.
- International charge (faktureringskort) functions: 328 thousand (2019), 181 thousand (2025).

**Gjeldsregisteret (S1).** 3 534 092 persons with registered unsecured credit (incl. unused card limits) on 18 Nov 2026, versus 3 189 012 at Dec 2022 [S2]. [VERIFIED; UNSEC proxy for access] Sources: [Gjeldsregisteret](https://www.gjeldsregisteret.com/), [Nøkkeltall](https://www.gjeldsregisteret.com/nokkeltall)

**Norges Bank, Bankplassen 2026 (S5).** Gjeldsregisteret micro-data; persons over 15. [VERIFIED; CC; these are holders of a balance, a lower bound on holding] Source: [Norges Bank 2026](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- The share with non-interest-bearing credit card debt (a balance not yet due) rose from 37% in 2022 to "nesten 48 prosent" in 2025.
- The rise was "særlig stor blant 25–34-åringer".
- Among 45–54-year-olds, "nesten 60 prosent" had non-interest-bearing card debt at end-2025.

**Norges Bank, Bankplassen 2024 (S6).** Register data, end-2023. [VERIFIED; UNSEC] Source: [Norges Bank 2024](https://www.norges-bank.no/bankplassen/arkiv/2024/ny-vekst-i-forbruksgjelden/)
- The register held information on "knapt 5 millioner personer"; 52% men and 48% home owners.
- This does not match Gjeldsregisteret's public count of about 3.2 m in 2022–2023. The micro-dataset probably includes persons with zero balances or historical records; the definition was not stated.
- Home owners dominate the group that only has credit card loans. Most people with nedbetalingslån do not own a home.

**SSB, "4 av 10 har rentebærende forbruksgjeld" (S9).** Published 16 Oct 2026; reference year 2024; end-of-year Gjeldsregisteret extract linked to the income and wealth register; persons in student households excluded. [VERIFIED; household level; UNSEC] Source: [SSB 2026](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/4-av-10-har-rentebaerende-forbruksgjeld)
- "Mer enn 7 av 10 personer tilhører en husholdning som har noe i forbruksgjeld (både rentebærende og ikke-rentebærende gjeld)".

**Snippet-only items:**
- **N3.** Kredittkortlisten (a commercial comparison site) reportedly claims over 3.4 m persons had rammekreditt in 2025 and that about 60% of the population owns a credit card. These are the site's own estimates, not measurements. [SNIPPET-ONLY: [Kredittkortlisten](https://www.kredittkortlisten.no/artikler/oppsummering-av-2025/)]

### Inferences
- The number of cards (4.46 m) has fallen since 2022 while card spending has risen (see Q3). This suggests consolidation into fewer cards per holder, consistent with utlånsforskriften counting full limits (Q5). This is an inference; no source states it.
- Age 45–54 is the peak "active card balance" group: almost 60% are transactors with a not-yet-due balance and 29% revolve (Q4). Age 25–34 is the fastest-growing group of card users.

### Gaps
- No official or institutional measure was found of the share of persons holding a credit card or limit by age, gender, income, household type or region. This includes young adults aged 18–29.
- No official data was found on the number of cards per person, age at first credit card, or first-time versus experienced holders.
- No county or regional public breakdown exists (Gjeldsregisteret's is subscription-only). A Kortio "regional gjeld" page exists but is commercial and was not read.
- Norges Bank's 2026 figure data by age group, for example 18–24, is only given in charts. The exact values for groups other than 25–34 and 45–54 were not extractable from the text.

## Q3. Transaction use [USE]: share of card payments made with credit cards vs debit/BankAxept; online and foreign use

### Takeaway
In 2025, Norwegian cards with a credit function accounted for 13.5% of card transactions and about 21% of card payment value (researcher calculation from Norges Bank tables). Both shares are up from roughly 10–12% and 16–20% in 2019–2021. The average credit card payment (NOK 633) is much larger than a BankAxept payment (NOK 365). Norges Bank does not split online, foreign or mobile use by credit versus debit.

### Cited Findings
**Norges Bank, "Kunderetta betalingsformidling 2025" (S7).** Payment statistics compiled by SSB; full-population transaction data. [VERIFIED; USE; CC] Source: [Norges Bank PDF](https://www.norges-bank.no/contentassets/37aa558585244e9cb45aea0d062fc52d/betalingsformidling_2025.pdf)

Transactions and value using Norwegian cards with a credit function:

| Year | Credit-function transactions (m) | All card-function transactions (m) | Credit value (NOK bn) | All card value (NOK bn) |
|---|---|---|---|---|
| 2019 | 308.7 | 2 594.9 | 194.8 | 986.8 |
| 2020 | 267.4 | 2 444.3 | 159.3 | 936.3 |
| 2021 | 263.3 | 2 575.4 | 159.4 | 1 000.8 |
| 2022 | 323.9 | 2 890.2 | 202.1 | 1 130.6 |
| 2023 | 362.2 | 3 018.6 | 229.1 | 1 201.9 |
| 2024 | 417.4 | 3 176.6 | 262.6 | 1 289.0 |
| 2025 | 449.2 | 3 327.2 | 285.4 | 1 374.7 |

- Credit-function share (researcher calculation) by number of transactions: 11.9% (2019), 10.9% (2020), 10.2% (2021), 11.2% (2022), 12.0% (2023), 13.1% (2024), 13.5% (2025).
- By value: 19.7% (2019), 17.0%, 15.9%, 17.9%, 19.1%, 20.4%, 20.8% (2025).
- Source anomaly: in the 2025 table, the international-scheme credit sub-line (451.1 m) exceeds the credit-function total (449.2 m).

BankAxept, international cards and transaction sizes (S7):
- BankAxept had 1 517 m transactions in 2025, 46% of transactions with Norwegian cards (49% in 2024). At physical terminals in Norway its share was 70% (74% in 2024).
- International cards' share of transactions rose from 34% (2020) to 54% (2025). Of the 1 807 m international-card transactions in 2025, debit cards accounted for "nær tre av fire". Credit cards made up most of the rest.
- BankAxept cannot be used for regular online purchases.
- Average transaction size in 2025: BankAxept NOK 365, international debit NOK 385, international credit NOK 633.

Online, foreign and mobile use (S7; not split by credit/debit):
- Online: 940 m card payments in 2025 (+12%), worth NOK 438 bn; 64% went to Norwegian websites.
- Abroad: 528 m card transactions in or to other countries; 189 m at physical outlets abroad and 334 m to foreign websites; total value NOK 299 bn.
- Mobile: 27% of terminal payments at physical outlets were made by mobile in 2025 (12% in 2024).
- Survey, March 2026, broader definition: 37% of payments at physical outlets were made by mobile (30% in March 2025).
- Last online purchase (survey): 37% paid directly by card, 37% by mobile payment, 22% by invoice.
- Survey method: telephone interviews (lower age limit 15) and internet surveys (lower age limit 18); samples representative by gender, age and residence.

**Norges Bank, Bankplassen 2026 (S5).** [VERIFIED] Source: [Norges Bank 2026](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- The 2024→2025 rise in people with not-yet-due card balances "kan blant annet ha sammenheng med at DNB og S-banken i desember 2024 tillot bruk av Apple Pay med sine kredittkort".

**Snippet-only items:**
- **N9.** Svea (commercial) reportedly says credit cards were involved in about 1 in 3 in-store payments in 2026. This conflicts with Norges Bank's 13.5% transaction share; the measurement bases likely differ. [SNIPPET-ONLY: search summary, URL not given]
- **N2.** Kortio (commercial) cites the same 13.5% credit share, consistent with the researcher calculation above. [SNIPPET-ONLY: [Kortio](https://kortio.no/undersokelser/kredittkortbruk-i-norge/)]

### Inferences
- Credit-function card spending grew about 46% in value from 2019 to 2025 (NOK 194.8 bn → 285.4 bn). Over the same period, interest-bearing card balances fell (Q1). This supports a "transactor" trend.
- The higher average ticket on credit cards (NOK 633 versus NOK 365–385) suggests cards are used for larger purchases. Norway publishes no purchase-category split, so this is inference only.

### Gaps
- No official split of online, foreign, mobile-wallet or recurring payments by credit versus debit card.
- No official purchase-category data for credit card use (groceries, travel, large purchases, unexpected expenses, subscriptions). The only lead is a SIFO-2019 statement (snippet-only, Q7).
- No breakdown of transaction use by age, gender, income or region.

## Q4. Revolving borrowing [REV]: interest-bearing balances, who revolves, balance sizes, burden and default

### Takeaway
About 19% of persons over 15 had interest-bearing credit card debt in 2025, down from 21% in 2022. The rate is highest at age 45–54 (29%). The median interest-bearing card balance is stable at about NOK 10,000 in all age groups, while the largest balances have shrunk. Burdensome unsecured debt is concentrated among men living alone, non-home-owners with little financial wealth, and immigrants. Defaulted card debt in collection was NOK 19.5 bn at mid-2026, of which 44.6% was accrued interest.

### Cited Findings
**Norges Bank, Bankplassen 2026 (S5).** Register micro-data, persons over 15, 2019–2025. [VERIFIED; CC unless noted] Source: [Norges Bank 2026](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- Share with interest-bearing credit card loans: 21% (2022) → 19% (2025). Highest among 45–54-year-olds (29%).
- The median outstanding interest-bearing card loan, among those who have one, is "stabilt rundt 10 000 kroner i alle aldersgrupper". The 95th percentile "har falt markant".
- The median pre-due-date card draw has "nesten doblet seg siden 2019, men ligger fortsatt godt under 10 000 kroner". Among people over 35, 5% have more than NOK 60,000 outstanding. These figures relate to non-interest-bearing balances.
- For comparison [UNSEC]: the share with an unsecured instalment loan (nedbetalingslån) rose from nearly 7% (2022) to nearly 9% (end-2025), with the highest share at age 35–44 (just over 14%). The median nedbetalingslån fell nearly 30% in real terms from 2019 to 2025.
- Credit management firms (buyers of defaulted debt) held 13% of interest-bearing rammelån in 2020 and about 24% at end-2025. The increase for card debt came in 2025. They held over 30% of all outstanding consumer debt at end-2025.
- Limitation: the figure captions for Figures 3/4 and 6/7 appear swapped relative to the text. The numbers above follow the text.

**Norges Bank, Bankplassen 2024 (S6).** End-2023 register data. [VERIFIED; UNSEC unless noted] Source: [Norges Bank 2024](https://www.norges-bank.no/bankplassen/arkiv/2024/ny-vekst-i-forbruksgjelden/)
- Nearly 95,000 persons converted rammelån to nedbetalingslån during 2023, i.e. card debt refinanced into instalment loans. [REV, CC]
- Average rate on rammelån (rate above 8%) rose from 18.4% to 19.0% during 2023. [CC]
- About 45,000 persons had consumer debt over NOK 500,000; 71% were men and 25% home owners.
- The group with interest-bearing debt under NOK 50,000 has a slight female majority and 58% home owners.
- Consumer debt is highest at age 39–52.
- The highest income quintile (from NOK 689,000) holds the most consumer debt, but groups 3–5 differ little. The two highest income groups had the strongest growth in 2023.

**SSB, "4 av 10 har rentebærende forbruksgjeld" (S9).** Published 16 Oct 2026; reference end-2024; register-linked; excludes student households and nedbetalingslån at or below 8%. [VERIFIED; text plus embedded chart data; UNSEC unless noted] Source: [SSB 2026](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/4-av-10-har-rentebaerende-forbruksgjeld)

Overall:
- Households' interest-bearing unsecured debt totalled NOK 113 bn in 2024.
- "Nær 4 av 10" persons belong to a household with such debt.

"Tyngende usikret gjeld" (burdensome unsecured debt) is defined as household interest-bearing unsecured debt of at least 25% of gross household income and at least NOK 3,000.
- 5.1% of persons (278,700) had such debt in 2024, down from 7.1% (372,100) in 2020.

Share with burdensome unsecured debt, by group (2024):
- By household type: men living alone 8.3%; women living alone 3.8%; not living alone 4.9%.
- By age of main income earner: under 35: 4.4%; 35–44: 6.0%; 45–66: 5.9%; 67 and over: 2.7%.
- By immigrant background of main earner: immigrants 7.8%; rest of population 4.4%. Immigrants are about 20% of the population but hold 25% (NOK 28.6 bn) of interest-bearing consumer debt.
- By housing and financial wealth:
  - Non-home-owners: 10.88% overall; 17.79% with low financial wealth; 4.98% otherwise.
  - Home owners: 3.18% overall; 12.24% with low financial wealth; 2.02% otherwise.
  - Non-owners with low wealth and other debt: 25%.

Burdened households:
- 140,000 of just over 2.6 m households.
- Average burdensome debt about NOK 550,000, of which consumer loans are 70% and credit cards 30%. [CC share]
- Households with under NOK 150,000: debt "nokså likt fordelt mellom forbrukslån og kredittkortgjeld", typically 2–3 loans, many living alone on benefits.

Average interest-bearing credit card debt among burdened households, by size of total interest-bearing unsecured debt (2024, chart data) [CC]:

| Total interest-bearing unsecured debt | Average card debt (NOK) | Average number of interest-bearing unsecured loans |
|---|---|---|
| Under 100k | 33,300 | 2.1 |
| 100–150k | 52,400 | 3.1 |
| 150–300k | 68,800 | 3.9 |
| 300–500k | 98,400 | 5.2 |
| 500k–1m | 166,000 | 7.3 |
| 1–1.5m | 314,100 | 10.5 |
| 1.5m and over | 935,500 | 13.7 |

- Student households: interest-bearing unsecured debt NOK 401 m; 2.1% burdensome. [UNSEC]

**SSB, "Folk med lavinntekt tynges oftere av forbruksgjeld" (S10).** Published 27 Nov 2024. [VERIFIED; HH] Source: [SSB 2024](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/folk-med-lavinntekt-tynges-oftere-av-forbruksgjeld)
- From the EU-SILC survey: around 20% of the low-income group reported credit card debt and consumer loans as burdensome in 2021–2023, versus 10–14% in 2018–2020. [CC+UNSEC, self-report]
- Quoting Gjeldsregisteret, the Dec 2022 median nominal rate was 12.9% on nedbetalingslån and 20.5% on rammekreditt. [CC]

**OsloMet/SIFO (S16): "Gjeldsregisteret hjelper bankene, men øker presset på låntakere".** Published 21 Apr 2026, updated 12 Nov 2026; summarises SIFO register-linked analysis for 2021–2025. [VERIFIED news article; underlying report not read; UNSEC] Source: [OsloMet](https://www.oslomet.no/forskning/forskningsnyheter/gjeldsregisteret-hjelper-bankene-men-oker-presset-pa-lantakere)
- About 25% of the adult population had interest-bearing unsecured credit in 2025, relatively stable over 2021–2025.
- Only 16% had about the same unsecured debt in 2025 as in 2023; nearly half had increased it.
- Over 50,000 persons have more than NOK 500,000 in unsecured credit.
- In 2025, 171,407 persons (4%) were under wage garnishment (utleggstrekk); 69% of them had interest-bearing credit.
- The probability of garnishment is 37.7% if interest-bearing credit exceeds NOK 500,000. Having such debt means ten times the probability of garnishment.

**Finanstilsynet, "Inkassostatistikk for første halvår 2026" (S12).** Page dated 13 Oct 2026; data 30 Jun 2026; 63 collection firms. [VERIFIED; CC and UNSEC] Source: [Finanstilsynet inkasso H1 2026](https://www.finanstilsynet.no/analyser-og-statistikk/statistikk-for-inkasso/2026/html/inkassostatistikk-for-forste-halvar-2026/)
- Credit card collection cases against consumers: 280,851. Principal NOK 8 892 223 149, accrued interest NOK 8 691 699 230, total claims NOK 19 465 356 582. Accrued interest is 44.6% of credit card claims.
- Consumer loans for comparison: 410,794 cases, total claims NOK 45.66 bn.
- Consumer-debt collection cases totalled 691,645 (+4.1% y/y). Defaulted consumer debt (principal plus interest) was NOK 61.1 bn.
- Age shares of defaulted consumer debt: over 60: 27.7% (highest); 18–29: 3.5% (lowest).

**Finanstilsynet April 2025 report (S11).** End-2024 data. [VERIFIED; UNSEC] Source: [Finanstilsynet 2025](https://www.finanstilsynet.no/4990ef/contentassets/aaf5f43e56c8450b97ba4a50190679eb/rapport-om-utviklingen-i-forbruksgjeld-april-2025.pdf)
- Ages 18–29, 30–39 and 40–49 have a larger share of consumer-debt collection cases than of consumer debt.
- The majority of used credit belongs to ages 30–70, especially 40–60.

### Inferences
- The typical revolver carries a small balance (median about NOK 10,000) and is middle-aged (45–54). The distressed tail looks different: men living alone, renters with little wealth, and immigrants, usually with several loans and a larger consumer-loan component.
- Revolving is migrating from cards to instalment loans (the 95,000 conversions in 2023; the falling interest-bearing card share). At the same time, defaulted card debt held by debt buyers is rising (13% → 24%). This suggests the remaining interest-bearing card stock contains a growing share of non-performing debt. This is inference.

### Gaps
- No official count of full-balance repayers versus revolvers among card holders. The only proxies are the shares of persons with non-interest-bearing (nearly 48%) and interest-bearing (19%) card balances, persons over 15, 2025.
- No credit-card-specific breakdown of revolving by gender, income or region from public sources. SSB and SIFO figures are for all unsecured debt.
- No transition data, e.g. how long balances stay interest-bearing or how many people become revolvers each year.

## Q5. Regulation and Finanstilsynet material: utlånsforskriften (full limits count), gjeldsinformasjonsloven, finansavtaleloven 2023

### Takeaway
Under utlånsforskriften (in force 1 Jan 2021; consumer-loan rules since Feb 2019), affordability must be assessed as if total credit limits were fully used. Credit cards are exempt only when the customer's total card limits are NOK 30,000 or less; this threshold applies from 31 Dec 2024 and was NOK 25,000 before. Finansavtaleloven (in force 1 Jan 2023) requires a thorough creditworthiness check before any "vesentlig økning" (significant increase) of a credit limit, and a refusal when repayment capacity is insufficient. The debt registers (law in force Nov 2017; registers live since July 2019) cover unsecured debt only. Expanding them to secured debt was still at the proposal stage in 2025.

### Cited Findings
**Lovdata, Utlånsforskriften FOR-2020-12-09-2648 (S13).** In force 01.01.2021; last amended FOR-2024-12-04-2925 with effect from 31.12.2024. [VERIFIED; legal text] Source: [Lovdata utlånsforskriften](https://lovdata.no/dokument/SF/forskrift/2020-12-09-2648)
- **§ 3:** "Forskriften gjelder ikke ved innvilgelse av kredittkort dersom kundens samlede kredittkortrammer ikke vil overstige 30 000 kroner." Also exempt: interest-free and cost-free unsecured credit.
- **§ 5:** affordability must withstand a 3 percentage-point rate rise, with a minimum assessment rate of 7%. "For rammekreditter skal full utnyttelse av samlede rammer ligge til grunn for vurderingen."
- **§ 6:** total debt may not exceed five times annual income. The text itself does not mention limits.
- **§ 13:** for rammekreditter, the monthly minimum payment, based on used credit, must repay the credit within 5 years as a serial loan.
- **§ 15:** a 5% per-quarter flexibility quota; "For rammekreditter skal innvilget ramme legges til grunn".

**Finanstilsynet circular "Utlånspraksis for boliglån og forbrukslån" (2021) (S14).** Now marked "gjelder ikke lenger"; replaced by "Praksis for lån til forbrukere" (2022), whose PDF could not be retrieved. [VERIFIED, historic] Source: [Finanstilsynet rundskriv](https://www.finanstilsynet.no/nyhetsarkiv/rundskriv/2021/utlanspraksis-for-boliglan-og-forbrukslan)
- The earlier exemption threshold was NOK 25,000.
- Finansavtaleloven's creditworthiness duties apply regardless of the regulation.
- "Rammekreditter skal medregnes med totalt innvilget kredittbeløp" (in the flexibility-quota context).

**Snippet-only items:**
- **N7.** Finanstilsynet guidance reportedly says unused drawing rights on rammelån, "herunder kredittkort", are added when calculating debt-to-income (gjeldsgrad). [SNIPPET-ONLY: [Finanstilsynet PDF](https://finanstilsynet.no/4a74c0/contentassets/adff29a42bcc4584acd7883a73e9eef1/krav-til-finansforetakenes-utlanspraksis-for-forbrukslan.pdf)]
- **N8.** A Finanstilsynet inspection report on BN Bank reportedly found the bank's credit card application form split stated debt by a fixed template, and asked it to collect complete information. [SNIPPET-ONLY: [Finanstilsynet tilsynsrapport BN Bank](https://www.finanstilsynet.no/contentassets/db29a85013ca40c5ad338582ec5e71ed/tilsynsrapport---bn-bank-asa.pdf)]
- Quarterly reports on use of the flexibility quotas reportedly show no firm exceeded the permitted deviation share for consumer loans in Q2 2026 (sample of 25 banks and finance companies). [SNIPPET-ONLY: [Finanstilsynet Q2 2026](https://www.finanstilsynet.no/nyhetsarkiv/nyheter/2026/bruk-av-fleksibilitetskvotene-i-utlansforskriften-i-andre-kvartal-2026/)]

**Lovdata, Finansavtaleloven LOV-2020-12-18-146 (S15).** In force 01.01.2023; amended 2026 (LOV-2026-02-06-2 from 01.08.2026; LOV-2026-06-19-45 from 01.07.2026; the content of those amendments was not reviewed). [VERIFIED] Source: [Lovdata finansavtaleloven](https://lovdata.no/dokument/NL/lov/2020-12-18-146)
- **§ 5-2(1):** a thorough creditworthiness assessment is required before a credit agreement, "herunder avtale om en vesentlig økning av tilgjengelig kredittbeløp".
- **§ 5-2(2):** information may be obtained from gjeldsinformasjonsforetak (debt registers).
- **§ 5-4:** credit may be granted to a consumer only if it is likely they can meet the obligations.

**Gjeldsregisteret, "Utvidelse av Gjeldsregisteret" (S4).** [VERIFIED] Source: [Gjeldsregisteret – Utvidelse](https://www.gjeldsregisteret.com/utvidelse-av-gjeldsregisteret)
- Timeline: gjeldsinformasjonsloven and regulation in force 11.2017; Gjeldsregisteret launched 07.2019.
- The register still contains only unsecured debt.
- A new proposal to add secured (housing and car) debt was sent on hearing, with a deadline of 3 July 2025. The proposition timeline was "Høsten 2025?" and the other milestones are undated.

**Effects (official commentary):**
- Norges Bank: "Etter at forbruksgjeld ble inkludert i utlånsreguleringen i 2019 falt omfanget av denne gjelden i flere år." [S5](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- SSB: the 2019–2022 decline in households with unsecured debt "kan skyldes at det ved innføringen av Gjeldsregisteret AS har blitt vanskeligere å ta opp forbrukslån". [S10](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/folk-med-lavinntekt-tynges-oftere-av-forbruksgjeld)
- SIFO informants report that unserious lenders have exited and marketing of unsecured credit is less aggressive.
- SIFO also finds that loan brokers use consent-based register access (typically valid 12 months) in sales of new loans. [S16](https://www.oslomet.no/forskning/forskningsnyheter/gjeldsregisteret-hjelper-bankene-men-oker-presset-pa-lantakere)
- Register data show total card limits fell from NOK 270.0 bn (Sept 2019) to NOK 231.8 bn (Dec 2021). [S2](https://www.gjeldsregisteret.com/nokkeltall)

### Inferences
- Because the full limit counts against mortgage affordability (§ 5) and, per the guidance snippet, debt-to-income, unused cards carry a real cost for mortgage applicants. This plausibly explains the falling card count and the 2019–2021 contraction in limits. The causal link is inference and is consistent with the official commentary above.
- Raising the exemption to NOK 30,000 from 31 Dec 2024 eases small single-card applications.

### Gaps
- No 2025/2026 Finanstilsynet survey of consumer-credit lending practice ("utlånsundersøkelse" or "forbrukslånsundersøkelse") was found. The current circular "Praksis for lån til forbrukere" could not be retrieved, so the debt-to-income treatment of unused limits is confirmed only by snippet (N7).
- No quantitative evaluation of utlånsforskriften's effect specifically on credit cards was found.

## Q6. Market structure: issuers, concentration, rates, fees

### Takeaway
No official source publishes issuer-level market shares for Norwegian credit cards. Official data show the following:
- Consumer-loan banks are the largest holders of revolving credit.
- Debt buyers hold about 24% of interest-bearing revolving credit.
- 150 lenders report to Gjeldsregisteret, down from 162–166 in 2019–2022.
- Visa and Mastercard are the main schemes.

Nominal card rates in the register were about 18–20.5% in 2019–2023. The average annual fee for an international credit card is about NOK 23 for non-programme customers and about NOK 4 for programme customers (1 Jan 2026).

### Cited Findings
**Market structure (S6, S5, S1, S2, S11, S7):**
- Forbrukslånsbanker (consumer-loan banks) are "størst både på nedbetalingslån og rammelån" (end-2023). [S6](https://www.norges-bank.no/bankplassen/arkiv/2024/ny-vekst-i-forbruksgjelden/) [CC]
- Credit management firms held about 24% of interest-bearing rammelån at end-2025 (13% in 2020). [S5](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)
- Norwegian and cross-border portfolio purchasers owned 17.5% and 6.9% of all interest-bearing register debt, respectively (31 Mar 2025). [S11](https://www.finanstilsynet.no/4990ef/contentassets/aaf5f43e56c8450b97ba4a50190679eb/rapport-om-utviklingen-i-forbruksgjeld-april-2025.pdf)
- Reporting lenders: 162 (Dec 2019), 166 (Dec 2022), 156 (Mar 2025), 150 (Nov 2026). [S2](https://www.gjeldsregisteret.com/nokkeltall), [S11], [S1](https://www.gjeldsregisteret.com/)
- "Dei fleste internasjonale kredittkorta er utferda av Visa og Mastercard." [S7](https://www.norges-bank.no/contentassets/37aa558585244e9cb45aea0d062fc52d/betalingsformidling_2025.pdf)
- DNB and S-banken enabled Apple Pay on their credit cards in Dec 2024. [S5]

**Rates [REV, CC]:**
- Register "Rammekreditt" nominal rate: average 18.12% and median 19.80% (Dec 2019); average 19.62% and median 20.49% (Dec 2022). [S2](https://www.gjeldsregisteret.com/nokkeltall)
- Norges Bank: the average rammelån rate (above 8%) went from 18.4% to 19.0% during 2023. [S6]

**Fees (S7).** Norges Bank, weighted average annual fee for international credit cards per 1 Jan, based on Finansportalen data, using each bank's median card price since 2017, weighted by banks' transaction market shares. [VERIFIED] Source: [Norges Bank PDF](https://www.norges-bank.no/contentassets/37aa558585244e9cb45aea0d062fc52d/betalingsformidling_2025.pdf)

| Year (1 Jan) | Non-programme customers (NOK) | Programme customers (NOK) |
|---|---|---|
| 2021 | 21.30 | 23.60 |
| 2022 | 26.80 | 12.50 |
| 2023 | 28.20 | 31.90 |
| 2024 | 18.20 | 4.00 |
| 2025 | 22.20 | 3.10 |
| 2026 | 23.10 | 4.20 |

**Snippet-only items:**
- **N2.** Kortio (commercial) reportedly gives an average card rate of 19.7% in Aug 2026, and notes that the latest official average (19.7%) is from Finanstilsynet data per 30 Sept 2023. [SNIPPET-ONLY: [Kortio](https://kortio.no/undersokelser/effekten-av-renteokninger-pa-kredittkortgjeld/)]
- Kortio and Kredittkortlisten name Bank Norwegian, DNB and others, but no market-share figures were found. [SNIPPET-ONLY]

### Inferences
- Annual fees are negligible on average, so cards compete on interest-free period, benefits and limits rather than price. This is inference; no source on benefit competition was found.

### Gaps
- No official issuer market shares or concentration measures (HHI, top-5 share) for credit cards.
- No official current (2025–2026) average nominal or effective credit card rate. Effective rates (effektiv rente) by card are not in any official dataset found.

## Q7. Comparing/acquiring cards [ACQ], and the other specific questions (age at first card, young adults, cards per person, repayer vs revolver, purchase categories, insurance/travel benefits)

### Takeaway
Official and institutional data on card comparison, acquisition and switching, age at first card, cards per person, purchase categories and use of insurance or travel benefits are essentially absent. The few relevant items are snippet-only or unreachable.

### Cited Findings
- **Young adults (UNSEC):**
  - Defaulted consumer debt: the 18–29 age group held the lowest share, 3.5% (30 Jun 2026). [VERIFIED: [Finanstilsynet inkasso H1 2026](https://www.finanstilsynet.no/analyser-og-statistikk/statistikk-for-inkasso/2026/html/inkassostatistikk-for-forste-halvar-2026/)]
  - Collection cases: 18–29 has a larger share of consumer-debt collection cases than of consumer debt. [VERIFIED: [Finanstilsynet 2025](https://www.finanstilsynet.no/4990ef/contentassets/aaf5f43e56c8450b97ba4a50190679eb/rapport-om-utviklingen-i-forbruksgjeld-april-2025.pdf)]
  - Growth: the relatively strongest consumer-debt growth was in the youngest age group (start of 2022 to start of 2024). [VERIFIED: [Norges Bank 2024](https://www.norges-bank.no/bankplassen/arkiv/2024/ny-vekst-i-forbruksgjelden/)]
- **Repayers vs revolvers:** nearly 48% of persons over 15 had a not-yet-due card balance and 19% had an interest-bearing card balance in 2025. [VERIFIED: [Norges Bank 2026](https://www.norges-bank.no/bankplassen/arkiv/2026/dyrtid-og-hoye-renter-har-ikke-fort-til-storre-forbrukslan/)] These measure balances, not people's repayment habits.
- **Switching and acquisition:**
  - Finans Norge's consumer guidance says card or overdraft credit in a previous bank must be repaid in full before the card or account can be closed when switching banks. [VERIFIED as search-result text on finansnorge.no site search; [Finans Norge](https://www.finansnorge.no/tema/personlig-okonomi/vil-du-bytte-bank/kredittkort-og-kontokreditt)]
  - Consumers can register a block on credit assessment ("sperre deg selv mot kredittvurdering") to prevent new consumer loans or credit cards. [Same Finans Norge search-result text]
- **SIFO-rapport 13-2019 (Poppe):** reportedly about 32% of adults aged 18–80 had some unsecured debt, and credit cards were mainly used for consumer goods, travel and unexpected expenses. [SNIPPET-ONLY: search-tool summary; report on oda.oslomet.no blocked] Pre-2021 context only.
- **SIFO-rapport 7-2024:** reportedly finds unsecured debt and payment remarks are increasing among young people. [SNIPPET-ONLY]
- **N4.** A DNB/Ipsos (June 2024) article title, "En av fire må betale ferien med kredittkort". [SNIPPET-ONLY: [DNB](https://www.dnb.no/dnbnyheter/no/din-okonomi/en-av-fire-ma-betale-ferien-med-kredittkort); commercial bank survey; content not read]
- **N10.** Forbrukerrådet's Bytteundersøkelsen 2026 (switching survey, May 2026) exists. Whether it covers credit cards was not verified (PDF blocked). [[Forbrukerrådet PDF](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)]
- **Finans Norge, "Gjeld, forbrukslån og inkasso: dette sier tallene" (S17)**, 21 Aug 2026. [VERIFIED; UNSEC] Source: [Finans Norge 2026](https://www.finansnorge.no/artikler/2026/08/gjeld-forbrukslan-og-inkasso-dette-sier-tallene/)
  - Norsk Gjeldsinformasjon data show inflation-adjusted interest-bearing unsecured debt down about NOK 40 bn since 2020.
  - Finans Norge concludes there is no basis for a national debt crisis.
  - No Finans Norge consumer survey on credit card ownership or reasons for holding a card ("Forbrukertrender"/"Finanstrender") was found on finansnorge.no.

### Inferences
- Comparison and acquisition behaviour is likely visible only through commercial or broker data. SIFO notes brokers use register consents to market loans, but this is not quantified for cards.

### Gaps (explicit evidence gaps)
- Age at first credit card: no data.
- Share of 18–29-year-olds holding a card: no data. Only register shares of persons with balances by age, and the 18–24/25–29 values were not given in the text.
- First-time versus experienced holders: no data.
- Number of cards per person: no data. Card counts (4.46 m) and register persons (3.53 m) are not comparable, because the persons figure includes loan-only debtors.
- Unused limits per person: no data. Only the aggregate is available: about NOK 209 bn unused, 72.5% of limits (Q1).
- Purchase categories (groceries, online, travel, big purchases, unexpected expenses, recurring payments): no post-2021 official data. The only lead is SIFO 2019 (snippet-only).
- Use of card insurance or travel benefits: no data.
- Comparison, switching and acquisition of credit cards: no official data reached. Forbrukerrådet's switching survey could not be read.
- Finans Norge consumer-survey shares of card ownership and reasons for having a card by age: none found.
- SSB K2/kredittindikator: not examined in detail. Per the search result it does not separate credit cards. SSB's household income and wealth statistics cannot separate debt types without the Gjeldsregisteret link ([SSB 2026](https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/4-av-10-har-rentebaerende-forbruksgjeld)).
