import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared';
import {
  components as WeappComponents,
  hostConfig,
} from '@tarojs/plugin-platform-weapp/dist/runtime-utils';
import { components } from './components';

// 注入weapp原始hostConfig
mergeReconciler(hostConfig);
// 注入weapp原始组件信息
mergeInternalComponents(WeappComponents);
// 注入额外的组件信息
mergeInternalComponents(components);
