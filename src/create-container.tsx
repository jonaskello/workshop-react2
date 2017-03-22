import * as React from "react";
import * as Store from "./store";
import { RootState } from "./reducer";

export function createContainer(component: React.StatelessComponent<any>,
    selectState: (ownProps: any, state: RootState) => any = (a, b) => b): any {

    return class MyContainer extends React.Component<any, any> {

        prevState: any = undefined;

        shouldComponentUpdate(nextProps: { [key: string]: any }): boolean {
            let hasPropsChanged = false;
            for (const propName of Object.keys(this.props)) {
                const nextProp = nextProps[propName];
                const currentProp = this.props[propName];
                if (nextProp !== currentProp) {
                    hasPropsChanged = true;
                    break;
                }
            }
            let hasStateChanged = false;
            const selectedState = selectState(this.props, Store.getState());
            if (selectedState !== this.prevState) {
                hasStateChanged = true;
            }

            if (hasPropsChanged || hasStateChanged) {
                return true;
            }
            else {
                console.log("OPTIMIZED!!");
                return false;
            }
        }

        render() {
            const selectedState = selectState(this.props, Store.getState());
            this.prevState = selectedState;
            const mergedProps = { ...this.props, state: selectedState, dispatch: Store.dispatch };
            return component(mergedProps);
        }


    }
}