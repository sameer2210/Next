const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        CUSTOM_API_URL: "https://api.example.com",
        ANOTHER_ENV_VARIABLE: "value"
      }
    };
  }

  return {
    reactStrictMode: true,
    env: {
      CUSTOM_API_URL: "https://api.example.com",
      ANOTHER_ENV_VARIABLE: "value"
    }
  };
};



// This configuration is useful for managing different settings in development and production environments, such as API URLs or feature flags.
// Make sure to restart your Next.js server after making changes to the next.config.js file for the changes to take effect.
// Note: The `PHASE_DEVELOPMENT_SERVER` constant is used to check if the application is running in development mode. You can import it from 'next/constants' as shown in the code.

// This allows you to conditionally apply configurations based on the environment, which is a common practice in Next.js applications.
// You can also add more environment variables or modify the image patterns as per your requirements.
// This configuration file is essential for customizing the behavior of your Next.js application, especially when dealing with different environments or external resources like images and APIs.

// It helps in maintaining a clean separation of concerns and allows for easier management of environment-specific settings.
// You can also use this file to enable or disable features, set up redirects, or configure other Next.js options as needed.
// Remember to keep your environment variables secure and avoid exposing sensitive information in your codebase.
// This configuration is a good starting point for any Next.js application, and you can expand it further based on your project's requirements.

// The configuration includes:
// - Enabling React strict mode for better error handling and warnings.
// - Defining remote image patterns to allow images from a specific hostname.
// - Setting environment variables that can be accessed throughout the application.
