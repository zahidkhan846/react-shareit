# react-shareit

- Share your content on social media.

## ✨ Features

- 🍃 Only ~6kb gzipped and no external dependencies
- 🌀 Uses React Portal
- ✌ Written w/ TypeScript

## 🔧 Installation

````bash
npm i react-shareit    # npm
yarn add react-shareit # yarn
``

## 📦 Example

```tsx
import React, { useState } from "react";
import { ReactShare } from "react-shareit";

const Example = () => {
  return (
    <>
      <ReactShare
        data={{
          text: "Text",
          url: "https://blog.com/single-blog",
          title: "Title",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share 🔗</button>
      </ReactShare>
    </>
  );
};

export default Example;
````

## 👀 Props

| Prop            | Description                 | Type                 | Default                                       |
| --------------- | --------------------------- | -------------------- | --------------------------------------------- |
| `data`          | Share Object                | `{text, url, title}` | `{text: "", url: currentURL, title: "Share"}` |
| `sites`         | sites                       | `string[]`           | all platforms (see list below for key list)   |
| `closeText`     | translate close             | `string`             | localise close text                           |
| `onClick`       | callback on sucessful share |                      |                                               |
| `disableNative` | disables native share       | `boolean`            | `false`                                       |

## 🌎 Sites

- facebook
- twitter
- whatsapp
- reddit
- telegram
- linkedin
- mail
- copy (Copy to Clipboard)
- vk
- okru

## 📜 License

MIT &copy; [Zahid Khan](https://github.com/zahidkhan846)
