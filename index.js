#!/usr/bin/env node

/**
 * DSH 大肥鱼插件
 * 基于DeepSeek Harness的桌面宠物
 */

const { DshPet } = require('@deepseek-ai/dsh-pet-core');

class DafeiyuPet extends DshPet {
  constructor(options = {}) {
    super({
      name: 'dafeiyu',
      displayName: '大肥鱼',
      description: '一只可爱的胖嘟嘟鱼，住在DeepSeek Harness里',
      ...options
    });
    
    // 大肥鱼特有的配置
    this.config = {
      ...this.config,
      color: '#FFB6C1', // 粉红色
      size: 'medium',
      animations: {
        idle: 'breathe',
        swim: 'swim',
        eat: 'eat',
        sleep: 'sleep',
        happy: 'happy',
        sad: 'sad'
      },
      ...options.config
    };
  }
  
  // 初始化宠物
  async init() {
    await super.init();
    console.log('🐟 大肥鱼宠物已初始化！');
    
    // 注册大肥鱼特有的事件
    this.on('session:start', this.onSessionStart.bind(this));
    this.on('session:end', this.onSessionEnd.bind(this));
    this.on('token:balance', this.onTokenBalance.bind(this));
  }
  
  // 会话开始事件
  onSessionStart() {
    this.playAnimation('happy');
    this.say('大肥鱼来啦！今天也要努力工作哦~');
  }
  
  // 会话结束事件
  onSessionEnd() {
    this.playAnimation('sleep');
    this.say('大肥鱼要休息了，明天见~');
  }
  
  // Token余额事件
  onTokenBalance(balance) {
    if (balance > 1000) {
      this.playAnimation('happy');
      this.showBubble('余额充足！💪');
    } else if (balance > 100) {
      this.playAnimation('idle');
      this.showBubble('余额还够用~');
    } else {
      this.playAnimation('sad');
      this.showBubble('余额不足啦！😢');
    }
  }
  
  // 点击事件
  onClick() {
    this.playAnimation('happy');
    const messages = [
      '大肥鱼被点到了！痒痒~',
      '嘿嘿，被发现了！',
      '大肥鱼在努力工作呢！',
      '要不要一起摸鱼？🐟'
    ];
    this.say(messages[Math.floor(Math.random() * messages.length)]);
  }
  
  // 拖拽事件
  onDrag() {
    this.playAnimation('swim');
  }
  
  // 说话功能
  say(message) {
    console.log(`🐟 大肥鱼说: ${message}`);
    this.showBubble(message);
  }
  
  // 显示气泡
  showBubble(text) {
    // 这里会调用核心库的气泡显示功能
    console.log(`💬 气泡: ${text}`);
  }
}

// 导出插件
module.exports = DafeiyuPet;

// 如果是直接运行，则启动宠物
if (require.main === module) {
  const pet = new DafeiyuPet();
  pet.init().catch(console.error);
}