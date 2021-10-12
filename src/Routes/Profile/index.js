import {Box, Checkbox} from "@material-ui/core";
// import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
    // const [checked1, setChecked1] = useState(false);
    // const [checked2, setChecked2] = useState(false);

    const dispatch = useDispatch();
    const CheckboxChecked1 = useSelector(state => state.checkboxState1);
    const CheckboxChecked2 = useSelector(state => state.checkboxState2);

    return (
    <Box>
      <h1>Profile</h1>
        <Checkbox checked={CheckboxChecked1} onClick={() => {dispatch({type: 'CHECK1'});dispatch({type: 'CHECK2'});}} />
        <Checkbox checked={CheckboxChecked2} onClick={() => {dispatch({type: 'CHECK1'});dispatch({type: 'CHECK2'});}} />
        {/*<Checkbox checked={checked1} onClick={() => {setChecked2(!checked2); setChecked1(!checked1);}} />*/}
        {/*<Checkbox checked={checked2} onClick={() => {setChecked2(!checked2); setChecked1(!checked1);}} />*/}
    </Box>
  )
}