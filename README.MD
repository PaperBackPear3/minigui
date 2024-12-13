# Mini-GUI

Mini-GUI is a lightweight Kubernetes GUI built with Svelte for the frontend and Go for the backend. This project aims to provide an intuitive and efficient interface for managing Kubernetes clusters.

## Features

- **User-friendly Interface**: Built with Svelte for a responsive and fast user experience.
- **Backend in Go**: Efficient and scalable backend services.
- **Cluster Management**: Easily manage your Kubernetes clusters.
- **Resource Monitoring**: Monitor the status and performance of your Kubernetes resources.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/mini-gui.git
    cd mini-gui
    ```

2. Build the backend:
    ```sh
    cd api
    go build
    ```

3. Start the backend server:
    ```sh
    ./api
    ```

4. Install frontend dependencies and start the development server:
    ```sh
    cd app
    yarn install
    yarn dev
    ```

## Usage

Access the GUI by navigating to `http://localhost:5173` in your web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.