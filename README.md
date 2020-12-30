npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### submodules 使用

## 关联创建子模块
git submodule add <submodule_url>
仓库中新增或修改文件.gitmodules，新增子模块文件夹，其中 .gitmodules为子模块版本信息

## 提交创建的子模块
git commit -m "add submodule xxx"
提交后，在主项目仓库中，会显示出子模块文件夹，并带上其所在仓库的版本号。
其他人clone代码时，如果想要也clone子模块代码，有两种方法：
  1. git clone <父模块git> --recurse-submodules //讲递归的clone子模块
  2. 在父模块中执行 git submodule init
                git submodule update

## 更新子模块
1. 进入子模块目录 执行 git pull origin master
2. 在父模块目录 执行 git submodule foreach 'git pull origin master'

## 删除子模块
git submodule deinit project-sub-1 --force

## 子模块分支
1. 创建时指定 git submodule add -b master <submodule_url>
2. 进入子模块目录 git checkout <分支> 父模块目录 git submodule foreach git pull
