import LogtoClient from "@logto/node";
import { LOGTO_APP_ID, LOGTO_APP_SECRET, LOGTO_ENDPOINT } from "@echoai/utils";

const logto = new LogtoClient({
  appId: LOGTO_APP_ID,
  appSecret: LOGTO_APP_SECRET,
  endpoint: LOGTO_ENDPOINT,
}, {
  navigate: (url: string) => {
    
  },
  storage: {
    getItem: async (key: string) => '',
    setItem: async (key: string, value: string) => {},
    removeItem: async (key: string) => {},
  },
});

export default logto;
