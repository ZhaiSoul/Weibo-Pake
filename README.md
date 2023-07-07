<h4 align="right"><strong>English</strong> | <a href="https://github.com/tw93/Pake/blob/master/README_CN.md">简体中文</a></h4>
<p align="center">
    <img src=https://gw.alipayobjects.com/zos/k/fa/logo-modified.png width=138/>
</p>
<h1 align="center">Pake</h1>
<p align="center"><strong>Turn any webpage into a desktop app with Rust <em>with ease</em>.</strong></p>
<div align="center">
    <a href="https://twitter.com/HiTw93" target="_blank">
    <img alt="twitter" src="https://img.shields.io/badge/follow-Tw93-red?style=flat-square&logo=Twitter"></a>
    <a href="https://t.me/+GclQS9ZnxyI2ODQ1" target="_blank">
    <img alt="telegram" src="https://img.shields.io/badge/chat-telegram-blueviolet?style=flat-square&logo=Telegram"></a>
    <a href="https://github.com/tw93/Pake/releases" target="_blank">
    <img alt="GitHub downloads" src="https://img.shields.io/github/downloads/tw93/Pake/total.svg?style=flat-square"></a>
    <a href="https://github.com/tw93/Pake/commits" target="_blank">
    <img alt="GitHub commit" src="https://img.shields.io/github/commit-activity/m/tw93/Pake?style=flat-square"></a>
    <a href="https://github.com/tw93/Pake/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/tw93/Pake.svg?style=flat-square"></a>
</div>

<div align="left">Pake supports Mac, Windows, and Linux. Check out README for <a href="#popular-packages">Popular Packages</a>, <a href="#command-line-packaging">Command-Line Packaging</a>, and <a href="#development">Customized Development</a> information. Feel free to share your suggestions in <a href=https://github.com/tw93/Pake/discussions>Discussions</a>.</div>

## 功能

- 🎐 基于Pake(Tauri)打包，只有5MB大小！
- 🚀 使用系统自带的WebView控件，高速！
- 📦 支持自定义js和css，带来更多花样！


<details>
<summary>🏂 You can download more applications from <a href="https://github.com/tw93/Pake/releases">Releases</a>. <b>Click here to expand the shortcuts reference!</b></summary>

<br/>

| Mac                         | Windows/Linux                  | Function                      |
|-----------------------------|--------------------------------|-------------------------------|
| <kbd>⌘</kbd> + <kbd>[</kbd> | <kbd>Ctrl</kbd> + <kbd>←</kbd> | Return to the previous page   |
| <kbd>⌘</kbd> + <kbd>]</kbd> | <kbd>Ctrl</kbd> + <kbd>→</kbd> | Go to the next page           |
| <kbd>⌘</kbd> + <kbd>↑</kbd> | <kbd>Ctrl</kbd> + <kbd>↑</kbd> | Auto scroll to top of page    |
| <kbd>⌘</kbd> + <kbd>↓</kbd> | <kbd>Ctrl</kbd> + <kbd>↓</kbd> | Auto scroll to bottom of page |
| <kbd>⌘</kbd> + <kbd>r</kbd> | <kbd>Ctrl</kbd> + <kbd>r</kbd> | Refresh Page                  |
| <kbd>⌘</kbd> + <kbd>w</kbd> | <kbd>Ctrl</kbd> + <kbd>w</kbd> | Hide window, not quite        |
| <kbd>⌘</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zoom out the page             |
| <kbd>⌘</kbd> + <kbd>+</kbd> | <kbd>Ctrl</kbd> + <kbd>+</kbd> | Zoom in the page              |
| <kbd>⌘</kbd> + <kbd>=</kbd> | <kbd>Ctrl</kbd> + <kbd>=</kbd> | Zoom in the Page              |
| <kbd>⌘</kbd> + <kbd>0</kbd> | <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset the page zoom           |

In addition, double-click the title bar to switch to full-screen mode. For Mac users, you can also use the gesture to go to the previous or next page and drag the title bar to move the window.

