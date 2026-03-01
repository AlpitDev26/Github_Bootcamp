document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation check
        if (!emailInput.value || !passwordInput.value) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate loading state
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;

        console.log('Attempting login with:', {
            email: emailInput.value,
            password: '••••••••'
        });

        // Simulate an API call
        setTimeout(() => {
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
            
            // Just for demonstration
            if (emailInput.value.includes('error')) {
                showToast('Invalid credentials provided.', 'error');
            } else {
                showToast('Login successful! Redirecting...', 'success');
            }
        }, 2000);
    });

    // Simple toast notification function
    function showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            padding: 12px 24px;
            background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-size: 0.875rem;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            backdrop-filter: blur(8px);
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Add keyframe animation for toast
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Add focus effects or other micro-interactions if desired
    const inputs = [emailInput, passwordInput];
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('label').style.color = '#6366f1';
        });
        input.addEventListener('blur', () => {
            input.parentElement.querySelector('label').style.color = '';
        });
    });
});
