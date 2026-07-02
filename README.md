# Academic Personal Website

A personal academic website built with Jekyll and hosted on GitHub Pages.

## Setup Guide

### 1. Install Ruby and Build Tools

```bash
sudo apt update
sudo apt install ruby-full build-essential
```

### 2. Install Bundler

```bash
gem install bundler
```

Add Bundler to your PATH:

```bash
vim ~/.bashrc
```

Add the following line:

```bash
export PATH="$HOME/.local/share/gem/ruby/3.3.0/bin:$PATH"
```

Apply the changes:

```bash
source ~/.bashrc
```

### 3. Configure RubyGems Mirror

Switch to the domestic mirror for faster downloads:

```bash
gem sources -l
gem sources --remove https://rubygems.org/
gem sources --add https://gems.ruby-china.com/
gem sources -l
```

Configure Bundler mirror:

```bash
bundle config set mirror.https://rubygems.org https://gems.ruby-china.com/
bundle config set --local path ~/.gem
```

### 4. Clone and Set Up

```bash
git clone https://github.com/mmistakes/mm-github-pages-starter.git
cd mm-github-pages-starter
```

### 5. Install Dependencies

```bash
bundle install
```

### 6. Run Locally

```bash
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser to preview.

### 7. Deploy to GitHub Pages

```bash
git remote set-url origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

## Acknowledgments

- Based on [Lvyizhuo/Lvyizhuo.github.io](https://github.com/Lvyizhuo/Lvyizhuo.github.io)
- Built with [Minimal Mistakes](https://mademistakes.com/work/jekyll-themes/minimal-mistakes/) Jekyll theme