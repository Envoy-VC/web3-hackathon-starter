# 🛫 Web3 Hackathon Starter

The Web3 Hackathon Starter Kit, or w3-starter, is a web3 dApp template designed to simplify the process of building hackathon projects. By eliminating unnecessary boilerplate code, this opinionated template allows you to focus on the core functionality of your project. This is my go to template for hackathons and I hope you find it useful as well.

---

## 🧰 Tech Stack

1. [Create T3 App](https://create.t3.gg/): The Web3 Hackathon Starter Kit is bootstrapped with Create T3 App, which ensures type safety throughout the project. It also includes additional packages like [@t3-oss/env-nextjs](https://env.t3.gg/) for easy management of environment variables.
2. [Tailwind CSS](https://tailwindcss.com/): This template uses Tailwind CSS as a lightweight CSS framework, for efficient styling.
3. [thirdweb](https://thirdweb.com/): This Starter Kit uses thirdweb as a web3 infrastructure for seamless interaction with smart contracts and the blockchain.
4. [next-themes](https://github.com/pacocoursey/next-themes): To enable theme switching between dark and light themes, the template uses next-themes as a theme provider.
5. [zod](https://zod.dev/): For form validation, a lightweight library that provides type validation for forms.
6. [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): To manage the application's state, this template uses zustand, a minimalistic state management library for React.
7. [Ant Design](https://ant.design/): The Web3 Hackathon Starter Kit integrates ant design, a comprehensive UI component library, to facilitate the development of a visually appealing user interface.
8. [react-icons](https://react-icons.github.io/react-icons): This template includes react-icons, a popular library that provides a wide range of icons for use in your project.
9. [react-hot-toast](https://react-hot-toast.com/): For displaying toast notification messages, this Starter Kit uses react-hot-toast, a lightweight and customizable toast library.
10. [next-seo](https://github.com/garmeeh/next-seo): To optimize your project for search engines, this template utilizes next-seo as an SEO provider.

---

## 🚀 Getting Started

To get started with the Web3 Hackathon Starter Kit, follow these simple steps:

1. Clone the Repository: Begin by cloning the w3-starter repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Envoy-VC/web3-hackathon-starter.git
   ```

   or click on the use as template button to create a new repository from this template.

2. Install Dependencies: Navigate to the cloned repository and install the required dependencies by running the following command:
   ```bash
   npm install
   ```
3. Create a .env.local file: Create a `.env` file in the root directory of your project and add the following environment variables:

   ```bash
   NEXT_PUBLIC_TW_CLIENT_ID='YOUR_CLIENT_ID'
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID='YOUR_PROJECT_ID'
   ```

   You can obtain your API key from [thirdweb](https://thirdweb.com/). To obtain your project ID, you will need to create a project on [Wallet Connect](https://cloud.walletconnect.com/app).

4. Run the Project: Once you have installed the dependencies and added the required environment variables, you are ready to run the project. To start the development server, run the following command:

   ```bash
    npm run dev
   ```

---

Customize Your Project: Open the project in your preferred code editor and customize it according to your hackathon project requirements. Feel free to modify the existing files or add new ones as needed.

---

## Contributing 🤝

Contributions are welcomed. If you encounter any issues or have suggestions for improvements, please submit them via GitHub issues. Additionally, feel free to fork the repository and submit pull requests with your enhancements.

---

## License

The Web3 Hackathon Starter Kit is open source software licensed under the MIT License. Please see the [LICENSE](./LICENSE)

---
