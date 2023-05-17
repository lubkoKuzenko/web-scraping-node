## Fingerprinting Attributes

```ts
const BrowserFingerprintWithHeaders = {
    headers: {
        // Please check file "/http headers/headers order.json to understand what should be here.
    },
    fingerprint:{
        screen: {
            availHeight: number;
            availWidth: number;
            availTop: number;
            availLeft: number;
            colorDepth: number;
            height: number;
            pixelDepth: number;
            width: number;
            devicePixelRatio: number;
            pageXOffset: number;
            pageYOffset: number;
            innerHeight: number;
            outerHeight: number;
            outerWidth: number;
            innerWidth: number;
            screenX: number;
            clientWidth: number;
            clientHeight: number;
            hasHDR: boolean;
        };
        navigator: {
            userAgent: string;
            userAgentData: Record<string, string>;
            doNotTrack: string;
            appCodeName: string;
            appName: string;
            appVersion: string;
            oscpu: string;
            webdriver: string;
            language: string;
            languages: string[];
            platform: string;
            deviceMemory?: number; // Firefox does not have deviceMemory available
            hardwareConcurrency: number;
            product: string;
            productSub: string;
            vendor: string;
            vendorSub: string;
            maxTouchPoints?: number;
            extraProperties: Record<string, string>;
        };
        videoCodecs: Record<string, string>;
        audioCodecs: Record<string, string>;
        pluginsData: Record<string, string>;
        battery?: Record<string, string>;
        videoCard: {
            renderer: string;
            vendor: string;
        };
        multimediaDevices: string[];
        fonts: string[];
    }
}
```
