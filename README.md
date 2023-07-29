**Welcome to the LUUQAD English Learning Open Source Project**

![LUUQAD Logo](/public/luuqad.png)

## Introduction

Thank you for your interest in contributing to LUUQAD, our open source project aimed at providing a user-friendly platform for people to learn English interactively and effectively. LUUQAD is built with Next.js 13, Prisma, and PlanetScale.

## Table of Contents

- [User and Lessons](#user-and-lessons)
    - [Reporting Issues](#reporting-issues)
  - [Community and Communication](#community-and-communication)
  - [License](#license)

## Project Description

LUUQAD is an English Learning Open Source Project that aims to create an interactive platform for users to learn English at their own pace. The platform will offer a wide range of lessons, exercises, quizzes, and tracking features to monitor progress. Our goal is to make language learning an enjoyable experience for learners from all around the world.

## How to Contribute

We welcome contributions from developers, designers, content creators, and anyone passionate about language education. Here's how you can get involved:

### Setting Up the Development Environment

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone this repository to your local environment:

```bash
git clone https://github.com/your-username/luuqad.git
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

1. Before you start working on a new feature or bug fix, create a new branch from the `main` branch.

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

User: `id`, `name`, `email` and `password`, `type`, `created_at`, `updated_at` (optional = location, age etc)

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

### Reporting Issues

If you encounter a bug, have a suggestion, or need clarification, please check the existing issues and discussions. If it hasn't been reported yet, create a new issue with a descriptive title and detailed information.

## Community and Communication

Join our community to collaborate, ask questions, and stay up-to-date with the project's progress:

- GitHub Discussions: [link to discussions](https://github.com/your-username/luuqad/discussions)
- Slack Channel: #english-learners (request an invite in the discussions)

## License

LUUQAD is licensed under the [MIT License](LICENSE). By contributing to this project, you agree to license your contributions under the same license.

Let's work together to create a fun and effective English learning platform for learners worldwide! Happy contributing! 🚀