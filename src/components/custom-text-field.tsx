import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTextField = styled(TextField)({
    '& label': {
        color: '#504C66',
    },
    '& label.Mui-focused': {
        color: '#FFF',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#504C66',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#504C66',
        },
        '&:hover fieldset': {
            borderColor: '#504C66',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#504C66',
        },
        '& .MuiInputBase-input': {
            color: '#FFF',
        },
    },

});