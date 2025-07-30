document.addEventListener('DOMContentLoaded', () => {
    // Data from Python output
    const mockUsers = {
        "user1": { "password": "pass1", "role": "Student" },
        "user2": { "password": "pass2", "role": "Teacher" },
        "user3": { "password": "pass3", "role": "Management" }
    };

    const paymentScenarios = {
        "success": { "message": "Payment successful!", "status": "success" },
        "failure": { "message": "Payment failed: Insufficient funds or invalid details.", "status": "error" }
    };

    const emailTypes = {
        "payment_confirmation": { "subject": "Payment Confirmation", "body": "Your payment has been successfully processed." },
        "welcome_new_user": { "subject": "Welcome to SEGAN!", "body": "We're excited to have you on board." },
        "password_reset": { "subject": "Password Reset Request", "body": "Click the link to reset your password." }
    };


    // DOM Elements
    const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');

    const dashboardSection = document.getElementById('dashboard-section');
    const displayUsername = document.getElementById('display-username');
    const displayRole = document.getElementById('display-role');
    const logoutButton = document.querySelector('.logout-button');

    const amountInput = document.getElementById('amount');
    const payButton = document.querySelector('.pay-button');
    const paymentMessage = document.getElementById('payment-message');

    const emailTypeSelect = document.getElementById('email-type');
    const emailButton = document.querySelector('.email-button');
    const emailMessage = document.getElementById('email-message');

    const rbacRoleDisplay = document.getElementById('rbac-role-display');
    const rbacContent = document.getElementById('rbac-content');

    let currentUser = null;

    // --- Utility Functions ---
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`;
        element.style.display = 'block';
    }

    function hideMessage(element) {
        element.style.display = 'none';
        element.textContent = '';
    }

    // --- RBAC Mock Logic ---
    const rbacPermissions = {
        "Student": [
            { resource: "View Own Schedule", access: "Allowed ✅" },
            { resource: "Submit Assignments", access: "Allowed ✅" },
            { resource: "View Grades", access: "Allowed ✅" },
            { resource: "Access Teacher Notes", access: "Denied ❌", class: "denied" },
            { resource: "Manage Student Records", access: "Denied ❌", class: "denied" }
        ],
        "Teacher": [
            { resource: "View Own Schedule", access: "Allowed ✅" },
            { resource: "Manage Class Attendance", access: "Allowed ✅" },
            { resource: "Post Grades", access: "Allowed ✅" },
            { resource: "Access Teacher Notes", access: "Allowed ✅" },
            { resource: "Manage Student Records", access: "Denied ❌", class: "denied" }
        ],
        "Management": [
            { resource: "View Own Schedule", access: "Allowed ✅" },
            { resource: "Manage Class Attendance", access: "Allowed ✅" },
            { resource: "Post Grades", access: "Allowed ✅" },
            { resource: "Access Teacher Notes", access: "Allowed ✅" },
            { resource: "Manage Student Records", access: "Allowed ✅" },
            { resource: "Generate Financial Reports", access: "Allowed ✅" },
            { resource: "User Management (Admin)", access: "Allowed ✅" }
        ]
    };

    function updateRBACDisplay(role) {
        rbacRoleDisplay.textContent = role;
        rbacContent.innerHTML = '';
        const permissions = rbacPermissions[role] || [];
        const ul = document.createElement('ul');
        permissions.forEach(perm => {
            const li = document.createElement('li');
            li.textContent = perm.resource;
            const span = document.createElement('span');
            span.textContent = perm.access;
            if (perm.class) {
                li.classList.add(perm.class);
            }
            li.appendChild(span);
            ul.appendChild(li);
        });
        rbacContent.appendChild(ul);
    }

    // --- Event Handlers ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        hideMessage(loginMessage);

        if (mockUsers[username] && mockUsers[username].password === password) {
            currentUser = mockUsers[username];
            loginSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
            displayUsername.textContent = currentUser.username || username;
            displayRole.textContent = currentUser.role;
            updateRBACDisplay(currentUser.role);
            hideMessage(paymentMessage);
            hideMessage(emailMessage);
        } else {
            showMessage(loginMessage, 'Invalid username or password.', 'error');
        }
    });

    logoutButton.addEventListener('click', () => {
        currentUser = null;
        loginSection.classList.remove('hidden');
        dashboardSection.classList.add('hidden');
        usernameInput.value = '';
        passwordInput.value = '';
        hideMessage(loginMessage);
    });

    payButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            showMessage(paymentMessage, 'Please enter a valid amount.', 'error');
            return;
        }

        // Simulate API call to payment gateway
        hideMessage(paymentMessage);
        const scenario = amount % 2 === 0 ? paymentScenarios.success : paymentScenarios.failure; // Simple mock logic
        
        setTimeout(() => { // Simulate network delay
            showMessage(paymentMessage, scenario.message, scenario.status);
            if (scenario.status === 'success') {
                // In a real app, you'd then trigger a backend call for email confirmation
                // For this demo, we'll just show success
            }
        }, 1500);
    });

    emailButton.addEventListener('click', () => {
        const selectedType = emailTypeSelect.value;
        const emailInfo = emailTypes[selectedType];
        hideMessage(emailMessage);

        if (!emailInfo) {
            showMessage(emailMessage, 'Invalid email type selected.', 'error');
            return;
        }

        // Simulate API call to transactional email service
        setTimeout(() => { // Simulate network delay
            showMessage(emailMessage, `Simulated email sent: "${emailInfo.subject}" to ${currentUser.username || 'user'}`, 'success');
        }, 1200);
    });

});
