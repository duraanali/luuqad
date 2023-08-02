## AFSOOMAALI

### KU AQRI AF-SOOMAALI

**Ku soo dhawow LUUQAD oo ah open source project ah**

![LUUQAD Logo](/public/luuqad.png)

**LINK-GA AAD KA ARKI KARTO WEBSITE-KA:** [https://luuqad.vercel.app](https://luuqad.vercel.app)

## HORUDHAC

Waad Ku mahadsantahay daneyntada aad daneyneyso inaad waxaad ku darto LUUQAD, projectigeena open source-ka ah ujeedkiisu waa inan dhisno madal u fudedaya dadka inay bartaan luuqada english-ka si dhexgal ah oo waxtar leh. LUUQAD waxa lagu dhisay Next.js 13, Prisma, iyo PlanetScale.

## Qaybaha uu ka koobanyahay

- [Soo dejinta](#soo-dagsashada-waxyaabaha-aad-u-baahantahay-si-aad-wax-ugu-darto)
- [User and Lessons](#user-and-lessons)
- [Hagaha Wax ku darista](./docs/CONTRIBUTING.md)
- [Style Guidelines](./docs/STYLE_GUIDELINES.md)
  - [Cilad Soo Gudbin](#soo-gudbinta-cilad)
- [Kooxdena iyo Wadashaqeynta](#qeybta-wada-hadalka-iyo-kooxda)
- [License](#license)

## Maxuu yahay Project-gaan.

LUUQAD waa Project Open Source ah kaas oo lagu barto Barashada Ingiriisiga kaas oo ujeedadiisu tahay in la abuuro goob is-dhexgal ah oo isticmaalayaashu ay ku bartaan Ingiriisiga waqti kasta. Madalku waxa uu bixiyaa casharo kala duwan, layliyo, su'aalo, iyo astaamo raadraac si loola socdo isbadalkoda. Hadafkayagu waa inaan ka dhigno barashada luqadda waayo-aragnimo lagu raaxaysto bartayaasha adduunka oo dhan.

## Sidee Wax ugu dari kartaa project-gan

Waxaan soo dhawaynaynaa wax ku biirinta kuwa code-ka qora, naqshadeeyayaasha, muuqaal sameyayasha, iyo qof kasta oo xiiseeya waxbarashada luqadda. Waa kan sida aad uga qayb qaadan karto:

## Soo dagsashada waxyaabaha aad u baahantahay si aad wax ugu darto

1. Hubi inuu kugu jiraan Node.js iyo npm (Package Manager) Mashiinkada.

2. Ka sameyso kayd kan lamid ah gudaha mashinkada adigoo terminal-ka ku qoraya

   ```bash
      git clone https://github.com/duraanali/luuqad.git
      cd luuqad
   ```

3. Soo dagso waxa yaabaha daruuriga u ah ka shaqeynta project-gan

   ```bash
      npm install
   ```

4. Samee database iyo prisma

   - Raac tilmaaha ku hagaya ay leedahay prisma si aad u sameyso database connection iyo schema

   - Samee `.env` file la yiraah adigoo ka raacaya `.env.example`-ka horay u sameysnaa sidoo kale dib u habeyn ku samee variables-ka daruuriga u ah meesha

### Soo gudbinta waxa aad ka badashay

1. Ka hor inta aadan bilaaban ka shaqeynta project-ga ama xalin cilad, qeybta `main` ka sameyso branch aad terminal-ka ku qoroya:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Wax ka badal soona tijaabi marka hore

3. Soo gudbi wixii aad ka badashay adigo soo raacinaya fariin:

   ```bash
   git commit -m "Add feature/bug fix - Your detailed description here"
   ```

4. Intaa kadibna ku soo push-gareey branch-ga kaydka online-ka ah:

   ```bash
   git push origin feature/your-feature-name

   ```

5. Soo fur Pull Request (PR) adigoo ka soo furaya branch-gaga kuna daraya `main`. Ka bixi faahfaahin buuxda waxaa aad soo sameysay marka aad soo fureyso Pull Request

### Habka Naqshadeynta

Fadlan raac hab-ka code qorista iyo naqshadeynta aan ku bayaaninay [style guide](STYLE_GUIDE.md) si loo ilaaliyo joogtaynta project-ga oo dhan.

### Ku soo darida wax cusub

Haddii aad qorsheyneyso inaad ka shaqeyso wax cusub oo muhiim ah, waxaa wanaagsan inaad marka hore kala hadasho kooxda. Furo issue si aad u soo jeediso fikradaada oo soo ururiso jawaab celin ka hor inta aanad bilaabin fulinta.

## Schema (Ma dhameystirna)

### Authentication

User: `id`, `name`, `email`, `password`, `type`, `created_at`, `updated_at` (Kuwa laga tagi karo: location, age, etc.)

#### Lessons

Lesson: `id`, `title`, `description`, `slug`, `level`, `status`, `created_at`, `updated_at`

### Units

Unit: `id`, `lesson_id`, `title`, `description`, `slug`, `status`, `created_at`, `updated_at`

### Questions

Question: `id`, `unit_id`, `title`, `description`, `slug`, `status`, `created_at`, `updated_at`

### Answers

Answer: `id`, `question_id`, `answer`, `is_correct`, `status`, `created_at`, `updated_at`

### User and Lessons

user_lessons: `id`, `user_id`, `lesson_id`, `created_at`, `updated_at`

## Soo gudbinta Cilad

Haddii aad la kulanto cilad, ama aad heyso talo, ama aad u baahan tahay sharaxaad dheeri ah, fadlan hubi issues-ka jira iyo doodaha. Haddii aan weli la soo sheegin, samee issue cusub oo leh cinwaan sifayn iyo macluumaad faahfaahsan.

## Qeybta Wada Hadalka iyo Kooxda

Ku soo biir bulshadayada si aan is kaashi u sameyno, u waydiiso su'aalo, oo aad ula socoto horumarka project-ga:

- **GitHub Discussions:** [Link ku geeynaya Github discussions](https://github.com/duraanali/luuqad/discussions)
- **Slack Channel:** #english-learners (Soo dhiibo codsi ah in lagu soo casuumo)

## License

LUUQAD waxa uu heystaa MIT license. haddi wax ku dareysanaysana macnahedu waxay tahay waxaad aqbashay in license la saaro wax ku daristaada

Aan ka wada shaqayno si aan u abuurno madal Ingiriisi xiiso leh oo waxtar leh oo loogu talagalay bartayaasha adduunka oo dhan! Wax ku biirin farxad leh! 🚀
