
# My E-commerce App

This is a React-based e-commerce application that displays products fetched from an external API. The app includes features such as pagination, particle effects on product cards, and a dark/light theme toggle.

## Demo

You can view the live demo of the application [here](https://a-commercy.netlify.app/).

## Features

- Display a list of products with pagination.
- Particle effects on product cards when hovered.
- Skeleton loader for better user experience while loading products.
- Dark and light theme toggle.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Bootstrap**: Front-end framework for developing responsive websites.
- **React Router**: Declarative routing for React.js.
- **PropTypes**: Runtime type checking for React props.
- **Three.js**: JavaScript 3D library for creating 3D graphics.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MEGZE-0/my-ecommerce-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd my-ecommerce-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.


## Usage

- Click on the product cards to view the particle effect.
- Use the pagination controls to navigate through the products.
- Toggle the theme using the button in the header.

## Components

- **App**: Main application component that includes routing and theme toggle.
- **ProductList**: Displays the list of products with pagination and loading states.
- **Pagination**: Handles pagination logic and display.
- **ParticleEffect**: Displays particle animations on product hover.
- **SkeletonLoader**: Shows a loading placeholder while fetching product data.
- **Header**: Displays the navigation and theme toggle button.
- **Footer**: Contains footer content.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) - for providing the product data.
- [React](https://reactjs.org/) - for the UI library.
- [Three.js](https://threejs.org/) - for the 3D graphics library.
