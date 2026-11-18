# Enkellån credit card comparison: verified offering, journey and the Norwegian comparison landscape

**How this was collected.** Accessed 2026-11-18. WebFetch could not resolve `enkellaan.no` or `www.finansportalen.no` (DNS "ENOTFOUND"). It failed again on one retry. The same URLs returned HTTP 200 through the session's HTTPS proxy with `curl`, so every page below was downloaded as raw HTML and its visible text pulled out with a parser.
- Enkellån pages (`/kredittkort`, `/kredittkort/tilbud`, `/brukervilkar`, `/personvernpolitikk`, `/`): retrieved 2026-11-18 12:31:23 UTC. The page form script (`kredittkort-form.js`) was retrieved about 12:33 UTC.
- Finansportalen and Forbrukerrådet pages: retrieved 2026-11-18 between 12:31 and 12:37 UTC.

**What the Enkellån copy shows and what it does not.** All Enkellån copy is in the HTML sent by the server. That covers headlines, the FAQ, form labels, the offer cards and the footer. Only live values are filled in by JavaScript (Vue templates), for example the slider's displayed amount `{{ formatKr(form.credit_limit) }}` and the day/month/year options.

**Where technical details come from.** Some details come from Enkellån's public JavaScript and its developer comments, not from text a consumer sees. These are labelled "(from page source code)". Use them to understand the mechanics. Do not quote them as consumer-facing claims.

**Non-Enkellån sites.** Kortio, Kredittkortlisten, Bytt and the others could not be opened. Anything about them is labelled "seen in search snippet, page not opened".

---

## Q1. What exactly does enkellaan.no/kredittkort offer, and how does the journey work?

### Takeaway
Enkellån's credit card page has two parts:
- a free, commission-funded list of 8 card and broker offers;
- a marketing sign-up that collects contact details, birth date and marketing consent in step 1, then job, income, payment remarks, home ownership and postcode in step 2.

After step 2 the list hides cards whose age or income requirements the user does not meet. Applying always happens at the issuer or broker through "Søk her" ad links. The offer list can also be viewed without signing up.

### Cited Findings

