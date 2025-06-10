---
author: Olaf Luijks
pubDatetime: 2025-06-03T06:17:57.785Z
title: Shkrimi Tauri App - Setup development environment [Part 1]
slug: tauri-app-setup-development-environment
featured: false
draft: false
tags:
  - tauri
  - programming
description: Building a simple writers app using Tauri and Svelte
---

**Ever dreamed of building your own desktop app without diving deep into complex frameworks? Let's embark on a journey to create 'Shkrimi', a writer's app inspired by our upcoming trip to Albania!**

| &nbsp;        |                                                                       |
| ------------- | --------------------------------------------------------------------- |
| Level         | beginner                                                              |
| Parts         | 24                                                                    |
| Languages     | rust, typescript                                                      |
| Tools         | node, (p)npm, nvm, rust                                               |
| Editor        | VSCode / Neovim                                                       |
| Time Estimate | ☕ 1 coffee read, 🍝 1 pasta cook setup (6–8 min read, ~30 min setup) |

In this series we will be building a simple writers app using Tauri, not as complicated as Scrivener but with enough features to call it a serious desktop application. let's call the app `Shkrimi` - Albanian word for writing.

As my wife luba and I plan our adventure to Albania this August, I thought, why not channel that excitement into building something meaningful? Thus, 'Shkrimi' was born.

If you don't know what Tauri is, it is a framework to build cross-platform desktop apps using Rust for the backend and Javascript/Typescript for the frontend. This little tutorial is for beginners so if this is your first adventure with Tauri just follow along and have fun.

We will be integrating a wysiwyg editor and if we're lucky even write some nifty Rust code. In the last part I'll give you a link to the github repository.

> Although this is a beginner tutorial, I'm assuming you have a little knowledge of Javascript, Typescript and Svelte. If you don't, please learn a little on those topics and come back here. You don't have to be a guru, some basic programming experience is all you need.

## Table of contents

## Setup development environment

> I'm assuming that you've already have node and (p)npm installed.

### Prerequisites

> I'm running (arch) linux but if you are using MacOS or Windows please refer to the documentation. Where needed I'll provide links to the docs that will help you out getting things up and running.

We need some system dependencies, rust of course, nvm, git and a text editor.

See [Install Tauri Prerequisites](httpstest://tauri.app/start/prerequisites/)

Install system deps, rust, git, nvm and a text editor:Lets

````

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
````

```sh
sudo pacman -S git
```

```sh
sudo pacman -S --needed \
  webkit2gtk-4.1 \
  base-devel \
  curl \
  wget \
  file \
  openssl \
  appmenu-gtk-module \
  libappindicator-gtk3 \
  librsvg
```

```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Install neovim or VSCode or both. If you want to use VSCode install the following extensions:

- rust-analyzer
- Svelte for VS Code
- Tailwind CSS IntelliSense

If you are a vim guy or girl setup lsp's for typescript, svelte and rust. Take a moment to read my other post about neovim: [My last Neovim configuration](/posts/my-last-neovim-configuration/)

```sh
sudo pacman -S code
sudo pacman -S neovim
```

Once this is done we are pretty much ready to go and create our Tauri project.

### Did you know?

> Tauri apps are known for their small bundle sizes compared to Electron apps, making them faster and more efficient!

### Scaffolding Tauri app

There are many ways to scaffold a Tauri app but let say you want to use pnpm and Svelte for the frontend then we would issue the following command:

> Take a look at [Tauri 2.0](https://v2.tauri.app/) if you are using powershell, bash, deno, bun, npm or yarn...

```sh
pnpm create tauri-app
```

````sh
✔ Project name · shkrimi
✔ Identifier · com.shkrimi.app
✔ Choose which language to use for your frontend · TypeScript / JavaScript
✔ Choose your package manager · pnpm
✔ Choose your UI template · Svelte - (https://svelte.dev/)
✔ Choose your UI flavor · TypeScript
Did you know?
Template created! To get started run:yass-mo
https://amzn.to/4kiPb97
  pnpm tauri dev’
### Setting a node version

Next, create a `.nvmrc` and set the node version. You could use a version number but I like to use the release/codename. `Jod` is the lts version (v22). If you would like to use a different version have a look at [Node.js Releases](https://nodejs.org/en/about/previous-releases).

```sh
echo node/jod >> .nvmrc
````

We then can set the node version that will be used for this project like:

```sh
nvm use
```

### Initialize git repository

We want to track our changes so let's quickly throw our project into git.

```sh
git init && git add . && git commit -m "Initial commit"
```

Now, let's fire up our app and see if things work!

```sh
pnpm tauri dev
```

<p style="text-align: center;">If you see this popping up: slap your ass and declare yourself a genius!</p>

![image](@/assets/images/writers-app/shkrimi-first-run.jpg)

### Part 2

In the next part, we'll explore the story behind Tauri, why it was created, what problems it set out to solve, and how it compares to frameworks like Electron. We'll also highlight some standout apps built with Tauri that you can try yourself.

## 📚 Resources

Here's a collection of helpful tools, docs, and guides to support your journey building apps with Tauri, Rust, and Svelte.

### 🧰 General Dev Environment

- [Node.js Downloads](https://nodejs.org/en/download/)
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [Rust Installation Guide](https://www.rust-lang.org/tools/install)
- [Git Basics](https://git-scm.com/doc)
- [VSCode Download](https://code.visualstudio.com/)
- [Neovim](https://neovim.io/)

### 🦀 Rust

- [The Rust Programming Language (Book)](https://doc.rust-lang.org/book/)
- [Rustlings (interactive exercises)](https://github.com/rust-lang/rustlings)
- [Crates.io – Rust Package Registry](https://crates.io/)
- [Awesome Rust (Curated List)](https://github.com/rust-unofficial/awesome-rust)

### 🧪 Tauri

- [Tauri Official Site](https://tauri.app/)
- [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites/)
- [Tauri GitHub Repo](https://github.com/tauri-apps/tauri)
- [Tauri Discord Community](https://discord.gg/tauri)

### 🎨 Frontend (Svelte + Tailwind)

- [Svelte Official Site](https://svelte.dev/)
- [Svelte Tutorial (interactive)](https://svelte.dev/tutorial)
- [Tailwind CSS](https://tailwindcss.com/)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Tailwind CSS IntelliSense Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### 🧠 Optional Learning Boosters

- [FreeCodeCamp: How to Build a Tauri App](https://www.freecodecamp.org/news/how-to-build-a-desktop-app-with-tauri/)
- [Frontend Mentor](https://www.frontendmentor.io/) – improve UI skills
- [Cross-Platform Desktop Apps (Book)](https://amzn.to/43s2EFU)

### 🛠 Developer Tools

- [pnpm](https://pnpm.io/)
- [Deno](https://deno.land/)
- [Bun](https://bun.sh/)
- [nvm-windows (for Windows users)](https://github.com/coreybutler/nvm-windows)

> 💡 **Tip:** Bookmark this list! These links will help you debug faster, build better, and learn smarter.

---

<h4 style="text-align: center; padding-bottom: 26px;">
I learned a lot reading this book and it is a nice to have reference<br /><br />
  <a 
    href="https://amzn.to/43s2EFU" target="_blank">Click here to get your copy of the book Cross-Platform Desktop Apps - Electron, Tauri, and Beyond: A Practical Guide to Cross-Platform Development
  </a>
</h4>

![image](@/assets/images/cross-platform-apps.jpg)
