export class BaseFragment {
    private _container: () => WebdriverIO.Element
    get container(): WebdriverIO.Element {
        return this._container()
    } 
    // @param _container should return element on the page
    constructor(_container: ()=> WebdriverIO.Element) {
    this._container = _container
}

}