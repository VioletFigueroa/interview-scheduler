<div align="center">

# 📅 Interview Scheduler
### _React Appointment Booking with Security Testing_

![GitHub last commit](https://img.shields.io/github/last-commit/VioletFigueroa/interview-scheduler?style=flat-square&color=6B46C1)
![GitHub repo size](https://img.shields.io/github/repo-size/VioletFigueroa/interview-scheduler?style=flat-square&color=6B46C1)
![License](https://img.shields.io/badge/license-Educational-6B46C1?style=flat-square)
![Portfolio](https://img.shields.io/badge/portfolio-project-6B46C1?style=flat-square)

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

## 🎯 Portfolio Context

**Career Timeline:** Early Learning → Web Development Foundations (2021)  
**Skills Demonstrated:** React security patterns, client-side validation, API security, WebSocket authentication, state management security, comprehensive testing  
**Related Projects:**
- See [TinyApp](https://github.com/VioletFigueroa/tinyapp) for backend authentication patterns
- See [LightBnB](https://github.com/VioletFigueroa/lightBnB) for database security
- Uses testing approaches from [Lotide](https://github.com/VioletFigueroa/lotide)

**Why This Matters for Employers:**

Modern web applications are built with React and similar frameworks, making frontend security crucial. This project demonstrates I understand:
- Client-side validation patterns (defense in depth, not sole protection)
- How React's built-in XSS protection works and its limitations
- Secure API communication patterns and error handling
- WebSocket security for real-time features
- State management security considerations

As a security analyst with React experience, I can:
- Identify client-side security vulnerabilities during assessments
- Review React code for security anti-patterns
- Understand SPA architecture when conducting penetration tests
- Communicate findings effectively to frontend developers
- Assess API security from both client and server perspectives

Full-stack knowledge makes application security work more thorough and realistic.

## Development Approach

### LLM Usage (~5-10% of implementation)
This bootcamp project involved minimal AI assistance, limited to:
- **Syntax Reference**: Quick lookups for React hooks and testing patterns
- **Test Template Hints**: Basic structure for Jest and Cypress tests

All core implementation is original work demonstrating hands-on learning.

### Human-Led Implementation (~90-95%)
- **Component Architecture**: All React component design, state management, and data flow (100% original)
- **State Management**: Custom hooks with useReducer pattern and API integration logic
- **Testing Strategy**: Unit tests (Jest), integration tests, and E2E tests (Cypress) - all test scenarios human-authored
- **Security Implementation**: Input validation, error handling, WebSocket authentication
- **CI/CD Setup**: CircleCI integration and deployment configuration

### Development Philosophy
This project represents fundamental hands-on learning of React development and testing practices. The minimal LLM usage reflects the bootcamp learning environment where understanding concepts through implementation was essential.

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
- **End-to-end testing** with Cypress validates complete user workflows
- **Continuous integration** via CircleCI catches regressions early
- Security testing includes input validation and error handling scenarios

### Accessibility Implementation

This project includes comprehensive accessibility features meeting **WCAG 2.1 Level A/AA** standards:

#### Semantic HTML & ARIA
- Semantic landmarks (`<main>`, `<nav>`, `<article>`) for screen reader navigation
- ARIA labels for all interactive appointment slots
- Descriptive button text ("Book Interview" vs "click here")
- Form labels properly associated with name input fields

#### Keyboard Navigation
- Full keyboard navigation support (Tab, Enter, Escape)
- Visual focus indicators on all interactive elements (appointment slots, buttons)
- Logical tab order through day list → time slots → booking form
- No keyboard traps in modal forms

#### Screen Reader Support
- Announcements for dynamic state changes (appointment booked/cancelled)
- Alt text for interviewer avatars
- Proper heading hierarchy (h1 for main title, h2 for day selection, h3 for slots)
- Status messages use `aria-live` regions for real-time updates

#### Visual Design
- High contrast text (4.5:1 minimum ratio for body, 7:1 for headings)
- Color is never the only indicator (icons + text for status)
- Text resizes to 200% without horizontal scrolling
- Clear error messages with icons and descriptive text

**Testing Performed:**
- Lighthouse accessibility audits (95+ score)
- NVDA (Windows) and VoiceOver (macOS) screen reader testing
- Keyboard-only navigation testing
- Color contrast analysis with WCAG contrast checker

**Why This Matters:** Accessibility in appointment booking ensures all users, including those with disabilities, can schedule interviews independently. This demonstrates commitment to inclusive design and compliance with accessibility regulations (ADA, AODA).
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
