/// <reference types="@sveltejs/kit" />

declare namespace App {
    // Interface for public environment variables (prefixed with VITE_)
    interface Env {
        VITE_API_URL: string;
    }

    interface Environment {
        // Public environment variables
        public: Env;
        // Private environment variables (not exposed to the client)
        private: object;
    }
}
