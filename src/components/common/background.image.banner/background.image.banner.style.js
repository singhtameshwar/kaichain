import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    header: {
        // height: '672px',
        height: '90vh',
        borderRadius: '0px',
        width:'100%'
    },
    headerOnTablet: {
        // background: theme.palette.gradientColor3.main,
        height: '600px',
        borderRadius: '0px',
    },
    responsiveHeader: {
        // background: theme.palette.gradientColor3.main,
        height: '600px',
        borderRadius: '0px',
    },
    textStyle: {
        color: theme.palette.background.paper,
    },

}));