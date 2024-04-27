# Used Cars Valuation App

This project is a Used Cars Valuation App built using Nest.js with TypeScript and SQLite. It provides a platform for users to get valuations for used cars, manage user accounts, and generate reports.

## Architecture

This application is structured using the Nest.js framework and follows a modular approach:
- **Modules**: Each feature (Users, Authentication, Reports) is encapsulated within its own module.
- **Controllers**: Handle incoming HTTP requests and responses. There are separate controllers for users, authentication, and reports.
- **Services**: Business logic is handled in services, which are injected into controllers.
- **Providers**: Encapsulate the implementation details of a service.
- **Database**: Uses SQLite for data storage, with TypeORM for object-relational mapping.
- **Exception Filters**: Handle exceptions that occur during runtime, ensuring graceful error handling.

## Endpoints

### Users Endpoints

**Base URL:** `/auth`
- `GET /auth/whoami`: Returns the currently authenticated user. Requires authentication.
- `POST /auth/signout`: Signs out the current user by clearing their session.
- `POST /auth/signup`: Registers a new user. Requires user details in the request body.
- `POST /auth/signin`: Authenticates a user and sets the user ID in the session.
- `GET /auth/:id`: Retrieves a specific user by ID.
- `GET /auth`: Retrieves all users or searches users by email if the email query parameter is provided.
- `PATCH /auth/:id`: Updates a specific user's details. Requires user ID and new details in the request body.
- `DELETE /auth/:id`: Deletes a specific user by ID.

### Reports Endpoints

**Base URL:** `/reports`
- `POST /reports`: Creates a new report. Requires report details in the request body and user authentication.
- `PATCH /reports/:id`: Updates the approval status of a report. Requires admin privileges and report ID in the URL and approval status in the request body.
- `GET /reports`: Estimates report details based on provided query parameters. Does not require authentication.

## Setup and Running

### Prerequisites
- Node.js
- npm or yarn
- SQLite

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vr70147/cars-value-app
   cd cars-value-app
