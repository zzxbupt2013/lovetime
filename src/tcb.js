import tcb from "@cloudbase/js-sdk";

window._tcbEnv = window._tcbEnv || {};
export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

export const getApp = () => {
  const app = tcb.init({
    env:'hello-cloudbase-1g7j710md34f90b5',
    region: region,
  });

  app.auth({
    persistence: "local",
  });

  return app;
};
