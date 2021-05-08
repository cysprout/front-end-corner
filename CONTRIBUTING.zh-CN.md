# 贡献指南

[English](./CONTRIBUTING.md) | **中文**

## 参与贡献
在以任何形式的参与前，请先阅读[开发指南](##开发指南)。如有任何的意见或建议，欢迎您通过创建  [Issue](https://github.com/cysprout/front-end-corner/issues) 或 [Pull Request](https://github.com/cysprout/front-end-corner/pulls) 的方式告知我们

## 开发指南
提交信息应符合如下规则， 建议使用工具 comitzen(git cz) 代替 git commit

    [TYPE](SCOPE):DESCRIPTION#[ISSUE]  # 如 feat(doc):add 'graph' for doc #777

- 【必需】TYPE: 类型描述。包括 feat(功能)，fix，doc(文档)，build(构建)，example(只用于修改examples/*下的文件)，chore(例行任务)
- 【可选】SCOPE: 影响的功能模块，例如, button. 一般来说用于新功能, 修复时
- 【必需】DESCRIPTION: 内容简要概述, try to use English as you can
- 【可选】ISSUE: 关联的问题编号. 一般来说用于新功能, 修复时

## 创建一次提交
大的功能开发应该另起一个分支进行，新功能增加或者问题修复流程如下:
```
$ git checkout -b [feat_branch/fix_branch] origin/dev

# 开发

$ git add .
$ git commit -m "describ sth." # 提交说明要依照开发指南来写
$ git pull --rebase origin dev

# 冲突

$ git push origin [feat_branch/fix_branch]
```