</details>

## Before starting

1. **For beginners**: Play with Popular Packages to find out Pake's capabilities, or try to pack your application with [GitHub Actions](https://github.com/tw93/Pake/wiki/Online-Compilation-(used-by-ordinary-users)). Don't hesitate to reach for assistance at [Discussion](https://github.com/tw93/Pake/discussions)!
2. **For developers**: “Command-Line Packaging” supports macOS fully. For Windows/Linux users, it requires some tinkering. [Configure your environment](https://tauri.app/v1/guides/getting-started/prerequisites) before getting started.
3. **For hackers**: For people who are good at both front-end development and Rust, how about customizing your apps' function more with the following [Customized Development](#development)?

## Command-Line Packaging

![Pake](https://gw.alipayobjects.com/zos/k/zd/pake.gif)

**Pake provides a command line tool, making the flow of package customization quicker and easier. See [documentation](./bin/README.md) for more information.**

```bash
# Install with npm
npm install -g pake-cli

# Command usage
pake url [OPTIONS]...

# Feel free to play with Pake! It might take a while to prepare the environment the first time you launch Pake.
pake https://weekly.tw93.fun --name Weekly --transparent
```

If you are new to the command line, you can compile packages online with _GitHub Actions_. See the [Tutorial](https://github.com/tw93/Pake/wiki/Online-Compilation-(used-by-ordinary-users)) for more information.

## Development

Prepare your environment before starting. Make sure you have Rust `>=1.63` and Node `>=16` (e.g., `16.18.1`) installed on your computer. For installation guidance, see [Tauri documentation](https://tauri.app/v1/guides/getting-started/prerequisites).

If you are unfamiliar with these, it is better to try out the above tool to pack with one click.

```sh
# Install Dependencies
npm i

# Local development [Right-click to open debug mode.]
npm run dev

# Pack application
npm run build
```

## Advanced Usage

1. You can refer to the [codebase structure](https://github.com/tw93/Pake/wiki/Description-of-Pake's-code-structure) before working on Pake, which will help you much in development.
2. Modify the `url` and `productName` fields in the `pake.json` file under the src-tauri directory, the "domain" field in the `tauri.config.json` file needs to be modified synchronously, as well as the `icon` and `identifier` fields in the `tauri.xxx.conf.json` file. You can select a `icon` from the `icons` directory or download one from [macOSicons](https://macosicons.com/#/) to match your product needs.
3. For configurations on window properties, you can modify the `pake.json` file to change the value of `width`, `height`, `fullscreen` (or not), `resizable` (or not) of the `windows` property. To adapt to the immersive header on Mac, change `transparent` to `true`, look for the `Header` element, and add the `padding-top` property.
4. For advanced usages such as style rewriting, advertisement removal, JS injection, container message communication, and user-defined shortcut keys, see [Advanced Usage of Pake](https://github.com/tw93/Pake/wiki/Advanced-Usage-of-Pake).


## Support

1. I have two cats, TangYuan and Coke. If you think Pake delights your life, you can feed them <a href="https://miaoyan.app/cats.html?name=Pake" target="_blank">some canned food 🥩</a>.
2. If you like Pake, you can star it on GitHub. Also, welcome to [recommend Pake](https://twitter.com/intent/tweet?url=https://github.com/tw93/Pake&text=%23Pake%20-%20A%20simple%20Rust%20packaged%20web%20pages%20to%20generate%20Mac%20App%20tool,%20compared%20to%20traditional%20Electron%20package,%20the%20size%20of%20nearly%2040%20times%20smaller,%20generally%20about%202M,%20the%20underlying%20use%20of%20Tauri,%20performance%20experience%20than%20the%20JS%20framework%20is%20much%20lighter~) to your friends.
3. You can follow my [Twitter](https://twitter.com/HiTw93) to get the latest news of Pake or join our [Telegram](https://t.me/+GclQS9ZnxyI2ODQ1) chat group.
4. I hope that you enjoy playing with it. Let us know if you find a website that would be great for a Mac App!
