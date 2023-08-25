declare global {
  interface Window {
    fbAsyncInit(): void;
  }
}
declare let FB: any;

import { h, defineComponent, onMounted, PropType } from "vue";

// https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin#steps
export interface NuxtFacebookChatOptions {
  pageId: string;
  elementId?: string;
  locale?: string;
  version?: string;
  themeColor?: string;
  loggedInGreeting?: string;
  loggedOutGreeting?: string;
  greetingDialogDisplay?: "show" | "fade" | "hide" | "icon";
  greetingDialogDelay?: string;
  ref?: string;
}

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<NuxtFacebookChatOptions>,
      required: true,
    },
  },
  setup(props) {
    const fbProps = {
      class: "fb-customerchat",
      id: props.options.pageId || "",
      theme_color: props.options.themeColor || "#333333",
      logged_in_greeting: props.options.loggedInGreeting || "",
      logged_out_greeting: props.options.loggedOutGreeting || "",
      greeting_dialog_display: props.options.greetingDialogDisplay || "show",
      greeting_dialog_delay: props.options.greetingDialogDelay || "",
      ref: props.options.ref || "",
    };

    const fbLocale = props.options.locale || "en_US";
    const fbVersion = props.options.version || "v17.0";

    console.log({ fbProps, fbLocale, fbVersion });

    function initFacebookChat() {
      window.fbAsyncInit = function () {
        const chatbox = document.getElementById(fbProps.id);
        if (chatbox) {
          chatbox.setAttribute("page_id", fbProps.id);
          chatbox.setAttribute("attribution", "biz_inbox");
          FB.init({
            xfbml: true,
            version: fbVersion,
          });
        }
      };
      addFacebookSDK();
    }

    function addFacebookSDK() {
      const d = document;
      const s = "script";
      const id = "facebook-jssdk";
      const js = d.createElement(s);
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js.id = id;
      js.src = `https://connect.facebook.net/${fbLocale}/sdk.js`;
      fjs.parentNode?.insertBefore(js, fjs);
    }

    onMounted(() => {
      initFacebookChat();
    });

    return () => h("div", fbProps);
  },
});
