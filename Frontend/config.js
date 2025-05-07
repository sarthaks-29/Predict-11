// Configuration for different environments
const config = {
    // Development environment (local)
    development: {
        apiBaseUrl: 'http://localhost:5000',
        staticBaseUrl: '../Backend/Static/public'
    },
    
    // Production environment (deployed)
    production: {
        apiBaseUrl: 'https://jaanu11-backend.onrender.com', // Use local Flask backend for production as well
        staticBaseUrl: 'https://jaanu11-backend.onrender.com/Static/public'
    }
};

// Determine current environment
// In a real app, you might want to use environment variables or build flags
const isProduction = window.location.hostname !== 'localhost' && 
                    !window.location.hostname.includes('127.0.0.1');

// Export the appropriate configuration
const currentConfig = isProduction ? config.production : config.development;

console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);
console.log(`API Base URL: ${currentConfig.apiBaseUrl}`);
console.log(`Static Base URL: ${currentConfig.staticBaseUrl}`);

export default currentConfig;