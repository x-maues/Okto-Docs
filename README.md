# Okto Layer Documentation

Welcome to the **Okto Layer Documentation Project**, a comprehensive and interactive documentation site built using **Fumadocs**, a modern documentation framework. This project is designed to provide developers with everything they need to integrate and utilize Okto Layer’s innovative decentralized solutions.

---

## 🚀 Features

- **Interactive API Playground**: Test APIs directly from the documentation with real-time results.
- **Dynamic Flowcharts and Diagrams**: Visualize complex systems using Mermaid.js diagrams.
- **Accordion-based FAQ**: Easily accessible answers to common questions.
- **Code Snippets**: Pre-written examples in multiple programming languages.
- **Table of Contents (ToC)**: Auto-generated ToC for seamless navigation.
- **Responsive Design**: Fully optimized for mobile and desktop usage.

---

## 📂 Project Structure

```plaintext
├── content/
│   ├── docs/
│   │   ├── core/
│   │   │   ├── oktochain.mdx          # Documentation for OktoChain
│   │   │   ├── dtn.mdx               # Documentation for Decentralized Transaction Network
│   │   │   ├── dwn.mdx               # Documentation for Decentralized Wallet Network
│   │   │   ├── ull.mdx               # Documentation for Unified Liquidity Layer
│   │   │   └── playground.mdx        # Interactive playground page
│   └── overview.mdx                  # High-level overview of Okto Layer
├── components/
│   ├── ApiExplorer.tsx               # Interactive API Explorer component
│   ├── TransactionSimulator.tsx      # Multi-chain transaction simulator
│   └── AccordionFAQ.tsx              # Accordion-based FAQ component
├── public/
│   └── assets/                       # Images and static assets for the docs
├── styles/
│   └── global.css                    # Custom CSS for styling
├── package.json                      # Project dependencies
└── README.md                         # Project readme



🛠️ Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
```
Node.js (v16 or later)
Yarn or npm
Installation
Clone the repository:
```
```bash
Copy
Edit
git clone https://github.com/your-org/okto-layer-docs.git
cd okto-layer-docs
```
Install dependencies:

```bash
Copy
Edit
npm install
# or
yarn install
Start the development server:
```
```bash
Copy
Edit
npm run dev
# or
yarn dev
Open your browser and navigate to:
```

Copy
Edit
http://localhost:3000
📖 Adding Documentation Content
Documentation pages are written using MDX, a format combining Markdown with React components, which allows embedding of interactive and reusable components.

Example: Adding a New Page
Create a new .mdx file in the content/docs/ directory. For example:

plaintext
Copy
Edit
content/docs/new-feature.mdx
Write your content in Markdown and embed components as needed. Here's an example:

mdx
Copy
Edit
---
title: New Feature
description: Documentation for the new feature in Okto Layer.
---

# New Feature

Learn about the new feature in the Okto Layer. Here's an example flowchart:

```mermaid
graph TD;
A[User] -->|Interacts with| B[API Gateway];
B --> C[Okto Layer];
C --> D[Blockchain Network];
<Accordions> <Accordion title="Feature Details"> This feature simplifies cross-chain interactions using advanced orchestration. </Accordion> <Accordion title="Example Use Case"> Use the API Gateway to interact seamlessly with multiple blockchains. </Accordion> </Accordions> ```
Save the file and restart the development server to see changes.

🧩 Custom Components
Interactive API Playground
The API Playground allows users to test APIs directly within the documentation.

Usage:

tsx
Copy
Edit
import ApiExplorer from "../components/ApiExplorer";

<ApiExplorer
   endpoints={[
      { method: "GET", path: "/wallets", description: "Fetch all wallets" },
      { method: "POST", path: "/transactions", description: "Create a transaction" },
   ]}
/>;
Accordion-Based FAQ
Use the Accordion component to create an FAQ or organize content compactly.

Example:

mdx
Copy
Edit
<Accordions>
   <Accordion title="What is the Okto Layer?">
      The Okto Layer is a middleware solution simplifying blockchain development.
   </Accordion>
   <Accordion title="How does the Unified Liquidity Layer work?">
      It aggregates multiple liquidity sources to provide seamless token swaps.
   </Accordion>
</Accordions>
🎨 Styling
Custom styles can be applied globally or per component by editing the styles/global.css file or embedding styles in a component.

📊 Dynamic Diagrams
Mermaid.js
Mermaid.js is used to create flowcharts and diagrams in the documentation.

Example:

mermaid
Copy
Edit
graph TD;
subgraph AA [Consumers]
A[Mobile App];
B[Web App];
C[Node.js Client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
end
Z[Gateway];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Embed this in any .mdx file with:

mdx
Copy
Edit
```mermaid
[Your Mermaid.js code here]
🛡️ Deployment
Deploy your project to any platform supporting Next.js, such as Vercel or Netlify.

Deploy on Vercel
Install the Vercel CLI:

bash
Copy
Edit
npm install -g vercel
Run the following command to deploy:

bash
Copy
Edit
vercel
📃 License
This project is licensed under the MIT License.

css
Copy
Edit

This markdown file includes the entire project overview, getting started instructions, usage examp
