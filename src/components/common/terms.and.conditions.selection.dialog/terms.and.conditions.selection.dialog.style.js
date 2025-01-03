import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    radioBtn: {
        color: '#000000',
        '&.Mui-checked':
        {
            color: '#000',
        }
    },
    linkStyle: {
        textDecoration: 'underline',
        fontWeight: 500
    }
}));
