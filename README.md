# dsh-dafeiyu 🐟

<p align="center">
  <a href="https://www.npmjs.com/package/dsh-dafeiyu"><img alt="npm version" src="https://img.shields.io/npm/v/dsh-dafeiyu?label=npm&color=blue"></a>
  <a href="https://www.npmjs.com/package/dsh-dafeiyu"><img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/dsh-dafeiyu?label=%E6%9C%88%E4%B8%8B%E8%BD%BD&color=brightgreen"></a>
  <a href="https://github.com/BlueChonk/dsh-dafeiyu"><img alt="stars" src="https://img.shields.io/github/stars/BlueChonk/dsh-dafeiyu?style=social"></a>
  <a href="https://github.com/BlueChonk/dsh-dafeiyu/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/BlueChonk/dsh-dafeiyu?color=orange"></a>
  <img alt="platform" src="https://img.shields.io/badge/platform-DeepSeek%20Harness%20Web-8A2BE2">
  <img alt="assets" src="https://img.shields.io/badge/assets-dynamic%20animations-ff69b4">
</p>

一只住在 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 里的大肥鱼桌面宠物：待机呼吸、随机动作、左右转向、屏幕漫游、点击 Q 弹、拖拽甩抛反弹、右键菜单点播——百余个手绘风透明动画随时无缝衔接；还能跟随 DSH 会话事件切换工作状态动画、按档位播放余额动画 + 头顶气泡、碎碎念与对话聊天、窗口失焦时弹系统通知。可多开同屏，能脱离浏览器住上**桌面**（透明置顶小窗），也能自己添加**全新宠物种类**（pet pack）。

## 快速开始（安装插件）

> 以下命令都在你的**命令行终端**（PowerShell / CMD 等）中运行。前提是 DSH 环境已就绪：

```sh
# ① 前置要求：确认 Node.js 已安装
node -v

# ② 安装 DSH 启动器与 pnpm（已装可跳过；装完请重新打开终端）
npm install -g @deepseek-ai/dsh pnpm
dsh --version   # 验证 dsh 命令可用

# ③ 安装本插件
dsh plugin --profile web add dsh-dafeiyu
```

重启 `dsh web`，宠物出现在界面右上角（默认配置角落，可在设置页修改）。

## 功能特性

- 🐟 **大肥鱼造型**：可爱的胖嘟嘟鱼形象
- 🎬 **丰富动画**：待机呼吸、随机动作、转向、漫游等
- 🖱️ **交互响应**：点击Q弹、拖拽甩抛反弹
- 💬 **对话聊天**：支持碎碎念与对话功能
- 🎭 **状态切换**：跟随DSH会话事件切换工作状态动画
- 💰 **余额显示**：按档位播放余额动画 + 头顶气泡
- 🔔 **系统通知**：窗口失焦时弹系统通知
- 🐟 **多开支持**：可同时运行多个宠物
- 🖥️ **桌面模式**：可脱离浏览器住上桌面（透明置顶小窗）
- 🎨 **自定义扩展**：支持添加全新宠物种类（pet pack）

## 开发

```bash
# 克隆仓库
git clone https://github.com/BlueChonk/dsh-dafeiyu.git
cd dsh-dafeiyu

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 配置

宠物支持多种配置选项，可以通过DSH设置页面进行调整：

- **位置**：设置宠物在屏幕上的初始位置
- **大小**：调整宠物显示大小
- **动画速度**：控制动画播放速度
- **交互模式**：启用/禁用点击、拖拽等交互
- **通知设置**：配置系统通知行为

## 贡献

欢迎贡献代码、报告问题或提出新功能建议！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) - 提供插件平台
- [dsh-pet](https://github.com/BlueChonk/dsh-pet) - 原版桌面宠物插件
- 所有贡献者和用户的支持

---

**大肥鱼，快乐每一天！** 🐟✨