import LogtoClient from "@logto/node";
import { LOGTO_APP_ID, LOGTO_APP_SECRET, LOGTO_ENDPOINT } from "@echoai/utils";

const logto = new LogtoClient({
  appId: LOGTO_APP_ID,
  appSecret: LOGTO_APP_SECRET,
  endpoint: LOGTO_ENDPOINT,
}, {
  navigate: (url: string) => {
    window.location.href = url;
  },
  storage: {
    getItem: async (key: string) => localStorage.getItem(key),
    setItem: async (key: string, value: string) => localStorage.setItem(key, value),
    removeItem: async (key: string) => localStorage.removeItem(key),
  },
});

export default logto;
