import { IconFetcher } from "./IconContext";

// Cache is a dictionary of promises that each resolves to an svg icon
const iconCache: { [name: string]: Promise<string> } = {}
const errorSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>'

export const defaultSvgPath = 'https://punkt-cdn.oslo.kommune.no/latest/icons/'

const downloadIconOrGetFromCache = (name: string, path: string): Promise<string> => {
  // Download and cache icon if not in cache
  if (!iconCache[name] && typeof window.fetch === 'function') {
    iconCache[name] = window.fetch(path + name + '.svg')
      .then((response) => {
        if (!response.ok) {
          // eslint-disable-next-line no-console
          console.error('Missing icon: ' + path + name + '.svg')
          return errorSvg
        }
        return response.text()
      })
      .then((text) => {
        return text;
      })
  }

  // Return the svg promise
  return Promise.resolve(iconCache[name])
};

const defaultIconFetcher : IconFetcher = {
  fetchIcon: async (name: string, path: string | undefined): Promise<string | null> => {
    const iconPath = path || defaultSvgPath
    return downloadIconOrGetFromCache(name, iconPath);
  }
};

export default defaultIconFetcher;
