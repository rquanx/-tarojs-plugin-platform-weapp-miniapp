import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared';
import { hostConfig, components as components$1 } from '@tarojs/plugin-platform-weapp/dist/runtime-utils';

const components = {
// ======== 额外组件 ========
};

// 注入weapp原始hostConfig
mergeReconciler(hostConfig);
// 注入weapp原始组件信息
mergeInternalComponents(components$1);
// 注入额外的组件信息
mergeInternalComponents(components);
//# sourceMappingURL=runtime.js.map
