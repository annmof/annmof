export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'annmof',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'tac-script1',
        src: 'https://cdn.jsdelivr.net/gh/AmauriC/tarteaucitron.js@20210329/tarteaucitron.min.js'
      },
      {
        hid: 'tac-script2',
        innerHTML: `
          tarteaucitron.init({
            "privacyUrl": "", /* Privacy policy url */
    
            "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
            "cookieName": "tarteaucitron", /* Cookie name */
        
            "orientation": "bottom", /* Banner position (top - bottom) */
          
            "groupServices": false, /* Group services by category */
                              
            "showAlertSmall": false, /* Show the small banner on bottom right */
            "cookieslist": false, /* Show the cookie list */
                              
            "closePopup": false, /* Show a close X on the banner */
    
            "showIcon": true, /* Show cookie icon to manage cookies */
            //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
            "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */
    
            "adblocker": false, /* Show a Warning if an adblocker is detected */
                              
            "DenyAllCta" : true, /* Show the deny all button */
            "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
            "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
                              
            "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
    
            "removeCredit": false, /* Remove credit link */
            "moreInfoLink": true, /* Show more info link */
    
            "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
            "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */
    
            //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
                              
            "readmoreLink": "", /* Change the default readmore link */
    
            "mandatory": false, /* Show a message about mandatory cookies */
          });
        `
      },
      {
        hid: 'tac-script3',
        innerHTML: `
          tarteaucitron.user.gtagUa = 'UA-152961193-1';
          tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */ };
          (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
        `,
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
  }
}
