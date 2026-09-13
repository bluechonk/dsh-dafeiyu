# DSH 大肥鱼宠物使用指南

## 安装

### 方法一：通过npm安装（推荐）
```bash
# 安装DSH启动器（如果尚未安装）
npm install -g @deepseek-ai/dsh pnpm

# 安装大肥鱼宠物插件
dsh plugin --profile web add dsh-dafeiyu-pet
```

### 方法二：从源码安装
```bash
# 克隆仓库
git clone https://github.com/BlueChonk/dsh-dafeiyu-pet.git
cd dsh-dafeiyu-pet

# 安装依赖
npm install

# 链接到DSH
dsh plugin --profile web add ./ 
```

## 使用

1. **启动DeepSeek Harness**
   ```bash
   dsh web
   ```

2. **访问Web界面**
   打开浏览器访问：http://127.0.0.1:3080/

3. **宠物出现**
   大肥鱼会自动出现在界面右上角

## 功能

### 基本交互
- **点击**：大肥鱼会Q弹并说一些有趣的话
- **拖拽**：可以拖动大肥鱼到屏幕任意位置
- **右键菜单**：右键点击可以查看更多选项

### 动画状态
- **待机呼吸**：大肥鱼会缓慢呼吸
- **游泳**：随机游动
- **开心**：会话开始时
- **睡觉**：会话结束时
- **吃东西**：有特殊事件时

### 气泡对话
- 大肥鱼会根据事件显示不同的气泡消息
- 余额充足时显示鼓励消息
- 余额不足时显示提醒消息

## 配置

在DSH设置页面可以调整：
- 宠物位置
- 宠物大小
- 动画速度
- 交互模式
- 通知设置

## 开发

### 项目结构
```
dsh-dafeiyu-pet/
├── index.js          # 主入口文件
├── package.json      # 项目配置
├── README.md         # 项目说明
├── LICENSE           # 许可证
├── .gitignore        # Git忽略文件
└── USAGE.md          # 使用指南（本文件）
```

### 开发模式
```bash
# 安装依赖
npm install

# 开发模式（监听文件变化）
npm run dev

# 构建生产版本
npm run build
```

### 添加新功能
1. Fork本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建Pull Request

## 故障排除

### 宠物不显示
1. 检查DSH是否正常运行：`dsh --version`
2. 检查插件是否安装：`dsh plugin --profile web list`
3. 重启DSH：`dsh web`

### 动画不流畅
1. 检查浏览器性能
2. 减少同时运行的宠物数量
3. 调整动画速度设置

### 端口冲突
如果端口3080被占用：
```bash
# 查找占用端口的进程
netstat -ano | findstr :3080

# 结束进程（替换PID）
taskkill /PID <PID> /F
```

## 获取帮助

- **GitHub Issues**: https://github.com/BlueChonk/dsh-dafeiyu-pet/issues
- **DeepSeek Harness文档**: https://github.com/deepseek-ai/deepseek-harness

## 更新

### 更新插件
```bash
dsh plugin --profile web update dsh-dafeiyu-pet
```

### 更新DSH
```bash
npm update -g @deepseek-ai/dsh
```

---

**大肥鱼，快乐每一天！** 🐟✨