import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.primary.main,
        // minHeight: '170px'
    },
    cardWhite: {
        backgroundColor: theme.palette.background.paper
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
    textStyle1: {
        color: theme.palette.secondary.main,
    },
    textStyle: {
        color: theme.palette.background.paper,
    },
}));
