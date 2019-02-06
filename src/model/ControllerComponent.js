import { PureComponent } from "react";

export default class ControllerComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.isCompMounted = false;
    }

    componentDidMount() {
        this.isCompMounted = true;
        if (this.models) {
            this.models.forEach((model) => model.onChange(this.onModelChange, this));
        }
    }

    componentWillUnmount() {
        this.isCompMounted = false;
        if (this.models) {
            this.models.forEach((model) => model.offChange(this.onModelChange));
        }
    }

    onModelChange() {
        if (this.getStateFromModels && this.isCompMounted) {
            this.setState(this.getStateFromModels());
        }
    }
}
