# Credit card research & comparison journey in Norway: triggers, channels, criteria, switching, trust, questions, friction

Researched 2026-11-18. **How to read the tags on each finding:**
- **Access:** `VERIFIED` means I opened the original document or page and read the passage. `SNIPPET` means the figure comes only from a search-engine result or summary, so treat the wording and number as provisional. `SECONDARY-VERIFIED` means I read the figure in an official document that cites the original survey, but not in the survey itself.
- **Applicability to the credit-card journey:** `VERIFIED` means it is directly about credit cards. `INFERRED` means it is about bank or financial products generally and is applied to cards by reasoning. `HYPOTHESIS` means it is a plausible link I have not tested. Each also gets a confidence level (high, medium or low).
- **Years:** Forbrukerrådet's *Bytteundersøkelsen* published in year X describes behaviour in year X−1. Fieldwork runs January to March each year and the series has run since 2013.
- **Access limits in this session:** Several hosts could not be reached: storage02.forbrukerradet.no (where all the Bytteundersøkelsen PDFs and Forbrukerrådet annual reports are stored), www.regjeringen.no (403), www.forbrukertilsynet.no, medietilsynet.no and gov.uk. WebFetch could not reach www.ssb.no or www.forbrukerradet.no, but curl could, so those pages were read through curl. Every Bytteundersøkelsen figure below is therefore SNIPPET unless Finanstilsynet's 2024 or 2026 reports quote it (SECONDARY-VERIFIED).
- **No search volumes, conversion rates or invented percentages** appear anywhere in these notes.

---

## 1. Triggers: what makes Norwegians look for a (new) credit card, or compare cards?

### Takeaway
No independent Norwegian survey asks directly *why* people get a credit card. The best Norwegian evidence is Forbrukerrådet's Bytteundersøkelsen (snippet-level only). It suggests that about 15–20% of adults take out a new consumer loan, car loan, credit card or BNPL agreement in a year, and that the stated reasons for taking credit cluster around "good terms on travel purchases or store offers" and convenience. Travel and holidays are the trigger with the most support in Norwegian media and issuer data. Other candidate triggers (car rental or hotel deposits, unexpected expenses, debt consolidation, life events such as moving out or starting work) are plausible but not quantified by any independent Norwegian source I found.

