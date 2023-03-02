import MiniApp from './program';
import type { IPluginContext } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'miniapp',
    useConfigName: 'mini',
    async fn({ config }) {
      const program = new MiniApp(ctx, config);
      await program.start();
    },
  });
};
