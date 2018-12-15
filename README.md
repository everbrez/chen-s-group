# Chen's Group
> 此项目为陈华课题组网站项目

## Contribution

### designs 设计稿
`ftp://incoming/16hope/**/project/chen's group/`

### demand
1. ie9+
2. responsive design 响应式
3. 中英文版本

### download packages
`npm i`

### dev server
`npm start`

### structure
```
Chen's Group
│  .gitignore
│  index.html // 索引文件，dev server返回默认网页，重构网页时可以添加自己的网页链接进去，方便开发
│  package.json
│  README.md
├─html  // 首页、栏目页、内容页html文件
│      index.html
├─images
│      slider1.png
│      slider2.png
├─snippets // 类似于模板文件，可以重复使用的代码可以在此处创建，方便其他html文件引用
│      template.html
└─styles // 各网页的css文件
        common.css // 通用css文件，一般包括header、nav、footer以及栏目页的sidebar、breadcrumb等
        index.css // 首页css文件
        normalize.css // reset css文件
```