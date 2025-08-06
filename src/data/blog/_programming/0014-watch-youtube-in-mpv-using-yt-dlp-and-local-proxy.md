---
author: Olaf Luijks
pubDatetime: 2025-08-06T14:20:21.300Z
title: Watch YouTube in MPV using yt-dlp and a local proxy
slug: youtube-mpv-tinyproxy-yt-dlp
featured: false
draft: false
tags:
  - mpv
  - cli
  - linux
  - proxy
  - youtube
description: How to stream YouTube videos directly in MPV using yt-dlp and a local proxy with Tinyproxy.
---

## Introduction

YouTube doesn't make it easy to watch videos outside the browser. But with the right tools, you can enjoy videos cleanly, ad-free, and directly in your terminal or in MPV. This guide walks through a small script I use, plus how to set up a local proxy with Tinyproxy and `yt-dlp`.

## Prerequisites

Install the following packages:

```bash
sudo pacman -S mpv yt-dlp tinyproxy
# or on Ubuntu:
# sudo apt install mpv yt-dlp tinyproxy
```

## Configure Tinyproxy

Create your Tinyproxy configuration file at `~/.config/tinyproxy/tinyproxy.conf`:

```ini
Port 38888
Listen 127.0.0.1
Timeout 600
ConnectPort 443
ConnectPort 80
MaxClients 100
LogLevel Error
Logfile "/dev/null"
PidFile "/tmp/tinyproxy.pid"
Allow 127.0.0.1
```

Then start Tinyproxy with:

```bash
tinyproxy -c ~/.config/tinyproxy/tinyproxy.conf &
```

## The Script

This simple Zsh function lets you watch a YouTube video directly in MPV by providing the video ID:

```zsh
ytmpv () {
  local v_id=$1
  local b_url="https://www.youtube.com/watch?v=$v_id"
  local f_url
  f_url=$(yt-dlp --proxy http://127.0.0.1:38888 -f 'best[ext=mp4]' -g "$b_url")
  if [[ -z "$f_url" ]]; then
      echo "❌ Failed to fetch stream. Check yt-dlp or proxy."
      return 1
  fi
  mpv --quiet --http-proxy=http://127.0.0.1:38888 "$f_url" > /dev/null 2>&1
}
```

Place it in your `~/.zshrc`, reload with `source ~/.zshrc`, and you're ready to go:

```bash
ytmpv dQw4w9WgXcQ
```

## Notes

- The URL fetched by `yt-dlp` is time-limited and typically expires after a few minutes (or hours, I'm not sure).
- YouTube may occasionally serve formats that aren’t streamable via direct URL. In that case, try tweaking the format selector (`-f`) or remove the `ext=mp4` constraint.
- If you get HTTP 403/404 errors, it's usually due to an expired URL or SABR fragment issues. Just try again or restart Tinyproxy.
- You can also modify the script to use DASH audio/video split streams and let MPV stitch them automatically.

## Conclusion

This is by no means a perfect solution, YouTube's streaming behavior can change, and direct URLs can expire or fail. But for now, it works reliably enough, and it's a lightweight, no-tracking, minimalist way to stream YouTube videos. Feel free to enhance the script, add support for DASH streams, or build something even wilder.
