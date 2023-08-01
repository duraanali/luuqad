# LUUQAD Language Learning Platform Prisma Schema

This document outlines the Prisma schema for LUUQAD, the language learning platform. The schema defines the entities and relationships needed to build the LUUQAD application, which aims to provide users with a seamless language learning experience.

## Getting Started

Before diving into the development of LUUQAD, ensure you have the Prisma schema configured and the Prisma client generator set up. The Prisma schema will be used to interact with the database and handle CRUD operations.

The database used in this project is PostgreSQL, and the connection URL can be set in the `.env` file or via environment variables.

### Prerequisites

- Prisma client generator (provider: "prisma-client-js")
- PostgreSQL database (with connection URL provided)

## Entity Descriptions

### User

The `User` entity represents a user of the LUUQAD language learning platform. It includes essential information for user authentication and additional optional fields for more user details.

| Field      | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| id         | Int      | Auto-incrementing primary key for the user.      |
| name       | String   | The name of the user.                            |
| email      | String   | The unique email address for the user.           |
| password   | String   | The user's hashed password for authentication.   |
| type       | String?  | Optional: Additional type information for users. |
| location   | String?  | Optional: The user's location.                   |
| created_at | DateTime | Timestamp for user creation.                     |
| updated_at | DateTime | Timestamp for user details update.               |

### Lesson

The `Lesson` entity represents an individual lesson within the LUUQAD language learning platform. Each lesson contains units, and users can enroll in lessons.

| Field       | Type     | Description                                          |
| ----------- | -------- | ---------------------------------------------------- |
| id          | Int      | Auto-incrementing primary key for the lesson.        |
| title       | String   | The title of the lesson.                             |
| description | String?  | Optional: A brief description of the lesson.         |
| slug        | String?  | Optional: Unique slug for the lesson.                |
| level       | String?  | Optional: The difficulty level of the lesson.        |
| status      | Int      | The status of the lesson (0 = draft, 1 = published). |
| created_at  | DateTime | Timestamp for lesson creation.                       |
| updated_at  | DateTime | Timestamp for lesson details update.                 |

### Unit

The `Unit` entity represents a unit within a lesson. Each unit contains questions.

| Field       | Type     | Description                                        |
| ----------- | -------- | -------------------------------------------------- |
| id          | Int      | Auto-incrementing primary key for the unit.        |
| lesson_id   | Int      | Foreign key to associate the unit with a lesson.   |
| title       | String   | The title of the unit.                             |
| description | String?  | Optional: A brief description of the unit.         |
| slug        | String   | Unique slug for the unit.                          |
| status      | Int      | The status of the unit (0 = draft, 1 = published). |
| created_at  | DateTime | Timestamp for unit creation.                       |
| updated_at  | DateTime | Timestamp for unit details update.                 |

### Question

The `Question` entity represents a question within a unit. Each question has its own set of answers.

| Field       | Type     | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| id          | Int      | Auto-incrementing primary key for the question.        |
| unit_id     | Int      | Foreign key to associate the question with a unit.     |
| title       | String   | The title of the question.                             |
| description | String?  | Optional: A brief description of the question.         |
| slug        | String   | Unique slug for the question.                          |
| status      | Int      | The status of the question (0 = draft, 1 = published). |
| created_at  | DateTime | Timestamp for question creation.                       |
| updated_at  | DateTime | Timestamp for question details update.                 |

### Answer

The `Answer` entity represents an answer to a question. Each answer can be marked as correct or incorrect.

| Field       | Type     | Description                                                     |
| ----------- | -------- | --------------------------------------------------------------- |
| id          | Int      | Auto-incrementing primary key for the answer.                   |
| question_id | Int      | Foreign key to associate the answer with a question.            |
| answer      | String   | The text of the answer.                                         |
| is_correct  | Boolean  | Indicates if the answer is correct (true) or incorrect (false). |
| status      | Int      | The status of the answer (0 = draft, 1 = published).            |
| created_at  | DateTime | Timestamp for answer creation.                                  |
| updated_at  | DateTime | Timestamp for answer details update.                            |

### UserLessons

The `UserLessons` entity establishes a many-to-many relationship between users and lessons, allowing you to keep track of which lessons a user has enrolled in.

| Field      | Type     | Description                                              |
| ---------- | -------- | -------------------------------------------------------- |
| id         | Int      | Auto-incrementing primary key for the enrollment record. |
| user_id    | Int      | Foreign key to associate the enrollment with a user.     |
| lesson_id  | Int      | Foreign key to associate the enrollment with a lesson.   |
| created_at | DateTime | Timestamp for enrollment record creation.                |
| updated_at | DateTime | Timestamp for enrollment record details update.          |

## Conclusion

This Prisma schema outlines the data model for the LUUQAD language learning platform. It provides the necessary entities and relationships to build a seamless and effective language learning platform.

Developers working on this project can use this document as a reference to understand the database structure and relationships, ensuring consistency and accuracy throughout the development process.

For more information on Prisma schema, refer to the [Prisma documentation](https://pris.ly/d/prisma-schema). Happy coding and building LUUQAD!
