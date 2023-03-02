import { Weapp } from '@tarojs/plugin-platform-weapp';

const PACKAGE_NAME = '@tarojs/plugin-platform-weapp-miniapp';

export default class MiniApp extends Weapp {
  platform = 'miniapp';
  runtimePath = `${PACKAGE_NAME}/dist/runtime`;
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
}
