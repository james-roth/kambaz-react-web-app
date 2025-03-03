import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import Counter from './Counter';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariables';
import ArrayStateVariable from './ArrayStateVariable';
import BooleanStateVariables from './BooleanStateVariables';
import EventObject from './EventObject';
import ParentStateComponent from './ParentStateComponent';

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }    

    return (
        <div>
            <h2>Lab 4</h2>
            <ClickEvent />
            <EventObject />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <Counter />
            <StringStateVariables />
            <DateStateVariable />
            <BooleanStateVariables />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
}