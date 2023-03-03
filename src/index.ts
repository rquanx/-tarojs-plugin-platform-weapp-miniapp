import MiniApp from './program';
import type { IPluginContext } from '@tarojs/service';

const pushCopy = config => {
  if (!config.copy) {
    config.copy = {};
  }
  if (!config.copy.patterns) {
    config.copy.patterns = [];
  }
  config.copy.patterns.push(
    ...[
      {
        from: 'src/app.miniapp.json',
        to: `${config.outputRoot}/app.miniapp.json`,
      },
      {
        from: 'src/project.miniapp.json',
        to: `${config.outputRoot}/project.miniapp.json`,
      },
    ]
  );
};

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'miniapp',
    useConfigName: 'mini',
    async fn({ config }) {
      pushCopy(config);
      const program = new MiniApp(ctx, config);
      await program.start();
    },
  });
};
