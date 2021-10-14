import {Box, Button, Checkbox} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addText, increment, check1, check2} from "../../store/profile/slices";
import {getCheckboxStatus1, getCheckboxStatus2, getCount, getText} from "../../store/profile/selectors";

export const Profile = () => {

    const dispatch = useDispatch();
    const checkboxStatus1 = useSelector(getCheckboxStatus1, shallowEqual);
    const checkboxStatus2 = useSelector(getCheckboxStatus2, shallowEqual);
    const count = useSelector(getCount, shallowEqual);
    const texts = useSelector(getText, shallowEqual);

    return (
    <Box>
      <h1>Profile</h1>
        <Checkbox checked={checkboxStatus1} onClick={() => { dispatch(check1()); dispatch(check2()); }} />
        <Checkbox checked={checkboxStatus2} onClick={() => { dispatch(check1()); dispatch(check2()); }} />
        <Button onClick={()=>dispatch(increment())}>Count</Button>
        <p>{count}</p>
        <Button onClick={()=>dispatch(addText(prompt()))}>Add Text</Button>
        {texts.map((text, i) => <p key={i}>{text}</p>)}
    </Box>
  )
}