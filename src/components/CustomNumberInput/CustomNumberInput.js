
import React from 'react';
import InputNumber from 'rc-input-number';
import './style.scss'



class CustomNumberInput extends React.Component {
    state = {
        disabled: false,
        readOnly: false,
        value: 0,
    };

    onChange = value => {
        console.log('onChange:', value);
        this.setState({ value });
    };

    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    };

    toggleReadOnly = () => {
        this.setState({
            readOnly: !this.state.readOnly,
        });
    };

    render() {
        const upHandler = <div className='increase-button'>+</div>;
        const downHandler = <div className='decrease-button'>-</div>;
        return (
            <div className='customInput-container' style={{ margin: 10 }}>
                <InputNumber
                    aria-label="Number input example that demonstrates custom styling"
                    min={0}
                    max={100}

                    value={this.state.value}
                    style={{ width: 80 }}
                    readOnly={this.state.readOnly}
                    onChange={this.onChange}
                    disabled={this.state.disabled}
                    upHandler={upHandler}
                    downHandler={downHandler}
                />
            </div>
        );
    }
}

export default CustomNumberInput;