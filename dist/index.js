'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pluginPlatformWeapp = require('@tarojs/plugin-platform-weapp');

const PACKAGE_NAME = '@tarojs/plugin-platform-weapp-miniapp';
class MiniApp extends pluginPlatformWeapp.Weapp {
    constructor() {
        super(...arguments);
        this.platform = 'miniapp';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
    }
}

var index = (ctx) => {
    ctx.registerPlatform({
        name: 'miniapp',
        useConfigName: 'mini',
        async fn({ config }) {
            const program = new MiniApp(ctx, config);
            await program.start();
        },
    });
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
