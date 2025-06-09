---
author: Olaf Luijks
pubDatetime: 2024-07-08T21:14:25.318Z
title: Rapinsel-Spleen - In the beginning (Part 1)
slug: sprs-part1-in-the-beginning
featured: false
draft: false
tags:
  - personal
  - programming
  - side-projects
  - rust
description: In the beginning - Setting up a pnpm workspace
---

## Setup PNPM Workspace

Although I wrote a post on how to setup a workspace using Bun this time I'm starting with a PNPM Workspace. It's almost the same, I just felt like using PNPM so the steps are pretty easy:

```zsh
mkdir rapinsel && cd rapinsel
```

```zsh
pnpm init
```

This will create a package.json. My stripped-down version looks like this:

```json
{
  "name": "rapinsel",
  "version": "0.0.1",
  "license": "MIT"
}
```

Now it's time to create a pnpm workspace by creating a `pnpm-workspace.yaml` file and define the directories we need for our project. You are pretty much free to use any layout you want but I've seen many people using a `packages` directory like this:

```yaml
packages:
  - "packages/*"
```

Inside this `packages` directory we will create our two projects.

```zsh
mkdir backend frontend
```

In the next chapter we will start on the backend in Rust: see you there my friend.

---

<h4 style="text-align: center; padding-bottom: 26px;">
I learned a lot reading this book and it is a nice to have reference<br /><br />
  <a 
    href="https://amzn.to/4kiPb97" target="_blank">Click here to get your copy of the book Rust Essentials: Rust Essentials for Backend Engineers
  </a>
</h4>

![image](@/assets/images/rust-book.jpg)

---
