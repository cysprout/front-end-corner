# contribution

**English** | [中文](./CONTRIBUTING.zh-CN.md)

## How to be a contributer
Before participating in any form, please read [Development Guide](##Development&nbsp;Guide). If you have any comments or suggestions, you are welcome to create [Issue](https://github.com/cysprout/front-end-corner/issues) or [Pull Request](https://github.com/cysprout/front-end-corner/pulls) to inform us.

## Development Guide
The commit information should conform to the following rules， Recommended use tools comitzen(git cz) to replace git commit

```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]  # eg: feat(doc):add 'graph' for doc #777
```
- 【required】TYPE: Type description。Include feat(Features)，fix，doc(Documentation)，build(Engineering)，example(Only used to modify examples/*)，chore(a routine task)
- 【optional】SCOPE: Affected modules，for examples, button. Generally used to feat, fix
- 【required】DESCRIPTION: Brief description of the content, try to use English as you can
- 【optional】ISSUE: Change the associated issue number. Generally used to feat, fix

## Create a commit
Large function development should be carried out in a separate branch. The process of new function addition or problem repair is as follows:

```
$ git checkout -b [feat_branch/fix_branch] origin/dev

# dev

$ git add .
$ git commit -m "describ sth." # The submission description is subject to the development guide
$ git pull --rebase origin dev

# merge

$ git push origin [feat_branch/fix_branch]
```
