import { makeStyles } from '@mui/styles';
export const useStyle = makeStyles(theme => ({
    appNavbar: {
        background: theme.palette.primary.main,
        // height: '72px',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
    },
    responsiveAppNavbar: {
        background: theme.palette.primary.main,
        height: 'auto',
        left: '0px',
        top: "0px",
        boxShadow: 'none !important',
    },
    toolbar: {
        padding: "0px"
    },

    btn: {
        color: theme.palette.secondary.main,
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px'
    },
    btn2: {
        boxShadow: 'none !important',
        color: '#fff',
        backgroundColor: '#01BABF !important',
        borderRadius: '10px',
        height: '52px',
        fontWeight: 700,
        fontSize: 15,
        '&:hover': {
            background: '#01BABF',
            color: "#fff",
        }
    },
    btnText: {
        fontSize: '14px',
        fontFamily: 'Nunito',
        fontWeight: '500',
        textTransform: 'none',
        fontStyle: 'normal',
    },
    iconStyle: {
        border: `1px solid #5B3BD0`,
    },
    selectStyle: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '19px',
        textAlign: 'center',
        color: '#574D68',
    },
    drawerPaper: {
        background: theme.palette.primary.main,
        marginTop: '60px',
        width: '100%'
    },
    drawerOnTablet: {
        background: theme.palette.primary.main,
        marginTop: '60px',
        width: '240px'
    },
    contentOnTablet: {
        maxWidth: '254px',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 5px',
    },
    contentOnMobile: {
        width: '100%',
        // background: '#D8D8D8',
        boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.15)',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}))