### Cited Findings
**(a) Motives for wanting or taking a card: Norwegian evidence**
- **Bytteundersøkelsen 2025 (2024 behaviour):** "15 prosent av oss opprettet forbrukslån, billån eller kredittkort i fjor." A search summary paraphrased the most common reason as wanting good terms on travel purchases or store offers; the exact wording and percentage were not visible. Publisher: Forbrukerrådet (state consumer body, not commercial). Annual Jan–Mar survey; sample size and pollster could not be confirmed because the PDF host was blocked. Access: SNIPPET. Applicability: VERIFIED (cards are named), medium confidence on the number, low confidence on the reason wording — [Bytteundersøkelsen 2025](https://storage02.forbrukerradet.no/media/2025/05/bytteundersokelsen-2025.pdf)
- **Bytteundersøkelsen 2026 (2025 behaviour):** "20 prosent av oss opprettet nye avtaler for forbrukslån, billån, kredittkort eller «utsatt betaling» i løpet av 2025." "Utsatt betaling" (BNPL) was added as a new category in 2026, so this 20% is not directly comparable with the 15% above. Two search summaries disagreed on the next sentence: one said "about half of those … said it was simply convenient", the other said "halvparten av disse opprettet forbrukslån". **Treat that sub-finding as unresolved.** Access: SNIPPET. Applicability: VERIFIED, medium confidence — [Bytteundersøkelsen 2026](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)
- **Holiday payment (Nettavisen/InFact poll):** 20.2% said they pay for the holiday with a credit card; men 23.8% vs women 16.5%. Fieldwork date and sample size were not visible, and InFact is the newspaper's own pollster. Access: SNIPPET. Applicability: VERIFIED (cards), low-to-medium confidence — [Nettavisen](https://www.nettavisen.no/okonomi/en-av-fem-nordmenn-bruker-kredittkort-for-a-betale-sommerferien-mange-har-brukt-opp-sparepengene/s/5-95-1906120)
- **Holiday payment (DNB Nyheter):** headline "Én av fire må betale ferien med kredittkort"; the snippet says the share is higher among the youngest and among parents of small children. **Conflict of interest:** DNB is a card issuer publishing on its own news site. Date, n and method unknown. Access: SNIPPET. Applicability: VERIFIED, low confidence — [DNB Nyheter](https://www.dnb.no/dnbnyheter/no/din-okonomi/en-av-fire-ma-betale-ferien-med-kredittkort)
- **Holiday borrowing by age (NTB via Klikk.no):** "Nesten hver fjerde nordmann mellom 25 og 34 år regner med at de må låne eller bruke kredittkort for å finansiere sommerferien." Commissioning party and date not visible. Access: SNIPPET. Applicability: VERIFIED, low confidence — [Klikk.no](https://www.klikk.no/underholdning/en-av-fire-tar-ferie-pa-kreditt-4339681)
- **Holiday borrowing (DN):** about 9% of adults might borrow money to go on summer holiday; the headline says "300 000 vil ta ferien på kreditt". Undated, likely old. Access: SNIPPET — [DN](https://www.dn.no/300000-vil-ta-ferien-pa-kreditt/1-1-5131476)
- **Car rental (Bank Norwegian, issuer transaction data, 2025):** men account for 73% and women 27% of the issuer's car-rental card purchases. This is revealed behaviour, not a stated motive. **Conflict of interest:** issuer marketing content. Access: SNIPPET. Applicability: INFERRED (it suggests car rental is a recognised card use case), low confidence — [Bank Norwegian](https://www.banknorwegian.no/kredittkort/slik-brukte-vi-kredittkortet-i-2025/)
- **Travel insurance (Forbrukerrådet, 2019, older):** "Totalt 28 prosent er bevisste på at de har reiseforsikring gjennom kredittkort og 14 prosent oppgir at de har det gjennom arbeidsgiver." Access: SNIPPET. Applicability: VERIFIED that card-linked travel insurance is a known benefit; medium confidence — [Forbrukerrådet reiseforsikring 2019](https://storage02.forbrukerradet.no/media/2019/06/rapport-reiseforsikring-mars-2019-003.pdf)
- **Online shopping and buyer protection (older survey):** Forbrukerrådet recommends paying online with a credit card because it gives more rights. A 2014 survey found 44% had a wrong idea, or no idea, of their rights when shopping online by credit card compared with a debit card. Access: SNIPPET; fieldwork 2014; host is Forbruker Europa — [Befolkningsundersøkelse om betaling ved kjøp på internett](https://forbrukereuropa.no/wp-content/uploads/2017/02/Befolkningsundersokelse-om-betaling-ved-kjop-på-internett.pdf). A commercial affiliate site, which has a conflict of interest, also claims Norwegians "i stor grad" use credit cards online for insurance and security, but gives no primary data — [Kredittkortlisten oppsummering 2024](https://www.kredittkortlisten.no/artikler/oppsummering-av-2024/)
- **How Finansportalen frames card choice:** the public comparator asks users for their *usage pattern* before ranking cards. The inputs are: carrying debt; goods purchases; purchases abroad; payment period; use abroad; use in Norway; and cash withdrawals at own or other banks, after hours, and abroad. The question "Hvor mange ganger betaler du i annen utenlandsk valuta?" is asked explicitly. This shows that the state comparator treats **foreign use, purchase volume and carrying a balance** as the main use cases that determine card choice. Access: VERIFIED (read in the live app's JavaScript bundle on 2026-11-18). Applicability: VERIFIED, high confidence — [Finansportalen kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort)

**Debt consolidation and refinancing as a trigger**
- **Bytteundersøkelsen 2026:** "1 av 10 flyttet eller refinansierte forbrukslån, kredittkort eller «utsatt betaling»" in 2025. Access: SNIPPET. Applicability: VERIFIED (cards included, but pooled with loans), medium confidence — [Bytteundersøkelsen 2026](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)
- **Finanstilsynet (Feb 2026), citing Bytteundersøkelsen 2025:** over the last three years, consumer loans (forbrukslån) were the bank service moved or renegotiated *most often*, ahead of savings accounts and then mortgages. Access: SECONDARY-VERIFIED. Applicability: INFERRED for cards (unsecured credit is the most-shopped category), medium-high confidence — [Finanstilsynet, Forbrukernes situasjon i innskuddsmarkedet, 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf)

**Life stage and first-time context (c)**
- **Forbrukerrådet guidance for young customers:** at 15 you can open an account in a bank of your own choice for money you earned yourself; you normally get full control of your accounts at 18; BankID is available from 15 (or 13–15 with parental consent); "det er store prisforskjeller på banktjenester, så det er lurt å sammenligne før du velger deg en bank." Access: VERIFIED — [Nesten voksen som bankkunde](https://www.forbrukerradet.no/finansportalen/bank/tips-og-rad/nesten-voksen-som-bankkunde/)
- **Finansportalen eligibility fields:** card listings record a minimum and maximum age, the minimum income for the lowest credit limit, and whether membership or another product is required ("Krav om annet produkt"). Eligibility is therefore a built-in filter for first-time applicants. Access: VERIFIED (app bundle) — [Finansportalen kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort)
- **SIFO/OsloMet (published 9.9.2025):** 18–20-year-olds have a "middels" level of knowledge about personal finance and "veldig få i denne aldersgruppen har gjeld". The previous year's study found that young people learn personal finance mostly at home or by trial and error. Sources: SIFO-rapport 5-2025 and 6-2025. Access: VERIFIED (OsloMet news page). Applicability: INFERRED for first-time card seekers, medium confidence — [OsloMet/SIFO](https://www.oslomet.no/forskning/forskningsnyheter/norske-ungdommer-har-middels-kunnskap-om-privatokonomi)
- **Older youth evidence:** a 2015 Norstat survey for Forbrukerrådet found only about 1 in 10 tenth-graders knew the actual level of credit-card interest (≥20% p.a. was common). Access: SNIPPET; 2015 — [Forbrukerrådet 10.-klassinger og kredittkort](https://storage02.forbrukerradet.no/media/2015/10/20150908-Rapport_10_klassinger_kredittkort.pdf)

**(b) Motives for using a comparison service (as distinct from wanting a card)**
- **Bytteundersøkelsen 2026:** "Halvparten har undersøkt markedet i løpet av det siste året med tanke på å bytte" at least one financial service. Access: SNIPPET — [Bytteundersøkelsen 2026](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)
- **Forbrukerrådet framing (press release, 27.04.2023):** the stated reason to compare is saving money: "Det handler ikke om å betale mindre for et dårligere produkt – det handler om å betale mindre for nøyaktig det samme produktet." Nearly 2 in 10 of those who renegotiated or switched in 2022 believe they save more than NOK 10,000 a year. Access: VERIFIED. Applicability: INFERRED (the context is loans and banks), medium confidence — [Forbrukerrådet 27.04.2023](https://www.forbrukerradet.no/siste-nytt/en-av-fire-tror-ikke-det-er-noe-a-spare-pa-a-bytte-bank/)
- **Adjacent evidence, UK:** the CMA's 2017 DCT study (Kantar survey, n=4,083) reports that consumers use comparison tools mainly to save time and money and to find better deals. This is a heading-level snippet. Access: SNIPPET. Applicability: INFERRED, medium confidence — [CMA Paper A: consumer experiences](https://assets.publishing.service.gov.uk/media/59c9356bed915d7bd5d75dda/paper-a-consumer-experiences.pdf)

### Inferences
- **(a) vs (b):** In Norway, the motive for wanting a card is usage-led: travel and foreign currency, online purchases with buyer protection, card-linked travel insurance, and bridging a holiday or other expense. The motive for using a comparison service is price-led (saving money on an identical product), with periodic market checks prompted by interest-rate news. *(INFERRED, medium confidence.)*
- **Car rental and hotel deposits** are probably a trigger for first-time cardholders, because rental firms often require a credit card for the deposit. Apart from Bank Norwegian's issuer data, I found no Norwegian survey quantifying this. *(HYPOTHESIS, medium confidence.)*
- **(c) First-time researchers** face eligibility filters (age, minimum income, membership) and have low knowledge of interest rates. Their trigger is likely to be travel, studies abroad or a first job, combined with advice from family. **(d) Existing cardholders** are more likely triggered by fees, interest after a balance builds up (refinancing), a change in usage such as more travel, or a mortgage application (see section 6). *(INFERRED, medium confidence.)*
- Holiday credit use is concentrated among 25–34-year-olds and parents of small children (DNB and NTB snippets), which points to life stage as a trigger. *(INFERRED, low-to-medium confidence: issuer and media polls.)*

### Gaps
- There is no independent, current Norwegian survey that ranks reasons for acquiring a credit card (travel, online shopping, deposits, unexpected expenses, rewards, consolidation, life events). The Bytteundersøkelsen reason question exists but could not be read; the PDFs are on the blocked host storage02.forbrukerradet.no.
- There is no Norwegian data on car-rental or hotel-deposit triggers, on big purchases or unexpected expenses as triggers, or on moving out, studies, a job or a family as triggers specifically for cards.
- For the Nettavisen, DNB and Klikk holiday polls, fieldwork year, n and method could not be confirmed.
- **Unverified leads, not to be used as findings:** search summaries mentioned an "Opinion for Lendo, March 2026" survey with youth figures, and a Nordea claim that 43% of 18–29-year-olds use TikTok and Instagram for investment tips. Neither was traceable to a URL I could see.

---

## 2. Channels: how Norwegians research financial products

### Takeaway
Finansportalen is the public reference tool, and it is now hosted at forbrukerradet.no/finansportalen. Awareness is low: only about a quarter of adults know it (SECONDARY-VERIFIED). Among people who moved or renegotiated bank services, about 1 in 5 used a comparison service of any kind (SNIPPET); Finansportalen was the most used at 10–12%. Bank advisers remain an important channel: 40–41% of bank customers had spoken to one in the past two years (industry-commissioned survey). Social media matters mostly for young adults and mostly for investment content. Finanstilsynet's own work on "finfluencers" is regulatory guidance, not a survey of young people.

### Cited Findings
**Comparison sites: Finansportalen and commercial sites**
- **Bytteundersøkelsen 2025 (2024 behaviour):** "20 % svarer at de brukte sammenligningstjenester i forbindelse med flytting eller reforhandling av banktjenester i 2024. Finansportalen er den mest brukte sammenligningstjenesten med 12 %." A separate snippet says 14% in total used price calculators or price overviews with data from Finansportalen, and 6% used it for insurance. Access: SNIPPET. Applicability: INFERRED (all bank services, not only cards), medium confidence — [Bytteundersøkelsen 2025](https://storage02.forbrukerradet.no/media/2025/05/bytteundersokelsen-2025.pdf)
- **Bytteundersøkelsen 2024 (2023 behaviour):** 19% used comparison services when moving or renegotiating bank services; Finansportalen 10%. Access: SNIPPET — [Bytteundersøkelsen 2024](https://storage02.forbrukerradet.no/media/2024/06/rapport-bytteundersokelsen-2024.pdf)
- **Bytteundersøkelsen 2023:** 7% used price calculators or overviews with Finansportalen data. Access: SNIPPET — [Bytteundersøkelsen 2023](https://storage02.forbrukerradet.no/media/2023/04/bytteundersokelsen-2023-1.pdf)
- **Awareness of Finansportalen:** Bytteundersøkelsen 2025 shows that "kun en fjerdedel av forbrukerne kjenner til Finansportalen" (Finanstilsynet's wording). Access: SECONDARY-VERIFIED — [Finanstilsynet 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf). Bytteundersøkelsen 2026: "26 % kjenner til Finansportalen fra Forbrukerrådet", with awareness varying by age (age breakdown not visible). Access: SNIPPET — [Bytteundersøkelsen 2026](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)
- **Finansportalen's data reaches users through other sites:** data is free under a distribution agreement and comes with a required "Data levert av Forbrukerrådet" logo. Embeddable iframe calculators, including a **credit-card** calculator (`/finansportalen/bank/iframe/kredittkort`), may be placed on external sites without an agreement. "Finansportalen samler inn renter og gebyrer for de fleste banker som opererer i Norge." Access: VERIFIED. Applicability: VERIFIED (the card tool exists), high confidence — [Finansportalen: Bruk av våre data](https://www.forbrukerradet.no/finansportalen/bank/bruk-av-vare-data/)
- **Price basis:** Finansportalen shows prices for *new customers*, checks daily that they match the banks' price lists, and requires banks to report prices from the first day they are offered. It warns that existing customers' terms may differ. Access: VERIFIED — [Finansportalen bank sine priser](https://www.forbrukerradet.no/finansportalen/bank/tips-og-rad/finansportalen-bank-sine-priser/)
- **Finanstilsynet's assessment (29.02.2024):** Finansportalen "er et nettsted som allerede benyttes av forbrukere" and has "god trafikk". Finanstilsynet's own website is its most important consumer channel and is optimised for search-engine hits; its other channels are "redaktørstyrte medier og sosiale medier". The document gives no traffic numbers. Access: VERIFIED — [Finanstilsynet, Forbrukernes posisjon i finansmarkedene](https://www.finanstilsynet.no/493439/contentassets/31fa3393a31b40fa82f4c8693517cab4/utredning---forbrukernes-posisjon-i-finansmarkedene.pdf)
- **Pricing data quality:** in August 2026 DN reported that Bulder Bank admitted breaching its reporting duty after wrong interest rates appeared on Finansportalen. Headline only. Access: SNIPPET — [DN](https://www.dn.no/privatokonomi/dn-investor/bulder-bank/heder-bank/feil-renter-hos-finansportalen-bulder-innrommer-brudd-pa-rapporteringsplikten/2-1-2025828)

**Bank advisers and bank channels**
- **Finans Norge / Opinion, January 2026:** n=1,009 bank customers, representative by geography, age and gender; **commissioned by Finans Norge**, the industry body. 41% had been in contact with a bank adviser in the last two years, and 83% of those were satisfied or very satisfied. A companion page gives 40% and says over 80% scored 4 or higher on a 1–6 scale. **Conflict of interest:** the industry association has an interest in showing that customers are active and well served. Access: VERIFIED — [Finans Norge 03/2026](https://www.finansnorge.no/artikler/2026/03/boliglanskunder-er-aktive/); [Finans Norge: Aktive bankkunder](https://www.finansnorge.no/tema/statistikk-og-analyse/bank/aktive-bankkunder/)
- **Banks rarely reach out:** in Bytteundersøkelsen 2025, "kun 7 prosent av respondentene [oppga] at de ble kontaktet av selger/rådgiver ansatt i banken." Access: SECONDARY-VERIFIED — [Finanstilsynet 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf)

**Friends and family (first-time researchers)**
- **SIFO/OsloMet:** young people learn personal finance mostly at home or through trial and error, and better-off families talk more about money with their children. Access: VERIFIED (news page summary) — [OsloMet/SIFO 2025](https://www.oslomet.no/forskning/forskningsnyheter/norske-ungdommer-har-middels-kunnskap-om-privatokonomi)

**Social media, influencers and "finfluencers"**
- **Ipsos SoMe-tracker (Norway):** daily TikTok users fell to 21% in Q1 2025 from 25% in Q4 2024, the first significant fall since tracking began in Q2 2019. "8 av 10 nordmenn" use social media daily, and 1 in 3 aged 18–29 use X weekly. The tracker moved to a subscription model in 2024, so the age-by-platform tables are paywalled. Access: SNIPPET — [Ipsos Norge: sosiale medier](https://www.ipsos.com/nb-no/topic/sosiale-medier)
- **Intrum survey (debt-collection company, around 2022):** "15 prosent av Millennials bruker sosiale medier som en pålitelig kilde til informasjon om økonomi", compared with 4% of older consumers. **Conflict of interest:** Intrum is a commercial debt collector. Access: SNIPPET — [Intrum press release](https://www.mynewsdesk.com/no/intrum/pressreleases/unge-bruker-sosiale-medier-som-en-paalitelig-kilde-til-informasjon-om-oekonomi-3170698)
- **Finanstilsynet on finfluencers (2021–2026):** guidance and enforcement focused on *investment* recommendations. The 2021 notices are "Finfluensere og forbrukervern" and "Regler for investeringsanbefalinger gjelder for finfluensere". The 2022 notice clarifies that the rules also apply to private individuals. The 2026 notice, "Råd til deg som deler informasjon om investeringer på sosiale medier", says personal recommendations count as regulated advice and mentions a joint webinar with Forbrukertilsynet. A 2024 inspection of the app Stack by me AS found misleading marketing on social media. Access: SNIPPET (finanstilsynet.no reachable, but these pages were not opened). Applicability: INFERRED for cards (none of it concerns credit cards), low confidence — [Finanstilsynet 2021](https://finanstilsynet.no/nyhetsarkiv/nyheter/2021/finfluensere-og-forbrukervern); [Finanstilsynet 2022](https://finanstilsynet.no/nyhetsarkiv/nyheter/2022/finanstilsynet-presiserer-at-reglene-for-investeringsanbefalinger-ogsa-gjelder-for-privatpersoner); [Finanstilsynet 2026](https://www.finanstilsynet.no/nyhetsarkiv/nyheter/2026/rad-til-deg-som-deler-informasjon-om-investeringer-pa-sosiale-medier/); [Tilsynsrapport Stack by me](https://www.finanstilsynet.no/nyhetsarkiv/tilsynsrapporter/2024/tilsynsrapport---stack-by-me-as/)
- **ung.no article written with Finanstilsynet (updated 24.7.2026):** for many young people social media is the first place they meet investing, and most finfluencers are not licensed to give investment advice. Access: SNIPPET — [ung.no](https://www.ung.no/far-du-investeringsrad-i-sosiale-medier-pass-pa-dette)
- **Illegal lending on social media:** Finanstilsynet warned in 2023 about illegal lending activity on Facebook. Access: SNIPPET — [Finanstilsynet markedsadvarsel 2023](https://prod.finanstilsynet.no/markedsadvarsler/2023/advarer-mot-ulovlig-utlansvirksomhet-pa-facebook)

**Search and general internet use**
- **SSB ICT household survey, 2025 round:** gross sample 6,500 people aged 16–89 from the population register; net 2,073 respondents; response rate 35.5%; dropout bias by age and education. Topics include online banking, social media and online shopping. The 2025 headline percentages were *not* retrieved. Older SSB tables show internet banking at 88–93% in 2014–2020. Access: SNIPPET — [SSB NOT2026-31](https://www.ssb.no/teknologi-og-innovasjon/informasjons-og-kommunikasjonsteknologi-ikt/artikler/ikt-i-husholdningene-2025/_/attachment/inline/bea112b5-ebc8-428e-a05a-59e6cad0e443:96c700889672759d7352e3f44bafbd47584488f9/NOT2026-31.pdf); [SSB ikthus](https://www.ssb.no/ikthus)

### Inferences
- The typical Norwegian channel mix for bank products is: own bank (app, website, adviser), a search engine, and then a comparison site. Fewer than one in four switchers name a comparison service at all. For cards specifically, commercial affiliate sites (Kortio, Kredittkortlisten, Bytt.no, newspaper "kredittkort" pages such as Dagbladet's) dominate search results; I observed this repeatedly in this session's results. That observation is not a measured market share. *(INFERRED, medium confidence.)*
- Because Finansportalen's card calculator can be embedded, some users may see Forbrukerrådet data inside commercial pages without realising its origin. *(HYPOTHESIS, low-to-medium confidence.)*
- **(c) First-time researchers** depend more on family and social media. **(d) Existing cardholders** depend more on their bank relationship and on media coverage of interest rates. *(INFERRED, medium confidence.)*

### Gaps
- **Finansportalen usage statistics** (visits, unique users, credit-card page traffic) were not found. They are probably in Forbrukerrådet's annual reports for [2024](https://storage02.forbrukerradet.no/media/2025/04/arsrapport-2024-pa-lag-med-unge-forbrukere.pdf) and [2025](https://storage02.forbrukerradet.no/media/2026/04/fr-aarsrapport-2025.pdf), but that host was blocked.
- **Finans Norge "Forbrukertrender" / "Finanstrender":** I found no report by this name on finansnorge.no. Finans Norge's consumer survey outputs are the Opinion "Aktive bankkunder" survey and the quarterly *Forventningsbarometeret*; the 2025 annual report also exists. The report title may not exist under that name, or may be older.
- **Medietilsynet:** the 2025 report "Feed, fornuft og følelser" (13.08.2025) exists but returned 403 — [Medietilsynet PDF](https://www.medietilsynet.no/globalassets/publikasjoner/kritisk-medieforstaelse/2025/250813_feed-fornuft-og-folelser.pdf). Age-by-platform data from Ipsos is paywalled. SSB's 2025 ICT percentages were not retrieved.
- **No Finanstilsynet survey** of young people's exposure to, or trust in, finance content on social media was found. Finanstilsynet's output on this topic is guidance and supervision only.
- **Meld. St. 9 (2025–2026) Finansmarkedsmeldingen, chapter 4** (market structure) could not be fetched (regjeringen.no returned 403).

---

## 3. Decision criteria: what Norwegians say matters when choosing a card or bank product

### Takeaway
There is no independent Norwegian survey ranking credit-card attributes. Two kinds of evidence exist. The closest *stated-preference* data is for choosing a bank, not a card: loan interest rate 22%, user-friendliness 22%, deposit rate 10%, and an adviser who knows my finances 10% (Opinion for Finans Norge, January 2024, n=1,010). The best *structural* evidence for card criteria is the attribute set on Finansportalen's comparator: effective and nominal rate, annual or establishment fee, credit limit and minimum income, currency mark-up and foreign fees, travel and cancellation insurance, cashback and discounts, and membership requirements. Commercial "what matters" content in Norwegian media mostly comes from affiliate comparison sites or issuers, so it has a conflict of interest.

### Cited Findings
- **Bank-choice criteria (Finans Norge / Opinion, January 2024, n=1,010, representative):** "Det er særlig fire kriterier som trekkes frem: rente på lån (22%), brukervennlighet (22%), rente på innskudd (10%) og en rådgiver som kjenner min økonomi (10%)." Many respondents also mention a locally rooted bank that gives back to the community. **Commissioned by Finans Norge** (industry). Note that a search-engine summary wrongly attributed these figures to the 2026 survey; they come from the 2024 survey. Access: VERIFIED. Applicability: INFERRED (bank choice, not card choice), medium confidence — [Finans Norge 02/2024](https://www.finansnorge.no/artikler/2024/02/bankkundene-er-aktive-som-aldri-for/)
- **Finansportalen credit-card attribute set (VERIFIED from the live app code, 2026-11-18):**
  - Pricing: "Effektiv rente" (with the tooltip "den totale prisen på lånet ditt, og inkluderer nominell rente pluss alle gebyrer") and "Nominell rente".
  - Fees and limits: establishment or annual fee, with an "Ingen årsgebyr" filter; minimum and maximum credit limit; "Minimum inntekt for å få bevilget laveste kredittramme"; age from and to.
  - Membership: "Krav om annet produkt" (membership or another product required).
  - Foreign use: "Valutapåslag ved bruk i utland"; fees for purchases in Norway and abroad; cash-withdrawal fees.
  - Benefits: "Reiseforsikring", "Avbestillingsforsikring reise", "Cashback ved kjøp", purchase discounts, fuel discount and other advantages.
  - Repayment: minimum monthly payment in NOK and percent.

  Applicability: VERIFIED (cards), high confidence — [Finansportalen kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort)
- **Forbrukerrådet's core advice:** "Betal hele beløpet du har brukt på kredittkortet hver måned. Unngå renter og gebyrer." and "Sammenlign priser jevnlig på lån, sparing, forsikring og strøm." Access: VERIFIED — [Forbrukerrådet: Tips til en tryggere økonomi](https://www.forbrukerradet.no/finansportalen/bank/tips-og-rad/tips-til-en-tryggere-okonomi/)
- **Revealed behaviour (most cardholders do not pay interest):** Finanstilsynet notes that non-interest-bearing balances are "i stor grad … kredittkortgjeld som ikke har forfalt". 80.4% of total consumer debt was interest-bearing at end-March 2025, but this figure includes instalment loans. Access: VERIFIED. Applicability: INFERRED. This suggests that, for many cardholders, fees and benefits matter more in practice than the APR. Medium confidence — [Finanstilsynet, Utviklingen i forbruksgjeld, april 2025](https://www.finanstilsynet.no/4990ef/contentassets/aaf5f43e56c8450b97ba4a50190679eb/rapport-om-utviklingen-i-forbruksgjeld-april-2025.pdf)
- **Commercial criteria content (conflict of interest):** a Kortio analysis of bonus cards says spending level decides which card gives the most value, so that "selv kort med høy årsavgift kan lønne seg". Kortio is an affiliate comparison site. Access: SNIPPET. Low confidence as evidence of consumer preference — [Kortio bonuskort](https://kortio.no/undersokelser/bonuskort-mest-varde/)
- **Adjacent evidence, UK:** the CMA's concern about credit-card DCTs centred on *eligibility*: consumers cannot see whether they will be accepted for a card before applying. Access: SNIPPET via a law-firm summary — [RPC on CMA DCT final report](https://rpclegal.com/thinking/tech/digital-comparison-tools-the-cmas-verdict). Applicability: INFERRED, medium confidence.

### Inferences
- **Stated vs revealed preference:** stated bank-choice priorities (rate and user-friendliness, each 22%) roughly match revealed behaviour, since the most-shopped services are unsecured loans, savings and mortgages. For cards, revealed behaviour (many balances paid before interest accrues) suggests two segments. Transactors, who pay in full, are driven by annual fee, foreign-currency mark-up, insurance and rewards. Revolvers, who carry a balance, are driven by effective rate and credit limit. Finansportalen's design reflects this split through its "Carry debt" usage-pattern input. *(INFERRED, medium confidence.)*
- **(c) First-time applicants** will weigh eligibility (age, minimum income, no membership requirement) and "no annual fee" heavily. **(d) Existing cardholders** compare their current card's fee and currency mark-up against alternatives, and increasingly consider how the size of their credit limit affects mortgage capacity (section 6). *(INFERRED, medium confidence.)*

### Gaps
- No independent Norwegian ranking of credit-card attributes (interest, annual fee, interest-free period, rewards, travel insurance, foreign-currency fees, limit, brand, ease of application).
- No Norwegian stated-versus-revealed study for cards.
- Finansportalen's bundle has no explicit "rentefri periode" (interest-free period) field label. Whether it is shown elsewhere was not checked.
- Commercial polls in E24, DN, Finansavisen, NRK and Dine Penger on card criteria could not be opened; media hosts are outside the allowlist.

---

## 4. Switching: Norwegian data on switching banks and cards, and reasons for not switching

### Takeaway
About a third of Norwegians switch or renegotiate at least one bank service each year: 25% in 2022, 34% in 2024, and in 2025 about 56% did *nothing* across bank and insurance combined (SNIPPET). Consumer loans and savings are the most often moved; about 1 in 10 moved or refinanced a consumer loan, credit card or BNPL product in 2025. The main reasons for staying are believing there is little to gain (about 23–25%), loyalty or a good relationship (about 25%), and hassle (12% say switching takes too long; 7% "too much work" in the industry survey). Product bundles and the size of a Finansportalen-aware population are structural barriers.

### Cited Findings
- **2022:** "25 prosent av forbrukerne byttet eller reforhandlet banktjenester i 2022"; mortgages were the most-moved service over three years (22% in 2022). Access: SECONDARY-VERIFIED (Bytteundersøkelsen 2023) — [Finanstilsynet, Konkurransen i det norske bankmarkedet, 02.02.2024](https://www.finanstilsynet.no/494e0e/contentassets/57018beddcf64384ba0df63e5e00f992/finanstilsynets-rapport-om-konkurransen-i-det-norske-bankmarkedet.pdf)
- **Card switching often happens without leaving the main bank:** a bank "switch" often means opening a relationship at another bank for a single service, "(f.eks. kredittkort)", without ending the existing relationship. Finanstilsynet calls this "rasjonell forbrukeradferd". Access: VERIFIED. Applicability: VERIFIED (cards are named), high confidence — [Finanstilsynet 02.02.2024](https://www.finanstilsynet.no/494e0e/contentassets/57018beddcf64384ba0df63e5e00f992/finanstilsynets-rapport-om-konkurransen-i-det-norske-bankmarkedet.pdf)
- **2024 (Bytteundersøkelsen 2025):**
  - Overall: "34 prosent av forbrukerne byttet eller reforhandlet banktjenester i 2024".
  - Savings account: 18% moved or renegotiated (14% moved, 4% renegotiated), up from 16% in 2023 and 12% in 2022.
  - Ranking: consumer loans are the most-moved service over three years, followed by savings and then mortgages.

  Access: SECONDARY-VERIFIED — [Finanstilsynet 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf)
- **2025 (Bytteundersøkelsen 2026):**
  - Nothing switched: "56 % … ikke flyttet eller reforhandlet noen bank- eller forsikringstjenester i løpet av 2025".
  - Unsecured credit: "1 av 10 flyttet eller refinansierte forbrukslån, kredittkort eller «utsatt betaling»".

  Access: SNIPPET — [Bytteundersøkelsen 2026](https://storage02.forbrukerradet.no/media/2026/05/bytteundersokelsen-2026-rapport.pdf)
- **Reasons for not switching (Bytteundersøkelsen 2023, via Forbrukerrådet press release 27.04.2023):**
  - Little to gain: "23 prosent av oss [tar ikke] bryet med å bytte bank fordi vi tror det er lite å hente"; the same release also says "en av fire avsto fra å reforhandle lånet eller bytte bank fordi de ikke trodde det var mye å spare".
  - Loyalty: "en av fire velger å holde på banken fordi de føler seg knyttet til banken sin gjennom et godt kundeforhold".
  - Hassle: "12 prosent sier de holder på banken sin fordi et bankbytte tar for lang tid".
  - The director lists one practical chore as having to "bytte kredittkortinformasjon på noen strømmetjenester".

  Access: VERIFIED — [Forbrukerrådet 27.04.2023](https://www.forbrukerradet.no/siste-nytt/en-av-fire-tror-ikke-det-er-noe-a-spare-pa-a-bytte-bank/)
- **Industry survey (Finans Norge / Opinion, January 2026, n=1,009, commissioned by Finans Norge):**
  - Loans: 53% of borrowers moved, contacted the bank about the rate, or checked their terms in the last year.
  - Deposits: 13% moved deposits to another bank; 36% checked whether their deposit terms were competitive.
  - Reasons for staying: 11% have loans through a union agreement or Statens pensjonskasse; 44% are happy with their bank; 14% do not think a better rate is possible; 7% say switching is too much work.

  Access: VERIFIED. Applicability: INFERRED for cards, medium confidence — [Finans Norge 03/2026](https://www.finansnorge.no/artikler/2026/03/boliglanskunder-er-aktive/); [Aktive bankkunder](https://www.finansnorge.no/tema/statistikk-og-analyse/bank/aktive-bankkunder/)
- **Structural barriers (Finanstilsynet):**
  - Comparisons "kan vanskeliggjøres for eksempel som følge av økt bruk av kundeutbytte og tilbud om produktpakker".
  - Some groups find switching harder because of weak digital skills, cognitive capacity or language.
  - Others are passive or do not know how easy switching is.

  Access: VERIFIED — [Finanstilsynet 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf). Forbrukerrådet's research "tyder på at produktpakker kan utgjøre et hinder for bytte" — [Finanstilsynet 02.02.2024](https://www.finanstilsynet.no/494e0e/contentassets/57018beddcf64384ba0df63e5e00f992/finanstilsynets-rapport-om-konkurransen-i-det-norske-bankmarkedet.pdf). The related Forbrukerrådet report is "Pakket og uklart" (March 2025); title only, not opened — [Forbrukerrådet](https://storage02.forbrukerradet.no/media/2025/04/rapport-forbrukerradet-pakket-og-uklart-mars-2025.pdf)
- **Conflicting framing:** Finans Norge calls the idea of inactive bank customers a "myte". Forbrukerrådet and Finanstilsynet stress low awareness (about 25% know Finansportalen) and weak deposit competition. Both rely on surveys, but with different commissioners and different question framing. Access: VERIFIED (both sides, cited above).

### Inferences
- For **(d) existing cardholders**, switching a card is usually *additive*: they open a new card elsewhere and may keep the old one. Credit cards do not fall under the Finans Norge bank-switching arrangement in the same way a salary account does. Pooled "1 in 10 refinanced consumer loan, card or BNPL" data probably mixes debt-driven refinancing with card swaps driven by benefits. *(INFERRED, medium confidence.)*
- Reasons for not switching (little to gain, loyalty, hassle) likely apply to cards, but more weakly. Cards involve no collateral transfer, though they do bring a new credit check, a Gjeldsregisteret registration and updating stored card details with merchants. *(HYPOTHESIS, medium confidence.)*

### Gaps
- No Norwegian data isolating *credit-card-only* switching rates or card-specific reasons for not switching. The breakdowns may exist in the Bytteundersøkelsen PDFs, which could not be accessed.
- No data was found on how often existing cardholders cancel or downgrade cards.

---

## 5. Trust in comparison services, commission awareness, data and marketing concerns

### Takeaway
I found **no Norwegian survey measuring trust in commercial comparison sites or awareness of their commission funding.** Trust has to be inferred from three things: Finansportalen's status as a state service (VERIFIED: free data, new-customer prices checked daily); regulatory activity on loan brokers and lead generation (licensing since the Låneformidlingsloven; consent rules for SMS and email credit marketing); and media headlines about Forbrukerrådet criticising loan brokers. UK and EU evidence shows high use and satisfaction alongside documented problems, such as wrong prices, unavailable products and poor complaint information.

### Cited Findings
**Norway: regulation and market conduct**
- **Loan-brokering law:** Låneformidlingsloven (lov 16. desember 2022 nr. 91) requires that "låneformidlingsvirksomhet rettet mot forbrukere bare kan drives av foretak som får tillatelse". Formidling (brokering) is defined widely, and "Det er ikke et krav om at en må få betalt" for an activity to count. Giving personal recommendations on loan offers counts as rådgivning (advice) and needs a licence. Access: VERIFIED — [Finanstilsynet: Låneformidling](https://www.finanstilsynet.no/tema/laneformidling/). A secondary source gives the in-force date as 1 July 2023. Access: SNIPPET — [Bytt.no](https://www.bytt.no/bank/boliglan/a-pyzl)
- **Forbrukertilsynet credit-marketing guide:**
  - Scope: the rules apply to "kredittytere, finansagenter og affiliates".
  - SMS and email: credit marketing by SMS, email or similar requires prior consent.
  - Phone: live phone calls are exempt from the prior-consent rule, but people in Reservasjonsregisteret may not be called, and calls are banned at weekends and before 09:00 or after 21:00 on weekdays.
  - Valid consent must be "frivillig, uttrykkelig og informert". Pre-ticked boxes are invalid, and consent cannot be made a condition of a purchase.

  Access: SNIPPET (host blocked). Applicability: VERIFIED (credit), high confidence on the rules — [Forbrukertilsynet: Veileder om kredittmarkedsføring](https://www.forbrukertilsynet.no/vi-jobber-med/finansielle-tjenester/veileder-om-kredittmarkedsforing); [Veileder for telefonsalg](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukerombudets-veiledning-regelverket-telefonsalg)
- **Forbrukertilsynet secondary brand names:** an orientation letter to credit providers covers the use of secondary brand names in credit marketing. Title only. Access: SNIPPET — [Forbrukertilsynet orienteringsbrev 2021](https://www.forbrukertilsynet.no/wp-content/uploads/2021/10/orienteringsbrev-til-kredittaktorer-vedrorende-bruk-av-sekundaere-merkenavn-markedsforing-av-k.pdf)
- **Media headlines on loan brokers:** E24, "Forbrukerrådet mener låneformidlere har brutt loven", undated, headline only. Access: SNIPPET — [E24](https://e24.no/naeringsliv/i/dwrVwo/forbrukerraadet-mener-laaneformidlere-har-brutt-loven). Counter-headline from E24: "Utfordrer føler seg forskjellsbehandlet: Mener Forbrukerrådet beskytter forbrukslånsbankene", undated — [E24](https://e24.no/naeringsliv/i/9vpGgd/utfordrer-foeler-seg-forskjellsbehandlet-mener-forbrukerraadet-beskytter-forbrukslaansbankene)
- **How brokers work (commercial and secondary sources, conflict of interest):**
  - Panel size: Lendo forwards applications to a partner panel (about 15–26 banks, depending on source and date).
  - Coverage: offers come only from partner banks, not the whole market.
  - Funding: brokers earn commission from banks.
  - Credit checks: repeated application rounds can trigger several.

  Access: SNIPPET — [Kredittium](https://kredittium.no/guider/hvordan-fungerer-laneformidlere/); [Logk.no](https://logk.no/artikler/formidlere)
- **Finansportalen's independence signals:** data is free; banks must report prices; prices are checked daily; Finansportalen shows *new-customer* prices and openly warns that loyal customers often get worse terms. Access: VERIFIED — [Finansportalen bank sine priser](https://www.forbrukerradet.no/finansportalen/bank/tips-og-rad/finansportalen-bank-sine-priser/). Finanstilsynet calls Finansportalen's rate data "et godt utgangspunkt" — [Finanstilsynet 29.02.2024](https://www.finanstilsynet.no/493439/contentassets/31fa3393a31b40fa82f4c8693517cab4/utredning---forbrukernes-posisjon-i-finansmarkedene.pdf)

**Adjacent evidence: UK (CMA, 2017)**
- 97% of internet users were aware of DCTs and 85% had used one; over 90% of recent users were very or fairly satisfied (Kantar survey, n=4,083). For credit cards, DCT use was low and **eligibility** was the CMA's main concern. Final report 26.09.2017. Access: SNIPPET — [CMA update paper summary](https://assets.publishing.service.gov.uk/media/58d930deed915d06b0000038/dcts-summary-of-update-paper.pdf); [CMA final report](https://assets.publishing.service.gov.uk/media/59c93546e5274a77468120d6/digital-comparison-tools-market-study-final-report.pdf); [Paper B: How DCTs treat consumers](https://assets.publishing.service.gov.uk/media/59c936e1ed915d7bd5d75ddb/paper-b-how-dcts-treat-consumers.pdf). Applicability: INFERRED, medium confidence.

**Adjacent evidence: EU (European Commission study, finalised end of 2014, published around March 2015)**
- 74% of EU consumers had used comparison tools; 40% used them at least monthly.
- 65% had experienced a problem: the product was unavailable in 54% of cases and prices were incorrect in 21%.
- Only 34% of tools gave information on how to complain.
- There are few verification schemes (codes, trustmarks), and user reviews clearly influence choices.

Access: SNIPPET — [European Commission](https://commission.europa.eu/publications/comparison-tools-and-third-party-verification-schemes_en); [London Economics](https://londoneconomics.co.uk/blog/publication/study-on-the-coverage-functioning-and-consumer-use-of-comparison-tools-and-third-party-verification-schemes-for-such-tools-march-2015). Applicability: INFERRED, medium confidence.

### Inferences
- In Norway, trust probably splits into two tracks. The state-run Finansportalen is low in awareness but high in credibility. Commercial affiliate and broker sites are high in visibility but face trust concerns about commission, panel coverage, follow-up calls and SMS, and repeated credit checks. *(INFERRED, medium confidence; no Norwegian trust survey.)*
- Card comparison involves less lead generation than consumer-loan brokering, because card listings usually link to the issuer's own application. Visitors who arrive through "lån" (loan) journeys, though, may meet broker-style data capture. *(HYPOTHESIS, low-to-medium confidence.)*

### Gaps
- No Norwegian survey on trust in comparison sites, on awareness that commercial sites earn commission, or on concerns about personal data or follow-up marketing contact.
- No complaint counts for loan brokers or lead-generation sites from Forbrukerrådet or Forbrukertilsynet. Forbrukertilsynet's annual reports ([2024](https://www.forbrukertilsynet.no/wp-content/uploads/2025/05/arsrapport-forbrukertilsynet-2024.pdf), [2025](https://www.regjeringen.no/contentassets/929682b98fba4c788b1d65402677560d/arsrapport-2025-forbrukertilsynet.pdf)) could not be fetched.
- The E24 loan-broker article's date and content are unknown.

---

## 6. Customer questions: what Norwegians actually ask about credit cards

### Takeaway
Below are **observed question themes**. They are not search volumes, and I did not observe Google's "People also ask" boxes directly. Each theme is evidenced by an official FAQ or guidance page, a field in the Finansportalen comparator (which signals what users need to know), or recurring article and forum titles seen in search results this session. The themes fall into four clusters: cost (effective rate, annual fee, foreign-currency mark-up); eligibility (age, income, membership); rights and insurance (online purchases, travel insurance); and mortgage interaction (does an unused credit limit reduce how much I can borrow for a home?).

### Cited Findings
- **"Hva er effektiv rente / hva koster kortet egentlig?"** The Finansportalen tooltip defines effective rate as nominal rate plus all fees. Access: VERIFIED (app bundle) — [Finansportalen kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort). Related: only about 1 in 10 tenth-graders knew card interest levels (2015). Access: SNIPPET — [Forbrukerrådet 2015](https://storage02.forbrukerradet.no/media/2015/10/20150908-Rapport_10_klassinger_kredittkort.pdf)
- **"Hvilke kort har ingen årsgebyr?" / "Har kortet reiseforsikring eller avbestillingsforsikring?" / "Hva er valutapåslaget i utlandet?"** All are filters or fields on Finansportalen, including "Hvor mange ganger betaler du i annen utenlandsk valuta?". Access: VERIFIED — [Finansportalen kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort). EnterCard, an issuer, publishes press content titled "Hva er beste valuta å betale med?". Access: SNIPPET — [EnterCard/Mynewsdesk](https://www.mynewsdesk.com/no/entercard/news/hva-er-beste-valuta-aa-betale-med-88354)
- **"Kan jeg få kort? (alder, minsteinntekt, krav om medlemskap)"** These are Finansportalen fields (age from and to; minimum income for the lowest limit; "Krav om annet produkt"). Access: VERIFIED. **"Når kan jeg få BankID / egen konto?"** is answered on Forbrukerrådet's "Nesten voksen" page. Access: VERIFIED — [Forbrukerrådet](https://www.forbrukerradet.no/finansportalen/bank/tips-og-rad/nesten-voksen-som-bankkunde/)
- **"Påvirker kredittrammen hvor mye jeg får i boliglån?"** A bank (DNB), a bank (KLP) and a commercial site (Bytt.no) all publish answers saying that the *total granted limit*, not the amount used, is counted. Access: SNIPPET. Applicability: VERIFIED for existing cardholders, high confidence that the question theme exists — [DNB](https://www.dnb.no/dnbnyheter/no/din-okonomi/stor-kredittramme-kan-begrense-boliglan); [KLP](https://www.klp.no/bank/kort/kredittkort/ubrukt-kreditt-pavirker-mulighet-for-boliglan); [Bytt.no](https://www.bytt.no/bank/boliglan/a-dwop/slik-kutter-ubrukte-kredittkort-boliglanet-ditt-grepene-som-oker-laneevnen)
- **"Hvilke rettigheter har jeg når jeg handler på nett med kredittkort vs debetkort?"** 44% had a wrong idea or no idea (2014 survey). Access: SNIPPET — [Forbruker Europa / Forbrukerrådet](https://forbrukereuropa.no/wp-content/uploads/2017/02/Befolkningsundersokelse-om-betaling-ved-kjop-på-internett.pdf)
- **"Er det smart å søke flere banker samtidig?" / "Ser bankene tidligere låneavslag?"** These are observed article titles on a commercial loan site (conflict of interest), and they show that worries about credit checks and rejection exist. Access: SNIPPET — [Brukslån.no](https://xn--bruksln-jxa.no/er-det-smart-a-soke-flere-banker-samtidig/); [Brukslån.no](https://xn--bruksln-jxa.no/ser-bankene-alle-laneavslag-jeg-har-fatt-tidligere/)
- **"Er låneagenten autorisert av Finanstilsynet?"** Observed article title — [Bytt.no](https://www.bytt.no/bank/boliglan/a-pyzl/slik-sjekker-du-om-laneagenten-er-autorisert-av-finanstilsynet)
- **"Bør jeg betale ferien med kredittkort? / Hva koster det?"** Observed seasonal content, for example "Feriefellen 2026: så dyrt blir det å bruke kredittkort på sommerferien" — [Bytt.no](https://www.bytt.no/artikler/forbruker/a-dkpw/feriefellen-2026-sa-dyrt-blir-det-a-bruke-kredittkort-pa-sommerferien)
- **"Hvor mye kan jeg spare på å bytte?"** Forbrukerrådet's framing: nearly 2 in 10 switchers save over NOK 10,000 a year (loans and banks). Access: VERIFIED — [Forbrukerrådet 27.04.2023](https://www.forbrukerradet.no/siste-nytt/en-av-fire-tror-ikke-det-er-noe-a-spare-pa-a-bytte-bank/)
- **Commercial Q&A format:** Kortio runs a "Spør eksperten" section, with examples such as a cohabiting couple asking for card tips and cashback at hardware chains. Access: SNIPPET — [Kortio Spør eksperten](https://kortio.no/spor-eksperten/)

### Inferences
- **(c) First-time questions** centre on eligibility, the meaning of effective rate, and "which card for travel or online shopping". **(d) Existing-cardholder questions** centre on fees and currency mark-up, insurance coverage, cutting the credit limit before a mortgage application, and refinancing a balance. *(INFERRED, medium confidence.)*

### Gaps
- No real "People also ask" boxes or forum threads (Reddit r/norge, Kvinneguiden, Diskusjon.no) were captured directly. Search results surfaced mostly commercial articles.
- No Finansportalen FAQ ("ofte stilte spørsmål") specific to credit cards was found. The card page is a JavaScript app, and the tips section has no card FAQ.
- **No search volumes, by design.**

---

## 7. Friction and abandonment in comparison and application journeys

### Takeaway
**No Norwegian data on hesitation, information overload or abandonment in card comparison or application journeys was found.** The adjacent evidence is pan-European onboarding research by Signicat, an identity vendor with a commercial interest: about 60% of European consumers abandoned an online financial application in the past year (2026), down from 68% (2022). Norwegian friction points that can be documented are mostly structural: eligibility filters, credit checks, registration of the full limit in Gjeldsregisteret and its effect on mortgages, product bundles, and the belief that switching is not worth the effort.

### Cited Findings
- **Signicat "Battle to Onboard 2026: The AI Reality Check" (pan-European, vendor-commissioned):** 60% of consumers abandoned an online financial application in the last year (68% in 2022; 63% in 2020). In Norway, 79% are uncomfortable with AI opening financial products for them. No abandonment figure for Norway alone was visible. Access: SNIPPET. Applicability: INFERRED (EU-wide, all financial products), low-to-medium confidence — [The Paypers](https://thepaypers.com/fraud-and-fincrime/news/signicat-research-shows-record-number-of-europeans-abandoning-financial-applications-during-onboarding); [FF News](https://ffnews.com/news/financial-providers-are-ready-for-agentic-ai-onboarding-a97a0132)
- **Signicat 2019 edition:** onboarding is faster where digital-ID adoption is high, such as Norway (81%), yet even in Norway consumers still often abandon. Access: SNIPPET — [Biometric Update](https://www.biometricupdate.com/201906/survey-suggests-digital-id-could-reduce-high-onboarding-abandonment-rates)
- **Norwegian hesitation drivers (banks generally):**
  - 12% stay because switching "tar for lang tid", and about a quarter think there is little to gain. Access: VERIFIED — [Forbrukerrådet 27.04.2023](https://www.forbrukerradet.no/siste-nytt/en-av-fire-tror-ikke-det-er-noe-a-spare-pa-a-bytte-bank/)
  - 7% say it is too much work, and 14% believe a better rate is impossible (industry survey). Access: VERIFIED — [Finans Norge 03/2026](https://www.finansnorge.no/artikler/2026/03/boliglanskunder-er-aktive/)
- **Comparison complexity:** "sammenligninger mellom banker kan vanskeliggjøres … kundeutbytte og … produktpakker", together with weak digital skills, cognitive capacity or language. Access: VERIFIED — [Finanstilsynet 27.02.2026](https://www.finanstilsynet.no/contentassets/8765573deb55464dafb59acb2210b6ec/forbrukernes-situasjon-i-innskuddsmarkedet.pdf)
- **Credit-limit and mortgage friction:** the full granted limit counts toward debt-to-income regardless of use. Access: SNIPPET — [DNB](https://www.dnb.no/dnbnyheter/no/din-okonomi/stor-kredittramme-kan-begrense-boliglan)
- **Adjacent evidence, EU:** 65% of comparison-tool users experienced a problem (product unavailable 54%, incorrect prices 21%). Access: SNIPPET — [European Commission](https://commission.europa.eu/publications/comparison-tools-and-third-party-verification-schemes_en). **Adjacent evidence, UK:** credit-card DCTs suffer from uncertainty about eligibility, since consumers cannot know before applying whether they will be accepted. Access: SNIPPET — [RPC](https://rpclegal.com/thinking/tech/digital-comparison-tools-the-cmas-verdict)

### Inferences
- In Norway the likely friction points in a card journey are:
  1. not knowing whether one will be accepted;
  2. reluctance to trigger a credit check or a Gjeldsregisteret entry, especially before buying a home;
  3. too many comparable attributes (more than 15 fields on Finansportalen);
  4. distrust of follow-up contact from broker sites.

  BankID-based application flows probably reduce identity friction compared with the EU average. *(HYPOTHESIS, medium confidence; no Norwegian measurement.)*
- **(c) First-time researchers:** most likely to stall at eligibility and understanding interest rates. **(d) Existing cardholders:** most likely to stall at "is it worth the hassle?" and at the mortgage effect of an extra limit. *(INFERRED, medium confidence.)*

### Gaps
- No Norwegian abandonment, drop-off or conversion data for card comparison or application journeys, public or academic.
- No Norwegian study of information overload in financial comparison.
- Signicat's report is vendor-commissioned and not specific to cards; the Norway sub-sample size is unknown.
