# Security Policy

## Scope

This is an educational/portfolio project demonstrating secure React application development, API security, and client-side security best practices.

## Supported Versions

This project is not actively maintained for production use. It was created as a learning exercise during the Lighthouse Labs Web Development Bootcamp (April-June 2021).

## Reporting a Vulnerability

While this is a learning project, I appreciate security feedback and use it as an opportunity to improve my security knowledge:

- **Email:** violet@violetfigueroa.com
- **Response Time:** Best effort (typically 2-7 days)
- **Recognition:** Security findings will be acknowledged in this SECURITY.md file

## Security Features Implemented

This project demonstrates understanding of the following security concepts:

### Input Validation & Data Sanitization
- **Client-side validation** prevents malformed data submission
- **Controlled React components** ensure all user input is validated through state
- **Error boundary implementation** prevents crashes from propagating sensitive info
- **Form validation** with user-friendly error messages

### API Security & Authentication
- **Secure HTTP communication** with proper headers
- **CORS configuration** for cross-origin resource sharing
- **WebSocket secure connections** for real-time updates
- **Proxy configuration** demonstrates API gateway patterns
- **Error handling** prevents information disclosure

### State Management Security
- **Immutable state updates** prevent race conditions and corruption
- **Controlled data flow** using React hooks reduces attack surface
- **useReducer pattern** for predictable state management
- **Session persistence** with proper data lifecycle management

### Testing & Quality Assurance
- **Unit testing with Jest** ensures component reliability
- **Integration testing** validates API interactions and error scenarios
- **End-to-end testing with Cypress** covers critical user workflows
- **Storybook implementation** for isolated component security review

### Secure Development Practices
- **Dependency management** with regular updates
- **Environment variable isolation** keeps sensitive configuration secure
- **Error logging** without exposing stack traces
- **Code review workflow** through Git version control

## Known Limitations (Educational Context)

The following production-ready features are **intentionally excluded** as this is a learning project:

- **Authentication/Authorization** - Uses mock authentication for demo
- **HTTPS enforcement** (assumed for production deployment)
- **Content Security Policy (CSP)** headers
- **XSS protection beyond React's built-in escaping**
- **CSRF token protection**
- **Rate limiting** on API calls
- **API key rotation**
- **Comprehensive security headers** (X-Frame-Options, etc.)
- **Input sanitization library** (DOMPurify)
- **Security audit logging**

## Security Mindset

This project was built with security consciousness even in an educational context. Key principles applied:

1. **Defense in depth** - Multiple validation layers (client + server)
2. **Secure by design** - Security integrated from the start
3. **Fail securely** - Errors don't expose system internals
4. **Trust but verify** - Client-side validation plus server-side enforcement
5. **Principle of least privilege** - Components access only needed data

## References

This implementation follows security best practices from:
- OWASP Top 10 (particularly A03:2021 - Injection, A05:2021 - Security Misconfiguration)
- React Security Best Practices
- OWASP Secure Coding Practices
- CWE/SANS Top 25 Most Dangerous Software Errors

## Security Acknowledgments

None at this time. Be the first to provide constructive security feedback!

---

**Last Updated:** January 30, 2026  
**Project Status:** Educational/Portfolio (Not Production-Ready)
