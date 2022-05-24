export default function (url) {
    const config = useRuntimeConfig();
    if (url.startsWith("/")) {
      return `${config.strapiBaseUri}${url}`;
    }
    return url;
  }
  