**Page title, headline claims and trust badges (landing page /kredittkort)**
- Page `<title>`: "Sammenlign kredittkort – tilbud på e-post og SMS | Enkellån" (Compare credit cards – offers by email and SMS). Meta description: "Sammenlign kredittkort og få tilbud fra utstedere vi samarbeider med. Se effektiv rente, årsavgift og rentefrie dager før du velger. Gratis påmelding." (Compare credit cards and get offers from issuers we work with. See effective interest rate, annual fee and interest-free days before you choose. Free sign-up.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- H1: "Sammenlign kredittkort". Sub-headline: "Velg det beste kortet for deg" (Choose the best card for you). Then: "Sammenlign kortenes kostnader – dette er ikke en kredittkortsøknad" (Compare the cards' costs – this is not a credit card application). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Trust badges:
  - "4.8 / 5 1500+ anmeldelser av Enkellån" (1,500+ reviews of Enkellån); the page does not say where these reviews come from;
  - "80 000+ brukere" (80,000+ users);
  - "Uforpliktende" (no obligation);
  - further down, "80K+ Enkellån-brukere" and "8 Kredittkort vi viser" (8 credit cards we show).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Cost and funding claim: "0 kr koster det deg å sammenligne – vi får provisjon fra partnerne" (It costs you NOK 0 to compare – we get commission from the partners). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Banner: "Sammenlign først / Betal mindre / rente og årsavgift varierer mye mellom kortene" (Compare first / Pay less / interest and annual fee vary a lot between cards). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**Journey steps as the page describes them ("Slik fungerer det": How it works)**
- Intro: "Tre trinn – og påmeldingen er ikke en søknad." (Three steps – and the sign-up is not an application.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Step 1, "Oppgi ønsket kredittgrense og meld deg på": "Dra i glidebryteren, fyll inn navn, e-post, mobilnummer og fødselsdato, og gi samtykke til tilbud på kredittkort og lån. Vi gjør ingen kredittsjekk." (Enter the credit limit you want and sign up: drag the slider, fill in name, email, mobile number and date of birth, and consent to offers on credit cards and loans. We do no credit check.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Step 2, "Fortell litt om deg": "Svar på noen spørsmål om jobb, inntekt og bosted, så viser vi kortene du oppfyller alders- og inntektskravet til." (Tell us a little about yourself: answer some questions about job, income and where you live, and we show the cards whose age and income requirements you meet.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Step 3, "Sammenlign og velg selv": "Se effektiv rente og det representative eksempelet ved hvert kort. Vil du søke, gjør du det hos utstederen eller formidleren." (Compare and choose yourself: see the effective rate and the representative example for each card. If you want to apply, you do so at the issuer or the intermediary.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**How the form behaves**
- Step 1 has two phases (from page source code):
  - the slider and a "Se kortene" (See the cards) button come first, and the button reveals the contact fields;
  - "Meld meg på og se kortene" (Sign me up and see the cards) then submits name, email, phone, birth date, credit limit and consent;
  - after that submit, the user "is already subscribed" before step 2;
  - the screen reads "Du er nå påmeldt. Steg 2 av 2." (You are now signed up. Step 2 of 2.).
  — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
- Step 2 heading: "Steg 2 av 2 / Litt informasjon om deg / Vi trenger litt bakgrunnsinformasjon for å vise deg kortene du oppfyller kravene til." (A little information about you / We need some background information to show you the cards whose requirements you meet.) The submit button is "Vis kortene" (Show the cards). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Every exit from the form goes to `/kredittkort/tilbud`: step 2 done, or a duplicate sign-up. "There is no separate thank-you page" (from page source code). — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
- If the sign-up is temporarily closed, the page shows: "Påmeldingen er midlertidig stengt. Du kan se kortene uten å melde deg på." (Sign-up is temporarily closed. You can see the cards without signing up.) (from page source code) — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)

**Step 1 inputs**
- Credit limit slider:
  - question: "Hvor høy kredittgrense ønsker du?" (How high a credit limit do you want?);
  - range: min 10 000 kr, max 200 000 kr, step 5 000;
  - default 50 000 (page config: `"slider":{"min":10000,"max":200000,"step":5000,"default":50000}`).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Fields:
  - "Fornavn og etternavn" (first and last name);
  - "E-post";
  - "Mobilnummer";
  - "Fødselsdato" as Dag/Måned/År dropdowns (day/month/year); the year list runs 2012 down to 1926;
  - a required consent checkbox.
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- The page also contains a hidden field labelled "Nettsted" (Website). The page source code calls it a "spam trap: hidden from people, filled by bots". It is not a user input. — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Validation (from page source code):
  - the phone number must be a Norwegian mobile number (8 digits starting with 4 or 9);
  - missing consent gives "Du må samtykke for å melde deg på." (You must consent to sign up.);
  - under-18s get "Du må være minst 18 år for å melde deg på." (You must be at least 18 to sign up.), with the comment "the server checks the same; nothing is sent for an under-18".
  — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
- Consent checkbox text (verbatim): "Ja takk, enkellaan.no (Drive Media ApS) kan behandle opplysningene mine og sende meg markedsføringsmateriell om kredittkort- og lånetilbud og andre produkter fra sine samarbeidspartnere via telefon, e-post, WhatsApp og SMS. Drive Media ApS kan bruke personopplysningene som oppgis, til målrettet markedsføring på sosiale medier mv. Jeg kan trekke tilbake samtykket mitt når som helst."
  - Translation: "Yes please, enkellaan.no (Drive Media ApS) may process my information and send me marketing material about credit card and loan offers and other products from its partners via phone, email, WhatsApp and SMS. Drive Media ApS may use the personal data provided for targeted marketing on social media etc. I can withdraw my consent at any time."
  - Under it: "Ved å fortsette godtar du våre brukervilkår og personvernregler." (By continuing you accept our terms of use and privacy rules.)
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**Step 2 questionnaire**
- "Hva er jobben / inntektskilden din?" (What is your job / source of income?) Options:
  - Fast ansatt (permanently employed)
  - Midlertidig ansatt (temporarily employed)
  - Selvstendig næringsdrivende (self-employed)
  - Pensjonist (pensioner)
  - Student
  - Uføretrygdet (on disability benefit)
  - Arbeidssøker (job seeker)
  - Annet (other)
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- The other questions:
  - "Månedlig inntekt før skatt" (monthly income before tax): placeholder "F.eks. 45 000", with −/+ buttons in 1 000 kr steps;
  - "Har du betalingsanmerkninger?" (Do you have payment remarks?): Ja/Nei (yes/no);
  - "Eier du bolig?" (Do you own a home?): Ja/Nei;
  - "Postnummer" (postcode): placeholder "F.eks. 0150", must be 4 digits.
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
- Filtering mechanism (from page source code):
  - the server returns the offer IDs whose "age/income requirements the person does NOT meet";
  - the offers page hides only those;
  - if every card would be hidden, it shows all cards "rather than an empty page".
  — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js); [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- When cards are hidden, the offers page shows: "Vi viser kortene der du oppfyller kravene til alder og inntekt. Vis alle" (We show the cards where you meet the age and income requirements. Show all). — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)

**Representative example and the bypass link on the landing page**
- "Representativt eksempel: Eff. rente 23,1 %, 15 000 kr o/12 mnd. Kostnad 1 764 kr. Totalt 16 764 kr. · Se kortene uten å melde deg på" (Representative example: effective rate 23.1%, NOK 15,000 over 12 months. Cost NOK 1,764. Total NOK 16,764. · See the cards without signing up). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- The same bypass link appears in the footer: "Du kan også se kortene uten å melde deg på." (You can also see the cards without signing up.) A version for browsers without JavaScript says: "Skjemaet krever JavaScript. Du kan se kortene uten å melde deg på." (The form requires JavaScript. You can see the cards without signing up.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**CTAs and their wording**
- On the landing page:
  - "Se kortene" (See the cards), which reveals the contact fields;
  - "Meld meg på og se kortene" (Sign me up and see the cards), the step 1 submit;
  - "Vis kortene" (Show the cards), the step 2 submit;
  - "Sammenlign kort" (Compare cards), which scrolls to the form;
  - "Se kortene uten å melde deg på" (See the cards without signing up).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- On the offers page:
  - each card has "Søk her" (Apply here) next to the label "Annonse" (Advertisement);
  - "Vis alle" (Show all) and "Tilbake til kortene" (Back to the cards).
  — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- Closing CTA block: "Klar til å sammenligne kredittkort? Meld deg på, så får du tilbud på kort fra utstedere og formidlere vi samarbeider med – på e-post og SMS. Du kan melde deg av når du vil." (Ready to compare credit cards? Sign up and you'll get card offers from issuers and intermediaries we work with – by email and SMS. You can unsubscribe whenever you like.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**Offers page (/kredittkort/tilbud): all 8 listings, in page order**
- Header: "Velg kredittkortet som passer deg best:" (Choose the credit card that suits you best) / "8 kort" / "Gratis for deg" (Free for you) / "Du søker hos utstederen" (You apply at the issuer) / "Oppdatert 18.11.2026" (Updated 18.11.2026). — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)

All eight cards show "Årsavgift 0 kr" (annual fee NOK 0) and carry a "Søk her" + "Annonse" button. The score is labelled "Vår vurdering" (Our assessment). "Ex." is the card's representative example.

| # | Listing | Rating | Badge | Eff. rente | Credit limit | Interest-free days | Bullet points (verbatim) | Example (verbatim) |
|---|---|---|---|---|---|---|---|---|
| 1 | Avida Gold | 5,0 | "Prisgaranti i 100 dager" (100-day price guarantee) | 23,40% | 100 000 kr | 45 | "Ingen årsavgift eller uttaksgebyr"; "Reise- og avbestillingsforsikring inkludert"; "Opptil 45 dagers rentefri kreditt" | "Eff. rente 23,4 %, 15 000 kr o/12 mnd. Kostnad 1 780 kr. Totalt 16 780 kr." |
| 2 | Bank Norwegian | 5,0 | "Bonus på alt du kjøper" (bonus on everything you buy) | 24,40% | 150 000 kr | 45 | "Gratis uttak av kontanter i utland"; "Reise- og avbestillingsforsikring inkludert"; "Opptil 45 dagers rentefri kreditt" | "Eff. rente 24,40 %, 15 000 kr o/12 mnd. Kostnad 1 849 kr. Totalt 16 849 kr." (shown twice in two formats) |
| 3 | TF Bank Mastercard | 4,9 | "Årsavgift 0 kr" | 26,69 % | 150 000 kr | 43 | "Rentefritt inntil 43 dager"; "Reise- og avbestillingsforsikring inkludert"; "Inntil 43 dager rentefri kreditt"; "Krav: minst 18 år" (requirement: at least 18) | "Eff. rente 26,69 %, 25 000 kr o/12 mnd. Kostnad 3 337 kr. Totalt 28 337 kr." |
| 4 | Re:member | 4,8 | "Inntil 45 dagers rentefri kreditt" | 29,89 % | 150 000 kr | 45 | "Opptil 20 % rabatt i mer enn 200 nettbutikker"; "Reise- og avbestillingsforsikring inkludert"; "Opptil 150 000 kr i kredittgrense" | "Eff. rente 29,89 %, 15 000 kr o/12 mnd. Kostnad 1 695 kr. Totalt 16 695 kr." |
| 5 | Unofinans | 4,7 | "Få de beste fordelene" (get the best benefits) | 23,10% | 150 000 kr | 45 | "1 søknad - få tilbud fra flere banker" (1 application – get offers from several banks); "Flere fordeler basert på egne behov"; "Gratis og uforpliktende" | "Eff. rente 23,1% 15.000 kr. o/12 mnd. Kostnad 1.764 kr. Totalt 16.764 kr." |
| 6 | Axo Finans | 4,3 | "1 søknad – Flere kredittkort" | 26,69% | 150 000 kr | 50 | "Søk på under 1 minutt"; "Du velger kortet selv"; "Søknaden skjer hos Axo Finans" | "Eff. rente 24,40 %, 15 000 kr o/12 mnd. Kostnad 1 849 kr. Totalt 16 849 kr." |
| 7 | Lendo | 4,3 | "Inntil 50 rentefrie dager" | 26,69% | 150 000 kr | 50 | "Søk flere kredittkort med én søknad"; "Kostnadsfritt og uforpliktende"; "Du velger kortet selv" | "Eff. rente 26,69 %, 25 000 kr o/12 mnd. Kostnad 3 337 kr. Totalt 28 337 kr." |
| 8 | Sambla | 4,1 | "Kredittkort som passer for deg" | 26,69% | 150 000 kr | 45 | "Flere kort i én oversikt"; "Du velger kortet selv"; "Sammenlign uten kostnad" | "Eff. rente 21,66 %, 45 000 kr o/12 mnd. Kostnad 4 963 kr. Totalt 49 963 kr." |

Source for the table: [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)

- Ordering disclosure under the list: "Rekkefølgen er satt av Enkellån. Den påvirkes av avtalene vi har med partnerne og av provisjonen vi mottar." (The order is set by Enkellån. It is influenced by the agreements we have with the partners and by the commission we receive.) — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- Footer on the offers page: "Enkellån (Drive Media ApS, CVR 43963287) er en markedsførings- og sammenligningstjeneste, ikke en bank. Vi gir ikke kreditt og vurderer ikke søknader. Lenkene over er annonser: vi kan motta provisjon når du søker via dem. Utstederen eller formidleren avgjør søknaden." (… is a marketing and comparison service, not a bank. We do not grant credit and do not assess applications. The links above are advertisements: we may receive commission when you apply via them. The issuer or intermediary decides the application.) — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- Outbound link mechanics:
  - all 8 "Søk her" links point to a third-party redirect domain (`https://clogylonnottachi.com/<uuid>?lid={lid}`);
  - the site loads a "voluum-tracker" plugin and Google Tag Manager;
  - after sign-up, the offers page puts the sign-up's key (`?lrk=`) into its offer links on the server for revenue attribution (from page source code: "functions/lead_revenue").
  — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud); [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
- Ad tracking (from page source code): the form captures these parameters from the arrival URL:
  - utm_source, utm_medium, utm_campaign, utm_content, utm_term;
  - gclid, gbraid, wbraid (Google);
  - fbclid (Meta);
  - msclkid (Microsoft);
  - ttclid (TikTok).
  It also states: "Nothing financial (credit limit, income, payment remarks) is ever pushed to the dataLayer." — [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)

**Guidance text**
- Offers page, "Slik sammenligner du kredittkort" (How to compare credit cards): "Tre tall sier mest om hva et kort koster deg." (Three numbers say the most about what a card costs you.)
  - "Effektiv rente – Tar med både nominell rente og gebyrer, og viser hva kreditten koster hvis du ikke betaler hele saldoen ved forfall. Lavere er bedre." (Includes both nominal rate and fees, and shows what the credit costs if you don't pay the full balance when due. Lower is better.)
  - "Årsavgift – Betales uansett om du bruker kortet eller ikke. Mange kort har 0 kr; andre tar betalt for fordeler som forsikring og bonus." (Paid whether or not you use the card. Many cards are NOK 0; others charge for benefits like insurance and bonus.)
  - "Rentefrie dager – Betaler du hele fakturaen innen forfall, betaler du ingen rente på varekjøp. Antallet dager varierer, og kontantuttak er som regel ikke rentefritt." (If you pay the whole invoice by the due date, you pay no interest on purchases. The number of days varies, and cash withdrawals are usually not interest-free.)
  — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- Landing page, "Vi viser prisen på hvert kort" (We show the price of every card): "Effektiv rente og et representativt eksempel står ved hvert kort, og årsavgift og rentefrie dager der utstederen oppgir dem. … Vil du søke, gjør du det direkte hos utstederen eller formidleren, som gjør sin egen kredittvurdering." (Effective rate and a representative example are shown for each card, plus annual fee and interest-free days where the issuer provides them. … If you want to apply, you do so directly at the issuer or intermediary, which does its own credit assessment.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Landing page, "Prisen er alltid synlig" (The price is always visible) and "Du har kontroll – Påmeldingen er ikke en søknad. Du velger selv om og hvor du vil søke, og du kan melde deg av e-post og SMS når som helst." (You're in control – The sign-up is not an application. You choose yourself whether and where to apply, and you can unsubscribe from email and SMS at any time.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- Landing page footer on the debt register: "Hele kredittgrensen på et kredittkort registreres i Gjeldsregisteret og tas med når banker vurderer deg, også om du ikke bruker kreditten. Tjenesten er for personer som er 18 år eller eldre." (The whole credit limit on a credit card is registered in the Debt Register and counted when banks assess you, even if you don't use the credit. The service is for people aged 18 or older.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**FAQ ("Spørsmål og svar om kredittkort": Questions and answers about credit cards), verbatim with translations**
- "Hva er Enkellån?" (What is Enkellån?) — "Enkellån er en gratis markedsførings- og sammenligningstjeneste. Vi viser tilbud fra kortutstedere og formidlere vi samarbeider med, og sender deg tilbud på e-post og SMS hvis du melder deg på. Vi er ikke en bank, vi gir ikke kreditt og vi vurderer ikke søknader. Vi kan motta provisjon når du søker via lenkene våre." (Enkellån is a free marketing and comparison service. We show offers from card issuers and intermediaries we work with, and send you offers by email and SMS if you sign up. We are not a bank, we don't grant credit and we don't assess applications. We may receive commission when you apply via our links.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Er påmeldingen en søknad om kredittkort?" (Is the sign-up a credit card application?) — "Nei. Påmeldingen er ikke en søknad, og vi gjør ingen kredittsjekk. Hvis du vil søke om et kort, gjør du det hos utstederen eller formidleren, som gjør sin egen kredittvurdering." (No. The sign-up is not an application, and we do no credit check. If you want to apply for a card, you do so at the issuer or intermediary, which does its own credit assessment.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Hva bør jeg se etter når jeg sammenligner kredittkort?" (What should I look for when comparing credit cards?) — "Se først på effektiv rente, som tar med både rente og gebyrer, og på hva kortet koster i året. Sjekk også hvor mange rentefrie dager du får, og hva kontantuttak koster. Bonus og forsikringer kan være fint, men veier sjelden opp for høy rente hvis du ikke betaler hele regningen hver måned." (First look at the effective rate, which includes both interest and fees, and at what the card costs per year. Also check how many interest-free days you get, and what cash withdrawals cost. Bonus and insurance can be nice, but rarely outweigh a high interest rate if you don't pay the whole bill every month.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Hvem kan få kredittkort?" (Who can get a credit card?) — "Det er kortutstederen som bestemmer. De fleste krever at du er minst 18 år (noen 20 eller 23 år), har fast inntekt og ikke har betalingsanmerkninger. Alders- og inntektskrav står ved hvert tilbud når vi har dem fra utstederen." (The card issuer decides. Most require you to be at least 18 (some 20 or 23), have a steady income and no payment remarks. Age and income requirements are shown with each offer when we have them from the issuer.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Påvirker et kredittkort muligheten til å få lån senere?" (Does a credit card affect the possibility of getting a loan later?) — "Ja, det kan det. Hele kredittgrensen registreres i Gjeldsregisteret og regnes med når banker vurderer deg, også om du ikke bruker kreditten. Velg derfor ikke høyere kredittgrense enn du trenger." (Yes, it can. The whole credit limit is registered in the Debt Register and counted when banks assess you, even if you don't use the credit. So don't choose a higher credit limit than you need.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Hvorfor spør dere om inntekt og fødselsdato?" (Why do you ask for income and date of birth?) — "Fødselsdatoen bruker vi først til å kontrollere at du er 18 år eller eldre – tjenesten er bare for voksne. Kortutstederne har i tillegg krav til alder og inntekt, så svarene brukes til å skjule kort der du ikke oppfyller alders- eller inntektskravet, og til å tilpasse tilbudene vi sender deg." (We first use the date of birth to check that you are 18 or older – the service is only for adults. Card issuers also have age and income requirements, so the answers are used to hide cards where you don't meet the age or income requirement, and to tailor the offers we send you.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- "Hvordan melder jeg meg av?" (How do I unsubscribe?) — "Klikk på avmeldingslenken nederst i en e-post eller SMS fra oss. Du kan også skrive til info@enkellaan.no." (Click the unsubscribe link at the bottom of an email or SMS from us. You can also write to info@enkellaan.no.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**Operator footer (landing page)**
- "Enkellån drives av Drive Media ApS (CVR 43963287), Primulavej 8, 6710 Esbjerg V, Danmark. Vi er en gratis markedsførings- og sammenligningstjeneste, ikke en bank. Vi gir ikke kreditt og vurderer ikke søknader, og påmeldingen er ikke en søknad om kredittkort. Når du søker om et kort gjennom lenkene våre, søker du direkte hos kortutstederen eller formidleren, som gjør sin egen kredittvurdering. Vi kan motta provisjon fra samarbeidspartnerne våre."
  - Translation: "Enkellån is run by Drive Media ApS … We are a free marketing and comparison service, not a bank. We do not grant credit or assess applications, and the sign-up is not a credit card application. When you apply for a card via our links you apply directly with the card issuer or intermediary, which does its own credit assessment. We may receive commission from our partners."
  - The footer also shows "Org-nummer: DK43963287".
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

**Homepage context (a different product: consumer loans)**
- The homepage sells loan comparison, not cards:
  - title "EnkelLån - Lån i dag på bare 2 minutter" (Loan today in just 2 minutes);
  - loan slider 10 000–600 000 kr;
  - claims "20+ Banker og långivere" (banks and lenders), "Vi søker hos over 20 banker" (We apply at over 20 banks) and "91% Får et godt tilbud" (91% get a good offer);
  - named customer testimonials with loan amounts;
  - "Låneeksempel: Eff rente 14.83% 100 000 o/5år Kost 38 961 kr Tot 138 961 kr. Maks effektiv rente: 28,8%".
  — [Enkellån homepage](https://enkellaan.no/)

### Inferences
- The service is primarily a lead-generation and marketing-list product with a comparison list attached:
  - the page title literally promises "tilbud på e-post og SMS" (offers by email and SMS);
  - marketing consent is required to submit step 1;
  - by the page source code's own description, the user is subscribed before the questionnaire.
  Ads should not suggest that the questionnaire is needed before any marketing begins, or that abandoning step 2 means "nothing happens".
- The age/income filter is a client-side hide/show of a fixed list of 8, with a "Vis alle" (show all) override. It is not personalised underwriting, a pre-approval or a "chance of approval" estimate. Ads must not imply "cards you'll be approved for".
- The 200,000 kr slider maximum exceeds the highest limit on any listing (150,000 kr). According to the page source code, filtering uses age and income only, so the chosen credit limit does not appear to change which cards are shown.
- Payment remarks, home ownership and postcode are collected, but the page never says they filter cards. The terms say job, income, age and postcode are used "to show relevant offers and tailor our marketing". Ads should not claim "cards for people with payment remarks" or similar.
- Four of the 8 listings are brokers or intermediaries (Unofinans, Axo Finans, Lendo, Sambla), not card issuers. Their own copy says "1 søknad – få tilbud fra flere banker" (one application, offers from several banks). Their headline rate is therefore presumably a representative figure for a card they broker, not a card of their own.
- Possible internal inconsistencies on the offers page (my reading; flag before reusing any numbers in ads):
  - Axo Finans: headline effective rate 26,69%, but its example uses 24,40%.
  - Sambla: headline 26,69%, but its example uses 21,66% on 45 000 kr.
  - Re:member: 29,89% on 15 000 kr over 12 months with cost 1 695 kr. That is lower than the 23,1% example (1 764 kr). A standard 12-month annuity at 29.89% effective would cost about 2,230 kr (my calculation), so the Re:member example looks inconsistent with its own rate.
  - Cross-check: the 23.1%, 24.4% and 26.69% examples roughly match the same annuity calculation (about 1,752 / 1,853 / 3,350 kr).
- The listing order matches descending "Vår vurdering" scores (5.0 → 4.1), not effective rate. The cheapest headline rate (Unofinans 23.10%) is 5th. Combined with the order disclosure, the ratings themselves may reflect commercial factors. The page does not say so either way.
- "Oppdatert 18.11.2026" equals the access date. It may be generated automatically on each page load rather than showing when the offers were last checked. Not verifiable from the page.
- Loan-homepage claims must not be transferred into credit card ads. These include "Vi søker hos over 20 banker", "91% får et godt tilbud", the testimonials and "Lån i dag på bare 2 minutter". The credit card page itself makes none of them.

### Gaps
- What the "4.8 / 5 1500+ anmeldelser" rating is based on (platform, date). Not stated on the page.
- How the "Vår vurdering" scores are calculated. No methodology is shown on either page.
- Per-card age and income requirements. Only TF Bank shows "Krav: minst 18 år" on the visible list; the rest sit in Enkellån's server logic, which is not visible.
- How the "80 000+ brukere" claim is counted. It also appears on the loan homepage, so it is likely sitewide rather than credit-card-specific.
- I did not submit the form. What the screens look like after submitting, and whether the filter note appears, are inferred from page source code, not observed.

---

## Q2. What do the terms (brukervilkår) and privacy policy (personvernpolitikk) say?

### Takeaway
The terms (dated 07.10.2026) cover these points:
- Drive Media ApS (Denmark) owns and runs the site;
- it is not a bank, lender, card issuer or licensed loan broker;
- it does no credit check;
- it is paid by commission;
- commission and partner agreements affect the order of offers.

The privacy policy (no date shown) adds these:
- credit card sign-up data is used for marketing by phone, email, WhatsApp and SMS, capped at "inntil 5 e-poster og 5 SMS per uke" (up to 5 emails and 5 SMS per week);
- the data is used for social-media targeting with hashed email and phone;
- the data is not sent to card issuers;
- under-18 sign-ups are rejected and not stored.

### Cited Findings

**Terms of use (Brukervilkår), "Sist oppdatert 07.10.2026" (last updated 7 Oct 2026)**
- Owner and operator: "nettstedet enkellaan.no (heretter «Tjenesten»), som eies og drives av Drive Media ApS, CVR-nr. 43963287, Primulavej 8, 6710 Esbjerg V, Danmark" (the website … which is owned and operated by Drive Media ApS …). — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Service description: "Tjenesten er en gratis og uforpliktende markedsførings- og sammenligningstjeneste for forbrukslån og kredittkort. Vi samler inn opplysningene og ønskene dine, viser deg tilbud fra våre utvalgte samarbeidspartnere (banker, kortutstedere og lisensierte låneformidlere), og sender deg tilbud på e-post og SMS når du har samtykket til det." (The service is a free and non-binding marketing and comparison service for consumer loans and credit cards. We collect your information and wishes, show you offers from our selected partners (banks, card issuers and licensed loan brokers), and send you offers by email and SMS when you have consented.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Legal role: "Tjenesteleverandøren er ikke en bank, långiver, kortutsteder eller lisensiert låneformidler, og vi treffer ingen beslutninger om tildeling av lån eller kreditt." (The service provider is not a bank, lender, card issuer or licensed loan broker, and we make no decisions about granting loans or credit.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Credit check: "Tjenesteleverandøren foretar ikke kredittsjekk eller kredittvurdering. Eventuelle kredittsjekker og kredittvurderinger foretas utelukkende av bankene, kortutstederne og de lisensierte formidlerne vi samarbeider med." (The service provider does not perform credit checks or credit assessments. Any credit checks and assessments are carried out solely by the banks, card issuers and licensed intermediaries we work with.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Funding: "Tjenesten er 100 % kostnadsfri for deg som bruker. Tjenesteleverandøren mottar i stedet provisjon fra samarbeidspartnerne når du søker via lenkene våre." (The service is 100% free for you as a user. The provider instead receives commission from partners when you apply via our links.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- How it works: "Når du melder deg på, lagrer vi opplysningene dine og viser deg lån eller kredittkort du kan søke om. Søknaden gjør du alltid selv, direkte hos banken, kortutstederen eller låneformidleren … Lenkene er annonselenker: vi mottar provisjon når du søker via dem." (When you sign up we store your information and show you loans or credit cards you can apply for. You always make the application yourself, directly with the bank, card issuer or loan broker … The links are advertising links: we receive commission when you apply via them.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Ranking: "Rekkefølgen tilbudene vises i, bestemmes av Enkellån ut fra en samlet vurdering. Den påvirkes av avtalene vi har med samarbeidspartnerne og av provisjonen vi mottar. Opplysninger du gir om jobb, inntekt, alder og postnummer brukes til å vise deg relevante tilbud og til å tilpasse markedsføringen vår." (The order in which offers are shown is decided by Enkellån based on an overall assessment. It is influenced by the agreements we have with partners and the commission we receive. Information you give about job, income, age and postcode is used to show relevant offers and to tailor our marketing.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Who makes the contract: "Enhver låne- eller kredittkortavtale inngås direkte mellom deg og tilbyderen, på tilbyderens vilkår. Tilbyderen avgjør selv om du får innvilget lån eller kort." (Any loan or card agreement is entered directly between you and the provider, on the provider's terms. The provider alone decides whether you are granted a loan or card.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Age: "For å benytte Tjenesten må du være myndig (fylt 18 år) og ha rett til å inngå bindende avtaler." (To use the service you must be of legal age (18) and able to enter binding agreements.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Accuracy duty: "Bevisst oppgivelse av uriktige opplysninger kan medføre at tilbud trekkes tilbake, og i ytterste konsekvens politianmeldelse for forsøk på bedrageri." (Knowingly giving false information may lead to offers being withdrawn and, ultimately, a police report for attempted fraud.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Data sharing (§5): "…vi kan dele dem med samarbeidspartnere når du har samtykket til det." (…we may share them with partners when you have consented.) Consent can be withdrawn via the unsubscribe link or by email to info@enkellaan.no. — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Liability: Enkellån takes no responsibility for the content of partner offers, for approval or rejection, or for losses from third-party agreements. "Renter, gebyrer og representative eksempler på nettstedet er hentet fra tilbyderne og kan endres uten varsel. Det er alltid tilbyderens egne vilkår som gjelder." (Interest, fees and representative examples on the site come from the providers and may change without notice. The provider's own terms always apply.) — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)
- Governing law: Danish law, "med forbehold for de ufravikelige forbrukervernreglene som gjelder i landet der du har bosted" (subject to the mandatory consumer protection rules of your country of residence). The consumer may sue in their own country or in Denmark. — [Enkellån brukervilkår](https://enkellaan.no/brukervilkar)

**Privacy policy (Personvernpolitikk): no "last updated" date shown on the page**
- Controller contact: "Enkellån.no, Primulavej 8, 6710 Esbjerg V, Danmark, CVR-nr.: 43963287, info@enkellaan.no". The legal entity name Drive Media ApS is not written in the controller block; it is named in the consent text and the terms. — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- General data categories: name, email, phone, IP address, timestamp, "Nettleser – varslings-ID" (browser notification ID), collected "for markedsføring av våre tjenester" (for marketing our services). — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Credit-card-specific section, "Kredittkort-sammenligning (enkellaan.no/kredittkort)": "Når du melder deg på … behandler vi navn, e-postadresse, telefonnummer og ønsket kredittgrense. Vi behandler også fødselsdatoen din, som vi bruker til å kontrollere at du er 18 år eller eldre. I steg 2 behandler vi i tillegg jobbsituasjon, månedsinntekt før skatt, om du har betalingsanmerkninger, om du eier bolig og postnummer." (When you sign up … we process name, email, phone and desired credit limit, plus date of birth to check you are 18+. In step 2 we also process job situation, monthly pre-tax income, whether you have payment remarks, whether you own a home, and postcode.) — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Purposes, verbatim:
  - "sende deg markedsføring om kredittkort og lån fra oss og våre samarbeidspartnere via telefon, e-post, WhatsApp og SMS, i tråd med samtykket du gir i skjemaet (inntil 5 e-poster og 5 SMS per uke)" (send you marketing about credit cards and loans from us and our partners via phone, email, WhatsApp and SMS, according to the consent you give in the form (up to 5 emails and 5 SMS per week));
  - "vise deg hvilke kort på enkellaan.no/kredittkort/tilbud du oppfyller alders- og inntektskravet til" (show you which cards you meet the age and income requirements for);
  - "målrettet markedsføring på sosiale medier, der e-postadresse og telefonnummer deles i kryptert (hashet) form" (targeted social-media marketing, where email and phone are shared in encrypted (hashed) form).
  — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- No credit check and no sharing with issuers: "Vi gjør ingen kredittvurdering, og vi sender ikke opplysningene dine til kortutstederne. Søker du et kort, gjør du det selv hos utstederen eller formidleren." (We do no credit assessment, and we do not send your information to card issuers. If you apply for a card, you do so yourself at the issuer or intermediary.) — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Legal basis, withdrawal and under-18s: "Behandlingsgrunnlaget er samtykket ditt (personvernforordningen art. 6 nr. 1 bokstav a). … Tjenesten er bare for personer som er 18 år eller eldre. Er du under 18 år, avvises påmeldingen, og opplysningene i skjemaet lagres ikke." (The legal basis is your consent (GDPR Art. 6(1)(a)). … The service is only for people 18 or older. If you are under 18, the sign-up is rejected and the form data is not stored.) — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Processors and tracking: "Opplysningene lagres hos databehandlerne våre for e-post og SMS (Campaign Monitor, Mailchimp og inMobile) og i automatiseringsplattformen vår (Make). Vi registrerer også tidspunkt, IP-adresse, nettleser, siden du kom fra og annonse-identifikatorer (f.eks. gclid og fbclid) for å måle markedsføringen vår." (Data is stored with our email/SMS processors (Campaign Monitor, Mailchimp and inMobile) and in our automation platform (Make). We also record time, IP address, browser, referring page and ad identifiers (e.g. gclid and fbclid) to measure our marketing.) — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- General legal bases also listed:
  - legitimate interest (GDPR 6(1)(f)) with reference to the Danish Data Protection Act §6 and the Danish Marketing Practices Act §10;
  - legitimate interest in product development.
  — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- General sharing clause: "Enkellån videreformidler dine persondata kun til samarbeidspartnere, herunder til markedsføringsbruk, hvis du på forhånd har gitt samtykke til dette." (Enkellån passes your data on only to partners, including for marketing use, if you have consented in advance.) The policy also reserves the right to use processors outside the EU/EEA, "f.eks. i USA" (e.g. in the USA). — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Retention: "For markedsføringsformål oppbevarer vi dine personopplysninger i den perioden som samtykker gjelder for, og i ytterligere 3 år etter det til enhver tid senest utsendte markedsføringsmaterialet." (For marketing purposes we keep your data while the consent applies and for a further 3 years after the most recently sent marketing material.) — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
- Complaints go to the Norwegian Datatilsynet (address given). — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)

### Inferences
- Legal role. Enkellån positions itself as a marketer and comparison publisher, not a credit intermediary. It explicitly says it is not a licensed loan broker. Ad copy should avoid broker-style verbs such as "vi finner kortet for deg", "vi søker for deg" or "vi forhandler" (we find the card for you, we apply for you, we negotiate).
- The weekly cap ("inntil 5 e-poster og 5 SMS per uke") covers email and SMS only. The consent also covers phone and WhatsApp, and no frequency is stated for those.
- Possible ambiguity on data sharing:
  - the credit card section says data is not sent to card issuers;
  - the terms and the general privacy clause allow sharing with partners "når du har samtykket";
  - the consent text authorises Drive Media to send partner marketing itself, and to use data for social-media targeting (hashed email and phone go to the ad platforms).
  The safe wording is "Enkellån sends you offers; your sign-up details are not sent to card issuers". Avoid "your data is never shared with anyone".
- Clicking "Søk her" carries an Enkellån tracking key to a redirect domain (from page source code). This is attribution, not the passing of form data, but avoid claims like "no tracking".

### Gaps
- The privacy policy shows no date, so I could not establish when the credit card section was added.
- How often phone or WhatsApp marketing happens in practice. Not stated.
- Whether a licence or registration exists with Finanstilsynet or the Danish FSA. The terms deny being a "lisensiert låneformidler" (licensed loan broker). I did not check registries.

---

## Q3. Verification of claims from the earlier (2 Nov 2026) review

### Takeaway
All 13 earlier claims are **CONFIRMED** against the pages as of 2026-11-18 12:31 UTC. No values changed. Several claims need a caveat (below) so they are not overstated in ads.

### Cited Findings
1. **Operator Drive Media ApS (CVR 43963287, Esbjerg, Denmark): CONFIRMED.** Full address: Primulavej 8, 6710 Esbjerg V. The privacy policy's controller block reads "Enkellån.no … CVR-nr.: 43963287" without naming Drive Media ApS. — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [brukervilkår](https://enkellaan.no/brukervilkar); [personvernpolitikk](https://enkellaan.no/personvernpolitikk)
2. **Credit limit selector NOK 10,000–200,000: CONFIRMED.** Step 5,000, default 50,000 (page config). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
3. **Registration fields name / email / mobile / birthdate / marketing consent: CONFIRMED.**
   - The consent is required to submit.
   - The phone must be a Norwegian mobile number (from page source code).
   - The consent covers phone, email, WhatsApp, SMS and social-media targeting.
   — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
4. **Questionnaire on employment, gross monthly income, payment remarks, homeownership, postcode: CONFIRMED.**
   - There are 8 job options (listed in Q1).
   - Step 2 comes after the user is already subscribed (from page source code).
   — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
5. **Offers filtered by age and income: CONFIRMED.**
   - Filtering hides cards the user doesn't qualify for on age or income.
   - A "Vis alle" link restores all cards.
   - If every card would be hidden, all are shown.
   - Payment remarks, home ownership and postcode are not stated as filters.
   — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud); [kredittkort-form.js](https://enkellaan.no/wp-content/themes/enkellaan/assets/js/kredittkort-form.js)
6. **"Registration is not a credit card application and involves no credit check": CONFIRMED.** Verbatim: "Påmeldingen er ikke en søknad, og vi gjør ingen kredittsjekk." The terms add that Enkellån makes no credit assessment either. — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [brukervilkår](https://enkellaan.no/brukervilkar)
7. **Visitors can view cards without subscribing: CONFIRMED.** The link "Se kortene uten å melde deg på" points to /kredittkort/tilbud, and the full list is visible there without signing up. — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
8. **Landing example NOK 15,000 / 12 months / 23.1% effective / cost NOK 1,764 / total NOK 16,764: CONFIRMED.** It matches the Unofinans listing's example. — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
9. **8 listings, all NOK 0 annual fee, effective rates 23.10%–29.89%: CONFIRMED.**
   - The listings are Avida Gold, Bank Norwegian, TF Bank Mastercard, re:member (shown as "Re:member"), Unofinans, Axo Finans, Lendo and Sambla.
   - The headline rates run from 23,10% (Unofinans) to 29,89% (Re:member).
   - The rates inside the examples run 21,66%–29,89%, because Axo's and Sambla's examples differ from their headline rates.
   - The list is "Oppdatert 18.11.2026".
   — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
10. **Ratings are Enkellån's own: CONFIRMED.** Each score is labelled "Vår vurdering" (Our assessment); no methodology is given. — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
11. **Commercial agreements influence order: CONFIRMED.** Verbatim on the offers page: "Rekkefølgen er satt av Enkellån. Den påvirkes av avtalene vi har med partnerne og av provisjonen vi mottar." The landing page and terms say the same. — [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud); [brukervilkår](https://enkellaan.no/brukervilkar)
12. **Up to 5 emails and 5 SMS weekly: CONFIRMED.** Verbatim: "(inntil 5 e-poster og 5 SMS per uke)". Phone and WhatsApp are also consented channels, with no stated frequency. — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)
13. **Card-registration details not sent to issuers: CONFIRMED.** Verbatim: "vi sender ikke opplysningene dine til kortutstederne". Hashed email and phone are shared with social-media platforms for targeting, and data is stored with Campaign Monitor, Mailchimp, inMobile and Make. — [Enkellån personvernpolitikk](https://enkellaan.no/personvernpolitikk)

### Inferences
- No values changed between 2 Nov and 18 Nov 2026. The terms date (07.10.2026) is before the earlier review, and the offers page shows the same 8 listings.

### Gaps
- None of the 13 claims came out NOT FOUND.
- I could not check whether listing details (for example the rates) changed between 2 and 18 Nov. The earlier review gave only the range, not per-card values.

---

## Q4. What consumer problems does the page appear designed to solve, based on its own copy?

### Takeaway
Judged by its own copy, the page addresses seven worries:
1. Not knowing what a card really costs.
2. Fear that comparing means applying or a credit check.
3. Uncertainty about whether you qualify.
4. Wanting to keep control without obligation.
5. Being lured by rewards while paying high interest.
6. A card limit hurting future loan chances (the Gjeldsregisteret, Norway's debt register).
7. Hidden cash-withdrawal costs.

This reflects how the business positions itself. It is not evidence of how consumers actually think.

### Cited Findings
- **Opaque cost, so "show me the price":**
  - "Sammenlign kortenes kostnader" (Compare the cards' costs);
  - "Vi viser prisen på hvert kort" (We show the price of every card);
  - "Prisen er alltid synlig … Da ser du hva kortet koster før du velger." (The price is always visible … Then you see what the card costs before you choose.);
  - "Sammenlign først / Betal mindre / rente og årsavgift varierer mye mellom kortene" (Compare first / Pay less / interest and annual fee vary a lot between cards).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Fear that comparing equals applying or a credit check:**
  - "dette er ikke en kredittkortsøknad" (this is not a credit card application);
  - "Tre trinn – og påmeldingen er ikke en søknad." (Three steps – and the sign-up is not an application.);
  - "Vi gjør ingen kredittsjekk." (We do no credit check.);
  - "Uforpliktende" (No obligation).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **"Will I even qualify?":**
  - "så viser vi kortene du oppfyller alders- og inntektskravet til" (then we show the cards whose age and income requirements you meet);
  - FAQ "Hvem kan få kredittkort? … De fleste krever at du er minst 18 år (noen 20 eller 23 år), har fast inntekt og ikke har betalingsanmerkninger." (Who can get a credit card? … Most require you to be at least 18 (some 20 or 23), have a steady income and no payment remarks.)
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Autonomy and control:**
  - "Du har kontroll … Du velger selv om og hvor du vil søke" (You're in control … You choose yourself whether and where to apply);
  - "Søknaden / Du velger / om og hvor du vil søke – hos utstederen" (The application / You choose / whether and where to apply – at the issuer).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Rewards that mask interest cost:** "Bonus og forsikringer kan være fint, men veier sjelden opp for høy rente hvis du ikke betaler hele regningen hver måned." (Bonus and insurance can be nice, but rarely outweigh a high interest rate if you don't pay the whole bill every month.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Effect on future borrowing (debt register):** "Hele kredittgrensen registreres i Gjeldsregisteret og regnes med når banker vurderer deg, også om du ikke bruker kreditten. Velg derfor ikke høyere kredittgrense enn du trenger." (The whole credit limit is registered in the Debt Register and counted when banks assess you, even if unused. So don't choose a higher limit than you need.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Cash-withdrawal cost:**
  - FAQ: "Sjekk også … hva kontantuttak koster." (Also check … what cash withdrawals cost.);
  - offers page: "kontantuttak er som regel ikke rentefritt" (cash withdrawals are usually not interest-free).
  — [Enkellån /kredittkort](https://enkellaan.no/kredittkort); [Enkellån /kredittkort/tilbud](https://enkellaan.no/kredittkort/tilbud)
- **Paying to compare:** "0 kr koster det deg å sammenligne" (It costs you NOK 0 to compare). — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)
- **Passive deal-finding ("send me offers"):** page title "Sammenlign kredittkort – tilbud på e-post og SMS"; "Meld deg på, så får du tilbud på kort … på e-post og SMS." (Sign up and you'll get card offers … by email and SMS.) — [Enkellån /kredittkort](https://enkellaan.no/kredittkort)

### Inferences
- The copy is heavily risk-reducing and compliance-toned: "not an application", "no credit check", "you choose", "price visible", debt-register warning. This suggests the target visitor is assumed to be cautious, or to worry about rejection or credit checks.
- The copy points the user to the effective rate as the key metric. Yet the order is commercial and the cheapest card is 5th. That tension matters for any "find the cheapest card" ad claim.

### Gaps
- Whether these messages are based on Enkellån's own customer research is not stated.

---

## Q5. Landscape: credit card comparison options for Norwegian consumers

### Takeaway
**Finansportalen (neutral, public).** Forbrukerrådet's Finansportalen does compare credit cards. The old `finansportalen.no` URLs now redirect to `forbrukerradet.no/finansportalen/`. Its comparison:
- sorts by default on effective rate, lowest first;
- treats a usage-based "Sum gebyrer" (total fees) as decision-relevant, alongside currency surcharge, cash-withdrawal fees, minimum payment and income and age requirements;
- is publicly funded, by Forbrukerrådet's own description.

**Commercial alternatives.** These include affiliate comparison sites (Kredittkortlisten, Kortio, Bytt, Kredittkort360, Bestekredittkortet, Dagbladet's credit card section) and multi-bank card brokers (Lendo, Sambla, Axo Finans, Unofinans). The four brokers are also listings on Enkellån itself.

### Cited Findings

**Forbrukerrådet Finansportalen (neutral)**
- Redirects: `https://www.finansportalen.no/`, `/bank/` and `/bank/kredittkort/` all return HTTP 301 to `https://www.forbrukerradet.no/finansportalen/` (observed 2026-11-18 12:31 UTC). — [Finansportalen (Forbrukerrådet)](https://www.forbrukerradet.no/finansportalen/)
- Hub copy: "Forbrukerrådet overvåker markedet for deg. Her får du hjelp til å sammenlikne og flytte på pensjonsprodukter, banktjenester, forsikring og fond." (The Consumer Council monitors the market for you. Here you get help comparing and switching pension products, banking services, insurance and funds.) — [Finansportalen (Forbrukerrådet)](https://www.forbrukerradet.no/finansportalen/)
- The Bank section lists "Kredittkort – Finn det beste kredittkortet." (Credit cards – Find the best credit card.) alongside loans, savings, current accounts, BSU (youth home savings) and bank switching. — [Finansportalen Bank](https://www.forbrukerradet.no/finansportalen/bank/)
- Funding and status: "Forbrukarrådet er ein uavhengig interesseorganisasjon, med offentleg finansiering." (Nynorsk: The Consumer Council is an independent interest organisation with public funding.) — [Forbrukerrådet om oss](https://www.forbrukerradet.no/forside/om-oss/)
- Data source: "Finansportalen samler inn renter og gebyrer for de fleste banker som opererer i Norge." (Finansportalen collects interest rates and fees for most banks operating in Norway.) Also: "Finansportalen stiller sine data gratis til rådighet" (makes its data available free), via a REST/JSON API under a distribution agreement. — [Finansportalen: Bruk av våre data](https://www.forbrukerradet.no/finansportalen/bank/bruk-av-vare-data/)
- The credit card comparison page is a JavaScript app (a 1.1 KB HTML shell, `<div id="root">`), so the live card list was **not visible** to me. The labels below come from the app's public JavaScript bundle (from page source code), not from rendered results. — [Finansportalen Kredittkort](https://www.forbrukerradet.no/finansportalen/bank/kredittkort); [app bundle](https://www.forbrukerradet.no/finansportalen/bank/assets/index-BHslH98y.js)
  - Page excerpt: "Her kan du sammenligne renter og finne det billigste kredittkortet" (Here you can compare rates and find the cheapest credit card).
  - Prompt: "Hvor mye tjener du på å bytte kredittkort? / Sammenlign renter på ditt kredittkort med resten av markedet" (How much do you gain by switching credit card? / Compare your card's rate with the rest of the market).
  - Results table columns:
    - "Bank / produkt";
    - "Eff. rente", with tooltip "Den totale prisen for å låne penger, inkludert både gebyrer og nominell rente." (The total price of borrowing, including fees and nominal rate);
    - "Sum gebyrer", with tooltip "Kostnader for standard bruk av kortet." (Costs for standard use of the card).
  - Filters:
    - benefits: "Rabatt på drivstoff" (fuel discount), "Reiseforsikring" (travel insurance), "Avbestillingsforsikring reise" (trip cancellation insurance), "Cashback ved kjøp", "Rabatt på kjøp" (purchase discount), "Andre fordeler" (other benefits);
    - "Ingen årsgebyr" (no annual fee), "Gebyrfri bruk i Norge" (fee-free use in Norway), "Betalingsutsettelse minst 45 dager" (payment deferral at least 45 days);
    - "Årslønn" (annual salary);
    - membership requirement, and requirement to hold another product.
  - Usage pattern inputs:
    - "Kredittkortgjeld" (credit card debt), "Tilbakebetalingsperiode" (repayment period);
    - "Bruk i Norge" (use in Norway), "Varekjøp" (purchases);
    - "Uttak i egen bank / andre banker" (withdrawals in own / other banks), including after hours;
    - "Bruk i utlandet" (use abroad), "Uttak i utlandet" (withdrawals abroad), "Varekjøp i utlandet" (purchases abroad).
  - Card detail fields:
    - market area, membership requirement, other-product requirement, "Må være student?" (must be a student?);
    - period for nominal rate, monthly payment, valid from;
    - "Minimum inntekt for å få bevilget laveste kredittramme" (minimum income for lowest credit limit);
    - "Minstebeløp å betale ved forfall" (minimum payment due, in % and in kr);
    - credit limit, minimum and maximum credit limit;
    - "Årsgebyr" (annual fee);
    - "Gebyr varekjøp (Norge)" and "(Utlandet)" (purchase fee, Norway and abroad);
    - "Valutapåslag ved bruk i utland" (currency surcharge abroad);
    - "Totalbetaling" (total payment), "Sum gebyrer" (total fees), nominal and effective rate;
    - "Alder fra / Alder til" (age from / to);
    - the date the effective rate last changed.
- Defaults (from page source code):
  - credit card debt 15,000 kr; repayment period 12;
  - 10 purchases and 3 purchases abroad;
  - 1 withdrawal abroad and 1 own-bank after-hours withdrawal;
  - sorted by effective interest rate, ascending.
  — [app bundle](https://www.forbrukerradet.no/finansportalen/bank/assets/index-BHslH98y.js)
- Finansportalen also offers historical prices covering credit cards: "Finn ut hva som har skjedd med rentene på boliglån, innskudd og kredittkort de siste årene." (Find out what has happened to rates on mortgages, deposits and credit cards in recent years.) (from page source code) — [app bundle](https://www.forbrukerradet.no/finansportalen/bank/assets/index-BHslH98y.js)

**Commercial comparison sites (all: seen in search snippet, page not opened)**
- **Kredittkortlisten.no**
  - About page: owned and run by Compary AB (org. no. 556955-1004), Stora Badhusgatan 20, Göteborg, Sweden; founded 2021 by Josef Eines;
  - "receives a commission from partners when visitors click links to credit cards and then apply";
  - claims to cover "nærmere 90 % av alle kredittkort tilgjengelig i Norge" (nearly 90% of all cards available in Norway);
  - has a rating-methodology page ("vurderingsmodell").
  — [Kredittkortlisten om oss](https://www.kredittkortlisten.no/om-oss/); [Kredittkortlisten vurderingsmodell](https://www.kredittkortlisten.no/vurderingsmodell/); [Kredittkortlisten](https://www.kredittkortlisten.no/)
  - Another snippet says it tested and compared 100 Norwegian cards, last updated 3 Aug 2026. — [Kredittkortlisten](https://www.kredittkortlisten.no/)
- **Kortio.no**
  - About page: describes itself as independent and not tied to any card or loan institution; started 2013; founded in Göteborg, Sweden;
  - "How we make money" page: commission from banks and card companies is the main revenue source; the site says its several revenue streams help it "opprettholde et objektivt perspektiv" (maintain an objective perspective);
  - its terms say some links are advertising links.
  — [Kortio om oss](https://kortio.no/om-oss/); [Kortio hvordan vi tjener penger](https://kortio.no/hvordan-vi-tjener-penger/); [Kortio bruksvilkår](https://kortio.no/bruksvilkar/)
- **Bytt.no**
  - Compares "price, interest, fees, and benefits" plus customer reviews.
  - Snippets disagree on size: one says 256 cards on the Norwegian market (updated Aug 2026), another says 189 cards from 74 banks.
  - Pages mention "Kjøp leads" (buy leads) and partnerships.
  - Owner not found.
  — [Bytt.no kredittkort](https://www.bytt.no/bank/kredittkort); [Bytt.no erfaringer](https://www.bytt.no/erfaringer/bank/kredittkort)
- **Bestekredittkortet.com:** "Vi mottar provisjon fra enkelte samarbeidspartnere når du søker eller klikker via våre lenker … men påvirker ikke våre vurderinger" (We receive commission from some partners when you apply or click via our links … but it does not affect our assessments). — [Bestekredittkortet](https://www.bestekredittkortet.com/kortveiviser/)
- **Kredittkort360.com:** category lists such as no-fee cards and discount cards, plus guides including one on card brokers; it has an about page. Owner not found. — [Kredittkort360 gratis](https://kredittkort360.com/gratis/); [Kredittkort360 kredittkortmegler](https://kredittkort360.com/guide/soke-flere-kredittkort-samtidig/)
- **Dagbladet.no/kredittkort (Aller Media):** credit card pages, plus pages marked "annonse" (advertisement) for Uno Finans, Axo Finans and others. — [Dagbladet kredittkort](https://www.dagbladet.no/kredittkort); [Dagbladet annonse Uno Finans](https://www.dagbladet.no/annonse/uno-finans-kredittkort/83585970)
- **Card brokers (Lendo, Sambla, Axo Finans, Unofinans, Motty):**
  - Snippets from comparison sites describe these as "kredittkortmeglere" (card brokers): one application is passed to several partner banks, and the service is free and non-binding.
  - Snippets disagree on how many banks each uses (4–5).
  - Kredittkortlisten states Lendo and Motty require age 20+.
  - CB Insights states Lendo was acquired by Clar in Sept 2025. This is a single source and unverified.
  — [Kredittkortlisten: søke flere kort samtidig](https://www.kredittkortlisten.no/guider/soke-flere-kredittkort-samtidig/); [Kredittkort360 kredittkortmegler](https://kredittkort360.com/guide/soke-flere-kredittkort-samtidig/); [CB Insights Lendo vs Sambla](https://www.cbinsights.com/compare/lendo-vs-sambla)
- **Smarte Penger (smartepenger.no):** editorial articles such as "her er det beste kredittkortet" (here is the best credit card), noting that the best card depends on usage. Ownership and funding not checked. — [Smarte Penger](https://www.smartepenger.no/94-nyhet/178-her-er-det-beste-kredittkortet)
- **Kredittkorttest.no and Kredittkortsiden:** searches returned no results from either domain. Not found.

### Inferences
- **Neutral vs. commercial.** Finansportalen is the only publicly funded, non-commission option found. Everything else found is commission- or ad-funded, and several say so openly. This is the main trust contrast for Enkellån's positioning.
- **What each one treats as decision-relevant.**
  - Finansportalen's default view ranks cards by effective rate and adds a usage-based total-fee figure. That figure includes foreign use, cash withdrawals and currency surcharge.
  - Enkellån's "three numbers" are effective rate, annual fee and interest-free days. Its order is commercial.
  - Enkellån does not show per-card currency surcharge, cash-withdrawal fees (except as some cards' bullet points), minimum payment or minimum income.
  - Ads should not claim Enkellån is "the complete" or "neutral" comparison.
- **Partners are also competitors.** Lendo, Sambla, Axo Finans and Unofinans are both rivals in consumer search and paid listings on Enkellån. This is a differentiation risk: a user can bypass Enkellån by going straight to those brokers.
- **Possible common ownership (unverified).** Kortio and Kredittkortlisten are both described as Göteborg-based, and both show contributors named "Bengt" and "Kim". They may share an owner. I did not verify this.

### Gaps
- Finansportalen's live credit card list (number of cards, current cheapest, actual "Sum gebyrer" values) was not retrieved. The page renders client-side from Forbrukerrådet's data API, and my attempt to call that API was blocked by this session's permissions. I also did not find an explicit "no commission" statement for Finansportalen; it is inferred from "offentleg finansiering" (public funding) and the absence of ad links.
- Whether Norwegian banks are legally required to report card prices to Finansportalen was not verified (no source found in this pass).
- I could not open the commercial sites (not reachable in this session), so their owners, funding and fields rest on search snippets. Bytt.no's and Kredittkort360's owners were not found.
- Kredittkorttest.no and Kredittkortsiden could not be located.
