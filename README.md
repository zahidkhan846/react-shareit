# react-shareit 🚀

A modern, lightweight, and stylish React component to share content on social media. Now with **Glassmorphism**, **Mobile Bottom Sheets**, and **Platform Labels**.

- 🍃 Only ~6kb gzipped and no external dependencies.
- 🌀 Uses React Portal for a clean DOM.
- ✌ Written in TypeScript with full type support.
- 📱 Native Web Share API fallback with a premium custom UI.

---

## ✨ Features

- **Modern Design**: Glassmorphic UI with `backdrop-filter` blur effects.
- **Responsive**: Native-feeling bottom sheet on mobile devices.
- **Customizable**: Optional platform labels and success feedback for copying links.
- **Animations**: Smooth entry/exit and hover micro-animations.

## 🔧 Installation

```bash
npm i react-shareit    # npm
yarn add react-shareit # yarn
```

## 📦 Usage

```tsx
import React from "react";
import { ReactShare } from "react-shareit";

const Example = () => {
  return (
    <ReactShare
      data={{
        text: "Check this out!",
        url: "https://your-awesome-site.com",
        title: "Awesome Site",
      }}
      showLabels={true}
      copySuccessText="Link Copied!"
    >
      <button>Share This 🔗</button>
    </ReactShare>
  );
};

export default Example;
```

## 👀 Props

| Prop              | Description                    | Type                      | Default               |
| ----------------- | ------------------------------ | ------------------------- | --------------------- |
| `data`            | Share Data                     | `{text, url, title}`      | (required)            |
| `sites`           | List of platforms to show      | `string[]`                | All supported sites   |
| `showLabels`      | Show platform names below icons| `boolean`                 | `true`                |
| `copySuccessText` | Text for the 'Copied!' toast   | `string`                  | `"Copied!"`           |
| `closeText`       | Custom Close button text/icon  | `string \| ReactNode`      | `"Close"`             |
| `onClick`         | Callback on platform selection | `(name: string) => void`  | `undefined`           |
| `disableNative`   | Force the custom share modal   | `boolean`                 | `false`               |
| `dark`            | Force dark mode icons          | `boolean`                 | `false`               |
| `scrollable`      | Horizontal scroll row (mobile) | `boolean`                 | `false`               |

## 🌎 Supported Sites

- `facebook`
- `twitter` (X)
- `whatsapp`
- `reddit`
- `telegram`
- `linkedin`
- `discord`
- `pinterest`
- `mail`
- `copy` (Copy to Clipboard)

## 🛠 Development & Testing

This project includes a dedicated example app for local testing.

```bash
npm install
npm run example
```
Accessible at `http://localhost:5173`.

## 📜 License

MIT &copy; [Zahid Khan](https://github.com/zahidkhan846)
