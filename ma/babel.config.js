module.exports = { //cnpm install babel-plugin-component -D
        "presets": [
            '@vue/cli-plugin-babel/preset'
        ],
        "plugins": [ //吧plugins这段按需加载的代码引入，npm run build 打包会变小，吧plugins这段按需加载的代码删除，npm run build 打包会变大
                [
                    "component",
                    {
                        "libraryName": "element-ui",
                        "styleLibraryName": "theme-chalk"
                    }
                ]
            ]
            // plugins: [
            //     [
            //         "import",
            //         {
            //             libraryName: 'element-plus',
            //             customStyleName: (name) => {
            //                 // 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
            //                 // 如果你需要使用 scss 源文件，把文件结尾的扩展名从 `.css` 替换成 `.scss` 就可以了
            //                 return `element-plus/lib/theme-chalk/${name}.css`;
            //             },
            //         },
            //     ],
            // ],
    }
    // const app = createApp(App)
    // app.use(ElementPlus)
    // app.mount('#app')