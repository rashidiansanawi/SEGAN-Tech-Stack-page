document.addEventListener('DOMContentLoaded', () => {
    // Dynamically inject the data from the Python output
    // This is the JSON string you got from the Python interpreter
    const techStackData = [
      {
        "id": "db",
        "name": "PostgreSQL",
        "group": "Database",
        "brief": "Powerful, open source relational database.",
        "detail": "PostgreSQL is a robust, highly reliable, and feature-rich open-source object-relational database system. Its strong adherence to SQL standards, transactional integrity (ACID properties), and extensibility make it perfectly suited for storing all your application's structured data securely and efficiently, managing anything from user profiles to complex transactional records. It's the 'P' in PRPN.",
        "acronym_text": " (P in PRPN)"
      },
      {
        "id": "backend",
        "name": "Node.js / NestJS",
        "group": "Backend (API Layer)",
        "brief": "Structured, scalable backend framework.",
        "detail": "NestJS is a progressive Node.js framework built with TypeScript, acting as the backbone of your application. It handles all business logic, API requests, authentication, authorization, and communication with the database and external services. Its structured, modular architecture fosters maintainability and scalability, crucial for a solo developer. Node.js's non-blocking I/O makes it efficient for handling multiple concurrent requests. This forms the 'N' in PRPN.",
        "acronym_text": " (N in PRPN)"
      },
      {
        "id": "orm",
        "name": "Prisma",
        "group": "Backend (ORM)",
        "brief": "Type-safe ORM for database interaction.",
        "detail": "Prisma is a modern, type-safe Object-Relational Mapper (ORM) that dramatically simplifies database access from your NestJS backend. It generates a powerful client based on your database schema, providing excellent auto-completion, type safety, and intuitive query building. It also includes robust migration tools, ensuring your database schema evolves smoothly with your application. This forms the other 'P' in PRPN.",
        "acronym_text": " (P in PRPN)"
      },
      {
        "id": "auth",
        "name": "JWT & Passport.js with Bcrypt",
        "group": "Backend (Auth & RBAC)",
        "brief": "Secure user authentication and authorization.",
        "detail": "For secure authentication, JWTs (JSON Web Tokens) provide a stateless, token-based mechanism for verifying user identity. Passport.js is a flexible authentication middleware integrated with NestJS that supports various strategies. Bcrypt rigorously hashes user passwords, ensuring they are stored securely. Role-Based Access Control (RBAC) is implemented using NestJS Guards and custom decorators, allowing precise control over user permissions (management, teacher, student, public) based on their assigned roles.",
        "acronym_text": ""
      },
      {
        "id": "web_fe",
        "name": "React (Web)",
        "group": "Frontend (Web UI)",
        "brief": "Interactive web user interfaces.",
        "detail": "React is a leading JavaScript library for building dynamic and interactive single-page web applications. Its component-based architecture promotes modularity and reusability, allowing you to construct complex UIs from small, isolated pieces. It will provide the primary user interface for your application on browsers, connecting to your NestJS API. This is a key part of the 'R' in PRPN.",
        "acronym_text": " (R in PRPN)"
      },
      {
        "id": "mobile_fe",
        "name": "React Native (Mobile)",
        "group": "Frontend (Mobile UI)",
        "brief": "Native iOS & Android apps from one codebase.",
        "detail": "React Native enables you to build truly native iOS and Android mobile applications using JavaScript/TypeScript. This is a significant advantage as it allows for substantial code sharing with your React web application, reducing development time and maintaining consistency across platforms. It provides native performance and access to device-specific features while interacting with your NestJS API layer. This is also a key part of the 'R' in PRPN.",
        "acronym_text": " (R in PRPN)"
      },
      {
        "id": "payments",
        "name": "Stripe / PayPal",
        "group": "External Services (Payments)",
        "brief": "Secure payment processing integration.",
        "detail": "Leading payment gateway services like Stripe or PayPal are integrated into your NestJS backend. They handle the secure processing of payments, ensuring PCI compliance. Your backend consumes their official Node.js SDKs, manages payment intents, and processes webhooks for status updates. The frontend uses their secure client-side SDKs to collect sensitive payment information without it touching your servers.",
        "acronym_text": ""
      },
      {
        "id": "email",
        "name": "SendGrid / Mailgun",
        "group": "External Services (Transactional Email)",
        "brief": "Automated transactional email delivery.",
        "detail": "Transactional email services such as SendGrid or Mailgun are integrated into your NestJS backend for reliable and scalable delivery of automated emails. These include welcome messages, password resets, payment notifications, and other critical transactional communications. Your backend utilizes their Node.js SDKs to send dynamic, templated emails to users based on application events.",
        "acronym_text": ""
      },
      {
        "id": "deploy",
        "name": "Docker & Coolify",
        "group": "Deployment & Orchestration",
        "brief": "Containerized deployment on your VPS.",
        "detail": "Docker is used to containerize all components of your application (backend, frontend, database) into isolated and portable units. This ensures consistent environments from development to production. Coolify, running on your Hetzner VPS, acts as a self-hosted PaaS (Platform as a Service) tool, simplifying the deployment, management, and scaling of your Docker containers. It handles network configuration, SSL certificates, and updates with ease, making it ideal for a solo developer.",
        "acronym_text": ""
      }
    ];

    const mindMapContainer = document.querySelector('.mind-map-container');
    const infoPopup = document.getElementById('info-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupGroup = document.getElementById('popup-group');
    const popupBrief = document.getElementById('popup-brief');
    const popupDescription = document.getElementById('popup-description');
    const closeButton = document.querySelector('.close-button');

    // Group data by primary categories for section creation
    const groupedData = techStackData.reduce((acc, item) => {
        const group = item.group.split(' ')[0]; // Use first word for general classification
        if (!acc[group]) {
            acc[group] = {
                title: item.group, // Use full group name for title
                items: [],
                nodeClass: ''
            };
            // Assign node classes based on group for styling
            if (group.includes('Database')) acc[group].nodeClass = 'database-node';
            else if (group.includes('Backend')) acc[group].nodeClass = 'backend-node';
            else if (group.includes('Frontend')) acc[group].nodeClass = 'frontend-node';
            else if (group.includes('External')) acc[group].nodeClass = 'external-node';
            else if (group.includes('Deployment')) acc[group].nodeClass = 'deployment-node';
        }
        acc[group].items.push(item);
        return acc;
    }, {});

    // Render nodes dynamically
    Object.values(groupedData).forEach(groupInfo => {
        const section = document.createElement('section');
        section.classList.add('map-node', groupInfo.nodeClass);
        section.dataset.group = groupInfo.title; // Store full group name

        const h2 = document.createElement('h2');
        h2.classList.add('node-title');
        h2.textContent = groupInfo.title;
        section.appendChild(h2);

        groupInfo.items.forEach(item => {
            const pill = document.createElement('div');
            pill.classList.add('component-pill');
            pill.dataset.id = item.id;
            pill.textContent = item.name + item.acronym_text; // Add acronym text to pill
            
            // Store full details in data attributes for the popup
            pill.dataset.brief = item.brief;
            pill.dataset.detail = item.detail;

            section.appendChild(pill);
        });

        mindMapContainer.appendChild(section);
    });

    // Event listeners for dynamically created pills
    const componentPills = document.querySelectorAll('.component-pill'); // Select after creation

    componentPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const title = pill.textContent;
            const brief = pill.dataset.brief;
            const description = pill.dataset.detail;
            const group = pill.closest('.map-node').dataset.group; // Get group from parent node

            popupTitle.textContent = title;
            popupGroup.textContent = group;
            popupBrief.textContent = brief;
            popupDescription.textContent = description;
            infoPopup.style.display = 'flex'; // Show the popup
        });
    });

    closeButton.addEventListener('click', () => {
        infoPopup.style.display = 'none'; // Hide the popup
    });

    infoPopup.addEventListener('click', (event) => {
        if (event.target === infoPopup) {
            infoPopup.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoPopup.style.display === 'flex') {
            infoPopup.style.display = 'none';
        }
    });
});
