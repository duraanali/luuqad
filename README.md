**Welcome to the LUUQAD English Learning Open Source Project**

![LUUQAD Logo](/public/luuqad.png)

**DEMO LINK:** [https://luuqad.vercel.app](https://luuqad.vercel.app)

## Introduction

Thank you for your interest in contributing to LUUQAD, our open source project aimed at providing a user-friendly platform for people to learn English interactively and effectively. LUUQAD is built with Next.js 13, Prisma, and PlanetScale.

## Table of Contents

- [Ku Aqri AF-SOOMAALI](#ku-aqri-af-soomaali)
- [User and Lessons](#user-and-lessons)
  - [Reporting Issues](#reporting-issues)
- [Community and Communication](#community-and-communication)
- [License](#license)

## Project Description

LUUQAD is an English Learning Open Source Project that aims to create an interactive platform for users to learn English at their own pace. The platform offers a wide range of lessons, exercises, quizzes, and tracking features to monitor progress. Our goal is to make language learning an enjoyable experience for learners from all around the world.

## How to Contribute

We welcome contributions from developers, designers, content creators, and anyone passionate about language education. Here's how you can get involved:

### Setting Up the Development Environment

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone this repository to your local environment:

   ```bash
   git clone https://github.com/duraanali/luuqad.git
   cd luuqad
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Set up the database and Prisma:

   - Follow the documentation for Prisma to set up your database connection and schema.

   - Create a `.env` file based on the `.env.example` template and update the necessary environment variables.

### Submitting Changes

1. Before you start working on a new feature or bug fix, create a new branch from the `main` branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test thoroughly.

3. Commit your changes with a descriptive commit message:

   ```bash
   git commit -m "Add feature/bug fix - Your detailed description here"
   ```

4. Push your branch to the remote repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request (PR) from your branch to the `main` branch. Provide a clear and concise description of your changes in the PR.

### Code Style

Please follow the coding conventions and code style guidelines outlined in our [style guide](STYLE_GUIDE.md) to maintain consistency across the project.

### Adding New Features

If you plan to work on a significant new feature, it's a good idea to discuss it with the community first. Open an issue to propose your idea and gather feedback before starting the implementation.

## Schema (not final)

### Authentication

User: `id`, `name`, `email`, `password`, `type`, `created_at`, `updated_at` (optional: location, age, etc.)

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

## Reporting Issues

If you encounter a bug, have a suggestion, or need clarification, please check the existing issues and discussions. If it hasn't been reported yet, create a new issue with a descriptive title and detailed information.

## Community and Communication

Join our community to collaborate, ask questions, and stay up-to-date with the project's progress:

- **GitHub Discussions:** [link to discussions](https://github.com/duraanali/luuqad/discussions)
- **Slack Channel:** #english-learners (request an invite in the discussions)

## License

LUUQAD is licensed under the [MIT License](LICENSE). By contributing to this project, you agree to license your contributions under the same license.

## AFSOOMAALI

### KU AQRI AF-SOOMAALI


**Ku soo dhawow LUUQAD oo ah open source project ah**

![LUUQAD Logo](/public/luuqad.png)

**LINK-GA AAD KA ARKI KARTO WEBSITE-KA:** [https://luuqad.vercel.app](https://luuqad.vercel.app)

## HORUDHAC

Waad Ku mahadsantahay daneyntada aad daneyneyso inaad waxaad ku darto LUUQAD, projectigeena open source-ka ah ujeedkiisu waa inan dhisno madal u fudedaya dadka inay bartaan luuqada english-ka si dhexgal ah oo waxtar leh. LUUQAD waxa lagu dhisay Next.js 13, Prisma, iyo PlanetScale.

## Qaybaha uu ka koobanyahay

- [User and Lessons](#user-and-lessons)
  - [Cilad Soo Gudbin](#soo-gudbinta-cilad)
- [Kooxdena iyo Wadashaqeynta](#qeybta-wada-hadalka-iyo-kooxda)
- [License](#license)

## Maxuu yahay Projectigaan.

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

### Submitting Changes

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

## License

LUUQAD waxa uu heystaa MIT license. haddi wax ku dareysanaysana macnahedu waxay tahay waxaad aqbashay in license la saaro wax ku daristaada

Aan ka wada shaqayno si aan u abuurno madal Ingiriisi xiiso leh oo waxtar leh oo loogu talagalay bartayaasha adduunka oo dhan! Wax ku biirin farxad leh! 🚀
