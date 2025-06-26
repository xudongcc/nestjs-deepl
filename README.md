# NestJS DeepL Module

DeepL module for Nest framework.

## 开发工具配置

本项目配置了完整的代码质量工具链：

### 🛠️ 工具说明

- **Husky**: Git hooks 管理
- **lint-staged**: 对暂存文件运行 linter
- **ESLint**: JavaScript/TypeScript 代码检查
- **Prettier**: 代码格式化
- **Commitizen**: 标准化提交信息
- **Commitlint**: 提交信息验证

### 📝 可用的脚本命令

```bash
# 代码检查
pnpm lint          # 运行 ESLint 并自动修复
pnpm lint:check    # 运行 ESLint 检查（不修复）

# 代码格式化
pnpm format        # 运行 Prettier 格式化
pnpm format:check  # 检查代码格式（不修改）

# 测试
pnpm test          # 运行测试
pnpm test:watch    # 监听模式运行测试
pnpm test:cov      # 运行测试并生成覆盖率报告

# 提交
pnpm commit        # 使用 Commitizen 进行标准化提交
```

### 🔧 Git Hooks

项目配置了以下 Git hooks：

1. **pre-commit**:
   - 运行 lint-staged（ESLint + Prettier + TypeScript 类型检查）
   - 运行测试

2. **commit-msg**:
   - 验证提交信息是否符合 Conventional Commits 规范

### 📋 提交信息规范

使用 `pnpm commit` 或 `git cz` 进行提交，支持以下类型：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `build`: 构建系统
- `ci`: CI/CD 相关
- `chore`: 其他杂项
- `revert`: 回滚提交

### 🎯 工作流程

1. 开发代码
2. 暂存文件：`git add .`
3. 提交代码：`pnpm commit` 或 `git commit`
4. Git hooks 会自动：
   - 运行 lint-staged（格式化 + 检查）
   - 运行测试
   - 验证提交信息

### 📁 配置文件

- `.prettierrc`: Prettier 配置
- `.prettierignore`: Prettier 忽略文件
- `eslint.config.mjs`: ESLint 配置
- `.lintstagedrc.js`: lint-staged 配置
- `commitlint.config.js`: Commitlint 配置
- `.husky/`: Husky hooks 配置

## 安装和运行

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm run build

# 运行测试
pnpm test
```

## 许可证

MIT
