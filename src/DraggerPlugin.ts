import type { App } from "vue";
import { ImagesDragger } from "./components";

export default {
    install: (app: App) => {
        app.component('ImagesDragger', ImagesDragger);
    }
}

export { ImagesDragger };