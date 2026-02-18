# Jules Agents Raycast Extension - Quick Start

This extension allows you to create and manage async sessions with Google Jules Agents directly from Raycast.

## Prerequisites

- [Raycast](https://www.raycast.com/) installed on your macOS.
- [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.
- A **Jules API Key**. You will need this to authenticate with the Jules Agents service.

## Setup Instructions

1.  **Install Dependencies**
    In the root of this project directory, run:
    ```bash
    npm install
    ```

2.  **Run in Development Mode**
    To start the extension in development mode and see your changes in real-time within Raycast:
    ```bash
    npm run dev
    ```
    Raycast will detect the extension, and you can find the commands (Launch Session, List Sessions, etc.) in the Raycast root search.

3.  **Configure API Key**
    The first time you run a command, Raycast will prompt you for your **Jules API Key**. Enter it to start using the extension.

## Available Commands

- **Launch Session**: Start a new session with Jules Agents.
- **List Sessions**: View and manage your active sessions.
- **Menu Bar Overview**: A convenient menu bar item to monitor your sessions.
- **List Sources**: Browse available sources (disabled by default, can be enabled in settings).

## Building for Production

If you want to build the extension for local use without running the development server:
```bash
npm run build
```

## Useful Scripts

- `npm run lint`: Check for code style and potential errors.
- `npm run fix-lint`: Automatically fix linting issues.
