import { Weapp } from '@tarojs/plugin-platform-weapp';
export default class MiniApp extends Weapp {
    platform: string;
    runtimePath: string;
    taroComponentsPath: string;
    projectConfigJson: string;
}
