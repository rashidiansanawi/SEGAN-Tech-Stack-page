document.addEventListener('DOMContentLoaded', () => {
    // Dynamically inject the tech stack data from the Python output
    const techStackData = [
      {
        "id": "db",
        "name": "PostgreSQL",
        "group": "Database",
        "brief": "Powerful, open source relational database.",
        "detail": "PostgreSQL is a robust, highly reliable, and feature-rich open-source object-relational database system. It's known for its reliability, feature robustness, and performance. Ideal for storing all your application's structured data securely and efficiently, managing anything from user profiles to complex transactional records. It's the 'P' in PRPN.",
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
        "detail": "Leading payment gateway services like Stripe or PayPal are integrated into your NestJS backend. They handle the secure processing of payments, ensuring PCI compliance. Your backend consumes their official Node.js SDKs, manages payment intents, and processes webhooks for status updates. The frontend uses their secure client-side SDKs to collect sensitive card details without it touching your servers.",
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

    // Project Overview Data from Python output (with emojis and new markdown)
    const projectOverviewData = {
        "title": "SEGAN Project Overview",
        "sections": [
            {
                "heading": "The Situation: Why Change? 🧐",
                "content_points": [
                    "**Security Risk:** 🚨 The current system's login is basic, exposing sensitive student/payment data. This is the _TOP priority_ [1]. It's susceptible to simple hacks like 'brute forcing' [1].",
                    "**Frustrating to Use:** 😠 Parents and staff find the current system clunky, harming Nuqra's brand image [1].",
                    "**Limited Growth:** 🚧 We're stuck with basic features and are too dependent on external software [1]."
                ]
            },
            {
                "heading": "Our Solution: What We'll Build (The New SEGAN) ✨",
                "content_points": [
                    "**Corporate-Level Security:** 🛡️ Protects _all data_ with industry-best practices [1].",
                    "**Effortless Experience:** 🚀 A custom-built platform that looks great, is _easy to use_ on any device, and boosts efficiency [1]. This means _enhanced user adoption_, professional branding, and workflow tailoring [1].",
                    "**Built for Growth:** 📈 Scalable, flexible, full ownership, tailored precisely to Nuqra's unique needs [1]. High scalability comes from a custom DB and backend [1]."
                ]
            },
            {
                "heading": "The Investment & Timeline: What It Takes & When ⏳",
                "content_points": [
                    "**Strategic Investment:** 💰 Initial investment in dedicated development time, with _minimal external tools_. This saves significant long-term license fees [1].",
                    "**Development Time:** 🏗️ Approximately *9-10 months* for the core system [1]. Initially, the build is slower, but it becomes much _faster once the core is established_ [1]. The equivalent external development could cost BND 11.8k ~ BND 24k / yr [1].",
                    "**Key Milestones (Phased Delivery):**",
                    "**Now - July:** ✅ Finish AppSheet testing & transition plan [1].",
                    "**Aug - Nov:** 🛠️ Build Secure Foundation + Core Finance (Payments, Balances) [1].",
                    "**Dec - Mar:** 🧑‍🏫 Add Admin Tools + Teacher Features (Attendance) [1].",
                    "**Apr - May:** 🎉 Final Testing & Launch! [1]."
                ]
            },
            {
                "heading": "The Payoff: Why This Matters 🌟",
                "content_points": [
                    "**Protect Our Trust:** 🔒 Safeguard data and protect Nuqra's reputation [1].",
                    "**Happy Users:** 😄 Streamlined operations, delighted parents and staff [1]. Expect efficiency gains of *5-10 hours/week* due to improved UX/automation [1].",
                    "**Future Ready:** 🚀 A powerful digital asset to _grow with Nuqra_ [1]. Full code ownership provides a strategic asset development [1]."
                ]
            },
            {
                "heading": "Cost Comparison & Return on Investment (ROI) 📊",
                "content_points": [
                    "**Current AppSheet Model:** Annual Licenses: _USD 1800 / yr_ (for 3 apps) [1]. High Security Risk Exposure (Personal Data Protection Order 2025) [1].",
                    "**Proposed Custom Application Model (Direct Costs):**",
                    "- **First Year:** Server = _BND 2 - 5k_ [1].",
                    "- **Ongoing Annual:** Server = _USD 240 /yr_, Domain = _USD 20 - 40 /yr_, Gateway = _3-4% card rate + setup fees_ [1].",
                    "- **Potential Long-term Cost Savings:** A remarkable *_~84.44%_* (from $1.8k to $280/yr) compared to current licenses [1]. This is a _significant saving_! 💰",
                    "**Other EMS (Subscription-based):** Annual Cost: _BND 12k / MYR 36k per year_ (for ~1.3k students) [1].",
                    "**Overall Cost Reduction:** An impressive *_~97.00%_* compared to these external EMS solutions [1]."
                ]
            }
        ]
    };



    const mindMapContainer = document.querySelector('.mind-map-container');
    const infoPopup = document.getElementById('info-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupGroup = document.getElementById('popup-group');
    const popupBrief = document.getElementById('popup-brief');
    const popupDescription = document.getElementById('popup-description');
    const closeButton = document.querySelector('.close-button');

    const viewProposalBtn = document.getElementById('view-proposal-btn');
    const proposalModal = document.getElementById('proposal-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSectionsContainer = document.getElementById('modal-sections-container');
    const closeModalButton = document.querySelector('.close-modal-button');

    const launchDemoBtn = document.getElementById('launch-demo-btn');
    const liveDemoModal = document.getElementById('live-demo-modal');
    const closeLiveDemoButton = document.querySelector('.close-live-demo-button');


    // Helper function to render more advanced markdown (emojis, bold, italics, special highlight)
    function renderMarkdown(text) {
        // Emojis are direct characters, no special handling needed by regex (they should be in the string already)

        // Special highlight for numbers (*text*)
        text = text.replace(/\*(\d[\d\s\%\$\,\.\-\~]*[\d\s\%\$\,\.\-\~]*)\*/g, '<span class="highlight-num">$1</span>');

        // Bold (**text**)
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Italic/Highlight (_text_). This must come AFTER bold and special highlight.
        text = text.replace(/_(.*?)_/g, '<em>$1</em>');
        
        return text;
    }

    // Group data by primary categories for section creation (for tech stack)
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

    // Render tech stack nodes dynamically
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

    // Event listeners for dynamically created tech stack pills
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
            popupDescription.innerHTML = renderMarkdown(description); // Render markdown here
            infoPopup.style.display = 'flex'; // Show the popup
        });
    });

    closeButton.addEventListener('click', () => { // For tech stack info popup
        infoPopup.style.display = 'none';
    });

    infoPopup.addEventListener('click', (event) => { // For tech stack info popup
        if (event.target === infoPopup) {
            infoPopup.style.display = 'none';
        }
    });

    // Event listener for "View Project Proposal Overview" button
    viewProposalBtn.addEventListener('click', () => {
        modalTitle.textContent = projectOverviewData.title;
        modalSectionsContainer.innerHTML = ''; // Clear previous content

        projectOverviewData.sections.forEach(sectionData => {
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('modal-section');

            const sectionHeading = document.createElement('h3');
            sectionHeading.textContent = sectionData.heading;
            sectionDiv.appendChild(sectionHeading);

            const contentList = document.createElement('ul');
            sectionData.content_points.forEach(point => {
                const listItem = document.createElement('li');
                listItem.innerHTML = renderMarkdown(point); // Render markdown here
                contentList.appendChild(listItem);
            });
            sectionDiv.appendChild(contentList);

            modalSectionsContainer.appendChild(sectionDiv);
        });

        proposalModal.style.display = 'flex'; // Show the modal
    });

    // Event listener for closing the proposal modal
    closeModalButton.addEventListener('click', () => {
        proposalModal.style.display = 'none';
    });

    proposalModal.addEventListener('click', (event) => {
        if (event.target === proposalModal) {
            proposalModal.style.display = 'none';
        }
    });

    // Event listener for "Launch Live Demo" button
    launchDemoBtn.addEventListener('click', () => {
        liveDemoModal.style.display = 'flex';
    });

    // Event listener for closing the live demo modal
    closeLiveDemoButton.addEventListener('click', () => {
        liveDemoModal.style.display = 'none';
    });

    liveDemoModal.addEventListener('click', (event) => {
        if (event.target === liveDemoModal) {
            liveDemoModal.style.display = 'none';
        }
    });


    // Global keyboard accessibility (Escape key to close any active modal/popup)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (infoPopup.style.display === 'flex') {
                infoPopup.style.display = 'none';
            }
            if (proposalModal.style.display === 'flex') {
                proposalModal.style.display = 'none';
            }
            if (liveDemoModal.style.display === 'flex') {
                liveDemoModal.style.display = 'none';
            }
        }
    });
});
