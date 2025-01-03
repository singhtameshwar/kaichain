import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    cardContent: {
        // backgroundColor: '#F6F3FF',
        // height: '170px'
    },
    cardMedia: {
        // objectFit: 'cover',
        height: "100%",
        width: '60px',
        // background: theme.palette.gradientColor3.main
    },
    cardMediaOnTablet: {
        // objectFit: 'cover',
        height: "100%",
        width: '60px',
        // background: theme.palette.gradientColor3.main
    },
    cardMediaOnMobile: {
        // objectFit: 'cover',
        height: "100%",
        width: '60px',
        // background: theme.palette.gradientColor3.main
    },
    cardAction: {
        // backgroundColor: '#F6F3FF'
    },
    textStyle: {
        color: theme.palette.dark.main,
    },
    btn: {
        backgroundColor: theme.palette.purpleColor.normal,
        color: theme.palette.background.paper,
        textTransform: 'none',
        width: ' 140px',
        height: '44px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
        borderRadius: '5px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '20px',
        '&:hover': {
            backgroundColor: theme.palette.purpleColor.normal,
            color: theme.palette.background.paper,
            border: `1px solid ${theme.palette.purpleColor.normal}`
        }
    }
}));
