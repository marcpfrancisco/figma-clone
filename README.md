# Website Builder Project

## Prerequisites

- Docker Desktop and Docker Compose installed

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd project-root

   ```

2. Start the application:

   - docker-compose up --build

3. Access the services:

   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api

4. Testing and Troubleshooting

   - **Database Connectivity**: Check MySQL logs if Laravel cannot connect to the database.

   - **Environment Variables**: Ensure `.env` files for both frontend and backend are set up with correct API URLs and database information.

With this setup, team members can quickly spin up the project in Docker, making collaboration easier and consistent across different environments.
