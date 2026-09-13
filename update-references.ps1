# 更新所有文件中的引用，将dsh-dafeiyu-pet改为dsh-dafeiyu

Write-Host "正在更新文件引用..." -ForegroundColor Yellow

# 定义要更新的文件
$files = @(
    "README.md",
    "package.json",
    "index.js",
    "USAGE.md"
)

# 定义替换规则
$replacements = @(
    @{Old = "dsh-dafeiyu-pet"; New = "dsh-dafeiyu"},
    @{Old = "DshPet"; New = "DafeiyuPet"},
    @{Old = "DSH 大肥鱼宠物插件"; New = "DSH 大肥鱼插件"},
    @{Old = "dsh-dafeiyu-pet"; New = "dsh-dafeiyu"}
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "更新文件: $file" -ForegroundColor Cyan
        
        # 读取文件内容
        $content = Get-Content $file -Raw
        
        # 执行替换
        foreach ($replacement in $replacements) {
            $content = $content -replace $replacement.Old, $replacement.New
        }
        
        # 写回文件
        Set-Content $file -Value $content -NoNewline
        
        Write-Host "  ✅ 已更新" -ForegroundColor Green
    } else {
        Write-Host "  ❌ 文件不存在: $file" -ForegroundColor Red
    }
}

Write-Host "`n更新完成！" -ForegroundColor Green