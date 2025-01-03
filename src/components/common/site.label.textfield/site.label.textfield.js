import "./site.label.textfield.scss";
import React from "react";
import ReactInputMask from "react-input-mask";
import { Badge, Icon, IconButton, InputBase, TextField, Typography } from "@mui/material";
import { useStyles } from "./site.label.textfield.style";
import { Paper, InputAdornment, CircularProgress } from "@mui/material";
import clsx from "clsx";
import { regex } from "../../common/utill/regex";
import { IsMobileWidth, IsTabletWidth } from "../../common/utill/utils";
import { useState } from "react";

export default function SiteLabelTextField(props) {
    const {
        classNames,
        maxLength,
        pattern,
        startAdornment,
        responsiveStartAdornment,
        endAdornment,
        label,
        topAdornment,
        execStatus,
        error,
        maskChar,
        value,
        mask,
        placeholder,
        validationType,
        responsiveEndAdornment,
        type,
        autoFocus,
        multiline,
        ref,
        showSteric,
        message
    } = props;
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    const classes = useStyles();
    const onChange = (event) => {
        if (validationType === "ALPHANUMERIC") {
            if (
                regex.alphanumericWithOutSpace.test(event.target.value) ||
                event.target.value === ""
            ) {
                props.onChange(event);
            }
        }
        else if (validationType === "ALPHA_WITH_SPACE") {
            if (
                regex.alphaWithSpace.test(event.target.value) ||
                event.target.value === ""
            ) {
                props.onChange(event);
            }
        }
        else if (validationType === "ALPHANUMERIC_WITH_SPACE") {
            if (
                regex.alphanumericWithSpace.test(event.target.value) ||
                event.target.value === ""
            ) {
                props.onChange(event);
            }
        } else if (validationType === "NUMERIC") {
            if (
                regex.wholeNumber.test(event.target.value) ||
                event.target.value === ""
            ) {
                props.onChange(event);
            }
        } else {
            props.onChange(event);
        }
    };
    //For password 
    const [state, setState] = useState({
        passwordVisibility: false,
    });
    const toggleVisiblity = () => {
        setState({ ...state, passwordVisibility: !state.passwordVisibility });
    };

    return (
        <div id="site-label-text-field" className="w-100">
            {mask && !props.disabled ? (
                <ReactInputMask
                    mask={mask}
                    maskChar={maskChar}
                    placeholder={placeholder}
                    onChange={onChange}
                    alwaysShowMask={false}
                    value={value}
                >
                    {(inputProps) => (
                        <div className="w-100">
                            <div className="d-flex w-100 justify-content-between label">
                                {topAdornment ? (
                                    <Badge badgeContent={showSteric ? <Typography variant='h6' className='d-flex align-items-center text-danger pt-1 pl-2'>*</Typography> : 0} >
                                        <Typography color='primary' variant="body2" className="max-width-content">
                                            <label htmlFor="text-field">
                                                {topAdornment}
                                            </label>
                                        </Typography>
                                    </Badge>
                                ) : (
                                    ""
                                )}
                                {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
                            </div>
                            <Paper
                                classes={{ root: classes.paperRoot }}
                                elevation={0}
                                className={clsx(
                                    classes.paperRoot,
                                    "w-100 border",
                                    mobileWidth && responsiveEndAdornment && "d-flex flex-column", autoFocus && 'selected-paper'
                                )}
                            >
                                {execStatus && execStatus.status === "PENDING" ? (
                                    <div>
                                        <CircularProgress size={50} className="p-3" />
                                    </div>
                                ) : (
                                    <TextField
                                        {...inputProps}
                                        inputRef={ref}
                                        label={null}
                                        disabled={props.disabled ? props.disabled : null}
                                        variant="outlined"
                                        autoFocus={autoFocus ? autoFocus : false}
                                        inputProps={{
                                            maxLength: maxLength,
                                            pattern: pattern,
                                        }}
                                        InputProps={{
                                            classes: {
                                                inputAdornedEnd: classes.endAdn,
                                                notchedOutline: classes.noBorder,
                                                input: clsx(!(mobileWidth || tabletWidth) && classes.input, (mobileWidth || tabletWidth) && classes.mobileInput),
                                                disabled: classes.disabled,
                                            },
                                            startAdornment: startAdornment || responsiveStartAdornment ? (
                                                <InputAdornment
                                                    color="secondary"
                                                    className="h-100 pl-1 pr-1"
                                                    position="start"
                                                    onClick={props.onClick}
                                                >
                                                    {startAdornment && !mobileWidth
                                                        ? startAdornment
                                                        : responsiveStartAdornment
                                                            ? null
                                                            : startAdornment}
                                                </InputAdornment>
                                            ) : null,
                                            endAdornment: (
                                                <InputAdornment className="h-100" position="end">
                                                    {endAdornment && !mobileWidth
                                                        ? endAdornment
                                                        : responsiveEndAdornment
                                                            ? ""
                                                            : endAdornment}
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                )}
                                {mobileWidth ? responsiveEndAdornment : null}
                            </Paper>
                        </div>
                    )}
                </ReactInputMask>
            ) : type === 'password' ?
                <div className="w-100">
                    <div className="d-flex w-100 justify-content-between label">
                        {topAdornment ? (
                            <Badge badgeContent={showSteric ? <Typography variant='h6' className='d-flex align-items-center text-danger pt-1 pl-2'>*</Typography> : 0} >
                                <Typography color='primary' variant="body2" className="max-width-content">
                                    <label htmlFor="text-field">
                                        {topAdornment}
                                    </label>
                                </Typography>
                            </Badge>
                        ) : (
                            ""
                        )}
                        {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
                    </div>
                    <Paper elevation={0} className={clsx(`w-100 ${classes.paperRoot} ${autoFocus && classes.selectedPaper}`)}>
                        {startAdornment ? (
                            <Typography color="secondary" className="h-100 d-flex justify-content-center align-items-center pl-3 pr-1" >
                                {startAdornment}
                            </Typography>
                        ) : null
                        }
                        <InputBase
                            inputRef={ref}
                            type={state.passwordVisibility ? "text" : "password"}
                            className={clsx(`${classes.passwordInput}`)}
                            // inputProps={{ "aria-label": "username" }}
                            onChange={onChange}
                            placeholder={placeholder}
                            tabIndex={2}
                            inputProps={{
                                maxLength: maxLength,
                                pattern: pattern,
                            }}
                            value={value}
                            autoFocus={autoFocus ? autoFocus : false}

                        />
                        <IconButton
                            onClick={toggleVisiblity}
                            color="default"
                            className={classes.iconButton}
                            size="small"
                        >
                            <Icon
                                classes={{ root: classes.iconSize }}
                                color="default"
                                className={clsx(
                                    !state.passwordVisibility && "fa fa-eye-slash",
                                    state.passwordVisibility && "fa fa-eye"
                                )}
                            ></Icon>
                        </IconButton>
                    </Paper>
                </div>
                :
                (
                    <div className="w-100">
                        <div className="d-flex w-100 justify-content-between label">
                            {topAdornment ? (
                                <Badge badgeContent={showSteric ? <Typography variant='h6' className='d-flex align-items-center text-danger pt-1 pl-2'>*</Typography> : 0} >
                                    <Typography color='primary' variant="body2" className="max-width-content">
                                        <label htmlFor="text-field">
                                            {topAdornment}
                                        </label>
                                    </Typography>
                                </Badge>
                            ) : (
                                ""
                            )}
                            {error ? <Typography variant="caption" className="text-danger text-right">{error}</Typography> : null}
                        </div>
                        <Paper
                            elevation={0}
                            classes={{ root: multiline ? classes.textArea : props.disabled ? classes.disabled : classes.paperRoot }}
                            className={clsx(
                                "w-100",
                                mobileWidth && responsiveEndAdornment && "d-flex flex-column", autoFocus && 'selected-paper'
                            )}
                        >
                            {
                                <div className="d-flex align-items-center w-100">
                                    {execStatus && execStatus.status === "PENDING" ? (
                                        <div className="pr-4">
                                            <CircularProgress size={45} className="p-3" />
                                        </div>
                                    ) : null}
                                    <div className="flex-grow-1 w-100">
                                        {props.disabled === true ? (
                                            <div
                                                className={clsx(
                                                    "d-flex align-items-center pl-2 pt-2 pb-2",
                                                    classNames,
                                                    endAdornment && "justify-content-between"
                                                )}
                                                style={{
                                                    minHeight: "45px",
                                                }}
                                            >
                                                <div>{value}</div>
                                                <div>
                                                    {endAdornment && !mobileWidth
                                                        ? endAdornment
                                                        : responsiveEndAdornment
                                                            ? null
                                                            : endAdornment
                                                                ? endAdornment
                                                                : null}
                                                </div>
                                            </div>
                                        ) : (
                                            <TextField
                                                inputRef={ref}
                                                onBlur={props.onBlur}
                                                value={value}
                                                placeholder={placeholder}
                                                label={null}
                                                disabled={props.disabled ? props.disabled : null}
                                                variant="outlined"
                                                autoFocus={autoFocus ? autoFocus : false}
                                                inputProps={{
                                                    maxLength: maxLength,
                                                    pattern: pattern,
                                                }}
                                                onChange={onChange}
                                                multiline={multiline}
                                                InputProps={{
                                                    classes: {
                                                        //inputAdornedStart : classes.startAdn,
                                                        inputAdornedEnd: classes.endAdn,
                                                        //inputAdornedStart: classes.paddingLeft,
                                                        notchedOutline: classes.noBorder,
                                                        input: classes.input,
                                                        disabled: classes.disabled,
                                                    },
                                                    startAdornment:
                                                        startAdornment || responsiveStartAdornment ? (
                                                            <InputAdornment
                                                                color="secondary"
                                                                className="h-100 pl-1 pr-1"
                                                                position="start"
                                                            >
                                                                {startAdornment && !mobileWidth
                                                                    ? startAdornment
                                                                    : responsiveStartAdornment
                                                                        ? null
                                                                        : startAdornment}
                                                            </InputAdornment>
                                                        ) : null,
                                                    endAdornment: (
                                                        <InputAdornment className="h-100" position="end">
                                                            {endAdornment && !mobileWidth
                                                                ? endAdornment
                                                                : responsiveEndAdornment
                                                                    ? null
                                                                    : endAdornment}
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        {mobileWidth ? responsiveEndAdornment : null}
                                    </div>
                                </div>
                            }
                        </Paper>
                    </div>
                )}
            {message ? <Typography variant="caption" className="text-muted text-left">{message}</Typography> : null}
        </div>
    );
}
