declare module "matrix-react-sdk" {
    function loadSkin(skinObject: object): void;
    function resetSkin(): void;
    function getComponent(componentName: string): any;
}
