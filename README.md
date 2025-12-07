# Interview Scheduler

![GitHub last commit](https://img.shields.io/github/last-commit/VioletFigueroa/interview-scheduler?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/VioletFigueroa/interview-scheduler?style=flat-square)
![License](https://img.shields.io/badge/license-Educational-blue?style=flat-square)

**Quick Links:** [Live Demo](#final-product) | [Security Features](#security-relevance-for-application-security) | [Setup](#getting-started)

---

**How to view artifacts:** Screenshots in `/documents/` folder; source code demonstrates React security patterns and API integration.

**Result snapshot:** Full-stack SPA with real-time updates, API authentication flow, and client-side state management using security-conscious practices.

**Quick review:**
- **Security focus:** Client-side validation, error handling, WebSocket secure connections
- **Key files:** `src/hooks/useApplicationData.js` (state management), `src/components/` (UI components)
- **Start with:** Run locally to see authentication flow and data validation in action

## Overview
Interview Scheduler is a single-page application (SPA) built with React that allows students to book and manage technical interviews with mentors. The application demonstrates modern web development practices with a focus on secure API communication, proper state management, and comprehensive error handling.

**Developed during:** Lighthouse Labs Web Development Bootcamp (April - June 2021)

## Security Relevance for Application Security

### Input Validation & Data Sanitization
- **Client-side validation** prevents malformed data submission before API calls
- **Controlled components** ensure all user input is validated through React state
- **Error boundary implementation** prevents application crashes from propagating sensitive information
- Demonstrates understanding of defense-in-depth validation strategies

### API Security & Authentication
- **Secure HTTP communication** with proper headers and CORS configuration
- **WebSocket connections** for real-time updates with authentication flow
- **Proxy configuration** demonstrates understanding of API gateway patterns
- Error handling prevents information disclosure through verbose error messages

### State Management Security
- **Immutable state updates** prevent race conditions and state corruption
- **Controlled data flow** using React hooks reduces attack surface
- **Session persistence** with proper data lifecycle management
- Demonstrates secure handling of sensitive scheduling information

### Testing & Quality Assurance
- **Unit testing** with Jest ensures component reliability
- **Integration testing** validates API interactions and error scenarios
- **End-to-end testing** coverage for critical user workflows
- **Storybook implementation** for isolated component testing and security review

### Secure Development Practices
- **Dependency management** with regular updates and vulnerability scanning
- **Environment variable isolation** keeps sensitive configuration secure
- **Error logging** without exposing stack traces or internal details
- **Code review workflow** through Git version control

## Objectives
- Build a secure, responsive single-page application
- Implement real-time data synchronization using WebSockets
- Create comprehensive test coverage for reliability
- Demonstrate secure API integration patterns
- Handle errors gracefully without information disclosure

## Methodology
- **React** for component-based architecture with security boundaries
- **Axios** for secure HTTP client with interceptor patterns
- **WebSockets** for real-time updates with authentication
- **Jest & Testing Library** for comprehensive security and functionality testing
- **Storybook** for isolated component development and security review

## Key Features
- **Appointment Management:** Create, edit, and delete interview appointments
- **Real-time Updates:** WebSocket integration for live data synchronization
- **Responsive Design:** Mobile-first approach with accessibility considerations
- **Error Handling:** Comprehensive error states with user-friendly messages
- **Data Persistence:** PostgreSQL backend with secure API layer
- **Optimistic Updates:** Enhanced UX with rollback on failure

## Technologies Used
- **Frontend:** React 16.9, React Hooks, React DOM
- **HTTP Client:** Axios with request/response interceptors
- **Real-time:** WebSockets for bidirectional communication
- **Testing:** Jest, React Testing Library, Storybook
- **Build Tools:** Webpack, Babel, Create React App
- **Styling:** SASS/SCSS with component-scoped styles
- **State Management:** Custom hooks with useReducer pattern

## Application Security Lessons Learned
- **Client-side validation is first defense, not last:** Implementing validation at the UI layer reduces server load and improves UX, but must be paired with server-side validation
- **Error messages require careful design:** Balancing user-friendly messages with security (avoiding information disclosure) is critical
- **State management impacts security:** Proper React state handling prevents race conditions that could lead to authorization bypasses
- **WebSocket security is different from HTTP:** Real-time connections require additional authentication considerations and connection lifecycle management
- **Testing validates security assumptions:** Comprehensive tests ensure validation logic works under edge cases and malicious input scenarios

## Files Included

**Source Code:**
- `src/components/` - React components with input validation and error handling
- `src/hooks/` - Custom hooks for state management and API integration
- `src/helpers/` - Utility functions including data selectors and validators
- `src/__tests__/` - Comprehensive test suite

**Configuration:**
- `package.json` - Dependencies with version pinning for security
- `.env.development` - Environment configuration (template)
- `.storybook/` - Component development and security review environment

**Documentation:**
- `documents/` - Application screenshots and architectural diagrams

## Getting Started

### Prerequisites
- Node.js (v12.x or higher)
- npm (v6.x or higher)
- Running instance of [scheduler-api](https://github.com/VioletFigueroa/scheduler-api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VioletFigueroa/interview-scheduler.git
   cd interview-scheduler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the API server**
   - Follow setup instructions at [scheduler-api repository](https://github.com/VioletFigueroa/scheduler-api)
   - Ensure API server is running on `http://localhost:8001`

4. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:8000`

### Running Tests

```bash
# Run test suite
npm test

# Run Storybook for component testing
npm run storybook
```

## User Stories

**As an Interviewer:**
- I want to see scheduled interviews throughout the week
- I want to manage my availability in real-time

**As a Student:**
- I want to book interviews in available time slots
- I want to select my preferred interviewer
- I want to edit or cancel appointments if needed
- I want confirmation before destructive actions
- I expect data to persist after browser refresh
- I need clear error messages if operations fail

## Final Product

!["Screenshot of Interview Scheduler"](https://github.com/VioletFigueroa/interview-scheduler/blob/master/documents/interview%20scheduler%20screenshot%201.png?raw=true)

*Interactive scheduling interface with real-time availability updates*

## Dependencies

```json
{
  "axios": "^0.21.1",
  "classnames": "^2.2.6",
  "normalize.css": "^8.0.1",
  "react": "^16.9.0",
  "react-dom": "^16.9.0"
}
```

**Development Dependencies:** Jest, React Testing Library, Storybook, Babel, Webpack, SASS

## Application Security Career Connection

This project demonstrates several competencies valued in application security roles:

1. **Secure Development Lifecycle:** Following secure coding practices from design through testing
2. **Threat Modeling:** Understanding client-side attack vectors and implementing appropriate controls
3. **Code Review Skills:** Writing testable, reviewable code with clear security boundaries
4. **Defense in Depth:** Implementing multiple layers of validation and error handling
5. **Developer Security Champion:** Advocating for security best practices in full-stack development

The transition from web development to AppSec builds on this foundation by adding threat modeling, security testing (SAST/DAST), and vulnerability assessment capabilities to the existing development expertise.

---

**Author:** Violet Figueroa  
**Contact:** [GitHub Profile](https://github.com/VioletFigueroa)  
**Career Focus:** Application Security | Secure Software Development | Web Application Security
