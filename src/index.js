import WideContentFolder from './components/WideContentFolder/WideContentFolder';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '*/contents',
      component: WideContentFolder,
    },
  ];

  return config;
};

export default applyConfig;
